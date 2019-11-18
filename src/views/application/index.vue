<template>
  <div class="application">
    <el-form ref="form" :model="applicationForm" label-width="80px">
      <el-form-item label="申请类型">
        <el-select v-model="applicationForm.state" placeholder="请选择申请类型">
          <el-option label="财务" value="shanghai"></el-option>
          <el-option label="人事" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="流程名称">
        <el-input v-model="applicationForm.flowUser" placeholder="请输入流程名称"></el-input>
      </el-form-item>
      <el-form-item label="发起人">
        <el-input v-model="applicationForm.flowName" placeholder="请输入流程发起人"></el-input>
      </el-form-item>
      <el-form-item label="申请时间">
        <el-col>
          <el-date-picker type="date" placeholder="开始时间" v-model="applicationForm.flowTime"></el-date-picker>
        </el-col>
        <el-col class="line">-</el-col>
        <el-col>
          <el-date-picker type="date" placeholder="结束时间" v-model="applicationForm.endingTime"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="审批人">
        <el-select v-model="applicationForm.person" placeholder="请选择审批人">
          <el-option label="组长" value="shanghai"></el-option>
          <el-option label="经理" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="applicationForm.remarks" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      applicationForm: {
        flowUser: "",
        flowTime: "",
        endingTime: "",
        currentProgress: "",
        flowState: "",
        remarks: "",
        state: "",
        person: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss" scoped>
.application {
  padding-left: 30%;
  padding-top: 15px;
  box-sizing: border-box;
  text-align: left;
  ::v-deep .el-select,
  .el-input,
  .el-textarea,
  .el-button {
    width: 300px;
  }
}
</style>