<script setup>
</script>

<template>
  <main>
    <div class="my-8 text-center text-2xl">
      <span class="bg-c-main-orange rounded-xl px-2 text-4xl text-light-50"
        >D3.js</span
      >與
      <span class="rounded-xl bg-[#42b883] px-2 text-4xl text-light-50"
        >Vue.js</span
      >框架的結合，讓圖表更具表現力
    </div>

    <router-link
      to="/d3/line-charts"
      class="border rounded m-auto border-gray-500 my-8 text-center py-2 px-3 w-150px block"
      >折線圖
    </router-link>

    <router-link
      to="/d3/line-chart-component"
      class="border rounded m-auto border-gray-500 my-8 text-center py-2 px-3 w-150px block"
      >折線圖元件
    </router-link>

    <router-link
      to="/d3/bar-charts"
      class="border rounded m-auto border-gray-500 my-8 text-center py-2 px-3 w-150px block"
      >長條圖
    </router-link>

    <router-link
      to="/d3/maps"
      class="border rounded m-auto border-gray-500 my-8 text-center py-2 px-3 w-150px block"
      >地圖
    </router-link>
      <router-view></router-view>
  </main>
</template>