<template>
  <Menu secondary pointing :items="items" @update:activeIndex="changeMenu">
  </Menu>
</template>
<script>
import { Menu, MenuItem } from 'vue-fomantic-ui'; // 
export default {
  components: { Menu, MenuItem },
  props: ['items'],
  methods: {
    changeMenu(num) {
      this.$emit('changeMenu', num);
    }
  }
}
</script>