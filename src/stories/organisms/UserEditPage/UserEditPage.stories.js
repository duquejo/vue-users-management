import UserEditPageComponent from './UserEditPage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Organisms/Single User Page',
  component: UserEditPageComponent,
  tags: ['autodocs'],
  argTypes: {
    onFormSubmit: {},
  },
  render: (args) => ({
    components: {
      UserEditPageComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <user-edit-page-component 
        @on-form-submit="onFormSubmit"
      />`,
  }),
  parameters: {
    layout: 'fullscreen',
  },
};

export const UserEditPage = {
  args: {},
};