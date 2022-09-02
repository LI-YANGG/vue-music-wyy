
<template>
    <div ref="rootRef">
        <slot></slot>
    </div>
</template>

 <script>
 import { ref } from 'vue'
 import userScroll from './user-scroll'
 export default {
    name: 'scroll',
    props: {
        click: {
            type: Boolean,
            default: true
        },
        probeType: { // 滚动派发事件的模式
            type: Number,
            default: 0
        }
    },
    // emits: ['scroll'],
    setup(props, { emit }) {
       const rootRef = ref(null)
       userScroll(rootRef, props, emit)

       return {
            rootRef
       }
    }
 }
 </script>

 <style lang="scss" scoped >
 </style>
