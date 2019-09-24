(window.webpackJsonpsocialApp=window.webpackJsonpsocialApp||[]).push([[0],{16:function(e,t,n){e.exports=n(33)},21:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(12),s=n.n(r),i=(n(21),n(4)),c=n(5),l=n(7),u=n(6),m=n(8),d=n(13),h=n.n(d).a.initializeApp({apiKey:"AIzaSyDFtFSywiZ3BJ9KSxLEfOgRjmnmqsRfxCg",authDomain:"react-notes-61e38.firebaseapp.com",databaseURL:"https://react-notes-61e38.firebaseio.com",projectId:"react-notes-61e38",storageBucket:"",messagingSenderId:"72182355328",appId:"1:72182355328:web:35ff3ba8f20ca05c4fdd65"}),f=n(15),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.login=function(e){e.preventDefault(),h.auth().signInWithEmailAndPassword(n.state.email,n.state.password).catch((function(e){n.setState({fireErrors:e.message})}))},n.register=function(e){e.preventDefault(),h.auth().createUserWithEmailAndPassword(n.state.email,n.state.password).catch((function(e){n.setState({fireErrors:e.message})}))},n.state={email:"",password:"",fireErrors:"",formTitle:"Login",loginBtn:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.fireErrors?o.a.createElement("div",{className:"error"},this.state.fireErrors):null;return console.log(e),o.a.createElement("div",{className:"form_block"},o.a.createElement("div",{id:"title"},this.state.formTitle),o.a.createElement("div",{className:"body"},e,o.a.createElement("form",null,o.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email"}),o.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password"}),o.a.createElement("button",{type:"submit",className:"loginBtn",onClick:this.login},"Enter")),o.a.createElement("button",{type:"submit",className:"registerBtn",onClick:this.register},"Register")))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleRemoveNote=function(e){n.props.removeNote(e)},n.noteContent=e.noteContent,n.noteId=e.noteId,n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"note fade_in"},o.a.createElement("div",{className:"btn_remove"},o.a.createElement("button",{onClick:function(){return e.handleRemoveNote(e.noteId)}},"X")),o.a.createElement("div",null,o.a.createElement("p",{className:"noteContent"},this.noteContent)))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleUserInput=function(e){n.setState({noteNewContent:e.target.value})},n.writeNote=function(e){n.props.addNote(n.state.noteNewContent),n.setState({noteNewContent:""})},n.state={noteNewContent:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"noteForm"},o.a.createElement("input",{type:"text",placeholder:"Please write text here...",value:this.state.noteNewContent,onChange:this.handleUserInput}),o.a.createElement("button",{className:"btnAdd",onClick:this.writeNote},"Add"))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).logOut=function(){h.auth().signOut()},n.addNote=function(e){n.database.push().set({noteContent:e})},n.removeNote=function(e){n.database.child(e).remove()},n.database=h.database().ref().child("notes"),n.state={notes:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.state.notes;this.database.on("child_added",(function(n){t.push({id:n.key,noteContent:n.val().noteContent}),e.setState({notes:t})})),this.database.on("child_removed",(function(n){for(var a=0;a<t.length;a++)t[a].id===n.key&&t.splice(a,1);e.setState({notes:t})}))}},{key:"render",value:function(){var e=this;this.state.fireErrors&&o.a.createElement("div",{className:"error"},this.state.fireErrors);return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"Home page"),o.a.createElement("button",{onClick:this.logOut},"logOut"),o.a.createElement("h2",null,"react and firebase"),o.a.createElement("div",{className:"notesBody"},this.state.notes.map((function(t,n){return o.a.createElement(v,{noteContent:t.noteContent,noteId:t.id,key:t.id,removeNote:e.removeNote})}))),o.a.createElement("div",{className:"noteForm"},o.a.createElement(b,{addNote:this.addNote})))}}]),t}(a.Component),g=(n(32),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).authListener=function(){h.auth().onAuthStateChanged((function(e){e?n.setState({user:e}):n.setState({user:null})}))},n.state={user:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.user?o.a.createElement(E,null):o.a.createElement(p,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6d89dce2.chunk.js.map