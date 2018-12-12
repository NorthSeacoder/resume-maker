<template>
  <el-header>
    <div class="per_high txt-right">
      <div class="user_head">
        <img v-if="$store.state.user.info.profileUrl"
             :src="$store.state.user.info.profileUrl" />
        <img v-else
             src="@/assets/logo.png" />
      </div>
      <el-dropdown class="cur-pointer"
                   trigger="click">
        <span class="el-dropdown-link">
          {{$store.state.user.info.agentName}}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>账号信息</el-dropdown-item> -->
          <el-dropdown-item>
            <a href="/passport/loginOut">退出登录</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'report-header'
};
</script>

<style>
</style>
