<template>
  <div v-if="country.country_id" class="container-country">
    <country-flag class="country" :country="country.country_id" size="medium" />
    <span class="country-name">
      {{ countryFullName }} - {{ country.probability }}
    </span>
  </div>
</template>

<script>
import { defineComponent, PropType } from "vue";
import countryIdNameMap from "../../utils/country-id-name";
import CountryFlag from "vue-country-flag-next";

export default defineComponent({
  name: "CountryItem",
  components: { CountryFlag },
  props: ["country"],
  computed: {
    countryFullName() {
      const result = countryIdNameMap[this.country.country_id];
      if (result) return result;
      return "Missing Name";
    },
  },
});
</script>

<style>
.country-name {
  margin-left: 20px;
}
</style>
