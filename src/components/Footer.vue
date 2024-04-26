<template>
  <SuiMessage @click="toggleModel" class="ui fixed bottom sticky inverted message">© 2019-2024 JP Lomas &amp; R
    Harris <i class="info icon"></i></SuiMessage>
  <Info v-model="show" />
</template>
<script>
import { ref } from 'vue';
import { SuiMessage} from 'vue-fomantic-ui';
import Info from './Info.vue';
export default {
  components: { SuiMessage, Info },
  setup() {
    const show = ref(false);
    return { show }
  },
  methods: {
    toggleModel() {
      this.show = !this.show;
    }
  }
}

</script>
<style scoped>
.ui.fixed.sticky.bottom.inverted.message {
  width: 100%;
  border-radius: 0;
}
</style>