const circle = document.querySelector("#circle");
const emailCircle = document.querySelector(".email");
const emailInnerCircle = document.querySelector(".email-inner-circle");

circle.addEventListener("mouseover", function () {
	emailCircle.style.backgroundColor = "orangered";
	emailInnerCircle.style.color = "#111827";
	emailCircle.style.transition = "background-color .2s ease-out";
});
circle.addEventListener("click", function () {
	console.log("clicked");
	const copyText = "hey@manishbasargekar@gmail.com";
	copyToClipboard(copyText);
	// emailInnerCircle.style.backgroundColor = "yellow"
	// emailInnerCircle.style.transition = "background-color .2s ease-out";
});
circle.addEventListener("mouseout", function () {
	emailCircle.style.backgroundColor = "#1F2937";
	emailInnerCircle.style.color = "transparent";
});
