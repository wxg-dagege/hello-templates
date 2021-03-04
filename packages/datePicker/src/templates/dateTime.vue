<template>
    <div>{{time+"  "+speak+"   "+yao}}</div>
</template>

<script>
import bus from '../../../../examples/assets/bus'
export default {
    name: "dateTime",
    props:{
        speak:{
            type: String,
            default: "王学刚，你好棒，继续加油吧"
        }
    },
    created(){
        bus.$on("yaoshuju",(data)=>{
            this.yao = data;
            console.log(data);
        });
    },
    data(){
        return {
            time: new Date().toDateString(),
            yao: ""
        }
    },
    mounted(){
        this.create();
    },
    methods:{
        create(){
            this.$emit("myevent",500);
        }
    }
}
</script>