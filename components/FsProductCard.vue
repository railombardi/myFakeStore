<template>
  <div class="flex flex-col justify-between w-[280px] h-[320px] p-4 bg-white rounded-lg">
    <img class="max-w-[150px] h-[200px] mx-auto" :src="product.image">
    <span class="font-bold max-w-full overflow-hidden whitespace-nowrap text-ellipsis"> {{ product.title }}</span>
    <div class="w-full flex justify-between">
      <span class="text-[#00000080]">{{ product.category }}</span>
      <span class="font-bold">${{ product.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
}
</script>