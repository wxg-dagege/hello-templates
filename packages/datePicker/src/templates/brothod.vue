<template>
    <div @click="sendData">兄弟组件测试</div>
</template>
<script>
import bus from '../../../../examples/assets/bus'
export default {
    name: "brothod",
    data() {
        return {
            love: "高中喜欢黑小雨"
        }
    },
    methods:{
        sendData(){
            bus.$emit("yaoshuju",this.love);
        }
    }
}
</script>