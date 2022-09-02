import { computed, nextTick, ref, watch } from 'vue'

export default function useFixed(props) {
    const groupRef = ref(null)
    const listHeight = ref([])
    const scrollY = ref(0)
    const currentIndex = ref(0)

    // 根据滚动后对应下标的变化，计算出title值
    const fixedTitle = computed(() => {
        console.log('11111')
        const currentGroup = props.data[currentIndex.value]
        return currentGroup ? currentGroup.title : ''
    })
    // 检测列表的数据变化，用nextTick是应为，数据变化后，dom并不会立刻更改，所以要在nextTick加载后再触发函数
    watch(() => props.data, async () => {
        await nextTick()
        calculate()
    })

    // 监听滚动的变化，并且从高度距离数组里匹配到当前对应的下标
    watch(scrollY, (newY) => {
        const listHeightVal = listHeight.value
        for (let i = 0; i < listHeightVal.length - 1; i++) {
            const heightTop = listHeightVal[i]
            const heightBottom = listHeightVal[i + 1]
            if (newY >= heightTop && newY <= heightBottom) {
                currentIndex.value = i
            }
        }
    })

    function calculate() {
        const list = groupRef.value.children
        const listHeightValue = listHeight.value
        let height = 0
        listHeightValue.length = 0
        listHeightValue.push(height)

        for (let i = 0; i < list.length; i++) {
            height += list[i].clientHeight
            listHeightValue.push(height)
        }
    }

    function onScroll(pos) {
        console.log('pos', pos)
        scrollY.value = -pos.y
    }

    return {
        groupRef,
        onScroll,
        fixedTitle
    }
}
