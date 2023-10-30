<template>
  <div class="bg-[#1E28320D] h-[100vh] overflow-hidden">
    <div class="px-6 mx-auto max-w-7xl h-full">
      <FsHeader/>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import FsHeader from '~/components/FsHeader.vue';

export default {
  components: { FsHeader }
}
</script>