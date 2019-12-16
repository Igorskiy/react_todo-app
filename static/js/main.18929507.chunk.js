(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(10),r=n.n(l),c=(n(16),n(17),n(2)),i=n(8),d=n(3),s=n(4),u=n(6),m=n(5),f=n(7),p=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={valueTitle:""},n.inputChangeHandler=function(e){n.setState({valueTitle:e.target.value})},n.submitHandler=function(e){e.preventDefault(),n.setState(function(e){return e.valueTitle?(n.props.addTodo({id:Date.now(),title:e.valueTitle,completed:!1,editable:!1}),{valueTitle:""}):e.valueTitle})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.valueTitle;return o.a.createElement("header",{className:"header"},o.a.createElement("form",{onSubmit:this.submitHandler},o.a.createElement("h1",null,"todos"),o.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.inputChangeHandler,onBlur:this.submitHandler})))}}]),t}(o.a.Component),h=n(1),b=n.n(h),g=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={editValue:""},n.editChangeHandler=function(e){var t=e.target;n.setState({editValue:t.value})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){this.state.editValue=""}},{key:"render",value:function(){var e=this,t=this.props,n=t.visibleTodos,a=t.todos,l=t.selectAllTodos,r=t.deleteTodo,c=t.handleKeyPress,i=t.editTodo,d=t.setEditedValue,s=t.toggleTodoCompleted;return o.a.createElement("section",{className:b()("main",{hidden:0===a.length})},o.a.createElement("input",{type:"checkbox",onChange:l,checked:a.every(function(e){return e.completed}),id:"toggle-all",className:"toggle-all"}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},n.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("li",{className:b()({completed:t.completed,editing:t.editable})},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,checked:t.completed,onChange:function(){return s(t.id)}}),o.a.createElement("label",{onDoubleClick:function(){return i(t.id)},htmlFor:"todo-".concat(t.id)},t.title),o.a.createElement("button",{type:"button",onClick:function(){return r(t.id)},className:"destroy"})),t.editable&&o.a.createElement("input",{type:"text",className:"edit",autoFocus:!0,defaultValue:t.title,onChange:e.editChangeHandler,onKeyDown:function(n){return c(n,t.id,e.state.editValue)},onBlur:function(n){return d(n,t.id,e.state.editValue)}})))})))}}]),t}(o.a.Component),v=function(e){var t=e.todos,n=e.clearCompletedHandler,a=e.setCurrentFilter,l=e.currentFilter,r=e.filterTypes;return o.a.createElement("footer",{className:b()("footer",{hidden:0===t.length})},1===t.filter(function(e){return!e.completed}).length?o.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.completed}).length," item left")):o.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.completed}).length," items left")),o.a.createElement("ul",{className:"filters"},Object.values(r).map(function(e){return o.a.createElement("li",{key:e},o.a.createElement("a",{href:"#/".concat(e),onClick:function(){return a(e)},className:b()({selected:l===r[e]})},e))})),o.a.createElement("button",{type:"button",className:b()("clear-completed",{hidden:0===t.filter(function(e){return e.completed}).length}),onClick:n},"clear completed"))},T=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:void 0!==localStorage.todos?Object(i.a)(JSON.parse(localStorage.todos)):[],currentFilter:"all",filterTypes:{all:"all",completed:"completed",active:"active"}},n.setEditedValue=function(e,t,a){e.target.value||n.deleteTodo(t),n.setState(function(e){return{todos:e.todos.map(function(e){return e.id!==t?e:Object(c.a)({},e,{title:a||e.title,editable:!1})})}})},n.editTodo=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return t.id!==e?Object(c.a)({},t,{editable:!1}):Object(c.a)({},t,{editable:!0})})}})},n.handleKeyPress=function(e,t,a){"Escape"===e.key?n.setState(function(e){return{todos:e.todos.map(function(e){return Object(c.a)({},e,{editable:!1})})}}):"Enter"===e.key&&n.setEditedValue(e,t,a)},n.addTodo=function(e){n.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[e])}})},n.selectAllTodos=function(){n.setState(function(e){var t=e.todos.every(function(e){return e.completed});return{todos:e.todos.map(function(e){return Object(c.a)({},e,{completed:!t})})}})},n.toggleTodoCompleted=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return t.id!==e?t:Object(c.a)({},t,{completed:!t.completed})})}})},n.deleteTodo=function(e){n.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},n.clearCompletedHandler=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n.getFilteredTodos=function(e){var t=n.state,a=t.todos,o=t.filterTypes;switch(e){case o.completed:return a.filter(function(e){return e.completed});case o.active:return a.filter(function(e){return!e.completed});case o.all:default:return a}},n.setCurrentFilter=function(e){var t=n.state.filterTypes;n.setState({currentFilter:t[e]})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.currentFilter,a=e.filterTypes,l=this.getFilteredTodos(n);return o.a.createElement("section",{className:"todoapp"},o.a.createElement(p,{addTodo:this.addTodo}),o.a.createElement(g,{todos:t,visibleTodos:l,selectAllTodos:this.selectAllTodos,deleteTodo:this.deleteTodo,toggleTodoCompleted:this.toggleTodoCompleted,handleKeyPress:this.handleKeyPress,editChangeHanlder:this.editChangeHanlder,editTodo:this.editTodo,setEditedValue:this.setEditedValue}),o.a.createElement(v,{todos:t,clearCompletedHandler:this.clearCompletedHandler,setCurrentFilter:this.setCurrentFilter,filterTypes:a,currentFilter:n}))}}]),t}(o.a.Component);r.a.render(o.a.createElement(T,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.18929507.chunk.js.map