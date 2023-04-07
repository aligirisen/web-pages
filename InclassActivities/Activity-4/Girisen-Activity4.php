<!DOCTYPE html>
<html>


<head>
	<title>PHP Form</title>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Form</title>

	<link rel="stylesheet" href="style.css">

</head>

<body>
	<h2>Registration Form</h2>
	<form method="POST" action="Girisen-Activity4-preview.php">
		<div>
			<label for="name">Name:</label>
			<input type="text" name="name" id="name">
		</div>

		<div>
			<label for="username">Username:</label>
			<input type="text" name="username" id="username">
		</div>

		<div>
			<label for="password">Password:</label>
			<input type="text" name="password" id="password">
		</div>

		<div>
			<label for="address">Address:</label>
			<input type="text" name="address" id="address">
		</div>

		<div>
			<label for="country">Country:</label>
			<select id="country" name="country">
				<option value="">(please select your country)</option>
				<option value="en">Britain</option>
				<option value="de">Germany</option>
				<option value="fr">France</option>
			</select>
		</div>


		<div>
			<label for="zipcode">ZIP Code:</label>
			<input type="text" name="zipcode" id="zipcode">

		</div>

		<div>
			<label for="email">Email:</label>
			<input type="email" name="email" id="email">
		</div>


		<div>
			<label for="sex"> Sex:</label>

			<input type="radio" name="gender" value="Male">
			Male

			<input type="radio" name="gender" value="Female">
			Female

		</div>


		<div>
			<label for="language">Language:</label>


			<input type="checkbox" name="languages[]" value="en">
			English&nbsp;



			<input type="checkbox" name="languages[]" value="de">
			German&nbsp;


			<input type="checkbox" name="languages[]" value="fr">
			French

		</div>



		<div>
			<label for="about">About:</label>
			<textarea name="about" id="about" rows="5"></textarea>
		</div>

		<input class="button" type="submit" value="Submit">
	</form>
</body>

</html>