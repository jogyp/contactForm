function sendData(){

	// Storing Form data in variables

	var firstName = $("#firstName").val();
	var lastName = $("#lastName").val();
	var dob = $('#dob').val();
	var phoneNo = $("#phoneNo").val();
	var email = $("#email").val();
	var message = $("#message").val();
	var title = $("#title").val();
	var emailReg = /^[A-Z0-9._%+-]+@([A-Z0-9]+\.)+[A-Z]{2,4}$/i;
	

	//Checking form fields on form submission
	if(firstName.trim() == ""){
		$('#fNameMsg').html('<small style="color:red;">Please Enter Name!</small>');
		$("#firstName").focus();
		return false;
	}
	else if(title.trim() == ""){
		$('#titleMsg').html('<small style="color:red;">Please Enter Name!</small>');
		$("#title").focus();
		return false;
	}
	else if(lastName.trim() == ""){
		$('#lNameMsg').html('<small style="color:red;">Please Enter Last Name</small>');
		$("#lastName").focus();
		return false;
	}

	// else if(dob.trim() == ""){
	// 	$('#dobMsg').html('<small style="color:red;">Please Enter Date of Birth</small>');
	// 	$("#dob").focus();
	// 	return false;
	// }
	else if(phoneNo.trim() == ""){
		$('#phoneMsg').html('<small style="color:red;">Please Enter Phone Number</small>');
		$("#phoneNo").focus();
		return false;
	}
	else if(email.trim() == ""){
		$('#emailMsg').html('<small style="color:red;">Please Enter Email</small>');
		$("#email").focus();
		return false;
	}

	//Email verfication 

	else if(email.trim() != "" && !emailReg.test(email)){
		$('#emailMsg').html('<small style="color:red;">Please Enter Valid Email</small>');
		$("#email").focus();
		return false;	
	}
	// else if(message.trim() == ""){
	// 	$('#messageMsg').html('<small style="color:red;">Please Enter Message</small>');
	// 	$("#message").focus();
	// 	return false;
	// }
	else if(message.length>300){
		$('#messageMsg').html('<small style="color:red;"> Message Exceed more than 50</small>');
		$("#message").focus();
		return false;
	}
	else{
		//Setting data to transfer in getData page
		localStorage.setItem("title",title);
		localStorage.setItem("lastName",lastName);
		localStorage.setItem("firstName",firstName);
		localStorage.setItem("dob",dob);
		localStorage.setItem("phoneNo",phoneNo);
		localStorage.setItem("email",email);
		localStorage.setItem("message",message);

		//linking with another page
		window.location.href = "getData.html"; 
	}
}