<template>
  <div class="nav">
    <el-col :span="24">
      <el-menu
        @open="handleOpen"
        @close="handleClose"
        background-color="#1989fa"
        router
        text-color="#fff"
      >
        <el-menu-item index="/index/home">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- <el-submenu index="2" route="/index/home">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>列表</span>
          </template>
          <el-menu-item-group>
            <el-tree
              :data="data"
              :props="defaultProps"
              :empty-text="'暂无数据'"
              accordion
              @node-click="handleNodeClick"
            ></el-tree>
          </el-menu-item-group>
        </el-submenu>-->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/index/pendingList">审批列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>申请</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">发起审批</el-menu-item>
            <el-menu-item index="3-2">提升权限</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/index/home">
          <i class="el-icon-location"></i>
          <span slot="title">申请</span>
        </el-menu-item>
        <el-menu-item index="/index/home">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  .el-menu {
    border: 0;
    ::v-deep .el-submenu__title,
    .el-menu-item {
      text-align: left;
      color: #fff;
    }
    ::v-deep .el-submenu__title i,
    .el-menu-item i {
      color: #fff;
    }
  }
  ::v-deep.el-tree {
    background: rgba(20, 110, 220, 1);
  }
  ::v-deep .el-tree-node__children {
    background: $base-color;
  }
  ::v-deep .el-menu-item-group__title {
    padding: 0 !important;
  }
  // ::v-deep .el-tree-node__expand-icon {
  //   display: none;
  // }
  ::v-deep .el-tree-node__content {
    padding: 0 20px !important;
    height: 56px;
    color: #fff;
    &:hover {
      color: $base-color;
      background: #fff;
    }
  }
  ::v-deep .is-current > .el-tree-node__content {
    color: $base-color;
    background: #fff;
  }
}
</style>
