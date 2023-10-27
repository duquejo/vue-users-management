<template>
  <ul>
    <li class="active">1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li class="disabled">5</li> 
  </ul>
</template>

<script setup>
</script>

<style lang="postcss" scoped>
ul {
  @apply flex gap-2;
  li {
    @apply inline-flex justify-center items-center h-10 w-10 text-center border border-primary-300 dark:border-primary-900 dark:bg-primary-700 rounded-full cursor-pointer font-bold text-sm;
    &.active {
      @apply bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-100;
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