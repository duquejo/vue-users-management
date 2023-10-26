<template>
  <div class="flex flex-col gap-2 text-center">
    <h1 v-text="msg" />
    <Button :label="String(count)" size="small" :primary="true" @click="onClick" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../stories/Atoms/Button/Button.vue';

defineProps({
  msg: String,
});

const count = ref(0);
const onClick = () => {
  console.log(count.value);
  return count.value++;
};
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-black;
}
</style>