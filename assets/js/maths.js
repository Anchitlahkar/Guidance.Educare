var database = firebase.database();
var len = 1;
var Datas = [];

mathsDataLoad = () => {
  database.ref("Subjects/Maths/items/").on("value", (data) => {
    Datas = data.val();
    console.log(Datas);
    for (var i = 1; i < Datas.length; i++) {
        console.log(i)
      document.getElementById("imgMath"+i).src = Datas[i].Link;
    }
  });
};
