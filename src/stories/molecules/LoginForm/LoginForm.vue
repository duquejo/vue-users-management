<template>
  <form id="login-form" @submit.prevent="formSubmit" class="w-full max-w-sm">
    <div v-if="formErrors" class="md:flex">
      <div class="w-full text-center py-4">
        <span class="text-sm text-red-500 font-bold">{{ formErrors }}</span>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          Full Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="formData.fullName"
          id="inline-full-name"
          type="text"
          placeholder="Your full name"
          required
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-email"
        >
          Email
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="formData.email"
          id="inline-email"
          type="email"
          placeholder="your-email@email.com"
          required
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="formData.password"
          id="inline-password"
          type="password"
          placeholder="**************"
          required
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-3">
      <div class="md:w-1/3"></div>
      <label class="md:w-2/3 block font-bold">
        <input
          v-model="formData.remember"
          class="mr-1 leading-tight accent-primary-600"
          type="checkbox"
        />
        <span class="text-sm"> Remember me </span>
      </label>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <Button
          type="submit"
          class="w-full md:w-auto"
          :class="{ 'animation-pulse duration-75': isLoading }"
          :label="isLoading ? 'Wait a second...' : 'Sign In'"
          :disabled="isLoading"
          primary
        />
      </div>
    </div>
    <div v-if="props.registerLink" class="md:flex">
      <div class="w-full text-center py-4">
        <span class="text-sm italic"
          >New in Acme platform? Sign up
          <a :href="props.registerLink" class="text-link-600">here</a>.</span
        >
      </div>
    </div>
  </form>
</template>

<script setup>
import Button from '../../Atoms/Button/Button.vue';
import { reactive, ref } from 'vue';

const props = defineProps({
  registerLink: {
    type: String,
  },
  initialValues: {
    type: Object,
    default: () => ({
      fullName: '',
      email: '',
      password: '',
      remember: false,
    }),
  }
});

const emit = defineEmits(['onFormSubmit']);

const isLoading = ref(false);
const formErrors = ref();
const formData = ref(props.initialValues);

const formSubmit = () => {
  formErrors.value = '';
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
    emit('onFormSubmit', formData.value);
  }, 2000);
};
</script>

<style lang="postcss" scoped>
form {
  @apply text-secondary-600 dark:text-secondary-100;

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    @apply bg-secondary-200 dark:bg-secondary-600 appearance-none border-2 border-secondary-200 dark:border-secondary-600 rounded-xl w-full py-2 px-4 text-secondary-700 dark:text-secondary-200 leading-tight focus:outline-none focus:bg-white focus:border-primary-500 dark:focus:bg-transparent dark:focus:border-primary-300;
  }
}
</style>
