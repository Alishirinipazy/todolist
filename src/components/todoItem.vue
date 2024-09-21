<script setup>
import {useToast} from "vue-toastification";
import {ref} from "vue";

const props = defineProps({
  itemSend:Object,
  allTodo:Object
})
const statusTodoClass = ref('todo-Items')
const toast = useToast();
// ............
function doneTodoFunc(){
  props.allTodo.map(item=>{
    if (item.id === props.itemSend.id){
      item.isDone = true
    }
  })
  localStorage.setItem('todoList',JSON.stringify(props.allTodo))
  toast.success("Your note has been successfully saved")
  statusTodoClass.value = 'todo-done'
}
// ---------------------
function deleteTodo(){
  let deleteItem = props.allTodo.filter(item=> {
   return item.id !== props.itemSend.id
  })
  localStorage.setItem('todoList',JSON.stringify(deleteItem))
statusTodoClass.value = 'todo-delete'
toast.info("Your note has been successfully delete")
}
// -------------------------
if (props.itemSend.isDone) {
  statusTodoClass.value = 'todo-done'
}
</script>

<template>
<div data-aos="zoom-in">
  <div class="todo-Items" :class="statusTodoClass ">

    <h5 class="ml-2" :class="statusTodoClass==='todo-delete'?'line-through':''">{{itemSend.todoMSG}}</h5>
    <div>
      <p class="bg-amber-100 p-1 text-green-800 rounded" v-if="statusTodoClass === 'todo-done'">done</p>
      <p class="bg-amber-100 p-1 text-red-900 line-clamp-none rounded" v-if="statusTodoClass === 'todo-delete'">deleted</p>
    <button v-if="statusTodoClass === 'todo-Items' " @click="deleteTodo" class=" text-red-500 mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
    </svg></button>

    <button  v-if="statusTodoClass === 'todo-Items'"  @click="doneTodoFunc" class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg></button>
    </div>
  </div>

</div>
</template>

<style scoped>
.todo-Items {
  @apply w-96 bg-amber-200 rounded rounded-tr border border-amber-500 flex justify-between items-center h-10 px-2 m-1 transition shadow-md transform transition duration-300 box-border
}
.todo-done {
 @apply  bg-green-700 text-green-50 font-bold
}
.todo-delete {
  @apply  bg-red-800 text-green-50 font-bold
}
</style>