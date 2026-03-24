function header_f() {
	var d0 = new Date(), d1 = new Date(2025, 2-1, 28);
	var n='<span style="font-size:11px;color: #333333">1/31</span> ';
	if(d1.getTime()-d0.getTime()>0){ n+='<img src="https://keyx0.net/img/new_w.gif" width="28" height="9" alt=""/>'; }
    var html = "";
	html += '<div id="logo"><a href="https://neutralx0.net/"><img src="https://keyx0.net/img/logo.gif" width="120" height="40" alt=""/></a></div>';
	html += '<div id="header_menu"><ul>';
	html += '<li><p><a href="https://neutralx0.net" style=color:#333>HOME</a></p></li>';
	html += '<li><p><a href="https://keyx0.net/">★タイピング</a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/room/">★脱出ゲーム</a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/mini/sakusaku/">★ミニゲーム</a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/tools/">★Webツール</a></p></li>';
	html += '<li><p><a href="https://neutralx0.com/" target="_blank" class="topmenu">実験室</a></p></li>';
	html += '<li><p><a href="https://youtube.com/@neutralx" target="_blank" class="topmenu">Youtube</a></p></li>';
	html += '<li><p><a href="http://info.neutralx0.com/" target="_blank" class="topmenu">ヘルプ</a></p></li>';
	html += '<li><p><a href="https://neutralx0.net/info.html" target="_blank" style="font-size:11px;color:#333">更新'+n+'</a></p></li>';
	html += '</ul></div>';
    document.getElementById('header').innerHTML = html;
}

function footer_f(){
	var html = '<div id="page_top"><a href="#top">&#9650;</a></div>';
	html += '<div id="footer_main">';
	html += '<p><a href="https://neutralx0.net/about.html" target="_blank">ご利用規約・プライバシーポリシー</a></p>';
	html += '<p>&copy; 2005 Neutral.</p>';
	html += '</div>';
	document.getElementById('footer').innerHTML = html;
}
