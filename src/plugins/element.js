import Vue from "vue";
import {
  Scrollbar,
  Menu,
  Aside,
  Table,
  TableColumn,
  Main,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Container,
  Header,
  Button,
  MenuItem,
  TabPane,
  Select,
  Option,
  Radio,
  Tabs,
  Tooltip,
  Form,
  FormItem,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  MessageBox,
  Message,
  Pagination,
  Upload,
  Loading,
  Col,
  Row
} from "element-ui";
import "../element-variables.scss";

// //引入vue组件
[
  Scrollbar,
  Menu,
  Aside,
  Table,
  TableColumn,
  Main,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Dialog,
  Container,
  Header,
  Button,
  MenuItem,
  TabPane,
  Select,
  Option,
  Radio,
  Tabs,
  Tooltip,
  Form,
  FormItem,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Pagination,
  Upload,
  Loading,
  Col,
  Row
].forEach(component => {
  Vue.use(component);
});

// Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
