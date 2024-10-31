<template>
    <div>
      <input v-model="query.name" placeholder="Назва запчастини" />
      <input v-model="query.carMake" placeholder="Марка автомобіля" />
      <input v-model="query.year" type="number" placeholder="Рік випуску" />
      <button @click="applyFilter">Фільтрувати</button>
      <button @click="resetFilter">Скинути</button>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return { query: { name: '', carMake: '', year: null } };
    },
    methods: {
      applyFilter() {
        this.$emit('filter-parts', this.query);
      },
      resetFilter() {
      this.query = { name: '', carMake: '', year: null }; 
      this.$emit('filter-parts', this.query); 
    }
    }
  };
  </script>