<template>
  <cc-loader :text="text" :style="style" :visible="visible" :textColor="textColor">
    <div class="ball-pulse-sync">
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
@-webkit-keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes ball-pulse-sync {
  33% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.cc-loader-wrap {
  .ball-pulse-sync > div:nth-child(1) {
    -webkit-animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
    animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
  }

  .ball-pulse-sync > div:nth-child(2) {
    -webkit-animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
    animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
  }

  .ball-pulse-sync > div:nth-child(3) {
    -webkit-animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
    animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
  }

  .ball-pulse-sync > div {
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
</style>