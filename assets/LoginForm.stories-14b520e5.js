import{L as e}from"./LoginForm-4babb061.js";import"./vue.esm-bundler-5e9aa986.js";import"./Button-6fff1b7b.js";import"./_plugin-vue_export-helper-c27b6911.js";const d={title:"Components/Molecules/Login form",component:e,tags:["autodocs"],argTypes:{onFormSubmit:{}},render:p=>({components:{LoginFormComponent:e},setup(){return{...p}},template:`
      <login-form-component
        v-model:initialValues="initialValues"
        :registerLink="registerLink"
        @on-form-submit="onFormSubmit"
      />`})},o={args:{registerLink:"http://foo.bar",initialValues:{fullName:"John Doe",email:"foo@bar.com",password:"foobar",remember:!0}}},r={args:{}};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    registerLink: 'http://foo.bar',
    initialValues: {
      fullName: 'John Doe',
      email: 'foo@bar.com',
      password: 'foobar',
      remember: true
    }
  }
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,i,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const f=["LoginForm","LoginFormWithoutRegister"];export{o as LoginForm,r as LoginFormWithoutRegister,f as __namedExportsOrder,d as default};
//# sourceMappingURL=LoginForm.stories-14b520e5.js.map
