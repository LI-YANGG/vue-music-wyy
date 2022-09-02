<template>
  <div class="singer" v-loading="loading">
    <index-list :data="singerList"></index-list>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/index-list/index-list.vue'
export default {
    name: 'singer',
    components: {
      IndexList
    },
    data() {
      return {
        singerList: []
      }
    },
    computed: {
      loading() {
        return !this.singerList.length
      }
    },
    async created() {
      const list = await getSingerList()
      this.singerList = list.singers
    }
}
</script>

<style lang="scss" scoped>
  .singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    overflow: scroll;
  }
</style>
