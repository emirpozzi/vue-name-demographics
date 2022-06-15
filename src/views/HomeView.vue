<template>
  <header class="container">Name demographics</header>

  <label for="input">Write a name</label>
  <input @change="getStatistics(input)" v-model="input" type="text" />

  <div v-if="this.age">
    <span class="label">Age</span>
    <div v-if="this.age">{{ this.age }}</div>
  </div>
  <p class="label" v-if="this.gender">Gender</p>
  {{ this.gender.toUpperCase() }}
  <p class="label" v-if="this.countryList.length > 0">Nationality</p>
  <ul>
    <li v-for="country in countryList" :key="country.country_id">
      <CountryItem :country="country" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CountryItem from "../components/CountryItem.vue";

export default defineComponent({
  name: "HomeView",
  components: { CountryItem },
  data() {
    return {
      input: "",
      age: 0,
      name: "",
      gender: "",
      countryList: [],
    };
  },
  methods: {
    async getAge(name: string) {
      const result = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await result.json();
      this.age = data.age;
    },
    async getGender(name: string) {
      const result = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await result.json();
      this.gender = data.gender;
    },
    async getNationality(name: string) {
      const result = await fetch(`https://api.nationalize.io/?name=${name}`);
      const data = await result.json();

      const formatted = data.country.map(
        (country: { country_id: string; probability: number }) => {
          return {
            country_id: country.country_id,
            probability: Math.round(country.probability * 10000) / 100 + "%",
          };
        }
      );
      this.countryList = formatted;
    },
    async getStatistics(name: string) {
      this.name = name;
      this.age = 0;
      this.countryList = [];
      this.gender = "";

      this.getAge(name);
      this.getGender(name);
      this.getNationality(name);
    },
  },
});
</script>

<style>
ul {
  list-style-type: none;
  margin-top: 0px;
}

.label {
  margin-bottom: 3px;
  color: rgb(87, 61, 61);
  font-size: 30px;
}

.fi {
  width: 10px;
  height: 10px;
}

a {
  font-size: 15px;
  color: white;
  display: inline-block;
}
</style>
