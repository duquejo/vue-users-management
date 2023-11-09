import{S as o}from"./SingleUserView-9fa88cd5.js";import"./vue.esm-bundler-ab224c85.js";import"./UserAvatar-74fa1290.js";import"./Avatar-4740d6a8.js";import"./Icon-4ba605c6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Button-a06ea5f2.js";const d={title:"Components/Organisms/Single user view",component:o,tags:["autodocs"],argTypes:{onFormSubmit:{}},parameters:{layout:"centered"}},e={args:{user:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",country:"United States",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}},render:s=>({components:{SingleUserViewComponent:o},setup(){return{...s}},template:`
      <single-user-view-component 
        :user="user"
        @on-form-submit="onFormSubmit"
      />`})};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      country: 'United States',
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
      SingleUserViewComponent
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <single-user-view-component 
        :user="user"
        @on-form-submit="onFormSubmit"
      />\`
  })
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const g=["AllUserArgs"];export{e as AllUserArgs,g as __namedExportsOrder,d as default};
//# sourceMappingURL=SingleUserView.stories-d82ab4d4.js.map
