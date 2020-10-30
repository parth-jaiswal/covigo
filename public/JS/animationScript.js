document.getElementsByName("who")[0].addEventListener("mouseover", function () {
	document.getElementsByName("who")[0].style.backgroundColor = "#00235a";
	document.getElementsByName("who")[0].style.color = "white";
});

document.getElementsByName("who")[0].addEventListener("mouseout", function () {
	document.getElementsByName("who")[0].style.backgroundColor = "white";
	document.getElementsByName("who")[0].style.color = "#00235a";
});

document.getElementsByName("table")[0].addEventListener("mouseover", function () {
	document.getElementsByName("table")[0].style.backgroundColor = "#00235a";
	document.getElementsByName("table")[0].style.color = "white";
});

document.getElementsByName("table")[0].addEventListener("mouseout", function () {
	document.getElementsByName("table")[0].style.backgroundColor = "white";
	document.getElementsByName("table")[0].style.color = "#00235a";
});

document.getElementsByName("blog")[0].addEventListener("mouseover", function () {
	document.getElementsByName("blog")[0].style.backgroundColor = "#00235a";
	document.getElementsByName("blog")[0].style.color = "white";
});

document.getElementsByName("blog")[0].addEventListener("mouseout", function () {
	document.getElementsByName("blog")[0].style.backgroundColor = "white";
	document.getElementsByName("blog")[0].style.color = "#00235a";
});





$(".confirmed").hover(
	function () {
		if (!$(this).hasClass("animated")) {
			$(this).dequeue().stop().animate({ 'margin': '1px' });
		}
	},
	function () {
		$(this)
			.addClass("animated")
			.animate({ 'margin': "10px" }, "normal", "linear", function () {
				$(this).removeClass("animated").dequeue();
			});
	}
);

$(".deaths").hover(
	function () {
		if (!$(this).hasClass("animated")) {
			$(this).dequeue().stop().animate({ margin: "1px" });
		}
	},
	function () {
		$(this)
			.addClass("animated")
			.animate({ margin: "10px" }, "normal", "linear", function () {
				$(this).removeClass("animated").dequeue();
			});
	}
);

$(".recovered").hover(
	function () {
		if (!$(this).hasClass("animated")) {
			$(this).dequeue().stop().animate({ margin: "1px" });
		}
	},
	function () {
		$(this)
			.addClass("animated")
			.animate({ margin: "10px" }, "normal", "linear", function () {
				$(this).removeClass("animated").dequeue();
			});
	}
);