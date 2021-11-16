<template>
  <cc-loader :text="text" :style="style" :visible="visible" :textColor="textColor">
    <div class="ball-pulse">
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
@import '../../theme.scss';

@keyframes scale {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  45% {
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    opacity: 0.7;
  }
  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.cc-loader-wrap {
  .ball-pulse {
    & > div:nth-child(1) {
      -webkit-animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
    & > div:nth-child(2) {
      -webkit-animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
    & > div:nth-child(3) {
      -webkit-animation: scale 0.75s 0s infinite
        cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
    }
    & > div {
      background-color: $primary-color;
      width: 15px;
      height: 15px;
      border-radius: 100%;
      margin: 2px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      display: inline-block;
    }
  }
}
</style>