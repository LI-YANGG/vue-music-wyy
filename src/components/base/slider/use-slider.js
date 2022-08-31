import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { onMounted, ref, onUnmounted } from 'vue'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
    const slider = ref(null)
    const currentPageIndex = ref(0)
    onMounted(() => {
      const sliderVal = slider.value = new BScroll(wrapperRef.value, {
            scrollX: true, // 开启横向滚动
            scrollY: false, // 关闭纵向滚动
            click: true, // 允许点击
            momentum: false, // 关闭滚动动画
            bounce: false, // 关闭回弹动画
            probeType: 2, // 派发滚动事件的模式
            slide: true
        })
        // 添加一个滚动事件，在滚动之前获取到将要滚动的下标
        sliderVal.on('slideWillChange', (page) => {
            currentPageIndex.value = page.pageX
        })
    })

    onUnmounted(() => {
        slider.value.destroy()
    })

    return {
        slider,
        currentPageIndex
    }
}
