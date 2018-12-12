<template>
  <div class="report_module"
       v-loading="loading"
       element-loading-spinner="report_loading">
    <div class="wrapper">
      <!--标题 start-->
      <div class="clearfix d_report_tit">
        <div class="page_title fl">
          <h2 class="fl">demoTitle</h2>
        </div>
        <div class="fr font14"></div>
      </div>
      <!--标题 end-->
      <HelloWorld></HelloWorld>
      <!--底部 start v-if="pageData.pageOrder===pagecount"-->
      <div class="d_bottom_box clearfix d_bor_t">
        <div class="fl mr20">
          <div class="d_report_erweima">
            <!-- 二维码 v-if="$store.state.report.imgSrc"-->
            <!-- <img :src="$store.state.report.imgSrc" /> -->
          </div>
          <p class="txt-center font12">demo</p>
        </div>
        <div class="font12 gray7 paragraph fr wid_600 mt10">免责申明：</div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default {
  components: { HelloWorld },
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style scoped>
</style>