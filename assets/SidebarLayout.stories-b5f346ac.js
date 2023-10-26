import{d as L,c as C,a as i,b as p,r as E,o as x}from"./vue.esm-bundler-ebeff139.js";import{S as W}from"./Sidebar-d81302d0.js";import{U as B}from"./UpperNav-e53eadea.js";import{F as N}from"./FloatingMenu-32ea757b.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{P as w}from"./Page-967b19dd.js";import{U as F}from"./UsersPage-329ba374.js";import{U as T}from"./UserEditPage-66a0bf66.js";import"./MenuLink-9ca8f56f.js";import"./Icon-80ee1d91.js";import"./MenuAvatar-05df804d.js";import"./List-9d66af21.js";import"./Search-0e13331d.js";import"./Pagination-0cdf1d68.js";import"./Button-c438feea.js";import"./UserAvatar-9cff5fac.js";import"./Avatar-1b857be4.js";const I={class:"container-outline"},O={class:"bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl"},V={class:"container-main"},P={__name:"SidebarLayout",setup(e){const s=L(!1),h=()=>{s.value=!s.value};return(v,M)=>(x(),C("main",null,[i(W,{"is-open":s.value},null,8,["is-open"]),p("div",I,[p("div",O,[i(B)]),p("div",V,[E(v.$slots,"default",{},void 0,!0)])]),i(N,{onToggleSidebar:h})]))}},n=k(P,[["__scopeId","data-v-ec74b625"]]);P.__docgenInfo={exportName:"default",displayName:"SidebarLayout",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/BasicWithSidebar/SidebarLayout.vue"]};const oe={title:"Components/Templates/Basic with sidebar",component:n,parameters:{layout:"fullscreen"}},r={render:e=>({components:{SidebarLayoutComponent:n,Page:w},setup(){return{...e}},template:`
      <sidebar-layout-component><Page /></sidebar-layout-component>`})},o={render:e=>({components:{SidebarLayoutComponent:n,UsersPage:F},setup(){return{...e}},template:`
      <sidebar-layout-component><UsersPage /></sidebar-layout-component>`})},a={render:e=>({components:{SidebarLayoutComponent:n,UserEditPage:T},setup(){return{...e}},template:`
      <sidebar-layout-component><UserEditPage /></sidebar-layout-component>`})},t={};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      Page
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <sidebar-layout-component><Page /></sidebar-layout-component>\`
  })
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,l,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      UsersPage
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <sidebar-layout-component><UsersPage /></sidebar-layout-component>\`
  })
}`,...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var g,_,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      UserEditPage
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <sidebar-layout-component><UserEditPage /></sidebar-layout-component>\`
  })
}`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,f,U;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(U=(f=t.parameters)==null?void 0:f.docs)==null?void 0:U.source}}};const ae=["PageWithSidebar","UsersWithSidebar","EditUsersWithSidebar","SidebarLayout"];export{a as EditUsersWithSidebar,r as PageWithSidebar,t as SidebarLayout,o as UsersWithSidebar,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=SidebarLayout.stories-b5f346ac.js.map
