import { createStore } from "vuex";

export default createStore({
  state: {
    parts: [
      { name: 'Масляний фільтр', carMake: 'Toyota', year: 2018 },
      { name: 'Фільтр повітря', carMake: 'BMW', year: 2019 },
      { name: 'Амортизатор', carMake: 'Audi', year: 2017 },
      { name: 'Фара', carMake: 'Mazda', year: 2021 },
      { name: 'Свічки запалювання', carMake: 'Ford', year: 2016 },
      { name: 'Радіатор', carMake: 'Hyundai', year: 2015 },
      { name: 'Термостат', carMake: 'Chevrolet', year: 2014 },
      { name: 'Гальмівні колодки', carMake: 'Honda', year: 2020 },
      { name: 'Масляний насос', carMake: 'Nissan', year: 2018 },
      { name: 'Карбюратор', carMake: 'Subaru', year: 2019 },
      { name: 'Система випуску', carMake: 'Volkswagen', year: 2021 },
      { name: 'Система охолодження', carMake: 'Kia', year: 2017 },
      { name: 'Ремінь ГРМ', carMake: 'Mazda', year: 2015 },
      { name: 'Фільтр пального', carMake: 'Peugeot', year: 2016 },
      { name: 'Вал приводу', carMake: 'Fiat', year: 2018 },
      { name: 'Тормозний диск', carMake: 'Renault', year: 2019 },
      { name: 'Радіатор кондиціонера', carMake: 'Chevrolet', year: 2020 },
    ]
  },
  getters: {
    // Метод відображення всіх деталей у HomeView
    allParts: (state) => state.parts,
    //Метод фільтрації, який підтягує повністю весь список та відповідно 
    //до данних за якими потрібно фільтрувати, відбувається фільтрація
    //Якщо не вказано якиїсь параметр, то фільтр його ігнорує, та фільтрує 
    //тільки по тим параметрам які вказано
    filteredParts: (state) => (query) => {
      return state.parts.filter(part => {
        return (
          (!query.name || part.name.includes(query.name)) &&
          (!query.carMake || part.carMake === query.carMake) &&
          (!query.year || part.year === query.year)
        );
      });
    }
  },
  mutations: {
    // метод, за допомогою якого відбувається видалення компонента із списку(локально)
    deletePart(state, partName) {
      state.parts = state.parts.filter(part => part.name !== partName);
    },
  },
  actions: {},
  modules: {},
});

