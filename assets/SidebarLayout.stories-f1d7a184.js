import{e as V,c as w,a as i,b as d,r as O,o as C}from"./vue.esm-bundler-5e9aa986.js";import{S as L}from"./Sidebar-96fe9c40.js";import{U as E}from"./UpperNav-1ea16aa3.js";import{F as x}from"./FloatingMenu-54a26eb5.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./View-6b4a76a6.js";import{U as N}from"./UsersView-c5a31fba.js";import{U as q}from"./UserEditView-32d30da0.js";import"./MenuLink-1d6cf477.js";import"./Icon-9ba9a2c9.js";import"./MenuAvatar-90d0eae7.js";import"./List-9d138cbe.js";import"./Search-9280f7cb.js";import"./Pagination-d3bdc29b.js";import"./Button-6fff1b7b.js";import"./UserAvatar-f3b10f3f.js";import"./Avatar-c1be6cb3.js";const D={class:"container-outline"},F={class:"bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl"},T={class:"container-main"},k={__name:"SidebarLayout",props:{user:{type:Object,required:!0},isSidebarOpen:{type:Boolean,default:!1},links:{type:Array,required:!0}},setup(e){const t=V(e.isSidebarOpen),v=()=>{t.value=!t.value};return(U,I)=>(C(),w("main",null,[i(L,{links:e.links,user:e.user,"is-open":t.value},null,8,["links","user","is-open"]),d("div",D,[d("div",F,[i(E)]),d("div",T,[O(U.$slots,"default",{},void 0,!0)])]),i(x,{onToggleSidebar:v})]))}},a=W(k,[["__scopeId","data-v-05246679"]]);k.__docgenInfo={exportName:"default",displayName:"SidebarLayout",description:"",tags:{},props:[{name:"user",type:{name:"object"},required:!0},{name:"isSidebarOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"links",type:{name:"array"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/BasicWithSidebar/SidebarLayout.vue"]};const se={title:"Components/Templates/Basic with sidebar",component:a,args:{user:{name:"John Doe",role:"Editor",avatarUrl:"https://placehold.co/100x100",profileUrl:"/profile",logoutUrl:"/logout"},isSidebarOpen:!0,links:[{order:1,label:"Dashboard",href:"#",icon:"dashboard"},{order:2,label:"Chats",href:"#",icon:"chat"},{order:3,label:"Media",href:"#",icon:"photo"},{order:4,label:"Donate ☕",href:"#",icon:"heart"}]},parameters:{layout:"fullscreen"}},r={render:e=>({components:{SidebarLayoutComponent:a,View:B},setup(){return{...e}},template:`
      <sidebar-layout-component :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><View /></sidebar-layout-component>`})},o={render:e=>({components:{SidebarLayoutComponent:a,UsersView:N},setup(){return{...e}},template:`
      <sidebar-layout-component :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView /></sidebar-layout-component>`})},s={render:e=>({components:{SidebarLayoutComponent:a,UserEditView:q},setup(){return{...e}},template:`
      <sidebar-layout-component :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UserEditView /></sidebar-layout-component>`})},n={};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      <sidebar-layout-component :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><View /></sidebar-layout-component>\`
  })
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,c,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <sidebar-layout-component :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView /></sidebar-layout-component>\`
  })
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var S,y,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <sidebar-layout-component :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UserEditView /></sidebar-layout-component>\`
  })
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,_,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(g=(_=n.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ne=["ViewWithSidebar","UsersWithSidebar","EditUsersWithSidebar","SidebarLayout"];export{s as EditUsersWithSidebar,n as SidebarLayout,o as UsersWithSidebar,r as ViewWithSidebar,ne as __namedExportsOrder,se as default};
//# sourceMappingURL=SidebarLayout.stories-f1d7a184.js.map
