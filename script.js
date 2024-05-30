function validate() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var street = document.getElementById('street').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip =document.getElementById('zip').value;
    var preferences = document.getElementById('preferences').value;
    var diet = document.getElementById('diet').value;
    var tshirt = document.getElementById('tshirt').value;
    var valname=/^[a-zA-z\s]+$/;
    var valdob=/^\d{4}-\d{2}-\d{2}$/;
    var valemail=/^[^\s@]+@[a-z]+\.[a-z]+$/;
    var valphone=/^\d{10}$/;
    var add=/^[^?]+$/;
    var pincode=/^\d{6}$/; 
    var options=/^[a-zA-Z\s]+$/


    //name
    if (!(valname.test(name)&&(name.length>=5))) {
        var x=document.getElementById("nameError");
        x.innerHTML="<p>Name should not be empty</p>";
        return false;
    }
        else{
            document.getElementById("nameError").innerHTML="";
        }

    //dob
    if (!(valdob.test(dob))) {
        var x1=document.getElementById("dobError");
        x1.innerHTML="<p>Please enter your date of birth</p>";
        //alert('Please enter your date of birth');
        return false;
    }
    else{
        document.getElementById("dobError").innerHTML="";
    }


    //gender
    if (!gender) {
        var x=document.getElementById("genderError");
        x.innerHTML="<p>Please select your gender</p>";
        //alert('Please select your gender');
        return false;
    }
    else{
        document.getElementById("genderError").innerHTML="";
    }

    //email
    if (!(valemail.test(email))) {
        var x=document.getElementById("emailError");
        x.innerHTML="<p>Please enter a valid email address</p>";
        //alert('Please enter a valid email address');
        return false;
    }
    else{
        document.getElementById("emailError").innerHTML="";
    }

    //number
    if (!(valphone.test(phone))) {
        var x=document.getElementById("numberError");
        x.innerHTML="<p>Please enter a valid 10-digit phone number</p>";
        //alert('Please enter a valid 10-digit phone number');
        return false;
    }
    else{
        document.getElementById("numberError").innerHTML="";
    }

    //address
    if (!(add.test(street))) {
        var x=document.getElementById("streetError");
        x.innerHTML="<p>Please enter your street address</p>";
        //alert('Please enter your street address');
        return false;
    }
    else{
        document.getElementById("streetError").innerHTML="";
    }

    //city
    if (!(valname.test(city))) {
        var x=document.getElementById("cityError");
        x.innerHTML="<p>Please enter your city</p>";
        //alert('Please enter your city');
        return false;
    }
    else{
        document.getElementById("cityError").innerHTML="";
    }

    //state
    if (!(options.test(state))) {
        var x=document.getElementById("stateError");
        x.innerHTML="<p>Please select your state</p>";
        //alert('Please select your state');
        return false;
    }
    else{
        document.getElementById("stateError").innerHTML="";
    }

    //zip
    if (!(pincode.test(zip))) {
        var x=document.getElementById("zipcodeError");
        x.innerHTML="<p>Please enter your 6-digit zip code</p>";
        //alert('Please enter your 6-digit zip code');
        return false;
    }
    else{
        document.getElementById("zipcodeError").innerHTML="";
    }

    //eventpreferences
    if (!(valname.test(preferences))) {
        var x=document.getElementById("eventError");
        x.innerHTML="<p>Please select at least one preference</p>";
        //alert('Please select at least one preference');
        return false;
    }
    else{
        document.getElementById("eventError").innerHTML="";
    }

    //diet
    if (!(valname.test(diet))) {
        var x=document.getElementById("dietError");
        x.innerHTML="<p>Please enter any dietary restriction</p>";
        //alert('Please enter any dietary restriction');
        return false;
    }
    else{
        document.getElementById("dietError").innerHTML="";
    }

    //size
    if (!(options.test(tshirt))) {
        var x=document.getElementById("sizeError");
        x.innerHTML="<p>Please select your T-shirt size</p>";
        //alert('Please select your T-shirt size');
        return false;
    }
    else{
        document.getElementById("sizeError").innerHTML="";
    }
    alert('Registration successful');
    return true;
}