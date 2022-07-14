(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{102:function(t,e,n){t.exports={addItemForm:"AddItemForm_addItemForm__27gm1"}},103:function(t,e,n){t.exports={deleteButton:"DeleteButton_deleteButton__R2DRX"}},104:function(t,e,n){},131:function(t,e,n){},153:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(32),s=n.n(i);n(131),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,o,d=n(54),l=n(55),u=n(16),j=n(5),b=n(11),O=n(97),f=n.n(O);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.High=2]="High",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(o||(o={}));var h=f.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a1cb2198-6145-426b-aef5-83678121f4d6"}}),m=function(){return h.get("todo-lists")},p=function(t){return h.post("todo-lists",{title:t})},T=function(t,e){return h.put("todo-lists/".concat(t),{title:e})},x=function(t){return h.delete("todo-lists/".concat(t))},g=function(t){return h.get("todo-lists/".concat(t,"/tasks"))},k=function(t,e){return h.post("todo-lists/".concat(t,"/tasks"),{title:e})},v=function(t,e){return h.delete("todo-lists/".concat(t,"/tasks/").concat(e))},S=function(t,e,n){return h.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},I=function(t){return h.post("auth/login",t)},E=function(){return h.delete("auth/login")},_=function(){return h.get("auth/me")},C=function(t,e){t(N(e)),t(R("failed"))},D=function(t,e){t.messages.length?e(N(t.messages[0])):e(N("Some error ocured")),e(R("failed"))},A=[],y={},L=function(t){return{type:"SET_IS_LOGGED_IN",isLoggedIn:t}},w={status:"idle",error:null,id:null,login:"",email:"",isInitialized:!1},R=function(t){return{type:"APP/SET-STATUS",status:t}},N=function(t){return{type:"APP/SET-ERROR",error:t}},P=function(){return function(t){_().then((function(e){0===e.data.resultCode?(t(L(!0)),t({type:"SET_USER_DATA",userData:e.data.data})):D(e.data,t),t({type:"APP/SET-INITIALIZED",isInitialized:!0})})).catch((function(e){C(t,e.message)}))}},B={},F=function(t,e,n){return{type:"SET_DISABLED_DEL_TASK",todolistId:t,taskId:e,disabled:n}},K=function(t){return function(e){e(R("loading")),g(t).then((function(n){e(function(t,e){return{type:"SET_TASKS",tasks:t,todolistId:e}}(n.data.items,t)),e(R("successed"))})).catch((function(t){C(e,t.message)}))}},H=function(t,e,n){return function(a,c){var i=c().tasksReducer[t].find((function(t){return t.id===e}));if(i){var s=Object(b.a)({title:i.title,description:i.description,completed:i.completed,status:i.status,priority:i.priority,startDate:i.startDate,deadline:i.deadline},n);a(R("loading")),S(t,e,s).then((function(c){0===c.data.resultCode?(a(R("successed")),a(function(t,e,n){return{type:"UPDATE_TASK",taskId:e,todolistId:t,model:n}}(t,e,n))):D(c.data,a)})).catch((function(t){C(a,t.message)}))}else console.warn("task not found in the state")}},U=n(98),M=Object(l.b)({tasksReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_TASKS":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,e.tasks.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{disabled:"idle"})}))));case"REMOVE-TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.task.todoListId,[Object(b.a)(Object(b.a)({},e.task),{},{disabled:"idle"})].concat(Object(u.a)(t[e.task.todoListId]))));case"UPDATE_TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(b.a)(Object(b.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolist.id,[]));case"SET-TODOLISTS":var n=Object(b.a)({},t);return e.todolists.forEach((function(t){n[t.id]=[]})),n;case"REMOVE-TODOLIST":return delete t[e.id],Object(b.a)({},t);case"SET_DISABLED_DEL_TASK":return Object(b.a)(Object(b.a)({},t),{},Object(j.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(b.a)(Object(b.a)({},t),{},{disabled:e.disabled}):t}))));case"CLEAR_DATA":return{};default:return t}},todolistsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var n={id:e.todolist.id,addedDate:e.todolist.addedDate,order:e.todolist.order,title:e.todolist.title,filter:"all",entityStatus:"idle"};return[n].concat(Object(u.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{filter:e.filter}):t}));case"SET_ENTITY_STATUS":return t.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{entityStatus:e.entityStatus}):t}));case"CLEAR_DATA":return[];default:return t}},appReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(b.a)(Object(b.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(b.a)(Object(b.a)({},t),{},{error:e.error});case"APP/SET-INITIALIZED":return Object(b.a)(Object(b.a)({},t),{},{isInitialized:e.isInitialized});case"SET_USER_DATA":return Object(b.a)(Object(b.a)({},t),e.userData);default:return t}},authReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;return"SET_IS_LOGGED_IN"===e.type?Object(b.a)(Object(b.a)({},t),{},{isLoggedIn:e.isLoggedIn}):t}}),G=Object(l.c)(M,Object(l.a)(U.a));window.store=G;var V=n(77),z=n.n(V),J=n(223),q=function(){return Object(d.b)()},Y=d.c,W=n(2),Z=function(){var t=Y((function(t){return t.authReducer.isLoggedIn})),e=Y((function(t){return t.appReducer.login})),n=q();return Object(W.jsx)("div",{className:z.a.header,children:t&&Object(W.jsxs)("div",{className:z.a.header_content,children:[Object(W.jsxs)("div",{children:["Hello ",e]}),Object(W.jsx)(J.a,{variant:"contained",color:"secondary",onClick:function(){n((function(t){t(R("loading")),E().then((function(e){0===e.data.resultCode?(t(L(!1)),t(R("successed")),t({type:"CLEAR_DATA"})):D(e.data,t)})).catch((function(e){C(t,e.message)}))}))},children:"Logout"})]})})},Q=(n(153),n(14)),X=n(102),$=n.n(X),tt=c.a.memo((function(t){var e=Object(a.useState)(""),n=Object(Q.a)(e,2),c=n[0],i=n[1],s=Object(a.useState)(null),r=Object(Q.a)(s,2),o=r[0],d=r[1],l=function(){var e=c.trim();""!==e?(t.callBack(e),i("")):d("Title is required")};return Object(W.jsxs)("div",{children:[Object(W.jsxs)("div",{className:$.a.addItemForm,children:[Object(W.jsx)("div",{children:Object(W.jsx)("input",{value:c,onChange:function(t){i(t.currentTarget.value)},onKeyPress:function(t){null!==o&&d(null),13===t.charCode&&l()},className:o?"error":"",placeholder:t.placeholder,onFocus:function(){d("")},disabled:t.disabled})}),Object(W.jsx)("div",{children:Object(W.jsx)("button",{onClick:l,disabled:t.disabled,children:"add"})})]}),o&&Object(W.jsx)("div",{className:"error-message",children:o})]})})),et=n(79),nt=n.n(et),at=c.a.memo((function(t){var e=t.title,n=t.callback,c=Object(a.useState)(!0),i=Object(Q.a)(c,2),s=i[0],r=i[1],o=Object(a.useState)(e),d=Object(Q.a)(o,2),l=d[0],u=d[1],j=function(){n(l),r(!0)};return Object(W.jsx)("div",{className:nt.a.editableSpan,children:s?Object(W.jsx)("div",{className:nt.a.span,children:Object(W.jsx)("span",{onDoubleClick:function(){r(!1)},children:e})}):Object(W.jsx)("input",{onBlur:j,onKeyPress:function(t){13===t.charCode&&j()},autoFocus:!0,value:l,onChange:function(t){u(t.currentTarget.value)}})})})),ct=c.a.memo((function(t){var e=t.callback,n=t.checkedValue;return Object(W.jsx)("div",{children:Object(W.jsx)("input",{type:"checkbox",onChange:function(t){return e(t.currentTarget.checked)},checked:n})})})),it=n(67),st=n.n(it),rt=n(103),ot=n.n(rt),dt=function(t){var e=Object.assign({},t);return Object(W.jsx)("div",{className:ot.a.deleteButton,children:Object(W.jsx)("button",Object(b.a)({},e))})},lt=c.a.memo((function(t){var e=t.id,n=t.title,c=t.status,i=t.addedDate,s=t.deleteTask,o=t.changeStatus,d=t.updateTaskTitleHandler,l=t.disabled,u=Object(a.useCallback)((function(t){var n=t?r.Completed:r.New;o(e,n)}),[o,e]),j=Object(a.useCallback)((function(t){d(t,e)}),[d,e]),b=i.slice(11,16),O=i.slice(0,10);return console.log("Task"),Object(W.jsxs)("div",{className:st.a.taskBlock,children:[Object(W.jsxs)("div",{className:st.a.task,children:[Object(W.jsx)(ct,{callback:u,checkedValue:c===r.Completed}),Object(W.jsx)(at,{callback:j,title:n}),Object(W.jsx)(dt,{onClick:function(){s(e)},disabled:"loading"===l,children:"x"})]}),Object(W.jsxs)("div",{className:st.a.dateTime,children:[Object(W.jsx)("div",{children:b}),Object(W.jsx)("div",{children:O})]})]})})),ut=n(68),jt=n.n(ut),bt=c.a.memo((function(t){var e=t.id,n=t.title,c=t.tasks,i=t.addedDate,s=t.removeTask,o=t.changeFilter,d=t.addTask,l=t.changeTaskStatus,u=t.removeTodolist,j=t.filter,b=t.updateTodolistTitle,O=t.updateTaskTitle,f=t.entityStatus,h=(q(),Object(a.useCallback)((function(){return o("all",e)}),[o,e])),m=Object(a.useCallback)((function(){return o("active",e)}),[o,e]),p=Object(a.useCallback)((function(){return o("completed",e)}),[o,e]),T=Object(a.useCallback)((function(t){d(t,e)}),[d,e]),x=Object(a.useCallback)((function(t){b(e,t)}),[b,e]),g=Object(a.useCallback)((function(t,n){O(e,n,t)}),[O,e]),k=Object(a.useCallback)((function(t,n){l(e,t,n)}),[l,e]),v=Object(a.useCallback)((function(t){return s(t,e)}),[s,e]),S=c;return"active"===j&&(S=c.filter((function(t){return t.status===r.New}))),"completed"===j&&(S=c.filter((function(t){return t.status===r.Completed}))),Object(W.jsxs)("div",{className:jt.a.todolist,children:[Object(W.jsxs)("h3",{style:{display:"flex",justifyContent:"space-between"},children:[Object(W.jsx)(at,{callback:x,title:n}),Object(W.jsx)(dt,{onClick:function(){return u(e)},disabled:"loading"===f,children:"x"})]}),Object(W.jsx)(tt,{callBack:T,disabled:"loading"===f}),Object(W.jsx)("ul",{children:S.map((function(t){return Object(W.jsx)("li",{className:t.status>0?"is-done":"",children:Object(W.jsx)(lt,{id:t.id,status:t.status,title:t.title,addedDate:t.addedDate,deleteTask:v,updateTaskTitleHandler:g,changeStatus:k,disabled:t.disabled})},t.id)}))}),Object(W.jsxs)("div",{className:jt.a.filters,children:[Object(W.jsx)("button",{className:"all"===j?"active-filter":"filter",onClick:h,children:"All"}),Object(W.jsx)("button",{className:"active"===j?"active-filter":"filter",onClick:m,children:"Active"}),Object(W.jsx)("button",{className:"completed"===j?"active-filter":"filter",onClick:p,children:"Completed"})]}),Object(W.jsx)("div",{className:jt.a.date,children:Object(W.jsx)("span",{children:i.slice(0,10)})})]})})),Ot=n(15),ft=c.a.memo((function(){var t=Y((function(t){return t.todolistsReducer})),e=Y((function(t){return t.tasksReducer})),n=Y((function(t){return t.authReducer.isLoggedIn})),c=q();Object(a.useEffect)((function(){n&&c((function(t){t(R("loading")),m().then((function(e){return t({type:"SET-TODOLISTS",todolists:e.data}),t(R("successed")),e.data})).then((function(e){e.forEach((function(e){t(K(e.id))}))})).catch((function(e){C(t,e.message)}))}))}),[]);var i=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(R("loading")),n(F(t,e,"loading")),v(t,e).then((function(a){0===a.data.resultCode?(n(F(t,e,"successed")),n(function(t,e){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(t,e)),n(R("successed"))):D(a.data,n)})).catch((function(t){C(n,t.message)}))}}(e,t))}),[c]),s=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(R("loading")),k(t,e).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(R("successed"))):D(t.data,n)})).catch((function(t){C(n,t.message)}))}}(e,t))}),[c]),r=Object(a.useCallback)((function(t,e,n){c(H(t,e,{title:n}))}),[c]),o=Object(a.useCallback)((function(t,e,n){c(H(t,e,{status:n}))}),[c]),d=Object(a.useCallback)((function(t){c(function(t){return function(e){e(R("loading")),p(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(R("successed"))):D(t.data,e)})).catch((function(t){C(e,t.message)}))}}(t))}),[c]),l=Object(a.useCallback)((function(t){var e;c((e=t,function(t){t(R("loading")),t({type:"SET_ENTITY_STATUS",entityStatus:"loading",id:e}),x(e).then((function(n){0===n.data.resultCode?(t(R("successed")),t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e))):D(n.data,t)})).catch((function(e){C(t,e.message)}))}))}),[c]),u=Object(a.useCallback)((function(t,e){c(function(t,e){return function(n){n(R("loading")),T(t,e).then((function(a){0===a.data.resultCode?(n(R("successed")),n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))):D(a.data,n)})).catch((function(t){C(n,t.message)}))}}(t,e))}),[c]),j=Object(a.useCallback)((function(t,e){c({type:"CHANGE-TODOLIST-FILTER",id:e,filter:t})}),[c]);return n?Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(tt,{callBack:d,placeholder:"add list.."}),Object(W.jsx)("div",{className:"todolists",children:t.map((function(t){var n=e[t.id];return Object(W.jsx)("div",{children:Object(W.jsx)(bt,{id:t.id,title:t.title,addedDate:t.addedDate,entityStatus:t.entityStatus,tasks:n,removeTask:i,changeFilter:j,addTask:s,changeTaskStatus:o,filter:t.filter,removeTodolist:l,updateTodolistTitle:u,updateTaskTitle:r},t.id)})}))})]}):Object(W.jsx)(Ot.a,{to:"/login"})})),ht=n(104),mt=n.n(ht),pt=n(214),Tt=n(210),xt=n(219),gt=n(217),kt=a.forwardRef((function(t,e){return Object(W.jsx)(gt.a,Object(b.a)({elevation:6,ref:e,variant:"filled"},t))}));function vt(){var t=Y((function(t){return t.appReducer.error})),e=q(),n=function(t,n){"clickaway"!==n&&e(N(null))};return Object(W.jsx)(Tt.a,{spacing:2,sx:{width:"100%"},children:Object(W.jsx)(xt.a,{open:!!t,autoHideDuration:6e3,onClose:n,children:Object(W.jsx)(kt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})})}var St=n(59),It=n(224),Et=n(218),_t=n(220),Ct=n(221),Dt=n(226),At=n(212),yt=n(215),Lt=n(112),wt=function(){var t=Y((function(t){return t.authReducer.isLoggedIn})),e=q(),n=Object(Lt.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var a;e((a=t,function(t){t(R("loading")),I(a).then((function(e){0===e.data.resultCode?(t(P()),t(L(!0)),t(R("successed"))):D(e.data,t)})).catch((function(e){C(t,e.message)}))})),n.resetForm()},validate:function(t){var e={};return t.email||(e.email="Required"),t.password||(e.password="Required"),e}});return t?Object(W.jsx)(Ot.a,{to:"/"}):Object(W.jsx)(It.a,{container:!0,justifyContent:"center",children:Object(W.jsx)(It.a,{item:!0,justifyContent:"center",children:Object(W.jsx)("form",{onSubmit:n.handleSubmit,children:Object(W.jsxs)(_t.a,{children:[Object(W.jsxs)(At.a,{children:[Object(W.jsxs)("p",{children:["To log in get registered",Object(W.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(W.jsx)("p",{children:"or use common test account credentials:"}),Object(W.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(W.jsx)("p",{children:"Password: free"})]}),Object(W.jsxs)(Dt.a,{children:[Object(W.jsx)(yt.a,Object(b.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(W.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(W.jsx)(yt.a,Object(b.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(W.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(W.jsx)(Ct.a,{label:"Remember me",control:Object(W.jsx)(Et.a,Object(b.a)(Object(b.a)({},n.getFieldProps("rememberMe")),{},{checked:n.values.rememberMe}))}),Object(W.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},Rt=n(227),Nt=function(){var t=Y((function(t){return t.appReducer.status})),e=Y((function(t){return t.appReducer.isInitialized})),n=q();return Object(a.useEffect)((function(){n(P())}),[]),e?Object(W.jsx)(St.a,{children:Object(W.jsxs)("div",{children:[Object(W.jsx)(Z,{}),"loading"===t&&Object(W.jsx)(pt.a,{color:"secondary"}),Object(W.jsx)("div",{className:mt.a.wrap,children:Object(W.jsxs)(Ot.d,{children:[Object(W.jsx)(Ot.b,{path:"/",element:Object(W.jsx)(ft,{})}),Object(W.jsx)(Ot.b,{path:"/login",element:Object(W.jsx)(wt,{})})]})}),Object(W.jsx)(vt,{})]})}):Object(W.jsx)("div",{style:{width:"100%",textAlign:"center",position:"fixed",top:"40%"},children:Object(W.jsx)(Rt.a,{})})};s.a.render(Object(W.jsx)(d.a,{store:G,children:Object(W.jsx)(Nt,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},67:function(t,e,n){t.exports={taskBlock:"Task_taskBlock__32rOo",task:"Task_task__3aUTm",dateTime:"Task_dateTime__3xuP2"}},68:function(t,e,n){t.exports={todolist:"Todolist_todolist__2NJ0z",filters:"Todolist_filters__3l8wS",date:"Todolist_date__vJvPF"}},77:function(t,e,n){t.exports={header:"Header_header__uxT4o",header_content:"Header_header_content__6QJIJ"}},79:function(t,e,n){t.exports={span:"EditableSpan_span__3fNEs"}}},[[154,1,2]]]);
//# sourceMappingURL=main.ec5cb75a.chunk.js.map