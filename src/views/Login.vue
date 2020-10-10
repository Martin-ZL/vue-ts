<template>
  <div class="about">
    <h1>This is an login page</h1>
    <button @click="login">去首页</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class login extends Vue {
  login() {
    const token = {
      auth: "user",
      uid: "xxxxxxxx"
    }
    localStorage.setItem("token", JSON.stringify(token))
    this.$router.push("/");
  }
}
</script>
