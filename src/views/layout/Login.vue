<template>
 <div class="login">
    <a-form
    ref="loginForm"
    class="login-form"
    :model="loginForm"
    :rules="rules"
    v-bind="layout"
  >
   <a-form-item has-feedback label="email" name="email">
      <a-input v-model="loginForm.email" />
    </a-form-item>
    <a-form-item has-feedback label="Password" name="password">
      <a-input v-model="loginForm.password" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
 </div>
</template>

<script>
import api from '@/api/user';

export default {
  data() {
    const emailReg = /^[\w-]+@[\w.-]+.com$/;
    const checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the email'));
      }
      if (emailReg.test(value)) {
        return callback();
      }
      return callback(new Error('email输入错误！'));
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('Please input the password'));
      }
      return callback();
    };

    return {
      loginForm: {
        password: '',
        email: '',
      },
      rules: {
        password: [
          {
            validator: validatePass,
            trigger: 'change',
          },
        ],
        email: [
          {
            validator: checkEmail,
            trigger: 'change',
          },
        ],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.loginForm).then((res) => {
            console.log(res);
            this.$store.dispatch('setUserInfo', res);
            this.$router.push({
              name: 'Home',
            });
          }).catch((error) => {
            this.$message.error(error);
          });
          return true;
        }
        console.log('error submit!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};

</script>

<style lang="less">
@import url('~@/assets/css/login.less');
</style>
