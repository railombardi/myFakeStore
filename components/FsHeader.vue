<template>
<header>
  <FsDrawerMenu :show="showMenu" @close="toggleMenu"/>
  <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-6">
    <font-awesome-icon class="invisible lg:visible" icon="magnifying-glass" />
    <span class="header-title"> FakeStore </span>
    <font-awesome-icon class="lg:!hidden menu-icon" icon="bars" size="lg" @click="toggleMenu"/>
    <div class="hidden lg:flex items-center gap-2 ">
      <font-awesome-icon :icon="['fas', 'user']" />
      Account
    </div>
  </div>
  <div class="w-full h-[1px] bg-[#E3E3E3]"/>
</header>
</template>

<script>
import FsDrawerMenu from './FsDrawerMenu.vue';

export default {
  components: { FsDrawerMenu },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
}
</script>

<style lang="scss" scoped>
.header-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
}
</style>