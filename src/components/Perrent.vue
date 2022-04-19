<template>
  <div>Perrent
  <div class="child-components">
   <!-- obj1.name 1階層だとどうなる？ -->
   <child :text="text" :count="count"></child>
   <!-- obj2.name.firstName 2階層だとどうなる？ -->
	<child2 v-model:title="titleComputed"></child2>

   <br />----------------------------------
   <!-- obj3.gender.value リアクティブな要素を持つオブジェクト -->
	<child3 v-model:title="titleComputed"></child3>
   <br />----------------------------------
   <!-- obj4.gender.value emitで書き換えよう -->
	:親<input type="text" v-model="titleComputed"/>
	<child4 :obj4="obj4" @update:text="updateText"></child4>
   <br />----------------------------------
   <!-- obj5.description.value Vue3からのv-model -->
	<!-- 子ー親双方向バインディング -->
	<child5 v-model:description="obj5.description.value"></child5>
	<child6 @my-event="handleClick"></child6>
</div>

<div class="parent-content">
   <h3>親側の値</h3>
   <p>{{ obj5.description.value }}</p>
</div>
   </div>
</template>


<script>
import { defineComponent, ref, computed } from "vue";
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
import Child3 from "./Child3.vue";
import Child4 from "./Child4.vue";
import Child5 from "./Child5.vue";
import Child6 from "./Child6.vue";
export default defineComponent({

	components: {
   Child,
   Child2,
   Child3,
   Child4,
   Child5,
   Child6

	},
	setup(){
		const title = ref('双方向バインディング')
		const titleComputed = computed({
			get: () => title.value,
			set: (value) => (title.value = value)
		})
		const obj1 = { name: "obj1.nameの初期値" };
      const obj2 = {
      name: {
      firstName: "obj2.name.firstNameの初期値",
      },
   };
   const obj3 = {
      gender: ref("obj3.gender.valueの初期値"),
   };

	const obj4 = {
      text: ref("obj4.textの初期値"),
   };

	const updateText = (val) => {
		obj4.text.value = val
	}

   const text = "文字を送ります！！！"
   const count = "カウントダウン"
	
   //  const updateText = (val: string) => {
   //    obj4.text.value = val;
   //  };

   const obj5 = {
      description: ref("obj5.descriptionの初期値"),
   };

   const handleClick = () => {
      alert("クリックしました")
   }
   // const obj5 = {
   //    description: ref("obj5.descriptionの初期値"),
   // };

	return{
		obj1,
      obj2,
      obj3,
      obj4,
      // updateText,
      obj5,
		titleComputed,
		updateText,
      text,
      count,
      handleClick
	}

	}
})
</script>

<style>

</style>