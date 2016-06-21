$(document).ready(function() {

	console.log('Entre al jQuery');

	function displaylist(parse_user, i){
		$(".display").append("<tr> "+ 
								"<td class =\"name\"> "+ parse_user[i].name +"</td>"+
								"<td class =\"lastname\">" +parse_user[i].lastname +"</td>"+
								"<td class =\"username\"> "+ parse_user[i].username +"</td>"+
								"<td class =\"email\"> "+ parse_user[i].email +"</td></tr>");
	};


	jQuery(document).ready(function($) { 
      	$.ajax({ 
	        url : "/user/list",
	        type : 'POST', 
	        dataType : "json",
	        success : function(parse_user) {
	        	console.log('Entre a parsear los datos');
	        	for (var i = 0; i < parse_user.length; i++) {
					displaylist(parse_user, i);
        		};
			}
		});
	});
});
