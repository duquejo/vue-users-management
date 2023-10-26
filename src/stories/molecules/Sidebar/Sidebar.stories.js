import SidebarComponent from './Sidebar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Molecules/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
};

export const Sidebar = {
  args: {
    isOpen: true,
  },
};