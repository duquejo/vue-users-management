<template>
 <ul v-if="links.length > 0">
  <li
   v-for="(link, index) in links"
   :key="index"
   :class="{
    disabled: !link.url,
    active: link.url && link.active,
   }">
   <component
    :is="link.url ? 'a' : 'span'"
    :href="link.url"
    >{{ link.label }}</component
   >
  </li>
 </ul>
</template>

<script setup>
defineProps({
 links: {
  type: Array,
  default: () => [],
 },
});
</script>

<style lang="postcss" scoped>
ul {
 @apply flex gap-2;
 li {
  @apply inline-flex justify-center items-center h-10 w-10 text-center border border-primary-300 dark:border-primary-700 dark:bg-primary-700 rounded-full cursor-pointer font-bold text-sm;
  &:hover, &.active {
   @apply bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-100 dark:border-primary-950 transition-colors duration-300;
  }
  &.disabled {
   @apply bg-secondary-200 text-secondary-500 border-secondary-300 pointer-events-none dark:border-secondary-700;
  }
  &:last-child {
   @apply mr-0;
  }
  &:first-child {
   @apply ml-0;
  }
 }
}
</style>
