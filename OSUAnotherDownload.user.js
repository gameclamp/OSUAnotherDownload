// ==UserScript==
// @name           OSUAnotherDownload
// @author         9尾雪狐
// @namespace      https://github.com/gameclamp/OSUAnotherDownload
// @description    Download Beatmaps with no limit！|无限制下图！
// @icon           http://osu.ppy.sh/favicon.ico
// @include        *://osu.ppy.sh/s/*
// @include        *://osu.ppy.sh/b/*
// @include        *://osu.ppy.sh/p/beatmap?*
// @updateURL      
// @downloadURL    
// @grant          GM_xmlhttpRequest
// @version        0.9.4
// ==/UserScript==
var sous = document.getElementsByTagName('h1') [0];
var acc = document.getElementsByClassName('login-open-button') [0];
var isranked = document.getElementsByClassName('beatmapListing') [0];
var script;
if (username = /Welcome, <b><a href=".*?>(.*?)<\/a><\/b>/.exec(document.body.innerHTML)) {
    var username = '&username=' + username[1];
} else {
    var username = '';
};
var myobj = new Array;
var uptime = '1';
var nupdate = '';
var uploader = '';
var songid = /return play\((\d+)/.exec(document.body.innerHTML) [1];
if (!isranked) {
    uptime = document.getElementsByClassName('colour') [15].innerHTML;
    uptime = uptime.match(/(.*)/g) [3].replace(/[\s]/g, '');
};
enuptime = '&uptime=' + encodeURIComponent(uptime);
function needupdate(a) {
    if (a == uptime) {
        nupdate = '';
    } else {
        nupdate = '<a title="A new version of this map have found，please update it." style="padding:6px;text-shadow: 0px 0px 13px #264A7F;font-size:9px;" onclick=' + '\'' + 'javascript:window.open("http://osuosz.duapp.com/1000eb.php' + '?songid=' + songid + enuptime + username + '","_blank","width=616,height=563,scrollbars=no,resizable=no,location=no,status=no,menubar=no,toolbar=no");' + '\'>' + 'Update osz' + '</a>';
    }
}
function haveacc(a) {
    if (a == '' || a == null) {
        n1000eblink = '<span>»1000eb</span>';
    } else {
        n1000eblink = '<a class="link 1000eb" target=_blank " href="http://1000eb.com/' + a + '">»1000eb</a>';
    };
};
function noacc(a, b) {
    if (a == '' || a == null) {
        n1000eblink = '<a title="Upload the osz to 1000eb.OSUAD need your help." style="text-shadow: 0px 0px 13px #264A7F;" onclick=' + '\'' + 'javascript:window.open("http://osuosz.duapp.com/1000eb.php' + '?songid=' + songid + enuptime + username + '","_blank","width=616,height=563,scrollbars=no,resizable=no,location=no,status=no,menubar=no,toolbar=no");' + '\'>' + 'Upload osz!' + '</a>';
    } else {
        n1000eblink = '<a class="link 1000eb" target=_blank " href="http://1000eb.com/' + a + '">»1000eb</a>';
        needupdate(b);
    };
};
function main() {
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'http://www.gameclamp.tk/osuAD.php?id=' + songid,
        headers: {
            'Referer': location.href,
        },
        onload: function (response) {
            var mydata = /{.*?}/.exec(response.responseText) [0];
            var myobj = eval('(' + mydata + ')');
            uploader = myobj.usern;
            //size
            if (myobj.size == '' || myobj.size == null) {
                size = '?MB'
            } else {
                size = myobj.size;
            }
            //blood

            if (myobj.blood == 0 || myobj.blood == null) {
                bloodlink = '»BloodCat';
            } else {
                bloodlink = '<a id="bloodlink" href="http://bloodcat.com/osu/m/' + myobj.blood + '" class="link bloodcat">»BloodCat</a>';
            }
            //lolial

            if (myobj.lolial == 0 || myobj.lolial == null) {
                lolial = '»Loli.al';
            } else {
                lolial = '<a id="bloodlink" href="http://loli.al/s/' + myobj.lolial + '" class="link lolial">»Loli.al</a>';
            }
            //uugl

            if (myobj.uugl == 0 || myobj.uugl == null) {
                uugllink = '»Osu.uu.gl';
            } else {
                uugllink = '<a id="uugllink" href="http://osu.uu.gl/pid/' + myobj.uugl + '" class="link uugl">»Osu.uu.gl</a>';
            }
            //1000eb

            if (acc) {
                haveacc(myobj.n1000eb)
            } else {
                if (!myobj.Suptime) {
                    myobj.Suptime = '';
                };
                noacc(myobj.n1000eb, myobj.Suptime)
            }
            sous.innerHTML = sous.innerHTML + '<div id="my_1" style="display:none">' + size + '&nbsp' + bloodlink + '&nbsp&nbsp' + lolial + '&nbsp&nbsp' + uugllink + '&nbsp&nbsp' + '<div style="position: absolute;display: inline;">' + n1000eblink + '<div class="1000eb" id="box" style="white-space:nowrap;position: absolute;display:none; text-shadow: 0px 0px 13px #264A7F;font-size:11px;">Uploader:<a target=_blank href="http://osu.ppy.sh/u/' + uploader + '">' + uploader + '</div>' + nupdate + '</div>' + '<a title="English or chinese please.If the osz is wrong,please tell me.\n如果osz不对，请通知我" href="http://weibo.com/gameclamp/" target=_blank style="float: right; text-shadow: 0px 0px 13px #264A7F;font-size:8px;">Feedback</a>' + '</div>';
            script = document.createElement('script');
            script.innerHTML = '(' + adisplay + ')();';
            document.body.appendChild(script);
            //document.getElementById('bloodlink').onclick = function(){GM_openInTab(document.getElementById('bloodlink').href);return false;}
            mycss =
            '\t\t\t.link:hover{\t\t\t\tdisplay: inline;\t\t\t\tpadding:3px;\t\t\t\tborder:3px solid #beceeb;\t\t\t\tbackground-color:white;\t\t\t\t-moz-box-shadow: 0 0 8px rgba(72, 106, 170, 0.5);\t\t\t\t-webkit-box-shadow: 0 0 8px rgba(72, 106, 170, 0.5);\t\t\t\tbox-shadow: 0 0 8px rgba(72, 106, 170, 0.5);\t\t\t}\t\t\t.link:active{\t\t\t\tdisplay: inline;\t\t\t\tpadding:3px;border:3px solid #beceeb;\t\t\t\tbackground-color:#dee6ff;\t\t\t\t-moz-box-shadow: 0 0 8px rgba(72, 106, 170, 0.5);\t\t\t\t-webkit-box-shadow: 0 0 8px rgba(72, 106, 170, 0.5);\t\t\t\tbox-shadow: 0 0 8px rgba(72, 106, 170, 0.5);\t\t\t\t\t\t\t}\t\t\t.link{\t\t\t\tdisplay:inlink;\t\t\t\tpadding:6px\t\t\t}\t\t\t'
            style = document.createElement('style');
            style.innerHTML = mycss;
            style.setAttribute('type', 'text/css');
            document.head.appendChild(style);
        }
    })
}
function adisplay() {
    $('#my_1') .show(150);
    $('.1000eb') .mouseenter(function () {
        document.getElementById('box') .style.display = 'block'
    });
    $('.1000eb') .mouseleave(function () {
        document.getElementById('box') .style.display = 'none'
    });
    $('.inline-form:eq(2)') .after('<select title="AutoDownload" class="todown"><option value="0">None</option><option value="1">Auto</option><option value="uugllink">Osu.uu.gl</option></select>');
    $('.todown') .val(localStorage.todown);
    $('.todown') .change(function () {
        localStorage.todown = $(this) .val();
        window.location.reload();
    });
    if (!localStorage.todown || localStorage.todown == '0') {
        return false;
    } else if (localStorage.todown == '1') {
        if (dn = document.getElementById('uugllink')) {
            dn.click();
        } else {
        }
    } else {
        document.getElementById(localStorage.todown) .click();
    };
};
main();
