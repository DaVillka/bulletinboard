<template>
  <div class="sellWindow">
    <div class="inventoryBlock">
      <div class="titleSell">
        <span class="textTitleSell">Ваш инвентарь</span>
      </div>
      <div class="gridSell" ref="gridSell">
        <div class="itemsSell">
          <div v-for="item in items" :key="item.id" class="itemSell" @click="showModal($event, item)">
            <div v-if="item.nameItem && activeItem === item" class="modelToSell"  :style="modalStyle">
          <div class="toDoSell">
            <div class="information" @click="toggleinfoItem(item)">
              <button class="butInfo">
                <span>Информация</span>
              </button>
            </div>
            <div class="toSell" @click="toggleinfoSelling(item)">
              <button class="butToSell">
                <span>Продать</span>
              </button>
            </div>
          </div>
        </div> 
            <div class="itemContent">
              <div class="imgContent">
                <img v-if="item.nameItem" :src="getImagePathChild(item.ItemId)">
              </div>
            </div>
            <div class="nameItem">
              <span>{{ item.nameItem }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="infoSelling" v-if="visibleInfoSell">
      <div class="titleSell">
        <span class="textTitleSell">Продажа</span>
      </div>
      <div class="topinfoSelling">
        <div class="leftTop">
          <div class="imgContentTop">
            <img :src="getImagePathChild(script.currentItem.ItemId)">
          </div>
        </div>
        <div class="rightTop">
          <div class="wrapperRightTop">
            <div class="titleRightTop">
              <span class="textRightTop">{{script.currentItem.nameItem}}</span>
            </div>
            <div class="subTitleRightTop">
              <span class="subTextRightTop">{{script.currentItem.categoryItem}}</span>
            </div>
          </div>
          <div class="infoRightTop">
            <span class="infoTextRightTop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
        </div>
      </div>
      <div class="itemSearch">
        <div class="variantsSearch">
          <div class="nameVariant">
            <span>ПРЕДЛАГАЕМАЯ ЦЕНА</span>
          </div>
          <div class="inputSearch">
            <input type="number" class="inputClick" v-model.number="inputValue" @input="calculateCommission">
          </div>
        </div>
        <div class="variantsSearch">
          <div class="nameVariant">
            <span>КОММЕНТАРИЙ</span>
          </div>
          <div class="inputSearch">
            <input type="text" class="inputClick" v-model="commentValue">
          </div>
        </div>
        <div class="variantsSearch">
          <div class="nameVariant">
            <span>Комиссия</span>
          </div>
          <div class="commissionText">
            <span>5% (С ПРЕМИУМОМ 4%)</span>
            <span class="commissionSum">{{ commissionSum }}Р.</span>
          </div>
        </div>
        <div class="buttonResetBlock" @click="sellItem">
          <button type="number" class="buttonReset">
            <span class="buttonResetText">ПРОДАТЬ</span>
          </button>
        </div>
        <div class="buttonResetBlock" @click="resetMainWindow">
          <button type="reset" class="buttonReset">
            <span class="buttonResetText">ОТМЕНА</span>
          </button>
        </div>
        <div class="textTitleSelling">
          <div class="warror">
            <img src="./assets/svg/warror.svg">
          </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </span>
        </div>
      </div>
    </div>

    <div class="infoSelling" v-if="visibleInfoItem">
      <div class="titleSell">
        <span class="textTitleSell">Информация</span>
      </div>
      <div class="topinfoSelling">
        <div class="leftTop">
          <div class="imgContentTop">
            <img :src="getImagePathChild(script.currentItem.ItemId)">
          </div>
        </div>
        <div class="rightTop">
          <div class="wrapperRightTop">
            <div class="titleRightTop">
              <span class="textRightTop">{{script.currentItem.nameItem}}</span>
            </div>
            <div class="subTitleRightTop">
              <span class="subTextRightTop">{{script.currentItem.categoryItem}}</span>
            </div>
          </div>
        </div>
      </div>
        <div class="aboutItem">
          <span>{{ aboutText }}</span>
        </div>
    </div>

  </div>
</template>

<style>
  @import './style/sellWindow.css';
  @import './style/mainWindow.css';
</style>

<script>
  import { searchScript } from './scripts/searchScript';

  export default {
    ...searchScript, 

    methods: {

      ...searchScript.methods, 

      resetMainWindow() {
      this.$emit('toggleViewSell'); 
    },

    sellItem() {
      this.sendSellItem()
      this.$emit('toggleViewSell'); 
    }
    },
  }
</script>