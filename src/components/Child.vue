<template>
  <div>
	Child ページ
	<p>{{text}}</p>
	<p>{{ count }}</p>
  </div>
</template>

<script>


export default {
	name: "Hello",
		props:{
			count: String,
			text: String
		//propsで値を受け取る=====
	},
	setup(props){
		const submit1 = () => {
		// props.obj1 = "中身変更"
		console.log(props.obj1)
		}

		const input = () => {
			console.log(props.obj1)
		}


		return {
			props,
			submit1,
			input
	}

	}

}
</script>

<style>

</style>