let add = () => {
  let name = document.querySelector(".name-container #name");
  let comment = document.querySelector("#comment");
  console.log(name.value);
  console.log(comment.value);
  if (name.value !== "" && comment.value != "") {
    let list = document.querySelector(".list");
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getUTCFullYear();
    let h = time.getHours();
    let m = time.getMinutes();
    let now = " at " + h + " : " + m;
    let today = day + "/" + month + "/" + year;
    if (h > 12) {
      now += " PM";
    } else {
      now += " AM";
    }
    let list_item = document.createElement("l1");
    let str = name.value + " says...";

    list_item.innerHTML = `
        <span>
        <p class="text-xl font-semibold">${str}</p>
        <p class="text-xm">${today} ${now}</p>
        <br>
        </span>
        <p>${comment.value}</p>
        <br>
        <hr>
        <br>
        `;
    list.append(list_item);
  }
  if (name.value == "" || comment.value == "") {
    let list = document.querySelector(".list");
    let list_item = document.createElement("l2");
    var warn = "Please enter name & comment!";
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item);
  }
  name.value = comment.value = "";
};
//console.log("Hello world");
