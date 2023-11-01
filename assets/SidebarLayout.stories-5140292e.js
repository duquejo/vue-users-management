import{e as C,c as T,a as d,b as p,r as N,o as A}from"./vue.esm-bundler-ab224c85.js";import{S as E}from"./Sidebar-6e2fdc05.js";import{U as M}from"./UpperNav-32292f04.js";import{F as x}from"./FloatingMenu-4dfa9834.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./View-28e72860.js";import{U as W}from"./UsersView-6e9acf90.js";import{S as j}from"./SingleUserEditView-f4c5bdb4.js";import{S as q}from"./SingleUserView-66509857.js";import"./MenuLink-4409287a.js";import"./Icon-4ba605c6.js";import"./MenuAvatar-28a00654.js";import"./List-16e1a9ba.js";import"./Search-90db9c56.js";import"./Pagination-0d17922d.js";import"./Button-f996d161.js";import"./UserAvatar-6b3aaba3.js";import"./Avatar-4740d6a8.js";const F={class:"container-outline"},I={class:"bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl"},R={class:"container-main"},_={__name:"SidebarLayout",props:{user:{type:Object,required:!0},isSidebarOpen:{type:Boolean,default:!1},links:{type:Array,required:!0},topNavigation:{type:Object,default:()=>({backUrl:"",active:!0})}},emits:["toggleSidebar"],setup(e,{emit:l}){const n=C(e.isSidebarOpen),L=()=>{n.value=!n.value,l("toggleSidebar",n.value)};return(D,z)=>(A(),T("main",null,[d(E,{links:e.links,user:e.user,"is-open":n.value},null,8,["links","user","is-open"]),p("div",F,[p("div",I,[d(M,{"is-active":e.topNavigation.active,"back-url":e.topNavigation.backUrl},null,8,["is-active","back-url"])]),p("div",R,[N(D.$slots,"default",{},void 0,!0)])]),d(x,{onToggleSidebar:L})]))}},r=J(_,[["__scopeId","data-v-b178c5aa"]]);_.__docgenInfo={exportName:"default",displayName:"SidebarLayout",description:"",tags:{},props:[{name:"user",type:{name:"object"},required:!0},{name:"isSidebarOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"links",type:{name:"array"},required:!0},{name:"topNavigation",type:{name:"object"},defaultValue:{func:!1,value:`{
  backUrl: '',
  active: true
}`}}],events:[{name:"toggleSidebar"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/BasicWithSidebar/SidebarLayout.vue"]};const pe={title:"Components/Templates/Basic with sidebar",component:r,tags:["autodocs"],args:{user:{name:"John Doe",role:"Editor",avatarUrl:"https://placehold.co/100x100",profileUrl:"/profile",logoutUrl:"/logout"},isSidebarOpen:!0,links:[{order:1,label:"Dashboard",href:"#",icon:"dashboard"},{order:2,label:"Chats",href:"#",icon:"chat"},{order:3,label:"Media",href:"#",icon:"photo"},{order:4,label:"Donate ☕",href:"#",icon:"heart"}],topNavigation:{active:!1}},argTypes:{onToggleSidebar:{}},parameters:{layout:"fullscreen"}},o={render:e=>({components:{SidebarLayoutComponent:r,View:B},setup(){return{...e}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links" :top-navigation="topNavigation"><View /></sidebar-layout-component>`})},a={render:e=>({components:{SidebarLayoutComponent:r,UsersView:W},setup(){return{...e}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView /></sidebar-layout-component>`})},t={render:e=>({components:{SidebarLayoutComponent:r,SingleUserEditView:j},setup(){return{...e,currentUser:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserEditView :user="currentUser"/>
      </sidebar-layout-component>`})},s={render:e=>({components:{SidebarLayoutComponent:r,SingleUserView:q},setup(){return{...e,currentUser:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserView :user="currentUser"/>
      </sidebar-layout-component>`})},i={};var u,m,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links" :top-navigation="topNavigation"><View /></sidebar-layout-component>\`
  })
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,b,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var y,U,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      SingleUserEditView
    },
    setup() {
      const currentUser = {
        avatar: {
          url: 'https://picsum.photos/400/600',
          alt: 'Demo image'
        },
        name: 'John Doe',
        gender: 'Male',
        birthday: new Date(),
        nationality: 'United States',
        address: 'Mary 123 Street 4th',
        phone_number: '+13120456789',
        city: 'Los Angeles',
        state: 'Los Angeles',
        role: 'User',
        email: 'foo@bar.com',
        description: 'Welcome to my profile!'
      };
      return {
        ...args,
        currentUser
      };
    },
    template: \`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserEditView :user="currentUser"/>
      </sidebar-layout-component>\`
  })
}`,...(h=(U=t.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var v,f,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      SingleUserView
    },
    setup() {
      const currentUser = {
        avatar: {
          url: 'https://picsum.photos/400/600',
          alt: 'Demo image'
        },
        name: 'John Doe',
        gender: 'Male',
        birthday: new Date(),
        nationality: 'United States',
        address: 'Mary 123 Street 4th',
        phone_number: '+13120456789',
        city: 'Los Angeles',
        state: 'Los Angeles',
        role: 'User',
        email: 'foo@bar.com',
        description: 'Welcome to my profile!'
      };
      return {
        ...args,
        currentUser
      };
    },
    template: \`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserView :user="currentUser"/>
      </sidebar-layout-component>\`
  })
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,V,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(O=(V=i.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ue=["SingleViewUsage","AllUsers","EditUser","ReadOnlyView","JustSidebar"];export{a as AllUsers,t as EditUser,i as JustSidebar,s as ReadOnlyView,o as SingleViewUsage,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=SidebarLayout.stories-5140292e.js.map
