<template>
  <div :class="avatarContainerClasses">
    <div class="avatar-container__image relative">
      <img class="rounded-full" src="https://placehold.co/100x100" alt="User" />
      <span class="absolute top-1 right-1 flex h-3 w-3" title="Online">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
        ></span>
      </span>
    </div>
    <template v-if="justAvatar">
      <h4 class="mt-2 dark:text-secondary-300">John Doe</h4>
      <h6 class="dark:text-secondary-400">Site admin</h6>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  class: String,
  user: Object,
  justAvatar: Boolean,
});

const avatarContainerClasses = computed(() => ({
  'avatar-container': true,
  [props.class]: true,
}));

</script>

<style lang="postcss" scoped>
.avatar-container{
  @apply md:h-40 text-center;
  &__image {
    @apply relative inline-flex;
  }
}
</style>
