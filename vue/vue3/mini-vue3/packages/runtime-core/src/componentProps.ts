import { reactive } from "@vue/reactivity"
import { hasOwn } from "@vue/shared"

export function initProps(instance, rawProps) {
    const props = {}
    const attrs = {}
    const options = instance.propsOptions || {}

    if (rawProps) {
        for(let key in rawProps) {
            const value = rawProps[key]
            if (hasOwn(options, key)) {
                props[key] = value
            } else {
                attrs[key] = value
            }
        }
    }
    // 这里应该用shallowReactive
    instance.props = reactive(props)
    instance.attrs = attrs
}