"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[1718],{1718:(F,p,r)=>{r.r(p),r.d(p,{ListDemoModule:()=>b});var h=r(6895),a=r(433),c=r(359),e=r(1571),T=r(6122),l=r(9491),y=r(805),u=r(7198),g=r(5900),f=r(1740),v=r(2210),x=r(3997),Z=r(5593);function C(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",13)(1,"p-dropdown",14),e.NdJ("onChange",function(s){e.CHM(t);const m=e.oxw();return e.KtG(m.onSortChange(s))}),e.qZA(),e.TgZ(2,"span",15),e._UZ(3,"i",16),e.TgZ(4,"input",17),e.NdJ("input",function(s){e.CHM(t);const m=e.oxw(),w=e.MAs(6);return e.KtG(m.onFilter(w,s))}),e.qZA()(),e._UZ(5,"p-dataViewLayoutOptions"),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("options",t.sortOptions)}}function L(n,i){if(1&n&&(e.TgZ(0,"div",1)(1,"div",18),e._UZ(2,"img",19),e.TgZ(3,"div",20)(4,"div",21),e._uU(5),e.qZA(),e.TgZ(6,"div",22),e._uU(7),e.qZA(),e._UZ(8,"p-rating",23),e.TgZ(9,"div",24),e._UZ(10,"i",25),e.TgZ(11,"span",26),e._uU(12),e.qZA()()(),e.TgZ(13,"div",27)(14,"span",28),e._uU(15),e.qZA(),e._UZ(16,"p-button",29),e.TgZ(17,"span"),e._uU(18),e.qZA()()()()),2&n){const t=i.$implicit;e.xp6(2),e.Q6J("src","assets/demo/images/product/"+t.image,e.LSH)("alt",t.name),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description),e.xp6(1),e.Q6J("ngModel",t.rating)("readonly",!0)("cancel",!1),e.xp6(4),e.Oqu(t.category),e.xp6(3),e.hij("$",t.price,""),e.xp6(1),e.Q6J("disabled","OUTOFSTOCK"===t.inventoryStatus),e.xp6(1),e.Tol("product-badge status-"+t.inventoryStatus.toLowerCase()),e.xp6(1),e.Oqu(t.inventoryStatus)}}function S(n,i){if(1&n&&(e.TgZ(0,"div",30)(1,"div",31)(2,"div",32)(3,"div",33),e._UZ(4,"i",25),e.TgZ(5,"span",26),e._uU(6),e.qZA()(),e.TgZ(7,"span"),e._uU(8),e.qZA()(),e.TgZ(9,"div",34),e._UZ(10,"img",35),e.TgZ(11,"div",36),e._uU(12),e.qZA(),e.TgZ(13,"div",37),e._uU(14),e.qZA(),e._UZ(15,"p-rating",38),e.qZA(),e.TgZ(16,"div",39)(17,"span",40),e._uU(18),e.qZA(),e._UZ(19,"p-button",41),e.qZA()()()),2&n){const t=i.$implicit;e.xp6(6),e.Oqu(t.category),e.xp6(1),e.Tol("product-badge status-"+t.inventoryStatus.toLowerCase()),e.xp6(1),e.Oqu(t.inventoryStatus),e.xp6(2),e.Q6J("src","assets/demo/images/product/"+t.image,e.LSH)("alt",t.name),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description),e.xp6(1),e.Q6J("ngModel",t.rating)("readonly",!0)("cancel",!1),e.xp6(3),e.hij("$",t.price,""),e.xp6(1),e.Q6J("disabled","OUTOFSTOCK"===t.inventoryStatus)}}function O(n,i){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.name)}}function A(n,i){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.name)}}const d=function(){return{height:"250px"}};let U=(()=>{var n;class i{constructor(o){this.productService=o,this.products=[],this.sortOptions=[],this.sortOrder=0,this.sortField="",this.sourceCities=[],this.targetCities=[],this.orderCities=[]}ngOnInit(){this.productService.getProducts().then(o=>this.products=o),this.sourceCities=[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],this.targetCities=[],this.orderCities=[{name:"San Francisco",code:"SF"},{name:"London",code:"LDN"},{name:"Paris",code:"PRS"},{name:"Istanbul",code:"IST"},{name:"Berlin",code:"BRL"},{name:"Barcelona",code:"BRC"},{name:"Rome",code:"RM"}],this.sortOptions=[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}]}onSortChange(o){const s=o.value;0===s.indexOf("!")?(this.sortOrder=-1,this.sortField=s.substring(1,s.length)):(this.sortOrder=1,this.sortField=s)}onFilter(o,s){o.filter(s.target.value)}}return(n=i).\u0275fac=function(o){return new(o||n)(e.Y36(T.M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:22,vars:17,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["filterBy","name","layout","grid",3,"value","paginator","rows","sortField","sortOrder"],["dv",""],["pTemplate","header"],["pTemplate","listItem"],["pTemplate","gridItem"],[1,"col-12","xl:col-8"],["sourceHeader","From","targetHeader","To",3,"source","target","dragdrop","responsive","sourceStyle","targetStyle"],["pTemplate","item"],[1,"col-12","xl:col-4"],["header","Cities",3,"value","dragdrop","listStyle"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","gap-2"],["placeholder","Sort By Price",3,"options","onChange"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","search","pInputText","","placeholder","Search by Name",3,"input"],[1,"flex","flex-column","md:flex-row","align-items-center","p-3","w-full"],[1,"my-4","md:my-0","w-9","md:w-10rem","shadow-2","mr-5",3,"src","alt"],[1,"flex-1","flex","flex-column","align-items-center","text-center","md:text-left"],[1,"font-bold","text-2xl"],[1,"mb-2"],["styleClass","mb-2",3,"ngModel","readonly","cancel"],[1,"flex","align-items-center","mt-2"],[1,"pi","pi-tag","mr-2"],[1,"font-semibold"],[1,"flex","flex-row","md:flex-column","justify-content-between","w-full","md:w-auto","align-items-center","md:align-items-end","mt-5","md:mt-0"],[1,"text-2xl","font-semibold","mb-2","align-self-center","md:align-self-end"],["icon","pi pi-shopping-cart","label","Add to Cart","styleClass","mb-2 p-button-sm",3,"disabled"],[1,"col-12","md:col-4"],[1,"card","m-3","border-1","surface-border"],[1,"flex","flex-wrap","gap-2","align-items-center","justify-content-between","mb-2"],[1,"flex","align-items-center"],[1,"flex","flex-column","align-items-center","text-center","mb-3"],[1,"w-9","shadow-2","my-3","mx-0",3,"src","alt"],[1,"text-2xl","font-bold"],[1,"mb-3"],[3,"ngModel","readonly","cancel"],[1,"flex","align-items-center","justify-content-between"],[1,"text-2xl","font-semibold"],["icon","pi pi-shopping-cart",3,"disabled"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"DataView"),e.qZA(),e.TgZ(5,"p-dataView",3,4),e.YNc(7,C,6,1,"ng-template",5),e.YNc(8,L,19,13,"ng-template",6),e.YNc(9,S,20,13,"ng-template",7),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",2)(12,"h5"),e._uU(13,"PickList"),e.qZA(),e.TgZ(14,"p-pickList",9),e.YNc(15,O,2,1,"ng-template",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"div",2)(18,"h5"),e._uU(19,"OrderList"),e.qZA(),e.TgZ(20,"p-orderList",12),e.YNc(21,A,2,1,"ng-template",10),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("value",s.products)("paginator",!0)("rows",9)("sortField",s.sortField)("sortOrder",s.sortOrder),e.xp6(9),e.Q6J("source",s.sourceCities)("target",s.targetCities)("dragdrop",!0)("responsive",!0)("sourceStyle",e.DdM(14,d))("targetStyle",e.DdM(15,d)),e.xp6(6),e.Q6J("value",s.orderCities)("dragdrop",!0)("listStyle",e.DdM(16,d)))},dependencies:[a.JJ,a.On,l.VO,y.jx,l.uE,u.G,g.F,f.o,v.Lt,x.iG,Z.zx],encapsulation:2}),i})(),D=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:U}]),c.Bz]}),i})(),b=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.ez,a.u5,D,l.FI,u.f,g.C,f.j,v.kW,x.Xt,Z.hJ]}),i})()}}]);