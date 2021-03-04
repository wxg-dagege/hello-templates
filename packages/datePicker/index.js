import datePicker from './src/datePicker.vue';

let obj={};
obj.install = function (vue,option) {
    vue.Component(datePicker.name, datePicker)
}

export default datePicker