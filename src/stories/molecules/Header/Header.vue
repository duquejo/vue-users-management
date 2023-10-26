<template>
  <header>
    <div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
            fill="#FFF"
          />
          <path
            d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
            fill="#555AB9"
          />
          <path
            d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
            fill="#91BAF8"
          />
        </g>
      </svg>
      <h1>Acme</h1>
    </div>
    <div>
      <span class="welcome" v-if="user"
        >Welcome, <b>{{ user.name }}</b
        >!</span
      >
      <Button
        size="small"
        @click="emit('logout')"
        label="Log out"
        v-if="user"
      />
      <Button size="small" @click="emit('login')" label="Log in" v-if="!user" />
      <Button
        primary
        size="small"
        @click="emit('createAccount')"
        label="Sign up"
        v-if="!user"
      />
    </div>
  </header>
</template>

<script setup>
import Button from '../../atoms/Button/Button.vue';

const props = defineProps({
  user: Object,
});

const emit = defineEmits(['login', 'logout', 'createAccount']);
</script>

<style lang="postcss" scoped>
header {
  @apply font-nunito border-b border-b-gray-200 dark:border-b-gray-700 border-solid py-3.5 px-5 flex items-center justify-between;

  svg {
    @apply inline-block align-top mr-2;
  }

  h1 {
    @apply font-bold text-xl leading-none my-1.5 mx-0 inline-block align-top text-secondary-700 dark:text-secondary-200;
  }

  button + button {
    @apply ml-2.5;
  }

  .welcome {
    @apply text-secondary-600 dark:text-secondary-100 text-sm mr-2.5;
  }
}
</style>
