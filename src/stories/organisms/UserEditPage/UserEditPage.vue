<template>
  <article>
    <section class="general-page">
      <div class="grid-content">
        <div class="grid-content__user-details">
          <div>
            <h5>Personal details</h5>
            <UserAvatar class="m-auto" />
          </div>
          <div>
            <ul>
              <li>
                <h6>Name</h6>
                <p>John Doe</p>
              </li>
              <li>
                <h6>Gender</h6>
                <p>Male</p>
              </li>
              <li>
                <h6>Nationality</h6>
                <p>Colombia</p>
              </li>
              <li>
                <h6>Birth date</h6>
                <p>1990/10/01</p>
              </li>
            </ul>
          </div>
          <div>
            <h5>Address</h5>
            <ul>
              <li>
                <h6>Address line</h6>
                <p>No 35 Jimmy Street</p>
              </li>
              <li>
                <h6>City</h6>
                <p>Antioquia</p>
              </li>
              <li>
                <h6>State</h6>
                <p>Bello</p>
              </li>
              <li>
                <h6>Country</h6>
                <p>Colombia</p>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact info</h5>
            <ul>
              <li>
                <h6>Phone number</h6>
                <p>573101231212</p>
              </li>
              <li>
                <h6>Email</h6>
                <p>foo@bar.com</p>
              </li>
              <li>
                <h6>Role</h6>
                <p>User</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-content__user-description">
          <div>
            <h5>Profile Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              Corporis et libero dicta vero, eveniet ad, dolores fuga impedit
              repudiandae, aspernatur deserunt placeat? Quos inventore voluptate
              pariatur iusto, aspernatur consequatur ea reiciendis, voluptas
              quisquam iste enim doloribus alias rem quam sequi nam dignissimos
              repellat ullam! Soluta numquam dolores rerum illo earum harum maxime
              aliquam magni est eaque fuga dicta ipsam in cumque atque,
            </p>
          </div>
          <div class="grid-content__user-description__buttons">
            <Button label="Save" primary size="large" />
            <Button label="Cancel" size="large" />
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import Button from '../../atoms/Button/Button.vue';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar.vue';
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
