<template>
  <header class="container">Name demographics</header>

  <label for="input">Write a name</label>
  <input @change="getStatistics(input)" v-model="input" type="text" />

  <div v-if="this.age">
    <span class="label">Age</span>
    <div>{{ this.age }}</div>
  </div>

  <p v-if="this.gender" class="label">Gender</p>
  {{ genderToUppercase }}

  <p v-if="hasCountries" class="label">Nationality</p>
  <ul>
    <li v-for="country in countryList" :key="country.country_id">
      <CountryItem :country="country" />
    </li>
  </ul>
</template>

<script lang="ts">
// TODO add caching
import CountryItem from "@/components/CountryItem.vue";
import { defineComponent } from "vue";
import { getAge, getGender, getNationality } from "../../utils/api";
import { formatProbabilities } from "../../utils/format";
import { CountryFormatted, Gender } from "@/types";

export default defineComponent({
  name: "HomeView",
  components: { CountryItem },
  data() {
    return {
      input: "" as string,
      age: 0 as number,
      gender: "" as Gender,
      countryList: [] as CountryFormatted[],
    };
  },
  methods: {
    async getAge(name: string) {
      const age = await getAge(name);
      this.age = age;
    },
    async getGender(name: string) {
      const gender = await getGender(name);
      this.gender = gender;
    },
    async getNationality(name: string) {
      const countryList = await getNationality(name);
      const formatted = formatProbabilities(countryList);
      this.countryList = formatted;
    },
    async getStatistics(name: string) {
      this.age = 0;
      this.countryList = [];
      this.gender = "";

      await Promise.all([
        this.getAge(name),
        this.getGender(name),
        this.getNationality(name),
      ]);
    },
  },
  computed: {
    hasCountries(): boolean {
      return this.countryList.length > 0;
    },
    genderToUppercase(): string {
      return this.gender.toUpperCase();
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
