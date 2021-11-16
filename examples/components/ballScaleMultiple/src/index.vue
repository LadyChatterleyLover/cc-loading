<template>
  <cc-loader :textOffset="30" :text="text" :style="style" :visible="visible" :textColor="textColor">
    <div class="ball-scale-multiple">
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
@-webkit-keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes ball-scale-multiple {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}

.cc-loader-wrap {
  .ball-scale-multiple {
    position: relative;
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  .ball-scale-multiple > div:nth-child(2) {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  .ball-scale-multiple > div:nth-child(3) {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  .ball-scale-multiple > div {
    background-color: $primary-color;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    left: -30px;
    top: 0px;
    opacity: 0;
    margin: 0;
    width: 60px;
    height: 60px;
    -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
    animation: ball-scale-multiple 1s 0s linear infinite;
  }
}
</style>