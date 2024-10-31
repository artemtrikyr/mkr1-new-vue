<template>
    <div class="part-item">
      <h3>
      <router-link :to="{ name: 'partdetail', params: { name: part.name } }">
        {{ part.name }}
      </router-link>
    </h3>
      <p>Марка автомобіля: {{ part.carMake }}</p>
      <p>Рік випуску: {{ part.year }}</p>
    </div>
  </template>

  
  <script>
  export default {
    props: {
      part: {
        type: Object,
        required: true,
      },
    },
    
  };
  </script>
  
  <style scoped>
  .part-item {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  }
  .part-item h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }
  </style>
  