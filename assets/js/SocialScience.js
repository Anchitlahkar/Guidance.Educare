var database = firebase.database();
var len = 1;
var Datas = [];

sstDataLoad = () => {
  database.ref("Subjects/SSt/items/").on("value", (data) => {
    Datas = data.val();
    console.log(Datas);
    for (var i = 1; i < Datas.length; i++) {
      console.log(i);
      document.getElementById("imgSst" + i).src = Datas[i].Link;
    }
  });
};
