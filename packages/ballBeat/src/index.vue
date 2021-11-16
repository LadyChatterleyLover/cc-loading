<template>
  <cc-loader :text="text" :style="style" :visible="visible" :textColor="textColor">
    <div class="ball-beat">
      <div
        :style="{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
        }"
      ></div>
      <div
        :style="{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
        }"
      ></div>
      <div
        :style="{
          backgroundColor: color,
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
@-webkit-keyframes ball-beat {
  50% {
    opacity: 0.2;
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes ball-beat {
  50% {
    opacity: 0.2;
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.cc-loader-wrap {
  .ball-beat > div {
    background-color: $primary-color;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.7s 0s infinite linear;
    animation: ball-beat 0.7s 0s infinite linear;
  }
  .ball-beat > div:nth-child(2n-1) {
    -webkit-animation-delay: -0.35s !important;
    animation-delay: -0.35s !important;
  }
}
</style>