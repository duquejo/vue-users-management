<template>
  <div class="avatar">
    <img
      :src="src"
      :alt="alt"
      :height="height"
      :width="width"
      @load="onLoadImage"
    />
    <div class="avatar-skeleton" :class="{'opacity-0': isLoaded }">
      <Icon class="h-72 w-72 max-h-10 max-w-10 !mr-0" model="photo" />
      <span>Loading...</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon from '../Icon/Icon.vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    default: 325,
  },
  width: {
    type: Number,
    default: 258,
  },
});

const isLoaded = ref(false);

const onLoadImage = () => {
  isLoaded.value = true;
};
</script>

<style lang="postcss" scoped>
.avatar {
  @apply text-secondary-400 relative rounded-2xl;
  img{
    @apply object-cover w-full transition-all duration-700 h-full rounded-2xl hover:scale-110 z-10;
  }
  .avatar-skeleton {
    @apply rounded-2xl absolute bg-white dark:bg-black top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center transition-opacity duration-500;
    & > * {
      @apply animate-pulse;
    }
    span {
      @apply text-xl font-bold tracking-widest;
    }
  }
}

</style>
