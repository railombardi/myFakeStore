<template>
  <div class="overflow-auto h-full no-scrollbar">
    <a @click="goToPreviousRoute">
      <font-awesome-icon class="pt-8" icon="arrow-left" size="lg"/>
    </a>
    <div class="flex flex-col gap-4 items-center pt-8 pb-[200px]">
      <img class="max-w-[400px]" :src="product.image"/>
      <span class="font-bold text-lg text-center">{{ product.title }}</span>
      <p>
        {{ product.description }}
      </p>
      <button class="outline outline-2 px-8 py-2 rounded-lg mt-4"> Buy </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      product: {},
    }
  },
  mounted(){
    this.getProduct()
  },
  methods: {
    async getProduct(){
      await this.$axios.get(`/products/${this.$route.params.id}`).then(response => {
        const { data } = response
        this.product = data
      })
    },
    goToPreviousRoute(){
      return this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>