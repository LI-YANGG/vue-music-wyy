import { computed, ref } from 'vue'

export default function useShortcut(props, groupRef) {
    const scrollRef = ref(null)
    const shortcutList = computed(() => {
        return props.data.map((group) => {
            return group.title
        })
    })

    console.log('shortcutList', shortcutList)

    function onShortcutTouchStart (e) {
        // 通过前面定义的 data-index 属性，可以这样拿到值
        // const anchorIndex = parseInt(e.target.dataset.index)
        // const targetEl = groupRef.value.children[anchorIndex]
        // const scroll = scrollRef.value.scroll
        // console.log('scroll111111', scroll)
        // scroll.scrollToElement(targetEl, 0)
    }

    return {
        shortcutList,
        scrollRef,
        onShortcutTouchStart
    }
}
