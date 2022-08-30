import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { onMounted, ref, onUnmounted } from 'vue'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
    const slider = ref(null)
    onMounted(() => {
        slider.value = new BScroll(wrapperRef.value, {
            scrollX: true, // 开启横向滚动
            scrollY: false, // 关闭纵向滚动
            click: true, // 允许点击
            momentum: false, // 关闭滚动动画
            bounce: false, // 关闭回弹动画
            probeType: 2, // 派发滚动事件的模式
            slide: true
        })
    })

    onUnmounted(() => {
        slider.value.destroy()
    })
}
