i = 1;
function formSubmition(){
    var slNo = ++i;
    localStorage.setItem("nameAddress", document.querySelector("#nameAddress").value);
    localStorage.setItem("designation", document.querySelector("#designation").value);
    localStorage.setItem("gender", document.querySelector("#gender_select").value);
    localStorage.setItem("dob", document.querySelector("#dateofBirth").value);
    localStorage.setItem("firstAppoDate", document.querySelector("#firstAppo").value);
    localStorage.setItem("appFrom", document.querySelector("#currAppoFrom").value);
    localStorage.setItem("appTo", document.querySelector("#currAppoTo").value);
    localStorage.setItem("remarks", document.querySelector("#remarks").value);
    localStorage.setItem("qualifications", document.querySelector("#qualfications").value);

    



    var userinput = localStorage.getItem("dob");  
    var dob = new Date(userinput); 

    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
  
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
  
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
  



    /* table add row */
    var table =document.getElementById("myRecentTable");

    var row = table.insertRow(1);


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
    var cell11 = row.insertCell(10);


    var nameAdd = localStorage.getItem("nameAddress");
    var dobY = localStorage.getItem("dob");
    var firstAppointment = localStorage.getItem("firstAppoDate");
    var remark = localStorage.getItem("remarks");
    var qualification = localStorage.getItem("qualifications");

    /*Sl No.*/cell1.innerHTML = slNo;
    /*Abbr*/cell2.innerHTML = abbr;
    /*name and address*/cell3.innerHTML = nameAdd;
    /*DOB*/cell4.innerHTML = formattedToday;
    /*AGE*/cell5.innerHTML = age;
    /*1st Appo*/cell6.innerHTML = firstAppointment;
    /*Total Serv*/cell7.innerHTML = localStorage.getItem("dob");
    /*Remarks*/cell8.innerHTML = remark;
    /*Qualifications*/cell9.innerHTML = qualification;
    /*Date and time*/cell10.innerHTML = new Date();
    /*Action*/cell11.innerHTML = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\"><button type=\"button\" class=\"btn btn-warning\">Edit <i class=\"fa-solid fa-pen-to-square\"></i></button><button type=\"button\" class=\"btn btn-danger\">Delete <i class=\"fa-solid fa-trash\"></i></button></div>";

};

