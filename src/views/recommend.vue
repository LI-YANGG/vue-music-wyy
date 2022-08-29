<template>
  <div>我是recommend</div>
</template>

<script>
import { getRecommend } from '@/service/recommend'
export default {
    name: 'recommend',
   async created() {
      const ruslt = await getRecommend()
      console.log(ruslt)
    }
}
</script>

<style lang="scss" scoped>

</style>
