<template>
<NuxtLayout>
  <div v-if="pending">
    <p>loading</p>
  </div>
  <form v-else action="/api/linepay/create" method="post">
    <h2 class=" text-2xl mb-4 leading-loose">訂單資訊</h2>
    <p>幣別: {{ data.currency }}</p>
    <p>金額: {{ data.amount }}</p>
    <p>商品ID: {{ data.id }}</p>
    <p>商品明細: <span v-for="item in data.packages">{{ item.id }}</span></p>
    <div class=" space-x-4">
      <button class="p-3 hover:opacity-70 rounded-lg bg-button" type="submit">立即付款</button>
      <NuxtLink class="p-3 hover:opacity-70 rounded-lg bg-cyan-500" to="/order">回訂單列表</NuxtLink>
    </div>
  </form>
</NuxtLayout>
</template>

<script setup>
const route = useRoute()
const { data, pending } = useFetch('/api/order', {
  method: 'POST',
  body: {
    orderId: route.params.orderId
  }
})
</script>