<template>
  <div class="mt-8 h-full overflow-scroll no-scrollbar pb-[150px]">
    <div class="px-4">
      <FsCategoriesNav :categories="categories"/>
    </div>
    <div v-if="$route.name === 'index'" class="flex flex-wrap gap-4 justify-center items-center mt-8">
      <NuxtLink  v-for="product in filteredProducts" :key="product.id" :to="`/details/${product.id}`">
        <FsProductCard :product="product"/>
      </NuxtLink>
    </div>
    <NuxtChild v-else :products="filteredProducts" />
  </div>
</template>

<script>
import FsCategoriesNav from '~/components/FsCategoriesNav.vue';
import FsProductCard from '~/components/FsProductCard.vue';

export default {
  name: 'IndexPage',
  components: { FsCategoriesNav, FsProductCard },
  async asyncData({ $axios }) {
    const [categoriesRes, productsRes] = await Promise.all([ 
    $axios.get('/products/categories'),
    $axios.get('/products/'),
    ])
    return {
      categories: categoriesRes.data,
      products: productsRes.data
    }
  },
  computed: {
    filteredProducts(){
      let filtered = [...this.products]
      if(this.$route.params.category) {
        filtered = this.products.filter(product => product.category === this.$route.params.category)
      }
      return filtered
    }
  }
}
</script>
