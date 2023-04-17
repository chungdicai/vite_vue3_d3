<script setup>
import { userAuthStore } from '../stores';

const { FN_SETUSERINFO, FN_LOGOUT  } = userAuthStore();

</script>
<template>
    <main>
        HomeView
        <button @click="FN_SETUSERINFO">登入</button>
        <button @click="FN_LOGOUT">登出</button>
    </main>
</template>