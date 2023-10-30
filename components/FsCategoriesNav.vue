<template>
  <div>
    <nav :class="{
      'hidden lg:block': !mobile,
      'flex flex-col': mobile
    }">
      <ul class="flex flex-wrap gap-4 pt-4" :class="{
        'flex-col text-lg': mobile
      }">
        <li @click="changeRoute('All Products')">
          <NuxtLink to="/"> All Products</NuxtLink>
        </li>
        <li v-for="category in categories" :key="category" @click="changeRoute(category)">
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
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeRoute(route){
      this.$emit('change', route)
    }
  }
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