"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[9685],{9685:(V,m,a)=>{a.r(m),a.d(m,{CrudModule:()=>z});var s=a(6895),d=a(433),_=a(359),p=a(805),t=a(1571),U=a(6122),u=a(6174),C=a(4711),h=a(5593),f=a(1795),Z=a(2453),T=a(1383),x=a(3997),v=a(1740),b=a(3054),y=a(2210),M=a(613),A=a(5047),S=a(1493);function q(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",18)(1,"button",19),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openNew())}),t.qZA(),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteSelectedProducts())}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.selectedProducts||!e.selectedProducts.length)}}function w(n,l){if(1&n){const e=t.EpF();t._UZ(0,"p-fileUpload",21),t.TgZ(1,"button",22),t.NdJ("click",function(){t.CHM(e),t.oxw();const o=t.MAs(8);return t.KtG(o.exportCSV())}),t.qZA()}2&n&&t.Q6J("maxFileSize",1e6)}function N(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",23)(1,"h5",24),t._uU(2,"Manage Products"),t.qZA(),t.TgZ(3,"span",25),t._UZ(4,"i",26),t.TgZ(5,"input",27),t.NdJ("input",function(o){t.CHM(e);const r=t.oxw(),c=t.MAs(8);return t.KtG(r.onGlobalFilter(c,o))}),t.qZA()()()}}function J(n,l){1&n&&(t.TgZ(0,"tr")(1,"th",28),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.TgZ(3,"th",29),t._uU(4,"Code "),t._UZ(5,"p-sortIcon",30),t.qZA(),t.TgZ(6,"th",31),t._uU(7,"Name "),t._UZ(8,"p-sortIcon",32),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Image"),t.qZA(),t.TgZ(11,"th",33),t._uU(12,"Price "),t._UZ(13,"p-sortIcon",34),t.qZA(),t.TgZ(14,"th",35),t._uU(15,"Category "),t._UZ(16,"p-sortIcon",36),t.qZA(),t.TgZ(17,"th",37),t._uU(18,"Reviews "),t._UZ(19,"p-sortIcon",38),t.qZA(),t.TgZ(20,"th",39),t._uU(21,"Status "),t._UZ(22,"p-sortIcon",40),t.qZA(),t._UZ(23,"th"),t.qZA())}function P(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",41),t.qZA(),t.TgZ(3,"td",42)(4,"span",43),t._uU(5,"Code"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"td",42)(8,"span",43),t._uU(9,"Name"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"td",42)(12,"span",43),t._uU(13,"Image"),t.qZA(),t._UZ(14,"img",44),t.qZA(),t.TgZ(15,"td",45)(16,"span",43),t._uU(17,"Price"),t.qZA(),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.TgZ(20,"td",42)(21,"span",43),t._uU(22,"Category"),t.qZA(),t._uU(23),t.qZA(),t.TgZ(24,"td",42)(25,"span",43),t._uU(26,"Reviews"),t.qZA(),t._UZ(27,"p-rating",46),t.qZA(),t.TgZ(28,"td",42)(29,"span",43),t._uU(30,"Status"),t.qZA(),t.TgZ(31,"span"),t._uU(32),t.qZA()(),t.TgZ(33,"td")(34,"div",47)(35,"button",48),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editProduct(r))}),t.qZA(),t.TgZ(36,"button",49),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteProduct(r))}),t.qZA()()()()}if(2&n){const e=l.$implicit;t.xp6(2),t.Q6J("value",e),t.xp6(4),t.hij(" ",e.code||e.id," "),t.xp6(4),t.hij(" ",e.name," "),t.xp6(4),t.Q6J("src","assets/demo/images/product/"+e.image,t.LSH)("alt",e.name),t.xp6(4),t.hij(" ",t.xi3(19,13,e.price,"USD")," "),t.xp6(5),t.hij(" ",e.category," "),t.xp6(4),t.Q6J("ngModel",e.rating)("readonly",!0)("cancel",!1),t.xp6(4),t.Tol("product-badge status-"+(e.inventoryStatus?e.inventoryStatus.toLowerCase():"")),t.xp6(1),t.Oqu(e.inventoryStatus)}}function D(n,l){if(1&n&&t._UZ(0,"img",77),2&n){const e=t.oxw(2);t.Q6J("src","assets/demo/images/product/"+e.product.image,t.LSH)("alt",e.product.image)}}function I(n,l){1&n&&(t.TgZ(0,"small",78),t._uU(1,"Name is required."),t.qZA())}function k(n,l){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.Tol("product-badge status-"+e.product.inventoryStatus.value.toLowerCase()),t.xp6(1),t.Oqu(e.product.inventoryStatus.value)}}function H(n,l){if(1&n&&t.YNc(0,k,2,3,"span",79),2&n){const e=t.oxw(2);t.Q6J("ngIf",e.product&&e.product.inventoryStatus)}}function K(n,l){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.Tol("product-badge status-"+e.value.toLowerCase()),t.xp6(1),t.Oqu(e.label)}}const Q=function(n){return{"ng-invalid ng-dirty":n}};function G(n,l){if(1&n){const e=t.EpF();t.YNc(0,D,1,2,"img",50),t.TgZ(1,"div",51)(2,"label",52),t._uU(3,"Name"),t.qZA(),t.TgZ(4,"input",53),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.name=o)}),t.qZA(),t.YNc(5,I,2,0,"small",54),t.qZA(),t.TgZ(6,"div",51)(7,"label",55),t._uU(8,"Description"),t.qZA(),t.TgZ(9,"textarea",56),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.description=o)}),t.qZA()(),t.TgZ(10,"div",51)(11,"label",57),t._uU(12,"Inventory Status"),t.qZA(),t.TgZ(13,"p-dropdown",58),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.inventoryStatus=o)}),t.YNc(14,H,1,1,"ng-template",59),t.YNc(15,K,2,3,"ng-template",60),t.qZA()(),t.TgZ(16,"div",51)(17,"label",61),t._uU(18,"Category"),t.qZA(),t.TgZ(19,"div",62)(20,"div",63)(21,"p-radioButton",64),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.category=o)}),t.qZA(),t.TgZ(22,"label",65),t._uU(23,"Accessories"),t.qZA()(),t.TgZ(24,"div",63)(25,"p-radioButton",66),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.category=o)}),t.qZA(),t.TgZ(26,"label",67),t._uU(27,"Clothing"),t.qZA()(),t.TgZ(28,"div",63)(29,"p-radioButton",68),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.category=o)}),t.qZA(),t.TgZ(30,"label",69),t._uU(31,"Electronics"),t.qZA()(),t.TgZ(32,"div",63)(33,"p-radioButton",70),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.category=o)}),t.qZA(),t.TgZ(34,"label",71),t._uU(35,"Fitness"),t.qZA()()()(),t.TgZ(36,"div",62)(37,"div",72)(38,"label",73),t._uU(39,"Price"),t.qZA(),t.TgZ(40,"p-inputNumber",74),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.price=o)}),t.qZA()(),t.TgZ(41,"div",72)(42,"label",75),t._uU(43,"Quantity"),t.qZA(),t.TgZ(44,"p-inputNumber",76),t.NdJ("ngModelChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.product.quantity=o)}),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("ngIf",e.product.image),t.xp6(4),t.Q6J("ngModel",e.product.name)("ngClass",t.VKq(13,Q,e.submitted&&!e.product.name)),t.xp6(1),t.Q6J("ngIf",e.submitted&&!e.product.name),t.xp6(4),t.Q6J("ngModel",e.product.description),t.xp6(4),t.Q6J("options",e.statuses)("ngModel",e.product.inventoryStatus),t.xp6(8),t.Q6J("ngModel",e.product.category),t.xp6(4),t.Q6J("ngModel",e.product.category),t.xp6(4),t.Q6J("ngModel",e.product.category),t.xp6(4),t.Q6J("ngModel",e.product.category),t.xp6(7),t.Q6J("ngModel",e.product.price),t.xp6(4),t.Q6J("ngModel",e.product.quantity)}}function B(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"button",80),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.hideDialog())}),t.qZA(),t.TgZ(1,"button",81),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.saveProduct())}),t.qZA()}}function F(n,l){if(1&n&&(t.TgZ(0,"span"),t._uU(1,"Are you sure you want to delete "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4,"?"),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Oqu(e.product.name)}}function Y(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"button",82),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteProductDialog=!1)}),t.qZA(),t.TgZ(1,"button",83),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.confirmDelete())}),t.qZA()}}function R(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"button",82),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteProductsDialog=!1)}),t.qZA(),t.TgZ(1,"button",83),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.confirmDeleteSelected())}),t.qZA()}}const O=function(){return["name","country.name","representative.name","status"]},E=function(){return[10,20,30]},g=function(){return{width:"450px"}};let L=(()=>{var n;class l{constructor(i,o,r){this.productService=i,this.messageService=o,this.confirmationService=r,this.productDialog=!1,this.deleteProductDialog=!1,this.deleteProductsDialog=!1,this.products=[],this.product={},this.selectedProducts=[],this.submitted=!1,this.cols=[],this.statuses=[],this.rowsPerPageOptions=[5,10,20]}ngOnInit(){this.productService.getProducts().then(i=>this.products=i),this.cols=[{field:"product",header:"Product"},{field:"price",header:"Price"},{field:"category",header:"Category"},{field:"rating",header:"Reviews"},{field:"inventoryStatus",header:"Status"}],this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.deleteProductsDialog=!0}editProduct(i){this.product={...i},this.productDialog=!0}deleteProduct(i){this.deleteProductDialog=!0,this.product={...i}}confirmDeleteSelected(){this.deleteProductsDialog=!1,this.products=this.products.filter(i=>!this.selectedProducts.includes(i)),this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3}),this.selectedProducts=[]}confirmDelete(){this.deleteProductDialog=!1,this.products=this.products.filter(i=>i.id!==this.product.id),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3}),this.product={}}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.name?.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.messageService.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.products=[...this.products],this.productDialog=!1,this.product={})}findIndexById(i){let o=-1;for(let r=0;r<this.products.length;r++)if(this.products[r].id===i){o=r;break}return o}createId(){let i="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<5;r++)i+=o.charAt(Math.floor(Math.random()*o.length));return i}onGlobalFilter(i,o){i.filterGlobal(o.target.value,"contains")}}return(n=l).\u0275fac=function(i){return new(i||n)(t.Y36(U.M),t.Y36(p.ez),t.Y36(p.YP))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],features:[t._Bn([p.ez,p.YP])],decls:26,vars:28,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Product Details",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],["pSortableColumn","code"],["field","code"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],["pSortableColumn","category"],["field","category"],["pSortableColumn","rating"],["field","rating"],["pSortableColumn","inventoryStatus"],["field","inventoryStatus"],[3,"value"],[2,"width","14%","min-width","10rem"],[1,"p-column-title"],["width","100",1,"shadow-4",3,"src","alt"],[2,"width","14%","min-width","8rem"],[3,"ngModel","readonly","cancel"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],["width","150","class","mt-0 mx-auto mb-5 block shadow-2",3,"src","alt",4,"ngIf"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],["for","description"],["id","description","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"],["for","status"],["id","status","optionLabel","label","placeholder","Select a Status",3,"options","ngModel","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","status"],[1,"mb-3"],[1,"formgrid","grid"],[1,"field-radiobutton","col-6"],["id","category1","name","category","value","Accessories",3,"ngModel","ngModelChange"],["for","category1"],["id","category2","name","category","value","Clothing",3,"ngModel","ngModelChange"],["for","category2"],["id","category3","name","category","value","Electronics",3,"ngModel","ngModelChange"],["for","category3"],["id","category4","name","category","value","Fitness",3,"ngModel","ngModelChange"],["for","category4"],[1,"field","col"],["for","price"],["id","price","mode","currency","currency","USD","locale","en-US",3,"ngModel","ngModelChange"],["for","quantity"],["id","quantity",3,"ngModel","ngModelChange"],["width","150",1,"mt-0","mx-auto","mb-5","block","shadow-2",3,"src","alt"],[1,"ng-dirty","ng-invalid"],[3,"class",4,"ngIf"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"p-toast"),t.TgZ(4,"p-toolbar",3),t.YNc(5,q,3,1,"ng-template",4),t.YNc(6,w,2,1,"ng-template",5),t.qZA(),t.TgZ(7,"p-table",6,7),t.NdJ("selectionChange",function(c){return o.selectedProducts=c}),t.YNc(9,N,6,0,"ng-template",8),t.YNc(10,J,24,0,"ng-template",9),t.YNc(11,P,37,16,"ng-template",10),t.qZA()(),t.TgZ(12,"p-dialog",11),t.NdJ("visibleChange",function(c){return o.productDialog=c}),t.YNc(13,G,45,15,"ng-template",12),t.YNc(14,B,2,0,"ng-template",13),t.qZA(),t.TgZ(15,"p-dialog",14),t.NdJ("visibleChange",function(c){return o.deleteProductDialog=c}),t.TgZ(16,"div",15),t._UZ(17,"i",16),t.YNc(18,F,5,1,"span",17),t.qZA(),t.YNc(19,Y,2,0,"ng-template",13),t.qZA(),t.TgZ(20,"p-dialog",14),t.NdJ("visibleChange",function(c){return o.deleteProductsDialog=c}),t.TgZ(21,"div",15),t._UZ(22,"i",16),t.TgZ(23,"span"),t._uU(24,"Are you sure you want to delete selected products?"),t.qZA()(),t.YNc(25,R,2,0,"ng-template",13),t.qZA()()()),2&i&&(t.xp6(7),t.Q6J("value",o.products)("columns",o.cols)("rows",10)("globalFilterFields",t.DdM(23,O))("rows",10)("paginator",!0)("rowsPerPageOptions",t.DdM(24,E))("showCurrentPageReport",!0)("selection",o.selectedProducts)("rowHover",!0),t.xp6(5),t.Akn(t.DdM(25,g)),t.Q6J("visible",o.productDialog)("modal",!0),t.xp6(3),t.Akn(t.DdM(26,g)),t.Q6J("visible",o.deleteProductDialog)("modal",!0),t.xp6(3),t.Q6J("ngIf",o.product),t.xp6(2),t.Akn(t.DdM(27,g)),t.Q6J("visible",o.deleteProductsDialog)("modal",!0))},dependencies:[s.mk,s.O5,u.iA,p.jx,u.lQ,u.fz,u.UA,u.Mo,C.p,h.Hq,d.Fj,d.JJ,d.Q7,d.On,f.H,Z.FN,T.o,x.iG,v.o,b.g,y.Lt,M.EU,A.Rn,S.V,s.H9],encapsulation:2}),l})(),j=(()=>{var n;class l{}return(n=l).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild([{path:"",component:L}]),_.Bz]}),l})(),z=(()=>{var n;class l{}return(n=l).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,j,u.U$,C.O,d.u5,h.hJ,f.T,Z.EV,T.V,x.Xt,v.j,b.A,y.kW,M.cc,A.L$,S.S]}),l})()}}]);