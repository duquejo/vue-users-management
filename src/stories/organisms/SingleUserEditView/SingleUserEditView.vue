<template>
  <article>
    <section class="general-page">
      <form @submit.prevent="onSubmitForm" class="grid-content">
        <div class="grid-content__user-details">
          <div>
            <h5>Personal details</h5>
            <UserAvatar class="m-auto mb-4 md:mb-auto" :url="formInputs.avatar.url" :alt="formInputs.avatar.alt" />
          </div>
          <div>
            <ul>
              <li>
                <label for="name">
                  <h6>Name</h6>
                </label>
                <p><input id="name" type="text" v-model="formInputs.name" /></p>
              </li>
              <li>
                <label for="gender">
                  <h6>Gender</h6>
                </label>
                <p>
                  <select id="gender" v-model="formInputs.gender">
                    <option disabled value="">Select one</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </p>
              </li>
              <li>
                <label for="nationality">
                  <h6>Nationality</h6>
                </label>
                <p><input id="nationality" type="text" v-model="formInputs.nationality" /></p>
              </li>
              <li>
                <label for="birthdate">
                  <h6>Birth date</h6>
                </label>
                <p><input id="birthdate" type="text" v-model="formInputs.birthday" /></p>
              </li>
            </ul>
          </div>
          <div>
            <h5>Address</h5>
            <ul>
              <li>
                <label for="address">
                  <h6>Address line</h6>
                </label>
                <p><input id="address" type="text" v-model="formInputs.address" /></p>
              </li>
              <li>
                <label for="city">
                  <h6>City</h6>
                </label>
                <p><input id="city" type="text" v-model="formInputs.city" /></p>
              </li>
              <li>
                <label for="state">
                  <h6>State</h6>
                </label>
                <p><input id="state" type="text" v-model="formInputs.state" /></p>
              </li>
              <li>
                <label for="country">
                  <h6>Country</h6>
                </label>
                <p><input id="country" type="text" v-model="formInputs.country" /></p>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact info</h5>
            <ul>
              <li>
                <label for="email">
                  <h6>Email</h6>
                </label>
                <p><input id="email" type="email" v-model="formInputs.email" /></p>
              </li>
              <li>
                <label for="phone_number">
                  <h6>Phone number</h6>
                </label>
                <p><input id="phone_number" type="tel" v-model="formInputs.phone_number" /></p>
              </li>
              <li>
                <h6>Role</h6>
                <p class="font-bold">{{ user.role }} <span class="tier">Current</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-content__user-description">
          <div>
            <label for="description">
              <h6>Profile Description</h6>
            </label>
            <p><textarea id="description" cols="30" rows="10">{{ formInputs.description }}</textarea></p>
          </div>
          <div class="grid-content__user-description__buttons">
            <Button label="Save" primary role="submit" />
            <Button label="Cancel" @click="onCancelSubmit"/>
          </div>
        </div>
      </form>
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../../atoms/Button/Button.vue';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar.vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['on-cancel-submit', 'on-submit-form']);

const formInputs = ref({
  name: props.user.name,
  gender: props.user.gender,
  birthday: props.user.birthday,
  nationality: props.user.nationality,
  address: props.user.address,
  phone_number: props.user.phone_number,
  city: props.user.city,
  state: props.user.state,
  country: props.user.country,
  role: props.user.role,
  email: props.user.email,
  description: props.user.description,
  avatar: props.user.avatar,
});

const onSubmitForm = () => {
  emit('on-submit-form', formInputs.value);
};

const onCancelSubmit = () => {
  emit('on-cancel-submit');
}
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
            @apply mt-3;
          }

          &:last-child {
            @apply mb-3 md:mb-auto;
          }
        }

        &:only-child {
          @apply md:mt-9;
        }
      }

      .tier {
        @apply ml-1 border px-1.5 py-0.5 border-secondary-500 text-secondary-500 rounded-xl text-[0.6rem] font-light cursor-pointer;
      }
    }

    &__user-description {
      @apply grid md:grid-cols-1 h-full content-between text-justify md:mt-9;

      &__buttons {
        @apply inline-flex gap-4 justify-center my-0 md:my-5;
      }
    }
  }
  h5 {
    @apply text-primary-700 mb-2 md:mt-0 border-t md:border-none pt-3 md:pt-0;
  }
}

input,
textarea,
select {
  @apply border rounded-xl p-2 text-xs md:text-sm text-secondary-900 dark:text-secondary-50 dark:bg-transparent w-full placeholder:text-xs;
}

textarea {
  @apply mt-1.5;
}

select {
  option {

    &:checked,
    &:hover {
      @apply bg-primary-600 text-white;
    }
  }
}
</style>
