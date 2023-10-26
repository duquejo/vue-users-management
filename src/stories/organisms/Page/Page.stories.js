// import { within, userEvent } from '@storybook/testing-library';
import Page from './Page.vue';

export default {
  title: 'Components/Organisms/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

export const GeneralPage = {};

// export const LoggedOut = {};

// // More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
// export const LoggedIn = {
//   render: () => ({
//     components: {
//       Page,
//     },
//     template: '<Page />',
//   }),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
