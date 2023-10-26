import SidebarLayoutComponent from './SidebarLayout.vue';
import Page from '../../organisms/Page/Page.vue';
import UsersPage from '../../organisms/UsersPage/UsersPage.vue';
import UserEditPage from '../../organisms/UserEditPage/UserEditPage.vue';

export default {
  title: 'Components/Templates/Basic with sidebar',
  component: SidebarLayoutComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const PageWithSidebar = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      Page,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <sidebar-layout-component><Page /></sidebar-layout-component>`,
  }),
};

export const UsersWithSidebar = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      UsersPage,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <sidebar-layout-component><UsersPage /></sidebar-layout-component>`,
  }),
};

export const EditUsersWithSidebar = {
  render: (args) => ({
    components: {
      SidebarLayoutComponent,
      UserEditPage,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <sidebar-layout-component><UserEditPage /></sidebar-layout-component>`,
  }),
};

export const SidebarLayout = {
};