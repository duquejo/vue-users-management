import { ref } from 'vue';

const useHeader = (initialUser = null) => {
  const currentUser = ref(initialUser);
  const onLogin = () => {
    currentUser.value = { name: 'Jane Doe' };
  };
  const onLogout = () => {
    currentUser.value = null;
  };
  const onCreateAccount = () => {
    currentUser.value = { name: 'Jane Doe' };
  };

  return {
    currentUser,

    onLogin,
    onLogout,
    onCreateAccount,
  };
};

export default useHeader;