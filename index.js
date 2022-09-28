function addEmp() {
  var form = document.querySelector(".form");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}
i = 1;
function formSubmition() {
  var sl_no = ++i;

  /* SAVE IN LOCAL STORAGE */

  /*Name and Address*/
  localStorage.setItem(
    "name_address",
    document.querySelector("#nameAddress").value
  );
  /*Designation */
  localStorage.setItem("design", document.querySelector("#designation").value);
  /*Date of Birth */
  localStorage.setItem("dob", document.querySelector("#dateofBirth").value);
  /*First Appointment */
  localStorage.setItem("fappo", document.querySelector("#firstAppo").value);
  /*Appo From Date */
  localStorage.setItem(
    "fromDate",
    document.querySelector("#currAppoFrom").value
  );
  /*Appo To Date */
  localStorage.setItem("toDate", document.querySelector("#currAppoTo").value);
  /*Remarks*/
  localStorage.setItem("remarks", document.querySelector("#remarks").value);
  /*Qualifications */
  localStorage.setItem(
    "qualifications",
    document.querySelector("#qualfications").value
  );

  /* Find Values */
  /* AGE */
  var dob = new Date(localStorage.getItem("dob"));
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  /* SERVICE */
 
   /* SERVICE */
    var totalService = getAge(new Date(localStorage.getItem("fromDate")) ,new Date(localStorage.getItem("toDate")));
 
/* SERVICE END */

  /* Insert Table Row on Submition */
  var table = document
    .getElementById("myRecentTable")
    .getElementsByTagName("tbody")[0];

  /* Finding Column Length */
  var rows = table.rows.length;

  var row = table.insertRow(rows++);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);

  /* ADD Details to Cells */

  var address = localStorage.getItem("name_address");
  var dateOfBirth = localStorage.getItem("dob");
  var appoFirst = localStorage.getItem("fappo");
  var remark = localStorage.getItem("remarks");
  var quali = localStorage.getItem("qualifications");
  var timeStamp = new Date();

  cell1.innerHTML = sl_no;
  cell2.innerHTML = address;
  cell3.innerHTML = dateOfBirth;
  cell4.innerHTML = age;
  cell5.innerHTML = appoFirst;
  cell6.innerHTML = totalService;
  cell7.innerHTML = remark;
  cell8.innerHTML = quali;
  cell9.innerHTML = timeStamp;
  cell10.innerHTML =
    '<div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-success" id="addService" onclick="addServ()"><i class="fa-solid fa-plus"></i></button><button type="button" class="btn btn-warning" id="editProf" onclick="editPro()"><i class="fa-solid fa-pen-to-square"></i></button><button type="button" class="btn btn-danger" id="delEmp" onclick="delEmp()"><i class="fa-solid fa-trash"></i></button></div>';
} 
function getAge(date_1, date_2)
{
  

//convert to UTC
var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));


var yAppendix, mAppendix, dAppendix;


//--------------------------------------------------------------
var days = date2_UTC.getDate() - date1_UTC.getDate();
if (days < 0)
{

    date2_UTC.setMonth(date2_UTC.getMonth() - 1);
    days += DaysInMonth(date2_UTC);
}
//--------------------------------------------------------------
var months = date2_UTC.getMonth() - date1_UTC.getMonth();
if (months < 0)
{
    date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
    months += 12;
}
//--------------------------------------------------------------
var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();




if (years > 1) yAppendix = " years";
else yAppendix = " year";
if (months > 1) mAppendix = " months";
else mAppendix = " month";
if (days > 1) dAppendix = " days";
else dAppendix = " day";


return years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix + " old.";
}


function DaysInMonth(date2_UTC)
{
var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
return monthLength;
}

function reset(){
  
    document.querySelector("#nameAddress").value = "";
  /*Designation */
  document.querySelector("#designation").value="";
  /*Date of Birth */
  document.querySelector("#dateofBirth").value="";
  /*First Appointment */
 document.querySelector("#firstAppo").value="";
  document.querySelector("#currAppoFrom").value="";
  /*Appo To Date */
  document.querySelector("#currAppoTo").value="";
  /*Remarks*/
  document.querySelector("#remarks").value="";
  /*Qualifications */
  document.querySelector("#qualfications").value="";
}