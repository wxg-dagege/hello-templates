<template>
    <div @click="sendData">兄弟组件测试</div>
</template>
<script>
import bus from '../../../../examples/assets/bus'
export default {
    name: "brothod",
    data() {
        return {
            love: ""
        }
    },
    methods:{
        sendData(){
            bus.$emit("yaoshuju",this.love);
        }
    }
}
</script>