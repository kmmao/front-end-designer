 /* eslint-disable */
import { getTemplate, getSlotContent, getStringTypeAttr } from '@/views/designerPage/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
            max:{
                type:'number',
                value: 0
            },
            min:{
                type:'number',
                value: 0
            },
            value:{
                type:'number',
                value: 1
            },
            step:{
                type:'number',
                value: 1
            },
            size:{
                type:'selection',
                items:['large','small'],
                value:''
            },
            disabled:{
                type:'boolean',
                value:false
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //根据组件不同需要做的不同操作


    //获取插槽模板内容
    var subContent = getSlotContent(slots)
        //设置当前组件的slot
    if (attributes.slot && attributes.slot !== 'default') {
        attributes.slot = {
            type: 'text',
            value: attributes.slot
        }
    } else {
        attributes.slot = {
            type: 'text',
            value: ''
        }
    }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<Input-number 
                        ${stringAttr}>
                        ${subContent}
                    </Input-number>`

    return { template, attributes, slots }
}
export default handle
