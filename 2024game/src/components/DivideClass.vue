<template>
    <div class="overlay"></div>
  <div id="CollectBox">
        <div id="title">选择你想去的学院</div>
        <div class="CollectItem" id="front">
            <img src="../assets/front.png" class="SpecialCollectItemPicture">
            <div>前端</div>
        </div>
        <div class="CollectItem" id="product">
            <img src="../assets/product.png" class="CollectItemPicture">
            <div>产品</div>
        </div>
        <div class="CollectItem" id="lot">
            <img src="../assets/lot.png" class="CollectItemPicture">
            <div>物联网</div>
        </div>
        <div class="CollectItem" id="acm">
            <img src="../assets/acm.jpeg" class="CollectItemPicture">
            <div>算法</div>
        </div>
        <div class="CollectItem" id="back">
            <img src="../assets/back.jpeg" class="CollectItemPicture">
            <div>后端</div>
        </div>
        <div class="CollectItem" id="safe">
            <img src="../assets/safe.png" class="CollectItemPicture">
            <div>安全</div>
        </div>
        <div class="CollectItem" id="game">
            <img src="../assets/game.png" class="CollectItemPicture">
            <div>游戏</div>
        </div>
        <div class="DecorationBox">
            <img src="../assets/decoration.png" class="decoration">
        </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {

setup() {
    const obj = reactive({
        a:1
    })
    return obj
}
}
</script>

<style scoped>
@import url(../css/DivideClass.css);
</style>