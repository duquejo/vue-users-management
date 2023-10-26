import FloatingMenuComponent from './FloatingMenu.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Molecules/Floating menu',
  component: FloatingMenuComponent,
  tags: ['autodocs'],
  argTypes: {
    onToggleSidebar: {},
  },
  render: (args) => ({
    components: {
      FloatingMenuComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <floating-menu-component
        @toggle-sidebar="onToggleSidebar"
      />`,
  }),
  parameters: {
    layout: 'centered',
  },
};

export const FloatingMenu = {
  args: {},
};