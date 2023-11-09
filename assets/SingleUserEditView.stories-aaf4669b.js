import{S as r}from"./SingleUserEditView-04137c2b.js";import"./vue.esm-bundler-ab224c85.js";import"./Button-a06ea5f2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./UserAvatar-74fa1290.js";import"./Avatar-4740d6a8.js";import"./Icon-4ba605c6.js";const f={title:"Components/Organisms/Single user edit view",component:r,tags:["autodocs"],argTypes:{onSubmitForm:{},onCancelSubmit:{},onResetForm:{},formType:{control:{type:"select"},options:["edit","create"]}},render:p=>({components:{SingleUserEditViewComponent:r},setup(){return{...p}},template:`
      <single-user-edit-view-component 
        :user="user"
        :formType="formType"
        @on-cancel-submit="onCancelSubmit"
        @on-submit-form="onSubmitForm"
        @on-reset-form="onResetForm"
      />`}),parameters:{layout:"centered"}},e={args:{formType:"edit",user:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",country:"United States",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}}},t={args:{formType:"create"}};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    formType: 'edit',
    user: {
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
      country: 'United States',
      role: 'User',
      email: 'foo@bar.com',
      description: 'Welcome to my profile!'
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,m,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    formType: 'create'
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const b=["EditForm","CreateForm"];export{t as CreateForm,e as EditForm,b as __namedExportsOrder,f as default};
//# sourceMappingURL=SingleUserEditView.stories-aaf4669b.js.map
