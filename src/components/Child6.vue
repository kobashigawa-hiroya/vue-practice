<template>
  <div>
	Child6
	<button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
	props:{
		title: String
	},
	setup(props, context){
		//contextはthisと同じ
		const handleClick = () => {
			context.emit('my-event')

		}
		return {
			handleClick
		}
	}

}
</script>

<style>

</style>