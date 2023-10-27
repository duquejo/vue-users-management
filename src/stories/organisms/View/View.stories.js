// import { within, userEvent } from '@storybook/testing-library';
import View from './View.vue';

export default {
  title: 'Components/Organisms/View',
  component: View,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'centered',
  },
};

export const GeneralView = {};

// export const LoggedOut = {};

// // More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
// export const LoggedIn = {
//   render: () => ({
//     components: {
//       View,
//     },
//     template: '<View />',
//   }),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
