import ListComponent from './List.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/atoms/List',
  component: ListComponent,
  tags: ['autodocs'],
};

export const List = {
  args: {
    users: [
      {
        id: 1,
        name: 'Anna George',
        email: 'anna@demo.com',
        phone: '+573101231212',
        role: 'admin',
        createdAt: '2023/10/23',
      },
      {
        id: 2,
        name: 'Albert Flores 2',
        email: 'albert2@demo.com',
        phone: '+573101234567',
        role: 'user',
        createdAt: '20 minutes ago',
      },
      {
        id: 3,
        name: 'Albert Flores 3',
        email: 'albert3@demo.com',
        phone: '+573101234567',
        role: 'user',
        createdAt: '20 minutes ago',
      },
      {
        id: 4,
        name: 'Albert Flores 4',
        email: 'albert4@demo.com',
        phone: '+573101234567',
        role: 'user',
        createdAt: '20 minutes ago',
      },
      {
        id: 5,
        name: 'Albert Flores 5',
        email: 'albert5@demo.com',
        phone: '+573101234567',
        role: 'user',
        createdAt: '20 minutes ago',
      },
      {
        id: 6,
        name: 'Albert Flores 6',
        email: 'albert6@demo.com',
        phone: '+573101234567',
        role: 'user',
        createdAt: '20 minutes ago',
      }
    ],
  },
};