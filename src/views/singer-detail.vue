<template>
    <div class="singer-detail"></div>
</template>

<script>

import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'

export default {
    name: 'singer-detail',
    props: {
        singer: {
            typeof: Object,
            default: () => {
                return Object
            }
        }
    },
    data() {
        return {
            singerList: null
        }
    },
   async created() {
        const result = await getSingerDetail(this.singer)
        const songs = await processSongs(result.songs)
        this.singerList = songs
        console.log('singerList', this.singerList)
    }
}

</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
