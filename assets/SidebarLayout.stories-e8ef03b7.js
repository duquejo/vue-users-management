import{e as v,c as L,a as i,b as p,r as C,o as E}from"./vue.esm-bundler-acf2fe5c.js";import{S as x}from"./Sidebar-c33a90ea.js";import{U as W}from"./UpperNav-244c728a.js";import{F as B}from"./FloatingMenu-4e84fa37.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{V as k}from"./View-1b1088e3.js";import{U as F}from"./UsersView-51a28969.js";import{U as T}from"./UserEditView-24917ee4.js";import"./MenuLink-2543dc6d.js";import"./Icon-ad11ab3f.js";import"./MenuAvatar-b5198c8a.js";import"./List-a33b6942.js";import"./Search-e8215790.js";import"./Pagination-7a474b38.js";import"./Button-d23359e9.js";import"./UserAvatar-ebd5c686.js";import"./Avatar-1d77805f.js";const I={class:"container-outline"},O={class:"bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl"},M={class:"container-main"},V={__name:"SidebarLayout",setup(e){const s=v(!1),U=()=>{s.value=!s.value};return(h,$)=>(E(),L("main",null,[i(x,{"is-open":s.value},null,8,["is-open"]),p("div",I,[p("div",O,[i(W)]),p("div",M,[C(h.$slots,"default",{},void 0,!0)])]),i(B,{onToggleSidebar:U})]))}},a=N(V,[["__scopeId","data-v-ec74b625"]]);V.__docgenInfo={exportName:"default",displayName:"SidebarLayout",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/BasicWithSidebar/SidebarLayout.vue"]};const oe={title:"Components/Templates/Basic with sidebar",component:a,parameters:{layout:"fullscreen"}},r={render:e=>({components:{SidebarLayoutComponent:a,View:k},setup(){return{...e}},template:`
      <sidebar-layout-component><View /></sidebar-layout-component>`})},o={render:e=>({components:{SidebarLayoutComponent:a,UsersView:F},setup(){return{...e}},template:`
      <sidebar-layout-component><UsersView /></sidebar-layout-component>`})},t={render:e=>({components:{SidebarLayoutComponent:a,UserEditView:T},setup(){return{...e}},template:`
      <sidebar-layout-component><UserEditView /></sidebar-layout-component>`})},n={};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <sidebar-layout-component><View /></sidebar-layout-component>\`
  })
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,l,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      <sidebar-layout-component><UsersView /></sidebar-layout-component>\`
  })
}`,...(b=(l=o.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var _,y,S;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      <sidebar-layout-component><UserEditView /></sidebar-layout-component>\`
  })
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,f,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const te=["ViewWithSidebar","UsersWithSidebar","EditUsersWithSidebar","SidebarLayout"];export{t as EditUsersWithSidebar,n as SidebarLayout,o as UsersWithSidebar,r as ViewWithSidebar,te as __namedExportsOrder,oe as default};
//# sourceMappingURL=SidebarLayout.stories-e8ef03b7.js.map
