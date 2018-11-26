import { Component } from '@angular/core';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  title = '中华小当家的食堂';
  majorIngred: string;
  minorIngred: string;
  startCooking = false;
  dish: string;

  clickToCook() {
    this.startCooking = true;
    this.dish = this.cook();
  }

  resetKitchen() {
    this.startCooking = false;
  }

  cook() {
    if (this.majorIngred === '猪肉') {
      if (this.minorIngred === '墨西哥辣椒') {
        return '四川小炒';
      } else if (this.minorIngred === '花椒') {
        return '水煮肉';
      } else if (this.minorIngred === '大葱') {
        return '葱爆肉';
      } else {
        return '黑暗料理';
      }
    } else if (this.majorIngred === '牛肉') {
      if (this.minorIngred === '墨西哥辣椒') {
        return '小炒牛肉';
      } else if (this.minorIngred === '花椒') {
        return '水煮牛肉';
      } else if (this.minorIngred === '大葱') {
        return '葱爆牛肉';
      } else {
        return '黑暗料理';
      }
    } else if (this.majorIngred === '鸡肉') {
      if (this.minorIngred === '花生') {
        return '宫保鸡丁';
      } else {
        return '黑暗料理';
      }
    } else if (this.majorIngred === '鱼肉') {
      if (this.minorIngred === '花椒') {
        return '剁椒鱼头';
      } else {
        return '黑暗料理';
      }
    }
  }
}

