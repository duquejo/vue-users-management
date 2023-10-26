import MenuLinkComponent from './MenuLink.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Molecules/Menu link',
  component: MenuLinkComponent,
  tags: ['autodocs'],
};

export const MenuLink = {
  args: {
    href: 'https://placehold.co/400x600',
    label: 'Some placeholder image',
    icon: 'chat'
  },
};