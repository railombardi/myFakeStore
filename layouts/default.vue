<template>
  <div class="px-6 bg-[#1E28320D] h-[100vh]">
    <div>
      <FsHeader/>
    </div>
    <slot/>
  </div>
</template>

<script>
import FsHeader from '~/components/FsHeader.vue';

export default {
  components: { FsHeader }
}
</script>

<style lang="scss" scoped>

</style>