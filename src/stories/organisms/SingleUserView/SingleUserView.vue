<template>
  <article>
    <section class="general-page">
      <div class="grid-content">
        <div class="grid-content__user-details">
          <div>
            <h5>Personal details</h5>
            <UserAvatar readonly class="m-auto mb-4 md:mb-auto" :url="user?.avatar?.url" :alt="user?.avatar?.alt" />
          </div>
          <div v-if="user.name || user.gender || user.nationality || user.birthday">
            <ul>
              <li v-if="user.name">
                <h6>Name</h6>
                <p>{{ user.name }}</p>
              </li>
              <li v-if="user.gender">
                <h6>Gender</h6>
                <p>{{ user.gender }}</p>
              </li>
              <li v-if="user.nationality">
                <h6>Nationality</h6>
                <p>{{ user.nationality }}</p>
              </li>
              <li v-if="user.birthday">
                <h6>Birth date</h6>
                <p>{{ user.birthday }}</p>
              </li>
            </ul>
          </div>
          <div v-if="user.address || user.city || user.state || user.country">
            <h5>Address</h5>
            <ul>
              <li v-if="user.address">
                <h6>Address line</h6>
                <p>{{ user.address }}</p>
              </li>
              <li v-if="user.city">
                <h6>City</h6>
                <p>{{ user.city }}</p>
              </li>
              <li v-if="user.state">
                <h6>State</h6>
                <p>{{ user.state }}</p>
              </li>
              <li v-if="user.country">
                <h6>Country</h6>
                <p>{{ user.country }}</p>
              </li>
            </ul>
          </div>
          <div v-if="user.email || user.phone_number || user.role">
            <h5>Contact info</h5>
            <ul>
              <li v-if="user.email">
                <h6>Email</h6>
                <p>{{ user.email }}</p>
              </li>
              <li v-if="user.phone_number">
                <h6>Phone number</h6>
                <p>{{ user.phone_number }}</p>
              </li>
              <li v-if="user.role">
                <h6>Role</h6>
                <p>{{ user.role }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-content__user-description">
          <div>
            <h5>Profile Description</h5>
            <p>{{ user.description || 'No description added' }}</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import UserAvatar from '../../molecules/UserAvatar/UserAvatar.vue';

defineProps({
  user: {
    type: Object,
    required: true,
  }
});
</script>

<style lang="postcss" scoped>
.general-page {
  .grid-content {
    @apply grid md:grid-cols-3 gap-x-6 items-start;
    &__user-details {
      @apply grid md:grid-cols-2 md:col-span-2 gap-x-4 gap-y-2;
      ul {
        li {
          @apply space-y-2;
          h6 {
            @apply leading-none mt-3;
          }
          p {
            @apply leading-none text-sm mt-0;
          }
          &:last-child {
            @apply mb-3 md:mb-auto;
          }
        }
        &:only-child {
          @apply md:mt-9;
        }
      }
    }
    &__user-description {
      @apply grid md:grid-cols-1 h-full content-between text-justify;
      &__buttons {
        @apply inline-flex gap-2 justify-evenly mt-5 md:mt-0;
      }
    }
  }
  h5 {
    @apply text-primary-700 mb-2 md:mt-0 border-t md:border-none pt-3 md:pt-0;
  }
}
</style>
