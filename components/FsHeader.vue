<template>
<header>
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-6">
    <font-awesome-icon class="invisible lg:visible" icon="magnifying-glass" />
    <span class="text-lg"> FakeStore </span>
    <font-awesome-icon class="lg:!hidden" icon="bars" size="lg"/>
    <div class="hidden lg:flex items-center gap-2 ">
      <font-awesome-icon :icon="['fas', 'user']" />
      Account
    </div>
  </div>
  <div class="w-full h-[1px] bg-[#E3E3E3]"/>
  <nav class="hidden lg:block">
    <ul class="flex flex-wrap justify-between pt-4">
      <li v-for="category in categories" :key="category">
        <a> {{ category }} </a>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  data(){
    return {
      showMenu: false,
      categories: []
    }
  },
  created(){
    this.getAllCategories()
  },
  methods: {
    toggleMenu(){
      this.showMenu = !this.showMenu
    },
    async getAllCategories() {
      await this.$axios.get('/products/categories').then(response => {
        console.log(response)
        this.categories = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>