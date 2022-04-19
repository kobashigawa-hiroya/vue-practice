<template>
  <div>
	Child2(子ぺーじ)
  <input type="text" v-model="titleComputed" />
  <child-3 v-model:title="titleComputed"/>
  </div>
</template>

<script>
import { defineComponent, toRefs, computed}  from 'vue'
import Child3 from './Child3.vue'
export default defineComponent({
    name: 'ChildInput',
    computed: {
     Child3
    },
    props: {
      title:String
    },
    emits: ['update:title'],
    setup(props,{emit}){
      const { title } = toRefs(props)
      const titleComputed = computed({
        get:()=> title.value,
        set:(value)=>{
          emit('update:title',value)
        },
      })
      return {
        titleComputed
      }
    }
})
</script>

<style>

</style>