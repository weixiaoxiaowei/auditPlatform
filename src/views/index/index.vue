<template>
  <div class="index">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Nav />
        </el-aside>
        <el-main>
          <div v-if="$route.fullPath == '/index'">欢迎进入管理系统</div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
r
<script>
import Header from "../../components/header.vue";
import Nav from "../../components/nav.vue";
import { log } from "util";
export default {
  name: "index",
  components: {
    Header,
    Nav
  },
  created() {
    console.log(this.$route);
  }
};
</script>
<style lang="scss" scoped>
.index {
  height: 100%;
  section {
    height: 100%;
  }
}

.el-header {
  background-color: $base_color;
  color: #fff;
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
