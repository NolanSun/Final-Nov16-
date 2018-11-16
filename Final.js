var todos = [];
var todos1 = [];
var todos2 = [];
var todos3 = [];
var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var todaysDate = new Date();
function setDate(){
    var formattedDate;
    formattedDate = days[todaysDate.getDay()+6];
    formattedDate += ", ";
    formattedDate += months[todaysDate.getMonth()];
    formattedDate += " ";
    formattedDate += todaysDate.getDate();
    formattedDate += ", ";
    formattedDate += todaysDate.getFullYear();
    document.getElementById('date').innerHTML = formattedDate;
}
function setDate1(){
    var formattedDate1;
    formattedDate1 = days[todaysDate.getDay()];
    formattedDate1 += ", ";
    formattedDate1 += months[todaysDate.getMonth()];
    formattedDate1 += " ";
    formattedDate1 += todaysDate.getDate()+1;
    formattedDate1 += ", ";
    formattedDate1 += todaysDate.getFullYear();
    document.getElementById('date1').innerHTML = formattedDate1;
}
function setDate2(){
    var formattedDate2;
    formattedDate2 = days[todaysDate.getDay()+1];
    formattedDate2 += ", ";
    formattedDate2 += months[todaysDate.getMonth()];
    formattedDate2 += " ";
    formattedDate2 += todaysDate.getDate()+2;
    formattedDate2 += ", ";
    formattedDate2 += todaysDate.getFullYear();
    formattedDate2 += " to "
    formattedDate2 += days[todaysDate.getDay()];
    formattedDate2 += ", ";
    formattedDate2 += months[todaysDate.getMonth()];
    formattedDate2 += " ";
    formattedDate2 += todaysDate.getDate()+8;
    formattedDate2 += ", ";
    formattedDate2 += todaysDate.getFullYear();
    document.getElementById('date2').innerHTML = formattedDate2;
}
function setDate3(){
    var formattedDate2;
    formattedDate3 = days[todaysDate.getDay()+1];
    formattedDate3 += ", ";
    formattedDate3 += months[todaysDate.getMonth()];
    formattedDate3 += " ";
    formattedDate3 += todaysDate.getDate()+9;
    formattedDate3 += ", ";
    formattedDate3 += todaysDate.getFullYear();
    formattedDate3 += " or more";
    document.getElementById('date3').innerHTML = formattedDate3;
}
function addItemPrompt(){
  var itemName = prompt("What would you like to do today?");
  if (itemName) {
    todos.push({"name": itemName, "done": false});
    console.log(todos);
    putTextInTable();
  }
}
function putTextInTable(){
  var toDoList = document.getElementById("toDoList");
  toDoList.innerHTML= "";

  for (var i = 0; i < todos.length; i++){
    var itemNode = document.createTextNode(todos[i].name);
    var newRow = document.createElement('tr');
    var itemTD = document.createElement('td');
    toDoList.appendChild(newRow);
    newRow.appendChild(itemTD);
    itemTD.appendChild(itemNode);
    if (todos[i].done==true){
      newRow.innerHTML+= "<td onclick='checkTheBox(this)'><i class='far fa-check-square' class='checkbox'></i></td>";
    }
    else{
      newRow.innerHTML+= "<td onclick='checkTheBox(this)'><i class='far fa-square' class='checkbox'></i></td>";
    }
    }
  }
function checkTheBox(thisTD){
  console.log("box checked!");
  thisTD.innerHTML= "<i class='far fa-check-square'></i>";
  var index = thisTD.parentElement.rowIndex;
  if (todos[index].done){
         todos[index].done = false;
  }
  else {
    todos[index].done = true;
  }
  putTextInTable();
}

function addItemPrompt1(){
  var itemName = prompt("What would you like to do today?");
  if (itemName) {
    todos1.push({"name": itemName, "done": false});
    console.log(todos1);
    putTextInTable1();
  }
}
function putTextInTable1(){
  var toDoList1 = document.getElementById("toDoList1");
  toDoList1.innerHTML= "";

  for (var i = 0; i < todos1.length; i++){
    var itemNode1 = document.createTextNode(todos1[i].name);
    var newRow1 = document.createElement('tr');
    var itemTD1 = document.createElement('td');
    toDoList1.appendChild(newRow1);
    newRow1.appendChild(itemTD1);
    itemTD1.appendChild(itemNode1);
    if (todos1[i].done==true){
      newRow1.innerHTML+= "<td onclick='checkTheBox1(this)'><i class='far fa-check-square' class='checkbox'></i></td>";
    }
    else{
      newRow1.innerHTML+= "<td onclick='checkTheBox1(this)'><i class='far fa-square' class='checkbox'></i></td>";
    }
    }
  }
function checkTheBox1(thisTD1){
  console.log("box checked!");
  thisTD1.innerHTML= "<i class='far fa-check-square'></i>";
  var index1 = thisTD1.parentElement.rowIndex;
  if (todos1[index1].done){
         todos1[index1].done = false;
  }
  else {
    todos1[index1].done = true;
  }
  putTextInTable1();
}

function addItemPrompt2(){
  var itemName = prompt("What would you like to do today?");
  if (itemName) {
    todos2.push({"name": itemName, "done": false});
    console.log(todos2);
    putTextInTable2();
  }
}
function putTextInTable2(){
  var toDoList2 = document.getElementById("toDoList2");
  toDoList2.innerHTML= "";

  for (var i = 0; i < todos2.length; i++){
    var itemNode2 = document.createTextNode(todos2[i].name);
    var newRow2 = document.createElement('tr');
    var itemTD2 = document.createElement('td');
    toDoList2.appendChild(newRow2);
    newRow2.appendChild(itemTD2);
    itemTD2.appendChild(itemNode2);
    if (todos2[i].done==true){
      newRow2.innerHTML+= "<td onclick='checkTheBox2(this)'><i class='far fa-check-square' class='checkbox'></i></td>";
    }
    else{
      newRow2.innerHTML+= "<td onclick='checkTheBox2(this)'><i class='far fa-square' class='checkbox'></i></td>";
    }
    }
  }
function checkTheBox2(thisTD2){
  console.log("box checked!");
  thisTD2.innerHTML= "<i class='far fa-check-square'></i>";
  var index2 = thisTD2.parentElement.rowIndex;
  if (todos2[index2].done){
         todos2[index2].done = false;
  }
  else {
    todos2[index2].done = true;
  }
  putTextInTable2();
}

function addItemPrompt3(){
  var itemName = prompt("What would you like to do today?");
  if (itemName) {
    todos3.push({"name": itemName, "done": false});
    console.log(todos3);
    putTextInTable3();
  }
}
function putTextInTable3(){
  var toDoList3 = document.getElementById("toDoList3");
  toDoList3.innerHTML= "";

  for (var i = 0; i < todos3.length; i++){
    var itemNode3 = document.createTextNode(todos3[i].name);
    var newRow3 = document.createElement('tr');
    var itemTD3 = document.createElement('td');
    toDoList3.appendChild(newRow3);
    newRow3.appendChild(itemTD3);
    itemTD3.appendChild(itemNode3);
    if (todos3[i].done==true){
      newRow3.innerHTML+= "<td onclick='checkTheBox3(this)'><i class='far fa-check-square' class='checkbox'></i></td>";
    }
    else{
      newRow3.innerHTML+= "<td onclick='checkTheBox3(this)'><i class='far fa-square' class='checkbox'></i></td>";
    }
    }
  }
function checkTheBox3(thisTD3){
  console.log("box checked!");
  thisTD3.innerHTML= "<i class='far fa-check-square'></i>";
  var index3 = thisTD3.parentElement.rowIndex;
  if (todos3[index3].done){
         todos3[index3].done = false;
  }
  else {
    todos3[index3].done = true;
  }
  putTextInTable3();
}

function All(){
  var date = document.getElementById('date').style.display="inline-block";
  var date = document.getElementById('date1').style.display="inline-block";
  var date = document.getElementById('date2').style.display="inline-block";
  var date = document.getElementById('date3').style.display="inline-block";
  var date = document.getElementById('align').style.display="inline-block";
  var date = document.getElementById('align1').style.display="inline-block";
  var date = document.getElementById('align2').style.display="inline-block";
  var date = document.getElementById('align3').style.display="inline-block";
  var date = document.getElementById('toDoList').style.display="inline-block";
  var date = document.getElementById('toDoList1').style.display="inline-block";
  var date = document.getElementById('toDoList2').style.display="inline-block";
  var date = document.getElementById('toDoList3').style.display="inline-block";
  var date = document.getElementById('choose').style.display="none";
}

function today(){
  var date = document.getElementById('date').style.display="inline-block";
  var date = document.getElementById('date1').style.display="none";
  var date = document.getElementById('date2').style.display="none";
  var date = document.getElementById('date3').style.display="none";
  var date = document.getElementById('align').style.display="inline-block";
  var date = document.getElementById('align1').style.display="none";
  var date = document.getElementById('align2').style.display="none";
  var date = document.getElementById('align3').style.display="none";
  var date = document.getElementById('toDoList').style.display="inline-block";
  var date = document.getElementById('toDoList1').style.display="none";
  var date = document.getElementById('toDoList2').style.display="none";
  var date = document.getElementById('toDoList3').style.display="none";
  var date = document.getElementById('choose').style.display="none";
}

function tomorrow(){
  var date = document.getElementById('date').style.display="none";
  var date = document.getElementById('date1').style.display="inline-block";
  var date = document.getElementById('date2').style.display="none";
  var date = document.getElementById('date3').style.display="none";
  var date = document.getElementById('align').style.display="none";
  var date = document.getElementById('align1').style.display="inline-block";
  var date = document.getElementById('align2').style.display="none";
  var date = document.getElementById('align3').style.display="none";
  var date = document.getElementById('toDoList').style.display="none";
  var date = document.getElementById('toDoList1').style.display="inline-block";
  var date = document.getElementById('toDoList2').style.display="none";
  var date = document.getElementById('toDoList3').style.display="none";
  var date = document.getElementById('choose').style.display="none";
}

function twoDays(){
  var date = document.getElementById('date').style.display="none";
  var date = document.getElementById('date1').style.display="none";
  var date = document.getElementById('date2').style.display="inline-block";
  var date = document.getElementById('date3').style.display="none";
  var date = document.getElementById('align').style.display="none";
  var date = document.getElementById('align1').style.display="none";
  var date = document.getElementById('align2').style.display="inline-block";
  var date = document.getElementById('align3').style.display="none";
  var date = document.getElementById('toDoList').style.display="none";
  var date = document.getElementById('toDoList1').style.display="none";
  var date = document.getElementById('toDoList2').style.display="inline-block";
  var date = document.getElementById('toDoList3').style.display="none";
  var date = document.getElementById('choose').style.display="none";
}

function week(){
  var date = document.getElementById('date').style.display="none";
  var date = document.getElementById('date1').style.display="none";
  var date = document.getElementById('date2').style.display="none";
  var date = document.getElementById('date3').style.display="inline-block";
  var date = document.getElementById('align').style.display="none";
  var date = document.getElementById('align1').style.display="none";
  var date = document.getElementById('align2').style.display="none";
  var date = document.getElementById('align3').style.display="inline-block";
  var date = document.getElementById('toDoList').style.display="none";
  var date = document.getElementById('toDoList1').style.display="none";
  var date = document.getElementById('toDoList2').style.display="none";
  var date = document.getElementById('toDoList3').style.display="inline-block";
  var date = document.getElementById('choose').style.display="none";
}
