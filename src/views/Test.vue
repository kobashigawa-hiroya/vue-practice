
<template>
  <div class="about">
   <h1>This is an Test page</h1>
   <!-- <h2>{{ state.count }}</h2> -->
	<p>{{ readersNumber }}</p>
	<!-- <input type="text" v-model="parentTitle"> -->
	<!-- <button type="submit" @click="increment">+</button>
	<button type="submit" @click="decrement">-</button> -->
	<p>title: {{ title }}</p>
	<p>count: {{ Username }}</p>
	<!-- ⬆️②親から孫の値受け渡し(injectで受けた値を表示) -->
	<p>count: {{ number }}</p>
	<!-- //①こちらで表示 -->
	<p>message: {{ text }}</p>
	<p>カウントアップ: {{ count }}</p>
	<button @click="click">click me</button>
	<!-- ⬆️③親から子のイベント受け渡し -->
	<button @handleClick="handleClick">カウントUP</button>
	<!-- <Test :title="foo" :count="bar"></Test> -->
  </div>
</template>

<script>
import { ref, reactive, computed, defineProps } from 'vue'

export default {
	// props:["number","text"],
	//↑上記の書き方もあるが、数が多くなると分からなくなるので
	//⬇️下記のように書く=======
	props:{
		number: Number,
		text: Number,
		countNum: Number
		//propsで値を受け取る=====
	},
	//①propsでnumberを受け取り
   setup(props, context,emit) {
		//context = this, emit = イベントを渡す
			const message = defineProps({
			text:String
		})
		//イベント１
		const click = () =>{
			context.emit('my-event');
		}
		//イベント２
		const handleClick = () => {
			emit('my-event',props.value + 1)
		}


		const doubleCount = computed(()=>  props.count *2)

		const state = reactive ({
			count: 0,
			title: 'Vue 3 Guide'
		})
      const readersNumber = ref(0)

		function increment(){
			state.count ++;
		}

		function decrement(){
			state.count --;
		}

		
		

      // expose to template
      return {
      readersNumber,
		state,
		decrement,
		increment,
		doubleCount,
		message,
		click,
		handleClick
      }
    },
	//  ②親から孫の値受け渡し(injectで受け取る)
	inject: ["Username"]
  }
</script>
