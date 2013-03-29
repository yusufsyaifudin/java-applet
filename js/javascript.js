var javascript = {
	init : function(){
		$('#applet_wraper').append('<object type="application/x-java-applet" id="applet" name="applet_guest"></object>');
		$('#applet').append('<param name="cache_option" value="No">');
		$('#applet').append('<param name="codebase" value="applet_code">');
		$('#applet').append('<param name="code" value="apps.class">');
		$('#applet').append('<param name="archive" value="applet_code/apps.jar">');
	},
	success : function(username){
		var username = $('#value1').val();
		//alert(username);
		var api = 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=' + username + 
		'&callback=?';
		if ($('#tweet') != "") {
			$('#tweet').empty();
		};

		$('#tweet').append(
			'<a href="'+ api +'" target="blank">' + api + '</a>'
			);

		$.getJSON( api, function( json ) {
			//$('#tweet').text(json[0]);
			console.log(json);
		});

	}
}