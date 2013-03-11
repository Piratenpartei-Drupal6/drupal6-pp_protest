$(document).ready(function() {
	// check cookie
	if (document.cookie.match(/(?:^|;)\s*PROTESTLOADER\s*=/)) {
		return;
	}
	// set cookie
	document.cookie = 'PROTESTLOADER=displayed';

	// append html
	$('body').append($('<div id=\"protest\"><div><a href=\"#\" class=\"close\" tabindex=\"1\">&nbsp;X</a>' + '<p><a class=\"link\" href=\"http://www.piratenpartei.de/2013/03/07/welttag-gegen-internetzensur-2013/\"><img src=\"/sites/all/modules/pp_protest/pp_protest.png\" alt=\"Welttag gegen Internetzensur <br>12.03.2013\" longdesc=\"Wir zeigen uns solidarisch mit allen durch Überwachung und Zensur eingeschränkten Journalisten und Aktivisten weltweit. Die Organisationen Reporter ohne Grenzen und die Piratenpartei rufen am Welttag gegen Internetzensur zu Protesten auf. \"></a></p>' + '<p class=\"more\">Weitere Informationen bei <a href="http://www.reporter-ohne-grenzen.de/">Reporter ohne Grenzen</a>. <a href="http://wiki.piratenpartei.de/Welttag-gegen-Internetzensur-2013">Informationen, sowie Plugins und Banner</a> zur Teilnahme finden sich auf dem Wiki der Piratenpartei Deutschland.</p>' + '</div></div>' ));

	// set height
    $('#protest').css('height', $(window).height());

	// clickhandler
    $('#protest .close').click(function () {
    	$('#protest').fadeOut();
    	return false;
    });

	// fade in
    if ($(window).width() >= 600) {
		$('#protest').fadeIn();
    }

	// resize handler
	$(window).bind('resize', function(){
		$('#protest').css('height', $(window).height());
	});
});