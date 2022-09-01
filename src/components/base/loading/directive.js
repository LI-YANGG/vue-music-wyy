import { createApp } from 'vue'
import Loading from './loading'
import { addClass, removeClass } from '@/assets/js/dom'

const relativeCls = 'g-relative'

const loadingDirective = {
    mounted(el, binding) {
        const app = createApp(Loading)
        const instance = app.mount(document.createElement('div'))
        el.instance = instance // 把instance保存起来
        const title = binding.arg
        // 可以利用loading的setTitle方法自定义loading的title数据
        if (title !== undefined) {
            instance.setTitle(title)
        }
        if (binding.value) {
            append(el)
        }
    },
    updated(el, binding) {
        if (binding.oldValue !== binding.value) {
            binding.value ? append(el) : remove(el)
        }
    }
}

function append(el) {
    const style = getComputedStyle(el)
    // 如果dom容器不是下面这些属性，则给容器添加，否则loading的布局不生效，用完后再删除添加的属性
    if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
        addClass(el, relativeCls)
    }

    el.appendChild(el.instance.$el)
}

function remove(el) {
    el.removeChild(el.instance.$el)
    removeClass(el, relativeCls)
}

export default loadingDirective
