import SingleUserEditViewComponent from './SingleUserEditView.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Organisms/Single user edit view',
  component: SingleUserEditViewComponent,
  tags: ['autodocs'],
  argTypes: {
    onSubmitForm: {},
    onCancelSubmit: {},
  },
  args: {
    user: {
      avatar: {
        url: 'https://picsum.photos/400/600',
        alt: 'Demo image',
      },
      name: 'John Doe',
      gender: 'Male',
      birthday: new Date(),
      nationality: 'United States',
      address: 'Mary 123 Street 4th',
      phone_number: '+13120456789',
      city: 'Los Angeles',
      state: 'Los Angeles',
      country: 'United States',
      role: 'User',
      email: 'foo@bar.com',
      description: 'Welcome to my profile!',
    },
  },
  render: (args) => ({
    components: {
      SingleUserEditViewComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <single-user-edit-view-component 
        :user="user"
        @on-cancel-submit="onCancelSubmit"
        @on-submit-form="onSubmitForm"
      />`,
  }),
  parameters: {
    layout: 'centered',
  },
};

export const AllArgs = {};