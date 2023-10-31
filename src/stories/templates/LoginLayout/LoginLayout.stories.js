import LoginLayoutComponent from './LoginLayout.vue';
import LoginForm from '../../molecules/LoginForm/LoginForm.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Templates/Basic without sidebar',
  component: LoginLayoutComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onFormSubmit: {},
  },
  render: (args) => ({
    components: {
      LoginLayoutComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <login-layout-component 
        @on-form-submit="onFormSubmit"
      />`,
  }),
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoginLayout = {
  render: (args) => ({
    components: {
      LoginForm,
      LoginLayoutComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <login-layout-component><LoginForm /></login-layout-component>`,
  }),
};