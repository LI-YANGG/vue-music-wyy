<template>
  <div class="singer" v-loading="loading">
    <index-list :data="singerList" @select="selectItem"></index-list>
    <router-view :singer="selectSinger"></router-view>
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
        singerList: [],
        selectSinger: null
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
    },
    methods: {
      selectItem(singer) {
        this.selectSinger = singer
        console.log('singer', singer.mid)
        this.$router.push({
          path: `/singer/${singer.mid}`
        })
      }
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
