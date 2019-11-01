<template>
  <div class="root">
    <!-- 表头 -->
    <el-row class>
      <div class="title-bg">
        <span class="title">登录</span>
      </div>
    </el-row>
    <!-- 用户名 -->
    <el-row class="mt20">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-input placeholder="请输入用户名/邮箱" v-model="uname">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <!-- 密码 -->
    <el-row class="mt10">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-input type="password" placeholder="请输入密码" v-model="upwd">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <!-- 免费注册 -->
    <el-row class="mt10">
      <el-col :span="12" class="text-left">
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span style="color:#F56C6C;font-size:14px" v-cloak>{{msg}}</span>
      </el-col>
      <el-col :span="12" class="text-right">
        <span>
          <a href="javascript:;">免费注册</a>
        </span>
      </el-col>
    </el-row>
    <!-- 登录按钮 -->
    <el-row class="mt15">
      <el-col :span="24">
        <el-button @click="login" type="warning" style="width:100%;font-size:16px">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      // 登录信息
      msg: " "
    };
  },
  watch: {
    uname() {
      this.msg = "";
      this.upwd = "";
    },
    upwd(){
      this.msg = "";
    }
  },
  methods: {
    async login() {
      let res = await this.axios.post("/user/login", {
        uname: this.uname,
        upwd: this.upwd
      });
      Object.freeze(res);
      this.msg = res.data.msg;
    }
  }
};
</script>

<style scoped>
.root {
  border-radius: 0px;
  border: 1px solid #dcdfe6;
  padding: 15px;
}
.title {
  font-size: 16px;
  background-color: #fff;
  padding: 0 14px;
  line-height: 1.3;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #a69f96;
}
.title-bg {
  background: url("../../assets/image/page_bg.gif") no-repeat center -82px;
}
</style>
