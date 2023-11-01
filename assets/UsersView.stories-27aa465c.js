import{U as a}from"./UsersView-5ab8a155.js";import"./vue.esm-bundler-f9c7f19d.js";import"./List-ca879aa3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Search-bb0caf6a.js";import"./Icon-9b571dc5.js";import"./Pagination-8fcb03d1.js";import"./Button-e983ba1b.js";const U={title:"Components/Organisms/General Users View",component:a,tags:["autodocs"],argTypes:{onFormCreate:{},onFormDelete:{},onFormEdit:{},onFormSearch:{}},parameters:{layout:"centered"}},e={args:{}},n={args:{users:[{id:1,name:"Anna George",email:"anna@demo.com",phone:"+573101231212",role:"admin",createdAt:"2023/10/23"},{id:2,name:"Albert Flores 2",email:"albert2@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:3,name:"Albert Flores 3",email:"albert3@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:4,name:"Albert Flores 4",email:"albert4@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:5,name:"Albert Flores 5",email:"albert5@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:6,name:"Albert Flores 6",email:"albert6@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:7,name:"Albert Flores 7",email:"albert7@demo.com",phone:"+573101234577",role:"user",createdAt:"20 minutes ago"},{id:8,name:"Albert Flores 8",email:"albert8@demo.com",phone:"+573101234587",role:"user",createdAt:"20 minutes ago"},{id:9,name:"Albert Flores 9",email:"albert9@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:10,name:"Albert Flores 10",email:"albert10@demo.com",phone:"+573101234517",role:"user",createdAt:"20 minutes ago"}],pagination:[{active:!1,label:"1",url:null},{active:!0,label:"2",url:"#"},{active:!1,label:"3",url:"#"},{active:!1,label:"4",url:"#"},{active:!1,label:"5",url:null}]},render:o=>({components:{UsersViewComponent:a},setup(){return{...o}},template:`
      <users-view-component 
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
      />`})},r={args:{users:[{id:1,name:"Anna George",email:"anna@demo.com",phone:"+573101231212",role:"admin",createdAt:"2023/10/23"},{id:2,name:"Albert Flores 2",email:"albert2@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:3,name:"Albert Flores 3",email:"albert3@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:4,name:"Albert Flores 4",email:"albert4@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:5,name:"Albert Flores 5",email:"albert5@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:6,name:"Albert Flores 6",email:"albert6@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:7,name:"Albert Flores 7",email:"albert7@demo.com",phone:"+573101234577",role:"user",createdAt:"20 minutes ago"},{id:8,name:"Albert Flores 8",email:"albert8@demo.com",phone:"+573101234587",role:"user",createdAt:"20 minutes ago"},{id:9,name:"Albert Flores 9",email:"albert9@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:10,name:"Albert Flores 10",email:"albert10@demo.com",phone:"+573101234517",role:"user",createdAt:"20 minutes ago"}],search:"Something",pagination:[{active:!1,label:"1",url:null},{active:!0,label:"2",url:"#"},{active:!1,label:"3",url:"#"},{active:!1,label:"4",url:"#"},{active:!1,label:"5",url:null}]},render:o=>({components:{UsersViewComponent:a},setup(){return{...o}},template:`
      <users-view-component 
        v-model:search="search"
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
      />`})};var t,l,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {}
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    users: [{
      id: 1,
      name: 'Anna George',
      email: 'anna@demo.com',
      phone: '+573101231212',
      role: 'admin',
      createdAt: '2023/10/23'
    }, {
      id: 2,
      name: 'Albert Flores 2',
      email: 'albert2@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 3,
      name: 'Albert Flores 3',
      email: 'albert3@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 4,
      name: 'Albert Flores 4',
      email: 'albert4@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 5,
      name: 'Albert Flores 5',
      email: 'albert5@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 6,
      name: 'Albert Flores 6',
      email: 'albert6@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 7,
      name: 'Albert Flores 7',
      email: 'albert7@demo.com',
      phone: '+573101234577',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 8,
      name: 'Albert Flores 8',
      email: 'albert8@demo.com',
      phone: '+573101234587',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 9,
      name: 'Albert Flores 9',
      email: 'albert9@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 10,
      name: 'Albert Flores 10',
      email: 'albert10@demo.com',
      phone: '+573101234517',
      role: 'user',
      createdAt: '20 minutes ago'
    }],
    pagination: [{
      active: false,
      label: '1',
      url: null
    }, {
      active: true,
      label: '2',
      url: '#'
    }, {
      active: false,
      label: '3',
      url: '#'
    }, {
      active: false,
      label: '4',
      url: '#'
    }, {
      active: false,
      label: '5',
      url: null
    }]
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
      />\`
  })
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    users: [{
      id: 1,
      name: 'Anna George',
      email: 'anna@demo.com',
      phone: '+573101231212',
      role: 'admin',
      createdAt: '2023/10/23'
    }, {
      id: 2,
      name: 'Albert Flores 2',
      email: 'albert2@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 3,
      name: 'Albert Flores 3',
      email: 'albert3@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 4,
      name: 'Albert Flores 4',
      email: 'albert4@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 5,
      name: 'Albert Flores 5',
      email: 'albert5@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 6,
      name: 'Albert Flores 6',
      email: 'albert6@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 7,
      name: 'Albert Flores 7',
      email: 'albert7@demo.com',
      phone: '+573101234577',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 8,
      name: 'Albert Flores 8',
      email: 'albert8@demo.com',
      phone: '+573101234587',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 9,
      name: 'Albert Flores 9',
      email: 'albert9@demo.com',
      phone: '+573101234567',
      role: 'user',
      createdAt: '20 minutes ago'
    }, {
      id: 10,
      name: 'Albert Flores 10',
      email: 'albert10@demo.com',
      phone: '+573101234517',
      role: 'user',
      createdAt: '20 minutes ago'
    }],
    search: 'Something',
    pagination: [{
      active: false,
      label: '1',
      url: null
    }, {
      active: true,
      label: '2',
      url: '#'
    }, {
      active: false,
      label: '3',
      url: '#'
    }, {
      active: false,
      label: '4',
      url: '#'
    }, {
      active: false,
      label: '5',
      url: null
    }]
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
      />\`
  })
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const V=["NoUsersView","UsersView","UsersWithAppliedFilterView"];export{e as NoUsersView,n as UsersView,r as UsersWithAppliedFilterView,V as __namedExportsOrder,U as default};
//# sourceMappingURL=UsersView.stories-27aa465c.js.map
