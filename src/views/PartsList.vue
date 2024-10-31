<template>
  <div>
    <PartsFilter @filter-parts="updateQuery" />
    <div class="parts-grid">
      <div v-for="part in getFilteredParts(query)" :key="part.name" class="part-item">
        <PartItem :part="part" @delete-part="deletePart"/>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import PartsFilter from '@/components/PartsFilter.vue';
import PartItem from '@/components/PartItem.vue';

export default {
  components: { PartsFilter, PartItem },
  data() {
    return { query: {} };
  },
  computed: {
    ...mapGetters(['allParts']),
  },
  methods: {
    getFilteredParts(query) {
      // Викликаємо геттер як функцію, передаючи `query`
      return this.$store.getters.filteredParts(query);
    },
    updateQuery(query) {
      this.query = query;
    },

    // Видалення компонента
    deletePart(part) {
      this.$store.commit('removePart', part); 
    }
  }
};
</script>

<style>
.parts-grid {
  display: flex;
  padding-top: 15px;
  flex-wrap: wrap; 
  gap: 16px; 
}

.part-item {
  flex: 1 1 calc(25% - 16px); /* Визначає ширину елементів */
  box-sizing: border-box; 
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
}
</style>
