import{e as s,c as m,a as c,b as _,o as d}from"./vue.esm-bundler-5e9aa986.js";import{I as r}from"./Icon-9ba9a2c9.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const v={class:"inline-flex items-center relative text-secondary-500 dark:text-secondary-400"},f=["value"],u={__name:"Search",props:{input:{type:String,default:""}},emits:["inputChange"],setup(l,{emit:n}){const e=s(l),t=s(null),i=o=>{t.value&&clearTimeout(t.value),t.value=setTimeout(()=>{const a=o.target.value;e.value={...e,input:a},n("inputChange",a)},300)},p=()=>{e.value={...e,input:""},n("inputChange","")};return(o,a)=>(d(),m("div",v,[c(r,{size:"medium",model:"search",class:"absolute ml-3"}),_("input",{value:e.value.input,onInput:i,placeholder:"Josh Nicholls, Faye Vale..."},null,40,f),c(r,{size:"medium",model:"cancel",class:"absolute right-0 cursor-pointer hover:animate-spin-once",onClick:p})]))}},y=h(u,[["__scopeId","data-v-00788906"]]);u.__docgenInfo={exportName:"default",displayName:"Search",description:"",tags:{},props:[{name:"input",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"inputChange"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/molecules/Search/Search.vue"]};export{y as S};
//# sourceMappingURL=Search-9280f7cb.js.map