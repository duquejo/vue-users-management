import{S as t}from"./SingleUserEditView-f4c5bdb4.js";import"./vue.esm-bundler-ab224c85.js";import"./Button-f996d161.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./UserAvatar-6b3aaba3.js";import"./Avatar-4740d6a8.js";import"./Icon-4ba605c6.js";const d={title:"Components/Organisms/Single user edit view",component:t,tags:["autodocs"],argTypes:{onSubmitForm:{},onCancelSubmit:{}},args:{user:{avatar:{url:"https://picsum.photos/400/600",alt:"Demo image"},name:"John Doe",gender:"Male",birthday:new Date,nationality:"United States",address:"Mary 123 Street 4th",phone_number:"+13120456789",city:"Los Angeles",state:"Los Angeles",country:"United States",role:"User",email:"foo@bar.com",description:"Welcome to my profile!"}},render:n=>({components:{SingleUserEditViewComponent:t},setup(){return{...n}},template:`
      <single-user-edit-view-component 
        :user="user"
        @on-cancel-submit="onCancelSubmit"
        @on-submit-form="onSubmitForm"
      />`}),parameters:{layout:"centered"}},e={};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const g=["AllArgs"];export{e as AllArgs,g as __namedExportsOrder,d as default};
//# sourceMappingURL=SingleUserEditView.stories-00feed36.js.map
