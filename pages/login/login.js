//logs.js
const util = require('../../utils/util.js');
const { db, regeneratorRuntime } = getApp().globalData;

Page({
  data: {
    name:'',
    pwd:'',
    is_logined:false
  },
  login: async function () {
    let data = (await db.collection('users').where({ name:this.data.name,pwd:this.data.pwd }).get()).data;

    if (data.length){
      this.setData({
        is_logined: true
      });
      this.dialog = this.selectComponent("#dialog_success");
      this.dialog.showDialog();
    } else {
      this.setData({
        login_pwd: ''
      });
      this.dialog.showDialog();
    }
  },
  bindPwdInput(e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  bindNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  /**
* 生命周期函数--监听页面初次渲染完成
*/
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },
  showDialog() {
    this.dialog.showDialog();
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
    if (this.data.is_logined){
      wx.navigateTo({
        url: '../admin/home/home'
      })
    }
  }
})
