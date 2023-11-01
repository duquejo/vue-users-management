import SingleUserViewComponent from './SingleUserView.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Organisms/Single user view',
  component: SingleUserViewComponent,
  tags: ['autodocs'],
  argTypes: {
    onFormSubmit: {},
  },
  parameters: {
    layout: 'centered',
  },
};

export const AllUserArgs = {
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
      country: 'United States',
      phone_number: '+13120456789',
      city: 'Los Angeles',
      state: 'Los Angeles',
      role: 'User',
      email: 'foo@bar.com',
      description: 'Welcome to my profile!',
    },
  },
  render: (args) => ({
    components: {
      SingleUserViewComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <single-user-view-component 
        :user="user"
        @on-form-submit="onFormSubmit"
      />`,
  }),
};