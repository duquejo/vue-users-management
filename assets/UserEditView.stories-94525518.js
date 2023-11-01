import{U as i}from"./UserEditView-14dbc872.js";import"./vue.esm-bundler-f9c7f19d.js";import"./Button-e983ba1b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./UserAvatar-ced0a786.js";import"./Avatar-3c638c93.js";import"./Icon-9b571dc5.js";const y={title:"Components/Organisms/Single User View",component:i,tags:["autodocs"],argTypes:{onFormSubmit:{}},parameters:{layout:"centered"}},e={args:{user:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}},render:p=>({components:{UserEditViewComponent:i},setup(){return{...p}},template:`
      <user-edit-view-component 
        :user="user"
        @on-form-submit="onFormSubmit"
      />`})},r={args:{user:{}}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
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
      role: 'User',
      email: 'foo@bar.com',
      description: 'Welcome to my profile!'
    }
  },
  render: args => ({
    components: {
      UserEditViewComponent
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <user-edit-view-component 
        :user="user"
        @on-form-submit="onFormSubmit"
      />\`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,a,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    user: {}
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const b=["AllUserArgs","NoUserArgs"];export{e as AllUserArgs,r as NoUserArgs,b as __namedExportsOrder,y as default};
//# sourceMappingURL=UserEditView.stories-94525518.js.map
