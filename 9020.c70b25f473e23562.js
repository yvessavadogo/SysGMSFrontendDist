"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[9020],{9020:(fe,w,p)=>{p.r(w),p.d(w,{MailAppModule:()=>_e});var u=p(6895),h=p(433),d=p(359),e=p(1571),S=p(2453),F=p(9300),I=p(1135),N=p(529);let m=(()=>{var n;class l{constructor(t){this.http=t,this._mails=[],this.mails=new I.X(this._mails),this.mails$=this.mails.asObservable(),this.http.get("assets/demo/data/mail.json").toPromise().then(i=>i.data).then(i=>{this.updateMails(i)})}updateMails(t){this._mails=t,this.mails.next(t)}onStar(t){this._mails=this._mails.map(i=>i.id===t?{...i,starred:!i.starred}:i),this.mails.next(this._mails)}onArchive(t){this._mails=this._mails.map(i=>i.id===t?{...i,archived:!i.archived}:i),this.mails.next(this._mails)}onBookmark(t){this._mails=this._mails.map(i=>i.id===t?{...i,important:!i.important}:i),this.mails.next(this._mails)}onDelete(t){this._mails=this._mails.filter(i=>i.id!==t),this.mails.next(this._mails)}onDeleteMultiple(t){let i=t.map(o=>Number(o.id));this._mails=this._mails.filter(o=>-1==i.indexOf(o.id)),this.mails.next(this._mails)}onArchiveMultiple(t){let i=t.map(o=>o.id);for(let o=0;o<this._mails.length;o++){let s=this._mails[o];-1!==i.indexOf(s.id)&&(s.archived=!0,this._mails[o]=s)}this.mails.next(this._mails)}onSpamMultiple(t){let i=t.map(o=>o.id);for(let o=0;o<this._mails.length;o++){let s=this._mails[o];-1!==i.indexOf(s.id)&&(s={...s,spam:!0,important:!1,starred:!1,archived:!1},this._mails[o]=s)}this.mails.next(this._mails)}onTrash(t){this._mails=this._mails.map(i=>i.id===t?{...i,trash:!0}:i),this.mails.next(this._mails)}onSend(t){t.id||(t.id=this.generateId()),t.title||(t.title="Untitled"),t.date=this.generateDate(),this._mails.push(t),this.mails.next(this._mails)}generateId(){let t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var o=0;o<5;o++)t+=i.charAt(Math.floor(Math.random()*i.length));return t}generateDate(){return(new Date).toDateString().split(" ").slice(1,4).join(" ")}}return(n=l).\u0275fac=function(t){return new(t||n)(e.LFG(N.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),l})();var _=p(5593),f=p(1795);function D(n,l){if(1&n&&(e.TgZ(0,"span",8),e._uU(1),e.qZA()),2&n){const a=e.oxw().$implicit;e.xp6(1),e.Oqu(a.badge)}}const R=function(n,l){return{"bg-primary":n,"hover:surface-hover":l}},A=function(n){return{"text-primary-50":n}};function Q(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"li",4),e.NdJ("click",function(){const o=e.CHM(a).$implicit,s=e.oxw();return e.KtG(s.navigate(o))}),e._UZ(1,"i",5),e.TgZ(2,"span",6),e._uU(3),e.qZA(),e.YNc(4,D,2,1,"span",7),e.qZA()}if(2&n){const a=l.$implicit,t=e.oxw();e.Q6J("ngClass",e.WLB(7,R,t.url===a.routerLink,t.url!==a.routerLink)),e.xp6(1),e.Tol(a.icon||""),e.Q6J("ngClass",e.VKq(10,A,t.url===a.routerLink)),e.xp6(1),e.Q6J("ngClass",e.VKq(12,A,t.url===a.routerLink)),e.xp6(1),e.Oqu(a.label),e.xp6(1),e.Q6J("ngIf",a.badge)}}let Y=(()=>{var n;class l{constructor(t,i){this.router=t,this.mailService=i,this.items=[],this.url="",this.mailSubscription=this.mailService.mails$.subscribe(o=>this.getBadgeValues(o)),this.routeSubscription=this.router.events.pipe((0,F.h)(o=>o instanceof d.m2)).subscribe(o=>{this.url=o.url})}navigate(t){t.routerLink&&this.router.navigate([t.routerLink])}getBadgeValues(t){let i=[],o=[],s=[],c=[],M=[],T=[],H=[];for(let Z=0;Z<t.length;Z++){let r=t[Z];!r.archived&&!r.trash&&!r.spam&&!r.hasOwnProperty("sent")&&i.push(r),r.starred&&!r.archived&&!r.trash&&o.push(r),r.spam&&!r.archived&&!r.trash&&s.push(r),r.important&&!r.archived&&!r.trash&&c.push(r),r.archived&&!r.trash&&M.push(r),r.trash&&T.push(r),r.sent&&!r.archived&&!r.trash&&H.push(r)}this.badgeValues={inbox:i.length,starred:o.length,spam:s.length,important:c.length,archived:M.length,trash:T.length,sent:H.length},this.updateSidebar()}updateSidebar(){this.items=[{label:"Inbox",icon:"pi pi-inbox",badge:this.badgeValues.inbox,routerLink:"/apps/mail/inbox"},{label:"Starred",icon:"pi pi-star",badge:this.badgeValues.starred,routerLink:"/apps/mail/starred"},{label:"Spam",icon:"pi pi-ban",badge:this.badgeValues.spam,routerLink:"/apps/mail/spam"},{label:"Important",icon:"pi pi-bookmark",badge:this.badgeValues.important,routerLink:"/apps/mail/important"},{label:"Sent",icon:"pi pi-send",badge:this.badgeValues.sent,routerLink:"/apps/mail/sent"},{label:"Archived",icon:"pi pi-book",badge:this.badgeValues.archived,routerLink:"/apps/mail/archived"},{label:"Trash",icon:"pi pi-trash",badge:this.badgeValues.trash,routerLink:"/apps/mail/trash"}]}ngOnDestroy(){this.mailSubscription.unsubscribe(),this.routeSubscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mail-sidebar"]],decls:5,vars:1,consts:[["pButton","","pRipple","","label","Compose New","routerLink","/apps/mail/compose",1,"mb-5","w-full","p-button-outlined"],[1,"overflow-auto"],[1,"flex","flex-row","md:flex-column","gap-1","md:gap-2","list-none","m-0","p-0","overflow-auto"],["pRipple","","class","cursor-pointer select-none p-3 transition-duration-150 border-round flex align-items-center justify-content-center md:justify-content-start md:flex-1 flex-auto",3,"ngClass","click",4,"ngFor","ngForOf"],["pRipple","",1,"cursor-pointer","select-none","p-3","transition-duration-150","border-round","flex","align-items-center","justify-content-center","md:justify-content-start","md:flex-1","flex-auto",3,"ngClass","click"],[1,"md:mr-3","text-600","transition-duration-150","text-lg",3,"ngClass"],[1,"text-900","font-medium","hidden","md:inline",3,"ngClass"],["class","ml-auto text-sm font-semibold bg-primary-50 text-primary-900 px-2 py-1 hidden md:inline","style","border-radius: 2rem",4,"ngIf"],[1,"ml-auto","text-sm","font-semibold","bg-primary-50","text-primary-900","px-2","py-1","hidden","md:inline",2,"border-radius","2rem"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e._UZ(1,"button",0),e.TgZ(2,"div",1)(3,"ul",2),e.YNc(4,Q,5,14,"li",3),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",i.items))},dependencies:[u.mk,u.sg,u.O5,d.rH,_.Hq,f.H],encapsulation:2}),l})(),q=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:7,vars:0,consts:[[1,"card"],[1,"flex","flex-column","md:flex-row","gap-4"],[1,"w-full","md:w-3","xl:w-2","xl:p-3"],[1,"md:w-9","xl:w-10","xl:p-3"]],template:function(t,i){1&t&&(e._UZ(0,"p-toast"),e.TgZ(1,"div",0)(2,"div",1)(3,"div",2),e._UZ(4,"app-mail-sidebar"),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"router-outlet"),e.qZA()()())},dependencies:[d.lC,S.FN,Y],encapsulation:2}),l})();var b=p(805),k=p(1327),J=p(3608),v=p(6174),x=p(1740),y=p(8271),U=p(1493),C=p(5121);function B(n,l){if(1&n&&e._UZ(0,"div",20),2&n){const a=e.oxw(2);e.Q6J("innerHTML",a.content.message,e.oJD)}}const O=function(){return{height:"250px"}};function j(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"label",4),e._uU(4,"To"),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"i",6),e.TgZ(7,"input",7),e.NdJ("ngModelChange",function(i){e.CHM(a);const o=e.oxw();return e.KtG(o.content.from=i)}),e.qZA()()(),e.TgZ(8,"div",3)(9,"label",8),e._uU(10,"Subject"),e.qZA(),e.TgZ(11,"span",5),e._UZ(12,"i",9),e.TgZ(13,"input",10),e.NdJ("ngModelChange",function(i){e.CHM(a);const o=e.oxw();return e.KtG(o.content.title=i)}),e.qZA()()(),e.YNc(14,B,1,1,"div",11),e.TgZ(15,"div",12)(16,"span",13),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.toggleMessage())}),e._UZ(17,"i",14),e.qZA(),e.TgZ(18,"p-editor",15),e.NdJ("ngModelChange",function(i){e.CHM(a);const o=e.oxw();return e.KtG(o.newMail.message=i)}),e.qZA()()(),e.TgZ(19,"div",16),e._UZ(20,"button",17)(21,"button",18),e.TgZ(22,"button",19),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.sendMail())}),e.qZA()()()}if(2&n){const a=e.oxw();e.xp6(7),e.Q6J("ngModel",a.content.from),e.xp6(6),e.Q6J("ngModel",a.content.title),e.xp6(1),e.Q6J("ngIf",a.displayMessage),e.xp6(2),e.Q6J("pTooltip",a.displayMessage?"Hide content":"Show content"),e.xp6(2),e.Akn(e.DdM(7,O)),e.Q6J("ngModel",a.newMail.message)}}let L=(()=>{var n;class l{constructor(t,i){this.messageService=t,this.mailService=i,this.newMail={id:"",to:"",email:"",image:"",title:"",message:"",date:"",important:!1,starred:!1,trash:!1,spam:!1,archived:!1,sent:!0},this.displayMessage=!1,this.content={},this.hide=new e.vpe}sendMail(){let{image:t,from:i,title:o}=this.content;this.newMail={...this.newMail,to:i,title:o,image:t},this.mailService.onSend(this.newMail),this.messageService.add({severity:"success",summary:"Success",detail:"Mail sent"}),this.hide.emit()}toggleMessage(){this.displayMessage=!this.displayMessage}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(b.ez),e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mail-reply"]],inputs:{content:"content"},outputs:{hide:"hide"},decls:1,vars:1,consts:[["class","p-0 m-0",4,"ngIf"],[1,"p-0","m-0"],[1,"surface-section","grid","grid-nogutter","formgrid","flex-column","md:flex-row","gap-6","p-5","border-round"],[1,"col"],["for","to",1,"block","text-900","font-semibold","mb-3"],[1,"p-input-icon-left","w-full",2,"height","3.5rem"],[1,"pi","pi-user",2,"left","1.5rem"],["id","to","type","text","pInputText","",1,"w-full","pl-7","text-900","font-semibold",2,"height","3.5rem",3,"ngModel","ngModelChange"],["for","Subject",1,"block","text-900","font-semibold","mb-3"],[1,"pi","pi-pencil",2,"left","1.5rem"],["id","subject","type","text","pInputText","","placeholder","Subject",1,"w-full","pl-7","text-900","font-semibold",2,"height","3.5rem",3,"ngModel","ngModelChange"],["class","border-1 surface-border border-round p-4",3,"innerHTML",4,"ngIf"],[1,"col-12","field"],[1,"surface-ground","cursor-pointer","border-round","px-2",3,"pTooltip","click"],[1,"pi","pi-ellipsis-h"],["styleClass","mt-3",3,"ngModel","ngModelChange"],[1,"flex","column-gap-3","justify-content-end","p-5","border-top-1","surface-border"],["pButton","","pRipple","","type","button","icon","pi pi-image",1,"p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-paperclip",1,"p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-send","label","Send",1,"p-button-primary","h-3rem",3,"click"],[1,"border-1","surface-border","border-round","p-4",3,"innerHTML"]],template:function(t,i){1&t&&e.YNc(0,j,23,8,"div",0),2&t&&e.Q6J("ngIf",i.content)},dependencies:[u.O5,h.Fj,h.JJ,h.On,J.u,_.Hq,f.H,x.o,C.ML],encapsulation:2}),l})();function G(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e._UZ(2,"p-tableHeaderCheckbox")(3,"button",8),e.TgZ(4,"button",9),e.NdJ("click",function(i){e.CHM(a);const o=e.MAs(6);return e.KtG(o.toggle(i))}),e.qZA(),e._UZ(5,"p-menu",10,11),e.qZA(),e.TgZ(7,"span",12),e._UZ(8,"i",13),e.TgZ(9,"input",14),e.NdJ("input",function(i){e.CHM(a);const o=e.oxw(),s=e.MAs(1);return e.KtG(o.onGlobalFilter(s,i))}),e.qZA()()()}if(2&n){const a=e.oxw(),t=e.MAs(1);e.xp6(5),e.Q6J("model",a.menuItems)("appendTo",t)("popup",!0)}}const $=function(n,l){return{"pi-star-fill":n,"pi-star":l}};function K(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"td",33)(1,"span",34),e.NdJ("click",function(i){e.CHM(a);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onStar(i,o.id))})("touchend",function(i){e.CHM(a);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onStar(i,o.id))}),e._UZ(2,"i",35),e.qZA()()}if(2&n){const a=e.oxw().$implicit;e.xp6(2),e.Q6J("ngClass",e.WLB(1,$,a.starred,!a.starred))}}const V=function(n,l){return{"pi-bookmark-fill":n,"pi-bookmark":l}};function P(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"td",33)(1,"span",34),e.NdJ("click",function(i){e.CHM(a);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onBookmark(i,o.id))})("touchend",function(i){e.CHM(a);const o=e.oxw().$implicit,s=e.oxw();return e.KtG(s.onBookmark(i,o.id))}),e._UZ(2,"i",35),e.qZA()()}if(2&n){const a=e.oxw().$implicit;e.xp6(2),e.Q6J("ngClass",e.WLB(1,V,a.important,!a.important))}}function X(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"tr",15),e.NdJ("mouseenter",function(i){e.CHM(a);const o=e.MAs(18),s=e.MAs(15),c=e.oxw();return e.KtG(c.toggleOptions(i,o,s))})("mouseleave",function(i){e.CHM(a);const o=e.MAs(18),s=e.MAs(15),c=e.oxw();return e.KtG(c.toggleOptions(i,o,s))})("click",function(){const o=e.CHM(a).$implicit,s=e.oxw();return e.KtG(s.onRowSelect(o.id))}),e.TgZ(1,"td",16)(2,"p-tableCheckbox",17),e.NdJ("click",function(i){return i.stopPropagation()})("touchend",function(i){return i.stopPropagation()}),e.qZA()(),e.YNc(3,K,3,4,"td",18),e.YNc(4,P,3,4,"td",18),e.TgZ(5,"td",19),e._UZ(6,"p-avatar",20),e.qZA(),e.TgZ(7,"td",21),e._uU(8),e.qZA(),e.TgZ(9,"td",22)(10,"span",23),e._uU(11),e.qZA()(),e.TgZ(12,"td",24)(13,"div",25)(14,"span",26,27),e._uU(16),e.qZA(),e.TgZ(17,"div",28,29)(19,"button",30),e.NdJ("click",function(i){const s=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.onArchive(i,s.id))}),e.qZA(),e.TgZ(20,"button",31),e.NdJ("click",function(i){const s=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.onReply(i,s))}),e.qZA(),e.TgZ(21,"button",32),e.NdJ("click",function(i){const s=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.onTrash(i,s))}),e.qZA()()()()()}if(2&n){const a=l.$implicit;e.xp6(2),e.Q6J("value",a),e.xp6(1),e.Q6J("ngIf",!a.trash&&!a.spam),e.xp6(1),e.Q6J("ngIf",!a.trash&&!a.spam),e.xp6(2),e.Q6J("image",a.image?"assets/demo/images/avatar/"+a.image:"assets/layout/images/avatar.png"),e.xp6(2),e.hij(" ",a.from||a.to," "),e.xp6(3),e.hij(" ",a.title," "),e.xp6(5),e.hij(" ",a.date," ")}}const z=function(){return["from","title","message"]},E=function(){return[10,20,30]};let g=(()=>{var n;class l{constructor(t,i,o){this.router=t,this.mailService=i,this.messageService=o,this.menuItems=[],this.selectedMails=[],this.mail={},this.dialogVisible=!1}ngOnInit(){this.menuItems=[{label:"Archive",icon:"pi pi-fw pi-file",command:()=>this.onArchiveMultiple()},{label:"Spam",icon:"pi pi-fw pi-ban",command:()=>this.onSpamMultiple()},{label:"Delete",icon:"pi pi-fw pi-trash",command:()=>this.onDeleteMultiple()}]}toggleOptions(t,i,o){"mouseenter"===t.type?(i.style.display="flex",o.style.display="none"):(i.style.display="none",o.style.display="flex")}onRowSelect(t){this.router.navigate(["/apps/mail/detail/",t])}onStar(t,i){t.stopPropagation(),this.mailService.onStar(i)}onArchive(t,i){t.stopPropagation(),this.mailService.onArchive(i),this.messageService.add({severity:"info",summary:"Info",detail:"Mail archived",life:3e3})}onBookmark(t,i){t.stopPropagation(),this.mailService.onBookmark(i)}onDelete(t){this.mailService.onDelete(t),this.messageService.add({severity:"info",summary:"Info",detail:"Mail deleted",life:3e3})}onDeleteMultiple(){this.selectedMails&&this.selectedMails.length>0&&(this.mailService.onDeleteMultiple(this.selectedMails),this.messageService.add({severity:"info",summary:"Info",detail:"Mails deleted",life:3e3}))}onSpamMultiple(){this.selectedMails&&this.selectedMails.length>0&&(this.mailService.onSpamMultiple(this.selectedMails),this.messageService.add({severity:"info",summary:"Info",detail:"Moved to spam",life:3e3}))}onArchiveMultiple(){this.selectedMails&&this.selectedMails.length>0&&(this.mailService.onArchiveMultiple(this.selectedMails),this.messageService.add({severity:"info",summary:"Info",detail:"Moved to archive",life:3e3}))}onTrash(t,i){t.stopPropagation(),i.trash&&this.onDelete(i.id),this.mailService.onTrash(i.id)}onReply(t,i){t.stopPropagation(),this.mail=i,this.dialogVisible=!0}onGlobalFilter(t,i){t.filterGlobal(i.target.value,"contains")}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(m),e.Y36(b.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-mail-table"]],inputs:{mails:"mails"},decls:6,vars:13,consts:[["responsiveLayout","scroll","selectionMode","multiple","dataKey","id",3,"value","rows","globalFilterFields","paginator","rowsPerPageOptions","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","body"],["header","New Message","styleClass","mx-3 sm:mx-0 sm:w-full md:w-8 lg:w-6","contentStyleClass","border-round-bottom border-top-1 surface-border p-0",3,"visible","closable","modal","visibleChange","onHide"],[3,"content","hide"],[1,"flex","flex-wrap","align-items-center","justify-content-between","gap-3"],[1,"flex","gap-2","align-items-center"],["pButton","","pRipple","","type","button","icon","pi pi-refresh",1,"p-button-rounded","p-button-text","p-button-plain","ml-4"],["pButton","","pRipple","","type","button","icon","pi pi-ellipsis-v",1,"p-button-rounded","p-button-text","p-button-plain","ml-3",3,"click"],[3,"model","appendTo","popup"],["menu",""],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search Mail",1,"w-full","sm:w-auto",3,"input"],[1,"cursor-pointer",3,"mouseenter","mouseleave","click"],[1,"pl-3",2,"width","4rem"],[3,"value","click","touchend"],["style","width: 4rem",4,"ngIf"],[2,"min-width","4rem"],[3,"image"],[1,"text-900","font-semibold",2,"min-width","12rem"],[2,"min-width","12rem"],[1,"font-medium","white-space-nowrap","overflow-hidden","text-overflow-ellipsis","block",2,"max-width","30rem"],[2,"min-width","10rem"],[1,"flex","justify-content-end","w-full","px-0"],[1,"text-700","font-semibold","white-space-nowrap"],["date",""],[2,"display","none"],["options",""],["pButton","","pRipple","","icon","pi pi-inbox","pTooltip","Archive","tooltipPosition","top","type","button",1,"h-2rem","w-2rem","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-reply","pTooltip","Reply","tooltipPosition","top","type","button",1,"p-button-secondary","h-2rem","w-2rem","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash","pTooltip","Trash","tooltipPosition","top","type","button",1,"p-button-danger","h-2rem","w-2rem",3,"click"],[2,"width","4rem"],[1,"cursor-pointer",3,"click","touchend"],[1,"pi","pi-fw","text-xl",3,"ngClass"]],template:function(t,i){1&t&&(e.TgZ(0,"p-table",0,1),e.NdJ("selectionChange",function(s){return i.selectedMails=s}),e.YNc(2,G,10,3,"ng-template",2),e.YNc(3,X,22,7,"ng-template",3),e.qZA(),e.TgZ(4,"p-dialog",4),e.NdJ("visibleChange",function(s){return i.dialogVisible=s})("onHide",function(){return i.dialogVisible=!1}),e.TgZ(5,"app-mail-reply",5),e.NdJ("hide",function(){return i.dialogVisible=!1}),e.qZA()()),2&t&&(e.Q6J("value",i.mails)("rows",10)("globalFilterFields",e.DdM(11,z))("paginator",!0)("rowsPerPageOptions",e.DdM(12,E))("selection",i.selectedMails)("rowHover",!0),e.xp6(4),e.Q6J("visible",i.dialogVisible)("closable",!0)("modal",!0),e.xp6(1),e.Q6J("content",i.mail))},dependencies:[u.mk,u.O5,k.v2,J.u,_.Hq,b.jx,f.H,v.iA,v.UA,v.Mo,x.o,y.q,U.V,L],encapsulation:2}),l})(),W=(()=>{var n;class l{constructor(t,i){this.mailService=t,this.router=i,this.mails=[],this.subscription=this.mailService.mails$.subscribe(o=>{this.mails=o.filter(s=>!(s.archived||s.spam||s.trash||s.hasOwnProperty("sent")))})}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.mails)},dependencies:[g],encapsulation:2}),l})();const ee=function(){return{height:"250px"}};let te=(()=>{var n;class l{constructor(t,i,o,s){this.messageService=t,this.location=i,this.router=o,this.mailService=s,this.newMail={id:"",to:"",email:"",image:"",title:"",message:"",date:"",important:!1,starred:!1,trash:!1,spam:!1,archived:!1,sent:!0}}sendMail(){this.newMail.message&&(this.newMail.id=Math.floor(1e3*Math.random()),this.mailService.onSend(this.newMail),this.messageService.add({severity:"success",summary:"Success",detail:"Mail sent"}),this.router.navigate(["apps/mail/inbox"]))}goBack(){this.location.back()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(b.ez),e.Y36(u.Ye),e.Y36(d.F0),e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:21,vars:6,consts:[[1,"flex","align-items-center","px-4","md:px-0","border-top-1","surface-border","md:border-none","pt-4","md:pt-0"],["pButton","","pRipple","","type","button","icon","pi pi-chevron-left",1,"p-button-outlined","p-button-secondary","surface-border","text-900","w-3rem","h-3rem","mr-3",3,"click"],[1,"block","text-900","font-bold","text-xl"],[1,"surface-section","grid","mt-4","grid-nogutter","formgrid","p-4","gap-3","md:surface-border","md:border-1","border-round"],[1,"col-12","field"],["for","to",1,"text-900","font-semibold"],[1,"p-input-icon-left","w-full",2,"height","3.5rem"],[1,"pi","pi-user",2,"left","1.5rem"],["id","to","type","text","pInputText","",1,"w-full","pl-7","text-900","font-semibold",2,"height","3.5rem",3,"ngModel","ngModelChange"],["for","Subject",1,"text-900","font-semibold"],[1,"pi","pi-pencil",2,"left","1.5rem"],["id","subject","type","text","pInputText","","placeholder","Subject",1,"w-full","pl-7","text-900","font-semibold",2,"height","3.5rem",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"col-12","flex","column-gap-3","justify-content-end"],["pButton","","pRipple","","type","button","icon","pi pi-send","label","Send Message",1,"p-button-primary","h-3rem","w-full","sm:w-auto",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return i.goBack()}),e.qZA(),e.TgZ(2,"span",2),e._uU(3,"Compose Message"),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"label",5),e._uU(7,"To"),e.qZA(),e.TgZ(8,"span",6),e._UZ(9,"i",7),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(s){return i.newMail.to=s}),e.qZA()()(),e.TgZ(11,"div",4)(12,"label",9),e._uU(13,"Subject"),e.qZA(),e.TgZ(14,"span",6),e._UZ(15,"i",10),e.TgZ(16,"input",11),e.NdJ("ngModelChange",function(s){return i.newMail.title=s}),e.qZA()()(),e.TgZ(17,"div",4)(18,"p-editor",12),e.NdJ("ngModelChange",function(s){return i.newMail.message=s}),e.qZA()(),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){return i.sendMail()}),e.qZA()()()),2&t&&(e.xp6(10),e.Q6J("ngModel",i.newMail.to),e.xp6(6),e.Q6J("ngModel",i.newMail.title),e.xp6(2),e.Akn(e.DdM(5,ee)),e.Q6J("ngModel",i.newMail.message))},dependencies:[h.Fj,h.JJ,h.On,_.Hq,f.H,x.o,C.ML],encapsulation:2}),l})();var ie=p(3900);function ne(n,l){if(1&n&&e._UZ(0,"p-avatar",20),2&n){const a=e.oxw(2);e.Q6J("image","assets/demo/images/avatar/"+a.mail.image)}}const ae=function(){return{height:"250px"}};function oe(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"div")(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.goBack())}),e.qZA(),e.YNc(4,ne,1,1,"p-avatar",4),e.TgZ(5,"div",5)(6,"span",6),e._uU(7),e.qZA(),e.TgZ(8,"span",7),e._uU(9),e.qZA()()(),e.TgZ(10,"div",8)(11,"span",9),e._uU(12),e.qZA(),e._UZ(13,"button",10)(14,"button",11),e.qZA()(),e.TgZ(15,"div",12)(16,"div",13),e._uU(17),e.qZA(),e._UZ(18,"p",14),e.TgZ(19,"p-editor",15),e.NdJ("ngModelChange",function(i){e.CHM(a);const o=e.oxw();return e.KtG(o.newMail.message=i)}),e.qZA(),e.TgZ(20,"div",16),e._UZ(21,"button",17)(22,"button",18),e.TgZ(23,"button",19),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.sendMail())}),e.qZA()()()()}if(2&n){const a=e.oxw();e.xp6(4),e.Q6J("ngIf",a.mail&&a.mail.image),e.xp6(3),e.Oqu(a.mail.from),e.xp6(2),e.hij("To: ",a.mail.email||a.mail.to,""),e.xp6(3),e.Oqu(a.mail.date),e.xp6(5),e.Oqu(a.mail.title),e.xp6(1),e.Q6J("innerHTML",a.mail.message,e.oJD),e.xp6(1),e.Akn(e.DdM(9,ae)),e.Q6J("ngModel",a.newMail.message)}}let le=(()=>{var n;class l{constructor(t,i,o,s,c){this.route=t,this.mailService=i,this.location=o,this.router=s,this.messageService=c,this.newMail={id:"",to:"",email:"",image:"",title:"",message:"",date:"",important:!1,starred:!1,trash:!1,spam:!1,archived:!1,sent:!0},this.mail={},this.subscription=this.route.params.pipe((0,ie.w)(M=>(this.id=M.id,this.mailService.mails$))).subscribe(M=>{this.mail=M.filter(T=>T.id==this.id)[0]})}goBack(){this.location.back()}sendMail(){this.newMail.message&&(this.newMail.to=this.mail.from?this.mail.from:this.mail.to,this.newMail.image=this.mail.image,this.mailService.onSend(this.newMail),this.messageService.add({severity:"success",summary:"Success",detail:"Mail sent"}),this.router.navigate(["apps/mail/inbox"]))}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(d.gz),e.Y36(m),e.Y36(u.Ye),e.Y36(d.F0),e.Y36(b.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"flex","flex-column","md:flex-row","md:align-items-center","md:justify-content-between","mb-5","pt-5","md:pt-0","gap-4","md:border-top-none","border-top-1","surface-border"],[1,"flex","align-items-center","md:justify-content-start"],["pButton","","pRipple","","type","button","icon","pi pi-chevron-left",1,"p-button-text","p-button-plain","md:mr-3",3,"click"],["size","large","shape","circle","styleClass","border-2 surface-border",3,"image",4,"ngIf"],[1,"flex","flex-column","mx-3"],[1,"block","text-900","font-bold","text-lg"],[1,"block","text-900","font-semibold"],[1,"flex","align-items-center","justify-content-end","column-gap-3","px-4","md:px-0"],[1,"text-900","font-semibold","white-space-nowrap","mr-auto"],["pButton","","pRipple","","type","button","icon","pi pi-reply",1,"p-button-text","p-button-plain","flex-shrink-0"],["pButton","","pRipple","","type","button","icon","pi pi-ellipsis-v",1,"p-button-text","p-button-plain","flex-shrink-0"],[1,"surface-border","border-1","border-round","p-4"],[1,"text-900","font-semibold","text-lg","mb-3"],[1,"line-height-3","mt-0","mb-3",3,"innerHTML"],[3,"ngModel","ngModelChange"],[1,"flex","column-gap-3","justify-content-end","mt-3"],["pButton","","pRipple","","type","button","icon","pi pi-image",1,"p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-paperclip",1,"p-button-outlined"],["pButton","","pRipple","","type","button","icon","pi pi-send","label","Send",1,"p-button-primary",3,"click"],["size","large","shape","circle","styleClass","border-2 surface-border",3,"image"]],template:function(t,i){1&t&&e.YNc(0,oe,24,10,"div",0),2&t&&e.Q6J("ngIf",i.mail)},dependencies:[u.O5,h.JJ,h.On,_.Hq,f.H,y.q,C.ML],encapsulation:2}),l})(),se=(()=>{var n;class l{constructor(t){this.mailService=t,this.archivedMails=[],this.subscription=this.mailService.mails$.subscribe(i=>{this.archivedMails=i.filter(o=>o.archived)})}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.archivedMails)},dependencies:[g],encapsulation:2}),l})(),re=(()=>{var n;class l{constructor(t){this.mailService=t,this.importantMails=[],this.subscription=this.mailService.mails$.subscribe(i=>{this.importantMails=i.filter(o=>o.important&&!o.spam&&!o.trash&&!o.archived)})}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.importantMails)},dependencies:[g],encapsulation:2}),l})(),pe=(()=>{var n;class l{constructor(t){this.mailService=t,this.sentMails=[],this.subscription=this.mailService.mails$.subscribe(i=>{this.sentMails=i.filter(o=>o.sent&&!o.trash&&!o.archived)})}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.sentMails)},dependencies:[g],encapsulation:2}),l})(),ce=(()=>{var n;class l{constructor(t){this.mailService=t,this.spamMails=[],this.subscription=this.mailService.mails$.subscribe(i=>{this.spamMails=i.filter(o=>o.spam&&!o.archived&&!o.trash&&!o.hasOwnProperty("sent"))})}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.spamMails)},dependencies:[g],encapsulation:2}),l})(),me=(()=>{var n;class l{constructor(t){this.mailService=t,this.starredMails=[],this.subscription=this.mailService.mails$.subscribe(i=>{this.starredMails=i.filter(o=>o.starred&&!o.archived&&!o.trash)})}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.starredMails)},dependencies:[g],encapsulation:2}),l})(),de=(()=>{var n;class l{constructor(t){this.mailService=t,this.trashMails=[],this.subscription=this.mailService.mails$.subscribe(i=>{this.trashMails=i.filter(o=>o.trash)})}ngOnDestroy(){this.subscription.unsubscribe()}}return(n=l).\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"mails"]],template:function(t,i){1&t&&e._UZ(0,"app-mail-table",0),2&t&&e.Q6J("mails",i.trashMails)},dependencies:[g],encapsulation:2}),l})(),ue=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:q,children:[{path:"",redirectTo:"inbox",pathMatch:"full"},{path:"inbox",data:{breadcrumb:"Inbox"},component:W},{path:"detail/:id",data:{breadcrumb:"Detail"},component:le},{path:"compose",data:{breadcrumb:"Compose"},component:te},{path:"archived",data:{breadcrumb:"Archived"},component:se},{path:"important",data:{breadcrumb:"Important"},component:re},{path:"sent",data:{breadcrumb:"Sent"},component:pe},{path:"spam",data:{breadcrumb:"Spam"},component:ce},{path:"starred",data:{breadcrumb:"Starred"},component:me},{path:"trash",data:{breadcrumb:"Trash"},component:de}]}]),d.Bz]}),l})();var he=p(1989),ge=p(4711);let _e=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[b.ez,m],imports:[u.ez,h.u5,ue,k.$9,_.hJ,f.T,v.U$,x.j,he.nD,y.F,C.Z_,S.EV,ge.O,U.S]}),l})()}}]);