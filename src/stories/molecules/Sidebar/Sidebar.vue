<template>
  <div :class="sidebarClasses">
    <div class="sidebar-container__dashboard">
      <MenuAvatar :just-avatar="! isOpen" :user="user" />
      <ul class="sidebar-container__dashboard-items">
        <MenuLink icon="dashboard" label="Dashboard" href="#" />
        <MenuLink icon="chat" label="Chats" href="#" />
        <MenuLink icon="photo" label="Media" href="#" />
        <MenuLink icon="heart" label="Donate ☕" href="#" />
      </ul>
    </div>
    <div class="sidebar-container__account">
      <MenuLink icon="account" label="Account" href="#" />
      <MenuLink icon="logout" label="Logout" href="#" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import MenuLink from '../MenuLink/MenuLink.vue';
import MenuAvatar from '../../Atoms/MenuAvatar/MenuAvatar.vue';

const props = defineProps({
  user: Object,
  isOpen: Boolean,
});

const sidebarClasses = computed(() => ({
  'sidebar-container': true,
  'open': props.isOpen,
}));
</script>

<style lang="postcss" scoped>
.sidebar-container {
  @apply md:w-72 h-full md:h-auto py-9 md:my-9 md:ml-5 md:mr-3 md:space-y-5 flex flex-col justify-between text-secondary-500 dark:text-secondary-300 transition-all duration-500 md:relative w-full absolute bg-white dark:bg-secondary-950 md:bg-transparent z-10;
  &.open {
    @apply hidden md:flex md:w-12 flex-row md:flex-col;
    li {
      @apply -indent-[9999px] px-1.5 py-3;
    }
    &:before {
      @apply content-[''] absolute top-0 -right-4 w-px bg-secondary-300 h-full;
    }
  }
  &__dashboard {
    @apply mb-10 text-center;
    &-items {
      @apply mt-8 text-left;
    }
  }
  &__account {
    @apply border-t border-gray-300 py-3;
  }
}
</style>
