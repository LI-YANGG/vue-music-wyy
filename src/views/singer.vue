<template>
  <div>我是singer</div>
</template>

<script>
import { getSingerList } from '@/service/singer'
export default {
    name: 'singer',
   async created() {
      const list = await getSingerList()
      console.log('list', list)
    }
}
</script>

<style lang="scss" scoped>

</style>
