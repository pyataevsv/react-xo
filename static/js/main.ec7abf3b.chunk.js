(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var i=n(3),o=n(4),r=n(1),c=n(7),l=n(6),a=n(0),s=n.n(a),h=n(5),u=n.n(h),d=(n(14),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={condition:Array(9).fill(null)},o.handleClick=o.handleClick.bind(Object(r.a)(o)),o.xTime=!0,o.thereIsWinner=!1,o.progress=[Array(9).fill(null)],o.step=0,o}return Object(o.a)(n,[{key:"handleClick",value:function(e){if(!this.thereIsWinner&&this.step===this.progress.length-1){var t=this.state.condition.slice();t[e]=this.xTime?"x":"o",this.progress.push(t),this.setState({condition:t}),this.step++}}},{key:"reset",value:function(){this.progress=[Array(9).fill(null)],this.step=0,this.setState({condition:Array(9).fill(null)})}},{key:"prev",value:function(){this.step-1>=0&&(this.step--,this.setState({condition:this.progress[this.step]}))}},{key:"next",value:function(){this.step<this.progress.length-1&&(this.step++,this.setState({condition:this.progress[this.step]}))}},{key:"goStep",value:function(e){this.step=e,this.setState({condition:this.progress[e]})}},{key:"checkWinner",value:function(){for(var e=0,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];e<t.length;e++){var n=t[e];if(this.state.condition[n[0]]===this.state.condition[n[1]]&&this.state.condition[n[1]]===this.state.condition[n[2]]&&null!=this.state.condition[n[0]])return!0}return!1}},{key:"render",value:function(){var e=this;this.thereIsWinner=this.checkWinner();var t="";return this.thereIsWinner&&this.xTime?t="x":this.thereIsWinner&&!this.xTime&&(t="o"),this.xTime=!this.xTime,s.a.createElement("div",null,s.a.createElement(m,{condition:this.state.condition,handleClick:this.handleClick}),s.a.createElement(k,{winner:t,reset:function(){e.reset()},prev:function(){e.prev()},next:function(){e.next()},steps:this.progress.length-1,goStep:function(t){e.goStep(t)}}))}}]),n}(s.a.Component));function m(e){return s.a.createElement("div",{className:"board"},s.a.createElement(p,{number:0,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:1,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:2,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:3,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:4,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:5,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:6,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:7,condition:e.condition,handleClick:e.handleClick}),s.a.createElement(p,{number:8,condition:e.condition,handleClick:e.handleClick}))}function p(e){return s.a.createElement("div",{className:"btn",onClick:function(){e.handleClick(e.number)}},e.condition[e.number])}function k(e){var t="";return e.winner&&(t=e.winner+" win"),s.a.createElement("div",null,s.a.createElement("div",{className:"winner-box"},t),s.a.createElement("button",{onClick:e.reset},"Reset"),s.a.createElement("button",{onClick:e.prev},"Prev"),s.a.createElement("button",{onClick:e.next},"Next"),s.a.createElement("div",null,s.a.createElement(f,{steps:e.steps,goStep:e.goStep})))}function f(e){return Array(e.steps).fill(null).map((function(e,t){return t+1})).map((function(t){return s.a.createElement("button",{key:t,onClick:function(){e.goStep(t)}},"step ",t)}))}u.a.render(s.a.createElement(d,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.ec7abf3b.chunk.js.map