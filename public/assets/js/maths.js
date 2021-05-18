var database = firebase.database();
var len = 1;
var Datas = [];

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
mathsDataLoad = () => {
  database.ref("Subjects/Maths/items/").on("value", (data) => {
    Datas = data.val();
    console.log(Datas);
    for (var i = 1; i < Datas.length; i++) {
      console.log(i);
      document.getElementById("imgMath" + i).src = Datas[i].Link;
    }
    onClickImg();
  });
};

onClickImg = () => {
  for (var i = 1; i < Datas.length; i++) {
    img = document.getElementById("imgMath" + i);
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  }
};
