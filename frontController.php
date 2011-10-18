<html>
	<head>
		<title>FrontController Example</title>
	</head>
	<body>
		<h1>FrontController Example</h1>
		<p>
			This is an example of a front controller.
		</p>
		<table>
			<thead>
				<tr><td>Parameter</td><td>Value</td></tr>
			</thead>
			<tbody>
				<tr><td>part</td><td><?php echo $_GET["part"]; ?></td></tr>
				<tr><td>section</td><td><?php echo $_GET["section"]; ?></td></tr>          
			</tbody
		</table>
	</body>
</html>
