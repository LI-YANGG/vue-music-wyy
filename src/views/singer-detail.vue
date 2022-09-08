<template>
    <div class="singer-detail">
        <music-list
            :songs="singerList"
            :title="title"
            :pic="pic"
        ></music-list>
    </div>
</template>

<script>

import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import MusicList from '@/components/music-list/music-list.vue'

export default {
    name: 'singer-detail',
    components: {
        MusicList
    },
    props: {
        singer: {
            type: Object,
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
    computed: {
        pic() {
            console.log('this.singer', this.singer)
            return this.singer && this.singer.pic
        },
        title() {
            return this.singer && this.singer.name
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
