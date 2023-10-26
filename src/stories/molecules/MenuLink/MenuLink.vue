<template>
  <li class="menu-link" :title="label">
    <a class="menu-link__section" :href="href">
      <Icon :model="icon" />
      {{ label }}
    </a>
    <Icon class="menu-link__section-arrow" model="chevronRight" size="small" />
  </li>
</template>

<script setup>
import Icon from '../../atoms/Icon/Icon.vue';

defineProps({
  icon: {
    type: String,
    default: 'user',
  },
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
.menu-link {
  @apply cursor-pointer leading-none inline-flex flex-row justify-between w-full px-4 py-3 font-semibold transition-all rounded-3xl items-center;
  &__section {
    @apply flex items-center align-baseline text-sm ms-2 me-4 leading-none;
    &-arrow {
      @apply invisible;
    }
  }
  &:hover,
  &:focus,
  &:active,
  .active {
    @apply bg-primary-200 text-primary-700 dark:bg-primary-700 dark:text-primary-200;
    .menu-link__section-arrow {
      @apply visible;
    }
  }
}
</style>
