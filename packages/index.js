const install = function(vue){
    if(install.installed) return components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.vue){
    install(window.Vue)
}

export default{
    install,
    datePicker
}