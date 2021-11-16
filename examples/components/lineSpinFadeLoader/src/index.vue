<template>
  <cc-loader :textOffset="30" :text="text" :style="style" :visible="visible" :textColor="textColor">
    <div class="line-spin-fade-loader">
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


@-webkit-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.cc-loader-wrap {
  .line-spin-fade-loader {
    position: relative;
    top: -10px;
    left: -4px;
  }
  .line-spin-fade-loader > div:nth-child(1) {
    top: 20px;
    left: 0;
    -webkit-animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(2) {
    top: 13.63636px;
    left: 13.63636px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 20px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(4) {
    top: -13.63636px;
    left: 13.63636px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(5) {
    top: -20px;
    left: 0;
    -webkit-animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(6) {
    top: -13.63636px;
    left: -13.63636px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -20px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out;
  }
  .line-spin-fade-loader > div:nth-child(8) {
    top: 13.63636px;
    left: -13.63636px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: line-spin-fade-loader 1.2s 0s infinite ease-in-out;
    animation: line-spin-fade-loader 1.2s 0s infinite ease-in-out;
  }
  .line-spin-fade-loader > div {
    background-color: $primary-color;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    width: 5px;
    height: 15px;
  }
}
</style>