<template>
  <div>
    <h3>Counter.vue</h3>
    <div class="num">{{ count }}</div>
    <button @click="increment">自增</button>
  </div>
</template>

<script lang="ts">
import { Vue, Provide, Component } from "vue-property-decorator";
import { setTimeout } from "timers";

@Component
export default class Counter extends Vue {
  @Provide() count: number = 0;

  increment() {
    setTimeout(() => {
      this.count++;
    }, 1000);
  }
}
</script>
