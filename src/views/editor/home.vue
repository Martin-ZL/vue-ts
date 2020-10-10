<template>
  <div>
    <h2>编辑</h2>
    <div>
      <router-link to="EditorPwd">修改密码</router-link>
      <router-link to="EditorInfo">信息</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class EditorHome extends Vue {}
</script>

<style>
</style>