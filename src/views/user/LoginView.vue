<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-position="right"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>
      <el-form-item prop="loginname">
        <span class="icon-container">
          <i class="el-icon-s-custom"></i>
        </span>
        <el-input v-model="loginForm.loginname" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="icon-container">
          <i class="el-icon-lock"></i>
        </span>

        <el-input
          v-model="loginForm.password"
          placeholder="密码"
          type="password"
        ></el-input>
      </el-form-item>
      <div>
        <el-button
          style="width: 100%"
          type="primary"
          @click="submitForm('loginForm')"
          :loading="loading"
          native-type="submit"
          >登录</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        loginname: "",
        password: "",
      },
      rules: {
        loginname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      loading: false,
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      this.$store
        .dispatch("user/login", this.loginForm)
        .then(() => {
          this.loading = false;
          this.$route.replace("/");
        })
        .catch((err) => {
          this.$message({
            message: err.message,
            type: "error",
          });
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="less">
@bg: #283443;
@light_gray: #fff;
@dark_gray: #889aa4;
@cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: @cursor)) {
  .login-container .el-input input {
    color: @cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      padding: 12px 5px 12px 15px;
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      color: @light_gray;
      height: 47px;
      caret-color: @cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px @bg inset !important;
        -webkit-text-fill-color: @cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="less" scoped>
@bg: #283443;
@light_gray: #fff;
@dark_gray: #889aa4;
@cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .icon-container {
    padding: 6px 5px 6px 15px;
    color: @dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: @light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
