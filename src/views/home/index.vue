<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reportDexie } from "@/db";
import ImportReport from "@/views/home/importReport.vue";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Button from "primevue/button";

defineOptions({
  name: "Home"
});
const showImport = ref(false); // 导入窗口
const reports = ref([{}]);

const importComplete = () => {
  reportDexie.report.toArray().then(res => {
    reports.value = res;
  });
  showImport.value = false;
};

onMounted(() => {
  reportDexie.report.toArray().then(res => {
    reports.value = res;
    console.log(reports.value);
  });
});
</script>

<template>
  <div>
    <el-button @click="showImport = true">导入</el-button>

    <div class="p-fluid">
      <DataTable
        :value="reports"
        :size="'small'"
        showGridlines
        paginator
        :rows="10"
      >
        <Column field="id" hidden />
        <Column field="name" header="名称" />
        <Column field="date" header="日期" />
        <Column style="flex: 0 0 4rem">
          <template #body="{ data, index }">
            <Button
              link
              type="button"
              size="small"
              @click="() => console.log(data, index)"
            >
              abc
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>
    <ImportReport :is-show="showImport" @complete="importComplete" />
  </div>
</template>
