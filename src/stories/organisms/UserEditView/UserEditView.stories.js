import UserEditViewComponent from './UserEditView.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Organisms/Single User View',
  component: UserEditViewComponent,
  tags: ['autodocs'],
  argTypes: {
    onFormSubmit: {},
  },
  render: (args) => ({
    components: {
      UserEditViewComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <user-edit-view-component 
        @on-form-submit="onFormSubmit"
      />`,
  }),
  parameters: {
    layout: 'centered',
  },
};

export const UserEditView = {
  args: {},
};