<template>
  <!--侧边 start-->
  <el-aside width="200px">
    <div class="per_high">
      <div class="logo">
        <img src="@/assets/logo.png" />
      </div>
      <el-menu class="el-menu-vertical-demo"
               :default-active="active">
        <el-menu-item index="worktop"
                      @click="worktop">
          <i class="icon_work"></i>
          <span slot="title">工作台</span>
        </el-menu-item>
        <el-menu-item index="reportList-shop"
                      @click="reportList('shop')">
          <i class="icon_shopreport"></i>
          <span slot="title">商铺报告</span>
        </el-menu-item>
        <el-menu-item index="reportList-office"
                      @click="reportList('office')">
          <i class="icon_buildreport"></i>
          <span slot="title">写字楼报告</span>
        </el-menu-item>
        <el-menu-item index="reportList-house"
                      @click="reportList('house')">
          <i class="icon_house"></i>
          <span slot="title">住宅报告</span>
        </el-menu-item>
        <!-- <el-menu-item index="userinfo">
                    <i class="icon_myid"></i>
                    <span slot="title">我的账号</span>
                </el-menu-item> -->
      </el-menu>
      <div class="logo_b">
        <img src="@/assets/logo.png" />
      </div>
    </div>
  </el-aside>
  <!--侧边 end-->
</template>

<script>
export default {
  name: "report-aside",
  props: {
    active: {
      type: String,
      default: 'worktop'
    }
  },
  watch: {
    /**
     * 监听菜单变化
     * * */
    active(newVal) {
      const self = this;
      if (newVal) {
        self.active = newVal;
      }
    }
  },
  methods: {
    worktop() {
      this.$router.push({ name: 'worktop' });
    },
    reportList(reportType) {
      console.log(1);
      this.$router.push({ name: 'reportlist', params: { reportType } });
    }
  }
};
</script>

<style>
</style>
