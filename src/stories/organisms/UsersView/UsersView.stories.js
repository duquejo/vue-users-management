import UsersViewComponent from './UsersView.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Organisms/General Users View',
  component: UsersViewComponent,
  tags: ['autodocs'],
  argTypes: {
    onFormCreate: {},
    onFormDelete: {},
    onFormEdit: {},
    onFormSearch: {},
    onProfileClick: {},
  },
  parameters: {
    layout: 'centered',
  },
};

const users = [
  {
    id: 1,
    name: 'Anna George',
    email: 'anna@demo.com',
    phone_number: '+573101231212',
    role: 'admin',
    created_at: '2023/10/23',
  },
  {
    id: 2,
    name: 'Albert Flores 2',
    email: 'albert2@demo.com',
    phone_number: '+573101234567',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 3,
    name: 'Albert Flores 3',
    email: 'albert3@demo.com',
    phone_number: '+573101234567',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 4,
    name: 'Albert Flores 4',
    email: 'albert4@demo.com',
    phone_number: '+573101234567',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 5,
    name: 'Albert Flores 5',
    email: 'albert5@demo.com',
    phone_number: '+573101234567',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 6,
    name: 'Albert Flores 6',
    email: 'albert6@demo.com',
    phone_number: '+573101234567',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 7,
    name: 'Albert Flores 7',
    email: 'albert7@demo.com',
    phone_number: '+573101234577',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 8,
    name: 'Albert Flores 8',
    email: 'albert8@demo.com',
    phone_number: '+573101234587',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 9,
    name: 'Albert Flores 9',
    email: 'albert9@demo.com',
    phone_number: '+573101234567',
    role: 'user',
    created_at: '20 minutes ago',
  },
  {
    id: 10,
    name: 'Albert Flores 10',
    email: 'albert10@demo.com',
    phone_number: '+573101234517',
    role: 'user',
    created_at: '20 minutes ago',
  },
];

const pagination = [
  {
    active: false,
    label: '1',
    url: null,
  },
  {
    active: true,
    label: '2',
    url: '#',
  },
  {
    active: false,
    label: '3',
    url: '#',
  },
  {
    active: false,
    label: '4',
    url: '#',
  },
  {
    active: false,
    label: '5',
    url: null,
  },
];

export const NoUsersView = {
  args: {}
};

export const UsersView = {
  args: {
    users,
    pagination
  },
  render: (args) => ({
    components: {
      UsersViewComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <users-view-component 
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
        @on-profile-click="onProfileClick"
      />`,
  }),
};

export const UsersWithAppliedFilterView = {
  args: {
    users,
    search: 'Something',
    pagination
  },
  render: (args) => ({
    components: {
      UsersViewComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <users-view-component 
        v-model:search="search"
        v-model:users="users"
        v-model:paginationLinks="pagination"
        @on-form-create="onFormCreate"
        @on-form-delete="onFormDelete"
        @on-form-edit="onFormEdit"
        @on-form-search="onFormSearch"
        @on-profile-click="onProfileClick"
      />`,
  }),
};