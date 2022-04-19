<template>
  <div>
	<h1>Vuex test</h1>
	<div>{{ count }}</div>
	<!-- <p>{{ state.store.users}}</p> -->
	<button @click="increment">+</button>
	<button @click="decrement">-</button>
	<button @click="addCount">+10</button>
	<p>{{ $store.state.users[1] }}</p>
	<p>{{ text }}</p>
	<p>ref:{{ num }}</p>
	<h1>user確認</h1>
	<p>:リスト確認{{ data }}</p>
	<p>:members確認: {{ list }}</p>
	
	
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	props: {
		text123: Number,
		num: Number,
		user: Number,
		data: Object,
		list: Object
		} ,


	setup(props,context){
		//vuex store呼び出し
		const store = useStore();

		const count = computed(()=>{
			return store.state.count
		})

		const incrementAction = () => {
			store.dispatch('incrementAction',{
				value: 10
			})
		}

		const increment = ()=>{
			context.emit('my-event')
		}

		const addCountAction = () => {
			store.dispatch('addCount')
		}

		const decrement = () =>{
			store.commit('decrement')
		}
		

		const text = "テキスト復習します！！！"
return{
	// increment,
	count,
	decrement,
	// addCount,
	incrementAction,
	addCountAction,
	text,
	increment
}

	}

// const store = useStore();

}
</script>

<style>

</style>