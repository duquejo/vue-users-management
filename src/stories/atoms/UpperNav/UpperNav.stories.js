import UpperNavComponent from './UpperNav.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Atoms/Upper navigation',
  component: UpperNavComponent,
  tags: ['autodocs'],
};

export const UpperNav = {
  args: {
    backUrl: '#',
    isActive: true,
  }
};

export const DisabledUpperNav = {
  args: {
    backUrl: '#',
    isActive: false,
  }
};