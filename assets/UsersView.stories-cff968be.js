import{U as a}from"./UsersView-6e9acf90.js";import"./vue.esm-bundler-ab224c85.js";import"./List-16e1a9ba.js";import"./Icon-4ba605c6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Search-90db9c56.js";import"./Pagination-0d17922d.js";import"./Button-f996d161.js";const A={title:"Components/Organisms/General Users View",component:a,tags:["autodocs"],argTypes:{onFormCreate:{},onFormDelete:{},onFormEdit:{},onFormSearch:{},onProfileClick:{}},parameters:{layout:"centered"}},g=[{id:1,name:"Anna George",email:"anna@demo.com",phone_number:"+573101231212",role:"admin",created_at:"2023/10/23"},{id:2,name:"Albert Flores 2",email:"albert2@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"},{id:3,name:"Albert Flores 3",email:"albert3@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"},{id:4,name:"Albert Flores 4",email:"albert4@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"},{id:5,name:"Albert Flores 5",email:"albert5@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"},{id:6,name:"Albert Flores 6",email:"albert6@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"},{id:7,name:"Albert Flores 7",email:"albert7@demo.com",phone_number:"+573101234577",role:"user",created_at:"20 minutes ago"},{id:8,name:"Albert Flores 8",email:"albert8@demo.com",phone_number:"+573101234587",role:"user",created_at:"20 minutes ago"},{id:9,name:"Albert Flores 9",email:"albert9@demo.com",phone_number:"+573101234567",role:"user",created_at:"20 minutes ago"},{id:10,name:"Albert Flores 10",email:"albert10@demo.com",phone_number:"+573101234517",role:"user",created_at:"20 minutes ago"}],b=[{active:!1,label:"1",url:null},{active:!0,label:"2",url:"#"},{active:!1,label:"3",url:"#"},{active:!1,label:"4",url:"#"},{active:!1,label:"5",url:null}],e={args:{}},r={args:{users:g,pagination:b},render:n=>({components:{UsersViewComponent:a},setup(){return{...n}},template:`
      <users-view-component 
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
        @on-profile-click="onProfileClick"
      />`})},o={args:{users:g,search:"Something",pagination:b},render:n=>({components:{UsersViewComponent:a},setup(){return{...n}},template:`
      <users-view-component 
        v-model:search="search"
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
        @on-profile-click="onProfileClick"
      />`})};var t,s,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    users,
    pagination
  },
  render: args => ({
    components: {
      UsersViewComponent
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <users-view-component 
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
        @on-profile-click="onProfileClick"
      />\`
  })
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    users,
    search: 'Something',
    pagination
  },
  render: args => ({
    components: {
      UsersViewComponent
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <users-view-component 
        v-model:search="search"
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
        @on-profile-click="onProfileClick"
      />\`
  })
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const U=["NoUsersView","UsersView","UsersWithAppliedFilterView"];export{e as NoUsersView,r as UsersView,o as UsersWithAppliedFilterView,U as __namedExportsOrder,A as default};
//# sourceMappingURL=UsersView.stories-cff968be.js.map
