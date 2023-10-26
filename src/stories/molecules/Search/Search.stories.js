
import SearchComponent from './Search.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Components/Molecules/Search',
  component: SearchComponent,
  tags: ['autodocs'],
};


export const Search = {
  args: {
    input: 'Hello',
  },
  argTypes: {
    onInputChange: {},
  },
  render: (args) => ({
    components: {
      SearchComponent,
    },
    setup() {
      return {
        ...args,
      };
    },
    template: `<search-component v-model:input="input" @input-change="onInputChange"/>`,
  }),
};

""