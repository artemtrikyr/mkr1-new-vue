<template>
    <div class="part-detail" v-if="part">
        <h1>{{ part.name }}</h1>
        <p>Марка автомобіля: {{ part.carMake }}</p>
        <p>Рік випуску: {{ part.year }}</p>
        <button @click="deletePart">Видалити</button>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allParts']),
        part() {
            const partName = this.$route.params.name;
            return this.allParts.find(part => part.name === partName);
        }
    },
    methods: {
        deletePart() {
            if (this.part) {
                this.$store.commit('deletePart', this.part.name); // Виклик мутації для видалення
                this.$router.push('/partslist'); 
            }
        }
    }
};
</script>

<style scoped>
.part-detail {
    padding: 20px;
}
</style>