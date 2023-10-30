import{U as i}from"./UserEditView-32d30da0.js";import"./vue.esm-bundler-5e9aa986.js";import"./Button-6fff1b7b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./UserAvatar-f3b10f3f.js";import"./Avatar-c1be6cb3.js";import"./Icon-9ba9a2c9.js";const y={title:"Components/Organisms/Single User View",component:i,tags:["autodocs"],argTypes:{onFormSubmit:{}},parameters:{layout:"centered"}},e={args:{user:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}},render:p=>({components:{UserEditViewComponent:i},setup(){return{...p}},template:`
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
//# sourceMappingURL=UserEditView.stories-19fa71d5.js.map
