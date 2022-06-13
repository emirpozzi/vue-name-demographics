<template>
  <label for="input">Write a name: </label>
  <input v-model="input" type="text" />
  <button @click="getStatistics(input)">Get Stats</button>
  <p>Name is: {{ this.name }}</p>
  <p>Age is: {{ this.age }}</p>
  <p>Gender is: {{ this.gender }}</p>
  <ol>
    <li v-for="country in countryList" :key="country.country_id">
      {{ country.country_id }} - {{ country.probability }}
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
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
      this.countryList = data.country;
      console.log(data);
    },
    async getStatistics(name: string) {
      this.name = name;
      this.getAge(name);
      this.getGender(name);
      this.getNationality(name);
    },
  },
});
</script>
