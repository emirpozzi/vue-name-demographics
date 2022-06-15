import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeVue.vue", () => {
  it("renders the header", () => {
    const msg = "Name demographics";
    const wrapper = shallowMount(HomeView);
    expect(wrapper.text()).toMatch(msg);
  });
});
