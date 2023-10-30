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
    user: {
      profileUrl: '/profile',
      logoutUrl: '/logout',
    },
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
};