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
    <h1>tab: {{ activeIndex }}</h1>
  </SuiContainer>
  <Footer />
</template>
<script>
import { SuiContainer, SuiHeader, SuiHeaderContent, SuiHeaderSubheader, SuiImage } from 'vue-fomantic-ui';
import { ref } from 'vue';

import TopMenu from './components/TopMenu.vue';
import Footer from './components/Footer.vue';

export default {
  components: { TopMenu, Footer },
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

