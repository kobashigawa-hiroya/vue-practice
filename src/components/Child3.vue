<template>
  <div>
	孫
    <input type="text" v-model="titleComputed" />
    <button @click="submit">文字列を代入</button>
    <!-- <input v-model="obj3.gender.value" @input="input" /> -->

  </div>
</template>

<script>
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent ({
    props: { title: null},
    emits: ['update:title'],
    setup(props, {emit}) {
      const { title } = toRefs(props)
      const titleComputed = computed({
        get: () => title.value,
        set: (value) => emit('update:title',value)
      })
      return {
        titleComputed
      }
    }
})
</script>

<style>

</style>