<template>
  <div class="header">
    <div class="header-icon">
      <i class="el-icon-s-grid"></i>
      审核管理系统
    </div>
    <div class="personDo">
      <div class="infoIcon">
        <el-badge :value="infoTimes" class="infoIcon-item">
          <i class="el-icon-message-solid"></i>
        </el-badge>
      </div>
      <div class="userIcon" @click="isUserShow=!isUserShow">
        <i class="el-icon-user-solid"></i>
        <span>{{$store.state.userInfo.userName}}</span>
        <i :class="{'el-icon-caret-bottom':!isUserShow,'el-icon-caret-top':isUserShow}" />
        <ul class="userShow" :class="{'userShow-active':isUserShow}" @click="handleUserDo">
          <li>个人中心</li>
          <li>修改密码</li>
          <li>更换账户</li>
        </ul>
      </div>
      <div class="backIcon" @click="handleBack">
        安全退出
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUserShow: false,

      //用户信息
      infoTimes: "10", //待处理事件
      userName: "未登录", //登录用户名

      infoDo: ["个人中心", "修改密码", "更换账户"]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.infoTimes = this.$store.state.userInfo.infoTimes;
      this.userName = this.$store.state.userInfo.userName;
    },
    handleBack() {
      // this.$store.state.token = "";
      this.$router.push({ path: "/login" });
    },
    handleUserDo(e) {
      console.dir(e.target.innerHTML);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .header-icon {
    font-size: 16px;
    i {
      width: 24px;
      text-align: center;
    }
  }
  .personDo {
    display: flex;
    .infoIcon {
      cursor: pointer;
      width: 40px;
      i {
        width: 24px;
        height: 24px;
        font-size: 20px;
      }
      .infoIcon-item {
        ::v-deep .el-badge__content.is-fixed {
          top: 18px;
          right: 15px;
        }
      }
    }
    .userIcon {
      margin-left: 10px;
      // width: 100px;
      cursor: pointer;
      position: relative;
      span {
        display: inline-block;
        text-align: center;
        margin-left: 5px;
        font-size: 14px;
      }
      i {
        width: 20px;
        height: 20px;
        text-align: center;
      }
      .userShow {
        width: 100%;
        position: absolute;
        top: 60px;
        right: 0;
        max-height: 0;
        transition: max-height 0.1s;
        overflow: hidden;
        background: #fff;
        border: 1px solid #999;
        border-top: 0;
        z-index: -1;

        cursor: pointer;
        &.userShow-active {
          max-height: 1000px;
          z-index: 100;
        }
        li {
          font-size: 14px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border-bottom: 1px solid #999;
          &:hover {
            color: $base-color;
          }
          &:last-child {
            border: 0;
          }
        }
      }
    }
    .backIcon {
      cursor: pointer;
      margin-left: 15px;
      width: 80px;
      font-size: 14px;
    }
  }
}
</style>