import SidebarLayoutComponent from './SidebarLayout.vue';
import View from '../../organisms/View/View.vue';
import UsersView from '../../organisms/UsersView/UsersView.vue';
import UserEditView from '../../organisms/UserEditView/UserEditView.vue';

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
    ]
  },
  argTypes: {
    onToggleSidebar: {}
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const ViewWithSidebar = {
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
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><View /></sidebar-layout-component>`,
  }),
};

export const UsersWithSidebar = {
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

export const EditUsersWithSidebar = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      UserEditView,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <sidebar-layout-component @toggle-sidebar="onToggleSidebar" :user="user" v-model:isSidebarOpen="isSidebarOpen" :links="links"><UserEditView /></sidebar-layout-component>`,
  }),
};

export const SidebarLayout = {
};