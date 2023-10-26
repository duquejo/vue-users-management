import{c as u,a as i,b as c,r as l,o as p}from"./vue.esm-bundler-ebeff139.js";import{M as g}from"./Header-1ad7a14e.js";import{L}from"./LoginForm-3d7a7a33.js";import"./Button-c438feea.js";import"./_plugin-vue_export-helper-c27b6911.js";const d={class:"flex flex-col h-screen"},y={class:"flex justify-center items-center h-full mx-6 md:mx-auto"},m={__name:"LoginLayout",setup(e){return(o,f)=>(p(),u("main",d,[i(g,{user:o.currentUser,onLogin:o.onLogin,onLogout:o.onLogout,onCreateAccount:o.onCreateAccount},null,8,["user","onLogin","onLogout","onCreateAccount"]),c("article",y,[l(o.$slots,"default")])]))}},t=m;m.__docgenInfo={exportName:"default",displayName:"LoginLayout",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/vue-users-management/vue-users-management/src/stories/templates/LoginLayout/LoginLayout.vue"]};const x={title:"Components/Templates/Basic without sidebar",component:t,parameters:{layout:"fullscreen"},argTypes:{onFormSubmit:{}},render:e=>({components:{LoginLayoutComponent:t},setup(){return{...e}},template:`
      <login-layout-component 
        @on-form-submit="onFormSubmit"
      />`}),parameters:{layout:"fullscreen"}},n={render:e=>({components:{LoginForm:L,LoginLayoutComponent:t},setup(){return{...e}},template:`
      <login-layout-component><LoginForm /></login-layout-component>`})};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      LoginForm,
      LoginLayoutComponent
    },
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <login-layout-component><LoginForm /></login-layout-component>\`
  })
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const B=["LoginLayout"];export{n as LoginLayout,B as __namedExportsOrder,x as default};
//# sourceMappingURL=LoginLayout.stories-c0c83a7d.js.map
