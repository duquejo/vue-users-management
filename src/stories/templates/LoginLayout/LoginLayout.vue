<template>
  <main class="flex flex-col h-screen">
    <Header
      :user="currentUser"
      @login="onLogin"
      @logout="onLogout"
      @createAccount="onCreateAccount"
    />
    <article class="flex justify-center items-center h-full mx-6 md:mx-auto">
      <slot></slot>
    </article>
  </main>
</template>

<script setup>
import Header from '../../molecules/Header/Header.vue';
</script>
