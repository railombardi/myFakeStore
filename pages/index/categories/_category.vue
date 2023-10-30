<template>
  <div class="flex flex-wrap gap-4 justify-center items-center mt-8">
    <FsProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>