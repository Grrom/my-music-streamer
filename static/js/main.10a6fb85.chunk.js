(this["webpackJsonpmy-music-streamer"]=this["webpackJsonpmy-music-streamer"]||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},30:function(e,t,a){},31:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),i=(a(30),a(31),a(3)),o=a(23),s=a.n(o),u=a(5),m=a(4),d=a(24),f=a.n(d);var h=function(){var e=Object(n.useState)("nightcore"),t=Object(i.a)(e,2),a=t[0],r=t[1],l="https://www.googleapis.com/youtube/v3"+"/search?part=snippet&maxResults=".concat(12,"&order=relevance&q=").concat(a,"&type=video&videoCategoryId=10&key=")+"AIzaSyDzY0fScGb143f1ww8sq-2ES_3fYVBStZQ",o=Object(n.useState)(null),d=Object(i.a)(o,2),h=d[0],p=d[1],y="https://www.youtube.com/watch?v=".concat(h),E=Object(n.useState)(null),v=Object(i.a)(E,2),g=v[0],b=v[1],k=Object(n.useState)({loading:!1,data:null,error:!1}),j=Object(i.a)(k,2),w=j[0],O=j[1],N=Object(n.useState)(!1),S=Object(i.a)(N,2),C=S[0],I=S[1],q=Object(n.useState)(m.d),x=Object(i.a)(q,2),P=x[0],B=x[1],F=Object(n.useState)(null),L=Object(i.a)(F,2),R=L[0],z=L[1],J=Object(n.useState)("fetching data"),M=Object(i.a)(J,2),V=M[0],Y=M[1],A=Object(n.useState)([]),D=Object(i.a)(A,2),G=D[0],Q=D[1];Object(n.useEffect)((function(){O({loading:!0,data:null,error:!1}),s.a.get(l).then((function(e){O({loading:!1,data:e.data.items,error:!1})})).catch((function(e){O({loading:!1,data:null,error:e.message})}))}),[l]);var T=c.a.createElement("div",{className:"loaderContainer"},c.a.createElement("div",{className:"loader"}));function Z(e){G.forEach((function(t){t.key===e&&(z({key:t.key,title:t.title}),Y(c.a.createElement("div",{className:"flex"},"Fetching: "+t.title,c.a.createElement("div",{className:"miniLoader"}))),p(t.id),I(!0))}))}function _(e){var t=new Image;t.src="https://i.ytimg.com/vi/".concat(e,"/maxresdefault.jpg"),t.onload=function(){this.width>120?b(this.src):b("https://i.ytimg.com/vi/".concat(e,"/hqdefault.jpg"))}}return w.data&&(T=w.data.map((function(e,t){return c.a.createElement("div",{className:"channelCard",key:t,onLoad:function(){0!==t||h||(Y("select a track"),_(e.id.videoId)),Q(G.concat({key:t,title:e.snippet.title,id:e.id.videoId})),document.getElementsByClassName("channelCard")[t].style.display="flex"},onClick:function(){Z(t)}},c.a.createElement("img",{src:e.snippet.thumbnails.default.url,alt:"[img]"}),c.a.createElement("p",null,e.snippet.title))}))),w.error&&(T="Request failed with status code 403"===w.error?c.a.createElement("div",{className:"loaderContainer"},"we've run out of quota, quotas reset on 3:00pm PST so come back here after the quota resets"):c.a.createElement("div",{className:"loaderContainer"},w.error)),c.a.createElement("main",{style:{backgroundImage:"url(".concat(g,")")}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"musicList"},T),c.a.createElement("div",{className:"searchBar"},c.a.createElement("input",{id:"searchField",type:"text",placeholder:a,onClick:function(){document.getElementById("searchField").addEventListener("keyup",(function(e){13===e.keyCode&&r(this.value)}))}}),c.a.createElement(u.a,{className:"searchIcon",icon:m.e,onClick:function(){return r(document.getElementById("searchField").value)}}))),c.a.createElement("div",{className:"nowPlaying"},c.a.createElement("div",{className:"forMarquee"},V),c.a.createElement("div",{className:"controller"},c.a.createElement(u.a,{icon:m.a,onClick:function(){return h&&0!==R.key?Z(R.key-1):null}}),c.a.createElement(u.a,{className:"playPause",icon:P,onClick:function(){return I(h?!C:C)}}),c.a.createElement(u.a,{icon:m.b,onClick:function(){return h&&11!==R.key?Z(R.key+1):null}}))),c.a.createElement(f.a,{className:"ReactPlayer",onStart:function(){Y("Now Playing: "+R.title),_(h)},onError:function(){return Y("something went wrong while fetching the data")},onPlay:function(){return B(m.c)},onPause:function(){return B(m.d)},controls:!0,url:y,playing:C,loop:!0,config:{youtube:{playerVars:{height:"144px",width:"256px",vq:"small"}}}}))};var p=function(){return c.a.createElement("div",null,c.a.createElement(h,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.10a6fb85.chunk.js.map