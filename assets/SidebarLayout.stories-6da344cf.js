import{e as w,c as O,a as i,b as d,r as C,o as L}from"./vue.esm-bundler-5e9aa986.js";import{S as T}from"./Sidebar-96fe9c40.js";import{U as E}from"./UpperNav-1ea16aa3.js";import{F as x}from"./FloatingMenu-54a26eb5.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./View-6b4a76a6.js";import{U as N}from"./UsersView-c5a31fba.js";import{U as q}from"./UserEditView-32d30da0.js";import"./MenuLink-1d6cf477.js";import"./Icon-9ba9a2c9.js";import"./MenuAvatar-90d0eae7.js";import"./List-9d138cbe.js";import"./Search-9280f7cb.js";import"./Pagination-d3bdc29b.js";import"./Button-6fff1b7b.js";import"./UserAvatar-f3b10f3f.js";import"./Avatar-c1be6cb3.js";const D={class:"container-outline"},F={class:"bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl"},j={class:"container-main"},v={__name:"SidebarLayout",props:{user:{type:Object,required:!0},isSidebarOpen:{type:Boolean,default:!1},links:{type:Array,required:!0}},emits:["toggleSidebar"],setup(e,{emit:k}){const r=w(e.isSidebarOpen),U=()=>{r.value=!r.value,k("toggleSidebar",r.value)};return(V,M)=>(L(),O("main",null,[i(T,{links:e.links,user:e.user,"is-open":r.value},null,8,["links","user","is-open"]),d("div",D,[d("div",F,[i(E)]),d("div",j,[C(V.$slots,"default",{},void 0,!0)])]),i(x,{onToggleSidebar:U})]))}},t=W(v,[["__scopeId","data-v-f750f987"]]);v.__docgenInfo={exportName:"default",displayName:"SidebarLayout",description:"",tags:{},props:[{name:"user",type:{name:"object"},required:!0},{name:"isSidebarOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"links",type:{name:"array"},required:!0}],events:[{name:"toggleSidebar"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/BasicWithSidebar/SidebarLayout.vue"]};const se={title:"Components/Templates/Basic with sidebar",component:t,tags:["autodocs"],args:{user:{name:"John Doe",role:"Editor",avatarUrl:"https://placehold.co/100x100",profileUrl:"/profile",logoutUrl:"/logout"},isSidebarOpen:!0,links:[{order:1,label:"Dashboard",href:"#",icon:"dashboard"},{order:2,label:"Chats",href:"#",icon:"chat"},{order:3,label:"Media",href:"#",icon:"photo"},{order:4,label:"Donate ☕",href:"#",icon:"heart"}]},argTypes:{onToggleSidebar:{}},parameters:{layout:"fullscreen"}},o={render:e=>({components:{SidebarLayoutComponent:t,View:B},setup(){return{...e}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><View /></sidebar-layout-component>`})},a={render:e=>({components:{SidebarLayoutComponent:t,UsersView:N},setup(){return{...e}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView /></sidebar-layout-component>`})},s={render:e=>({components:{SidebarLayoutComponent:t,UserEditView:q},setup(){return{...e}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UserEditView /></sidebar-layout-component>`})},n={};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      View
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><View /></sidebar-layout-component>\`
  })
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,c,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      UsersView
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView /></sidebar-layout-component>\`
  })
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var g,S,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      UserEditView
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UserEditView /></sidebar-layout-component>\`
  })
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,h,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const ne=["ViewWithSidebar","UsersWithSidebar","EditUsersWithSidebar","SidebarLayout"];export{s as EditUsersWithSidebar,n as SidebarLayout,a as UsersWithSidebar,o as ViewWithSidebar,ne as __namedExportsOrder,se as default};
//# sourceMappingURL=SidebarLayout.stories-6da344cf.js.map
