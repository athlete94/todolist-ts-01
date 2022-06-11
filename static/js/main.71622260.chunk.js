(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{102:function(t,e,n){t.exports={addItemForm:"AddItemForm_addItemForm__27gm1"}},103:function(t,e,n){t.exports={deleteButton:"DeleteButton_deleteButton__R2DRX"}},104:function(t,e,n){},131:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(32),s=n.n(i);n(131),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,o,d=n(54),l=n(55),u=n(16),j=n(5),b=n(11),f=n(97),O=n.n(f);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.High=2]="High",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(o||(o={}));var h=O.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1cb2198-6145-426b-aef5-83678121f4d6"}}),m=function(){return h.get("todo-lists")},p=function(t){return h.post("todo-lists",{title:t})},T=function(t,e){return h.put("todo-lists/".concat(t),{title:e})},x=function(t){return h.delete("todo-lists/".concat(t))},g=function(t){return h.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return h.post("todo-lists/".concat(t,"/tasks"),{title:e})},k=function(t,e){return h.delete("todo-lists/".concat(t,"/tasks/").concat(e))},S=function(t,e,n){return h.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},I=function(t){return h.post("auth/login",t)},E=function(){return h.delete("auth/login")},_=function(){return h.get("auth/me")},D=function(t,e){t(N(e)),t(L("failed"))},y=function(t,e){t.messages.length?e(N(t.messages[0])):e(N("Some error ocured")),e(L("failed"))},C={},A=function(t){return{type:"SET_IS_LOGGED_IN",isLoggedIn:t}},w={status:"idle",error:null,id:null,login:"",email:"",isInitialized:!1},L=function(t){return{type:"APP/SET-STATUS",status:t}},N=function(t){return{type:"APP/SET-ERROR",error:t}},R=function(){return function(t){_().then((function(e){0===e.data.resultCode?(t(A(!0)),t({type:"SET_USER_DATA",userData:e.data.data})):y(e.data,t),t({type:"APP/SET-INITIALIZED",isInitialized:!0})})).catch((function(e){D(t,e.message)}))}},P={},B=function(t,e,n){return{type:"SET_DISABLED_DEL_TASK",todolistId:t,taskId:e,disabled:n}},F=function(t,e,n){return function(a,c){var i=c().tasksReducer[t].find((function(t){return t.id===e}));if(i){var s=Object(b.a)({title:i.title,description:i.description,completed:i.completed,status:i.status,priority:i.priority,startDate:i.startDate,deadline:i.deadline},n);a(L("loading")),S(t,e,s).then((function(c){0===c.data.resultCode?(a(L("successed")),a(function(t,e,n){return{type:"UPDATE_TASK",taskId:e,todolistId:t,model:n}}(t,e,n))):y(c.data,a)})).catch((function(t){D(a,t.message)}))}else console.warn("task not found in the state")}},K=[],H=n(98),U=Object(l.b)({tasksReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TASKS":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,e.tasks.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{disabled:"idle"})}))));case"REMOVE-TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.task.todoListId,[Object(b.a)(Object(b.a)({},e.task),{},{disabled:"idle"})].concat(Object(u.a)(t[e.task.todoListId]))));case"UPDATE_TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(b.a)(Object(b.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolist.id,[]));case"SET-TODOLISTS":var n=Object(b.a)({},t);return e.todolists.forEach((function(t){n[t.id]=[]})),n;case"REMOVE-TODOLIST":return delete t[e.id],Object(b.a)({},t);case"SET_DISABLED_DEL_TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(b.a)(Object(b.a)({},t),{},{disabled:e.disabled}):t}))));default:return t}},todolistsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var n={id:e.todolist.id,addedDate:e.todolist.addedDate,order:e.todolist.order,title:e.todolist.title,filter:"all",entityStatus:"idle"};return[n].concat(Object(u.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{filter:e.filter}):t}));case"SET_ENTITY_STATUS":return t.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},appReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(b.a)(Object(b.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(b.a)(Object(b.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(b.a)(Object(b.a)({},t),{},{isInitialized:e.isInitialized});case"SET_USER_DATA":return Object(b.a)(Object(b.a)({},t),e.userData);default:return t}},authReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;return"SET_IS_LOGGED_IN"===e.type?Object(b.a)(Object(b.a)({},t),{},{isLoggedIn:e.isLoggedIn}):t}}),M=Object(l.c)(U,Object(l.a)(H.a));window.store=M;var G=n(77),V=n.n(G),z=n(223),J=function(){return Object(d.b)()},q=d.c,Y=n(2),W=function(){var t=q((function(t){return t.authReducer.isLoggedIn})),e=q((function(t){return t.appReducer.login})),n=J();return Object(Y.jsx)("div",{className:V.a.header,children:t&&Object(Y.jsxs)("div",{className:V.a.header_content,children:[Object(Y.jsxs)("div",{children:["Hello ",e]}),Object(Y.jsx)(z.a,{variant:"contained",color:"secondary",onClick:function(){n((function(t){t(L("loading")),E().then((function(e){0===e.data.resultCode?(t(A(!1)),t(L("successed"))):y(e.data,t)})).catch((function(e){D(t,e.message)}))}))},children:"Logout"})]})})},Z=(n(153),n(14)),Q=n(102),X=n.n(Q),$=c.a.memo((function(t){var e=Object(a.useState)(""),n=Object(Z.a)(e,2),c=n[0],i=n[1],s=Object(a.useState)(null),r=Object(Z.a)(s,2),o=r[0],d=r[1],l=function(){var e=c.trim();""!==e?(t.callBack(e),i("")):d("Title is required")};return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("div",{className:X.a.addItemForm,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("input",{value:c,onChange:function(t){i(t.currentTarget.value)},onKeyPress:function(t){o&&d(null),13===t.charCode&&l()},className:o?"error":"",placeholder:t.placeholder,onFocus:function(){d("")},disabled:t.disabled})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:l,disabled:t.disabled,children:"add"})})]}),o&&Object(Y.jsx)("div",{className:"error-message",children:o})]})})),tt=n(79),et=n.n(tt),nt=function(t){var e=t.title,n=t.callback,c=Object(a.useState)(!0),i=Object(Z.a)(c,2),s=i[0],r=i[1],o=Object(a.useState)(e),d=Object(Z.a)(o,2),l=d[0],u=d[1],j=function(){n(l),r(!0)};return Object(Y.jsx)("div",{className:et.a.editableSpan,children:s?Object(Y.jsx)("div",{className:et.a.span,children:Object(Y.jsx)("span",{onDoubleClick:function(){r(!1)},children:e})}):Object(Y.jsx)("input",{onBlur:j,onKeyPress:function(t){13===t.charCode&&j()},autoFocus:!0,value:l,onChange:function(t){u(t.currentTarget.value)}})})},at=function(t){var e=t.callback,n=t.checkedValue;return Object(Y.jsx)("div",{children:Object(Y.jsx)("input",{type:"checkbox",onChange:function(t){return e(t.currentTarget.checked)},checked:n})})},ct=n(67),it=n.n(ct),st=n(103),rt=n.n(st),ot=function(t){var e=Object.assign({},t);return Object(Y.jsx)("div",{className:rt.a.deleteButton,children:Object(Y.jsx)("button",Object(b.a)({},e))})},dt=c.a.memo((function(t){var e=t.id,n=t.title,a=t.status,c=t.addedDate,i=t.deleteTask,s=t.changeStatus,o=t.updateTaskTitleHandler,d=t.disabled,l=c.slice(11,16),u=c.slice(0,10);return console.log("Task"),Object(Y.jsxs)("div",{className:it.a.taskBlock,children:[Object(Y.jsxs)("div",{className:it.a.task,children:[Object(Y.jsx)(at,{callback:function(t){var n=t?r.Completed:r.New;s(e,n)},checkedValue:a===r.Completed}),Object(Y.jsx)(nt,{callback:function(t){return o(t,e)},title:n}),Object(Y.jsx)(ot,{onClick:function(){i(e)},disabled:"loading"===d,children:"x"})]}),Object(Y.jsxs)("div",{className:it.a.dateTime,children:[Object(Y.jsx)("div",{children:l}),Object(Y.jsx)("div",{children:u})]})]})})),lt=n(68),ut=n.n(lt),jt=c.a.memo((function(t){var e=t.id,n=t.title,c=t.tasks,i=t.addedDate,s=t.removeTask,o=t.changeFilter,d=t.addTask,l=t.changeTaskStatus,u=t.removeTodolist,j=t.filter,b=t.updateTodolistTitle,f=t.updateTaskTitle,O=t.entityStatus,h=J();Object(a.useEffect)((function(){var t;h((t=e,function(e){e(L("loading")),g(t).then((function(n){e(function(t,e){return{type:"SET_TASKS",tasks:t,todolistId:e}}(n.data.items,t)),e(L("successed"))})).catch((function(t){D(e,t.message)}))}))}),[]);var m=Object(a.useCallback)((function(){return o("all",e)}),[o,e]),p=Object(a.useCallback)((function(){return o("active",e)}),[o,e]),T=Object(a.useCallback)((function(){return o("completed",e)}),[o,e]),x=Object(a.useCallback)((function(t){d(t,e)}),[d,e]),v=Object(a.useCallback)((function(t){b(e,t)}),[b,e]),k=Object(a.useCallback)((function(t,n){f(e,n,t)}),[f,e]),S=Object(a.useCallback)((function(t,n){l(e,t,n)}),[l,e]),I=Object(a.useCallback)((function(t){return s(t,e)}),[s,e]),E=c;return"active"===j&&(E=E.filter((function(t){return t.status===r.New}))),"completed"===j&&(E=E.filter((function(t){return t.status===r.Completed}))),Object(Y.jsxs)("div",{className:ut.a.todolist,children:[Object(Y.jsxs)("h3",{style:{display:"flex",justifyContent:"space-between"},children:[Object(Y.jsx)(nt,{callback:v,title:n}),Object(Y.jsx)(ot,{onClick:function(){return u(e)},disabled:"loading"===O,children:"x"})]}),Object(Y.jsx)($,{callBack:x,disabled:"loading"===O}),Object(Y.jsx)("ul",{children:E.map((function(t){return Object(Y.jsx)("li",{className:t.status>0?"is-done":"",children:Object(Y.jsx)(dt,{id:t.id,status:t.status,title:t.title,addedDate:t.addedDate,deleteTask:I,updateTaskTitleHandler:k,changeStatus:S,disabled:t.disabled})},t.id)}))}),Object(Y.jsxs)("div",{className:ut.a.filters,children:[Object(Y.jsx)("button",{className:"all"===j?"active-filter":"filter",onClick:m,children:"All"}),Object(Y.jsx)("button",{className:"active"===j?"active-filter":"filter",onClick:p,children:"Active"}),Object(Y.jsx)("button",{className:"completed"===j?"active-filter":"filter",onClick:T,children:"Completed"})]}),Object(Y.jsx)("div",{className:ut.a.date,children:Object(Y.jsx)("span",{children:i.slice(0,10)})})]})})),bt=n(15);var ft=function(){var t=q((function(t){return t.todolistsReducer})),e=q((function(t){return t.tasksReducer})),n=q((function(t){return t.authReducer.isLoggedIn})),c=J();function i(t,e){c(function(t,e){return function(n){n(L("loading")),n(B(t,e,"loading")),k(t,e).then((function(a){0===a.data.resultCode?(n(B(t,e,"successed")),n(function(t,e){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(t,e)),n(L("successed"))):y(a.data,n)})).catch((function(t){D(n,t.message)}))}}(e,t))}function s(t,e){c(function(t,e){return function(n){n(L("loading")),v(t,e).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(L("successed"))):y(t.data,n)})).catch((function(t){D(n,t.message)}))}}(e,t))}Object(a.useEffect)((function(){n&&c((function(t){t(L("loading")),m().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(L("successed"))})).catch((function(e){D(t,e.message)}))}))}),[]);var r=function(t,e,n){c(F(t,e,{title:n}))};function o(t,e,n){c(F(t,e,{status:n}))}function d(t){var e;c((e=t,function(t){t(L("loading")),t({type:"SET_ENTITY_STATUS",entityStatus:"loading",id:e}),x(e).then((function(n){0===n.data.resultCode?(t(L("successed")),t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e))):y(n.data,t)})).catch((function(e){D(t,e.message)}))}))}var l=function(t,e){c(function(t,e){return function(n){n(L("loading")),T(t,e).then((function(a){0===a.data.resultCode?(n(L("successed")),n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))):y(a.data,n)})).catch((function(t){D(n,t.message)}))}}(t,e))};function u(t,e){c({type:"CHANGE-TODOLIST-FILTER",id:e,filter:t})}return n?Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)($,{callBack:function(t){c(function(t){return function(e){e(L("loading")),p(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(L("successed"))):y(t.data,e)})).catch((function(t){D(e,t.message)}))}}(t))},placeholder:"add list.."}),Object(Y.jsx)("div",{className:"todolists",children:t.map((function(t){var n=e[t.id];return Object(Y.jsx)("div",{children:Object(Y.jsx)(jt,{id:t.id,title:t.title,addedDate:t.addedDate,entityStatus:t.entityStatus,tasks:n,removeTask:i,changeFilter:u,addTask:s,changeTaskStatus:o,filter:t.filter,removeTodolist:d,updateTodolistTitle:l,updateTaskTitle:r},t.id)})}))})]}):Object(Y.jsx)(bt.a,{to:"/login"})},Ot=n(104),ht=n.n(Ot),mt=n(214),pt=n(210),Tt=n(219),xt=n(217),gt=a.forwardRef((function(t,e){return Object(Y.jsx)(xt.a,Object(b.a)({elevation:6,ref:e,variant:"filled"},t))}));function vt(){var t=q((function(t){return t.appReducer.error})),e=J(),n=function(t,n){"clickaway"!==n&&e(N(null))};return Object(Y.jsx)(pt.a,{spacing:2,sx:{width:"100%"},children:Object(Y.jsx)(Tt.a,{open:!!t,autoHideDuration:6e3,onClose:n,children:Object(Y.jsx)(gt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})})}var kt=n(59),St=n(224),It=n(218),Et=n(220),_t=n(221),Dt=n(226),yt=n(212),Ct=n(215),At=n(112),wt=function(){var t=q((function(t){return t.authReducer.isLoggedIn})),e=J(),n=Object(At.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(t){t(L("loading")),I(a).then((function(e){0===e.data.resultCode?(t(R()),t(A(!0)),t(L("successed"))):y(e.data,t)})).catch((function(e){D(t,e.message)}))})),n.resetForm()},validate:function(t){var e={};return t.email||(e.email="Required"),t.password||(e.password="Required"),e}});return t?Object(Y.jsx)(bt.a,{to:"/"}):Object(Y.jsx)(St.a,{container:!0,justifyContent:"center",children:Object(Y.jsx)(St.a,{item:!0,justifyContent:"center",children:Object(Y.jsx)("form",{onSubmit:n.handleSubmit,children:Object(Y.jsxs)(Et.a,{children:[Object(Y.jsxs)(yt.a,{children:[Object(Y.jsxs)("p",{children:["To log in get registered",Object(Y.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(Y.jsx)("p",{children:"or use common test account credentials:"}),Object(Y.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(Y.jsx)("p",{children:"Password: free"})]}),Object(Y.jsxs)(Dt.a,{children:[Object(Y.jsx)(Ct.a,Object(b.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(Y.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(Y.jsx)(Ct.a,Object(b.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(Y.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(Y.jsx)(_t.a,{label:"Remember me",control:Object(Y.jsx)(It.a,Object(b.a)(Object(b.a)({},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe}))}),Object(Y.jsx)(z.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},Lt=n(227),Nt=function(){var t=q((function(t){return t.appReducer.status})),e=q((function(t){return t.appReducer.isInitialized})),n=J();return Object(a.useEffect)((function(){n(R())}),[]),e?Object(Y.jsx)(kt.a,{children:Object(Y.jsxs)("div",{children:[Object(Y.jsx)(W,{}),"loading"===t&&Object(Y.jsx)(mt.a,{color:"secondary"}),Object(Y.jsx)("div",{className:ht.a.wrap,children:Object(Y.jsxs)(bt.d,{children:[Object(Y.jsx)(bt.b,{path:"/",element:Object(Y.jsx)(ft,{})}),Object(Y.jsx)(bt.b,{path:"/login",element:Object(Y.jsx)(wt,{})})]})}),Object(Y.jsx)(vt,{})]})}):Object(Y.jsx)("div",{style:{width:"100%",textAlign:"center",position:"fixed",top:"40%"},children:Object(Y.jsx)(Lt.a,{})})};s.a.render(Object(Y.jsx)(d.a,{store:M,children:Object(Y.jsx)(Nt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},67:function(t,e,n){t.exports={taskBlock:"Task_taskBlock__32rOo",task:"Task_task__3aUTm",dateTime:"Task_dateTime__3xuP2"}},68:function(t,e,n){t.exports={todolist:"Todolist_todolist__2NJ0z",filters:"Todolist_filters__3l8wS",date:"Todolist_date__vJvPF"}},77:function(t,e,n){t.exports={header:"Header_header__uxT4o",header_content:"Header_header_content__6QJIJ"}},79:function(t,e,n){t.exports={span:"EditableSpan_span__3fNEs"}}},[[154,1,2]]]);
//# sourceMappingURL=main.71622260.chunk.js.map