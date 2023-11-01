<template>
  <button :type="role" :class="classes" @click="onClick" :style="style" >
    {{ label }}
  </button>
</template>

<script setup>
import { reactive, computed } from 'vue';

const properties = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
  backgroundColor: {
    type: String,
  },
  role: {
    type: String,
    default: 'button'
  }
});

const props = reactive(properties);

const emit = defineEmits(['click']);

const classes = computed(() => ({
  'quizzes-button': true,
  'quizzes-button__primary': props.primary,
  'quizzes-button__secondary': !props.primary,
  [`quizzes-button__${props.size}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click');
}
</script>

<style lang="postcss" scoped>
.quizzes-button {
  @apply text-white rounded-3xl inline-block leading-none font-bold border-0 font-nunito cursor-pointer;

  &__primary {
    @apply bg-primary-700 text-white;

    &:hover:not([disabled]) {
      @apply focus:outline-none focus:ring-primary-500 hover:bg-primary-600;
    }
  }

  &__secondary {
    @apply bg-white/70 text-secondary-600/70 shadow-inset dark:bg-black/70 dark:text-secondary-100/70;

    &:hover:not([disabled]) {
      @apply focus:outline-none focus:ring-secondary-300 hover:bg-secondary-100 hover:text-secondary-600
      dark:focus:ring-secondary-800 dark:hover:bg-secondary-900 dark:hover:text-secondary-300;
    }
  }

  &__small {
    @apply text-xs px-4 py-2.5;
  }

  &__medium {
    @apply text-sm px-5 py-2.5;
  }

  &__large {
    @apply text-base px-6 py-3;
  }

  &:disabled {
    @apply bg-secondary-100 text-secondary-500 transition-colors duration-75 cursor-not-allowed;
  }

  &:hover {
    @apply focus:ring transition-all duration-500;
  }
}</style>