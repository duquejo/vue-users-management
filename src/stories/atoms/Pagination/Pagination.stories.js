import PaginationComponent from './Pagination.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Atoms/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Pagination = {
  args: {
    links: [
      {
        active: false,
        label: '1',
        url: null,
      },
      {
        active: true,
        label: '2',
        url: '#',
      },
      {
        active: false,
        label: '3',
        url: '#',
      },
      {
        active: false,
        label: '4',
        url: '#',
      },
      {
        active: false,
        label: '5',
        url: null,
      },
    ]
  },
};