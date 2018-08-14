<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld :msg="msg"/>
        <input type="text" v-model="msg">
        <div>{{changeMsg}}</div>
        <div v-for="(item, index) in arr" :key="index" >
            {{ item }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  msg: string = "123";
  arr: string[] = ["123", "456", "123421", "123131"];

  /**
   * 与vue中computed（计算属性）一致
   * @returns {string}
   */
  get changeMsg() {
    return `${this.msg
      .split("")
      .reverse()
      .join("")},啦啦啦`;
  }
}
</script>
