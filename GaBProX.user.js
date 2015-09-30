// ==UserScript==
// @name         GaBProX
// @description  GaBProX
// @version      0.1
// @author       GaB
// @match        http://agar.io
// @match        http://agar.io/*
// @match        https://agar.io
// @require      https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.min.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest

// ==/UserScript==`
// Get lang script
var lang = "";
for (var i = 0; i < document.scripts.length; i++) {
    if (document.scripts[i].text.search("i18n_lang") > -1) {
        lang = document.scripts[i].text.slice(0, document.scripts[i].text.search("\\(function\\(") - 1);
        break;
    }
}
// Prevent original script
window.jQuery("#canvas").remove();
window.jQuery("body").append('<canvas id="canvas" width="800" height="600"></canvas>');
// Inject OGARio
var ogario = function(a,b){function c(){pb=!0,B(),setInterval(B,18e4),Ea=Ca=document.getElementById("canvas"),Da=Ea.getContext("2d"),Ea.onmousedown=function(a){if(wc){var b=a.clientX-(5+Fa/5/2),c=a.clientY-(5+Fa/5/2);if(Math.sqrt(b*b+c*c)<=Fa/5/2)return U(),void X(17)}Ra=1*a.clientX,Sa=1*a.clientY,A(),U()},Ea.onmousemove=function(a){Ra=1*a.clientX,Sa=1*a.clientY,A()},Ea.onmouseup=function(){},/firefox/i.test(navigator.userAgent)?document.addEventListener("DOMMouseScroll",y,!1):document.body.onmousewheel=y,b(a).on("beforeunload",d);var c=!1,e=!1,f=!1,g=!1,h=!1,i=!1,j=!1,k=!1,l=!1,m=!1;a.onkeydown=function(a){32!=a.keyCode||c||(U(),X(17),c=!0),81!=a.keyCode||e||(X(18),e=!0),87!=a.keyCode||f||(U(),X(21),f=!1),27==a.keyCode&&E(300),83!=a.keyCode||g||(p(!0),g=!0),65!=a.keyCode||h||(v(),h=!0),68!=a.keyCode||i||(q(),i=!0),69!=a.keyCode||j||(r(),j=!0),90!=a.keyCode||k||(x(),k=!0),88!=a.keyCode||l||(s(),l=!0),16!=a.keyCode||m||(Vb&&w(),m=!0)},a.onkeyup=function(a){32==a.keyCode&&(c=!1),87==a.keyCode&&(f=!1),81==a.keyCode&&e&&(X(19),e=!1),83==a.keyCode&&(p(!1),g=!1),65==a.keyCode&&(h=!1),68==a.keyCode&&(i=!1),69==a.keyCode&&(j=!1),90==a.keyCode&&(k=!1),88==a.keyCode&&(l=!1),16==a.keyCode&&(m=!1)},a.onblur=function(){X(19),f=e=c=!1},a.onresize=Z,a.requestAnimationFrame($c),setInterval(U,40),cb&&b("#region").val(cb),G(),D(b("#region").val()),0==Eb&&cb&&L(),E(0),Z(),a.location.hash&&6<=a.location.hash.length&&sa(a.location.hash)}function d(){return h()?"OGARio by szymy: Are you sure you want to quit the game?":void 0}function e(){a.localStorage.setItem("nick",qc),a.localStorage.setItem("clantag",rc),a.localStorage.setItem("skins",g(db)),a.localStorage.setItem("names",g(eb)),a.localStorage.setItem("darktheme",g(ib)),a.localStorage.setItem("colors",g(fb)),a.localStorage.setItem("showmass",g(jb)),a.localStorage.setItem("skipstats",g(Zb)),a.localStorage.setItem("acid",g(xb)),a.localStorage.setItem("zoom",g(Hb)),a.localStorage.setItem("mapborders",g(Ib)),a.localStorage.setItem("oppcolors",g(Jb)),a.localStorage.setItem("opprings",g(Kb)),a.localStorage.setItem("skinsalpha",g(Lb)),a.localStorage.setItem("cellsalpha",g(Mb)),a.localStorage.setItem("simpledraw",g(Nb)),a.localStorage.setItem("splittimer",g(Ob)),a.localStorage.setItem("splitrange",g(Pb)),a.localStorage.setItem("virusrange",g(Qb)),a.localStorage.setItem("biggernames",g(Rb)),a.localStorage.setItem("onlyogarioskins",g(Tb)),a.localStorage.setItem("showminimap",g(Ub)),a.localStorage.setItem("shifton",g(Vb)),a.localStorage.setItem("showfps",g(Wb)),a.localStorage.setItem("showmassguides",g(Xb)),a.localStorage.setItem("cursortracking",g(Yb)),a.localStorage.setItem("rainbowfood",g($b)),a.localStorage.setItem("sectorsbg",g(_b))}function f(){null!==a.localStorage.getItem("skins")&&(setSkins(g(a.localStorage.getItem("skins"))),setNames(g(a.localStorage.getItem("names"))),setDarkTheme(g(a.localStorage.getItem("darktheme"))),setColors(g(a.localStorage.getItem("colors"))),setShowMass(g(a.localStorage.getItem("showmass"))),setSkipStats(g(a.localStorage.getItem("skipstats"))),setAcid(g(a.localStorage.getItem("acid"))),setZoom(g(a.localStorage.getItem("zoom"))),setMapBorders(g(a.localStorage.getItem("mapborders"))),setOppColors(g(a.localStorage.getItem("oppcolors"))),setOppRings(g(a.localStorage.getItem("opprings"))),setSkinsAlpha(g(a.localStorage.getItem("skinsalpha"))),setCellsAlpha(g(a.localStorage.getItem("cellsalpha"))),setSimpleDraw(g(a.localStorage.getItem("simpledraw"))),setSplitTimer(g(a.localStorage.getItem("splittimer"))),setSplitRange(g(a.localStorage.getItem("splitrange"))),setVirusRange(g(a.localStorage.getItem("virusrange"))),setBiggerNames(g(a.localStorage.getItem("biggernames"))),setOnlyOgarioSkins(g(a.localStorage.getItem("onlyogarioskins"))),setShowMiniMap(g(a.localStorage.getItem("showminimap"))),setShiftOn(g(a.localStorage.getItem("shifton"))),setShowFps(g(a.localStorage.getItem("showfps"))),setShowMassGuides(g(a.localStorage.getItem("showmassguides"))),setCursorTracking(g(a.localStorage.getItem("cursortracking"))),setRainbowFood(g(a.localStorage.getItem("rainbowfood"))),setSectorsBg(g(a.localStorage.getItem("sectorsbg"))))}function g(a){return"string"==typeof a?JSON.parse(a):JSON.stringify(a)}function h(){return Ma.length>0}function j(){return Ma.length>1}function k(){return Ma.length}function l(a){return(Date.now()-a)/1e3}function m(a){return Math.floor(l(a)/3600)+"h "+Math.floor(l(a)/60)%60+"m "+Math.floor(l(a)%60)+"s"}function n(){return 30+da()/100*.02}function o(){return j()?Ob?(k()!=ec&&(startSplitTime=Ma[k()-1].createTime,ec=k()),n()-(Date.now()-startSplitTime)/1e3):0:(ec=1,Sb=!0,0)}function p(a){dc=a}function q(){Sb=!Sb,ea(Sb,ib)}function r(){ac=!ac}function s(){tc--,0>tc&&(tc=sc.length-1)}function t(a,b){sc.push({x:a,y:b}),6==sc.length&&sc.splice(0,1),tc=sc.length-1}function u(a){a?(cc=!0,lc=Date.now(),x(),gc=0,t(kb,lb)):cc=!1}function v(){var a=0,b=setInterval(function(){U(),X(21),7==++a&&clearInterval(b)},100)}function w(){var a=0,b=setInterval(function(){U(),X(17),4==++a&&clearInterval(b)},100)}function x(){Bb=1}function y(a){Bb*=Math.pow(.9,a.wheelDelta/-120||a.detail||0),!Hb&&1>Bb&&(Bb=1),Bb>4/bb&&(Bb=4/bb)}function z(){if(.4>bb)Ha=null;else{for(var a=Number.POSITIVE_INFINITY,b=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=Number.NEGATIVE_INFINITY,e=0;e<Oa.length;e++){var f=Oa[e];!f.H()||f.L||20>=f.size*bb||(a=Math.min(f.x-f.size,a),b=Math.min(f.y-f.size,b),c=Math.max(f.x+f.size,c),d=Math.max(f.y+f.size,d))}for(Ha=ld.X({ba:a-10,ca:b-10,Z:c+10,$:d+10,fa:2,ha:4}),e=0;e<Oa.length;e++)if(f=Oa[e],f.H()&&!(20>=f.size*bb))for(a=0;a<f.a.length;++a)b=f.a[a].x,c=f.a[a].y,Ja-Fa/2/bb>b||Ka-Ga/2/bb>c||b>Ja+Fa/2/bb||c>Ka+Ga/2/bb||Ha.Y(f.a[a])}}function A(){Ta=(Ra-Fa/2)/bb+Ja,Ua=(Sa-Ga/2)/bb+Ka}function B(){null==zc&&(zc={},b("#region").children().each(function(){var a=b(this),c=a.val();c&&(zc[c]=a.text())})),b.get(Aa+"info",function(a){var d,c={};for(d in a.regions){var e=d.split(":")[0];c[e]=c[e]||0,c[e]+=a.regions[d].numPlayers}for(d in c)b('#region option[value="'+d+'"]').text(zc[d]+" ("+c[d]+" players)")},"json")}function C(){b("#adsBottom").hide(),b("#overlays").hide(),b("#stats").hide(),b("#mainPanel").hide(),sd=Db=!1,G(),I(a.aa.concat(a.ac))}function D(c){c&&c!=cb&&(b("#region").val()!=c&&b("#region").val(c),cb=a.localStorage.location=c,b(".region-message").hide(),b(".region-message."+c).show(),b(".btn-needs-server").prop("disabled",!1),pb&&L())}function E(c){Db||sd||(Ya=null,Ac||(b("#adsBottom").show(),ac=!0,b("#g300x250").hide(),b("#a300x250").show()),H(Ac?a.ac:a.aa),Ac=!1,1e3>c&&(Cb=1),Db=!0,b("#mainPanel").show(),c>0?b("#overlays").fadeTo(c,.75):b("#overlays").show())}function F(a){b("#helloContainer").attr("data-gamemode",a),nb=a,b("#gamemode").val(a)}function G(){b("#region").val()?a.localStorage.location=b("#region").val():a.localStorage.location&&b("#region").val(a.localStorage.location),b("#region").val()?b("#locationKnown").append(b("#region")):b("#locationUnknown").append(b("#region"))}function H(b){a.googletag&&a.googletag.cmd.push(function(){Bc&&(Bc=!1,setTimeout(function(){Bc=!0},6e4*Cc),a.googletag&&a.googletag.pubads&&a.googletag.pubads().refresh&&a.googletag.pubads().refresh(b))})}function I(b){a.googletag&&a.googletag.pubads&&a.googletag.pubads().clear&&a.googletag.pubads().clear(b)}function J(b){return a.i18n[b]||a.i18n_dict.en[b]||b}function K(){var a=++Eb;console.log("Find "+cb+nb),b.ajax(Aa+"findServer",{error:function(){setTimeout(K,1e3)},success:function(b){a==Eb&&(b.alert&&alert(b.alert),M("ws://"+b.ip,b.token))},dataType:"json",method:"POST",cache:!1,crossDomain:!0,data:(cb+nb||"?")+"\n154669603"})}function L(){pb&&cb&&(b("#connecting").show(),K())}function M(a,b){if(Ia){Ia.onopen=null,Ia.onmessage=null,Ia.onclose=null;try{Ia.close()}catch(c){}Ia=null}if(Gb.ip&&(a="ws://"+Gb.ip),null!=Ec){var d=Ec;Ec=function(){d(b)}}if(za){var e=a.split(":");a=e[0]+"s://ip-"+e[1].replace(/\./g,"-").replace(/\//g,"")+".tech.agar.io:"+(+e[2]+2e3)}La=[],Ma=[],Na={},Oa=[],Pa=[],Qa=[],Kc=ob=null,hb=0,yb=!1,console.log("Connecting to "+a),Ia=new WebSocket(a),Ia.binaryType="arraybuffer",Ia.onopen=function(){var a;console.log("socket open"),a=N(5),a.setUint8(0,254),a.setUint32(1,5,!0),O(a),a=N(5),a.setUint8(0,255),a.setUint32(1,154669603,!0),O(a),a=N(1+b.length),a.setUint8(0,80);for(var c=0;c<b.length;++c)a.setUint8(c+1,b.charCodeAt(c));O(a),Y()},Ia.onmessage=Q,Ia.onclose=P,Ia.onerror=function(){console.log("socket error")}}function N(a){return new DataView(new ArrayBuffer(a))}function O(a){Ia.send(a.buffer)}function P(){yb&&(Fc=500),console.log("socket close"),setTimeout(L,Fc),Fc*=2}function Q(a){R(new DataView(a.data))}function R(a){function b(){for(var b="";;){var d=a.getUint16(c,!0);if(c+=2,0==d)break;b+=String.fromCharCode(d)}return b}var c=0;switch(240==a.getUint8(c)&&(c+=5),a.getUint8(c++)){case 16:S(a,c);break;case 17:kb=a.getFloat32(c,!0),c+=4,lb=a.getFloat32(c,!0),c+=4,mb=a.getFloat32(c,!0),c+=4;break;case 20:Ma=[],La=[];break;case 21:rb=a.getInt16(c,!0),c+=2,sb=a.getInt16(c,!0),c+=2,qb||(qb=!0,tb=rb,ub=sb);break;case 32:La.push(a.getUint32(c,!0)),c+=4;break;case 49:if(null!=ob)break;var d=a.getUint32(c,!0),c=c+4;Qa=[];for(var e=0;d>e;++e){var f=a.getUint32(c,!0),c=c+4;Qa.push({id:f,name:b()})}ia();break;case 50:for(ob=[],d=a.getUint32(c,!0),c+=4,e=0;d>e;++e)ob.push(a.getFloat32(c,!0)),c+=4;ia();break;case 64:Za=a.getFloat64(c,!0),c+=8,$a=a.getFloat64(c,!0),c+=8,_a=a.getFloat64(c,!0),c+=8,ab=a.getFloat64(c,!0),c+=8,kb=(_a+Za)/2,lb=(ab+$a)/2,mb=1,0==Ma.length&&(Ja=kb,Ka=lb,bb=mb);break;case 81:var g=a.getUint32(c,!0),c=c+4,h=a.getUint32(c,!0),c=c+4,i=a.getUint32(c,!0),c=c+4;setTimeout(function(){oa({d:g,e:h,c:i})},1200)}}function S(c,d){function e(){for(var a="";;){var b=c.getUint16(d,!0);if(d+=2,0==b)break;a+=String.fromCharCode(b)}return a}function f(){for(var a="";;){var b=c.getUint8(d++);if(0==b)break;a+=String.fromCharCode(b)}return a}zb=Wa=Date.now(),yb||(yb=!0,T()),gb=!1;var g=c.getUint16(d,!0);d+=2;for(var h=0;g>h;++h){var i=Na[c.getUint32(d,!0)],j=Na[c.getUint32(d+4,!0)];d+=8,i&&j&&(j.R(),j.o=j.x,j.p=j.y,j.n=j.size,j.C=i.x,j.D=i.y,j.m=j.size,j.K=Wa,ua(i,j))}for(h=0;g=c.getUint32(d,!0),d+=4,0!=g;){++h;var k,i=c.getInt32(d,!0);d+=4,j=c.getInt32(d,!0),d+=4,k=c.getInt16(d,!0),d+=2;var l=c.getUint8(d++),m=c.getUint8(d++),n=c.getUint8(d++),m=la(l<<16|m<<8|n),n=c.getUint8(d++),o=!!(1&n),p=!!(16&n),q=null;2&n&&(d+=4+c.getUint32(d,!0)),4&n&&(q=f());var r=e(),l=null;Na.hasOwnProperty(g)?(l=Na[g],l.J(),l.o=l.x,l.p=l.y,l.n=l.size,l.color=m):(l=new ka(g,i,j,k,m,r),Oa.push(l),Na[g]=l,l.ia=i,l.ja=j),l.f=o,l.j=p,l.C=i,l.D=j,l.m=k,l.K=Wa,l.T=n,q&&(l.V=q),r&&l.t(r),-1!=La.indexOf(g)&&-1==Ma.indexOf(l)&&(Ma.push(l),1==Ma.length&&(Ja=l.x,Ka=l.y,md(),document.getElementById("overlays").style.display="none",pd=[],qd=0,rd=Ma[0].color,td=!0,ud=Date.now(),yd=xd=wd=0))}for(i=c.getUint32(d,!0),d+=4,h=0;i>h;h++)g=c.getUint32(d,!0),d+=4,l=Na[g],null!=l&&l.R();gb&&0==Ma.length&&(vd=Date.now(),td=!1,Db||sd||(Zb?E(3e3):(H(a.ab),xa(),sd=!0,b("#overlays").fadeTo(3e3,.75),b("#stats").show())),jc++,u(!1))}function T(){b("#connecting").hide(),V(),Ec&&(Ec(),Ec=null),null!=Gc&&clearTimeout(Gc),Gc=setTimeout(function(){a.ga&&(++Hc,a.ga("set","dimension2",Hc))},1e4)}function U(){if(W()&&!ac){var a=Ra-Fa/2,b=Sa-Ga/2;64>a*a+b*b||.01>Math.abs(Ic-Ta)&&.01>Math.abs(Jc-Ua)||(Ic=Ta,Jc=Ua,a=N(13),a.setUint8(0,16),a.setInt32(1,Ta,!0),a.setInt32(5,Ua,!0),a.setUint32(9,0,!0),O(a))}}function V(){if(W()&&yb&&null!=Ya){var a=N(1+2*Ya.length);a.setUint8(0,0);for(var b=0;b<Ya.length;++b)a.setUint16(1+2*b,Ya.charCodeAt(b),!0);O(a),Ya=null}}function W(){return null!=Ia&&Ia.readyState==Ia.OPEN}function X(a){if(W()){var b=N(1);b.setUint8(0,a),O(b)}}function Y(){if(W()&&null!=Ab){var a=N(1+Ab.length);a.setUint8(0,81);for(var b=0;b<Ab.length;++b)a.setUint8(b+1,Ab.charCodeAt(b));O(a)}}function Z(){Fa=1*a.innerWidth,Ga=1*a.innerHeight,Ca.width=Ea.width=Fa,Ca.height=Ea.height=Ga;var c=b("#helloContainer");c.css("transform","none");var d=c.height(),e=a.innerHeight;d>e/1.1?c.css("transform","translate(-50%, -50%) scale("+e/d/1.1+")"):c.css("transform","translate(-50%, -50%)"),aa()}function $(){var a;return a=1*Math.max(Ga/1080,Fa/1920),a*=Bb}function _(){if(0!=Ma.length){for(var a=0,b=0;b<Ma.length;b++)a+=Ma[b].size;a=Math.pow(Math.min(64/a,1),.4)*$(),bb=(9*bb+a)/10}}function aa(){var a,b=Date.now();if(++Va,Wa=b,0<Ma.length){_();for(var c=a=0,d=0;d<Ma.length;d++)Ma[d].J(),a+=Ma[d].x/Ma.length,c+=Ma[d].y/Ma.length;kb=a,lb=c,mb=bb,Ja=(Ja+a)/2,Ka=(Ka+c)/2}else Ja=(29*Ja+kb)/30,Ka=(29*Ka+lb)/30,bb=(9*bb+mb*$())/10;for(z(),A(),xb||Da.clearRect(0,0,Fa,Ga),xb?(Da.fillStyle=ib?"#111111":"#F2FBFF",Da.globalAlpha=.05,Da.fillRect(0,0,Fa,Ga),Da.globalAlpha=1):ba(),Oa.sort(function(a,b){return a.size==b.size?a.id-b.id:a.size-b.size}),Da.save(),Da.translate(Fa/2,Ga/2),Da.scale(bb,bb),Da.translate(-Ja,-Ka),_b&&fa(Da,7,7,-7080,-7080,7080,7080,10,ib,!0),Ib&&(Da.strokeStyle="#FF7800",Da.lineWidth=20,Da.strokeRect(-7080,-7080,14160,14160)),d=0;d<Pa.length;d++)Pa[d].s(Da);for(d=0;d<Oa.length;d++)Oa[d].s(Da);if(qb){for(tb=(3*tb+rb)/4,ub=(3*ub+sb)/4,Da.save(),Da.strokeStyle="#FFAAAA",Da.lineWidth=10,Da.lineCap="round",Da.lineJoin="round",Da.globalAlpha=.5,Da.beginPath(),d=0;d<Ma.length;d++)Da.moveTo(Ma[d].x,Ma[d].y),Da.lineTo(tb,ub);Da.stroke(),Da.restore()}Da.restore(),Kc&&Kc.width&&Da.drawImage(Kc,Fa-Kc.width-10,10),hb=Math.max(hb,da()),uc=da()/100,h()&&(roundTime=l(lc)),0!=hb&&(null==Mc&&(Mc=new ma(20,"#FFFFFF")),Mc.u("Mass: "+~~uc+" | Highest mass: "+~~(hb/100)+" | Kills: "+~~gc+" | Food: "+~~qd+" | Time: "+m(lc)),c=Mc.F(),a=c.width,Da.globalAlpha=.3,Da.fillStyle="#000000",Da.fillRect(10,Ga-10-20-10,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,Ga-10-20-6)),fc=Math.max(fc,hb),hc=Math.max(hc,gc),ic=Math.max(ic,qd),dc&&0!=fc&&(null==Nc&&(Nc=new ma(20,"#FF7800")),Nc.u("Game highest mass: "+~~(fc/100)+" | Highest kills: "+~~hc+" | Highest food: "+~~ic+" | Total deaths: "+~~jc+" | Game time: "+m(kc)),c=Nc.F(),a=c.width,Da.globalAlpha=.4,Da.fillStyle="#000000",Da.fillRect(10,Ga-10-20-10-35,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,Ga-10-20-6-35)),nc=o(),Ob&&j()&&(null==Oc&&(Oc=new ma(30,"#FF7800","000000")),Oc.u(~~nc+"s"),c=Oc.F(),a=c.width,Da.globalAlpha=1,Da.drawImage(c,Fa/2-a/2,10)),j()&&(Qc&&Qc.width?Da.drawImage(Qc,Fa/2-28,Ob?44:10):ea(Sb,ib),null==Pc&&(Pc=new ma(20,"#FFFFFF","#000000")),Pc.u(~~k()+" / 16"),c=Pc.F(),a=c.width,Da.globalAlpha=1,Da.drawImage(c,Fa/2-a/2,Ob?78:44)),Wb&&h()&&(null==Rc&&(Rc=new ma(20,"#FF7800")),Rc.u("FPS: "+~~oc),c=Rc.F(),a=c.width,Da.globalAlpha=.3,Da.fillStyle="#000000",Da.fillRect(10,10,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,14)),Xb&&h()&&(null==Sc&&(Sc=new ma(20,"#BE00FF")),Sc.u("●● >"+~~Math.floor(2.5*uc)),c=Sc.F(),a=c.width,Da.globalAlpha=.2,Da.fillStyle="#000000",Da.fillRect(10,Wb?41:10,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,14+(Wb?31:0)),null==Tc&&(Tc=new ma(20,"#FF0A00")),Tc.u("● >"+~~Math.floor(1.25*uc)),c=Tc.F(),a=c.width,Da.globalAlpha=.2,Da.fillStyle="#000000",Da.fillRect(10,Wb?72:41,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,14+(Wb?62:31)),null==Uc&&(Uc=new ma(20,"#00C8FF")),Uc.u("● <"+~~Math.floor(.75*uc)),c=Uc.F(),a=c.width,Da.globalAlpha=.2,Da.fillStyle="#000000",Da.fillRect(10,Wb?103:72,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,14+(Wb?93:62)),uc>=35&&(null==Vc&&(Vc=new ma(20,"#64FF00")),Vc.u("●● <"+~~Math.floor(uc*(1e3>uc?.35:.38))),c=Vc.F(),a=c.width,Da.globalAlpha=.2,Da.fillStyle="#000000",Da.fillRect(10,Wb?134:103,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,14+(Wb?124:93)),null==Wc&&(Wc=new ma(20,"#FFFFFF")),Wc.u("W x"+~~Math.floor((uc-18)/17)),c=Wc.F(),a=c.width,Da.globalAlpha=.2,Da.fillStyle="#000000",Da.fillRect(10,Wb?165:134,a+10,30),Da.globalAlpha=1,Da.drawImage(c,15,14+(Wb?155:124)))),Ub&&(ha(7,7,kb,lb,182,14160,Ma,ib),Yc&&Yc.width&&Da.drawImage(Yc,Fa-Yc.width-10,Ga-Yc.height-45)),h()&&(null==Xc&&(Xc=new ma(14,"#FFFFFF","#000000")),Xc.u("Polish MOD: OGARio by szymy"),c=Xc.F(),a=c.width,Da.globalAlpha=.75,Da.drawImage(c,Fa-a-10,Ga-5-15-5),Da.globalAlpha=1),ca(),b=Date.now()-b,b>1e3/60?Lc-=.01:1e3/65>b&&(Lc+=.01),.4>Lc&&(Lc=.4),Lc>1&&(Lc=1),b=Wa-Xa,!W()||Db||sd?(Cb+=b/2e3,Cb>1&&(Cb=1)):(Cb-=b/300,0>Cb&&(Cb=0)),Cb>0?(Da.fillStyle="#000000",Fb?(Da.globalAlpha=Cb,Da.fillRect(0,0,Fa,Ga),vc.complete&&vc.width&&(vc.width/vc.height<Fa/Ga?(b=Fa,a=vc.height*Fa/vc.width):(b=vc.width*Ga/vc.height,a=Ga),Da.drawImage(vc,(Fa-b)/2,(Ga-a)/2,b,a),Da.globalAlpha=.5*Cb,Da.fillRect(0,0,Fa,Ga))):(Da.globalAlpha=.5*Cb,Da.fillRect(0,0,Fa,Ga)),Da.globalAlpha=1):Fb=!1,Xa=Wa}function ba(){if(Da.fillStyle=ib?"#111111":"#F2FBFF",Da.fillRect(0,0,Fa,Ga),Da.save(),Da.strokeStyle=ib?"#AAAAAA":"#000000",Da.globalAlpha=.2*bb,!_b){Da.strokeStyle=ib?"#AAAAAA":"#000000",Da.globalAlpha=.2*bb;for(var a=Fa/bb,b=Ga/bb,c=(-Ja+a/2)%50;a>c;c+=50)Da.beginPath(),Da.moveTo(c*bb-.5,0),Da.lineTo(c*bb-.5,b*bb),Da.stroke();for(c=(-Ka+b/2)%50;b>c;c+=50)Da.beginPath(),Da.moveTo(0,c*bb-.5),Da.lineTo(a*bb,c*bb-.5),Da.stroke()}Da.restore()}function ca(){if(wc&&xc.width){var a=Fa/5;Da.drawImage(xc,5,5,a,a)}}function da(){for(var a=0,b=0;b<Ma.length;b++)a+=Ma[b].m*Ma[b].m;return a}function ea(a,b){Qc=document.createElement("canvas");var c=Qc.getContext("2d");Qc.width=56,Qc.height=32,c.fillStyle=b?"#FFFFFF":"#000000",c.globalAlpha=a?.6:.3,c.beginPath(),c.arc(16,16,16,0,2*Math.PI,!1),c.closePath(),c.fill(),c.globalAlpha=a?.3:.6,c.beginPath(),c.arc(44,16,12,0,2*Math.PI,!1),c.closePath(),c.fill()}function fa(a,b,c,d,e,f,g,h,i,j){var k=Math.ceil((f-d)/b),l=Math.ceil((g-e)/c);a.save(),j?(a.strokeStyle=i?"#292929":"#D9E1E5",a.fillStyle=i?"#292929":"#D9E1E5"):(a.strokeStyle="#FFFFFF",a.fillStyle="#FFFFFF"),a.lineWidth=h,a.font=.6*l+"px Ubuntu";for(var m=0;b+1>m;m++)a.beginPath(),a.moveTo(m==b?f:d+k*m,e),a.lineTo(m==b?f:d+k*m,g),a.stroke();for(var m=0;c+1>m;m++)a.beginPath(),a.moveTo(d,m==c?g:e+l*m),a.lineTo(f,m==c?g:e+l*m),a.stroke();for(var m=0;c>m;m++)for(var n="",o=0;b>o;o++)n=String.fromCharCode(65+m)+(o+1),a.fillText(n,d+k/2+o*k-a.measureText(n).width/2,e+l/2+m*l+.2*l);a.restore()}function ga(a,b,c,d){Zc=document.createElement("canvas");var e=Zc.getContext("2d");Zc.width=c,Zc.height=d,fa(e,a,b,.5,.5,c-.5,d-.5,1,ib,!1)}function ha(a,b,c,d,e,f,g,i){if(h()){Yc=document.createElement("canvas");var j=Yc.getContext("2d"),k=e/f,l="X:"+~~c+" Y:"+~~d,m=f/2,n=String.fromCharCode(65+Math.floor((d+m)/(f/a)))+(Math.floor((c+m)/(f/b))+1);Yc.width=200,Yc.height=222,j.globalAlpha=.2,j.fillStyle="#000000",j.fillRect(0,0,200,222),j.globalAlpha=1,j.font="16px Ubuntu",j.fillStyle="#FF7800",j.fillText(n,11,22),j.fillStyle="#FFFFFF",j.fillText(l,200-j.measureText(l).width-11,22),j.globalAlpha=i?.2:.4,Zc&&Zc.width?j.drawImage(Zc,9,31):ga(a,b,e,e),j.translate(9.5,30.5),j.globalAlpha=1,j.fillStyle="#FFFFFF";for(var o=0;o<g.length;o++)j.beginPath(),j.arc((g[o].x+m)*k,(g[o].y+m)*k,Math.max(4.5,(g[o].size+5)*k),0,2*Math.PI,!1),j.closePath(),j.fill();if(sc.length>0){var p=Math.round((sc[tc].x+m)*k),q=Math.round((sc[tc].y+m)*k);j.lineWidth=1,j.strokeStyle=sc.length-1==tc?"#FF7800":"#FFFFFF",j.beginPath(),j.moveTo(p-4.5,q),j.lineTo(p+4.5,q),j.closePath(),j.stroke(),j.beginPath(),j.moveTo(p,q-4.5),j.lineTo(p,q+4.5),j.closePath(),j.stroke()}}}function ia(){if(Kc=null,(null!=ob||0!=Qa.length)&&(null!=ob||eb)){Kc=document.createElement("canvas");var a=Kc.getContext("2d"),c=60,c=null==ob?c+24*Qa.length:c+180,d=Math.min(200,.3*Fa)/200;if(Kc.width=200*d,Kc.height=c*d,a.scale(d,d),a.globalAlpha=.4,a.fillStyle="#000000",a.fillRect(0,0,200,c),a.globalAlpha=1,a.fillStyle="#FFFFFF",d=null,d=J("leaderboard"),a.font="30px Ubuntu",a.fillText(d,100-a.measureText(d).width/2,40),null==ob){for(pc="",a.font="20px Ubuntu",c=0;c<Qa.length;++c)d=Qa[c].name||J("unnamed_cell"),eb||(d=J("unnamed_cell")),-1!=La.indexOf(Qa[c].id)?(Ma[0].name&&(d=Ma[0].name),a.fillStyle="#FF7800"):a.fillStyle=0==Qa[c].name.indexOf("☢Ⓜ|")?"#00C8FF":"#FFFFFF",d=c+1+". "+d,pc+=d+"<br>",a.fillText(d,100-a.measureText(d).width/2,70+24*c);b(".partyInfoTopka").html(pc)}else for(c=d=0;c<ob.length;++c){var e=d+ob[c]*Math.PI*2;a.fillStyle=wb[c+1],a.beginPath(),a.moveTo(100,140),a.arc(100,140,80,d,e,!1),a.fill(),d=e}}}function ja(a,b,c,d,e){this.P=a,this.x=b,this.y=c,this.g=d,this.b=e}function ka(a,b,c,d,e,f){this.id=a,this.o=this.x=b,this.p=this.y=c,this.n=this.size=d,this.color=e,this.a=[],this.Q(),this.t(f),this.createTime=Date.now()}function la(a){for(a=a.toString(16);6>a.length;)a="0"+a;return"#"+a}function ma(a,b,c,d){a&&(this.q=a),b&&(this.M=b),this.O=!!c,d&&(this.r=d)}function na(a){for(var c,d,b=a.length;b>0;)d=Math.floor(Math.random()*b),b--,c=a[b],a[b]=a[d],a[d]=c}function oa(c,d){var e="1"==b("#helloContainer").attr("data-has-account-data");if(b("#helloContainer").attr("data-has-account-data","1"),null==d&&a.localStorage[nd]){var f=JSON.parse(a.localStorage[nd]);f.xp=c.e,f.xpNeeded=c.c,f.level=c.d,a.localStorage[nd]=JSON.stringify(f)}if(e){var g=+b(".agario-exp-bar .progress-bar-text").first().text().split("/")[0],e=+b(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0],f=b(".agario-profile-panel .progress-bar-star").first().text();if(f!=c.d)oa({e:e,c:e,d:f},function(){b(".agario-profile-panel .progress-bar-star").text(c.d),b(".agario-exp-bar .progress-bar").css("width","100%"),b(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){b(".progress-bar-star").removeClass("animated tada")}),setTimeout(function(){b(".agario-exp-bar .progress-bar-text").text(c.c+"/"+c.c+" XP"),oa({e:0,c:c.c,d:c.d},function(){oa(c,d)})},1e3)});else{var h=Date.now(),i=function(){var e;e=(Date.now()-h)/1e3,e=0>e?0:e>1?1:e,e=e*e*(3-2*e),b(".agario-exp-bar .progress-bar-text").text(~~(g+(c.e-g)*e)+"/"+c.c+" XP"),b(".agario-exp-bar .progress-bar").css("width",(88*(g+(c.e-g)*e)/c.c).toFixed(2)+"%"),1>e?a.requestAnimationFrame(i):d&&d()};a.requestAnimationFrame(i)}}else b(".agario-profile-panel .progress-bar-star").text(c.d),b(".agario-exp-bar .progress-bar-text").text(c.e+"/"+c.c+" XP"),b(".agario-exp-bar .progress-bar").css("width",(88*c.e/c.c).toFixed(2)+"%"),d&&d()}function pa(c){"string"==typeof c&&(c=JSON.parse(c)),Date.now()+18e5>c.expires?b("#helloContainer").attr("data-logged-in","0"):(a.localStorage[nd]=JSON.stringify(c),Ab=c.authToken,b(".agario-profile-name").text(c.name),Y(),oa({e:c.xp,c:c.xpNeeded,d:c.level}),b("#helloContainer").attr("data-logged-in","1"))}function qa(a){a=a.split("\n"),pa({name:a[0],fbid:a[1],authToken:a[2],expires:1e3*+a[3],level:+a[4],xp:+a[5],xpNeeded:+a[6]})}function ra(c){if("connected"==c.status){var d=c.authResponse.accessToken;console.log(d),a.FB.api("/me/picture?width=180&height=180",function(c){a.localStorage.fbPictureCache=c.data.url,b(".agario-profile-picture").attr("src",c.data.url)}),b("#helloContainer").attr("data-logged-in","1"),null!=Ab?b.ajax(Aa+"checkToken",{error:function(){Ab=null,ra(c)},success:function(a){a=a.split("\n"),oa({d:+a[0],e:+a[1],c:+a[2]})},dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:Ab}):b.ajax(Aa+"facebookLogin",{error:function(){Ab=null,b("#helloContainer").attr("data-logged-in","0")},success:qa,dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:d})}}function sa(c){F(":party"),b("#helloContainer").attr("data-party-state","4"),c=decodeURIComponent(c).replace(/.*#/gim,""),ta("#"+a.encodeURIComponent(c)),b.ajax(Aa+"getToken",{error:function(){b("#helloContainer").attr("data-party-state","6")},success:function(d){d=d.split("\n"),b(".partyToken").val("agar.io/#"+a.encodeURIComponent(c)),b(".partyInfoToken").text("agar.io/#"+a.encodeURIComponent(c)),b("#helloContainer").attr("data-party-state","5"),F(":party"),M("ws://"+d[0],c)},dataType:"text",method:"POST",cache:!1,crossDomain:!0,data:c})}function ta(b){a.history&&a.history.replaceState&&a.history.replaceState({},a.document.title,b)}function ua(a,b){~Ma.indexOf(a)&&b.name&&++gc;var c=-1!=La.indexOf(a.id),d=-1!=La.indexOf(b.id),e=30>b.size;c&&e&&++qd,e||!c||d||++xd}function va(a){a=~~a;var b=(a%60).toString();return a=(~~(a/60)).toString(),2>b.length&&(b="0"+b),a+":"+b}function wa(){if(null==Qa)return 0;for(var a=0;a<Qa.length;++a)if(-1!=La.indexOf(Qa[a].id))return a+1;return 0}function xa(){b(".stats-food-eaten").text(qd),b(".stats-time-alive").text(va((vd-ud)/1e3)),b(".stats-leaderboard-time").text(va(wd)),b(".stats-highest-mass").text(~~(hb/100)),b(".stats-cells-eaten").text(xd),b(".stats-top-position").text(0==yd?":(":yd);var a=document.getElementById("statsGraph");if(a){var c=a.getContext("2d"),d=a.width,a=a.height;if(c.clearRect(0,0,d,a),2<pd.length){for(var e=200,f=0;f<pd.length;f++)e=Math.max(pd[f],e);for(c.lineWidth=3,c.lineCap="round",c.lineJoin="round",c.strokeStyle=rd,c.fillStyle=rd,c.beginPath(),c.moveTo(0,a-pd[0]/e*(a-10)+10),f=1;f<pd.length;f+=Math.max(~~(pd.length/d),1)){for(var g=f/(pd.length-1)*d,h=[],i=-20;20>=i;++i)0>f+i||f+i>=pd.length||h.push(pd[f+i]);h=h.reduce(function(a,b){return a+b})/h.length/e,c.lineTo(g,a-h*(a-10)+10)}c.stroke(),c.globalAlpha=.5,c.lineTo(d,a),c.lineTo(0,a),c.fill(),c.globalAlpha=1}}}if(!a.agarioNoInit){var ya=a.location.protocol,za="https:"==ya,Aa=ya+"//m.agar.io/";if(za&&-1==a.location.search.indexOf("fb"))a.location.href="http://agar.io/";else{var Ba=a.navigator.userAgent;if(-1!=Ba.indexOf("Android"))a.ga&&a.ga("send","event","MobileRedirect","PlayStore"),setTimeout(function(){a.location.href="https://play.google.com/store/apps/details?id=com.miniclip.agar.io"},1e3);else if(-1!=Ba.indexOf("iPhone")||-1!=Ba.indexOf("iPad")||-1!=Ba.indexOf("iPod"))a.ga&&a.ga("send","event","MobileRedirect","AppStore"),setTimeout(function(){a.location.href="https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"},1e3);else{var Ca,Da,Ea,Fa,Ga,Ha=null,Ia=null,Ja=0,Ka=0,La=[],Ma=[],Na={},Oa=[],Pa=[],Qa=[],Ra=0,Sa=0,Ta=-1,Ua=-1,Va=0,Wa=0,Xa=0,Ya=null,Za=0,$a=0,_a=1e4,ab=1e4,bb=1,cb=null,db=!0,eb=!0,fb=!1,gb=!1,hb=0,ib=!0,jb=!0,kb=Ja=~~((Za+_a)/2),lb=Ka=~~(($a+ab)/2),mb=1,nb="",ob=null,pb=!1,qb=!1,rb=0,sb=0,tb=0,ub=0,vb=0,wb=["#333333","#FF3333","#33FF33","#3333FF"],xb=!1,yb=!1,zb=0,Ab=null,Bb=1,Cb=1,Db=!1,Eb=0,Fb=!1,Gb={},Hb=!0,Ib=!0,Jb=!0,Kb=!1,Lb=!0,Mb=!0,Nb=!0,Ob=!0,Pb=!0,Qb=!0,Rb=!0,Sb=!0,Tb=!1,Ub=!0,Vb=!0,Wb=!0,Xb=!0,Yb=!0,Zb=!1,$b=!1,_b=!0,ac=!0,bc=!1,cc=!1,dc=!1,ec=1,fc=0,gc=0,hc=0,ic=0,jc=0,kc=0,lc=0,nc=0,oc=0,pc="",qc="",rc="",sc=[],tc=0,uc=0;!function(){var b=a.location.search;"?"==b.charAt(0)&&(b=b.slice(1));for(var b=b.split("&"),c=0;c<b.length;c++){var d=b[c].split("=");Gb[d[0]]=d[1]}}();var vc=new Image;vc.src="img/background.png";var wc="ontouchstart"in a&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a.navigator.userAgent),xc=new Image;xc.src="img/split.png";var yc=document.createElement("canvas");if("undefined"==typeof console||"undefined"==typeof DataView||"undefined"==typeof WebSocket||null==yc||null==yc.getContext||null==a.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this");else{var zc=null;a.setNick=function(c){rc=b("#clanTag").val(),qc=c,Ya=rc+qc,a.ga&&a.ga("send","event","Nick",Ya.toLowerCase()),C(),V(),hb=0,!bc&&(kc=Date.now(),bc=!0),!cc&&u(!0),e(),ac=!1},a.setRegion=D;var Ac=!0;a.setSkins=function(a){db=a},a.setNames=function(a){eb=a},a.setDarkTheme=function(a){ib=a},a.setColors=function(a){fb=a},a.setShowMass=function(a){jb=a},a.spectate=function(){Ya=null,X(1),C(),ac=!1},a.setGameMode=function(a){a!=nb&&(":party"==nb&&b("#helloContainer").attr("data-party-state","0"),F(a),":party"!=a&&L())},a.setAcid=function(a){xb=a},a.setSkipStats=function(a){Zb=a},a.nextIP=function(){K()},a.setZoom=function(a){Hb=a},a.setMapBorders=function(a){Ib=a},a.setOppColors=function(a){Jb=a},a.setOppRings=function(a){Kb=a},a.setSkinsAlpha=function(a){Lb=a},a.setCellsAlpha=function(a){Mb=a},a.setSimpleDraw=function(a){Nb=a},a.setSplitTimer=function(a){Ob=a},a.setSplitRange=function(a){Pb=a},a.setVirusRange=function(a){Qb=a},a.setBiggerNames=function(a){Rb=a},a.setOnlyOgarioSkins=function(a){Tb=a},a.setShowMiniMap=function(a){Ub=a},a.setShiftOn=function(a){Vb=a},a.setShowFps=function(a){Wb=a},a.setShowMassGuides=function(a){Xb=a},a.setCursorTracking=function(a){Yb=a},a.setRainbowFood=function(a){$b=a},a.setSectorsBg=function(a){_b=a},f(),null!=a.localStorage&&(null==a.localStorage.AB9&&(a.localStorage.AB9=0+~~(100*Math.random())),vb=+a.localStorage.AB9,a.ABGroup=vb),b.get(ya+"//gc.agar.io",function(a){var b=a.split(" ");a=b[0],b=b[1]||"",-1==["UA"].indexOf(a)&&ad.push("ussr"),Dc.hasOwnProperty(a)&&("string"==typeof Dc[a]?cb||D(Dc[a]):Dc[a].hasOwnProperty(b)&&(cb||D(Dc[a][b])))},"text");var Bc=!0,Cc=0,Dc={AF:"JP-Tokyo",AX:"EU-London",AL:"EU-London",DZ:"EU-London",AS:"SG-Singapore",AD:"EU-London",AO:"EU-London",AI:"US-Atlanta",AG:"US-Atlanta",AR:"BR-Brazil",AM:"JP-Tokyo",AW:"US-Atlanta",AU:"SG-Singapore",AT:"EU-London",AZ:"JP-Tokyo",BS:"US-Atlanta",BH:"JP-Tokyo",BD:"JP-Tokyo",BB:"US-Atlanta",BY:"EU-London",BE:"EU-London",BZ:"US-Atlanta",BJ:"EU-London",BM:"US-Atlanta",BT:"JP-Tokyo",BO:"BR-Brazil",BQ:"US-Atlanta",BA:"EU-London",BW:"EU-London",BR:"BR-Brazil",IO:"JP-Tokyo",VG:"US-Atlanta",BN:"JP-Tokyo",BG:"EU-London",BF:"EU-London",BI:"EU-London",KH:"JP-Tokyo",CM:"EU-London",CA:"US-Atlanta",CV:"EU-London",KY:"US-Atlanta",CF:"EU-London",TD:"EU-London",CL:"BR-Brazil",CN:"CN-China",CX:"JP-Tokyo",CC:"JP-Tokyo",CO:"BR-Brazil",KM:"EU-London",CD:"EU-London",CG:"EU-London",CK:"SG-Singapore",CR:"US-Atlanta",CI:"EU-London",HR:"EU-London",CU:"US-Atlanta",CW:"US-Atlanta",CY:"JP-Tokyo",CZ:"EU-London",DK:"EU-London",DJ:"EU-London",DM:"US-Atlanta",DO:"US-Atlanta",EC:"BR-Brazil",EG:"EU-London",SV:"US-Atlanta",GQ:"EU-London",ER:"EU-London",EE:"EU-London",ET:"EU-London",FO:"EU-London",FK:"BR-Brazil",FJ:"SG-Singapore",FI:"EU-London",FR:"EU-London",GF:"BR-Brazil",PF:"SG-Singapore",GA:"EU-London",GM:"EU-London",GE:"JP-Tokyo",DE:"EU-London",GH:"EU-London",GI:"EU-London",GR:"EU-London",GL:"US-Atlanta",GD:"US-Atlanta",GP:"US-Atlanta",GU:"SG-Singapore",GT:"US-Atlanta",GG:"EU-London",GN:"EU-London",GW:"EU-London",GY:"BR-Brazil",HT:"US-Atlanta",VA:"EU-London",HN:"US-Atlanta",HK:"JP-Tokyo",HU:"EU-London",IS:"EU-London",IN:"JP-Tokyo",ID:"JP-Tokyo",IR:"JP-Tokyo",IQ:"JP-Tokyo",IE:"EU-London",IM:"EU-London",IL:"JP-Tokyo",IT:"EU-London",JM:"US-Atlanta",JP:"JP-Tokyo",JE:"EU-London",JO:"JP-Tokyo",KZ:"JP-Tokyo",KE:"EU-London",KI:"SG-Singapore",KP:"JP-Tokyo",KR:"JP-Tokyo",KW:"JP-Tokyo",KG:"JP-Tokyo",LA:"JP-Tokyo",LV:"EU-London",LB:"JP-Tokyo",LS:"EU-London",LR:"EU-London",LY:"EU-London",LI:"EU-London",LT:"EU-London",LU:"EU-London",MO:"JP-Tokyo",MK:"EU-London",MG:"EU-London",MW:"EU-London",MY:"JP-Tokyo",MV:"JP-Tokyo",ML:"EU-London",MT:"EU-London",MH:"SG-Singapore",MQ:"US-Atlanta",MR:"EU-London",MU:"EU-London",YT:"EU-London",MX:"US-Atlanta",FM:"SG-Singapore",MD:"EU-London",MC:"EU-London",MN:"JP-Tokyo",ME:"EU-London",MS:"US-Atlanta",MA:"EU-London",MZ:"EU-London",MM:"JP-Tokyo",NA:"EU-London",NR:"SG-Singapore",NP:"JP-Tokyo",NL:"EU-London",NC:"SG-Singapore",NZ:"SG-Singapore",NI:"US-Atlanta",NE:"EU-London",NG:"EU-London",NU:"SG-Singapore",NF:"SG-Singapore",MP:"SG-Singapore",NO:"EU-London",OM:"JP-Tokyo",PK:"JP-Tokyo",PW:"SG-Singapore",PS:"JP-Tokyo",PA:"US-Atlanta",PG:"SG-Singapore",PY:"BR-Brazil",PE:"BR-Brazil",PH:"JP-Tokyo",PN:"SG-Singapore",PL:"EU-London",PT:"EU-London",PR:"US-Atlanta",QA:"JP-Tokyo",RE:"EU-London",RO:"EU-London",RU:"RU-Russia",RW:"EU-London",BL:"US-Atlanta",SH:"EU-London",KN:"US-Atlanta",LC:"US-Atlanta",MF:"US-Atlanta",PM:"US-Atlanta",VC:"US-Atlanta",WS:"SG-Singapore",SM:"EU-London",ST:"EU-London",SA:"EU-London",SN:"EU-London",RS:"EU-London",SC:"EU-London",SL:"EU-London",SG:"JP-Tokyo",SX:"US-Atlanta",SK:"EU-London",SI:"EU-London",SB:"SG-Singapore",SO:"EU-London",ZA:"EU-London",SS:"EU-London",ES:"EU-London",LK:"JP-Tokyo",SD:"EU-London",SR:"BR-Brazil",SJ:"EU-London",SZ:"EU-London",SE:"EU-London",CH:"EU-London",SY:"EU-London",TW:"JP-Tokyo",TJ:"JP-Tokyo",TZ:"EU-London",TH:"JP-Tokyo",TL:"JP-Tokyo",TG:"EU-London",TK:"SG-Singapore",TO:"SG-Singapore",TT:"US-Atlanta",TN:"EU-London",TR:"TK-Turkey",TM:"JP-Tokyo",TC:"US-Atlanta",TV:"SG-Singapore",UG:"EU-London",UA:"EU-London",AE:"EU-London",GB:"EU-London",US:"US-Atlanta",UM:"SG-Singapore",VI:"US-Atlanta",UY:"BR-Brazil",UZ:"JP-Tokyo",VU:"SG-Singapore",VE:"BR-Brazil",VN:"JP-Tokyo",WF:"SG-Singapore",EH:"EU-London",YE:"JP-Tokyo",ZM:"EU-London",ZW:"EU-London"},Ec=null;a.connect=M;var Fc=500,Gc=null,Hc=0,Ic=-1,Jc=-1,Kc=null,Lc=1,Mc=null,Nc=null,Oc=null,Pc=null,Qc=null,Rc=null,Sc=null,Tc=null,Uc=null,Vc=null,Wc=null,Xc=null,Yc=null,Zc=null,$c=function(){var b=Date.now(),c=1e3/60,d=0,e=0,f=Date.now();return function(){a.requestAnimationFrame($c);var g=Date.now(),h=g-b;e>1e3?(f=Date.now(),e=0,oc=d,d=0):e=Date.now()-f,h>c&&(b=g-h%c,!W()||240>Date.now()-zb?(aa(),d++):console.warn("Skipping draw"),od())}}(),_c={},ad="poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump;hitler;nazi;ussr".split(";"),bd="8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump;michau;michau biauek;leszke;korwin;grzegorz braun;jp2;linda;blacksketch;davidmcpolska;sasha grey;stulejarnosc;coca cola".split(";"),cd={},dd="michau;michau biauek;leszke;korwin;grzegorz braun;szczesc boze;jp2;linda;kosmonauta;chuj jebany;stulejarnosc;feels;smutna zaba;germandeathcamp;thanks doge;smutny piesek;pinionszek;ami;92gruszka;gruszka;anka-agar;blacksketch;bladi89;bolyss;ciepla_kupa;cimcirimci;davidmcpolska;d1ck;edward_kenway;empe666 wypok;filozofujaca;hansolony;hulajdusza;janusz-cebula;jayjay1337;kat_rzeznikow;kiku;michalek;oscyp33;polonium;psposki;ruszowaa;siabadabada;sialababamak;smashgoor;szymy;typowy_sebix;xaimeii;papaj;bean;kenny;benis;penis;mario;bender;bert;gaben;dolan;heisenberg;chuck;pikachu;slowpoke;pig;pedobear;rainbow;illuminati;coca cola;pepsi;cage;dupa;dupa wykop;quinn;rafalala;qas;agar online;albus dumbledor;albus;dumbledore;ginny weasley;harry potter;hermione;ron weasley;lord voldemort;draco malfoy;wykop peel;panda;polska;tymbark;kpr. wojtek;atari;amiga;marihuana;thug life;g2;vp;fnatic;tsm;cojawamzrobilem;neymar;koksy;policja;krzysiu jp;puchauke;pi;rain;deszcz;thunder;night;flower;trollface;troll;osama;sasha grey;wina tuska;wsk;sosnowiec;nevergonna;terminator;spyro;tiger bonzo;kobra bonzo;ordenminer;zoidberg;swidnik;chrome;firefox;cookie;lg;peppa pig;peppa;spongebob;vw;durex;france;russia;usa;brazil;portugal;israel;sweden;radagast;gandalf;cygan".split(";"),ed="wykop;#wykop;@wykop;wykop.pl;#wykop.pl;wypok;wypoczek".split(";"),fd="mirko;#mirko;@mirko;mikro;tylko mirko;tylkomirko;#tylkomirko;@tylkomirko".split(";"),gd="#koksy;.( ͡° ͜ʖ ͡°);( ͡° ͜ʖ ͡°).;[pl]ziomek00725;wiktorkox100#ht;ϩảςℌǻ ɠɍ℮ɣ;฿ĭℊ ℬøƨƨ;ოﻪรէεгofﻪցﻪг皮;w=friend;w = friend;w=friends;w = friends;w=team;w = team;need a bro;ą          ę;świdnik;szczęść boże;ŋìċθļåĩ;乃ц尺ﾑズ;布拉克;ｋｉｒｍａｚ ㊗㊙;☂ƛȥȥɗɩɲ☂;ⱥめξทǥєʀ;ℜℯḱтɐℜ;ℬấℌọʐ ²¹;ｚｙｒｏｎｉｋ;ρʀøƒ 越;к∂©ℙєℜ;┆♕₭↑ℵǥ♕;ℚʊ@к℮432;ᎯᏝᎮℋᎯ;ј ฝ ☼ᎯᏝᎮℋᎯ;røŀєx ミ;๔єคtђรtг๏кє;ℛấʝọɳ (◣_◢)".split(";"),hd="koksy;lennyface_left;lennyface_right;ziomek00725;wiktorkox100;sasha;sasha;masterofagar;wfriend;wfriend;wfriend;wfriend;wfriend;wfriend;wfriend;ae;swidnik;szczesc boze;nicolai;burak;atom;kirmaz;azzdin;avenger;rektar;bahoz;zyronik;prof;kacper;king;quake;alpha;alpha;rolex;deathstroke;rajon".split(";"),id="☢Ⓜ|;㉹|;㉹;〖ƝƁƘ〗;☠ⒻⓇ |;ᓮᗯᗩᘐ|;ᓮᗯᗩᘐ;ƵŦ|;ƵŦ★|;ℛɨᎮ|;ℛɨᎮ;ӍᏨ²;【☠】;ȺƧƤЄƇƬ✠;ฬℬ|".split(";"),jd="atomicmirko;et;et;nbk;dfr;iwag;iwag;zt;zts;rip;rip;mc2;scull;aspecto;wumbo".split(";"),kd=dd.concat(ed,fd,gd);ja.prototype={P:null,x:0,y:0,g:0,b:0},ka.prototype={id:0,a:null,name:null,k:null,I:null,x:0,y:0,size:0,o:0,p:0,n:0,C:0,D:0,m:0,T:0,K:0,W:0,A:!1,f:!1,j:!1,L:!0,S:0,V:null,createTime:0,R:function(){var a;for(a=0;a<Oa.length;a++)if(Oa[a]==this){Oa.splice(a,1);break}delete Na[this.id],a=Ma.indexOf(this),-1!=a&&(gb=!0,Ma.splice(a,1)),a=La.indexOf(this.id),-1!=a&&La.splice(a,1),this.A=!0,0<this.S&&Pa.push(this)},i:function(){return Math.max(~~(.3*this.size),24)},t:function(a){(this.name=a)&&(null==this.k?this.k=new ma(this.i(),"#FFFFFF",!0,"#000000"):this.k.G(this.i()),this.k.u(this.name))},Q:function(){for(var a=this.B();this.a.length>a;){var b=~~(Math.random()*this.a.length);this.a.splice(b,1)}for(0==this.a.length&&a>0&&this.a.push(new ja(this,this.x,this.y,this.size,Math.random()-.5));this.a.length<a;)b=~~(Math.random()*this.a.length),b=this.a[b],this.a.push(new ja(this,b.x,b.y,b.g,b.b))},B:function(){var a=10;20>this.size&&(a=0),this.f&&(a=30);var b=this.size;return this.f||(b*=bb),b*=Lc,32&this.T&&(b*=.25),~~Math.max(b,a)},da:function(){this.Q();for(var a=this.a,b=a.length,c=0;b>c;++c){var d=a[(c-1+b)%b].b,e=a[(c+1)%b].b;a[c].b+=(Math.random()-.5)*(this.j?3:1),a[c].b*=.7,10<a[c].b&&(a[c].b=10),-10>a[c].b&&(a[c].b=-10),a[c].b=(d+e+8*a[c].b)/10}for(var f=this,g=this.f?0:(this.id/1e3+Wa/1e4)%(2*Math.PI),c=0;b>c;++c){var h=a[c].g,d=a[(c-1+b)%b].g,e=a[(c+1)%b].g;if(15<this.size&&null!=Ha&&20<this.size*bb&&0<this.id){var i=!1,j=a[c].x,k=a[c].y;Ha.ea(j-5,k-5,10,10,function(a){a.P!=f&&25>(j-a.x)*(j-a.x)+(k-a.y)*(k-a.y)&&(i=!0)}),!i&&(a[c].x<Za||a[c].y<$a||a[c].x>_a||a[c].y>ab)&&(i=!0),i&&(0<a[c].b&&(a[c].b=0),a[c].b-=1)}h+=a[c].b,0>h&&(h=0),h=this.j?(19*h+this.size)/20:(12*h+this.size)/13,a[c].g=(d+e+8*h)/10,d=2*Math.PI/b,e=this.a[c].g,this.f&&0==c%2&&(e+=5),a[c].x=this.x+Math.cos(d*c+g)*e,a[c].y=this.y+Math.sin(d*c+g)*e}},J:function(){if(0>=this.id)return 1;var a;a=(Wa-this.K)/120,a=0>a?0:a>1?1:a;var b=0>a?0:a>1?1:a;if(this.i(),this.A&&b>=1){var c=Pa.indexOf(this);-1!=c&&Pa.splice(c,1)}return this.x=a*(this.C-this.o)+this.o,this.y=a*(this.D-this.p)+this.p,this.size=b*(this.m-this.n)+this.n,b},H:function(){return 0>=this.id?!0:this.x+this.size+40<Ja-Fa/2/bb||this.y+this.size+40<Ka-Ga/2/bb||this.x-this.size-40>Ja+Fa/2/bb||this.y-this.size-40>Ka+Ga/2/bb?!1:!0},findCellSize:function(a,b){for(var c=0,d=a[0].size,e=1;e<a.length;e++)b?d<a[e].size&&(d=a[e].size,c=e):d>a[e].size&&(d=a[e].size,c=e);return{index:c,size:d}},s:function(a){if(this.H()){++this.S;var b=Ma.indexOf(this),c=-1!=b,d=this.f,e=this.size*this.size/100,f=Rb?d?3:1.5:1,g=Rb?10:4,k=Rb?1:2,l=!1,m=ib,n=nb,o={},p=0,q=0,r=0,s="",t=this.color,u="",v="",w="",x=0<this.id&&!this.f&&!this.j&&(Nb||.4>bb);if(5>this.B()&&0<this.id&&(x=!0),this.L&&!x)for(var y=0;y<this.a.length;y++)this.a[y].g=this.size;if(this.L=x,a.save(),this.W=Wa,y=this.J(),this.A&&(a.globalAlpha*=1-y),a.lineCap="round",a.lineJoin=this.f?"miter":"round",(Jb||Kb||Pb)&&h()&&this.size>30&&(o=this.findCellSize(Ma,Sb),p=Math.pow(o.size,2)/100,q=e/p,r=1e3>p?.35:.38,!Jb&&!Kb||c||(d?s=q>.76?"#FFDC00":"#C80000":(s=q>11?"#FF008C":q>=2.5?"#BE00FF":q>=1.25?"#FF0A00":1.25>q&&q>.75?"#FFDC00":q>r?"#00C8FF":"#64FF00",this.color=":teams"==n||Kb?t:s))),!$b&&this.size<=30&&(this.color="#E16400"),d&&((Jb||Kb)&&(e>183?this.color="#C80000":m?this.color="#999999":this.color="#666666"),null==this.k&&(this.k=new ma(this.i(),"#FFFFFF",!0,"#000000")),Qb&&(a.beginPath(),a.arc(this.x,this.y,this.size+810,0,2*Math.PI,!1),a.closePath(),a.globalAlpha="#C80000"==this.color?.2:.1,!m&&(a.globalAlpha*=.5),a.fillStyle=this.color,a.fill())),Kb&&!c&&h()&&this.size>40&&!d&&(a.beginPath(),a.arc(this.x,this.y,this.size+16+4/bb,0,2*Math.PI,!1),a.closePath(),a.globalAlpha=.75,a.lineWidth=10,a.strokeStyle=s,a.stroke()),Pb&&(c||q>=2.5)&&!d&&e>=35&&(a.beginPath(),a.arc(this.x,this.y,this.size+710,0,2*Math.PI,!1),a.closePath(),a.globalAlpha=.4,!m&&!c&&(a.globalAlpha*=.4),a.lineWidth=4,c&&j()&&b==o.index?a.strokeStyle=m?"#FFFFFF":"#222222":a.strokeStyle=c&&(Jb||Kb)&&":teams"!=n?"#FF7800":Kb?s:this.color,a.stroke()),Yb&&c&&(a.beginPath(),a.moveTo(this.x,this.y),a.lineTo(Ta,Ua),a.globalAlpha=m?.7:.35,a.lineWidth=2,a.strokeStyle=m?"#FFFFFF":"#000000",a.stroke()),fb?Jb?(a.fillStyle="#FFFFFF",a.strokeStyle=this.color):(a.fillStyle="#FFFFFF",a.strokeStyle="#AAAAAA"):(a.fillStyle=this.color,a.strokeStyle=(":teams"==n||d)&&s?s:this.color),x)a.beginPath(),a.arc(this.x,this.y,this.size,0,2*Math.PI,!1);else{this.da(),a.beginPath();var z=this.B();for(a.moveTo(this.a[0].x,this.a[0].y),y=1;z>=y;++y){var A=y%z;a.lineTo(this.a[A].x,this.a[A].y)}}for(a.closePath(),y=this.name.toLowerCase(),u=this.name.trim(),i=0;i<id.length;i++)if(0==u.indexOf(id[i])){u=u.replace(id[i],"").trim(),v=id[i];break}if(u=u.toLowerCase(),-1!=kd.indexOf(u)?(l=!0,w="http://ogario.wpload.com/skins.php?s="+u,-1!=ed.indexOf(u)&&(w="http://ogario.wpload.com/skins.php?s=wykop"),-1!=fd.indexOf(u)&&(w="http://ogario.wpload.com/skins.php?s=mirko"),-1!=gd.indexOf(u)&&(w="http://ogario.wpload.com/skins.php?s="+hd[gd.indexOf(u)])):v.length>0?(l=!0,w="http://ogario.wpload.com/skins.php?s="+jd[id.indexOf(v)]):w="skins/"+y+".png",!this.j&&db&&":teams"!=nb?(z=this.V,null==z?z=null:":"==z[0]?(cd.hasOwnProperty(z)||(cd[z]=new Image,cd[z].src=z.slice(1)),z=0!=cd[z].width&&cd[z].complete?cd[z]:null):z=null,z||(-1!=ad.indexOf(y)&&!Tb||l?(_c.hasOwnProperty(y)||(_c[y]=new Image,_c[y].crossOrigin="Anonymous",_c[y].src=w),z=0!=_c[y].width&&_c[y].complete?_c[y]:null):z=null)):z=null,A=z,Mb?(this.size>30&&(a.globalAlpha=.8),d&&(a.globalAlpha=.5)):a.globalAlpha=1,a.lineWidth=10,Jb&&!Kb&&null!=A?(a.lineWidth=20,a.stroke()):(Jb&&(fb||":teams"==n)&&a.stroke(),x||a.stroke()),a.fill(),d&&a.stroke(),null!=A&&(a.save(),a.clip(),Lb&&(a.globalAlpha=.75),a.drawImage(A,this.x-this.size,this.y-this.size,2*this.size,2*this.size),a.restore()),(fb||15<this.size)&&!x&&(a.strokeStyle="#000000",a.globalAlpha*=.1,a.stroke()),a.globalAlpha=1,Jb&&!c&&r>=q&&this.size>50&&!d&&da()>=28e3&&e>da()/1100&&(a.beginPath(),a.arc(this.x,this.y,this.size-5,0,2*Math.PI,!1),a.closePath(),a.globalAlpha=.75,a.strokeStyle="#FFFFFF",a.stroke(),a.globalAlpha=1),x=~~this.y,0!=this.id&&(eb||c)&&(this.name||d&&jb)&&this.k&&(null==A||-1==bd.indexOf(y)||-1==bd.indexOf(u))){A=this.k,d?A.u(Math.floor((200-e)/14)):A.u(this.name),A.G(this.i()*f),y=0>=this.id?1:Math.ceil(10*bb)/10,A.U(y);var A=A.F(),B=~~(A.width/y),C=~~(A.height/y);a.drawImage(A,~~this.x-~~(B/2),x-~~(C/2),B,C),x+=A.height/2/y+g}0<this.id&&jb&&30<this.size&&(null==this.I&&(this.I=new ma(this.i()/k,"#FFFFFF",!0,"#000000")),z=this.I,z.G(this.i()/k),z.u(~~(this.size*this.size/100)),y=Math.ceil(10*bb)/10,z.U(y),A=z.F(),B=~~(A.width/y),C=~~(A.height/y),a.drawImage(A,~~this.x-~~(B/2),x-~~(C/2),B,C)),a.restore()}}},ma.prototype={w:"",M:"#000000",O:!1,r:"#000000",q:16,l:null,N:null,h:!1,v:1,G:function(a){this.q!=a&&(this.q=a,this.h=!0)},U:function(a){this.v!=a&&(this.v=a,this.h=!0)},setStrokeColor:function(a){this.r!=a&&(this.r=a,this.h=!0)},u:function(a){a!=this.w&&(this.w=a,this.h=!0)},F:function(){if(null==this.l&&(this.l=document.createElement("canvas"),this.N=this.l.getContext("2d")),this.h){this.h=!1;var a=this.l,b=this.N,c=this.w,d=this.v,e=this.q,f=e+"px Ubuntu";b.font=f;var g=~~(.2*e);a.width=(b.measureText(c).width+6)*d,a.height=(e+g)*d,b.font=f,b.scale(d,d),b.globalAlpha=1,b.lineWidth=3,b.strokeStyle=this.r,b.fillStyle=this.M,this.O&&b.strokeText(c,3,e-g/2),b.fillText(c,3,e-g/2)}return this.l}},Date.now||(Date.now=function(){return(new Date).getTime()}),function(){for(var b=["ms","moz","webkit","o"],c=0;c<b.length&&!a.requestAnimationFrame;++c)a.requestAnimationFrame=a[b[c]+"RequestAnimationFrame"],a.cancelAnimationFrame=a[b[c]+"CancelAnimationFrame"]||a[b[c]+"CancelRequestAnimationFrame"];a.requestAnimationFrame||(a.requestAnimationFrame=function(a){return setTimeout(a,1e3/60)},a.cancelAnimationFrame=function(a){clearTimeout(a)})}();var ld={X:function(a){function b(a){return d>a&&(a=d),a>f&&(a=f),~~((a-d)/32)}function c(a){return e>a&&(a=e),a>g&&(a=g),~~((a-e)/32)}var d=a.ba,e=a.ca,f=a.Z,g=a.$,h=~~((f-d)/32)+1,i=~~((g-e)/32)+1,j=Array(h*i);return{Y:function(a){var d=b(a.x)+c(a.y)*h;null==j[d]?j[d]=a:Array.isArray(j[d])?j[d].push(a):j[d]=[j[d],a]},ea:function(a,d,e,f,g){var k=b(a),l=c(d);for(a=b(a+e),d=c(d+f);d>=l;++l)for(f=k;a>=f;++f)if(e=j[f+l*h],null!=e)if(Array.isArray(e))for(var m=0;m<e.length;m++)g(e[m]);else g(e)}}}},md=function(){var a=new ka(0,0,0,32,"#ED1C24",""),b=document.createElement("canvas");b.width=32,b.height=32;var c=b.getContext("2d");return function(){0<Ma.length&&(a.color=Ma[0].color,a.t(Ma[0].name)),c.clearRect(0,0,32,32),c.save(),c.translate(16,16),c.scale(.4,.4),a.s(c),c.restore();var d=document.getElementById("favicon"),e=d.cloneNode(!0);e.setAttribute("href",b.toDataURL("image/png")),d.parentNode.replaceChild(e,d)}}();b(function(){md()});var nd="loginCache3";b(function(){+a.localStorage.wannaLogin&&(a.localStorage[nd]&&pa(a.localStorage[nd]),a.localStorage.fbPictureCache&&b(".agario-profile-picture").attr("src",a.localStorage.fbPictureCache))}),a.facebookLogin=function(){a.localStorage.wannaLogin=1},a.fbAsyncInit=function(){function b(){a.localStorage.wannaLogin=1,null==a.FB?alert("You seem to have something blocking Facebook on your browser, please check for any extensions"):a.FB.login(function(a){ra(a)},{scope:"public_profile, email"})}a.FB.init({appId:"677505792353827",cookie:!0,xfbml:!0,status:!0,version:"v2.2"}),a.FB.Event.subscribe("auth.statusChange",function(c){+a.localStorage.wannaLogin&&("connected"==c.status?ra(c):b())}),a.facebookLogin=b},a.logout=function(){Ab=null,b("#helloContainer").attr("data-logged-in","0"),b("#helloContainer").attr("data-has-account-data","0"),delete a.localStorage.wannaLogin,delete a.localStorage[nd],delete a.localStorage.fbPictureCache,L()};var od=function(){function a(a,b,c,d,e){var f=b.getContext("2d"),g=b.width;b=b.height,a.color=e,a.t(c),a.size=d,f.save(),f.translate(g/2,b/2),a.s(f),f.restore()}for(var c=new ka(-1,0,0,32,"#5bc0de",""),d=new ka(-1,0,0,32,"#5bc0de",""),e="#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "),f=[],g=0;g<e.length;++g){var h=g/e.length*12,i=30*Math.sqrt(g/e.length);f.push(new ka(-1,Math.cos(h)*i,Math.sin(h)*i,10,e[g],""))}na(f);var j=document.createElement("canvas");return j.getContext("2d"),j.width=j.height=70,a(d,j,"",26,"#ebc0de"),function(){b(".cell-spinner").filter(":visible").each(function(){var d=b(this),e=Date.now(),f=this.width,g=this.height,h=this.getContext("2d");h.clearRect(0,0,f,g),h.save(),h.translate(f/2,g/2);for(var i=0;10>i;++i)h.drawImage(j,(.1*e+80*i)%(f+140)-f/2-70-35,g/2*Math.sin((.001*e+i)%Math.PI*2)-35,70,70);h.restore(),(d=d.attr("data-itr"))&&(d=J(d)),a(c,this,d||"",+b(this).attr("data-size"),"#5bc0de")}),b("#statsPellets").filter(":visible").each(function(){b(this);var c=this.width,d=this.height;for(this.getContext("2d").clearRect(0,0,c,d),c=0;c<f.length;c++)a(f[c],this,"",f[c].size,f[c].color)})}}();a.createParty=function(){F(":party"),Ec=function(c){ta("/#"+a.encodeURIComponent(c)),b(".partyToken").val("agar.io/#"+a.encodeURIComponent(c)),b(".partyInfoToken").text("agar.io/#"+a.encodeURIComponent(c)),b("#helloContainer").attr("data-party-state","1")},L()},a.joinParty=sa,a.cancelParty=function(){ta("/"),b("#helloContainer").attr("data-party-state","0"),F(""),L()};var pd=[],qd=0,rd="#000000",sd=!1,td=!1,ud=0,vd=0,wd=0,xd=0,yd=0;setInterval(function(){td&&pd.push(da()/100)},1e3/60),setInterval(function(){var a=wa();0!=a&&(++wd,0==yd&&(yd=a),yd=Math.min(yd,a))},1e3),a.closeStats=function(){sd=!1,b("#stats").hide(),I(a.ab),E(0)},b(function(){b(c)})}}}}copyToken=function(){var a=b(".partyToken:visible")[0];a.setSelectionRange(0,a.value.length),a.select();try{document.execCommand("copy")}catch(b){}},b(function(){b("#helloContainer form .form-group:first").after('<center><h5>Polish MOD: OGARio by szymy | v0.7.1 | <a href="http://ogario.wpload.com" target="_blank">Home</a></h5></center>'),b("#nick").before('<input id="clanTag" class="form-control" placeholder="Tag" />'),b("#locationKnown, #locationUnknown").insertAfter(b("#nick")),b(".btn-settings, .btn-spectate, .btn-logout").appendTo("#agario-main-buttons"),b(".btn-settings").after('<button id="nextBtn" onclick="nextIP(); return false;" class="btn btn-info btn-needs-server">&gt;&gt;</button>'),b("#agario-main-buttons").append('<br clear="both"/>'),b("#helloContainer form").after('<div id="ogarioParty"><input class="partyToken form-control" placeholder="Party token" /> <button class="btn btn-info btn-copyToken" onclick="copyToken();">Copy</button> <button class="btn btn-primary btn-createParty" onclick="$(\'#helloContainer\').attr(\'data-party-state\', \'3\'); createParty();" data-itr="create_party">Create</button> <button class="btn btn-success btn-joinParty" onclick="joinParty($(\'.partyToken\').val());" data-itr="join_party">Join</button> <button class="btn btn-danger btn-closeParty" onclick="cancelParty();">×</button> <br clear="both"/></div>'),b("#settings").insertAfter(b("#ogarioParty")),b("#instructions .text-muted").append("Press <b>S</b> to show game stats<br/> Press <b>A</b> to fast shoot viruses<br/> Press <b>D</b> to switch between your cells<br/> Press <b>E</b> to pause your cell<br/> Press <b>Z</b> to reset zoom<br/> Press <b>X</b> to switch death location<br/> Press <b>Shift</b> to fast split<br/>"),b("#settings").append('<div id="ogario-options" style="margin: 0 6px; font-size: 12px;"><label><input type="checkbox" onchange="setZoom($(this).is(\':checked\'));" id="zoom">Zoom</label> <label><input type="checkbox" onchange="setMapBorders($(this).is(\':checked\'));" id="mapborders">Map borders</label> <label><input type="checkbox" onchange="setOppColors($(this).is(\':checked\'));" id="oppcolors">Opponents colours</label> <label><input type="checkbox" onchange="setOppRings($(this).is(\':checked\'));" id="opprings">Opponents rings</label> <label><input type="checkbox" onchange="setSkinsAlpha($(this).is(\':checked\'));" id="skinsalpha">Transparent skins</label> <label><input type="checkbox" onchange="setCellsAlpha($(this).is(\':checked\'));" id="cellsalpha">Transparent cells</label> <label><input type="checkbox" onchange="setSimpleDraw($(this).is(\':checked\'));" id="simpledraw">Simple drawing</label> <label><input type="checkbox" onchange="setSplitTimer($(this).is(\':checked\'));" id="splittimer">Time to re-merge</label> <label><input type="checkbox" onchange="setSplitRange($(this).is(\':checked\'));" id="splitrange">Split range</label> <label><input type="checkbox" onchange="setVirusRange($(this).is(\':checked\'));" id="virusrange">Viruses range</label> <label><input type="checkbox" onchange="setBiggerNames($(this).is(\':checked\'));" id="biggernames">Bigger names</label> <label><input type="checkbox" onchange="setOnlyOgarioSkins($(this).is(\':checked\'));" id="onlyogarioskins">Only OGARio skins</label> <label><input type="checkbox" onchange="setShowMiniMap($(this).is(\':checked\'));" id="showminimap">Show minimap</label> <label><input type="checkbox" onchange="setShiftOn(!$(this).is(\':checked\'));" id="shifton">Disable Shift</label> <label><input type="checkbox" onchange="setShowFps($(this).is(\':checked\'));" id="showfps">FPS counter</label> <label><input type="checkbox" onchange="setShowMassGuides($(this).is(\':checked\'));" id="showmassguides">Mass guides</label> <label><input type="checkbox" onchange="setCursorTracking($(this).is(\':checked\'));" id="cursortracking">Cursor tracking</label> <label><input type="checkbox" onchange="setRainbowFood($(this).is(\':checked\'));" id="rainbowfood">Rainbow food</label> <label><input type="checkbox" onchange="setSectorsBg($(this).is(\':checked\'));" id="sectorsbg">Background sectors</label> <label><input type="checkbox" onchange="setAcid($(this).is(\':checked\'));" id="acid">Acid mode</label></div>'),b(".agario-party-1, .agario-party-5").append('<div class="partyInfo">Token: <span class="partyInfoToken"></span><br>Leaderboard:<br><span class="partyInfoTopka"></span><br></div>'),b("#statsContinue").after('<button type="submit" onclick="closeStats(); setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-success btn-needs-server" style="position:absolute;left:25px;width:145px;bottom:269px;" data-itr="play">Play</button> <button onclick="closeStats(); spectate(); return false;" class="btn btn-warning btn-needs-server" style="position:absolute;right:25px;width:145px;bottom:269px;" data-itr="spectate">Spectate</button>'),b("#nick").val(a.localStorage.getItem("nick")),b("#clanTag").val(a.localStorage.getItem("clantag")),b('span[data-itr="option_no_skins"]').parent().find("input[type='checkbox']").prop("checked",!db),b('span[data-itr="option_no_names"]').parent().find("input[type='checkbox']").prop("checked",!eb),b('span[data-itr="option_dark_theme"]').parent().find("input[type='checkbox']").prop("checked",ib),b('span[data-itr="option_no_colors"]').parent().find("input[type='checkbox']").prop("checked",fb),b('span[data-itr="option_show_mass"]').parent().find("input[type='checkbox']").prop("checked",jb),b('span[data-itr="option_skip_stats"]').parent().find("input[type='checkbox']").prop("checked",Zb),b("#zoom").prop("checked",Hb),b("#mapborders").prop("checked",Ib),b("#oppcolors").prop("checked",Jb),b("#opprings").prop("checked",Kb),b("#skinsalpha").prop("checked",Lb),b("#cellsalpha").prop("checked",Mb),b("#simpledraw").prop("checked",Nb),b("#splittimer").prop("checked",Ob),b("#splitrange").prop("checked",Pb),b("#virusrange").prop("checked",Qb),b("#biggernames").prop("checked",Rb),b("#onlyogarioskins").prop("checked",Tb),b("#showminimap").prop("checked",Ub),b("#shifton").prop("checked",!Vb),b("#showfps").prop("checked",Wb),b("#showmassguides").prop("checked",Xb),b("#cursortracking").prop("checked",Yb),b("#rainbowfood").prop("checked",$b),b("#sectorsbg").prop("checked",_b),b("#acid").prop("checked",xb),b("#clanTag").css({width:"107px","margin-right":"5px","float":"left"}),b("#region").css({width:"209px",margin:"5px 0 0 0","float":"left"}),b("#gamemode").css("margin-top","5px"),b(".btn-play").css({width:"100%","margin-left":"0"}),b(".btn-play-guest, .btn-login").css("width","157px"),b(".btn-play-guest").css("margin-left","0"),b(".btn-settings").css("margin-top","5px"),b(".btn-spectate, .btn-logout").css({margin:"5px 0 0 5px","float":"left"}),b("#nextBtn").css({width:"45px",margin:"5px 0 0 5px","padding-bottom":"7px","float":"left"}),b("#ogarioParty").css("padding-bottom","6px"),b("#ogarioParty .partyToken").css({width:"210px",margin:"0 5px 0 0","float":"left"}),b(".btn-copyToken").css("width","105px"),b(".btn-createParty, .btn-joinParty").css({width:"136px","margin-top":"5px"}),b(".btn-closeParty").css({width:"40px","margin-top":"5px"}),b("#settings div").css({width:"100%","float":"none"}),b("#options label").css("width","153px"),b("#ogario-options label").css("width","150px"),b("#adbg, #g300x250, #a300x250").css("height","auto"),b("#helloContainer hr").css("margin","6px 0"),b("#instructions").css("font-size","12px"),b("#statsContinue").css("bottom","309px"),b(".agario-profile-picture, .agario-profile-name-container").css("display","none")})};
var script = document.createElement('script');
script.textContent = lang + '!' + ogario + '(window,window.jQuery);';
(document.head || document.documentElement).appendChild(script);
script.onload = function() {
    this.parentNode.removeChild(this);
}



function pressW() {
	var oEvent = document.createEvent('KeyboardEvent');
	var k = 87;
	// Chromium Hack
	Object.defineProperty(oEvent, 'keyCode', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     
	Object.defineProperty(oEvent, 'which', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     

	if (oEvent.initKeyboardEvent) {
	    oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, k, k);
	} else {
	    oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
	}

	oEvent.keyCodeVal = k;

	if (oEvent.keyCode !== k) {
	    console.log("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
	}
	document.dispatchEvent(oEvent);

	var oEvent = document.createEvent('KeyboardEvent');
	// Chromium Hack
	Object.defineProperty(oEvent, 'keyCode', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     
	Object.defineProperty(oEvent, 'which', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     

	if (oEvent.initKeyboardEvent) {
	    oEvent.initKeyboardEvent("keyup", true, true, document.defaultView, false, false, false, false, k, k);
	} else {
	    oEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, k, 0);
	}

	oEvent.keyCodeVal = k;

	if (oEvent.keyCode !== k) {
	    console.log("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
	}	
	document.dispatchEvent(oEvent);
}
window.pressW = pressW;
document.onkeypress = function(e) {
	e = e || window.event;
	if (e.keyCode == 102) {
		for (var i = 0; i<7; i++) {
			setTimeout(pressW, i * 80);
		}
	} else if (e.keyCode == 103) {
		for (var i = 0; i<50; i++) {
			setTimeout(pressW, i * 40);
		}
	} else if (e.keyCode == 104) {
		for (var i = 0; i<400; i++) {
			setTimeout(pressW, i * 5);
		}
	}
}
var script = document.createElement('script');
script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js";
(document.body || document.head || document.documentElement).appendChild(script);

	$("#adbg").hide();
	$(".agario-promo").hide();
	$("div#s250x250").hide();
	$("div.form-group div[style='float: right; margin-top: 10px; height: 40px;']").hide();
	$("div.form-group div h2").html('<a href="https://www.youtube.com/channel/UCJ0aIc7eHyWe_-qcCgFoMcQ"><h2>Agario<sub><small>GaBProX</small></sub></h2></a>');
i18n_lang = 'en';
i18n_dict = {
  'en': {
    'connecting': 'Connecting',
    'connect_help': 'If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.',
    'play': 'Jogar',
    'spectate': 'Spectate',
    'login_and_play': 'Login and play',
    'play_as_guest': 'Play as guest',
    'share': 'Share',
    'advertisement': 'Advertisement',
    'privacy_policy': 'Privacy Policy',
    'terms_of_service': 'Terms of Service',
    'changelog': 'Changelog',
    'instructions_mouse': 'Meche o mouse',
    'instructions_space': 'Press <b>Space</b> to split',
    'instructions_w': 'Press <b>W</b> to eject some mass,e para macro de doar',
    'gamemode_ffa': 'FFA',
    'gamemode_teams': 'Teams',
    'gamemode_experimental': 'Experimental',
    'region_select': ' -- Select a Region -- ',
    'region_us_east': 'US East',
    'region_us_west': 'US West',
    'region_north_america': 'North America',
    'region_south_america': 'South America',
    'region_europe': 'Europe',
    'region_turkey': 'Turkey',
    'region_poland': 'Poland',
    'region_east_asia': 'East Asia',
    'region_russia': 'Russia',
    'region_china': 'China',
    'region_oceania': 'Oceania',
    'region_australia': 'Australia',
    'region_players': 'players',
    'option_no_skins': 'No skins',
    'option_no_names': 'No names',
    'option_dark_theme': 'Dark theme',
    'option_no_colors': 'No colors',
    'option_show_mass': 'Mostrar Massa',
    'leaderboard': 'Leaderboard',
    'unnamed_cell': 'An unnamed cell',
    'last_match_results': 'Last match results',
    'score': 'Score',
    'leaderboard_time': 'Leaderboard Time',
    'mass_eaten': 'Mass Eaten',
    'top_position': 'Top Position',
    'position_1': 'Primeiro',
    'position_2': 'Second',
    'position_3': 'Third',
    'position_4': 'Fourth',
    'position_5': 'Fifth',
    'position_6': 'Sixth',
    'position_7': 'Seventh',
    'position_8': 'Eighth',
    'position_9': 'Ninth',
    'position_10': 'Tenth',
    'player_cells_eaten': 'Player Cells Eaten',
    'survival_time': 'Survival Time',
    'games_played': 'Games played',
    'highest_mass': 'Highest mass',
    'total_cells_eaten': 'Total cells eaten',
    'total_mass_eaten': 'Total mass eaten',
    'longest_survival': 'Longest survival',
    'logout': 'Logout',
    'stats': 'Stats',
    'shop': 'Shop',
    'party': 'Party',
    'party_description': 'Play with your friends in the same map',
    'create_party': 'Create',
    'creating_party': 'Creating party...',
    'join_party': 'Join',
    'back_button': 'Back',
    'joining_party': 'Joining party...',
    'joined_party_instructions': 'You are now playing with this party:',
    'party_join_error': 'There was a problem joining that party, please make sure the code is correct, or try creating another party',
    'login_tooltip': 'Login with Facebook and get:<br\xA0/><br /><br />Start the game with more mass!<br />Level up to get even more starting mass!',
    'create_party_instructions': 'Give this link to your friends:',
    'join_party_instructions': 'Your friend should have given you a code, type it here:',
    'continue': 'Continue',
    'option_skip_stats': 'Skip stats',
    'stats_food_eaten': 'food eaten',
    'stats_highest_mass': 'highest mass',
    'stats_time_alive': 'time alive',
    'stats_leaderboard_time': 'leaderboard time',
    'stats_cells_eaten': 'cells eaten',
    'stats_top_position': 'top position',
    '': ''
  },
  '?': {}
};
i18n_lang = (window.navigator.userLanguage || window.navigator.language || 'en').split('-')[0];
if (!i18n_dict.hasOwnProperty(i18n_lang)) {
  i18n_lang = 'en';
}
i18n = i18n_dict[i18n_lang];

jQuery("#canvas").remove();
jQuery("#connecting").after('<canvas id="canvas" width="800" height="600"></canvas>');

(function(window, $) {
  function Init() {
    g_drawLines = true;
    PlayerStats();
    setInterval(PlayerStats, 180000);
    g_canvas = g_canvas_ = document.getElementById('canvas');
    g_context = g_canvas.getContext('2d');
    g_canvas.onmousedown = function(event) {
      if (g_touchCapable) {
        var deltaX = event.clientX - (5 + g_ready / 5 / 2);
        var deltaY = event.clientY - (5 + g_ready / 5 / 2);
        if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= g_ready / 5 / 2) {
          SendPos();
          SendCmd(17);
          return;
        }
      }
      g_mouseX = 1 * event.clientX;
      g_mouseY = 1 * event.clientY;
      UpdatePos();
      SendPos();
    };
    g_canvas.onmousemove = function(event) {
      g_mouseX = 1 * event.clientX;
      g_mouseY = 1 * event.clientY;
      UpdatePos();
    };
    g_canvas.onmouseup = function() {};
    if (/firefox/i.test(navigator.userAgent)) {
      document.addEventListener('DOMMouseScroll', WheelHandler, false);
    } else {
      document.body.onmousewheel = WheelHandler;
    }
    var spaceDown = false;
    var cachedSkin = false;
    var wkeyDown = false;
    var gkeyDown = false;
    var ekeyDown = false;

    function handleQuickFeed() {
      if (ekeyDown) {
        SendPos();
        SendCmd(21);            
        setTimeout(handleQuickFeed, 142);
      }
    }
      
    window.onkeydown = function(event) {
      if (!(32 != event.keyCode || spaceDown)) {
        SendPos();
        SendCmd(17);
        spaceDown = true;
      }
      if (!(81 != event.keyCode || cachedSkin)) {
        SendCmd(18);
        cachedSkin = true;
      }
      if (!(87 != event.keyCode || wkeyDown)) {
        SendPos();
        SendCmd(21);
        wkeyDown = true;
      }
      if (!(71 != event.keyCode || gkeyDown)) {
        showGrid = window.localStorage.showGrid = !showGrid;
        gkeyDown = true;
      }
      if (!(69 != event.keyCode || gkeyDown)) {
        ekeyDown = true;
        handleQuickFeed();
      }
      if (27 == event.keyCode) {
        __unmatched_10(300);
      }
    };
    window.onkeyup = function(event) {
      if (32 == event.keyCode) {
        spaceDown = false;
      }
      if (87 == event.keyCode) {
        wkeyDown = false;
      }
      if (71 == event.keyCode) {
        gkeyDown = false;
      }
      if (69 == event.keyCode) {
        ekeyDown = false;
      }
      if (81 == event.keyCode && cachedSkin) {
        SendCmd(19);
        cachedSkin = false;
      }
    };
    window.onblur = function() {
      SendCmd(19);
      wkeyDown = gkeyDown = ekeyDown = cachedSkin = spaceDown = false;
    };
    window.onresize = ResizeHandler;
    window.requestAnimationFrame(__unmatched_135);
    setInterval(SendPos, 40);
    if (g_region) {
      $('#region').val(g_region);
    }
    SyncRegion();
    SetRegion($('#region').val());
    if (0 == __unmatched_114 && g_region) {
      Start();
    }
    __unmatched_10(0);
    ResizeHandler();
    if (window.location.hash && 6 <= window.location.hash.length) {
      RenderLoop(window.location.hash);
    }
  }
  function WheelHandler(event) {
      g_zoom *= Math.pow(0.9, event.wheelDelta / -120 || event.detail || 0);
  }
  function UpdateTree() {
    if (0.4 > g_scale) {
      g_pointTree = null;
    } else {
      for (var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, i = 0; i < g_cells.length; i++) {
        var cell = g_cells[i];
        if (!(!cell.H() || cell.L || 20 >= cell.size * g_scale)) {
          minX = Math.min(cell.x - cell.size, minX);
          minY = Math.min(cell.y - cell.size, minY);
          maxY = Math.max(cell.x + cell.size, maxY);
          maxX = Math.max(cell.y + cell.size, maxX);
        }
      }
      g_pointTree = QTreeFactory.X({
        ba: minX - 10,
        ca: minY - 10,
        Z: maxY + 10,
        $: maxX + 10,
        fa: 2,
        ha: 4
      });
      for (i = 0; i < g_cells.length; i++) {
        if (cell = g_cells[i], cell.H() && !(20 >= cell.size * g_scale)) {
          for (minX = 0; minX < cell.a.length; ++minX) {
            minY = cell.a[minX].x;
            maxY = cell.a[minX].y;
            if (!(minY < g_viewX - g_ready / 2 / g_scale || maxY < g_viewY - noClip / 2 / g_scale || minY > g_viewX + g_ready / 2 / g_scale || maxY > g_viewY + noClip / 2 / g_scale)) {
              g_pointTree.Y(cell.a[minX]);
            }
          }
        }
      }
    }
  }
  function UpdatePos() {
    g_moveX = (g_mouseX - g_ready / 2) / g_scale + g_viewX;
    g_moveY = (g_mouseY - noClip / 2) / g_scale + g_viewY;
  }
  function PlayerStats() {
    if (null == g_regionLabels) {
      g_regionLabels = {};
      $('#region').children().each(function() {
        var $this = $(this);
        var val = $this.val();
        if (val) {
          g_regionLabels[val] = $this.text();
        }
      });
    }
    $.get(g_protocol + 'info', function(data) {
      var regionNumPlayers = {};
      var region;
      for (region in data.regions) {
        var region_ = region.split(':')[0];
        regionNumPlayers[region_] = regionNumPlayers[region_] || 0;
        regionNumPlayers[region_] += data.regions[region].numPlayers;
      }
      for (region in regionNumPlayers) {
        $('#region option[value="' + region + '"]').text(g_regionLabels[region] + ' (' + regionNumPlayers[region] + ' players)');
      }
    }, 'json');
  }
  function HideOverlay() {
    $('#adsBottom').hide();
    $('#overlays').hide();
    $('#stats').hide();
    $('#mainPanel').hide();
    __unmatched_147 = g_playerCellDestroyed = false;
    SyncRegion();
    __unmatched_14(window.aa.concat(window.ac));
  }
  function SetRegion(val) {
    if (val && val != g_region) {
      if ($('#region').val() != val) {
        $('#region').val(val);
      }
      g_region = window.localStorage.location = val;
      $('.region-message').hide();
      $('.region-message.' + val).show();
      $('.btn-needs-server').prop('disabled', false);
      if (g_drawLines) {
        Start();
      }
    }
  }
  function __unmatched_10(char) {
    if (!(g_playerCellDestroyed || __unmatched_147)) {
      g_nick = null;
      if (!__unmatched_122) {
        $('#adsBottom').show();
        $('#g300x250').hide();
        $('#a300x250').show();
      }
      __unmatched_13(__unmatched_122 ? window.ac : window.aa);
      __unmatched_122 = false;
      if (1000 > char) {
        qkeyDown = 1;
      }
      g_playerCellDestroyed = true;
      $('#mainPanel').show();
      if (0 < char) {
        $('#overlays').fadeIn(char);
      } else {
        $('#overlays').show();
      }
    }
  }
  function n(rect) {
    $('#helloContainer').attr('data-gamemode', rect);
    __unmatched_97 = rect;
    $('#gamemode').val(rect);
  }
  function SyncRegion() {
    if ($('#region').val()) {
      window.localStorage.location = $('#region').val();
    } else if (window.localStorage.location) {
      $('#region').val(window.localStorage.location);
    }
    if ($('#region').val()) {
      $('#locationKnown').append($('#region'));
    } else {
      $('#locationUnknown').append($('#region'));
    }
  }
  function __unmatched_13(__unmatched_180) {
    if (window.googletag) {
      window.googletag.cmd.push(function() {
        if (g_canRefreshAds) {
          g_canRefreshAds = false;
          setTimeout(function() {
            g_canRefreshAds = true;
          }, 60000 * g_refreshAdsCooldown);
          if (window.googletag && window.googletag.pubads && window.googletag.pubads().refresh) {
            window.googletag.pubads().refresh(__unmatched_180);
          }
        }
      });
    }
  }
  function __unmatched_14(__unmatched_181) {
    if (window.googletag && window.googletag.pubads && window.googletag.pubads().clear) {
      window.googletag.pubads().clear(__unmatched_181);
    }
  }
  function Render(i) {
    return window.i18n[i] || window.i18n_dict.en[i] || i;
  }
  function FindGame() {
    var __unmatched_183 = ++__unmatched_114;
    console.log('Find ' + g_region + __unmatched_97);
    $.ajax(g_protocol + 'findServer', {
      error: function() {
        setTimeout(FindGame, 1000);
      },
      success: function(point) {
        if (__unmatched_183 == __unmatched_114) {
          if (point.alert) {
            alert(point.alert);
          }
          Connect('ws://' + point.ip, point.token);
        }
      },
      dataType: 'json',
      method: 'POST',
      cache: false,
      crossDomain: true,
      data: (g_region + __unmatched_97 || '?') + '\n154669603'
    });
  }
  function Start() {
    if (g_drawLines && g_region) {
      $('#connecting').show();
      FindGame();
    }
  }
  function Connect(address, ticket) {
    if (g_socket) {
      g_socket.onopen = null;
      g_socket.onmessage = null;
      g_socket.onclose = null;
      try {
        g_socket.close();
      } catch (exception) {}
      g_socket = null;
    }
    if (__unmatched_116.ip) {
      address = 'ws://' + __unmatched_116.ip;
    }
    if (null != __unmatched_126) {
      var __unmatched_187 = __unmatched_126;
      __unmatched_126 = function() {
        __unmatched_187(ticket);
      };
    }
    if (g_secure) {
      var parts = address.split(':');
      address = parts[0] + 's://ip-' + parts[1].replace(/\./g, '-').replace(/\//g, '') + '.tech.agar.io:' + +parts[2];
    }
    g_playerCellIds = [];
    g_playerCells = [];
    g_cellsById = {};
    g_cells = [];
    g_destroyedCells = [];
    g_scoreEntries = [];
    g_leaderboardCanvas = g_scorePartitions = null;
    g_maxScore = 0;
    g_connectSuccessful = false;
    console.log('Connecting to ' + address);
    g_socket = new WebSocket(address);
    g_socket.binaryType = 'arraybuffer';
    g_socket.onopen = function() {
      var data;
      console.log('socket open');
      data = GetBuffer(5);
      data.setUint8(0, 254);
      data.setUint32(1, 5, true);
      SendBuffer(data);
      data = GetBuffer(5);
      data.setUint8(0, 255);
      data.setUint32(1, 154669603, true);
      SendBuffer(data);
      data = GetBuffer(1 + ticket.length);
      data.setUint8(0, 80);
      for (var i = 0; i < ticket.length; ++i) {
        data.setUint8(i + 1, ticket.charCodeAt(i));
      }
      SendBuffer(data);
      RefreshAds();
    };
    g_socket.onmessage = MessageHandler;
    g_socket.onclose = CloseHandler;
    g_socket.onerror = function() {
      console.log('socket error');
    };
  }
  function GetBuffer(size) {
    return new DataView(new ArrayBuffer(size));
  }
  function SendBuffer(data) {
    g_socket.send(data.buffer);
  }
  function CloseHandler() {
    if (g_connectSuccessful) {
      g_retryTimeout = 500;
    }
    console.log('socket close');
    setTimeout(Start, g_retryTimeout);
    g_retryTimeout *= 2;
  }
  function MessageHandler(data) {
    Receive(new DataView(data.data));
  }
  function Receive(data) {
    function __unmatched_196() {
      for (var string = '';;) {
        var char = data.getUint16(pos, true);
        pos += 2;
        if (0 == char) {
          break;
        }
        string += String.fromCharCode(char);
      }
      return string;
    }
    var pos = 0;
    if (240 == data.getUint8(pos)) {
      pos += 5;
    }
    switch (data.getUint8(pos++)) {
      case 16:
        ParseCellUpdates(data, pos);
        break;
      case 17:
        g_viewX_ = data.getFloat32(pos, true);
        pos += 4;
        g_viewY_ = data.getFloat32(pos, true);
        pos += 4;
        g_scale_ = data.getFloat32(pos, true);
        pos += 4;
        break;
      case 20:
        g_playerCells = [];
        g_playerCellIds = [];
        break;
      case 21:
        g_linesY_ = data.getInt16(pos, true);
        pos += 2;
        g_linesX_ = data.getInt16(pos, true);
        pos += 2;
        if (!__unmatched_100) {
          __unmatched_100 = true;
          g_linesX = g_linesY_;
          g_linesY = g_linesX_;
        }
        break;
      case 32:
        g_playerCellIds.push(data.getUint32(pos, true));
        pos += 4;
        break;
      case 49:
        if (null != g_scorePartitions) {
          break;
        }
        var num = data.getUint32(pos, true);
        var pos = pos + 4;
        g_scoreEntries = [];
        for (var i = 0; i < num; ++i) {
          var id = data.getUint32(pos, true);
          var pos = pos + 4;
          g_scoreEntries.push({
            id: id,
            name: __unmatched_196()
          });
        }
        UpdateLeaderboard();
        break;
      case 50:
        g_scorePartitions = [];
        num = data.getUint32(pos, true);
        pos += 4;
        for (i = 0; i < num; ++i) {
          g_scorePartitions.push(data.getFloat32(pos, true));
          pos += 4;
        }
        UpdateLeaderboard();
        break;
      case 64:
        g_minX = data.getFloat64(pos, true);
        pos += 8;
        g_minY = data.getFloat64(pos, true);
        pos += 8;
        g_maxX = data.getFloat64(pos, true);
        pos += 8;
        g_maxY = data.getFloat64(pos, true);
        pos += 8;
        g_viewX_ = (g_maxX + g_minX) / 2;
        g_viewY_ = (g_maxY + g_minY) / 2;
        g_scale_ = 1;
        if (0 == g_playerCells.length) {
          g_viewX = g_viewX_;
          g_viewY = g_viewY_;
          g_scale = g_scale_;
        }
        break;
      case 81:
        var x = data.getUint32(pos, true);
        var pos = pos + 4;
        var __unmatched_202 = data.getUint32(pos, true);
        var pos = pos + 4;
        var __unmatched_203 = data.getUint32(pos, true);
        var pos = pos + 4;
        setTimeout(function() {
          __unmatched_44({
            d: x,
            e: __unmatched_202,
            c: __unmatched_203
          });
        }, 1200);
    }
  }
  function ParseCellUpdates(data, pos) {
    function __unmatched_208() {
      for (var string = '';;) {
        var id = data.getUint16(pos, true);
        pos += 2;
        if (0 == id) {
          break;
        }
        string += String.fromCharCode(id);
      }
      return string;
    }
    function __unmatched_209() {
      for (var __unmatched_224 = '';;) {
        var r = data.getUint8(pos++);
        if (0 == r) {
          break;
        }
        __unmatched_224 += String.fromCharCode(r);
      }
      return __unmatched_224;
    }
    __unmatched_109 = g_time = Date.now();
    if (!g_connectSuccessful) {
      g_connectSuccessful = true;
      __unmatched_25();
    }
    __unmatched_90 = false;
    var num = data.getUint16(pos, true);
    pos += 2;
    for (var i = 0; i < num; ++i) {
      var cellA = g_cellsById[data.getUint32(pos, true)];
      var cellB = g_cellsById[data.getUint32(pos + 4, true)];
      pos += 8;
      if (cellA && cellB) {
        cellB.R();
        cellB.o = cellB.x;
        cellB.p = cellB.y;
        cellB.n = cellB.size;
        cellB.C = cellA.x;
        cellB.D = cellA.y;
        cellB.m = cellB.size;
        cellB.K = g_time;
        __unmatched_50(cellA, cellB);
      }
    }
    for (i = 0;;) {
      num = data.getUint32(pos, true);
      pos += 4;
      if (0 == num) {
        break;
      }
      ++i;
      var size;
      var cellA = data.getInt32(pos, true);
      pos += 4;
      cellB = data.getInt32(pos, true);
      pos += 4;
      size = data.getInt16(pos, true);
      pos += 2;
      var flags = data.getUint8(pos++);
      var y = data.getUint8(pos++);
      var b = data.getUint8(pos++);
      var y = __unmatched_41(flags << 16 | y << 8 | b);
      var b = data.getUint8(pos++);
      var isVirus = !!(b & 1);
      var isAgitated = !!(b & 16);
      var __unmatched_220 = null;
      if (b & 2) {
        pos += 4 + data.getUint32(pos, true);
      }
      if (b & 4) {
        __unmatched_220 = __unmatched_209();
      }
      var name = __unmatched_208();
      var flags = null;
      if (g_cellsById.hasOwnProperty(num)) {
        flags = g_cellsById[num];
        flags.J();
        flags.o = flags.x;
        flags.p = flags.y;
        flags.n = flags.size;
        flags.color = y;
      } else {
        flags = new Cell(num, cellA, cellB, size, y, name);
        g_cells.push(flags);
        g_cellsById[num] = flags;
        flags.ia = cellA;
        flags.ja = cellB;
      }
      flags.f = isVirus;
      flags.j = isAgitated;
      flags.C = cellA;
      flags.D = cellB;
      flags.m = size;
      flags.K = g_time;
      flags.T = b;
      if (__unmatched_220) {
        flags.V = __unmatched_220;
      }
      if (name) {
        flags.t(name);
      }
      if (-1 != g_playerCellIds.indexOf(num) && -1 == g_playerCells.indexOf(flags)) {
        g_playerCells.push(flags);
        if (1 == g_playerCells.length) {
          g_viewX = flags.x;
          g_viewY = flags.y;
          __unmatched_141();
          document.getElementById('overlays').style.display = 'none';
          points = [];
          __unmatched_145 = 0;
          __unmatched_146 = g_playerCells[0].color;
          __unmatched_148 = true;
          __unmatched_149 = Date.now();
          g_mode = __unmatched_152 = __unmatched_151 = 0;
        }
      }
    }
    cellA = data.getUint32(pos, true);
    pos += 4;
    for (i = 0; i < cellA; i++) {
      num = data.getUint32(pos, true);
      pos += 4;
      flags = g_cellsById[num];
      if (null != flags) {
        flags.R();
      }
    }
    if (__unmatched_90 && 0 == g_playerCells.length) {
      __unmatched_150 = Date.now();
      __unmatched_148 = false;
      if (!(g_playerCellDestroyed || __unmatched_147)) {
        if (__unmatched_154) {
          __unmatched_13(window.ab);
          ShowOverlay();
          __unmatched_147 = true;
          $('#overlays').fadeIn(3000);
          $('#stats').show();
        } else {
          __unmatched_10(3000);
        }
      }
    }
  }
  function __unmatched_25() {
    $('#connecting').hide();
    SendNick();
    if (__unmatched_126) {
      __unmatched_126();
      __unmatched_126 = null;
    }
    if (null != __unmatched_128) {
      clearTimeout(__unmatched_128);
    }
    __unmatched_128 = setTimeout(function() {
      if (window.ga) {
        ++__unmatched_129;
        window.ga('set', 'dimension2', __unmatched_129);
      }
    }, 10000);
  }
  function SendPos() {
    if (IsConnected()) {
      var deltaY = g_mouseX - g_ready / 2;
      var delta = g_mouseY - noClip / 2;
      if (!(64 > deltaY * deltaY + delta * delta || 0.01 > Math.abs(g_lastMoveY - g_moveX) && 0.01 > Math.abs(g_lastMoveX - g_moveY))) {
        g_lastMoveY = g_moveX;
        g_lastMoveX = g_moveY;
        deltaY = GetBuffer(13);
        deltaY.setUint8(0, 16);
        deltaY.setInt32(1, g_moveX, true);
        deltaY.setInt32(5, g_moveY, true);
        deltaY.setUint32(9, 0, true);
        SendBuffer(deltaY);
      }
    }
  }
  function SendNick() {
    if (IsConnected() && g_connectSuccessful && null != g_nick) {
      var data = GetBuffer(1 + 2 * g_nick.length);
      data.setUint8(0, 0);
      for (var i = 0; i < g_nick.length; ++i) {
        data.setUint16(1 + 2 * i, g_nick.charCodeAt(i), true);
      }
      SendBuffer(data);
      g_nick = null;
    }
  }
  function IsConnected() {
    return null != g_socket && g_socket.readyState == g_socket.OPEN;
  }
  function SendCmd(cmd) {
    if (IsConnected()) {
      var data = GetBuffer(1);
      data.setUint8(0, cmd);
      SendBuffer(data);
    }
  }
  function RefreshAds() {
    if (IsConnected() && null != __unmatched_110) {
      var __unmatched_232 = GetBuffer(1 + __unmatched_110.length);
      __unmatched_232.setUint8(0, 81);
      for (var y = 0; y < __unmatched_110.length; ++y) {
        __unmatched_232.setUint8(y + 1, __unmatched_110.charCodeAt(y));
      }
      SendBuffer(__unmatched_232);
    }
  }
  function ResizeHandler() {
    g_ready = 1 * window.innerWidth;
    noClip = 1 * window.innerHeight;
    g_canvas_.width = g_canvas.width = g_ready;
    g_canvas_.height = g_canvas.height = noClip;
    var $dialog = $('#helloContainer');
    $dialog.css('transform', 'none');
    var dialogHeight = $dialog.height();
    var height = window.innerHeight;
    if (dialogHeight > height / 1.1) {
      $dialog.css('transform', 'translate(-50%, -50%) scale(' + height / dialogHeight / 1.1 + ')');
    } else {
      $dialog.css('transform', 'translate(-50%, -50%)');
    }
    GetScore();
  }
  function ScaleModifier() {
    var scale;
    scale = 1 * Math.max(noClip / 1080, g_ready / 1920);
    return scale *= g_zoom;
  }
  function __unmatched_33() {
    if (0 != g_playerCells.length) {
      for (var scale = 0, i = 0; i < g_playerCells.length; i++) {
        scale += g_playerCells[i].size;
      }
      scale = Math.pow(Math.min(64 / scale, 1), 0.4) * ScaleModifier();
      g_scale = (9 * g_scale + scale) / 10;
    }
  }
    
    var showGrid = window.localStorage.showGrid || false;
    
    function renderBackground(context, x1, x0, y1, y0) {
        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var gridWidth = 5;
        var gridHeight = 7;

        var xMax = Math.round(x1);
        var xMin = Math.round(x0);
        var yMax = Math.round(y1);
        var yMin = Math.round(y0);

        var xLength = xMax - xMin;
        var yLength = yMax - yMin;

        context.save();

        if (showGrid) {
            var xPart = xLength / gridWidth;
            var yPart = yLength / gridHeight;

            context.beginPath();
            context.lineWidth = 20;
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = (0.6 * xPart) + 'px Ubuntu';
            
            context.fillStyle = g_showMass ? '#1A1A1A' : '#e5e5e5';

            for (var j = 0; j < gridHeight; j++) {
                for (var i = 0; i < gridWidth; i++) {
                    context.fillText(letters[j] + (i + 1), (xMin + xPart * i) + (xPart / 2), (yMin + yPart * j) + (yPart / 2));
                }
            }

            context.lineWidth = 160;
            context.strokeStyle = g_showMass ? '#1A1A1A' : '#e5e5e5';

            for (var j = 0; j < gridHeight; j++) {
                for (var i = 0; i < gridWidth; i++) {
                    context.strokeRect(xMin + xPart * i, yMin + yPart * j, xPart, yPart);
                }
            }

            context.stroke();
        }

        context.beginPath();
        context.strokeStyle = "#F44336";
        context.lineWidth = 90;
        context.strokeRect(x0 - 90, y0 - 90, xLength + 180, yLength + 180);
        context.restore();
    }    
    
  function GetScore() {
    var x;
    var time = Date.now();
    ++__unmatched_77;
    g_time = time;
    if (0 < g_playerCells.length) {
      __unmatched_33();
      for (var y = x = 0, i = 0; i < g_playerCells.length; i++) {
        g_playerCells[i].J();
        x += g_playerCells[i].x / g_playerCells.length;
        y += g_playerCells[i].y / g_playerCells.length;
      }
      g_viewX_ = x;
      g_viewY_ = y;
      g_scale_ = g_scale;
      g_viewX = (g_viewX + x) / 2;
      g_viewY = (g_viewY + y) / 2;
    } else {
      g_viewX = (29 * g_viewX + g_viewX_) / 30;
      g_viewY = (29 * g_viewY + g_viewY_) / 30;
      g_scale = (9 * g_scale + g_scale_ * ScaleModifier()) / 10;
    }
    UpdateTree();
    UpdatePos();
    if (!g_showTrails) {
      g_context.clearRect(0, 0, g_ready, noClip);
    }
    if (g_showTrails) {
      g_context.fillStyle = g_showMass ? '#111111' : '#F2FBFF';
      g_context.globalAlpha = 0.05;
      g_context.fillRect(0, 0, g_ready, noClip);
      g_context.globalAlpha = 1;
    } else {
        if (showGrid) {
          g_context.fillStyle = g_showMass ? '#000000' : '#F2FBFF';
          g_context.fillRect(0, 0, g_ready, noClip);
        } else {
          DrawGrid();
        }
    }
    g_cells.sort(function(A, B) {
      return A.size == B.size ? A.id - B.id : A.size - B.size;
    });
    g_context.save();
    g_context.translate(g_ready / 2, noClip / 2);
    g_context.scale(g_scale, g_scale);
    g_context.translate(-g_viewX, -g_viewY);
      
    renderBackground(g_context, g_maxX, g_minX, g_maxY, g_minY);
      
    for (i = 0; i < g_destroyedCells.length; i++) {
      g_destroyedCells[i].s(g_context);
    }
    for (i = 0; i < g_cells.length; i++) {
      g_cells[i].s(g_context);
    }
    if (__unmatched_100) {
      g_linesX = (3 * g_linesX + g_linesY_) / 4;
      g_linesY = (3 * g_linesY + g_linesX_) / 4;
      g_context.save();
      g_context.strokeStyle = '#FFAAAA';
      g_context.lineWidth = 10;
      g_context.lineCap = 'round';
      g_context.lineJoin = 'round';
      g_context.globalAlpha = 0.5;
      g_context.beginPath();
      for (i = 0; i < g_playerCells.length; i++) {
        g_context.moveTo(g_playerCells[i].x, g_playerCells[i].y);
        g_context.lineTo(g_linesX, g_linesY);
      }
      g_context.stroke();
      g_context.restore();
    }
    g_context.restore();
    if (g_leaderboardCanvas && g_leaderboardCanvas.width) {
      g_context.drawImage(g_leaderboardCanvas, g_ready - g_leaderboardCanvas.width - 10, 10);
    }
    g_maxScore = Math.max(g_maxScore, __unmatched_37());
    if (0 != g_maxScore) {
      if (null == g_cachedScore) {
        g_cachedScore = new CachedCanvas(24, '#FFFFFF');
      }
      g_cachedScore.u(Render('score') + ': ' + ~~(g_maxScore / 100));
      y = g_cachedScore.F();
      x = y.width;
      g_context.globalAlpha = 0.2;
      g_context.fillStyle = '#000000';
      g_context.fillRect(10, noClip - 10 - 24 - 10, x + 10, 34);
      g_context.globalAlpha = 1;
      g_context.drawImage(y, 15, noClip - 10 - 24 - 5);
    }
    DrawSplitImage();
    time = Date.now() - time;
    if (time > 1000 / 60) {
      g_pointNumScale -= 0.01;
    } else if (time < 1000 / 65) {
      g_pointNumScale += 0.01;
    }
    if (0.4 > g_pointNumScale) {
      g_pointNumScale = 0.4;
    }
    if (1 < g_pointNumScale) {
      g_pointNumScale = 1;
    }
    time = g_time - __unmatched_79;
    if (!IsConnected() || g_playerCellDestroyed || __unmatched_147) {
      qkeyDown += time / 2000;
      if (1 < qkeyDown) {
        qkeyDown = 1;
      }
    } else {
      qkeyDown -= time / 300;
      if (0 > qkeyDown) {
        qkeyDown = 0;
      }
    }
    if (0 < qkeyDown) {
      g_context.fillStyle = '#000000';
      if (__unmatched_115) {
        g_context.globalAlpha = qkeyDown;
        g_context.fillRect(0, 0, g_ready, noClip);
        if (canvas.complete && canvas.width) {
          if (canvas.width / canvas.height < g_ready / noClip) {
            time = g_ready;
            x = canvas.height * g_ready / canvas.width;
          } else {
            time = canvas.width * noClip / canvas.height;
            x = noClip;
          }
          g_context.drawImage(canvas, (g_ready - time) / 2, (noClip - x) / 2, time, x);
          g_context.globalAlpha = 0.5 * qkeyDown;
          g_context.fillRect(0, 0, g_ready, noClip);
        }
      } else {
        g_context.globalAlpha = 0.5 * qkeyDown;
        g_context.fillRect(0, 0, g_ready, noClip);
      }
      g_context.globalAlpha = 1;
    } else {
      __unmatched_115 = false;
    }
    __unmatched_79 = g_time;
  }
  function DrawGrid() {
    g_context.fillStyle = g_showMass ? '#111111' : '#F2FBFF';
    g_context.fillRect(0, 0, g_ready, noClip);
    g_context.save();
    g_context.strokeStyle = g_showMass ? '#AAAAAA' : '#000000';
    g_context.globalAlpha = 0.2 * g_scale;
    for (var width = g_ready / g_scale, height = noClip / g_scale, g_width = (-g_viewX + width / 2) % 50; g_width < width; g_width += 50) {
      g_context.beginPath();
      g_context.moveTo(g_width * g_scale - 0.5, 0);
      g_context.lineTo(g_width * g_scale - 0.5, height * g_scale);
      g_context.stroke();
    }
    for (g_width = (-g_viewY + height / 2) % 50; g_width < height; g_width += 50) {
      g_context.beginPath();
      g_context.moveTo(0, g_width * g_scale - 0.5);
      g_context.lineTo(width * g_scale, g_width * g_scale - 0.5);
      g_context.stroke();
    }
    g_context.restore();
  }
  function DrawSplitImage() {
    if (g_touchCapable && g_splitImage.width) {
      var size = g_ready / 5;
      g_context.drawImage(g_splitImage, 5, 5, size, size);
    }
  }
  function __unmatched_37() {
    for (var score = 0, i = 0; i < g_playerCells.length; i++) {
      score += g_playerCells[i].m * g_playerCells[i].m;
    }
    return score;
  }
  function UpdateLeaderboard() {
    g_leaderboardCanvas = null;
    if (null != g_scorePartitions || 0 != g_scoreEntries.length) {
      if (null != g_scorePartitions || g_showNames) {
        g_leaderboardCanvas = document.createElement('canvas');
        var context = g_leaderboardCanvas.getContext('2d');
        var height = 60;
        var height = null == g_scorePartitions ? height + 24 * g_scoreEntries.length : height + 180;
        var scale = Math.min(200, 0.3 * g_ready) / 200;
        g_leaderboardCanvas.width = 200 * scale;
        g_leaderboardCanvas.height = height * scale;
        context.scale(scale, scale);
        context.globalAlpha = 0.4;
        context.fillStyle = '#000000';
        context.fillRect(0, 0, 200, height);
        context.globalAlpha = 1;
        context.fillStyle = '#FFFFFF';
        scale = null;
        scale = Render('leaderboard');
        context.font = '30px Ubuntu';
        context.fillText(scale, 100 - context.measureText(scale).width / 2, 40);
        if (null == g_scorePartitions) {
          for (context.font = '20px Ubuntu', height = 0; height < g_scoreEntries.length; ++height) {
            scale = g_scoreEntries[height].name || Render('unnamed_cell');
            if (!g_showNames) {
              scale = Render('unnamed_cell');
            }
            if (-1 != g_playerCellIds.indexOf(g_scoreEntries[height].id)) {
              if (g_playerCells[0].name) {
                scale = g_playerCells[0].name;
              }
              context.fillStyle = '#FFAAAA';
            } else {
              context.fillStyle = '#FFFFFF';
            }
            scale = height + 1 + '. ' + scale;
            context.fillText(scale, 100 - context.measureText(scale).width / 2, 70 + 24 * height);
          }
        } else {
          for (height = scale = 0; height < g_scorePartitions.length; ++height) {
            var end = scale + g_scorePartitions[height] * Math.PI * 2;
            context.fillStyle = g_teamColors[height + 1];
            context.beginPath();
            context.moveTo(100, 140);
            context.arc(100, 140, 80, scale, end, false);
            context.fill();
            scale = end;
          }
        }
      }
    }
  }
  function Node(left, top, width, height, depth) {
    this.P = left;
    this.x = top;
    this.y = width;
    this.g = height;
    this.b = depth;
  }
  function Cell(id, x, y, size, color, name) {
    this.id = id;
    this.o = this.x = x;
    this.p = this.y = y;
    this.n = this.size = size;
    this.color = color;
    this.a = [];
    this.Q();
    this.t(name);
  }
  function __unmatched_41(__unmatched_267) {
    for (__unmatched_267 = __unmatched_267.toString(16); 6 > __unmatched_267.length;) {
      __unmatched_267 = '0' + __unmatched_267;
    }
    return '#' + __unmatched_267;
  }
  function CachedCanvas(size, color, stroke, strokeColor) {
    if (size) {
      this.q = size;
    }
    if (color) {
      this.M = color;
    }
    this.O = !!stroke;
    if (strokeColor) {
      this.r = strokeColor;
    }
  }
  function __unmatched_43(params) {
    for (var size_ = params.length, __unmatched_274, __unmatched_275; 0 < size_;) {
      __unmatched_275 = Math.floor(Math.random() * size_);
      size_--;
      __unmatched_274 = params[size_];
      params[size_] = params[__unmatched_275];
      params[__unmatched_275] = __unmatched_274;
    }
  }
  function __unmatched_44(rect, callback) {
    var __unmatched_278 = '1' == $('#helloContainer').attr('data-has-account-data');
    $('#helloContainer').attr('data-has-account-data', '1');
    if (null == callback && window.localStorage[i_]) {
      var rand = JSON.parse(window.localStorage[i_]);
      rand.xp = rect.e;
      rand.xpNeeded = rect.c;
      rand.level = rect.d;
      window.localStorage[i_] = JSON.stringify(rand);
    }
    if (__unmatched_278) {
      var width = +$('.agario-exp-bar .progress-bar-text').first().text().split('/')[0];
      var __unmatched_278 = +$('.agario-exp-bar .progress-bar-text').first().text().split('/')[1].split(' ')[0];
      var rand = $('.agario-profile-panel .progress-bar-star').first().text();
      if (rand != rect.d) {
        __unmatched_44({
          e: __unmatched_278,
          c: __unmatched_278,
          d: rand
        }, function() {
          $('.agario-profile-panel .progress-bar-star').text(rect.d);
          $('.agario-exp-bar .progress-bar').css('width', '100%');
          $('.progress-bar-star').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.progress-bar-star').removeClass('animated tada');
          });
          setTimeout(function() {
            $('.agario-exp-bar .progress-bar-text').text(rect.c + '/' + rect.c + ' XP');
            __unmatched_44({
              e: 0,
              c: rect.c,
              d: rect.d
            }, function() {
              __unmatched_44(rect, callback);
            });
          }, 1000);
        });
      } else {
        var __unmatched_281 = Date.now();
        var name = function() {
          var deltaX;
          deltaX = (Date.now() - __unmatched_281) / 1000;
          deltaX = 0 > deltaX ? 0 : 1 < deltaX ? 1 : deltaX;
          deltaX = deltaX * deltaX * (3 - 2 * deltaX);
          $('.agario-exp-bar .progress-bar-text').text(~~(width + (rect.e - width) * deltaX) + '/' + rect.c + ' XP');
          $('.agario-exp-bar .progress-bar').css('width', (88 * (width + (rect.e - width) * deltaX) / rect.c).toFixed(2) + '%');
          if (1 > deltaX) {
            window.requestAnimationFrame(name);
          } else if (callback) {
            callback();
          }
        };
        window.requestAnimationFrame(name);
      }
    } else {
      $('.agario-profile-panel .progress-bar-star').text(rect.d);
      $('.agario-exp-bar .progress-bar-text').text(rect.e + '/' + rect.c + ' XP');
      $('.agario-exp-bar .progress-bar').css('width', (88 * rect.e / rect.c).toFixed(2) + '%');
      if (callback) {
        callback();
      }
    }
  }
  function __unmatched_45(__unmatched_284) {
    if ('string' == typeof __unmatched_284) {
      __unmatched_284 = JSON.parse(__unmatched_284);
    }
    if (Date.now() + 1800000 > __unmatched_284.expires) {
      $('#helloContainer').attr('data-logged-in', '0');
    } else {
      window.localStorage[i_] = JSON.stringify(__unmatched_284);
      __unmatched_110 = __unmatched_284.authToken;
      $('.agario-profile-name').text(__unmatched_284.name);
      RefreshAds();
      __unmatched_44({
        e: __unmatched_284.xp,
        c: __unmatched_284.xpNeeded,
        d: __unmatched_284.level
      });
      $('#helloContainer').attr('data-logged-in', '1');
    }
  }
  function __unmatched_46(data) {
    data = data.split('\n');
    __unmatched_45({
      name: data[0],
      fbid: data[1],
      authToken: data[2],
      expires: 1000 * +data[3],
      level: +data[4],
      xp: +data[5],
      xpNeeded: +data[6]
    });
  }
  function UpdateScale(__unmatched_286) {
    if ('connected' == __unmatched_286.status) {
      var y = __unmatched_286.authResponse.accessToken;
      console.log(y);
      window.FB.api('/me/picture?width=180&height=180', function(__unmatched_288) {
        window.localStorage.fbPictureCache = __unmatched_288.data.url;
        $('.agario-profile-picture').attr('src', __unmatched_288.data.url);
      });
      $('#helloContainer').attr('data-logged-in', '1');
      if (null != __unmatched_110) {
        $.ajax(g_protocol + 'checkToken', {
          error: function() {
            __unmatched_110 = null;
            UpdateScale(__unmatched_286);
          },
          success: function(__unmatched_289) {
            __unmatched_289 = __unmatched_289.split('\n');
            __unmatched_44({
              d: +__unmatched_289[0],
              e: +__unmatched_289[1],
              c: +__unmatched_289[2]
            });
          },
          dataType: 'text',
          method: 'POST',
          cache: false,
          crossDomain: true,
          data: __unmatched_110
        });
      } else {
        $.ajax(g_protocol + 'facebookLogin', {
          error: function() {
            __unmatched_110 = null;
            $('#helloContainer').attr('data-logged-in', '0');
          },
          success: __unmatched_46,
          dataType: 'text',
          method: 'POST',
          cache: false,
          crossDomain: true,
          data: y
        });
      }
    }
  }
  function RenderLoop(x) {
    n(':party');
    $('#helloContainer').attr('data-party-state', '4');
    x = decodeURIComponent(x).replace(/.*#/gim, '');
    __unmatched_49('#' + window.encodeURIComponent(x));
    $.ajax(g_protocol + 'getToken', {
      error: function() {
        $('#helloContainer').attr('data-party-state', '6');
      },
      success: function(quick) {
        quick = quick.split('\n');
        $('.partyToken').val('agar.io/#' + window.encodeURIComponent(x));
        $('#helloContainer').attr('data-party-state', '5');
        n(':party');
        Connect('ws://' + quick[0], x);
      },
      dataType: 'text',
      method: 'POST',
      cache: false,
      crossDomain: true,
      data: x
    });
  }
  function __unmatched_49(item) {
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, window.document.title, item);
    }
  }
  function __unmatched_50(__unmatched_293, __unmatched_294) {
    var playerOwned = -1 != g_playerCellIds.indexOf(__unmatched_293.id);
    var __unmatched_296 = -1 != g_playerCellIds.indexOf(__unmatched_294.id);
    var __unmatched_297 = 30 > __unmatched_294.size;
    if (playerOwned && __unmatched_297) {
      ++__unmatched_145;
    }
    if (!(__unmatched_297 || !playerOwned || __unmatched_296)) {
      ++__unmatched_152;
    }
  }
  function __unmatched_51(__unmatched_298) {
    __unmatched_298 = ~~__unmatched_298;
    var color = (__unmatched_298 % 60).toString();
    __unmatched_298 = (~~(__unmatched_298 / 60)).toString();
    if (2 > color.length) {
      color = '0' + color;
    }
    return __unmatched_298 + ':' + color;
  }
  function __unmatched_52() {
    if (null == g_scoreEntries) {
      return 0;
    }
    for (var i = 0; i < g_scoreEntries.length; ++i) {
      if (-1 != g_playerCellIds.indexOf(g_scoreEntries[i].id)) {
        return i + 1;
      }
    }
    return 0;
  }
  function ShowOverlay() {
    $('.stats-food-eaten').text(__unmatched_145);
    $('.stats-time-alive').text(__unmatched_51((__unmatched_150 - __unmatched_149) / 1000));
    $('.stats-leaderboard-time').text(__unmatched_51(__unmatched_151));
    $('.stats-highest-mass').text(~~(g_maxScore / 100));
    $('.stats-cells-eaten').text(__unmatched_152);
    $('.stats-top-position').text(0 == g_mode ? ':(' : g_mode);
    var g_height = document.getElementById('statsGraph');
    if (g_height) {
      var pointsAcc = g_height.getContext('2d');
      var scale = g_height.width;
      var g_height = g_height.height;
      pointsAcc.clearRect(0, 0, scale, g_height);
      if (2 < points.length) {
        for (var maxSize = 200, i = 0; i < points.length; i++) {
          maxSize = Math.max(points[i], maxSize);
        }
        pointsAcc.lineWidth = 3;
        pointsAcc.lineCap = 'round';
        pointsAcc.lineJoin = 'round';
        pointsAcc.strokeStyle = __unmatched_146;
        pointsAcc.fillStyle = __unmatched_146;
        pointsAcc.beginPath();
        pointsAcc.moveTo(0, g_height - points[0] / maxSize * (g_height - 10) + 10);
        for (i = 1; i < points.length; i += Math.max(~~(points.length / scale), 1)) {
          for (var __unmatched_306 = i / (points.length - 1) * scale, thisNode = [], __unmatched_308 = -20; 20 >= __unmatched_308; ++__unmatched_308) {
            if (!(0 > i + __unmatched_308 || i + __unmatched_308 >= points.length)) {
              thisNode.push(points[i + __unmatched_308]);
            }
          }
          thisNode = thisNode.reduce(function(__unmatched_309, __unmatched_310) {
              return __unmatched_309 + __unmatched_310;
            }) / thisNode.length / maxSize;
          pointsAcc.lineTo(__unmatched_306, g_height - thisNode * (g_height - 10) + 10);
        }
        pointsAcc.stroke();
        pointsAcc.globalAlpha = 0.5;
        pointsAcc.lineTo(scale, g_height);
        pointsAcc.lineTo(0, g_height);
        pointsAcc.fill();
        pointsAcc.globalAlpha = 1;
      }
    }
  }
  if (!window.agarioNoInit) {
    var __unmatched_54 = window.location.protocol;
    var g_secure = 'https:' == __unmatched_54;
    var g_protocol = __unmatched_54 + '//m.agar.io/';
    var __unmatched_57 = window.navigator.userAgent;
    if (-1 != __unmatched_57.indexOf('Android')) {
      if (window.ga) {
        window.ga('send', 'event', 'MobileRedirect', 'PlayStore');
      }
      setTimeout(function() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.miniclip.agar.io';
      }, 1000);
    } else if (-1 != __unmatched_57.indexOf('iPhone') || -1 != __unmatched_57.indexOf('iPad') || -1 != __unmatched_57.indexOf('iPod')) {
      if (window.ga) {
        window.ga('send', 'event', 'MobileRedirect', 'AppStore');
      }
      setTimeout(function() {
        window.location.href = 'https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp';
      }, 1000);
    } else {
      var g_canvas_;
      var g_context;
      var g_canvas;
      var g_ready;
      var noClip;
      var g_pointTree = null;
      var g_socket = null;
      var g_viewX = 0;
      var g_viewY = 0;
      var g_playerCellIds = [];
      var g_playerCells = [];
      var g_cellsById = {};
      var g_cells = [];
      var g_destroyedCells = [];
      var g_scoreEntries = [];
      var g_mouseX = 0;
      var g_mouseY = 0;
      var g_moveX = -1;
      var g_moveY = -1;
      var __unmatched_77 = 0;
      var g_time = 0;
      var __unmatched_79 = 0;
      var g_nick = null;
      var g_minX = 0;
      var g_minY = 0;
      var g_maxX = 10000;
      var g_maxY = 10000;
      var g_scale = 1;
      var g_region = null;
      var g_showSkins = true;
      var g_showNames = true;
      var g_noColors = false;
      var __unmatched_90 = false;
      var g_maxScore = 0;
      var g_showMass = true;
      var g_darkTheme = true;
      var g_viewX_ = g_viewX = ~~((g_minX + g_maxX) / 2);
      var g_viewY_ = g_viewY = ~~((g_minY + g_maxY) / 2);
      var g_scale_ = 1;
      var __unmatched_97 = '';
      var g_scorePartitions = null;
      var g_drawLines = false;
      var __unmatched_100 = false;
      var g_linesY_ = 0;
      var g_linesX_ = 0;
      var g_linesX = 0;
      var g_linesY = 0;
      var g_ABGroup = 0;
      var g_teamColors = [
        '#333333',
        '#FF3333',
        '#33FF33',
        '#3333FF'
      ];
      var g_showTrails = false;
      var g_connectSuccessful = false;
      var __unmatched_109 = 0;
      var __unmatched_110 = null;
      var g_zoom = 1;
      var qkeyDown = 1;
      var g_playerCellDestroyed = false;
      var __unmatched_114 = 0;
      var __unmatched_115 = true;
      var __unmatched_116 = {};
      (function() {
        var cached = window.location.search;
        if ('?' == cached.charAt(0)) {
          cached = cached.slice(1);
        }
        for (var cached = cached.split('&'), i = 0; i < cached.length; i++) {
          var parts = cached[i].split('=');
          __unmatched_116[parts[0]] = parts[1];
        }
      }());
      var canvas = new Image();
      canvas.src = 'img/background.png';
      var g_touchCapable = 'ontouchstart' in window && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
      var g_splitImage = new Image();
      g_splitImage.src = 'img/split.png';
      var canvasTest = document.createElement('canvas');
      if ('undefined' == typeof console || 'undefined' == typeof DataView || 'undefined' == typeof WebSocket || null == canvasTest || null == canvasTest.getContext || null == window.localStorage) {
        alert('You browser does not support this game, we recommend you to use Firefox to play this');
      } else {
        var g_regionLabels = null;
        window.setNick = function(__unmatched_314) {
          if (window.ga) {
            window.ga('send', 'event', 'Nick', __unmatched_314.toLowerCase());
          }
          HideOverlay();
          g_nick = __unmatched_314;
          SendNick();
          g_maxScore = 0;
        };
        window.setRegion = SetRegion;
        var __unmatched_122 = true;
        window.setSkins = function(val) {
          g_showSkins = val;
        };
        window.setNames = function(val) {
          g_showNames = val;
        };
        window.setDarkTheme = function(val) {
          g_showMass = val;
        };
        window.setColors = function(val) {
          g_noColors = val;
        };
        window.setShowMass = function(val) {
          g_darkTheme = val;
        };
        window.spectate = function() {
          g_nick = null;
          SendCmd(1);
          HideOverlay();
        };
        window.setGameMode = function(__unmatched_320) {
          if (__unmatched_320 != __unmatched_97) {
            if (':party' == __unmatched_97) {
              $('#helloContainer').attr('data-party-state', '0');
            }
            n(__unmatched_320);
            if (':party' != __unmatched_320) {
              Start();
            }
          }
        };
        window.setAcid = function(val) {
          g_showTrails = val;
        };
        if (null != window.localStorage) {
          if (null == window.localStorage.AB9) {
            window.localStorage.AB9 = 0 + ~~(100 * Math.random());
          }
          g_ABGroup = +window.localStorage.AB9;
          window.ABGroup = g_ABGroup;
        }
        $.get(__unmatched_54 + '//gc.agar.io', function(code) {
          var __unmatched_323 = code.split(' ');
          code = __unmatched_323[0];
          __unmatched_323 = __unmatched_323[1] || '';
          if (-1 == ['UA'].indexOf(code)) {
            g_skinNamesA.push('ussr');
          }
          if (g_regionsByCC.hasOwnProperty(code)) {
            if ('string' == typeof g_regionsByCC[code]) {
              if (!g_region) {
                SetRegion(g_regionsByCC[code]);
              } else if (g_regionsByCC[code].hasOwnProperty(__unmatched_323)) {
                if (!g_region) {
                  SetRegion(g_regionsByCC[code][__unmatched_323]);
                }
              }
            }
          }
        }, 'text');
        var g_canRefreshAds = true;
        var g_refreshAdsCooldown = 0;
        var g_regionsByCC = {
          AF: 'JP-Tokyo',
          AX: 'EU-London',
          AL: 'EU-London',
          DZ: 'EU-London',
          AS: 'SG-Singapore',
          AD: 'EU-London',
          AO: 'EU-London',
          AI: 'US-Atlanta',
          AG: 'US-Atlanta',
          AR: 'BR-Brazil',
          AM: 'JP-Tokyo',
          AW: 'US-Atlanta',
          AU: 'SG-Singapore',
          AT: 'EU-London',
          AZ: 'JP-Tokyo',
          BS: 'US-Atlanta',
          BH: 'JP-Tokyo',
          BD: 'JP-Tokyo',
          BB: 'US-Atlanta',
          BY: 'EU-London',
          BE: 'EU-London',
          BZ: 'US-Atlanta',
          BJ: 'EU-London',
          BM: 'US-Atlanta',
          BT: 'JP-Tokyo',
          BO: 'BR-Brazil',
          BQ: 'US-Atlanta',
          BA: 'EU-London',
          BW: 'EU-London',
          BR: 'BR-Brazil',
          IO: 'JP-Tokyo',
          VG: 'US-Atlanta',
          BN: 'JP-Tokyo',
          BG: 'EU-London',
          BF: 'EU-London',
          BI: 'EU-London',
          KH: 'JP-Tokyo',
          CM: 'EU-London',
          CA: 'US-Atlanta',
          CV: 'EU-London',
          KY: 'US-Atlanta',
          CF: 'EU-London',
          TD: 'EU-London',
          CL: 'BR-Brazil',
          CN: 'CN-China',
          CX: 'JP-Tokyo',
          CC: 'JP-Tokyo',
          CO: 'BR-Brazil',
          KM: 'EU-London',
          CD: 'EU-London',
          CG: 'EU-London',
          CK: 'SG-Singapore',
          CR: 'US-Atlanta',
          CI: 'EU-London',
          HR: 'EU-London',
          CU: 'US-Atlanta',
          CW: 'US-Atlanta',
          CY: 'JP-Tokyo',
          CZ: 'EU-London',
          DK: 'EU-London',
          DJ: 'EU-London',
          DM: 'US-Atlanta',
          DO: 'US-Atlanta',
          EC: 'BR-Brazil',
          EG: 'EU-London',
          SV: 'US-Atlanta',
          GQ: 'EU-London',
          ER: 'EU-London',
          EE: 'EU-London',
          ET: 'EU-London',
          FO: 'EU-London',
          FK: 'BR-Brazil',
          FJ: 'SG-Singapore',
          FI: 'EU-London',
          FR: 'EU-London',
          GF: 'BR-Brazil',
          PF: 'SG-Singapore',
          GA: 'EU-London',
          GM: 'EU-London',
          GE: 'JP-Tokyo',
          DE: 'EU-London',
          GH: 'EU-London',
          GI: 'EU-London',
          GR: 'EU-London',
          GL: 'US-Atlanta',
          GD: 'US-Atlanta',
          GP: 'US-Atlanta',
          GU: 'SG-Singapore',
          GT: 'US-Atlanta',
          GG: 'EU-London',
          GN: 'EU-London',
          GW: 'EU-London',
          GY: 'BR-Brazil',
          HT: 'US-Atlanta',
          VA: 'EU-London',
          HN: 'US-Atlanta',
          HK: 'JP-Tokyo',
          HU: 'EU-London',
          IS: 'EU-London',
          IN: 'JP-Tokyo',
          ID: 'JP-Tokyo',
          IR: 'JP-Tokyo',
          IQ: 'JP-Tokyo',
          IE: 'EU-London',
          IM: 'EU-London',
          IL: 'JP-Tokyo',
          IT: 'EU-London',
          JM: 'US-Atlanta',
          JP: 'JP-Tokyo',
          JE: 'EU-London',
          JO: 'JP-Tokyo',
          KZ: 'JP-Tokyo',
          KE: 'EU-London',
          KI: 'SG-Singapore',
          KP: 'JP-Tokyo',
          KR: 'JP-Tokyo',
          KW: 'JP-Tokyo',
          KG: 'JP-Tokyo',
          LA: 'JP-Tokyo',
          LV: 'EU-London',
          LB: 'JP-Tokyo',
          LS: 'EU-London',
          LR: 'EU-London',
          LY: 'EU-London',
          LI: 'EU-London',
          LT: 'EU-London',
          LU: 'EU-London',
          MO: 'JP-Tokyo',
          MK: 'EU-London',
          MG: 'EU-London',
          MW: 'EU-London',
          MY: 'JP-Tokyo',
          MV: 'JP-Tokyo',
          ML: 'EU-London',
          MT: 'EU-London',
          MH: 'SG-Singapore',
          MQ: 'US-Atlanta',
          MR: 'EU-London',
          MU: 'EU-London',
          YT: 'EU-London',
          MX: 'US-Atlanta',
          FM: 'SG-Singapore',
          MD: 'EU-London',
          MC: 'EU-London',
          MN: 'JP-Tokyo',
          ME: 'EU-London',
          MS: 'US-Atlanta',
          MA: 'EU-London',
          MZ: 'EU-London',
          MM: 'JP-Tokyo',
          NA: 'EU-London',
          NR: 'SG-Singapore',
          NP: 'JP-Tokyo',
          NL: 'EU-London',
          NC: 'SG-Singapore',
          NZ: 'SG-Singapore',
          NI: 'US-Atlanta',
          NE: 'EU-London',
          NG: 'EU-London',
          NU: 'SG-Singapore',
          NF: 'SG-Singapore',
          MP: 'SG-Singapore',
          NO: 'EU-London',
          OM: 'JP-Tokyo',
          PK: 'JP-Tokyo',
          PW: 'SG-Singapore',
          PS: 'JP-Tokyo',
          PA: 'US-Atlanta',
          PG: 'SG-Singapore',
          PY: 'BR-Brazil',
          PE: 'BR-Brazil',
          PH: 'JP-Tokyo',
          PN: 'SG-Singapore',
          PL: 'EU-London',
          PT: 'EU-London',
          PR: 'US-Atlanta',
          QA: 'JP-Tokyo',
          RE: 'EU-London',
          RO: 'EU-London',
          RU: 'RU-Russia',
          RW: 'EU-London',
          BL: 'US-Atlanta',
          SH: 'EU-London',
          KN: 'US-Atlanta',
          LC: 'US-Atlanta',
          MF: 'US-Atlanta',
          PM: 'US-Atlanta',
          VC: 'US-Atlanta',
          WS: 'SG-Singapore',
          SM: 'EU-London',
          ST: 'EU-London',
          SA: 'EU-London',
          SN: 'EU-London',
          RS: 'EU-London',
          SC: 'EU-London',
          SL: 'EU-London',
          SG: 'JP-Tokyo',
          SX: 'US-Atlanta',
          SK: 'EU-London',
          SI: 'EU-London',
          SB: 'SG-Singapore',
          SO: 'EU-London',
          ZA: 'EU-London',
          SS: 'EU-London',
          ES: 'EU-London',
          LK: 'JP-Tokyo',
          SD: 'EU-London',
          SR: 'BR-Brazil',
          SJ: 'EU-London',
          SZ: 'EU-London',
          SE: 'EU-London',
          CH: 'EU-London',
          SY: 'EU-London',
          TW: 'JP-Tokyo',
          TJ: 'JP-Tokyo',
          TZ: 'EU-London',
          TH: 'JP-Tokyo',
          TL: 'JP-Tokyo',
          TG: 'EU-London',
          TK: 'SG-Singapore',
          TO: 'SG-Singapore',
          TT: 'US-Atlanta',
          TN: 'EU-London',
          TR: 'TK-Turkey',
          TM: 'JP-Tokyo',
          TC: 'US-Atlanta',
          TV: 'SG-Singapore',
          UG: 'EU-London',
          UA: 'EU-London',
          AE: 'EU-London',
          GB: 'EU-London',
          US: 'US-Atlanta',
          UM: 'SG-Singapore',
          VI: 'US-Atlanta',
          UY: 'BR-Brazil',
          UZ: 'JP-Tokyo',
          VU: 'SG-Singapore',
          VE: 'BR-Brazil',
          VN: 'JP-Tokyo',
          WF: 'SG-Singapore',
          EH: 'EU-London',
          YE: 'JP-Tokyo',
          ZM: 'EU-London',
          ZW: 'EU-London'
        };
        var __unmatched_126 = null;
        window.connect = Connect;
        var g_retryTimeout = 500;
        var __unmatched_128 = null;
        var __unmatched_129 = 0;
        var g_lastMoveY = -1;
        var g_lastMoveX = -1;
        window.refreshPlayerInfo = function() {
          SendCmd(253);
        };
        var g_leaderboardCanvas = null;
        var g_pointNumScale = 1;
        var g_cachedScore = null;
        var __unmatched_135 = function() {
          var sizeRatio = Date.now();
          var maxItems = 1000 / 60;
          return function() {
            window.requestAnimationFrame(__unmatched_135);
            var x = Date.now();
            var step = x - sizeRatio;
            if (step > maxItems) {
              sizeRatio = x - step % maxItems;
              if (!IsConnected() || 240 > Date.now() - __unmatched_109) {
                GetScore();
              } else {
                console.warn('Skipping draw');
              }
              __unmatched_143();
            }
          };
        }();
        var g_skinCache = {};
        var g_skinNamesA = 'poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump'.split(';');
        var __unmatched_138 = '8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump'.split(';');
        var node = {};
        Node.prototype = {
          P: null,
          x: 0,
          y: 0,
          g: 0,
          b: 0
        };
        Cell.prototype = {
          id: 0,
          a: null,
          name: null,
          k: null,
          I: null,
          x: 0,
          y: 0,
          size: 0,
          o: 0,
          p: 0,
          n: 0,
          C: 0,
          D: 0,
          m: 0,
          T: 0,
          K: 0,
          W: 0,
          A: false,
          f: false,
          j: false,
          L: true,
          S: 0,
          V: null,
          R: function() {
            var i;
            for (i = 0; i < g_cells.length; i++) {
              if (g_cells[i] == this) {
                g_cells.splice(i, 1);
                break;
              }
            }
            delete g_cellsById[this.id];
            i = g_playerCells.indexOf(this);
            if (-1 != i) {
              __unmatched_90 = true;
              g_playerCells.splice(i, 1);
            }
            i = g_playerCellIds.indexOf(this.id);
            if (-1 != i) {
              g_playerCellIds.splice(i, 1);
            }
            this.A = true;
            if (0 < this.S) {
              g_destroyedCells.push(this);
            }
          },
          i: function() {
            return Math.max(~~(0.3 * this.size), 24);
          },
          t: function(val) {
            if (this.name = val) {
              if (null == this.k) {
                this.k = new CachedCanvas(this.i(), '#FFFFFF', true, '#000000');
              } else {
                this.k.G(this.i());
              }
              this.k.u(this.name);
            }
          },
          Q: function() {
            for (var num = this.B(); this.a.length > num;) {
              var i = ~~(Math.random() * this.a.length);
              this.a.splice(i, 1);
            }
            for (0 == this.a.length && 0 < num && this.a.push(new Node(this, this.x, this.y, this.size, Math.random() - 0.5)); this.a.length < num;) {
              i = ~~(Math.random() * this.a.length);
              i = this.a[i];
              this.a.push(new Node(this, i.x, i.y, i.g, i.b));
            }
          },
          B: function() {
            var num = 10;
            if (20 > this.size) {
              num = 0;
            }
            if (this.f) {
              num = 30;
            }
            var size = this.size;
            if (!this.f) {
              size *= g_scale;
            }
            size *= g_pointNumScale;
            if (this.T & 32) {
              size *= 0.25;
            }
            return ~~Math.max(size, num);
          },
          da: function() {
            this.Q();
            for (var cell = this.a, num = cell.length, i = 0; i < num; ++i) {
              var prevAcc = cell[(i - 1 + num) % num].b;
              var nextAcc = cell[(i + 1) % num].b;
              cell[i].b += (Math.random() - 0.5) * (this.j ? 3 : 1);
              cell[i].b *= 0.7;
              if (10 < cell[i].b) {
                cell[i].b = 10;
              }
              if (-10 > cell[i].b) {
                cell[i].b = -10;
              }
              cell[i].b = (prevAcc + nextAcc + 8 * cell[i].b) / 10;
            }
            for (var thisCell = this, roll = this.f ? 0 : (this.id / 1000 + g_time / 10000) % (2 * Math.PI), i = 0; i < num; ++i) {
              var size = cell[i].g;
              var prevAcc = cell[(i - 1 + num) % num].g;
              var nextAcc = cell[(i + 1) % num].g;
              if (15 < this.size && null != g_pointTree && 20 < this.size * g_scale && 0 < this.id) {
                var reduce = false;
                var x = cell[i].x;
                var y = cell[i].y;
                g_pointTree.ea(x - 5, y - 5, 10, 10, function(rect) {
                  if (rect.P != thisCell && 25 > (x - rect.x) * (x - rect.x) + (y - rect.y) * (y - rect.y)) {
                    reduce = true;
                  }
                });
                if (!reduce && (cell[i].x < g_minX || cell[i].y < g_minY || cell[i].x > g_maxX || cell[i].y > g_maxY)) {
                  reduce = true;
                }
                if (reduce) {
                  if (0 < cell[i].b) {
                    cell[i].b = 0;
                  }
                  cell[i].b -= 1;
                }
              }
              size += cell[i].b;
              if (0 > size) {
                size = 0;
              }
              size = this.j ? (19 * size + this.size) / 20 : (12 * size + this.size) / 13;
              cell[i].g = (prevAcc + nextAcc + 8 * size) / 10;
              prevAcc = 2 * Math.PI / num;
              nextAcc = this.a[i].g;
              if (this.f && 0 == i % 2) {
                nextAcc += 5;
              }
              cell[i].x = this.x + Math.cos(prevAcc * i + roll) * nextAcc;
              cell[i].y = this.y + Math.sin(prevAcc * i + roll) * nextAcc;
            }
          },
          J: function() {
            if (0 >= this.id) {
              return 1;
            }
            var posRatio;
            posRatio = (g_time - this.K) / 120;
            posRatio = 0 > posRatio ? 0 : 1 < posRatio ? 1 : posRatio;
            var sizeRatio = 0 > posRatio ? 0 : 1 < posRatio ? 1 : posRatio;
            this.i();
            if (this.A && 1 <= sizeRatio) {
              var i = g_destroyedCells.indexOf(this);
              if (-1 != i) {
                g_destroyedCells.splice(i, 1);
              }
            }
            this.x = posRatio * (this.C - this.o) + this.o;
            this.y = posRatio * (this.D - this.p) + this.p;
            this.size = sizeRatio * (this.m - this.n) + this.n;
            return sizeRatio;
          },
          H: function() {
            return 0 >= this.id ? true : this.x + this.size + 40 < g_viewX - g_ready / 2 / g_scale || this.y + this.size + 40 < g_viewY - noClip / 2 / g_scale || this.x - this.size - 40 > g_viewX + g_ready / 2 / g_scale || this.y - this.size - 40 > g_viewY + noClip / 2 / g_scale ? false : true;
          },
          s: function(context) {
            if (this.H()) {
              ++this.S;
              var isSimpleDrawing = 0 < this.id && !this.f && !this.j && 0.4 > g_scale;
              if (5 > this.B() && 0 < this.id) {
                isSimpleDrawing = true;
              }
              if (this.L && !isSimpleDrawing) {
                for (var text = 0; text < this.a.length; text++) {
                  this.a[text].g = this.size;
                }
              }
              this.L = isSimpleDrawing;
              context.save();
              this.W = g_time;
              text = this.J();
              if (this.A) {
                context.globalAlpha *= 1 - text;
              }
              context.lineWidth = 10;
              context.lineCap = 'round';
              context.lineJoin = this.f ? 'miter' : 'round';
              if (g_noColors) {
                context.fillStyle = '#FFFFFF';
                context.strokeStyle = '#AAAAAA';
              } else {
                context.fillStyle = this.color;
                context.strokeStyle = this.color;
              }
              if (isSimpleDrawing) {
                context.beginPath();
                context.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
              } else {
                this.da();
                context.beginPath();
                var num = this.B();
                context.moveTo(this.a[0].x, this.a[0].y);
                for (text = 1; text <= num; ++text) {
                  var skin = text % num;
                  context.lineTo(this.a[skin].x, this.a[skin].y);
                }
              }
              context.closePath();
              text = this.name.toLowerCase();
              if (!this.j && g_showSkins && ':teams' != __unmatched_97) {
                num = this.V;
                if (null == num) {
                  num = null;
                } else if (':' == num[0]) {
                  if (!node.hasOwnProperty(num)) {
                    node[num] = new Image();
                    node[num].src = num.slice(1);
                  }
                  num = 0 != node[num].width && node[num].complete ? node[num] : null;
                } else {
                  num = null;
                }
                if (!num) {
                  if (-1 != g_skinNamesA.indexOf(text)) {
                    if (!g_skinCache.hasOwnProperty(text)) {
                      g_skinCache[text] = new Image();
                      g_skinCache[text].src = 'skins/' + text + '.png';
                    }
                    num = 0 != g_skinCache[text].width && g_skinCache[text].complete ? g_skinCache[text] : null;
                  } else {
                    num = null;
                  }
                }
              } else {
                num = null;
              }
              skin = num;
              if (!isSimpleDrawing) {
                context.stroke();
              }
              context.fill();
              if (null != skin) {
                context.save();
                context.clip();
                context.drawImage(skin, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
                context.restore();
              }
              if ((g_noColors || 15 < this.size) && !isSimpleDrawing) {
                context.strokeStyle = '#000000';
                context.globalAlpha *= 0.1;
                context.stroke();
              }
              context.globalAlpha = 1;
              num = -1 != g_playerCells.indexOf(this);
              isSimpleDrawing = ~~this.y;
              if (0 != this.id && (g_showNames || num) && this.name && this.k && (null == skin || -1 == __unmatched_138.indexOf(text))) {
                skin = this.k;
                skin.u(this.name);
                skin.G(this.i());
                text = 0 >= this.id ? 1 : Math.ceil(10 * g_scale) / 10;
                skin.U(text);
                var skin = skin.F();
                var g_width = ~~(skin.width / text);
                var g_height = ~~(skin.height / text);
                context.drawImage(skin, ~~this.x - ~~(g_width / 2), isSimpleDrawing - ~~(g_height / 2), g_width, g_height);
                isSimpleDrawing += skin.height / 2 / text + 4;
              }
              if (40 < this.size) {
                if (null == this.I) {
                  this.I = new CachedCanvas(this.i() / 2, '#FFFFFF', true, '#000000');
                }
                num = this.I;
                num.G(this.i() / 1.2);
                num.u(~~(this.size * this.size / 100));
                text = Math.ceil(10 * g_scale) / 10;
                num.U(text);
                skin = num.F();
                g_width = ~~(skin.width / text);
                g_height = ~~(skin.height / text);
                context.drawImage(skin, ~~this.x - ~~(g_width / 2), isSimpleDrawing - ~~(g_height / 2), g_width, g_height);
              }
              context.restore();
            }
          }
        };
        CachedCanvas.prototype = {
          w: '',
          M: '#000000',
          O: false,
          r: '#000000',
          q: 16,
          l: null,
          N: null,
          h: false,
          v: 1,
          G: function(val) {
            if (this.q != val) {
              this.q = val;
              this.h = true;
            }
          },
          U: function(val) {
            if (this.v != val) {
              this.v = val;
              this.h = true;
            }
          },
          setStrokeColor: function(val) {
            if (this.r != val) {
              this.r = val;
              this.h = true;
            }
          },
          u: function(val) {
            if (val != this.w) {
              this.w = val;
              this.h = true;
            }
          },
          F: function() {
            if (null == this.l) {
              this.l = document.createElement('canvas');
              this.N = this.l.getContext('2d');
            }
            if (this.h) {
              this.h = false;
              var items = this.l;
              var context = this.N;
              var value = this.w;
              var scale = this.v;
              var size = this.q;
              var font = size + 'px Ubuntu';
              context.font = font;
              var extra = ~~(0.2 * size);
              items.width = (context.measureText(value).width + 6) * scale;
              items.height = (size + extra) * scale;
              context.font = font;
              context.scale(scale, scale);
              context.globalAlpha = 1;
              context.lineWidth = 3;
              context.strokeStyle = this.r;
              context.fillStyle = this.M;
              if (this.O) {
                context.strokeText(value, 3, size - extra / 2);
              }
              context.fillText(value, 3, size - extra / 2);
            }
            return this.l;
          }
        };
        if (!Date.now) {
          Date.now = function() {
            return new Date().getTime();
          };
        }
        (function() {
          for (var g_skinNamesB = [
                'ms',
                'moz',
                'webkit',
                'o'
              ], i = 0; i < g_skinNamesB.length && !window.requestAnimationFrame; ++i) {
            window.requestAnimationFrame = window[g_skinNamesB[i] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[g_skinNamesB[i] + 'CancelAnimationFrame'] || window[g_skinNamesB[i] + 'CancelRequestAnimationFrame'];
          }
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(rect) {
              return setTimeout(rect, 1000 / 60);
            };
            window.cancelAnimationFrame = function(item) {
              clearTimeout(item);
            };
          }
        }());
        var QTreeFactory = {
          X: function(item) {
            function __unmatched_372(val) {
              if (val < __unmatched_374) {
                val = __unmatched_374;
              }
              if (val > __unmatched_376) {
                val = __unmatched_376;
              }
              return ~~((val - __unmatched_374) / 32);
            }
            function __unmatched_373(__unmatched_382) {
              if (__unmatched_382 < __unmatched_375) {
                __unmatched_382 = __unmatched_375;
              }
              if (__unmatched_382 > __unmatched_377) {
                __unmatched_382 = __unmatched_377;
              }
              return ~~((__unmatched_382 - __unmatched_375) / 32);
            }
            var __unmatched_374 = item.ba;
            var __unmatched_375 = item.ca;
            var __unmatched_376 = item.Z;
            var __unmatched_377 = item.$;
            var depth = ~~((__unmatched_376 - __unmatched_374) / 32) + 1;
            var maxDepth = ~~((__unmatched_377 - __unmatched_375) / 32) + 1;
            var point = Array(depth * maxDepth);
            return {
              Y: function(__unmatched_383) {
                var __unmatched_384 = __unmatched_372(__unmatched_383.x) + __unmatched_373(__unmatched_383.y) * depth;
                if (null == point[__unmatched_384]) {
                  point[__unmatched_384] = __unmatched_383;
                } else if (Array.isArray(point[__unmatched_384])) {
                  point[__unmatched_384].push(__unmatched_383);
                } else {
                  point[__unmatched_384] = [
                    point[__unmatched_384],
                    __unmatched_383
                  ];
                }
              },
              ea: function(__unmatched_385, __unmatched_386, val, __unmatched_388, callback) {
                var __unmatched_390 = __unmatched_372(__unmatched_385);
                var __unmatched_391 = __unmatched_373(__unmatched_386);
                __unmatched_385 = __unmatched_372(__unmatched_385 + val);
                __unmatched_386 = __unmatched_373(__unmatched_386 + __unmatched_388);
                if (0 > __unmatched_390 || __unmatched_390 >= depth || 0 > __unmatched_391 || __unmatched_391 >= maxDepth) {
                  debugger;
                }
                for (; __unmatched_391 <= __unmatched_386; ++__unmatched_391) {
                  for (__unmatched_388 = __unmatched_390; __unmatched_388 <= __unmatched_385; ++__unmatched_388) {
                    if (val = point[__unmatched_388 + __unmatched_391 * depth], null != val) {
                      if (Array.isArray(val)) {
                        for (var i = 0; i < val.length; i++) {
                          callback(val[i]);
                        }
                      } else {
                        callback(val);
                      }
                    }
                  }
                }
              }
            };
          }
        };
        var __unmatched_141 = function() {
          var __unmatched_393 = new Cell(0, 0, 0, 32, '#ED1C24', '');
          var __unmatched_394 = document.createElement('canvas');
          __unmatched_394.width = 32;
          __unmatched_394.height = 32;
          var rect = __unmatched_394.getContext('2d');
          return function() {
            if (0 < g_playerCells.length) {
              __unmatched_393.color = g_playerCells[0].color;
              __unmatched_393.t(g_playerCells[0].name);
            }
            rect.clearRect(0, 0, 32, 32);
            rect.save();
            rect.translate(16, 16);
            rect.scale(0.4, 0.4);
            __unmatched_393.s(rect);
            rect.restore();
            var __unmatched_396 = document.getElementById('favicon');
            var __unmatched_397 = __unmatched_396.cloneNode(true);
            __unmatched_397.setAttribute('href', __unmatched_394.toDataURL('image/png'));
            __unmatched_396.parentNode.replaceChild(__unmatched_397, __unmatched_396);
          };
        }();
        $(function() {
          __unmatched_141();
        });
        var i_ = 'loginCache3';
        $(function() {
          if (+window.localStorage.wannaLogin) {
            if (window.localStorage[i_]) {
              __unmatched_45(window.localStorage[i_]);
            }
            if (window.localStorage.fbPictureCache) {
              $('.agario-profile-picture').attr('src', window.localStorage.fbPictureCache);
            }
          }
        });
        window.facebookLogin = function() {
          window.localStorage.wannaLogin = 1;
        };
        window.fbAsyncInit = function() {
          function __unmatched_398() {
            window.localStorage.wannaLogin = 1;
            if (null == window.FB) {
              alert('You seem to have something blocking Facebook on your browser, please check for any extensions');
            } else {
              window.FB.login(function(callback) {
                UpdateScale(callback);
              }, {
                scope: 'public_profile, email'
              });
            }
          }
          window.FB.init({
            appId: '677505792353827',
            cookie: true,
            xfbml: true,
            status: true,
            version: 'v2.2'
          });
          window.FB.Event.subscribe('auth.statusChange', function(__unmatched_400) {
            if (+window.localStorage.wannaLogin) {
              if ('connected' == __unmatched_400.status) {
                UpdateScale(__unmatched_400);
              } else {
                __unmatched_398();
              }
            }
          });
          window.facebookLogin = __unmatched_398;
        };
        window.logout = function() {
          __unmatched_110 = null;
          $('#helloContainer').attr('data-logged-in', '0');
          $('#helloContainer').attr('data-has-account-data', '0');
          delete window.localStorage.wannaLogin;
          delete window.localStorage[i_];
          delete window.localStorage.fbPictureCache;
          Start();
        };
        var __unmatched_143 = function() {
          function ParseString(width, top, callback, height, left) {
            var __unmatched_415 = top.getContext('2d');
            var __unmatched_416 = top.width;
            top = top.height;
            width.color = left;
            width.t(callback);
            width.size = height;
            __unmatched_415.save();
            __unmatched_415.translate(__unmatched_416 / 2, top / 2);
            width.s(__unmatched_415);
            __unmatched_415.restore();
          }
          for (var __unmatched_402 = new Cell(-1, 0, 0, 32, '#5bc0de', ''), __unmatched_403 = new Cell(-1, 0, 0, 32, '#5bc0de', ''), __unmatched_404 = '#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e'.split(' '), g_skinNamesC = [], j = 0; j < __unmatched_404.length; ++j) {
            var sub = j / __unmatched_404.length * 12;
            var __unmatched_408 = 30 * Math.sqrt(j / __unmatched_404.length);
            g_skinNamesC.push(new Cell(-1, Math.cos(sub) * __unmatched_408, Math.sin(sub) * __unmatched_408, 10, __unmatched_404[j], ''));
          }
          __unmatched_43(g_skinNamesC);
          var data = document.createElement('canvas');
          data.getContext('2d');
          data.width = data.height = 70;
          ParseString(__unmatched_403, data, '', 26, '#ebc0de');
          return function() {
            $('.cell-spinner').filter(':visible').each(function() {
              var __unmatched_417 = $(this);
              var g = Date.now();
              var width = this.width;
              var __unmatched_420 = this.height;
              var item = this.getContext('2d');
              item.clearRect(0, 0, width, __unmatched_420);
              item.save();
              item.translate(width / 2, __unmatched_420 / 2);
              for (var g_numFrames = 0; 10 > g_numFrames; ++g_numFrames) {
                item.drawImage(data, (0.1 * g + 80 * g_numFrames) % (width + 140) - width / 2 - 70 - 35, __unmatched_420 / 2 * Math.sin((0.001 * g + g_numFrames) % Math.PI * 2) - 35, 70, 70);
              }
              item.restore();
              if (__unmatched_417 = __unmatched_417.attr('data-itr')) {
                __unmatched_417 = Render(__unmatched_417);
              }
              ParseString(__unmatched_402, this, __unmatched_417 || '', +$(this).attr('data-size'), '#5bc0de');
            });
            $('#statsPellets').filter(':visible').each(function() {
              $(this);
              var height = this.width;
              var __unmatched_424 = this.height;
              this.getContext('2d').clearRect(0, 0, height, __unmatched_424);
              for (height = 0; height < g_skinNamesC.length; height++) {
                ParseString(g_skinNamesC[height], this, '', g_skinNamesC[height].size, g_skinNamesC[height].color);
              }
            });
          };
        }();
        window.createParty = function() {
          n(':party');
          __unmatched_126 = function(rect) {
            __unmatched_49('/#' + window.encodeURIComponent(rect));
            $('.partyToken').val('agar.io/#' + window.encodeURIComponent(rect));
            $('#helloContainer').attr('data-party-state', '1');
          };
          Start();
        };
        window.joinParty = RenderLoop;
        window.cancelParty = function() {
          __unmatched_49('/');
          $('#helloContainer').attr('data-party-state', '0');
          n('');
          Start();
        };
        var points = [];
        var __unmatched_145 = 0;
        var __unmatched_146 = '#000000';
        var __unmatched_147 = false;
        var __unmatched_148 = false;
        var __unmatched_149 = 0;
        var __unmatched_150 = 0;
        var __unmatched_151 = 0;
        var __unmatched_152 = 0;
        var g_mode = 0;
        var __unmatched_154 = true;
        setInterval(function() {
          if (__unmatched_148) {
            points.push(__unmatched_37() / 100);
          }
        }, 1000 / 60);
        setInterval(function() {
          var start = __unmatched_52();
          if (0 != start) {
            ++__unmatched_151;
            if (0 == g_mode) {
              g_mode = start;
            }
            g_mode = Math.min(g_mode, start);
          }
        }, 1000);
        window.closeStats = function() {
          __unmatched_147 = false;
          $('#stats').hide();
          __unmatched_14(window.ab);
          __unmatched_10(0);
        };
        window.setSkipStats = function(__unmatched_427) {
          __unmatched_154 = !__unmatched_427;
        };
        $(function() {
          $(Init);
        });
      }
    }
  }
}(unsafeWindow, unsafeWindow.jQuery));
