"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[3242],{3242:(z,m,i)=>{i.r(m),i.d(m,{TreeDemoModule:()=>J});var c=i(6895),g=i(433),d=i(359),e=i(1571),u=i(529);let T=(()=>{var t;class n{constructor(o){this.http=o}getFiles(){return this.http.get("assets/demo/data/files.json").toPromise().then(o=>o.data)}getLazyFiles(){return this.http.get("assets/demo/data/files-lazy.json").toPromise().then(o=>o.data)}getFilesystem(){return this.http.get("assets/demo/data/filesystem.json").toPromise().then(o=>o.data)}getLazyFilesystem(){return this.http.get("assets/demo/data/filesystem-lazy.json").toPromise().then(o=>o.data)}}return(t=n).\u0275fac=function(o){return new(o||t)(e.LFG(u.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),n})();var p=i(4323),f=i(805),a=i(6237);function _(t,n){if(1&t&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.hij(" ",l.header," ")}}function v(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,_,2,1,"th",8),e.qZA()),2&t){const l=n.$implicit;e.xp6(1),e.Q6J("ngForOf",l)}}function C(t,n){if(1&t&&e._UZ(0,"p-treeTableToggler",11),2&t){const l=e.oxw(2).$implicit;e.Q6J("rowNode",l)}}function F(t,n){if(1&t&&e._UZ(0,"p-treeTableCheckbox",12),2&t){const l=e.oxw(2).$implicit;e.Q6J("value",l)}}function D(t,n){if(1&t&&(e.TgZ(0,"td"),e.YNc(1,C,1,1,"p-treeTableToggler",9),e.YNc(2,F,1,1,"p-treeTableCheckbox",10),e._uU(3),e.qZA()),2&t){const l=n.$implicit,o=n.index,s=e.oxw().rowData;e.xp6(1),e.Q6J("ngIf",0===o),e.xp6(1),e.Q6J("ngIf",0===o),e.xp6(1),e.hij(" ",s[l.field]," ")}}function Z(t,n){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,D,4,3,"td",8),e.qZA()),2&t){const l=n.columns;e.xp6(1),e.Q6J("ngForOf",l)}}let y=(()=>{var t;class n{constructor(o){this.nodeService=o,this.files1=[],this.files2=[],this.files3=[],this.selectedFiles1=[],this.selectedFiles2=[],this.selectedFiles3={},this.cols=[]}ngOnInit(){this.nodeService.getFiles().then(o=>this.files1=o),this.nodeService.getFilesystem().then(o=>this.files2=o),this.nodeService.getFiles().then(o=>{this.files3=[{label:"Root",children:o}]}),this.cols=[{field:"name",header:"Name"},{field:"size",header:"Size"},{field:"type",header:"Type"}]}}return(t=n).\u0275fac=function(o){return new(o||t)(e.Y36(T))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:18,vars:7,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["selectionMode","checkbox",3,"value","selection","selectionChange"],["selectionMode","checkbox",3,"value","columns","selection","selectionChange"],["pTemplate","header"],["pTemplate","body"],["layout","horizontal","selectionMode","single",3,"value","selection","selectionChange"],[4,"ngFor","ngForOf"],[3,"rowNode",4,"ngIf"],[3,"value",4,"ngIf"],[3,"rowNode"],[3,"value"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Tree"),e.qZA(),e.TgZ(5,"p-tree",3),e.NdJ("selectionChange",function(r){return s.selectedFiles1=r}),e.qZA()()(),e.TgZ(6,"div",1)(7,"div",2)(8,"h5"),e._uU(9,"TreeTable"),e.qZA(),e.TgZ(10,"p-treeTable",4),e.NdJ("selectionChange",function(r){return s.selectedFiles2=r}),e.YNc(11,v,2,1,"ng-template",5),e.YNc(12,Z,2,1,"ng-template",6),e.qZA()()(),e.TgZ(13,"div",1)(14,"div",2)(15,"h5"),e._uU(16,"Horizontal Tree"),e.qZA(),e.TgZ(17,"p-tree",7),e.NdJ("selectionChange",function(r){return s.selectedFiles3=r}),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("value",s.files1)("selection",s.selectedFiles1),e.xp6(5),e.Q6J("value",s.files2)("columns",s.cols)("selection",s.selectedFiles2),e.xp6(7),e.Q6J("value",s.files3)("selection",s.selectedFiles3))},dependencies:[c.sg,c.O5,p.mp,f.jx,a.iw,a.gc,a.Pe],encapsulation:2}),n})(),N=(()=>{var t;class n{}return(t=n).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild([{path:"",component:y}]),d.Bz]}),n})(),J=(()=>{var t;class n{}return(t=n).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,N,g.u5,p.xc,a.dp]}),n})()}}]);