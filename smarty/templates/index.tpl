<html>
	<head>
		<title>effrafax.org</title>
		<link rel="stylesheet" type="text/css" href="css/effrafax.css"/>
		<link rel="stylesheet" type="text/css" href="css/theme/overcast/jquery-ui-overcast.css"/>
		<script src="js/jquery-1.6.4.min.js"></script>
		<script src="js/raphael-min.js"></script>
		<script src="js/jquery.sizes.min.js"></script>		
		<script src="js/jlayout.border.min.js"></script>		
		<script src="js/jquery.jlayout.min.js"></script>		
		<script src="js/ui/jquery.ui.core.min.js"></script>		
		<script src="js/ui/jquery.ui.widget.min.js"></script>		
		<script src="js/ui/jquery.ui.tabs.min.js"></script>		
		<script src="js/effrafax-logo.js"></script>
		<script src="js/effrafax-initialization.js"></script>
	</head>
	<body>
		<div id="site-container">
			<div id="header"><div id="logo"></div></div>
			<div id="menu"></div>
			<div id="main">
				<div id="menu-tabs">
					<ul>
						{foreach $parts as $part}
						<li><a href="#{$part}">{$part}</a></li>
						{/foreach}
					</ul>
					{foreach $parts as $part}
					<div id="#{$part}"><h1>{$part}</h1></div>
					{/foreach}
				</div>
			</div>
			<div id="footer"></div>
		</div>
	</body>
</html>
