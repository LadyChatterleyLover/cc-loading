<template>
  <div class="cc-loader-wrap" :style="style">
    <slot></slot>
    <div
      v-if="text"
      class="cc-loader-text-tip"
      :style="{ marginTop: `${textOffset}px`, color: textColor }"
    >{{ text }}</div>
  </div>
</template>

<script lang='ts' setup>
import { CSSProperties, withDefaults } from 'vue'

withDefaults(defineProps<{
  color?: string,
  size?: number,
  text?: string,
  textColor?: string,
  textOffset?: number,
  visible?: boolean,
  style?: CSSProperties
}>(), {
  visible: true
})
</script>

<style lang='scss' scoped>
@import "../../theme";

.cc-loader-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .cc-loader-text-tip {
    line-height: 2;
    font-size: 14px;
    color: $textColor;
  }
}
</style>