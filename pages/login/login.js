//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    name:'name',
    pwd:'pwd',
    login_name:'',
    login_pwd:'',
    is_logined:false
  },
  login: function () {
    if (this.data.name !== this.data.login_name || this.data.pwd !== this.data.login_pwd){
      this.setData({
        login_pwd: ''
      });
      this.dialog.showDialog();
    } else {
      this.setData({
        is_logined:true
      });
      this.dialog = this.selectComponent("#dialog_success");
      this.dialog.showDialog();
    }
  },
  bindPwdInput(e) {
    this.setData({
      login_pwd: e.detail.value
    })
  },
  bindNameInput(e) {
    this.setData({
      login_name: e.detail.value
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
  }
})
