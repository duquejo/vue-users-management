import{U as l}from"./UsersView-a0cf5d0d.js";import"./vue.esm-bundler-5e9aa986.js";import"./List-9d138cbe.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Search-9280f7cb.js";import"./Icon-9ba9a2c9.js";import"./Pagination-d3bdc29b.js";import"./Button-6fff1b7b.js";const h={title:"Components/Organisms/General Users View",component:l,tags:["autodocs"],argTypes:{onFormCreate:{},onFormDelete:{},onFormEdit:{},onFormSearch:{}},parameters:{layout:"centered"}},e={args:{}},r={args:{users:[{id:1,name:"Anna George",email:"anna@demo.com",phone:"+573101231212",role:"admin",createdAt:"2023/10/23"},{id:2,name:"Albert Flores 2",email:"albert2@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:3,name:"Albert Flores 3",email:"albert3@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:4,name:"Albert Flores 4",email:"albert4@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:5,name:"Albert Flores 5",email:"albert5@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:6,name:"Albert Flores 6",email:"albert6@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:7,name:"Albert Flores 7",email:"albert7@demo.com",phone:"+573101234577",role:"user",createdAt:"20 minutes ago"},{id:8,name:"Albert Flores 8",email:"albert8@demo.com",phone:"+573101234587",role:"user",createdAt:"20 minutes ago"},{id:9,name:"Albert Flores 9",email:"albert9@demo.com",phone:"+573101234567",role:"user",createdAt:"20 minutes ago"},{id:10,name:"Albert Flores 10",email:"albert10@demo.com",phone:"+573101234517",role:"user",createdAt:"20 minutes ago"}]},render:i=>({components:{UsersViewComponent:l},setup(){return{...i}},template:`
      <users-view-component 
        v-model:users="users"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
      />`})};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var a,m,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
      />\`
  })
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const f=["NoUsersView","UsersView"];export{e as NoUsersView,r as UsersView,f as __namedExportsOrder,h as default};
//# sourceMappingURL=UsersView.stories-a8bb658f.js.map
