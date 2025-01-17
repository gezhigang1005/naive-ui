import { mount } from '@vue/test-utils'
import { NWatermark } from '../index'

describe('NWatermark', () => {
  it('should work with import on demand', () => {
    mount(NWatermark)
  })
  it('should work with `z-index` prop', () => {
    const wrapper = mount(NWatermark, {
      props: {
        zIndex: 9
      }
    })
    expect(wrapper.find('.n-watermark').exists()).toBe(true)
    expect(wrapper.find('.n-watermark').attributes('style')).toContain(
      'z-index: 9'
    )
  })
  it('should work with `x-gap` & `width` props', () => {
    const wrapper = mount(NWatermark, {
      props: {
        xGap: 10,
        width: 100
      }
    })
    expect(wrapper.find('.n-watermark').attributes('style')).toContain(
      'background-size: 110px'
    )
  })
  it('should work with `selectable` prop', () => {
    const wrapper = mount(NWatermark, {
      props: {
        selectable: true
      }
    })
    expect(wrapper.find('.n-watermark-container--selectable').exists()).toBe(
      true
    )
  })
})
