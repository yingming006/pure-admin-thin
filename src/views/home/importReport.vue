<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { Edit, UploadFilled } from "@element-plus/icons-vue";
import {
  ElMessageBox,
  genFileId,
  UploadInstance,
  UploadProps,
  UploadRawFile
} from "element-plus";
import dayjs from "dayjs";
import { read, utils } from "xlsx";
import { message } from "@/utils/message";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import { reportDexie } from "@/db";

defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
});

const activeStep = ref(1);
const nextStepLoading = ref(false);
const state = reactive({ file: null });

// 成绩表
const initReport = {
  name: null,
  date: null,
  sheetData: null,
  clazzList: null,
  studentList: null,
  subjectList: []
};

const report = reactive<typeof initReport>({
  ...initReport
});

// 文件解析数据
const headers = ref();
const rows = ref();
const subjectScore = ref([{}]);
const editSubjectScore = ref([]);

const uploadRef = ref<UploadInstance>();

const handleExceed: UploadProps["onExceed"] = files => {
  ElMessageBox.confirm(
    state.file ? `文件已选择，继续选择将覆盖，是否继续？` : "",
    "提示",
    {
      type: "warning"
    }
  )
    .then(() => {
      uploadRef.value!.clearFiles();
      const file = files[0] as UploadRawFile;
      file.uid = genFileId();
      uploadRef.value!.handleStart(file);
    })
    .catch(() => {});
};

const importFile: UploadProps["onChange"] = async uploadFile => {
  state.file = uploadFile.raw;
  await importAB(await state.file.arrayBuffer());
};

const importAB = async (ab: ArrayBuffer): Promise<void> => {
  const data = read(ab);
  console.log(data.SheetNames?.[0], "currSheet");
  console.log(data.SheetNames, "sheets");
  console.log(data.Sheets, "workBook");
  report.sheetData = utils.sheet_to_json(data.Sheets[data.SheetNames?.[0]], {
    header: 1,
    raw: false,
    blankrows: false
  });
  console.log(report.sheetData, "sheetData");
  headers.value = report.sheetData[0].map((header: string) => ({
    field: header,
    header: header
  }));
  rows.value = report.sheetData.slice(1).map((row: string[]) => {
    return headers.value.reduce((obj: any, header: any, index: number) => {
      obj[header.field] = row[index];
      return obj;
    }, {});
  });
  console.log(headers.value, "headers");
  console.log(rows.value, "rows");

  report.clazzList = [...new Set(rows.value.map(row => row["班级"]))];
  console.log(report.clazzList, "clazzList");

  report.studentList = [
    ...new Map(
      rows.value.map(student => [
        student["学号"],
        { ["学号"]: student["学号"], ["姓名"]: student["姓名"] }
      ])
    ).values()
  ];
  console.log(report.studentList, "studentList");

  const subjects = Object.keys(rows.value[0]).slice(3);
  subjects.forEach((subject, index) => {
    report.subjectList.push({
      index: index + 3,
      title: subject,
      fullScore: 100
    }); // 加 3 是因为要跳过前两个属性（班级和学号姓名）
    subjectScore.value[0][subject] = "100";
  });

  console.log(report.subjectList, "subjectList");
  console.log(subjectScore.value, "subjectScore");
};

const onScoreRowEditSave = event => {
  let { newData, index } = event;
  subjectScore.value[index] = newData;
};

const nextStep1 = () => {
  try {
    nextStepLoading.value = true;
    if (!state.file) {
      message("请先选择文件", { type: "error" });
      return;
    }

    const lastIndex = state.file.name.lastIndexOf(".");
    if (lastIndex !== -1) {
      report.name = state.file.name.substring(0, lastIndex);
    }
    report.date = dayjs().format("YYYY-MM-DD");

    activeStep.value = ++activeStep.value;
  } finally {
    nextStepLoading.value = false;
  }
};

const backStep1 = () => {
  activeStep.value = --activeStep.value;
};

const emit = defineEmits(["complete"]);
const complete = () => {
  reportDexie.report
    .put({
      name: report.name,
      date: report.date,
      sheetData: JSON.stringify(report.sheetData),
      clazzList: JSON.stringify(report.clazzList),
      studentList: JSON.stringify(report.studentList),
      subjectList: JSON.stringify(report.subjectList),
      deleted: 0
    })
    .then(() => {
      emit("complete");
    });
};

onMounted(() => {
  activeStep.value = 1;
  state.file = null;
  Object.assign(report, initReport);
  headers.value = [];
  rows.value = [];
  subjectScore.value = [{}];
  editSubjectScore.value = [];
});
</script>
<template>
  <el-dialog
    :model-value="isShow"
    title="导入"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="1100"
    top="10vh"
  >
    <el-steps class="mb-4" :space="200" :active="activeStep" simple>
      <el-step title="导入文件" :icon="UploadFilled" />
      <el-step title="设置" :icon="Edit" />
    </el-steps>
    <el-divider border-style="solid" />

    <!--  导入成绩 start  -->
    <el-upload
      v-if="activeStep === 1"
      ref="uploadRef"
      :before-upload="() => false"
      :auto-upload="false"
      :limit="1"
      accept=".xlsx, .xls"
      drag
      :on-change="importFile"
      :on-exceed="handleExceed"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖动文件到此处，或者 <em>点击选择</em></div>
    </el-upload>
    <!--  导入成绩 end  -->

    <!--  设置成绩 start  -->
    <el-card v-else-if="activeStep === 2">
      <el-form inline>
        <el-row>
          <el-form-item label="名称">
            <el-input v-model="report.name" />
          </el-form-item>
          <el-form-item label="时间">
            <el-date-picker
              v-model="report.date"
              type="date"
              value-format="x"
              @change="() => console.log(report.date)"
            />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="科目满分设置" />
        </el-row>
        <div class="p-fluid">
          <DataTable
            v-model:editingRows="editSubjectScore"
            :value="subjectScore"
            :size="'small'"
            showGridlines
            editMode="row"
            dataKey="index"
            @row-edit-save="onScoreRowEditSave"
          >
            <Column
              v-for="subject in report.subjectList"
              :key="subject.title"
              :field="subject.title"
              :header="subject.title"
            >
              <template #editor="{ data, field }">
                <InputText v-model="data[field]" />
              </template>
            </Column>
            <Column
              :rowEditor="true"
              style="width: 10%; min-width: 8rem"
              bodyStyle="text-align:center"
            />
          </DataTable>
        </div>
        <el-row>
          <el-form-item label="学成成绩预览" />
        </el-row>
        <div class="p-fluid">
          <DataTable
            :value="rows"
            :size="'small'"
            showGridlines
            paginator
            :rows="3"
          >
            <Column
              v-for="header in headers"
              :key="header.field"
              :field="header.field"
              :header="header.field"
            />
          </DataTable>
        </div>
      </el-form>
    </el-card>
    <!--  设置成绩 end  -->

    <template #footer>
      <el-button
        v-if="activeStep == 1"
        :loading="nextStepLoading"
        @click="nextStep1"
      >
        下一步
      </el-button>
      <el-button v-if="activeStep == 2" @click="backStep1"> 上一步 </el-button>
      <el-button v-if="activeStep == 2" @click="complete"> 完成 </el-button>
    </template>
  </el-dialog>
</template>
<style>
.p-datatable.p-datatable-gridlines .p-paginator-bottom {
  border-width: 0 !important;
}
</style>
