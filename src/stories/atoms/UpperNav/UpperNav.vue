<template>
  <nav v-if="isActive">
    <div>
      <Icon model="chevronLeft" size="small"/>
      <a class="group" :href="backUrl">Back <span class="group-hover:max-w-full"/></a>
    </div>
  </nav>
  <div v-else class="nav-gap"></div>
</template>

<script setup>
import Icon from '../../atoms/Icon/Icon.vue';

defineProps({
  backUrl: String,
  isActive: {
    type: Boolean,
    default: true,
  }
});

</script>

<style lang="postcss" scoped>
nav, .nav-gap {
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