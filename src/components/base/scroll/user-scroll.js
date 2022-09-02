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
            // eventPassthrough: 'vertical',
            // slide: true // 是否打开滚动模式
        })
        // if (options.probeType > 0) {
            scrollVal.on('scroll', (pos) => {
                console.log('在滚动')
                emit('scroll', pos)
            })
            console.log('scrollVal', scrollVal)
        // }
    })
    onUnmounted(() => {
        // console.log('scroll', scroll)
        scroll.value.destroy()
    })

    // function onScroll(pos) {

    // }
    return {
        scroll
    }
}
