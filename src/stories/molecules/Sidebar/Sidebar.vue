<template>
  <div v-if="user" :class="sidebarClasses">
    <div class="sidebar-container__dashboard">
      <MenuAvatar :just-avatar="! isOpen" :user="user" />
      <ul v-if="links.length > 0" class="sidebar-container__dashboard-items">
        <MenuLink v-for="link in links" :key="link.icon" :icon="link.icon" :label="link.label" :href="link.href" />
      </ul>
    </div>
    <div class="sidebar-container__account">
      <MenuLink icon="account" label="Account" :href="user.profileUrl" />
      <MenuLink icon="logout" label="Logout" :href="user.logoutUrl" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import MenuLink from '../MenuLink/MenuLink.vue';
import MenuAvatar from '../../atoms/MenuAvatar/MenuAvatar.vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  isOpen: Boolean,
  links: {
    type: Array,
    required: true,
  },
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
