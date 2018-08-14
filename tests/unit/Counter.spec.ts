// counter.spec.js
import { expect } from "chai";
import Vue from "vue";
import Counter from "@/components/Counter.vue";
import { Domain } from "domain";

describe("Counter.vue", () => {

    it("点击按钮后, count的值应该为1", (done) => {
        // 获取组件实例
        const Constructor: any = Vue.extend(Counter);
        // 挂载组件
        const vm: any = new Constructor().$mount();
        // 获取button
        const button: any = vm.$el.querySelector("button");
        // 新建点击事件
        const clickEvent: any = new Event("click");
        // 触发点击事件
        button.dispatchEvent(clickEvent);
        // 监听点击事件
        vm._watcher.run();
        // 异步测试超时上线为2000ms，时长大于时间，且小于2000ms就可以。
        // 所以推测，当用户请求接口超时了，也会返回失败
        setTimeout(() => {
            // 断言:count的值应该是数字1
            expect(Number(vm.$el.querySelector(".num").textContent)).to.equal(1);
            done();
        }, 1500);
    });
});