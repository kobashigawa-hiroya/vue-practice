<template>
  <div class="about">
    <p>===第0===</p>
   <Test :title="foo" :count="bar" ></Test>

    <h1>This is an about page</h1>
     <p>===第1===</p>
    <Test :title="foo" :count="bar" ></Test>
     <p>===第2===</p>
    <Test :number="number"></Test>
    <!-- ①親->子値を渡し方 -->
    
     <p>===第3===</p>
    <Test :text="text" />

     <p>===第4イベント===</p>
    <Test @click="click" />
    <!-- ⬆️③親から子のイベント受け渡し -->

     <p>===第5イベント===</p>
    <Test :count="num" @my-event="handleClick" />
    <!-- <Test v-model="countNum" /> -->
    {{ num }}
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import Test from '@/views/Test.vue'

  export default {
  components: { Test },
    props: {
      
      // collectionName: String
    },
    setup() {
      // ①親->子値を渡し方
      const number = 200000;
      const text = "少し分かった気がしてきましたーーーーー";
      const state = reactive ({
          parentTitle: '親がわの値',
          doorStatus: true,
          number: 10000000
      })
      const readersNumber = ref(32)
      const book = reactive({ name: 'Vue 3 Guide' })
      const foo = ref('あっっっっは');
      const bar = ref(12345);
      const num = ref(0)

      function tojimasu(){
        this.doorStatus = false
      }

      const click = () => {
        alert('ああああああああい')
    
      }
// <!-- ⬆️③親から子のイベント受け渡し -->
      const handleClick = (newVal) => {
        num.value = newVal
      }
     
     

      // expose to template
      return {
        readersNumber,
        book,
        foo,
        bar,
        state,
        tojimasu,
        number,
        text,
        click,
        // <!-- ⬆️③親から子のイベント受け渡し(clickを定義) -->
        // countNum,
        handleClick,
        num
      }
    },
     provide(){
       return {
         Username: "親からの名前"
       }
     },
     

  }
</script>
