<template>
  <div class="home">
    <h1>Список всіх запчастин</h1>
    <div class="parts-list">
      <div v-for="part in allParts" :key="part.name" class="part-item">
        <h3>{{ part.name }}</h3>
        <p>Марка автомобіля: {{ part.carMake }}</p>
        <p>Рік випуску: {{ part.year }}</p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "HomeView",
  computed: {
    ...mapGetters(['allParts']),
  },
  

};
</script>
<style scoped>
.parts-list {
  justify-content: center;
  display: flex;
  flex-wrap: wrap; 
  gap: 16px; 
}

.part-item {
  flex: 0 1 calc(25% - 16px); 
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
}

.part-item h3 {
  margin: 0 0 8px;
  font-size: 18px;
}
</style>
