<template>
  <div>
	Child4 ページ
  <!-- <button @click="submit">文字列を代入</button>
  <input type="text" @input="input"> -->
  </div>
</template>

<script>
import { computed } from "vue";

export default {
     props:{
        obj4:{
          type: String,
        }
    },
    setup(props, { emit }){
      const text = computed({
        get: () => props.obj4.text.value,
        set: (val) => emit("update:text",val)
      });

      const submit = () => {
        text.value = "中身変更";
        console.log(props.obj4);
      }

      const input = () => {
        console.log(props.obj4);
      }
        return {
          input,
          submit
  }

    }
}
</script>

<style>

</style>