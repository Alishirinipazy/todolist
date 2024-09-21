<script setup>
import {useToast} from "vue-toastification";
import todoItem from "./todoItem.vue"
import { ref} from "vue";
const valueTodoInput = ref(null);
const toast = useToast();


const getTodo = ref(JSON.parse(localStorage.getItem('todoList')) ||[{id:1,todoMSG:"im go to gym (test)",isDone:false}])



function sendTodo() {
  if (valueTodoInput.value === null || valueTodoInput.value === " "|| valueTodoInput.value === ""){
    toast.error("Oh, fill in the requested amount !")
  }else {
    const newTodo = {
      id:getTodo.value.length +1,
      todoMSG:valueTodoInput.value,
      isDone:false,

    }
    getTodo.value.push(newTodo)
    localStorage.setItem('todoList',JSON.stringify(getTodo.value))
    valueTodoInput.value = "";
  }

}

</script>

<template>
  <header>
    <div class="header-section" data-aos="fade-down">
      <h4 class="text-4xl font-bold text-orange-800  ">Todo-List</h4>
      <p class="capitalize  text-orange-700">"Set your goals and follow a daily path according to them."</p>
      <form  class="mt-8">
        <input type="text" v-model="valueTodoInput" class="input-send-todo" placeholder="What are you doing today...?">
        <button type="submit" class="btn-submit-todo" @click.prevent="sendTodo">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-plus"
               viewBox="0 0 16 16">
            <path
                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
            <path
                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"/>
          </svg>
        </button>
      </form>
    </div>
  </header>
  <section>
    <div class="flex flex-row flex-wrap justify-center my-6">
      <template v-for="(item,index) in getTodo" :key="index">

      <todo-Item :item-send="item" :all-todo="getTodo"/>
      </template>
    </div>
  </section>
</template>

<style scoped>

.header-section {
  @apply w-screen text-center bg-gradient-to-r from-cyan-300 to-pink-300 py-14 rounded sm:rounded-b-full
}

.input-send-todo {
  @apply font-bold border border-gray-300 rounded-lg py-2 px-4 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-500 focus:bg-pink-100 shadow-md w-96
}

.btn-submit-todo {
  @apply bg-blue-500 text-white font-semibold py-3 px-4 mx-1 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none
}
</style>
