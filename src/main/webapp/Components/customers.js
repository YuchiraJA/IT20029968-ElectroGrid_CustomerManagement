$(document).ready(function()
{
	 $("#alertSuccess").hide();
	 $("#alertError").hide();
});


$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validateCustomerForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "CustomersAPI", 
 type : type, 
 data : $("#formCustomer").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onCustomerSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onCustomerSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divCustomersGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hidUserIDSave").val(""); 
$("#formCustomer")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
		$("#hidUserIDSave").val($(this).data("userid")); 
		 $("#Cus_name").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#AccountNo").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#Email").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#PhoneNo").val($(this).closest("tr").find('td:eq(3)').text()); 
		 $("#Address").val($(this).closest("tr").find('td:eq(3)').text()); 
		 
		});




$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "CustomersAPI", 
		 type : "DELETE", 
		 data : "UserID=" + $(this).data("userid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onCustomerDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onCustomerDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divCustomersGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validateCustomerForm()
{
	// CODE
	if ($("#Cus_name").val().trim() == "")
	{
	return "Insert Customer Name.";
	}
	// NAME
	if ($("#AccountNo").val().trim() == "")
	{
	return "Insert Account Number.";
    }

    // PRICE-------------------------------
    if ($("#Email").val().trim() == "")
    {
	return "Insert Email.";
    }
		//// is numerical value
		//var tmpPrice = $("#itemPrice").val().trim();
		//if (!$.isNumeric(tmpPrice))
	//{
	//return "Insert a numerical value for Item Price.";
	//}
		
//// convert to decimal price
//$("#itemPrice").val(parseFloat(tmpPrice).toFixed(2));

     // DESCRIPTION------------------------
     if ($("#PhoneNo").val().trim() == "")
     {
	 return "Insert Phone Number.";
     }
     
     // DESCRIPTION------------------------
     if ($("#Address").val().trim() == "")
     {
	 return "Insert Address.";
     }
     
     
     
	return true;
}