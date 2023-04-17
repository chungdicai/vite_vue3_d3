import { userAuthStore } from '../stores';
import { storeToRefs } from 'pinia';

export function setupRoutePermission(routerInstance) {
  routerInstance.beforeEach(async (to, from)=> {
    console.log({to});
    console.log({from});
    console.log({routes: routerInstance.getRoutes()});

    const { requiresAuth } = to.meta || {}

    if(requiresAuth) {
      const USER_STORE = userAuthStore();
      const { isUserLogin } = storeToRefs(USER_STORE)
      console.log(isUserLogin);
      if (isUserLogin.value) { 
        return true
      }
      return { name: 'IdentityDenyView' };
    }
  })
}
