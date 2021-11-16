<template>
  <cc-loader :text="text" :style="style" :visible="visible" :textColor="textColor">
    <div class="ball-clip-rotate">
      <div
        :style="{
          backgroundColor: color,
          borderColor: color,
          width: `${size}px`,
          height: `${size}px`,
        }"
      ></div>
    </div>
  </cc-loader>
</template>

<script lang='ts' setup>
import { CSSProperties } from 'vue'

defineProps<{
  color?: string,
  size?: number,
  text?: string,
  textColor?: string,
  textOffset?: number,
  visible?: boolean,
  style?: CSSProperties
}>()
</script>

<style lang='scss' scoped>
@import "../../theme";

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.cc-loader-wrap {
  .ball-clip-rotate > div {
    background-color: $primary-color;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    border: 2px solid $primary-color;
    border-bottom-color: transparent !important;
    height: 26px;
    width: 26px;
    background: transparent !important;
    display: inline-block;
    -webkit-animation: rotate 0.75s 0s linear infinite;
    animation: rotate 0.75s 0s linear infinite;
  }
}
</style>