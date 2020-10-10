<template>
  <div>
    <h2>用户home</h2>
    <router-link to="/asdasda">错误错误</router-link> | 
    <router-link to="/user/pwd">修改密码</router-link> | 
    <router-link to="/user/info">信息</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class UserHome extends Vue {}
</script>