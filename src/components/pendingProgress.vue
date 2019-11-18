<template>
  <div class="pendingProgress">
    <div class="pendingProgress-left">
      <div>
        <span>采购流程:</span>
        <el-input v-model="pendingList.flowName" disabled></el-input>
      </div>
      <div>
        <span>发起人:</span>
        <el-input v-model="pendingList.flowUser" disabled></el-input>
      </div>
      <div>
        <span>审批进度:</span>
        <el-input v-model="pendingList.currentProgress" disabled></el-input>
      </div>
    </div>
    <div class="pendingProgress-right">
      <el-steps
        direction="vertical"
        :destroy-on-close="true"
        :active="Number(activeFlowState)"
        finish-status="success"
      >
        <el-step title="发起申请" :status="status" :description="flowState[0]"></el-step>
        <el-step title="组长审批" :description="flowState[1]"></el-step>
        <el-step title="经理审批" :description="flowState[2]"></el-step>
        <el-step title="审批通过" :description="flowState[3]"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      status: "",
      activeFlowState: "",
      flowState: ["已完成", "待审批", "待审批", "待审批"]
    };
  },
  props: ["pendingList"],
  watch: {
    pendingList(val) {
      this.changeFlowState(val);
    }
  },
  created() {
    this.changeFlowState(this.pendingList);
  },
  methods: {
    changeFlowState(val) {
      const flowState = val.flowState;
      (this.flowState = ["已完成", "待审批", "待审批", "待审批"]),
        console.log(flowState);
      this.activeFlowState = flowState;
      if (flowState == 3) {
        this.activeFlowState = 1;
        this.status = "error";
        this.flowState[0] = "已退回";
        return val;
      }
      for (let i = 0; i < flowState; i++) {
        this.status = "success";
        this.flowState[i] = "已完成";
      }
      return val;
    }
  }
};
</script>

<style lang="scss" scoped>
.pendingProgress {
  display: flex;
  .pendingProgress-left {
    width: 60%;

    div {
      display: flex;
      margin-bottom: 40px;
      span {
        display: inline-block;
        width: 100px;
        text-align: left;
        height: 40px;
        line-height: 40px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .pendingProgress-right {
    flex: 1;
    margin-left: 10%;
  }
}
</style>