
var baseURL = window.location.href.substring(0, window.location.href.length-10);

function alertUser(e){
	alert("you clicked this at " + e.timeStamp);
}

$(function(){
	$('h1').on('click',function(e){
		alertUser(e);
	});

	});
var items = [];

function newElement(){
 var input = $('#items').val();
 var split = input.split(',');
 console.log(split);
 console.log(baseURL);
 console.log(baseURL+ 'project4/output.txt');
 $.post(baseURL+ 'project4/output.txt', input);


};

$('#save').click(
	function(){
		newElement();
	});