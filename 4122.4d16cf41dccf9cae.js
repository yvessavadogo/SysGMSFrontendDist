"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[4122],{4122:(K,f,l)=>{l.r(f),l.d(f,{TaskListAppModule:()=>X});var c=l(6895),m=l(433),k=l(359),e=l(1571),T=l(1135),L=l(7579),J=l(529);let d=(()=>{var s;class a{constructor(t){this.http=t,this.dialogConfig={visible:!1,header:"",newTask:!1},this.tasks=[],this.taskSource=new T.X(this.tasks),this.selectedTask=new L.x,this.dialogSource=new T.X(this.dialogConfig),this.taskSource$=this.taskSource.asObservable(),this.selectedTask$=this.selectedTask.asObservable(),this.dialogSource$=this.dialogSource.asObservable(),this.http.get("assets/demo/data/tasks.json").toPromise().then(i=>i.data).then(i=>{this.tasks=i,this.taskSource.next(i)})}addTask(t){this.tasks=this.tasks.includes(t)?this.tasks.map(i=>i.id===t.id?t:i):[...this.tasks,t],this.taskSource.next(this.tasks)}removeTask(t){this.tasks=this.tasks.filter(i=>i.id!==t),this.taskSource.next(this.tasks)}onTaskSelect(t){this.selectedTask.next(t)}markAsCompleted(t){this.tasks=this.tasks.map(i=>i.id===t.id?t:i),this.taskSource.next(this.tasks)}showDialog(t,i){this.dialogConfig={visible:!0,header:t,newTask:i},this.dialogSource.next(this.dialogConfig)}closeDialog(){this.dialogConfig={visible:!1},this.dialogSource.next(this.dialogConfig)}}return(s=a).\u0275fac=function(t){return new(t||s)(e.LFG(J.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),a})();var g=l(5593),u=l(1795),h=l(805),D=l(6193),C=l(1740),b=l(5121),v=l(8645),_=l(2453),x=l(3631),Z=l(1493);function w(s,a){if(1&s&&(e.TgZ(0,"div",20),e._UZ(1,"img",21),e.TgZ(2,"span",22),e._uU(3),e.qZA()()),2&s){const n=a.$implicit;e.xp6(1),e.MGl("src","assets/demo/images/avatar/",n.image,"",e.LSH),e.Q6J("alt",n.name),e.xp6(2),e.Oqu(n.name)}}function U(s,a){if(1&s&&(e.TgZ(0,"div",23),e._UZ(1,"img",21),e.TgZ(2,"span",22),e._uU(3),e.qZA()()),2&s){const n=a.$implicit;e.xp6(1),e.MGl("src","assets/demo/images/avatar/",n.image,"",e.LSH),e.Q6J("alt",n.name),e.xp6(2),e.Oqu(n.name)}}const N=function(){return{height:"150px"}},O=function(){return{height:"2.5rem"}};let Q=(()=>{var s;class a{constructor(t,i,r){this.memberService=t,this.messageService=i,this.taskService=r,this.members=[],this.filteredMembers=[],this.dialogConfig={header:"",visible:!1},this.subscription=this.taskService.selectedTask$.subscribe(o=>this.task=o),this.dialogSubscription=this.taskService.dialogSource$.subscribe(o=>{this.dialogConfig=o,this.dialogConfig.newTask&&this.resetTask()})}ngOnInit(){this.memberService.getMembers().then(t=>this.members=t),this.resetTask()}filterMembers(t){let i=[],r=t.query;for(let o=0;o<this.members.length;o++){let p=this.members[o];0==p.name?.toLowerCase().indexOf(r.toLowerCase())&&i.push(p)}this.filteredMembers=i}save(){this.task.id=Math.floor(1e3*Math.random()),this.messageService.add({severity:"success",summary:"Success",detail:`Task "${this.task.name}" created successfully.`}),this.taskService.addTask(this.task),this.taskService.closeDialog()}cancelTask(){this.resetTask(),this.taskService.closeDialog()}resetTask(){this.task={id:this.task&&this.task.id?this.task.id:Math.floor(1e3*Math.random()),status:"Waiting"}}ngOnDestroy(){this.subscription.unsubscribe()}}return(s=a).\u0275fac=function(t){return new(t||s)(e.Y36(D.n),e.Y36(h.ez),e.Y36(d))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-create-task"]],features:[e._Bn([h.ez])],decls:29,vars:18,consts:[["styleClass","mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6","contentStyleClass","border-round-bottom border-top-1 surface-border p-0",3,"header","visible","modal","dismissableMask","visibleChange"],[1,"p-4"],[1,"grid","p-fluid","formgrid"],[1,"col-12","field"],["for","name",1,"text-900","font-semibold"],["id","name","type","text","placeholder","Title","pInputText","",3,"ngModel","ngModelChange"],["for","description",1,"text-900","font-semibold"],[3,"ngModel","ngModelChange"],[1,"col-6","field","mt-0"],["for","start",1,"text-900","font-semibold"],["appendTo","body","dateFormat","yy-mm-dd","inputId","start","placeholder","Start Date",3,"showTime","ngModel","ngModelChange"],["for","end",1,"text-900","font-semibold"],["appendTo","body","dateFormat","yy-mm-dd","inputId","end","placeholder","Due Date",3,"showTime","ngModel","ngModelChange"],["for","members",1,"text-900","font-semibold"],["appendTo","body","inputId","members","field","name","placeholder","Choose team members",3,"ngModel","suggestions","multiple","inputStyle","ngModelChange","completeMethod"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"col-12","flex","justify-content-end","mt-4"],["pButton","","pRipple","","icon","pi pi-times","label","Cancel",1,"p-button-outlined","w-8rem","mr-3",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Save",1,"p-button-primary","w-8rem",3,"click"],[1,"flex","align-items-center"],[1,"h-2rem","w-2rem","mr-2",3,"src","alt"],[1,"text-900","font-medium"],[1,"flex","align-items-center","border-round"]],template:function(t,i){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"p-dialog",0),e.NdJ("visibleChange",function(o){return i.dialogConfig.visible=o}),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e._uU(6,"Task Name"),e.qZA(),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(o){return i.task.name=o}),e.qZA()(),e.TgZ(8,"div",3)(9,"label",6),e._uU(10,"Description"),e.qZA(),e.TgZ(11,"p-editor",7),e.NdJ("ngModelChange",function(o){return i.task.description=o}),e.qZA()(),e.TgZ(12,"div",8)(13,"label",9),e._uU(14,"Start Date"),e.qZA(),e.TgZ(15,"p-calendar",10),e.NdJ("ngModelChange",function(o){return i.task.startDate=o}),e.qZA()(),e.TgZ(16,"div",8)(17,"label",11),e._uU(18,"Due Date"),e.qZA(),e.TgZ(19,"p-calendar",12),e.NdJ("ngModelChange",function(o){return i.task.endDate=o}),e.qZA()(),e.TgZ(20,"div",3)(21,"label",13),e._uU(22,"Add Team Member"),e.qZA(),e.TgZ(23,"p-autoComplete",14),e.NdJ("ngModelChange",function(o){return i.task.members=o})("completeMethod",function(o){return i.filterMembers(o)}),e.YNc(24,w,4,3,"ng-template",15),e.YNc(25,U,4,3,"ng-template",16),e.qZA()(),e.TgZ(26,"div",17)(27,"button",18),e.NdJ("click",function(){return i.cancelTask()}),e.qZA(),e.TgZ(28,"button",19),e.NdJ("click",function(){return i.save()}),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("header",i.dialogConfig.header||"")("visible",i.dialogConfig.visible)("modal",!0)("dismissableMask",!0),e.xp6(6),e.Q6J("ngModel",i.task.name),e.xp6(4),e.Akn(e.DdM(16,N)),e.Q6J("ngModel",i.task.description),e.xp6(4),e.Q6J("showTime",!1)("ngModel",i.task.startDate),e.xp6(4),e.Q6J("showTime",!1)("ngModel",i.task.endDate),e.xp6(4),e.Q6J("ngModel",i.task.members)("suggestions",i.filteredMembers)("multiple",!0)("inputStyle",e.DdM(17,O)))},dependencies:[m.Fj,m.JJ,m.On,g.Hq,h.jx,C.o,b.ML,v.f,_.FN,x.Qc,Z.V,u.H],encapsulation:2}),a})();var M=l(8271),S=l(8558),A=l(1989),y=l(1327);const q=["menu"];function F(s,a){if(1&s&&(e.TgZ(0,"span",18),e._UZ(1,"i",19),e._uU(2),e.qZA()),2&s){const n=e.oxw().$implicit;e.xp6(2),e.Oqu(n.comments)}}function I(s,a){if(1&s&&(e.TgZ(0,"span",18),e._UZ(1,"i",20),e._uU(2),e.qZA()),2&s){const n=e.oxw().$implicit;e.xp6(2),e.Oqu(n.attachments)}}function $(s,a){if(1&s&&(e.TgZ(0,"span",21),e._UZ(1,"i",22),e._uU(2),e.qZA()),2&s){const n=e.oxw().$implicit,t=e.oxw();e.xp6(2),e.Oqu(t.parseDate(n.startDate))}}function Y(s,a){1&s&&e._UZ(0,"p-avatar",23),2&s&&e.MGl("image","assets/demo/images/avatar/",a.$implicit.image,"")}const j=function(){return{"background-color":"#ffffff",color:"#212121",border:"2px solid var(--surface-border)"}};function z(s,a){if(1&s&&e._UZ(0,"p-avatar",24),2&s){const n=e.oxw().$implicit;e.Akn(e.DdM(3,j)),e.MGl("label","+ ",n.members.length-4,"")}}const H=function(s){return{"line-through":s}};function G(s,a){if(1&s){const n=e.EpF();e.TgZ(0,"li",3)(1,"div",4)(2,"p-checkbox",5),e.NdJ("onChange",function(i){const o=e.CHM(n).$implicit,p=e.oxw();return e.KtG(p.onCheckboxChange(i,o))})("ngModelChange",function(i){const o=e.CHM(n).$implicit;return e.KtG(o.completed=i)}),e.qZA(),e.TgZ(3,"label",6),e._uU(4),e.qZA()(),e.TgZ(5,"div",7)(6,"div",8),e.YNc(7,F,3,1,"span",9),e.YNc(8,I,3,1,"span",9),e.YNc(9,$,3,1,"span",10),e.qZA(),e.TgZ(10,"div",11)(11,"p-avatarGroup",12),e.YNc(12,Y,1,1,"p-avatar",13),e.ALo(13,"slice"),e.YNc(14,z,1,4,"p-avatar",14),e.qZA(),e.TgZ(15,"button",15),e.NdJ("click",function(i){const o=e.CHM(n).$implicit,p=e.oxw();return e.KtG(p.toggleMenu(i,o))}),e.qZA(),e._UZ(16,"p-menu",16,17),e.qZA()()()}if(2&s){const n=a.$implicit,t=e.oxw();e.xp6(2),e.Q6J("binary",!0)("ngModel",n.completed)("inputId",n.id.toString()),e.xp6(1),e.Q6J("ngClass",e.VKq(16,H,n.completed)),e.xp6(1),e.Oqu(n.name),e.xp6(3),e.Q6J("ngIf",n.comments),e.xp6(1),e.Q6J("ngIf",n.attachments),e.xp6(1),e.Q6J("ngIf",n.startDate),e.xp6(3),e.Q6J("ngForOf",e.Dn7(13,12,n.members,0,4)),e.xp6(2),e.Q6J("ngIf",n&&n.members&&n.members.length>4),e.xp6(2),e.Q6J("popup",!0)("model",t.menuItems)}}let B=(()=>{var s;class a{constructor(t){this.taskService=t,this.menuItems=[]}ngOnInit(){this.menuItems=[{label:"Edit",icon:"pi pi-pencil",command:()=>this.onEdit()},{label:"Delete",icon:"pi pi-trash",command:()=>this.handleDelete()}]}parseDate(t){return new Date(t).toUTCString().split(" ").slice(1,3).join(" ")}handleDelete(){this.taskService.removeTask(this.clickedTask.id)}toggleMenu(t,i){this.clickedTask=i,this.menu.toggle(t)}onEdit(){this.taskService.onTaskSelect(this.clickedTask),this.taskService.showDialog("Edit Task",!1)}onCheckboxChange(t,i){t.originalEvent.stopPropagation(),i.completed=t.checked,this.taskService.markAsCompleted(i)}}return(s=a).\u0275fac=function(t){return new(t||s)(e.Y36(d))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-task-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(q,5),2&t){let r;e.iGM(r=e.CRH())&&(i.menu=r.first)}},inputs:{taskList:"taskList",title:"title"},decls:5,vars:2,consts:[[1,"text-900","font-semibold","text-lg","mt-5","mb-3","border-bottom-1","surface-border","py-3"],[1,"list-none","p-0","m-0"],["class","flex flex-column gap-3 md:flex-row md:align-items-center p-2 border-bottom-1 surface-border",4,"ngFor","ngForOf"],[1,"flex","flex-column","gap-3","md:flex-row","md:align-items-center","p-2","border-bottom-1","surface-border"],[1,"flex","align-items-center","flex-1"],[3,"binary","ngModel","inputId","onChange","ngModelChange"],["for","task.id",1,"font-medium","ml-2",2,"word-break","break-word",3,"ngClass"],[1,"flex","flex-1","gap-3","flex-column","sm:flex-row","sm:justify-content-between"],[1,"flex","align-items-center"],["class","flex align-items-center font-semibold mr-3",4,"ngIf"],["class","flex align-items-center font-semibold white-space-nowrap",4,"ngIf"],[1,"flex","align-items-center","sm:justify-content-end"],["styleClass","mr-3"],["size","large","shape","circle",3,"image",4,"ngFor","ngForOf"],["shape","circle","size","large",3,"label","style",4,"ngIf"],["pButton","","pRipple","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-text","z-3","ml-auto","sm:ml-0",3,"click"],["styleClass","w-8rem",3,"popup","model"],["menu",""],[1,"flex","align-items-center","font-semibold","mr-3"],[1,"pi","pi-comment","mr-2"],[1,"pi","pi-paperclip","mr-2"],[1,"flex","align-items-center","font-semibold","white-space-nowrap"],[1,"pi","pi-clock","mr-2"],["size","large","shape","circle",3,"image"],["shape","circle","size","large",3,"label"]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"div",0),e._uU(2),e.qZA(),e.TgZ(3,"ul",1),e.YNc(4,G,18,18,"li",2),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(i.title),e.xp6(2),e.Q6J("ngForOf",i.taskList))},dependencies:[c.mk,c.sg,c.O5,m.JJ,m.On,g.Hq,M.q,S.H,A.XZ,y.v2,u.H,c.OU],encapsulation:2,changeDetection:0}),a})(),R=(()=>{var s;class a{constructor(t){this.taskService=t,this.todo=[],this.completed=[],this.subscription=this.taskService.taskSource$.subscribe(i=>this.categorize(i))}categorize(t){this.todo=t.filter(i=>!0!==i.completed),this.completed=t.filter(i=>i.completed)}ngOnDestroy(){this.subscription.unsubscribe()}showDialog(){this.taskService.showDialog("Create Task",!0)}}return(s=a).\u0275fac=function(t){return new(t||s)(e.Y36(d))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:8,vars:2,consts:[[1,"card"],[1,"flex","justify-content-between","align-items-center","mb-5"],[1,"text-900","text-xl","font-semibold"],["pButton","","pRipple","","icon","pi pi-plus","label","Create Task",1,"p-button-outlined","font-semibold",3,"click"],["title","ToDo",3,"taskList"],["title","Completed",3,"taskList"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3,"Task List"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return i.showDialog()}),e.qZA()(),e._UZ(5,"app-task-list",4)(6,"app-task-list",5),e.qZA(),e._UZ(7,"app-create-task")),2&t&&(e.xp6(5),e.Q6J("taskList",i.todo),e.xp6(1),e.Q6J("taskList",i.completed))},dependencies:[g.Hq,u.H,Q,B],encapsulation:2}),a})(),E=(()=>{var s;class a{}return(s=a).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[k.Bz.forChild([{path:"",component:R}]),k.Bz]}),a})(),X=(()=>{var s;class a{}return(s=a).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[d],imports:[c.ez,m.u5,E,g.hJ,C.j,b.Z_,v._8,_.EV,x.WN,M.F,S.Q,A.nD,y.$9,Z.S,u.T]}),a})()}}]);