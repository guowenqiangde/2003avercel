import { defineComponent } from "vue";
import "uno.css";


import SButton from "./Button/Button"
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

export default defineComponent({
  name: "App",
  setup(props, {slots}) {
    return () => <div>
        <SButton color="pink">蓝色按钮</SButton>
        <SButton color="blue">蓝色按钮</SButton>
        <SButton color="green">绿色按钮</SButton>
        <SButton color="gray">灰色按钮</SButton>
        <SButton color="indigo">黄色按钮</SButton>
        <SButton color="red">红色按钮</SButton>
    </div>
  }
});