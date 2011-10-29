$(function(){
	$("#menu-tabs").tabs();
});

$(function(){
	$("#header, #menu, #footer")
		.addClass("ui-widget-content")
		.addClass("ui-corner-all");
	$("#university, #technology, #consultancy, #community")
		.addClass("content-container");
	$("#viewport").addClass("viewport");
});

$(function(){
	var resize = function() {
		$("#site-container").layout({
			type: "border",
			hgap: 5, vgap: 5,
			resize: false,
			items: [
				$("#header").addClass("north"),
				$("#menu").addClass("west"),
				$("#main").addClass("center"),
				$("#footer").addClass("south"),
			]
		});					
		var resizeMenuTabs = function() {
			var m = $("#menu-tabs");
			m.height($("#menu").height() - 7);

			var p = m.padding();
			var c = $("#university").padding();
			$("#university, #technology, #consultancy, #community")
				.height(
					m.height() - 
					(
						m.children("ul").outerHeight(true) + 
						p.top + p.bottom + c.top + c.bottom
					)
				);
		};
		resizeMenuTabs();
	}
	$(window).resize(resize);
	resize();
});

$(function(){
	(new Word("EFFRAFAX")).drawOn(Raphael('logo', 819, 105));
});

