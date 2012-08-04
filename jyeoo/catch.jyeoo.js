// ==UserScript==
// @name           total
// @namespace      http://www.jyeoo.com/
// ==/UserScript==

// Hello World! example user script
// version 0.1 BETA!
// 2005-04-22
// Copyright (c) 2005, Mark Pilgrim
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.
//
// To install, you need Greasemonkey: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Hello World", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Hello World
// @namespace     http://diveintogreasemonkey.org/download/
// @description   example script to alert "Hello world!" on every page
// @include       *
// @exclude       http://diveintogreasemonkey.org/*
// @exclude       http://www.diveintogreasemonkey.org/*
// ==/UserScript==

// Add jQuery
var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
function GM_wait()
{
	if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
	else { $ = unsafeWindow.jQuery; letsJQuery(); }
}
GM_wait();


// *** put your code inside letsJQuery: ***
function letsJQuery()
{
	$(document).ready(function () {
			//validate
			if($('input#ex').length&&$('input#ex').closest('form').attr('action').indexOf('validate')>0){
			$('input#ex').closest('form').find('#v').val(eval($('input#ex').val()));
			$('input#ex').closest('form').submit();
			return;
			}
			//validate_end


			var link = [
			['W7','1'],
			['W7','3'],
			['W7','4'],
			['W7','11'],
			['W7','23'],
			['W7','30'],
			['W7','31'],
			['W7','32'],
			['W7','79'],
			['W7','81'],
			['W7','82'],
			['W7','94'],
			['W7','102'],
			['W8','10'],
			['W9','1'],
			['X2','30'],
			['X2','47'],
			['X3','8'],
			['X4','1'],
			['X4','3'],
			['X4','8'],
			['X4','14'],
			['X4','16'],
			['X4','19'],
			['X4','21'],
			['X4','24'],
			['X4','25'],
			['X4','26'],
			['X4','28'],
			['X4','29'],
			['X4','32'],
			['X4','37'],
			['X4','38'],
			['X4','39'],
			['X4','53'],
			['X4','54'],
			['X4','55'],
			['X4','56'],
			['X4','60'],
			['X4','64'],
			['X4','67'],
			['X4','68'],
			['X4','69'],
			['X4','72'],
			['X4','73'],
			['X5','3'],
			['X5','9'],
			['X5','10'],
			['X5','11'],
			['X5','12'],
			['X5','13'],
			['X5','35'],
			['X5','40'],
			['X6','5'],
			['X6','6'],
			['X6','7'],
			['X6','9'],
			['X6','13'],
			['X6','14'],
			['X6','15'],
			['X6','16'],
			['X6','21'],
			['X6','22'],
			['X6','23'],
			['X6','24'],
			['X6','25'],
			['X6','79'],
			['X6','152'],
			['X6','155'],
			['X7','10'],
			['X7','14'],
			['X7','30'],
			['X8','1'],
			['X8','14'],
			['X8','15'],
			['X8','16'],
			['X8','22'],
			['X9','3'],
			['X9','7'],
			['X9','11'],
			['%232','1'],
			['%232','4'],
			['%232','14'],
			['%233','31'],
			['%234','12'],
			['%235','24'],
			['%236','12'],
			['%237','3'],
			['%238','8'],
			['%23A','3'],
			['%252','2'],
			['%253','1'],
			['%254','1'],
			['%254','8'],
			['%255','2'],
			['%256','1'],
			['%256','2'],
			['%257','2'],
			['%259','1'],
			['%263','1'],
			['%264','2'],
			['%265','3'],
			['%266','7'],
			['%266','10'],
			['%267','1'],
			['%268','1'],
			['%269','1'],
			['%26A','4'],
			['%26A','5'],
			['%26A','20'],
			['%26B','2'],
			['%26C','2'],
			['%26D','1'],
			['%26E','1'],
			['%26F','1'],
			['%26G','2'],
			['%26H','4'],
			['*A','1'],
			['*B','1'],
			['*D','12'],
			['%402','2'],
			['%402','25'],
			['%403','4'],
			['%404','5'],
			['%406','1'],
			['%407','4'],
			['%409','1'],
			['%40A','2'],
			['%40A','3'],
			['%7e2','6'],
			['%7e3','11'],
			['%7e3','12'],
			['%7e4','6'],
			['%7e5','1'],
			['%7e6','2'],
			['%7e7','4'],
			['%7e8','2']
				];    

	var q=window.location.search.match(/q=(.+)$/)[1];
	var aaa=q.split('&');
	if(!aaa[1]) aaa[1] = 'p=1';
	$('fieldset').each(function(i){
			var a=[];


			a.push($('.pt1',this).html());

			if($('.pt2',this).length){
			var answers=[];
			$('td',this).each(function(){
				answers.push($(this).html());
				});
			a.push(answers);


			}

			if($(this).next().is('.fieldtip')){
			a.push($(this).next().find('a')[0].href);
			}

			$.get('http://anakin.mms.xiao.si/course/save/',{'t':a,'q':q},function(){});
			//$.get('http://www.tiantianshangke.com/course/save/',{'t':a,'q':q},function(){});

			if(i==$('fieldset').length-1)
			{
				for(var n in link)
				{
					if(aaa[0] == link[n][0] && aaa[1] == 'p=' + link[n][1])
					{
						var t= ((new Date()).valueOf()%3　+1)*1000;

						var timer=setTimeout((function(){window.location.href='http://www.jyeoo.com/math/ques/search?f=1&s=0&t=0&q='+link[parseInt(n)+1][0]+'&p=' + link[parseInt(n)+1][1]}),t);
						break;
					}
				}
			}
	});



	//$.ajaxSetup({success:ppp,error:ppp});

	});
}

