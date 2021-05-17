# Computer-Project---Webpage




  database.ref("Subjects/" + Subject[0]["id"] + "/Num").on("value", (data) => {
    sst = data.val();
    console.log(sst);
  });
  database.ref("Subjects/" + Subject[1]["id"] + "/Num").on("value", (data) => {
    sc = data.val();
    console.log(sc);
  });
  database.ref("Subjects/" + Subject[2]["id"] + "/Num").on("value", (data) => {
    maths = data.val();
    console.log(maths);
  });