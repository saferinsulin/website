<template>
  <TopMenu @changeMenu="tab => this.activeIndex = tab" :activeIndex="activeIndex"></TopMenu>
  <SuiContainer>
    <div class="spacer"></div>
    <SuiHeader size="large">
      <SuiImage src="/76x76.svg" />
      <SuiHeaderContent>
        Safer Insulin
        <SuiHeaderSubheader>
          for Adult Critical Care
        </SuiHeaderSubheader>
      </SuiHeaderContent>

    </SuiHeader>
    <MainTab v-if="activeIndex === 0 || activeIndex === 2" />
    <GovernanceTab v-if="activeIndex === 1" />
  </SuiContainer>
  <div class="footer-spacer"></div>
  <Footer />
</template>
<script>
import { SuiContainer, SuiHeader, SuiHeaderContent, SuiHeaderSubheader, SuiImage } from 'vue-fomantic-ui';
import { ref } from 'vue';

import TopMenu from './components/TopMenu.vue';
import Footer from './components/Footer.vue';
import GovernanceTab from './components/GovernanceTab.vue';
import MainTab from './components/MainTab.vue';

export default {
  components: { TopMenu, Footer, MainTab, GovernanceTab },
  setup() {
    const activeIndex = ref(0);
    return { activeIndex }
  },
}
</script>
<style scoped>
.footer-spacer {
  height: 60px;
}
</style>
