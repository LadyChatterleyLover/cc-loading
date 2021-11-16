<template>
  <div class="container">
    <div class="item">
      <cc-ball-beat text="加载中..."></cc-ball-beat>
    </div>
    <div class="item">
      <cc-ball-clip-rotate text="加载中..."></cc-ball-clip-rotate>
    </div>
    <div class="item">
      <cc-ball-pulse text="加载中..."></cc-ball-pulse>
    </div>
    <div class="item">
      <cc-ball-pulse-sync text="加载中..."></cc-ball-pulse-sync>
    </div>
    <div class="item">
      <cc-ball-scale text="加载中..."></cc-ball-scale>
    </div>
    <div class="item">
      <cc-ball-scale-multiple text="加载中..."></cc-ball-scale-multiple>
    </div>
    <div class="item">
      <cc-ball-spin-fade-loader text="加载中..."></cc-ball-spin-fade-loader>
    </div>
    <div class="item">
      <cc-line-scale text="加载中..."></cc-line-scale>
    </div>
    <div class="item">
      <cc-line-scale-party text="加载中..."></cc-line-scale-party>
    </div>
    <div class="item">
      <cc-line-scale-pulse-out text="加载中..."></cc-line-scale-pulse-out>
    </div>
    <div class="item">
      <cc-line-spin-fade-loader text="加载中..."></cc-line-spin-fade-loader>
    </div>
    <div class="item" >
      <cc-square-spin text="加载中..."></cc-square-spin>
    </div>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 750px;
  .item {
    width: 150px;
    height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>