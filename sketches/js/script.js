// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
//   <iframe id="nothing" scrolling="no" frameborder="0" src="https://editor.p5js.org/catcatkilterrrr/embed/VbLfrgvS"></iframe>
//<iframe id="color" scrolling="no" frameborder="0" src="https://editor.p5js.org/catcatkilterrrr/embed/KebYY0FO"></iframe>
         
const key = 'ZS8apt86ttWcaW0kFgU6Q6oPPPG7i482BAMvPWOH';
let sol;

$(document).ready(function(){

//	let headers = new Headers();
//	headers.set('x-api-key', key);

	$('button').hover(function() {
		$(this).css('text-decoration', 'underline');
	},
	function(){
		$(this).css('text-decoration', 'none');	
	});

	$("#collision").click(function() {
		$("#p5Sketch").attr("src","https://editor.p5js.org/catcatkilterrrr/embed/637Ns9ou");
	});
	$("#nothing").click(function() {
		$("#p5Sketch").attr("src","https://editor.p5js.org/catcatkilterrrr/embed/VbLfrgvS");
	});
	$("#color").click(function() {
		$("#p5Sketch").attr("src","https://editor.p5js.org/catcatkilterrrr/embed/KebYY0FO");
	});
});


function highlight(button_id) {
	$(button_id).css('border-width', '3px');
	$(button_id).css('opacity', '1.0');	
	switch (button_id) {
		case '#c':
			notClicked('#o');
			notClicked('#s');
			break;
		case '#o':
			notClicked('#c');
			notClicked('#s');
			break;	
		case '#s':
			notClicked('#o');
			notClicked('#c');
			break;
	}
}

function notClicked(button_id){
	$(button_id).css('border-width', '1px');
	$(button_id).css('opacity', '0.6');	
}

function showPage() {
	$("#content").show();
}
