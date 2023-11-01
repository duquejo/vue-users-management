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
          <Pagination :links="paginationLinks"/>
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

const props = defineProps({
  users: {
    type: Array,
    default: () => [],
  },
  search: {
    type: String,
    default: '',
  },
  paginationLinks: Array,
});

const users = ref(props.users);
const searchFilter = ref(props.search);
const selectedUsers = ref([]);

const emit = defineEmits([
  'onFormCreate',
  'onFormDelete',
  'onFormEdit',
  'onFormSearch',
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
    @apply flex flex-col md:flex-row md:justify-between gap-y-3 md:gap-y-6 md:mb-2 md:relative fixed bottom-0 left-0 right-0 md:bg-transparent bg-secondary-100 dark:bg-secondary-950 px-5 py-4 md:pb-0 md:px-0;
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
    @apply mt-6 dark:text-secondary-800;
    ul {
      @apply md:justify-end justify-start;
    }

  }
}
</style>
