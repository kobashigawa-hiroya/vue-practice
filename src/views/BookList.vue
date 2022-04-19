<template>
	<div>
		BookList
		<h1>一覧</h1>
		<ul>
			<li v-for="book in books" :key="book.id">
				{{ book.title}}
			</li>
		</ul>
	</div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
	setup() {
		const books = [
			{id:1, title:"タイトル1",content:'book_content'},
			{id:2, title:"タイトル2",content:'book_content'},
			{id:3, title:"タイトル3",content:'book_content'}
		]
		return{
			books
		}
	},
})
</script>
