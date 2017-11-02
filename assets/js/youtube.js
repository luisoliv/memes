function loginYoutube()
{
    //i dont use the "var" keyword so i make this variable global
	username = document.getElementById('username').value;

	document.getElementById('loginYT').style.visibility = "hidden";

	var iframe = '<iframe id="ifram" src="youtube.html" width="320" height="240">';
	iframe.user = username;
	$('#loginYT').append(iframe);
	//i comented the iframe for testing purposes but still it "reloadS"
}

function getChannelData(channel) {
    $('#userLogin').remove();
    $('#loginYT').remove();
    var account = channel;
    console.log("El canal es....", channel);

	var id = styleIt(channel.id);
    var title = '<b>'+channel.snippet.title+'</b><br>';	
    var createDate = '<b>Fecha de Creacion: </b>'+channel.snippet.publishedAt;
    var desc = '<br><b>Descripcion:</b><br>'+channel.snippet.description;
    var mainInfo = styleIt(title + createDate + desc);
    var commentCount = styleIt('<b>Cantidad de comentarios : </b>'+channel.statistics.commentCount);
    var subscribers = styleIt('<b>Subscritos al canal : </b>'+channel.statistics.subscriberCount+' personas');
    var numberOfVideos = styleIt('<b>Num. de videos subidos : </b>'+channel.statistics.videoCount);
    var numberViews = styleIt('<b>Num. de vistas : </b>'+channel.statistics.viewCount);
    
    var urlThumbnail = channel.snippet.thumbnails.high.url;
    urlThumbnail = '<img src=' + urlThumbnail + 'alt="Profile Picture" width="200" height="200" style="border-radius: 70px"> ';

    $('#stats_zone').append(urlThumbnail);
    $('#stats_zone').append(mainInfo);
    //$('#stats_zone').append(createDate);
    //$('#stats_zone').append(desc);
    $('#stats_zone').append('<p><b>Algunos stats:</b> <br></p>');
    $('#stats_zone').append(commentCount);
    $('#stats_zone').append(subscribers);
    $('#stats_zone').append(numberOfVideos);
    $('#stats_zone').append(numberViews);

    $('#stats_zone').show();
}

function styleIt(htmlElement) {
	htmlElement = '<p>' + htmlElement + '</p>';
	return htmlElement;
}

function getUsername() {
	return this.username;
}




