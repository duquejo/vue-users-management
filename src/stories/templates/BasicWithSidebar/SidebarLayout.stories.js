import SidebarLayoutComponent from './SidebarLayout.vue';
import View from '../../organisms/View/View.vue';
import UsersView from '../../organisms/UsersView/UsersView.vue';
import SingleUserEditView from '../../organisms/SingleUserEditView/SingleUserEditView.vue';
import SingleUserView from '../../organisms/SingleUserView/SingleUserView.vue';

export default {
  title: 'Components/Templates/Basic with sidebar',
  component: SidebarLayoutComponent,
  tags: ['autodocs'],
  args: {
    user: {
      name: 'John Doe',
      role: 'Editor',
      avatarUrl: 'https://placehold.co/100x100',
      profileUrl: '/profile',
      logoutUrl: '/logout',
    },
    isSidebarOpen: true,
    links: [
      {
        order: 1,
        label: 'Dashboard',
        href: '#',
        icon: 'dashboard',
      },
      {
        order: 2,
        label: 'Chats',
        href: '#',
        icon: 'chat',
      },
      {
        order: 3,
        label: 'Media',
        href: '#',
        icon: 'photo',
      },
      {
        order: 4,
        label: 'Donate ☕',
        href: '#',
        icon: 'heart',
      },
    ],
    topNavigation: {
      active: false,
    }
  },
  argTypes: {
    onToggleSidebar: {}
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const SingleViewUsage = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      View,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links" :top-navigation="topNavigation"><View /></sidebar-layout-component>`,
  }),
};

export const AllUsers = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      UsersView,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UsersView /></sidebar-layout-component>`,
  }),
};

export const EditUser = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      SingleUserEditView,
    },
    setup() {

      const currentUser = {
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
        role: 'User',
        email: 'foo@bar.com',
        description: 'Welcome to my profile!',
      };
      
      return {
        ...args,
        currentUser,
      };
    },
    template: `
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserEditView :user="currentUser"/>
      </sidebar-layout-component>`,
  }),
};

export const ReadOnlyView = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      SingleUserView,
    },
    setup() {

      const currentUser = {
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
        role: 'User',
        email: 'foo@bar.com',
        description: 'Welcome to my profile!',
      };
      
      return {
        ...args,
        currentUser,
      };
    },
    template: `
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links">
        <SingleUserView :user="currentUser"/>
      </sidebar-layout-component>`,
  }),
};

export const JustSidebar = {
};