<template>
  <div>
    <input type="text" v-model="userName" placeholder="用户名" />
    <input type="password" v-model="passWord" placeholder="密码" />
    <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  @Provide() userName: string = "";
  @Provide() passWord: string = "";

  login() {
    console.log(this.userName, this.passWord);
  }
}
</script>