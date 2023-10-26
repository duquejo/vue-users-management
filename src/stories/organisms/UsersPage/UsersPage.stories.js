import UsersPageComponent from './UsersPage.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Organisms/General Users Page',
  component: UsersPageComponent,
  tags: ['autodocs'],
  argTypes: {
    onFormCreate: {},
    onFormDelete: {},
    onFormEdit: {},
    onFormSearch: {},
  },
  render: (args) => ({
    components: {
      UsersPageComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <users-page-component 
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
      />`,
  }),
  parameters: {
    layout: 'fullscreen',
  },
};

export const UsersPage = {
  args: {},
};