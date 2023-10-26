<template>
  <component :is="icons[model]" :class="classes" @click="emit('click')" />
</template>

<script setup>
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog8ToothIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  WindowIcon,
  XMarkIcon,
  PhotoIcon,
} from '@heroicons/vue/24/outline';

import { computed } from 'vue';

const props = defineProps({
  model: {
    type: String,
    default: '',
    required: true,
  },
  class: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
  },
});

const emit = defineEmits(['click']);

const sizes = {
  medium: 'h-5 w-5',
  small: 'h-3 w-3',
  large: 'h-7 w-7',
};

const classes = computed(() => ({
  [props.class]: true,
  [sizes[props.size]]: true,
  'inline mr-2 align-middle dark:text-secondary-300': true,
}));

const icons = {
  account: UserIcon,
  cancel: XMarkIcon,
  chat: ChatBubbleBottomCenterTextIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  dashboard: WindowIcon,
  heart: HeartIcon,
  logout: ArrowRightOnRectangleIcon,
  menu: Bars3Icon,
  search: MagnifyingGlassIcon,
  settings: Cog8ToothIcon,
  photo: PhotoIcon,
};
</script>
