function Validation() {
    var flag=false;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var cardno = document.getElementById("card")
    if (cardno.value == "") {
        document.getElementById("cardrequired").style.display = "block";
    }
    else if (!cardno.value.match(regex)) {
        document.getElementById("validatecard").style.display = "block";
    }
    else{
        flag=true;
       
    }

    var code = document.getElementById("code");
    var regex = /^[0-9][0-9][0-9]$/;
    if (code.value == "") {

        document.getElementById("coderequired").style.display = "block";
        flag=false;

    }
    else if (!code.value.match(regex)) {

        document.getElementById("validatecode").style.display = "block";
        flag=false;
    }

    var name = document.getElementById("name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (name.value == "") {

        document.getElementById("namerequired").style.display = "block";
        flag=false;

    }
    else if (!name.value.match(regex)) {

        document.getElementById("validatename").style.display = "block";
        flag=false;
    }


    var zip = document.getElementById("zip");
    var regex = /[0-9]{6}/;
    if (zip.value == "") {
        document.getElementById("postrequired").style.display = "block";
        flag=false;
    }
    else if (!zip.value.match(regex)) {
        document.getElementById("validatepost").style.display = "block";
        flag=false;
    }



    var address = document.getElementById("address");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (address.value == "") {

        document.getElementById("addressrequired").style.display = "block";
        flag=false;
    }
    else if (!address.value.match(regex)) {

        document.getElementById("validateaddress").style.display = "block";
        flag=false;
    }


    var city = document.getElementById("city");
    var regex = /^[A-Za-z]+$/;
    if (city.value == "") {

        document.getElementById("townrequired").style.display = "block";
        flag=false;
    }
    else if (!city.value.match(regex)) {

        document.getElementById("validatetown").style.display = "block";
        flag=false;
    }


    var mail = document.getElementById("mail");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.value == "") {

        document.getElementById("mailrequired").style.display = "block";
        flag=false;
    }
    else if (!mail.value.match(regex)) {
         document.getElementById("validatemail").style.display = "block";
         flag=false;
    }

    if(flag==true) {
        document.getElementById("cardrequired").style.display = "none";
        document.getElementById("coderequired").style.display = "none";
        document.getElementById("namerequired").style.display = "none";
        document.getElementById("townrequired").style.display = "none";
        document.getElementById("addressrequired").style.display = "none";
        document.getElementById("postrequired").style.display = "none";
        document.getElementById("mailrequired").style.display = "none";
        
        document.getElementById("validatecard").style.display = "none";
        document.getElementById("validatecode").style.display = "none";
        document.getElementById("validatename").style.display = "none";
        document.getElementById("validateaddress").style.display = "none";
        document.getElementById("validatetown").style.display = "none";
        document.getElementById("validatemail").style.display = "none";
        

        alert("Payment successfull");
    }
}


