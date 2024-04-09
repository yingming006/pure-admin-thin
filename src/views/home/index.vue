<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reportDexie } from "@/db";
import ImportReport from "@/views/home/importReport.vue";

defineOptions({
  name: "Home"
});
const showImport = ref(false); // 导入窗口
const reports = ref([]);

const importComplete = () => {
  reportDexie.report.toArray().then(res => {
    reports.value = res;
  });
  showImport.value = false;
};

onMounted(() => {
  reportDexie.report.toArray().then(res => {
    reports.value = res;
  });
});
</script>

<template>
  <div>
    <el-button @click="showImport = true">导入</el-button>

    <el-row v-for="(report, index) in reports" :key="index">
      <el-text>{{ report.name }}</el-text>
    </el-row>
    <ImportReport :is-show="showImport" @complete="importComplete" />
  </div>
</template>
