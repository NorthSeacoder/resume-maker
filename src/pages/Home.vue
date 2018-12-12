<template>
  <el-container v-loading.fullscreen.lock="fullscreenLoading"
                element-loading-spinner="report_loading">
    <el-container direction="vertical">
      <!--头部 start-->
      <el-header>
        <div class="per_high">
          <div class="header_tit">
            <i class="el-file house"></i>
            <span v-text="resumeName"
                  class="font16 ml10 font-wei"></span>
            <!-- <el-input v-model="reportName" clearable></el-input> -->
          </div>
          <div class="fr txt-right mr170">
            <el-button class="mr10"
                       id="pcreportedit_A01_01"
                       @click="shareResume">分享</el-button>
            <el-button class="mr10"
                       :disabled="!hasComplete"
                       @click="print">打印</el-button>
            <el-button class="mr10"
                       :disabled="!hasComplete"
                       @click="downLoad">下载</el-button>
            <el-button type="primary"
                       @click="edit">编辑</el-button>
          </div>
        </div>
      </el-header>
      <!--头部 end-->
      <!--内容区 start-->
      <el-main>
        <div class="main_po">
          <!-- 主要内容 -->
          <el-scrollbar class="curedit mraside"
                        v-loading="loading"
                        element-loading-spinner="report_loading">
            <resume ref="content">
            </resume>
          </el-scrollbar>
          <!-- 侧边栏 -->
          <div class="report_aside">
            <ul class="report_nav font14">
              <li v-for="(item,index) in ['a','b']"
                  :key="index"
                  class="on"
                  @click="changeRoute(item.type)">
                <span class="el-radio__inner"></span>{{item}}
              </li>
            </ul>
            <div class="module_part mt30 font12">
              <el-checkbox :v-model="false"
                           @change="setVisible(item)"
                           v-for="(item,index) in ['a1','b1']"
                           :key="index"
                           :value="item"
                           :label="item"></el-checkbox>
            </div>
            <div class="txt-center mt40">
              <el-select v-model="opType"
                         @change="save"
                         class="rep_check_lay"
                         popper-class="rep_check_layp">
                <el-option value=""
                           label="保存报告"
                           :disabled="true"
                           style="display:none;">保存报告</el-option>
                <el-option value="update"
                           label="更新">更新</el-option>
                <el-option value="save"
                           label="另存为">另存为</el-option>
              </el-select>
            </div>
            <!-- <div class="txt-center mt40"
                >
              <el-button type="primary"
                         v-on:click="save"
                         :disabled="!hasComplete"
                         class="el-button--red">保存至报告帮</el-button>
            </div>
            <div v-if="dynamic"
                 class="clearfix mt10 plr30 font12 gray6">
              <span class="fl">*</span>
              <p class="ml10">已保存的报告可至报告帮编辑查看</p>
            </div> -->
          </div>
        </div>
      </el-main>
      <!--内容区 end-->

    </el-container>
  </el-container>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import resume from '@/components/resume.vue';

export default {
  name: 'home',
  components: { resume },
  data() {
    return {
      fullscreenLoading: false,
      hasComplete: true,
      loading: false,
      resumeName: 'demo',
      opType: ''
    };
  },
  methods: {
    edit() {},
    downLoad() {},
    print() {},
    shareResume() {},
    save() {}
  }
};
</script>
