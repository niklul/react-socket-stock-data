(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(58),c=n.n(r),s=(n(71),n(10)),i=n(14),l=n(17),u=n(15),d=n(18),h=n(16),m=n(148),p=function e(t){var n=this;Object(s.a)(this,e),this.resetSocket=function(){return n.socket&&n.socket.close(),n.observer&&n.observer.complete("Connection Closed"),n.socket=void 0,n.observer=void 0,!0},this.startSocket=function(){n.socket=new WebSocket(n.url),n.socket.onopen=n.handleOpen,n.socket.onmessage=n.handleMessage,n.socket.onclose=n.handleClose,n.socket.onEmptied=n.handleError},this.connect=function(){return m.a.create(function(e){n.startSocket(),n.observer=e})},this.handleOpen=function(e){},this.handleMessage=function(e){n.observer.next(e)},this.handleClose=function(e){n.observer.complete(e),n.resetSocket()},this.handleError=function(e){n.observer.error(e)},this.send=function(e){return n.socket?n.socket.send(JSON.stringify(e)):new Error("Connection Already Closed")},this.unsubscribe=function(){return n.resetSocket()},this.url=t},v=n(60),b=n.n(v),f=n(62),k=n.n(f),g=n(11),w=n.n(g),E=n(61),O=n.n(E),j=n(32),y=n.n(j),S=n(39),_=n.n(S),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getReadableTime=function(e){return e.toTimeString().substr(0,5)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.value,a=e.updated_at,r=e.previous_value,c=e.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,null,o.a.createElement(w.a,null,t),o.a.createElement(w.a,{align:"left",className:"".concat(n>r&&c.up," ").concat(n<r&&c.down)},n),o.a.createElement(w.a,{align:"right"},this.getReadableTime(a))))}}]),t}(a.Component),x=Object(h.withStyles)({down:{color:"#b00020"},up:{color:"#03dac6"}})(C),T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={stock_data:{}},n.handleIncoming=function(e){for(var t=n.state.stock_data,a=0;a<e.length;a++){var o=e[a];t[o[0]]?t[o[0]]={value:o[1],updated_at:new Date,previous_value:t[o[0]].value}:t[o[0]]={value:o[1],updated_at:new Date,previous_value:o[1]}}n.setState({stock_data:t})},n.getTableRows=function(){var e=n.state.stock_data,t=[];for(var a in e){var r=e[a];t.push(o.a.createElement(x,Object.assign({key:a,name:a},r)))}return t},n.socket_service=new p("ws://stocks.mnet.website"),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.socket_service.connect().subscribe(function(t){e.handleIncoming(JSON.parse(t.data))},function(e){console.log(e)})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(_.a,{className:e.container},o.a.createElement(b.a,null,o.a.createElement(O.a,null,o.a.createElement(y.a,null,o.a.createElement(w.a,null,"Company"),o.a.createElement(w.a,{align:"left"},"Stock Value"),o.a.createElement(w.a,{align:"right"},"Last updated"))),o.a.createElement(k.a,null,this.getTableRows())))}}]),t}(a.Component),N=Object(h.withStyles)({container:{maxWidth:"500px",margin:"auto"}})(T),R=n(63),J=n.n(R),W=n(64),D=n.n(W),I=n(65),M=n.n(I),A=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(J.a,{position:"fixed",color:"primary"},o.a.createElement(D.a,null,o.a.createElement(M.a,{variant:"h6",color:"inherit"},"Real Time Stock Values"))),o.a.createElement(N,null))}}]),t}(a.Component),B=Object(h.withStyles)({root:{padding:"16px",paddingTop:"80px"}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,n){e.exports=n(146)},71:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.74d6bf3e.chunk.js.map