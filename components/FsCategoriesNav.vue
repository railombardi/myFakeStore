<template>
  <div>
    <nav class="hidden lg:block">
      <ul class="flex flex-wrap gap-4 pt-4">
        <li>
          <NuxtLink to="/"> All Products</NuxtLink>
        </li>
        <li v-for="category in categories" :key="category">
          <NuxtLink :to="`/categories/${category}`">
            {{ category }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
}
</script>
<style lang="scss" scoped>
.nuxt-link-exact-active {
  font-weight: 600;
  color: black;
}

a {
  color: #00000080;
}
</style>