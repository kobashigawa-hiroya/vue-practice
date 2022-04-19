<template>
	<div>
		<p>ほんの紹介</p>
		<p>===第0===</p>
		<vuex-test :text="text123"></vuex-test>
		<p>===第1===</p>
		<vuex-test :num="num" @my-event="increment"></vuex-test>
		{{num}}
		<p>===第2===</p>
		<vuex-test :data="users" >
		</vuex-test>
		<p>===第2.5===</p>
		<vuex-test :list="members">
		</vuex-test>
		<!-- <vuex-test :v-for="(user,index) in users" :key="index">
			componemt:{{ user }}
		</vuex-test> -->
		<p>===第3===</p>
		<!-- <li :v-for="user in users">
			{{ user }}
		</li> -->
		<div v-for="(user,index) in users" :key="index">
			:user {{ user }}
		</div>
		<p>userList: {{ state.users }}</p>
		<p>===第4===</p>
		<p>{{ size }}</p>
		<button @click="size">size</button>
	</div>
</template>

<script>

import { ref, reactive, computed } from 'vue'
import VuexTest from '@/components/VuexTest.vue'
import { useStore } from 'vuex'
export default ({
	components: { VuexTest },
props: {
	Text:Number
		
	},
	setup() {

		

		const store = useStore()

		const size = computed(() => {
			return store.state.size
		})
		

		const increment = () =>{
			num.value ++
		}
		

		const text123 = "今日やったことを復習！！！！"
		const num = ref(45)
		const state = reactive({
			users: [
				{ name: '木村', age:30, size:180},
				{ name: '花', age:20, size:190},
				{ name: '金太', age:30, size:180},
			],
			members: [
				{ name: 'チン', age:30, size:180, email: "qqqqq@gmail"},
				{ name: 'ケン', age:20, size:190, email: "123@gmail"},
				{ name: 'イチ', age:30, size:180, email: "qq111qqq@gmail"},
			]
		})
				const users = state.users

	return{
      text123,
		num,
		state,
		users,
		increment,
		size
	}
	},
})
</script>
