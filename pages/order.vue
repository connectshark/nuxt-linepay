<template>
  <NuxtLayout>
    <div class=" text-center">
      <h2 class=" text-xl leading-loose mb-6">訂單頁面</h2>
      <p>選擇一筆訂單進行測試</p>
      <div class=" space-x-5">
        <NuxtLink v-for="item in link" :key="link.id"
          class="p-3 hover:opacity-70 inline-block rounded-lg bg-button"
          :to="`/orders/` + item.id">{{ item.amount }}</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>

const { data: link } = useFetch('/api/order')

</script>