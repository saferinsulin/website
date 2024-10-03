<template>
  <TopMenu @changeMenu="tab => this.activeIndex = tab" :items="items" :activeIndex="activeIndex"></TopMenu>
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
    <MainTab v-if="activeIndex === 0" />
    <GovernanceTab v-if="activeIndex === 1" />
    <ResourcesTab v-if="activeIndex === 2" />
  </SuiContainer>
  <Footer />
</template>
<script>
import { SuiContainer, SuiHeader, SuiHeaderContent, SuiHeaderSubheader, SuiImage } from 'vue-fomantic-ui';
import { ref } from 'vue';

import TopMenu from './components/TopMenu.vue';
import Footer from './components/Footer.vue';
import GovernanceTab from './components/GovernanceTab.vue';
import MainTab from './components/MainTab.vue';
import ResourcesTab from './components/ResourcesTab.vue';

export default {
  components: { TopMenu, Footer, MainTab, GovernanceTab, ResourcesTab },
  setup() {
    const items = [
      'Calculator',
      'Governance',
      'Resources',
    ];
    const activeIndex = ref(0);
    return { items, activeIndex }
  },
}
</script>

