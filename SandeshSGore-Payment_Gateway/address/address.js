var address = [];
var localstorageitem = localStorage.getItem("address");
if (localstorageitem !== null) {
    address = JSON.parse(localstorageitem);
}
function addAddress(){
    check();
    var nam = document.getElementById("nam").value;
    var code = document.getElementById("pin").value;
    var stre = document.getElementById("division").value;
    var cit = document.getElementById("cit").value;
    var st = document.getElementById("sta").value;
    var mobi = document.getElementById("phone").value;

   

    var objpro = {
        name: nam,
        street: stre,
        city: cit,
        state: st,
        pincode: code,
        mobile: mobi,

    } 
    address.push(objpro);
    localStorage.setItem("address",JSON.stringify(address));

};



    // var totalitems = document.getElementById("totalitem");

    // totalitems.innerText = `Total Items  - ${(totalitem)}`

    function check() {
        var nam = document.getElementById("nam").value;
    var code = document.getElementById("pin").value;
    var stre = document.getElementById("division").value;
    var cit = document.getElementById("cit").value;
    var st = document.getElementById("sta").value;
    var mobi = document.getElementById("phone").value;


    if((code.length ==6) && (stre.length > 0) && (nam.length > 0) &&  (cit.length > 0) && (st.length > 0) && (cit.length > 0) && (mobi.length == 10)){
    console.log("yes");
    window.location.href="/checkout/checkout.html";

} else{
   let warni = document.getElementById("warn");
   warni.innerHTML = "Please fill required fields*"
}
    }