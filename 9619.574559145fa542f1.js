"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[9619],{9619:(A,m,n)=>{n.r(m),n.d(m,{BlogListModule:()=>h});var u=n(6895),r=n(433),g=n(8271),d=n(9491),p=n(2210),l=n(359),e=n(1571),v=n(805);let Z=(()=>{var t;class a{constructor(i){this.router=i}navigateToDetail(){this.router.navigateByUrl("/apps/blog/detail")}}return(t=a).\u0275fac=function(i){return new(i||t)(e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-blog-list-card"]],inputs:{blog:"blog"},decls:25,vars:8,consts:[[1,"p-3"],[1,"surface-100","cursor-pointer","z-index","border-round",3,"click"],[1,"relative"],[1,"w-full",3,"src"],[1,"flex","absolute","w-4rem","h-4rem",2,"bottom","-1.5rem","right","1.5rem",3,"src"],[1,"text-900","font-semibold","text-xl","mb-3"],[1,"text-700","text-lg","mt-0","mb-5"],[1,"flex","flex-wrap","gap-2","align-items-center","justify-content-between"],[1,"flex","align-items-center","text-900"],[1,"pi","pi-comment","mr-2"],[1,"font-semibold"],[1,"pi","pi-share-alt","mr-2"],[1,"pi","pi-clock","mr-2"],[1,"font-semibold","mr-1"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return s.navigateToDetail()}),e.TgZ(2,"div",2),e._UZ(3,"img",3)(4,"img",4),e.qZA(),e.TgZ(5,"div",0)(6,"div",5),e._uU(7),e.qZA(),e.TgZ(8,"p",6),e._uU(9),e.qZA(),e.TgZ(10,"div",7)(11,"span",8),e._UZ(12,"i",9),e.TgZ(13,"span",10),e._uU(14),e.qZA()(),e.TgZ(15,"span",8),e._UZ(16,"i",11),e.TgZ(17,"span",10),e._uU(18),e.qZA()(),e.TgZ(19,"span",8),e._UZ(20,"i",12),e.TgZ(21,"span",13),e._uU(22),e.qZA(),e.TgZ(23,"span",10),e._uU(24),e.qZA()()()()()()),2&i&&(e.xp6(3),e.Q6J("src",s.blog.coverImage,e.LSH),e.xp6(1),e.Q6J("src",s.blog.profile,e.LSH),e.xp6(3),e.Oqu(s.blog.title),e.xp6(2),e.Oqu(s.blog.description),e.xp6(5),e.Oqu(s.blog.comment),e.xp6(4),e.Oqu(s.blog.share),e.xp6(4),e.Oqu(s.blog.day),e.xp6(2),e.Oqu(s.blog.month))},encapsulation:2}),a})();function f(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",25)(1,"span",26),e._uU(2,"Articles"),e.qZA(),e.TgZ(3,"p-dropdown",27),e.NdJ("ngModelChange",function(s){e.CHM(o);const c=e.oxw();return e.KtG(c.sortField=s)}),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(3),e.Q6J("options",o.sortOptions)("ngModel",o.sortField)}}function b(t,a){if(1&t&&(e.TgZ(0,"div",28),e._UZ(1,"app-blog-list-card",29),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.Q6J("blog",o)}}let x=(()=>{var t;class a{constructor(){this.sortOptions=[{label:"Most Shared",value:"share"},{label:"Most Commented",value:"comment"}],this.sortField="",this.totalBlogs=[{coverImage:"assets/demo/images/blog/blog-1.png",profile:"assets/demo/images/avatar/circle/avatar-f-1.png",title:"Blog",description:"Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed",comment:2,share:7,day:"15",month:"October"},{coverImage:"assets/demo/images/blog/blog-2.png",profile:"assets/demo/images/avatar/circle/avatar-f-2.png",title:"Magazine",description:"Magna iaculis sagittis, amet faucibus scelerisque non ornare non in penatibus ",comment:5,share:1,day:"20",month:"Nov"},{coverImage:"assets/demo/images/blog/blog-3.png",profile:"assets/demo/images/avatar/circle/avatar-m-1.png",title:"Science",description:"Purus mattis mi, libero maecenas volutpat quis a morbi arcu pharetra, mollis",comment:2,share:6,day:"23",month:"Oct"},{coverImage:"assets/demo/images/blog/blog-4.png",profile:"assets/demo/images/avatar/circle/avatar-m-1.png",title:"Blog",description:"Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc",comment:5,share:5,day:"14",month:"Dec"},{coverImage:"assets/demo/images/blog/blog-5.png",profile:"assets/demo/images/avatar/circle/avatar-f-3.png",title:"Magazine",description:"Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam",comment:4,share:1,day:"05",month:"Apr"},{coverImage:"assets/demo/images/blog/blog-6.png",profile:"assets/demo/images/avatar/circle/avatar-m-3.png",title:"Science",description:"Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et",comment:1,share:3,day:"12",month:"Nov"}]}}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:62,vars:5,consts:[[1,"card"],["filterBy","title","layout","grid",3,"value","paginator","rows","sortField","sortOrder"],["pTemplate","header"],["pTemplate","gridItem"],[1,"surface-section","px-4","py-8","md:px-6","lg:px-8"],[1,"font-bold","text-5xl","text-900","mb-3"],[1,"text-700","text-xl","line-height-3","mb-5"],[1,"grid","nogutter"],[1,"col-12","lg:col-4","p-4"],[1,"border-top-3","border-blue-600"],[1,"text-blue-600","font-medium","my-2"],[1,"text-900","font-medium","text-xl","line-height-3","mb-4"],[1,"font-sm","text-700","line-height-3"],[1,"flex","mt-4"],["image","assets/demo/images/avatar/circle/avatar-f-1.png","shape","circle"],[1,"ml-2"],[1,"text-xs","font-bold","text-900","mb-1"],[1,"text-xs","flex","align-items-center","text-700"],[1,"pi","pi-calendar","mr-1","text-xs"],[1,"border-top-3","border-pink-600"],[1,"text-pink-600","font-medium","my-2"],["image","assets/demo/images/avatar/circle/avatar-f-2.png","shape","circle"],[1,"border-top-3","border-orange-600"],[1,"text-orange-600","font-medium","my-2"],["image","assets/demo/images/avatar/circle/avatar-f-3.png","shape","circle"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","sm:justify-content-between","gap-3"],[1,"text-xl","text-900","font-semibold"],["placeholder","Sort by","styleClass","w-full md:w-15rem",3,"options","ngModel","ngModelChange"],[1,"col-12","md:col-4"],[3,"blog"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"p-dataView",1),e.YNc(2,f,4,2,"ng-template",2),e.YNc(3,b,2,1,"ng-template",3),e.qZA()(),e.TgZ(4,"div",0)(5,"div",4)(6,"div",5),e._uU(7,"Recent Articles"),e.qZA(),e.TgZ(8,"div",6),e._uU(9,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),e.qZA(),e.TgZ(10,"div",7)(11,"div",8),e._UZ(12,"div",9),e.TgZ(13,"div",10),e._uU(14,"Animals"),e.qZA(),e.TgZ(15,"div",11),e._uU(16,"Why Earth's most beloved creatures are headed toward extinction"),e.qZA(),e.TgZ(17,"div",12),e._uU(18," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),e.qZA(),e.TgZ(19,"div",13),e._UZ(20,"p-avatar",14),e.TgZ(21,"div",15)(22,"div",16),e._uU(23,"Anna Miles"),e.qZA(),e.TgZ(24,"div",17),e._UZ(25,"i",18),e.TgZ(26,"span"),e._uU(27,"Apr 9, 2021"),e.qZA()()()()(),e.TgZ(28,"div",8),e._UZ(29,"div",19),e.TgZ(30,"div",20),e._uU(31,"Oxygen"),e.qZA(),e.TgZ(32,"div",11),e._uU(33,"Only one-third of tropical rainforests remain intact, study says "),e.qZA(),e.TgZ(34,"div",12),e._uU(35," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),e.qZA(),e.TgZ(36,"div",13),e._UZ(37,"p-avatar",21),e.TgZ(38,"div",15)(39,"div",16),e._uU(40,"Arlene Miles"),e.qZA(),e.TgZ(41,"div",17),e._UZ(42,"i",18),e.TgZ(43,"span"),e._uU(44,"Apr 9, 2021"),e.qZA()()()()(),e.TgZ(45,"div",8),e._UZ(46,"div",22),e.TgZ(47,"div",23),e._uU(48,"Nature"),e.qZA(),e.TgZ(49,"div",11),e._uU(50,"Does planting a tree really offset your carbon footprint?"),e.qZA(),e.TgZ(51,"div",12),e._uU(52," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "),e.qZA(),e.TgZ(53,"div",13),e._UZ(54,"p-avatar",24),e.TgZ(55,"div",15)(56,"div",16),e._uU(57,"Diane Miles"),e.qZA(),e.TgZ(58,"div",17),e._UZ(59,"i",18),e.TgZ(60,"span"),e._uU(61,"Apr 9, 2021"),e.qZA()()()()()()()()),2&i&&(e.xp6(1),e.Q6J("value",s.totalBlogs)("paginator",!0)("rows",3)("sortField",s.sortField)("sortOrder",-1))},dependencies:[r.JJ,r.On,g.q,d.VO,v.jx,p.Lt,Z],encapsulation:2}),a})(),T=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild([{path:"",component:x}]),l.Bz]}),a})(),h=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,r.u5,g.F,T,d.FI,p.kW]}),a})()}}]);