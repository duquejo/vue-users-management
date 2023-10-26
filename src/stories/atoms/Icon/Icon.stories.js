import IconComponent from './Icon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/atoms/Icon',
  component: IconComponent,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    model: {
      control: {
        type: 'select',
      },
      options: ['photo', 'menu', 'account', 'settings', 'chat', 'dashboard', 'heart', 'logout', 'cancel', 'chevronRight', 'search', 'chevronLeft']
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large']
    },
  },
};

export const Icon = {
  args: {
    model: 'logout',
    class: 'text-secondary-500',
    size: 'large'
  },
};

export const IconWithClass = {
  args: {
    model: 'logout',
    class: 'text-red-500',
    size: 'medium'
  },
};