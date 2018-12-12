import Vue from "vue";

import ReportContainer from "@/common/components/container.vue";
import ReportHeader from "@/common/components/header.vue";
import ReportAside from "@/common/components/aside.vue";
import ReportImg from "@/common/components/img.vue";
// import 'element-ui/lib/theme-chalk/scrollbar.css'

[ReportContainer, ReportHeader, ReportAside, ReportImg].forEach(component => {
  Vue.component(component.name, component);
});
