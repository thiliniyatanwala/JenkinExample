/* eslint-disable no-undef */
// https://www.digitalocean.com/community/tutorials/vuejs-vue-testing
// https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
import { mount } from '@vue/test-utils'
import App from './../src/App.vue'

// This is a pretty basic test which checks if the data for our component is a function.
describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
      expect(typeof App.data).toBe('function')
    })
  })


// below --> This time we are mounting the component, which gives us back a wrapper.A wrapper is a mock Vue instance.

describe('Mounted App', () => {
    const wrapper = mount(App);
  
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

     //We can use it to validate whether certain values are present using Jest’s expect function. We can write tests like this:

   it('renders the correct markup', () => {
  expect(wrapper.html()).toContain('What is the sum of the two numbers?')
})

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  })

//When to use nextTick
//There are very few cases that would warrant you to pull out the big nextTick guns. Some of those cases are:

//When you want to use setTimeout
//When you want to be very sure that the DOM reflects your data
//When you run into errors like Uncaught (in promise) DOMException while trying to perform asynchronous action. Remember, Vue updates the DOM asynchronously
/****
 *  Imagine your component does something really essential and smart like this.potatoAmount = 3. 
 * Vue won’t re-render the component (and thus the DOM) automatically. It’ll queue up the required modification
 * . Then, in the next “tick” (as in a clock), the queue is flushed, and the update is applied
 *  people also use nextTick in their unit tests as a way to ensure that the DOM has updated. 
 * This way, they can test the “updated version” of the component
 */
 describe('vue-specific functionality',()=>{

    const wrapper = mount(App);

    it('renders correctly with different data', async () => {
        wrapper.setData({ x1: 5, x2: 10 })
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('10')
      })

    it("test the button without entering 'guess' input",()=>{
        expect(wrapper.vm.message).toBe("a")

        const button= wrapper.find('button');
        button.trigger('click')
        expect(wrapper.vm.message).toBe('TRY AGAIN')
    })

    it("check the value of message when user enter a value for 'guess'",()=>{
        const button = wrapper.find('button')
        wrapper.setData({guess:15})
        button.trigger('click')
        expect(wrapper.vm.message).toBe('SUCCESS!')
    })

 })

 //check hifi

 describe("test my functions",()=>{

    it('test hifi button', async()=>{
        const wrapper = mount(App)
        const mybutton = wrapper.find('#buttonId')
        mybutton.trigger('click')
        await wrapper.vm.$nextTick()
        //expect(wrapper.vm.message).toBe('HIFI')
        expect(wrapper.emitted('clickMe')).toBeTruthy
    })
 })

 // check the method  @change="checkFruit()

 describe("check methods validity",()=>{
   it("check method checkFruit",()=>{
     const wrapper1 = mount(App);
     wrapper1.setData({x:3,y:5})
     wrapper1.vm.checkFruit()
     expect(wrapper1.vm.myFruit).toBe(8)
   })
 })





 
 
  