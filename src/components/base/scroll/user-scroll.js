import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)

export default function userScroll(wrapperRef, options, emit) {
    const scroll = ref(null)
    onMounted(() => {
        // debugger
        console.log('wrapperRef', wrapperRef)
        const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
            ObserveDOM: true, // 当dom改变后会自动更新
            probeType: 3
        })
        if (options.probeType > 0) {
            scrollVal.on('scroll', (pos) => {
                console.log('在滚动')
                emit('scroll', pos)
            })
            console.log('scrollVal', scrollVal)
        }
    })
    onUnmounted(() => {
        scroll.value.destroy()
    })
    return {
        scroll
    }
}
