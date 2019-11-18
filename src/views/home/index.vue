<template>
  <div class="home">
    <div class="welcomeWorld">
      欢迎回来:
      {{userName}}
    </div>
    <div class="userInfoList">
      <div>
        <span>账户:</span>
        <el-input v-model="userName" disabled></el-input>
      </div>
      <div>
        <span>职位:</span>
        <el-input v-model="userRole" disabled></el-input>
      </div>
      <div>
        <span>权限等级:</span>

        <el-input v-model="userGrade" disabled></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userName: "admin001",
      userGrade: "1级",
      userRole: "管理员"
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.userName = this.$store.state.userInfo.userName;
      this.userGrade = this.$store.state.userInfo.userGrade;
      this.userRole = this.$store.state.userInfo.userRole;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;

  .welcomeWorld {
    font-size: 24px;
    font-weight: 600;
  }
  .userInfoList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div {
      display: flex;
      width: 600px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 40px;
      span {
        display: inline-block;
        width: 100px;
        height: 40px;
      }
    }
  }
}

.el-header {
  background-color: $base_color;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: $base_color;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
