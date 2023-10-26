<template>
  <div class="relative">
    <Avatar class="shadow-xl" src="https://picsum.photos/400/600" alt="My avatar"/>
    <Button :primary="false" label="Edit avatar"/>
  </div>
</template>

<script setup>
import Avatar from '../../atoms/Avatar/Avatar.vue';
import Button from '../../atoms/Button/Button.vue';
</script>

<style lang="postcss" scoped>
Button {
  @apply absolute bottom-3.5 left-0 right-0 w-11/12 mx-auto;
}
</style>