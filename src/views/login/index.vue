<template>
  <div class="login flex-box">
    <div class="login-container flex-box">
      <div class="title">审核管理系统</div>
      <div class="userName flex-box">
        账户
        <div>
          <el-input placeholder="请输入账户" v-model="account" clearable :size="'small'"></el-input>
        </div>
      </div>
      <div class="password flex-box">
        密码
        <div>
          <el-input placeholder="请输入密码" v-model="pass" clearable :size="'small'"></el-input>
        </div>
      </div>
      <div class="btn flex-box" @click="login">
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { login } from "../../serve/index.js";

export default {
  name: "login",
  data() {
    return {
      account: "",
      pass: ""
    };
  },
  created() {},
  methods: {
    //登录
    login() {
      if (this.formRules() == "success") {
        // login({ a: 1 })
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(err => {});
        this.$store
          .dispatch("login", {
            user: this.account,
            passWord: this.pass
          })
          .then(() => {
            this.$router.push({
              path: "/index/home"
            });
          });
      }
    },
    //验证
    formRules() {
      if (this.pass == "") {
        return this.$alert("密码不能为空", "提示", {
          confirmButtonText: "确定"
        });
      }
      if (this.account == "") {
        return this.$alert("账户不能为空", "提示", {
          confirmButtonText: "确定"
        });
      }
      return "success";
    }
  }
};
</script>
<style lang="scss" scoped>
.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  background: $base_color;
  width: 100%;
  height: 100%;
  margin: 0;
  .login-container {
    width: 300px;
    height: 200px;
    padding: 20px 30px;
    box-sizing: border-box;
    background: #fff;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    .title {
      margin-bottom: 10px;
    }
    .userName,
    .password {
      width: 110%;
      justify-content: space-between;
      height: 30px;
      margin: 5px 0;
      input {
        height: 100%;
      }
    }
    .btn {
      width: 96px;
      background: $base-color;
      padding: 5px;
      border-radius: 4px;
      box-sizing: border-box;
      margin-top: 10px;

      button {
        background: none;
        border: 0;
        color: #fff;
      }
    }
  }
}
</style>