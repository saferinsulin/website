<template>
  <Menu secondary pointing>
    <MenuItem :active="activeIndex === 0" @click="changeMenu(0)">Calculator</MenuItem>
    <MenuItem :active="activeIndex === 1" @click="changeMenu(1)">Governance</MenuItem>
    <MenuItem @click="changeMenu(2)"
      >Education&nbsp;
      <i class="external icon"></i>
    </MenuItem>
  </Menu>
</template>
<script>
import { Menu, MenuItem } from 'vue-fomantic-ui'; //
export default {
  components: { Menu, MenuItem },
  props: ['activeIndex'],
  methods: {
    changeMenu(num) {
      if (num === 2) {
        window.open('https://education.saferinsulin.org', '_blank');
      } else {
        this.$emit('changeMenu', num);
      }
    },
  },
};
</script>
