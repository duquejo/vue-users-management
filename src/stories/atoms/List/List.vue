<template>
  <table>
    <thead>
      <tr>
        <th>
          <input type="checkbox" @click="onAllSelect" :checked="isAllChecked" title="Select all" />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Role</th>
        <th>Created at</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="users.length > 0" v-for="user in users" :key="user.id" :class="{
        selected: selectedCell?.some((sCell) => sCell.id === user.id),
      }">
        <td>
          <input type="checkbox" :checked="selectedCell?.some((sCell) => sCell.id === user.id)"
            @click="onSingleSelect(user)" :title="`Click to select ${user.name}`" />
        </td>
        <td><img :src="image" />{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone_number }}</td>
        <td>{{ user.role }}</td>
        <td>{{ user.created_at }}</td>
        <td>
          <Icon class="hover:text-primary-500 transition-colors" model="eye" @click="onProfileClick(user.id)" />
        </td>
      </tr>
      <tr v-else>
        <td colspan="6">
          No users available.
          <em>You should create one...</em>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import Icon from '../Icon/Icon.vue';
import { ref } from 'vue';

const image = 'https://placehold.co/50x50';

const props = defineProps({
  class: String,
  users: {
    type: Array,
    default() {
      return [];
    },
  },
});

const emit = defineEmits(['select-user', 'on-profile-click']);

const selectedCell = ref([]);
const isAllChecked = ref(false);

const onSingleSelect = (user) => {
  if (isAllChecked.value) {
    selectedCell.value = [];
    isAllChecked.value = false;
  }
  if (
    selectedCell.value.length > 0 &&
    selectedCell.value.some((sCell) => sCell.id === user.id)
  ) {
    emit('select-user', []);
    return (selectedCell.value = []);
  }
  emit('select-user', [user]);
  selectedCell.value = [user];
};

const onAllSelect = () => {
  if (isAllChecked.value) {
    isAllChecked.value = false;
    selectedCell.value = [];
    emit('select-user', []);
    return;
  }
  isAllChecked.value = true;
  selectedCell.value = props.users;
  emit('select-user', props.users);
};

const onProfileClick = (id) => {
  emit('on-profile-click', id);
};
</script>

<style lang="postcss" scoped>
table {
  @apply table-auto border-separate border-spacing-x-0 border-spacing-y-2.5 text-sm w-full text-secondary-800 dark:text-secondary-200;

  thead {
    @apply bg-primary-200 dark:bg-primary-600 text-left;

    tr {
      th {
        @apply font-semibold p-3 text-center md:text-left;

        &:first-child {
          @apply text-center rounded-s-xl align-middle;
        }

        &:last-child {
          @apply rounded-e-xl;
        }
      }
    }
  }

  tbody {
    tr {
      @apply text-xs hover:bg-secondary-50 dark:hover:bg-secondary-600 transition-colors duration-200;

      &.selected {
        @apply bg-primary-200 dark:bg-primary-900;
      }

      td {
        @apply px-3 py-3;

        img {
          @apply rounded-full md:mr-3 h-12 w-12 md:h-6 md:w-6 md:inline-block inline;
        }

        &:nth-child(2) {
          @apply text-center md:text-left;
        }

        &:first-child {
          @apply text-center align-middle;
        }
      }
    }
  }
}

input[type='checkbox'] {
  @apply cursor-pointer accent-primary-600;
}

svg {
  @apply cursor-pointer;
}
</style>
