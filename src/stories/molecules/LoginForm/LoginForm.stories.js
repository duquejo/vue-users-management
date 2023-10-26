import LoginFormComponent from './LoginForm.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Molecules/Login form',
  component: LoginFormComponent,
  tags: ['autodocs'],
  argTypes: {
    onFormSubmit: {}
  },
  render: (args) => ({
    components: {
      LoginFormComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <login-form-component
        v-model:initialValues="initialValues"
        :registerLink="registerLink"
        @on-form-submit="onFormSubmit"
      />`,
  }),
};

export const LoginForm = {
  args: {
    registerLink: 'http://foo.bar',
    initialValues: {
      fullName: 'John Doe',
      email: 'foo@bar.com',
      password: 'foobar',
      remember: true,
    }
  },
};

export const LoginFormWithoutRegister = {
  args: {},
};