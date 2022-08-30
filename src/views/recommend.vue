<template>
  <Slider :sliders="sliders"></Slider>
</template>

<script>
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider.vue'
export default {
    name: 'recommend',
    data() {
      return {
        albums: [],
        sliders: []
      }
    },
    components: {
      Slider
    },
   async created() {
      const result = await getRecommend()
      this.sliders = result.sliders
      this.albums = result.albums
    }
}
</script>

<style lang="scss" scoped>

</style>
