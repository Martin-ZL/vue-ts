<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3 @click="changeMsg">{{ msg }}</h3>
    <Counter />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import Counter from "@/components/Counter.vue";

@Component({
  components: {
    Counter
  }
})
export default class About extends Vue {
  @Provide() msg: string = "lalala";

  changeMsg() {
    this.msg = "wo " + this.msg;
  }
}
</script>
