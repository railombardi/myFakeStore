<template>
  <div
   :class="show ? 'translate-x-0' : 'translate-x-full'"
   class="fixed right-0 top-0 h-full w-full bg-white shadow-sm transition duration-300 ease-in-out"
  >
   <div class="p-4">
    <div class="flex justify-between items-center">
      <span class="header-title"> FakeStore </span>
      <font-awesome-icon @click="closeDrawer" icon="close" size="2x"/>
    </div>
    <div class="w-full h-[1px] bg-[#E3E3E3] my-2"/>
    <ul class="mt-8">
      <li class="px-8">
        <div class="flex justify-between" @click="showAccountDropdown = !showAccountDropdown">
          <div class="flex items-center gap-4 ">
            <font-awesome-icon icon="user" />
            <span class="font-bold text-lg">Account</span>
          </div>
          <font-awesome-icon :icon="showAccountDropdown ? 'chevron-up' : 'chevron-down'"/>
        </div>
        <div v-show="showAccountDropdown" class="px-8">
          <div class="flex items-center gap-2 pt-4">
            <font-awesome-icon icon="arrow-right-from-bracket" />
            <span class="font-bold text-lg">Logout</span>
          </div>
        </div>
      </li>
      <li class="px-8 mt-4">
        <div class="flex justify-between" @click="showCategories = !showCategories">
          <div class="flex items-center gap-4 ">
            <font-awesome-icon icon="list-ul" />
            <span class="font-bold text-lg">Categories</span>
          </div>
          <font-awesome-icon :icon="showCategories ? 'chevron-up' : 'chevron-down'"/>
        </div>
        <div v-show="showCategories" class="px-8">
          <FsCategoriesNav :categories="categories" mobile @change="closeDrawer"/>
        </div>
      </li>
    </ul>
   </div>
  </div>
</template>

<script>
import FsCategoriesNav from './FsCategoriesNav.vue';

export default {
  components: { FsCategoriesNav },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      categories: [],
      showCategories: false,
      showAccountDropdown: false
    }
  },
  mounted() {
    this.getAllCategories()
  }, 
  methods: {
    async getAllCategories() {
      await this.$axios.get('/products/categories').then(response => {
        const { data } = response
        this.categories = data
      })
    },
    closeDrawer() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
}
</style>