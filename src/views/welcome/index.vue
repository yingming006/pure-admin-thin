<script setup lang="ts">
import { reactive, ref } from "vue";
import { Edit, Histogram, UploadFilled } from "@element-plus/icons-vue";
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
import Pagination from "@/components/Pagination/index.vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import ArrowUp from "@iconify-icons/ep/arrow-up-bold";
import EpArrowDown from "@iconify-icons/ep/arrow-down-bold";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

defineOptions({
  name: "Welcome"
});

const showImport = ref(false); // 导入窗口
const activeStep = ref(1);
const nextStepLoading = ref(false);
const state = reactive({ file: null });

// 成绩表
const report = reactive({
  name: null,
  date: null,
  sheetData: null
});

// 文件解析数据
const headers = ref();
const rows = ref();

const isExpand = ref(false); // 学生成绩是否折叠

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
  const sheetData: any[] = utils.sheet_to_json(
    data.Sheets[data.SheetNames?.[0]],
    { header: 1, raw: false }
  );
  console.log(sheetData, "sheetData");
  report.sheetData = sheetData;
  headers.value = sheetData[0].map((header: string) => ({
    field: header,
    header: header
  }));
  rows.value = sheetData.slice(1).map((row: string[]) => {
    return headers.value.reduce((obj: any, header: any, index: number) => {
      obj[header.field] = row[index];
      return obj;
    }, {});
  });
  console.log(headers.value, "headers");
  console.log(rows.value, "rows");
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

const nextStep2 = () => {
  activeStep.value = ++activeStep.value;
};

const backStep2 = () => {
  activeStep.value = --activeStep.value;
};
</script>

<template>
  <div>
    <h1>Pure-Admin-Thin（非国际化版本）</h1>

    <el-button @click="showImport = true">导入</el-button>

    <el-dialog
      v-model="showImport"
      title="导入"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="1100"
      top="10vh"
    >
      <el-steps class="mb-4" :space="200" :active="activeStep" simple>
        <el-step title="导入文件" :icon="UploadFilled" />
        <el-step title="设置" :icon="Edit" />
        <el-step title="计算" :icon="Histogram" />
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
        <div class="el-upload__text">
          拖动文件到此处，或者 <em>点击选择</em>
        </div>
      </el-upload>
      <!--  导入成绩 end  -->

      <!--  设置成绩 start  -->
      <el-card v-else-if="activeStep === 2">
        <el-form inline>
          <el-form-item label="名称">
            <el-input v-model="report.name" />
          </el-form-item>
          <el-form-item label="时间">
            <el-date-picker v-model="report.date" type="date" />
          </el-form-item>
          <el-form-item label="预览">
            <el-button
              link
              type="primary"
              :icon="useRenderIcon(isExpand ? EpArrowDown : ArrowUp)"
              @click="isExpand = !isExpand"
            >
              {{ isExpand ? "展开" : "折叠" }}
            </el-button>
          </el-form-item>
          <div v-if="!isExpand" style="height: 200px">
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
                :header="header.header"
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
        <el-button v-if="activeStep == 2" @click="backStep1">
          上一步
        </el-button>
        <el-button v-if="activeStep == 2" @click="nextStep2">
          下一步
        </el-button>
        <el-button v-if="activeStep == 3" @click="backStep2">
          上一步
        </el-button>
        <el-button v-if="activeStep == 3" @click="showImport = false">
          完成
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style>
.p-datatable.p-datatable-gridlines .p-paginator-bottom {
  border-width: 0 !important;
}
</style>
