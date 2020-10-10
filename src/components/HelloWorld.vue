<template>
	<div class="hello">
		<h1 @click="setName">{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	props: {
		msg: String,
  }
})
export default class HelloWorld extends Vue {
  msg!: string;
  name: string = "szl"

  setName(): void {
    this.name = "lalala"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 100px auto;
  h2 {
    color: $red;
  }
  ul {
    list-style: none;
    @include box-middle("all")
  }
}
</style>
