(this.webpackJsonptab_browser=this.webpackJsonptab_browser||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=(a(13),a(3)),s=a(4),i=a(6),b=a(5),m=a(7),u=(a(14),function(e){var t=e.onSearchChange,a=e.onButtonSubmit;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--gray bg-lightest-gray",type:"text",placeholder:"Type a song title or an artist",onChange:t}),r.a.createElement("button",{className:"pa3 grow b--gray link bg-lightest-gray",onClick:a},"Search"),r.a.createElement("br",null),r.a.createElement("select",{className:"mt1",id:"tabs"},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Choose a tab type"),r.a.createElement("option",{value:"PLAYER"},"Player"),r.a.createElement("option",{value:"TEXT_GUITAR_TAB"},"Guitar"),r.a.createElement("option",{value:"CHORDS"},"Chords"),r.a.createElement("option",{value:"TEXT_BASS_TAB"},"Bass")))}),p=function(e){var t=e.artist,a=e.title,n=e.avaibleTabs.join(" | ").split("_").join(" ").toLowerCase().split("tab");return r.a.createElement("tr",null,r.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},t),r.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},a),r.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},n))},h=function(e){var t=e.songs,a=e.tab;return r.a.createElement("div",{className:"pa4"},r.a.createElement("div",{className:"overflow-auto"},r.a.createElement("table",{className:"f6 w-100 mw8 center",cellspacing:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"fw6 bb b--black-20 pb3 pr3"},"Artist"),r.a.createElement("th",{className:"fw6 bb b--black-20 pb3 pr3"},"Title"),r.a.createElement("th",{className:"fw6 bb b--black-20 pb3 pr3"},"Avaible tabs:"))),t.map((function(e,n){if(t[n].tabTypes.includes(a))return r.a.createElement("tbody",{className:"lh-copy"},r.a.createElement(p,{artist:t[n].artist.name,title:t[n].title,avaibleTabs:t[n].tabTypes}));n++})))))},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"700px"}},e.children)},E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(b.a)(t).call(this))).onSearchChange=function(t){e.setState({pattern:t.target.value})},e.onButtonSubmit=function(){var t=document.getElementById("tabs");fetch("http://www.songsterr.com/a/ra/songs.json?pattern=".concat(e.state.pattern),{method:"get"}).then((function(e){return e.json()})).then((function(t){return e.setState({listOfSongs:t})})).catch((function(e){return console.log(e)})),e.setState({typeOfTab:t.options[t.selectedIndex].value}),console.log("log: ",e.state.typeOfTab)},e.state={pattern:"",typeOfTab:"",listOfSongs:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.listOfSongs,a=e.typeOfTab;return r.a.createElement("div",{className:"tc"},r.a.createElement(u,{onSearchChange:this.onSearchChange,onButtonSubmit:this.onButtonSubmit}),0==!t.length?r.a.createElement(g,null,r.a.createElement(h,{songs:t,tab:a})):r.a.createElement("div",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.fb5f2c17.chunk.js.map