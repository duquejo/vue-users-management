import UserAvatarComponent from './UserAvatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Molecules/User avatar',
  component: UserAvatarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const UserAvatar = {
  args: {
    url: 'https://picsum.photos/300/500',
    alt: 'Demo avatar',
    readonly: true,
  },
};