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
			//alert('wegwegwegwe');
			var link = [
			'11',
			'12'
			];

			var q=window.location.search.match(/q=([^&]+)/)[1];
			var tit = document.title;
			$.get('http://www.tiantianshangke.com/course/savenum/',{'t':q,'q':tit},function(){});

			//alert('aa');
			//return;
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
				//alert(a);return;
				$.get('http://www.tiantianshangke.com/course/save/',{'t':a,'q':q},function(){});
				if(i==$('fieldset').length-1)ppp();
			});
			function ppp(){
				var tmp=[];
				if($('p.search a:last').prev().text()!="下一页"){
					//alert('done!');return;
					//console.log('f');
					/*
					   for(var i=0;i<6;i++){	
					   if(tmp[i] == aaa[0]){
					   if(tmp[i+1].length){
					   var nnn=tmp[i+1];
					   }
					   else{}
					   }
					   }
					 */
					//window.location.href="http://www.jyeoo.com/math3/ques/search?f=1&s=0&t=0&q=" + nnn;
					for(var n in link){
						if(q == link[n]){
							//return;
							var t= ((new Date()).valueOf()%3)*1000;
							setTimeout((function(){window.location.href="http://www.jyeoo.com/math3/ques/search?f=1&s=0&t=0&q="+link[parseInt(n)+1]}),t);

							//window.location.href="http://www.jyeoo.com/math2/ques/search?f=1&s=0&t=0&q=" + link[parseInt(n)+1];
							break;	
						}
					}
				}
				var t= ((new Date()).valueOf()%3　+2　)*1000;
				setTimeout((function(){window.location.href=$('p.search a:last').prev().attr('href');}),t);
			}

			$.ajaxSetup({success:ppp,error:ppp});

	});
}

