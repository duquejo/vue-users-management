import{e as D,c as C,a as d,b as m,r as T,o as N}from"./vue.esm-bundler-ab224c85.js";import{S as E}from"./Sidebar-6e2fdc05.js";import{U as M}from"./UpperNav-32292f04.js";import{F as x}from"./FloatingMenu-4dfa9834.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./View-28e72860.js";import{U as F}from"./UsersView-57493351.js";import{S as W}from"./SingleUserEditView-04137c2b.js";import{S as j}from"./SingleUserView-9fa88cd5.js";import"./MenuLink-4409287a.js";import"./Icon-4ba605c6.js";import"./MenuAvatar-28a00654.js";import"./List-dee46754.js";import"./Search-90db9c56.js";import"./Pagination-0d17922d.js";import"./Button-a06ea5f2.js";import"./UserAvatar-74fa1290.js";import"./Avatar-4740d6a8.js";const q={class:"container-outline"},G={class:"bg-white dark:bg-secondary-900 rounded-tl-2xl rounded-tr-2xl"},I={class:"container-main"},O={__name:"SidebarLayout",props:{user:{type:Object,required:!0},isSidebarOpen:{type:Boolean,default:!1},links:{type:Array,required:!0},topNavigation:{type:Object,default:()=>({backUrl:"",active:!0})}},emits:["toggleSidebar"],setup(e,{emit:r}){const a=D(e.isSidebarOpen),L=()=>{a.value=!a.value,r("toggleSidebar",a.value)};return(A,$)=>(N(),C("main",null,[d(E,{links:e.links,user:e.user,"is-open":a.value},null,8,["links","user","is-open"]),m("div",q,[m("div",G,[d(M,{"is-active":e.topNavigation.active,"back-url":e.topNavigation.backUrl},null,8,["is-active","back-url"])]),m("div",I,[T(A.$slots,"default",{},void 0,!0)])]),d(x,{onToggleSidebar:L})]))}},n=J(O,[["__scopeId","data-v-b178c5aa"]]);O.__docgenInfo={exportName:"default",displayName:"SidebarLayout",description:"",tags:{},props:[{name:"user",type:{name:"object"},required:!0},{name:"isSidebarOpen",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"links",type:{name:"array"},required:!0},{name:"topNavigation",type:{name:"object"},defaultValue:{func:!1,value:`{
  backUrl: '',
  active: true
}`}}],events:[{name:"toggleSidebar"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/BasicWithSidebar/SidebarLayout.vue"]};const me={title:"Components/Templates/Basic with sidebar",component:n,tags:["autodocs"],args:{user:{name:"John Doe",role:"Editor",avatarUrl:"https://placehold.co/100x100",profileUrl:"/profile",logoutUrl:"/logout"},isSidebarOpen:!0,links:[{order:1,label:"Dashboard",href:"#",icon:"dashboard"},{order:2,label:"Chats",href:"#",icon:"chat"},{order:3,label:"Media",href:"#",icon:"photo"},{order:4,label:"Donate ☕",href:"#",icon:"heart"}],topNavigation:{active:!1}},argTypes:{onToggleSidebar:{}},parameters:{layout:"fullscreen"}},o={render:e=>({components:{SidebarLayoutComponent:n,View:B},setup(){return{...e}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links" :top-navigation="topNavigation"><View /></sidebar-layout-component>`})},t={render:e=>({components:{SidebarLayoutComponent:n,UsersView:F},setup(){return{...e,users:[{id:1,name:"Anna George",email:"anna@demo.com",phone_number:"+573101231212",role:"admin",created_at:"2023/10/23"},{id:2,name:"Albert Flores 2",email:"albert2@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"}]}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView :users="users" /></sidebar-layout-component>`})},s={render:e=>({components:{SidebarLayoutComponent:n,SingleUserEditView:W},setup(){return{...e,currentUser:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserEditView :user="currentUser"/>
      </sidebar-layout-component>`})},i={render:e=>({components:{SidebarLayoutComponent:n,SingleUserView:j},setup(){return{...e,currentUser:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}}},template:`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserView :user="currentUser"/>
      </sidebar-layout-component>`})},l={};var u,p,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,g,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      SidebarLayoutComponent,
      UsersView
    },
    setup() {
      const users = [{
        id: 1,
        name: 'Anna George',
        email: 'anna@demo.com',
        phone_number: '+573101231212',
        role: 'admin',
        created_at: '2023/10/23'
      }, {
        id: 2,
        name: 'Albert Flores 2',
        email: 'albert2@demo.com',
        phone_number: '+573101234567',
        role: 'user',
        created_at: '20 minutes ago'
      }];
      return {
        ...args,
        users
      };
    },
    template: \`
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView :users="users" /></sidebar-layout-component>\`
  })
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,U,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(U=s.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var v,f,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var k,w,V;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const ue=["SingleViewUsage","AllUsers","EditUser","ReadOnlyView","JustSidebar"];export{t as AllUsers,s as EditUser,l as JustSidebar,i as ReadOnlyView,o as SingleViewUsage,ue as __namedExportsOrder,me as default};
//# sourceMappingURL=SidebarLayout.stories-71458dfc.js.map
