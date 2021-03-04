<template>
    <div>
        <p>这是一个datePicker组件{{time}}</p>
        <date-time :speak="time" @myevent="timefunction"></date-time>
        <brothod></brothod>
    </div>
</template>

<script>
import dateTime from './templates/dateTime.vue';
import brothod from './templates/brothod';
import Brothod from './templates/brothod.vue';
export default {
  components: { dateTime, Brothod },
    name: 'datePicker',
    data(){
        return {
            time: ""
        }
    },
    templates:{
        dateTime,
        brothod
    },
    methods:{
        timefunction(money){
            console.log(money);
            this.time=money;
        }
    }
}
</script>