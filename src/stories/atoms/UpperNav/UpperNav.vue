<template>
  <nav>
    <div>
      <Icon model="chevronLeft" size="small"/>
      <a class="group" href="#">Back <span class="group-hover:max-w-full"/></a>
    </div>
  </nav>
</template>

<script setup>
import Icon from '../../Atoms/Icon/Icon.vue';
</script>

<style lang="postcss" scoped>
nav {
  @apply flex justify-between p-5 font-bold dark:text-secondary-200;
  div {
    @apply inline-flex cursor-pointer;
    a {
      @apply text-sm leading-none;
      span {
        @apply block max-w-0 transition-all duration-300 h-0.5 bg-primary-600;
      }
    }
  }
}
</style>