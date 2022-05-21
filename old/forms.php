<?php 

error_reporting(1); 
include "classes/class.phpmailer.php"; 
date_default_timezone_set('Asia/Calcutta');  
$date= date("Y-m-d H:i:s"); // time in India


if(isset($_POST['feedback'])=="yes")
{   
	

	$name= $_POST['name'];
	$email=$_POST['email'];

	$contact= $_POST['mobile'];
	

	if(empty($name))
	{ 
		echo $error= "Please Enter Name";
		echo "<script>$('#name').focus(); $('#name').addClass('focus-red'); </script>";
	}
	
	else if(empty($email))
	{
		echo $error='Please Enter Email';
		echo "<script>$('#email').focus(); $('#email').addClass('focus-red');</script>"; 
	}
	else if(!filter_var($email,FILTER_VALIDATE_EMAIL))
	{
		echo $error='Please Enter Valid Email Id';
		echo "<script>$('#email').focus(); $('#email').addClass('focus-red');</script>"; 
	}
	else if(empty($contact))
	{
		echo $error= "Please Enter contact Number";
		echo "<script>$('#mobile').focus();$('#mobile').addClass('focus-red');</script>"; 
	}
	
	else
	{
		$information ='<html>
			<head>
				<title>m3mproperties Inquiry</title>
			</head>
			<body>
				<h2 style="margin-bottom:10px; text-align:center;">'.ucwords($name).' has filled the Feedback Inquiry Form & Details are given below</h2>
				<table width="60%" border="1" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; margin-left:0; color:#000; border-color:#404040">
				<tr valign="top" class="text"> 
					<td valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; padding:10px; width:35%; background:#484848; color:#fff;">Name</td>
					<td style="padding:10px;">'.$name.'</td>
				</tr> 
				<tr valign="top" class="text">      
					<td valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; padding:10px; width:35%; background:#484848; color:#fff;">Email</td>
					<td style="padding:10px;">'.$email.'</td>
				</tr>
				<tr valign="top" class="text"> 
					<td valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; padding:10px; width:35%; background:#484848; color:#fff;">Phone Number</td>
					<td style="padding:10px;"> '.$contact.'</td>
				</tr>
				
				
				</table>
			</body>
		</html>'; 
		
		$mail = new PHPMailer;       
		$mail->IsSMTP();
		$mail->Host = 'houztalk.com';    
		$mail->Port = 25;
		$mail->SMTPAuth = false; 
		//$mail->SMTPSecure = "ssl";    
		//$mail->Username = ""; //Username for SMTP authentication any valid email created in your domain
		//$mail->Password = ""; //Password for SMTP authentication
		$mail->AddReplyTo($email);
		$mail->SetFrom("info@houztalk.com",$email); 
		$mail->Subject = "The Elevate :: Feedback Inquiry";    
		//$mail->AddAddress("care@houztalk.com");  
		$mail->AddAddress("Harshit9807@gmail.com"); 
		//  $mail->AddCC("rachit@craffords.in"); 
		//  $mail->AddCC("rohit@craffords.in");
		$mail->MsgHTML($information); 
		//$mail->AddAttachment("images/asif18-logo.png");
		$send = $mail->Send(); 
		
		if($send)
		{   
			$status = 'ok';
		}
		else
		{
			$status = 'err';
			
		}
		// Output status
		echo $status;die;
	}
}

?>
