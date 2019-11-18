<template>
  <div class="pendingList">
    <div class="searchBox">
      <div>
        <el-select v-model="selectState" placeholder="请选择">
          <el-option v-for="(item,index) in options" :key="index" :label="item" :value="index"></el-option>
        </el-select>
      </div>
      <div>
        <el-input placeholder="请输入内容" v-model="searchContent" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
        </el-input>
      </div>
    </div>
    <w-table :taskList="taskList"></w-table>
    <div class="paginationBox">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :current-page="currentPage"
        :page-size="10"
        @current-change="handleCurrentpage"
        @prev-click="handleCurrentpage"
        @next-click="handleCurrentpage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import wTable from "../../components/table.vue";
export default {
  components: {
    wTable
  },

  data() {
    return {
      selectState: 0,
      options: ["所有状态", "完成", "审批中", "退回"],
      searchContent: "",
      taskList: [],
      currentPage: 1
    };
  },
  created() {
    this.init();
  },
  computed: {
    flowState() {
      switch (this.selectState) {
        case 0:
          return "";
        case 1:
          return "0";
        case 2:
          return "1";
        case 3:
          return "2";
      }
    }
  },
  watch: {
    currentPage(val) {
      this.getTaskList();
    },
    selectState(val) {
      this.currentPage = 1;
      this.searchContent = "";
      this.getTaskList();
    }
  },
  methods: {
    init() {
      this.getTaskList();
    },
    getTaskList() {
      let data = {
        flowState: this.flowState || "",
        currentPage: this.currentPage,
        searchContent: this.searchContent || ""
      };
      console.log(data);
      this.$store.dispatch("getTaskList", {}).then(() => {
        this.taskList = this.$store.state.taskList;
        console.log(this.$store.state.taskList);
        // this.currentPage = "";
      });
    },
    handleCurrentpage(page) {
      this.currentPage = page;
    },
    handleSearch() {
      this.currentPage = 1;
      this.getTaskList();
    }
  }
};
</script>

<style lang="scss" scoped>
.pendingList {
  .searchBox {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .paginationBox {
    height: 30px;
    line-height: 30px;
    margin-top: 15px;
    ::v-deep .number,
    btn-prev,
    btn-next {
      background: #fff;
      &.active {
        background: $base-color !important;
      }
    }
  }
}
</style>