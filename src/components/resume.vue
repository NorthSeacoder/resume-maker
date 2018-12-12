<template>
  <div class="report font14 report_m print-content curedit">
    <page v-for="(element,index) in [1,2,3]"
          :key="index"
          :ref="element.pageId"></page>
  </div>
</template>

<script>
import page from './page';
export default {
  components: {
    page
  }
};
</script>

<style scoped>
</style>