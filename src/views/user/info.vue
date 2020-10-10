<template>
  <div>
    <h2>用户信息</h2>
    <router-link to="/user/pwd">修改密码</router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class UserInfo extends Vue {}
</script>