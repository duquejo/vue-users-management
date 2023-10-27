import AvatarComponent from './Avatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Atoms/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
};

export const Avatar = {
  args: {
    src: 'https://placehold.co/400x600',
    alt: 'Some placeholder image',
  },
};