<template lang="html">
  <div class='dice'>
    <span class='num'>{{ num }}</span>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
  },
}
</script>

<style lang="scss" scoped>
.num {
  position: absolute;
  display: block;

  font-size: 128px;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>


