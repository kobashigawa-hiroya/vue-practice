<template>
  <div>
	Child5 ページ
  <button @click="submit">文字列を代入</button>
  <input :value="description" @input="$emit('update:description',$event.target.value)"/>
  </div>
</template>

<script>
export default {
    name: "obj5",
    props:{
        description:{
          type: String,
        }
    },
    setup(props, {emit}){
        const submit = () => {
          emit("update:description", "中身変更！");
          console.log(props.description);
        }

        return{
          submit
        }
    }

}
</script>

<style>

</style>