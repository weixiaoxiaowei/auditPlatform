<template>
  <div class="w-table">
    <el-table :data="taskList" border style="width: 100%">
      <el-table-column prop="flowName" label="流程名称" width="100"></el-table-column>
      <el-table-column prop="flowUser" label="发起人" width="100"></el-table-column>
      <el-table-column prop="flowTime" label="发起时间" width="140"></el-table-column>
      <el-table-column prop="flowTime" label="结束时间" width="140"></el-table-column>
      <el-table-column prop="currentProgress" label="当前进度" width="140"></el-table-column>
      <el-table-column prop="flowState" label="流程状态" width="100">
        <template slot-scope="scope">
          <span
            :style="{'color':flowStateColor[scope.row.flowState]}"
          >{{flowState[scope.row.flowState]}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="remarks" label="备注" width="280"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">操作</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { formatTime } from "../assets/utils.js";
export default {
  data() {
    return {
      flowStateColor: {
        "0": "#67c23a",
        "1": "#f56c6c",
        "2": "#e6a23c"
      },
      flowState: {
        "0": "完成",
        "1": "审批中",
        "2": "退回"
      }
    };
  },
  props: ["taskList"],
  created() {
    // console.log(formatTime(new Date(), "yyyy-mm-ss"));
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style lang="scss">
.el-table__header tr,
.el-table__header th {
  padding: 0;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: $base-color;
  color: #fff;
}
.el-table__body tr,
.el-table__body td {
  padding: 0;
  height: 40px;
  text-align: center;
}
</style>