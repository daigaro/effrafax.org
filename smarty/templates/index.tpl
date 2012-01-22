<html>
	<head>
		<title>effrafax.org</title>
		<link rel="stylesheet" type="text/css" href="css/bootstrap-1.4.0.min.css"/>
		<link rel="stylesheet" type="text/css" href="/css/effrafax.css"/>
		<script src="/js/jquery-1.6.4.min.js"></script>
		<script src="/js/raphael-min.js"></script>
		<script src="/js/effrafax-logo.js"></script>
		<script src="/js/effrafax-initialization.js"></script>
	</head>
	<body>
		<div class="topbar">
			<div class="fill">
				<div class="container">
					<span class="brand">Effrafax</span>
					<ul class="nav">
						{foreach $parts as $part}
						<li><a href="#{$part}">{$part}</a></li>
						{/foreach}
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="hero-unit"><div id="logo"></div></div>
			{foreach $parts as $part}
			<div class="row">
				<div class="span4"><img src="http://placehold.it/210x150"></div>
				<div id="{$part}" class="span12"><h1>{$part}</h1></div>
			</div>
			{/foreach}
		</div>
	</body>
</html>
