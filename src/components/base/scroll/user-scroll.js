import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)

export default function userScroll(wrapperRef, options) {
    const scroll = ref(null)
    onMounted(() => {
        scroll.value = new BScroll(wrapperRef.value, {
            ObserveDOM: true, // 当dom改变后会自动更新
            ...options
        })
    })
    onUnmounted(() => {
        scroll.value.destroy()
    })
    return {
        scroll
    }
}
