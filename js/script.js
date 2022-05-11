let form = $("#form");
let firstName = $("#firstname")
let firstNameInput = $("#firstNameInput")
let lastname = $("#lastname")
let lastnameInput =


form.submit(function(){
    firstNameInput.text(firstName.val())
})

form.validate({
rules:{
    firstname:{
      required: true, 
    },
    lastname:{
        required: true, 
    },
    middlename:{
        required: true, 
    },
    dob:{
        required: true, 
    },
    sex:{
        required: true, 
    },
    phone:{
        required: true, 
    },
    country:{
        required: true, 
    },
    state:{
        required: true, 
    },
    lga:{
        required: true, 
    }
},
messages:{
    firstname:{
        required: "Please enter your legal first name", 
      }, 
      lastname:{
        required: "Please enter your legal last name", 
      },
      middlename:{
        required: "Please enter your legal middle name", 
      }, 
      dob:{
        required: "Please enter your Date of Birth", 
      },
      sex:{
        required: "Please enter your gender", 
      },
      phone:{
        required: "Please enter your phone number", 
      },
      state:{
        required: "Please enter your state of origin", 
      },
      lga:{
        required: "Please enter your local government area", 
      },
}
})

// DataTable
$('#table_id').DataTable({

    // to limit records
    pageLength: 4,

    recordsTotal: 50,
  });