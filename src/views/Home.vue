<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
        <input type="text" v-model="msg">
        <div>{{msg}}</div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Home extends Vue {
        msg: string = "abc";
        @Prop

    }
</script>
