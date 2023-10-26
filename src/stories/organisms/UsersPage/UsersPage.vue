<template>
  <article>
    <section class="general-page">
      <div :class="usersContainerClasses">
        <div class="users-container__actions">
          <Search v-model:input="searchFilter" @input-change="formSearch" />
          <div class="users-container__actions-manage">
            <Button
              primary
              label="Create an user"
              size="small"
              @click="formCreateClick"
            />
            <Button
              v-if="selectedUsers.length > 0"
              :label="`Delete user ${usersCount}`"
              size="small"
              @click="formDeleteClick(selectedUsers)"
            />
            <Button
              v-if="selectedUsers.length > 0"
              :label="`Edit user ${usersCount}`"
              size="small"
              @click="formEditClick(selectedUsers)"
            />
          </div>
        </div>
        <div class="users-container__list">
          <List :users="users" @select-user="onSelectUser" />
        </div>
        <div class="users-container__pagination">
          <Pagination class="text-right" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import List from '../../atoms/List/List.vue';
import Search from '../../molecules/Search/Search.vue';
import Pagination from '../../atoms/Pagination/Pagination.vue';
import Button from '../../atoms/Button/Button.vue';

const selectedUsers = ref([]);
const searchFilter = ref('');

const emit = defineEmits([
  'onFormCreate',
  'onFormDelete',
  'onFormEdit',
  'onFormSearch',
]);

const users = ref([
  {
    id: 1,
    name: 'Anna George',
    email: 'anna@demo.com',
    phone: '+573101231212',
    role: 'admin',
    createdAt: '2023/10/23',
  },
  {
    id: 2,
    name: 'Albert Flores 2',
    email: 'albert2@demo.com',
    phone: '+573101234567',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 3,
    name: 'Albert Flores 3',
    email: 'albert3@demo.com',
    phone: '+573101234567',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 4,
    name: 'Albert Flores 4',
    email: 'albert4@demo.com',
    phone: '+573101234567',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 5,
    name: 'Albert Flores 5',
    email: 'albert5@demo.com',
    phone: '+573101234567',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 6,
    name: 'Albert Flores 6',
    email: 'albert6@demo.com',
    phone: '+573101234567',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 7,
    name: 'Albert Flores 7',
    email: 'albert7@demo.com',
    phone: '+573101234577',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 8,
    name: 'Albert Flores 8',
    email: 'albert8@demo.com',
    phone: '+573101234587',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 9,
    name: 'Albert Flores 9',
    email: 'albert9@demo.com',
    phone: '+573101234567',
    role: 'user',
    createdAt: '20 minutes ago',
  },
  {
    id: 10,
    name: 'Albert Flores 10',
    email: 'albert10@demo.com',
    phone: '+573101234517',
    role: 'user',
    createdAt: '20 minutes ago',
  },
]);

const formCreateClick = () => {
  emit('onFormCreate');
};

const formDeleteClick = () => {
  emit('onFormDelete', selectedUsers.value);
};

const formEditClick = () => {
  emit('onFormEdit', selectedUsers.value);
};

const onSelectUser = (users) => {
  selectedUsers.value = users;
};

const formSearch = (text) => {
  searchFilter.value = text;
  emit('onFormSearch', searchFilter.value);
};

const usersCount = computed(() => {
  return selectedUsers.value.length > 1 ? `(${selectedUsers.value.length})` : '';
});

const usersContainerClasses = computed(() => ({
  'users-container': true,
  [selectedUsers.value.length > 0 ? 'pb-48' : 'pb-24']: true,
}));
</script>

<style lang="postcss" scoped>
.users-container {
  @apply flex flex-col md:pb-0;
  &__actions {
    @apply flex flex-col md:flex-row md:justify-between gap-y-3 md:gap-y-6 md:mb-2 md:relative fixed bottom-0 left-0 right-0 md:bg-transparent bg-secondary-100 px-5 py-4 md:pb-0 md:px-0;
    &-manage {
      @apply space-y-2 md:space-x-2 md:space-y-0;
      button {
        @apply block w-full md:inline md:w-auto;
      }
    }
  }
  &__list {
    @apply overflow-x-auto;
  }
  &__pagination {
    @apply mt-6 md:text-right text-center dark:text-secondary-800;
  }
}
</style>
