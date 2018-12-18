//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    todolist:[
        {
          todo:"aaa",
          complete:false
        },
        {
          todo: "bbb",
          complete: true          
        },
        {
          todo:"ccc",
          complete: true          
        }
      ],
    newitem:""
  },
  additem(event){
    if(event.detail.value){
      this.data.newitem = event.detail.value;
      this.data.todolist.push({todo:this.data.newitem,complete:false});
      var newarr = this.data.todolist;
      this.setData({
        todolist:newarr,
        newitem:""
      })
    }
  },
  fn(e){
    let index = e.currentTarget.dataset.index;
    this.data.todolist[index].complete = !this.data.todolist[index].complete;
    let tem = this.data.todolist;
    this.setData({
      todolist:tem
    })
  }
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // }
})
