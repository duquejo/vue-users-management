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
                <p><input id="name" type="text" v-model="formInputs.name" placeholder="John Doe"/></p>
              </li>
              <li>
                <label for="gender">
                  <h6>Gender</h6>
                </label>
                <p>
                  <select id="gender" v-model="formInputs.gender">
                    <option disabled value="">Select gender</option>
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
                <p><input id="nationality" type="text" v-model="formInputs.nationality" placeholder="Canadian" /></p>
              </li>
              <li>
                <label for="birthdate">
                  <h6>Birth date</h6>
                </label>
                <p><input id="birthdate" type="date" v-model="formInputs.birthday" placeholder="1986-08-01"/></p>
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
                <p><input id="address" type="text" v-model="formInputs.address" placeholder="Wannabe 42 Sydney Street"/></p>
              </li>
              <li>
                <label for="city">
                  <h6>City</h6>
                </label>
                <p><input id="city" type="text" v-model="formInputs.city" placeholder="Bosnia" /></p>
              </li>
              <li>
                <label for="state">
                  <h6>State</h6>
                </label>
                <p><input id="state" type="text" v-model="formInputs.state" placeholder="Cambodia"/></p>
              </li>
              <li>
                <label for="country">
                  <h6>Country</h6>
                </label>
                <p><input id="country" type="text" v-model="formInputs.country" placeholder="Cameroon"/></p>
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
                <p><input id="email" type="email" v-model="formInputs.email" placeholder="john@foo.com"/></p>
              </li>
              <li>
                <label for="password">
                  <h6>Password</h6>
                </label>
                <p><input id="password" type="password" v-model="formInputs.password" placeholder="**************" /></p>
              </li>
              <li>
                <label for="phone_number">
                  <h6>Phone number</h6>
                </label>
                <p><input id="phone_number" type="tel" v-model="formInputs.phone_number" placeholder="+525109876532"/></p>
              </li>
              <li>
                <label for="role">
                  <h6>Role <p class="ml-2 font-bold text-sm inline text-secondary-950">{{ formInputs.role || 'Select one' }} <span class="tier">Current</span></p></h6>
                </label>
                <p>
                  <select id="role" v-model="formInputs.role">
                    <option disabled value="">Select role</option>
                    <option value="User">User</option>
                    <option value="Editor">Editor</option>
                  </select>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-content__user-description">
          <div>
            <label for="description">
              <h6>Profile Description</h6>
            </label>
            <p><textarea id="description" cols="30" rows="10" v-model="formInputs.description" /></p>
          </div>
          <div class="grid-content__user-description__buttons">
            <Button label="Save" primary role="submit" />
            <Button label="Reset" @click="onResetForm" />
            <Button label="Cancel" @click="onCancelSubmit" />
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
    default: () => ({}),
  },
  formType: {
    type: String,
    default: 'edit',
    validator: value => {
      return ['edit', 'create'].indexOf(value) !== -1;
    }
  },
});

const emit = defineEmits(['on-cancel-submit', 'on-submit-form', 'on-reset-form']);

const formInputs = ref({
  name: props.user.name || '',
  gender: props.user.gender || '',
  birthday: props.user.birthday || '',
  nationality: props.user.nationality || '',
  address: props.user.address || '',
  phone_number: props.user.phone_number || '',
  city: props.user.city || '',
  state: props.user.state || '',
  country: props.user.country || '',
  role: props.user.role || '',
  email: props.user.email || '',
  description: props.user.description || '',
  avatar: props.user.avatar || {
    url: 'https://placehold.co/400x600',
    alt: '',
  },
  password: '',
});

const onSubmitForm = () => {
  emit('on-submit-form', formInputs.value);
};

const onCancelSubmit = () => {
  emit('on-cancel-submit');
}

const onResetForm = () => {
  emit('on-reset-form');
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
      @apply grid md:grid-cols-1 h-full content-start text-justify md:mt-9;

      &__buttons {
        @apply inline-flex gap-2 justify-center mt-2 md:my-5;
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
