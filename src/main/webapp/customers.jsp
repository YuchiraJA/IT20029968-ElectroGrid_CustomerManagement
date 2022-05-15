<%@page import="com.Customer"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customers Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/customers.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1>ElectroGrid Customer Management</h1>
<form id="formCustomer" name="formCustomer" method="post" action="customers.jsp">
 Customer Name: 
 <input id="Cus_name" name="Cus_name" type="text" 
 class="form-control form-control-sm">
 <br> Account Number: 
 <input id="AccountNo" name="AccountNo" type="text" 
 class="form-control form-control-sm">
 <br> Email: 
 <input id="Email" name="Email" type="text" 
 class="form-control form-control-sm">
 <br> Phone Number: 
 <input id="PhoneNo" name="PhoneNo" type="text" 
 class="form-control form-control-sm">
 <br> Address: 
 <input id="Address" name="Address" type="text" 
 class="form-control form-control-sm">
 <br>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidUserIDSave" 
 name="hidUserIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divCustomersGrid">
 <%
 Customer customerObj = new Customer(); 
 out.print(customerObj.readCustomers()); 
 %>
</div>
</div> </div> </div> 
</body>
</html>
