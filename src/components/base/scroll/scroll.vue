
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
        }
    },
    setup(props) {
       const rootRef = ref(null)
       userScroll(rootRef, props)

       return {
            rootRef
       }
    }
 }
 </script>
