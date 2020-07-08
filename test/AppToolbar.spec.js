import { mount } from '@vue/test-utils'
import AppToolbar from '@/components/AppToolbar.vue'

describe('AppToolbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppToolbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
