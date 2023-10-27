import SidebarLayoutComponent from './SidebarLayout.vue';
import View from '../../organisms/View/View.vue';
import UsersView from '../../organisms/UsersView/UsersView.vue';
import UserEditView from '../../organisms/UserEditView/UserEditView.vue';

export default {
  title: 'Components/Templates/Basic with sidebar',
  component: SidebarLayoutComponent,
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
      <sidebar-layout-component><View /></sidebar-layout-component>`,
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
      <sidebar-layout-component><UsersView /></sidebar-layout-component>`,
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
      <sidebar-layout-component><UserEditView /></sidebar-layout-component>`,
  }),
};

export const SidebarLayout = {
};