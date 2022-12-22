
function showalert(message) {
    document.getElementById("alertdiv").style.display = "block";
    document.getElementById("alertdiv").innerHTML = message;

    setTimeout(function () {
        // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
        document.getElementById("alertdiv").style.display = "none";
    }, 2000);
    }

    function validateForm() {
    
        let name = document.forms["myForm"]["name"].value;
        let email = document.forms["myForm"]["email"].value;
        let mobile = document.forms["myForm"]["mobile"].value;
        let weight = document.forms["myForm"]["weight"].value;
        let height = document.forms["myForm"]["height"].value;
        let address = document.forms["myForm"]["address"].value;
        let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
        let regPhone = /^\d{10}$/; // Javascript reGex for Phone Number validation.
        let regName = /\d+$/g;
        var checkRadio = document.querySelector('input[name="gender"]:checked');
    
        if (name == "" || regName.test(name)) {
            showalert("Please Enter Your Name Properly.");
            return false;
        }
    
        if (email == "" || !regEmail.test(email)) {
            showalert("Please Enter a Valid E-mail Address.");
            return false;
        }
        if (mobile == "" || !regPhone.test(mobile)) {
            showalert("Please Enter Valid Phone Number.");
            return false;
        }
    
        if(weight == "" || weight ==  null ){
            showalert("Please Enter Your Valid Weight.");
            return false;
        }

        if(height == "" || height ==  null ){
            showalert("Please Enter Your Valid height.");
            return false;
        }
        
        if (weight > 150) {
            showalert("Please Enter Your Valid Weight.");
            return false;
        }
    
        if (checkRadio == null) {
            showalert("Please Choose Your Gender.");
            return false;
        }
    
        if (address == "") {
            showalert("Please Enter Your Address.");
            return false;
        }


         return true;
    }