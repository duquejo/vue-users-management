<template>
  <span
    :title="isSidebarOpen ? 'Open menu' : 'Close menu'"
    @click="onToggleSidebar"
  >
    <Icon class="!mr-0" model="menu" />
  </span>
</template>

<script setup>
import { ref } from 'vue';
import Icon from '../../atoms/Icon/Icon.vue';

const emit = defineEmits(['toggleSidebar']);

const isSidebarOpen = ref(false);

const onToggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  emit('toggleSidebar');
};
</script>

<style lang="postcss" scoped>
span {
  @apply cursor-pointer fixed right-2 bottom-2 md:right-2 md:bottom-2 text-white bg-primary-700 h-12 w-12 flex justify-center items-center rounded-full hover:bottom-3 md:hover:bottom-3 transition-all z-20 shadow-2xl;
}
</style>
