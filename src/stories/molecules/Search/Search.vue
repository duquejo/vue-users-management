<template>
  <div class="inline-flex items-center relative text-secondary-500 dark:text-secondary-400">
    <Icon size="medium" model="search" class="absolute ml-3" />
    <input
      :value="properties.input"
      @input="onInputChange"
      placeholder="Josh Nicholls, Faye Vale..."
    />
    <Icon
      size="medium"
      model="cancel"
      class="absolute right-0 cursor-pointer hover:animate-spin-once"
      @click="onCancelSearch"
    />
  </div>
</template>

<script setup>
import Icon from '../../atoms/Icon/Icon.vue';
import { ref } from 'vue';

const props = defineProps({
  input: {
    type: String,
    default: '',
  },
});

const properties = ref(props);
const debounceTimeout = ref(null);

const emit = defineEmits(['inputChange']);

const onInputChange = (event) => {
  if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

  debounceTimeout.value = setTimeout(() => {
    const text = event.target.value;
    properties.value = {
      ...properties,
      input: text,
    };
    emit('inputChange', text);
  }, 300);
};

const onCancelSearch = () => {
  properties.value = {
    ...properties,
    input: '',
  };
  emit('inputChange', '');
};
</script>

<style lang="postcss" scoped>
input {
  @apply border rounded-xl py-1.5 pl-10 pr-5 text-xs md:text-sm text-secondary-900 dark:text-secondary-50 dark:bg-transparent w-full placeholder:text-xs;
}
</style>
