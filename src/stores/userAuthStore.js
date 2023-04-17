import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const userAuthStore = defineStore('user-auth-store', () => {
  const userInfo = ref({token: ''})

  const isUserLogin = computed(()=> {
    return userInfo.value.token
  })

  const FN_SETUSERINFO = () => {
    userInfo.value.token = 'thisisusertoken'
  }
  const FN_LOGOUT = () => {
    userInfo.value.token = ''
  };

  return {
    userInfo,
    isUserLogin,
    FN_LOGOUT,
    FN_SETUSERINFO
  };
});
