"use strict";(self.webpackChunkultima_ng=self.webpackChunkultima_ng||[]).push([[8177],{8177:(K,f,o)=>{o.d(f,{JH:()=>I,iR:()=>c});var r=o(6895),t=o(1571),p=o(433),h=o(9592);const _=["sliderHandle"],m=["sliderHandleStart"],g=["sliderHandleEnd"],v=function(s,l){return{left:s,width:l}};function x(s,l){if(1&s&&t._UZ(0,"span",4),2&s){const e=t.oxw();t.Q6J("ngStyle",t.WLB(1,v,null!=e.offset?e.offset+"%":e.handleValues[0]+"%",e.diff?e.diff+"%":e.handleValues[1]-e.handleValues[0]+"%"))}}const S=function(s,l){return{bottom:s,height:l}};function V(s,l){if(1&s&&t._UZ(0,"span",4),2&s){const e=t.oxw();t.Q6J("ngStyle",t.WLB(1,S,null!=e.offset?e.offset+"%":e.handleValues[0]+"%",e.diff?e.diff+"%":e.handleValues[1]-e.handleValues[0]+"%"))}}const w=function(s){return{height:s}};function C(s,l){if(1&s&&t._UZ(0,"span",4),2&s){const e=t.oxw();t.Q6J("ngStyle",t.VKq(1,w,e.handleValue+"%"))}}const H=function(s){return{width:s}};function b(s,l){if(1&s&&t._UZ(0,"span",4),2&s){const e=t.oxw();t.Q6J("ngStyle",t.VKq(1,H,e.handleValue+"%"))}}const d=function(s,l){return{left:s,bottom:l}};function y(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"span",5,6),t.NdJ("keydown",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onHandleKeydown(i))})("mousedown",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onMouseDown(i))})("touchstart",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchStart(i))})("touchmove",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchMove(i))})("touchend",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchEnd(i))}),t.qZA()}if(2&s){const e=t.oxw();t.Udp("transition",e.dragging?"none":null),t.Q6J("ngStyle",t.WLB(8,d,"horizontal"==e.orientation?e.handleValue+"%":null,"vertical"==e.orientation?e.handleValue+"%":null)),t.uIk("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)}}const u=function(s){return{"p-slider-handle-active":s}};function M(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"span",7,8),t.NdJ("keydown",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onHandleKeydown(i,0))})("mousedown",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onMouseDown(i,0))})("touchstart",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchStart(i,0))})("touchmove",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchMove(i,0))})("touchend",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchEnd(i))}),t.qZA()}if(2&s){const e=t.oxw();t.Udp("transition",e.dragging?"none":null),t.Q6J("ngStyle",t.WLB(9,d,e.rangeStartLeft,e.rangeStartBottom))("ngClass",t.VKq(12,u,0==e.handleIndex)),t.uIk("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[0]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)}}function E(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"span",7,9),t.NdJ("keydown",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onHandleKeydown(i,1))})("mousedown",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onMouseDown(i,1))})("touchstart",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchStart(i,1))})("touchmove",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchMove(i,1))})("touchend",function(i){t.CHM(e);const a=t.oxw();return t.KtG(a.onTouchEnd(i))}),t.qZA()}if(2&s){const e=t.oxw();t.Udp("transition",e.dragging?"none":null),t.Q6J("ngStyle",t.WLB(9,d,e.rangeEndLeft,e.rangeEndBottom))("ngClass",t.VKq(12,u,1==e.handleIndex)),t.uIk("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[1]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)}}const T=function(s,l,e,n){return{"p-slider p-component":!0,"p-disabled":s,"p-slider-horizontal":l,"p-slider-vertical":e,"p-slider-animate":n}},D={provide:p.JU,useExisting:(0,t.Gpc)(()=>c),multi:!0};let c=(()=>{class s{constructor(e,n,i,a,L,k){this.document=e,this.platformId=n,this.el=i,this.renderer=a,this.ngZone=L,this.cd=k,this.min=0,this.max=100,this.orientation="horizontal",this.tabindex=0,this.onChange=new t.vpe,this.onSlideEnd=new t.vpe,this.handleValues=[],this.onModelChange=()=>{},this.onModelTouched=()=>{},this.handleIndex=0}onMouseDown(e,n){this.disabled||(this.dragging=!0,this.updateDomData(),this.sliderHandleClick=!0,this.handleIndex=this.range&&this.handleValues&&this.handleValues[0]===this.max?0:n,this.bindDragListeners(),e.target.focus(),e.preventDefault(),this.animate&&h.p.removeClass(this.el.nativeElement.children[0],"p-slider-animate"))}onTouchStart(e,n){if(!this.disabled){var i=e.changedTouches[0];this.startHandleValue=this.range?this.handleValues[n]:this.handleValue,this.dragging=!0,this.handleIndex=this.range&&this.handleValues&&this.handleValues[0]===this.max?0:n,"horizontal"===this.orientation?(this.startx=parseInt(i.clientX,10),this.barWidth=this.el.nativeElement.children[0].offsetWidth):(this.starty=parseInt(i.clientY,10),this.barHeight=this.el.nativeElement.children[0].offsetHeight),this.animate&&h.p.removeClass(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault()}}onTouchMove(e,n){if(!this.disabled){var a,i=e.changedTouches[0];a="horizontal"===this.orientation?Math.floor(100*(parseInt(i.clientX,10)-this.startx)/this.barWidth)+this.startHandleValue:Math.floor(100*(this.starty-parseInt(i.clientY,10))/this.barHeight)+this.startHandleValue,this.setValueFromHandle(e,a),e.preventDefault()}}onTouchEnd(e,n){this.disabled||(this.dragging=!1,this.onSlideEnd.emit(this.range?{originalEvent:e,values:this.values}:{originalEvent:e,value:this.value}),this.animate&&h.p.addClass(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault())}onBarClick(e){this.disabled||(this.sliderHandleClick||(this.updateDomData(),this.handleChange(e)),this.sliderHandleClick=!1)}onHandleKeydown(e,n){this.disabled||(38==e.which||39==e.which?this.spin(e,1,n):(37==e.which||40==e.which)&&this.spin(e,-1,n))}spin(e,n,i){let a=(this.step||1)*n;this.range?(this.handleIndex=i,this.updateValue(this.values[this.handleIndex]+a),this.updateHandleValue()):(this.updateValue(this.value+a),this.updateHandleValue()),e.preventDefault()}handleChange(e){let n=this.calculateHandleValue(e);this.setValueFromHandle(e,n)}bindDragListeners(){(0,r.NF)(this.platformId)&&this.ngZone.runOutsideAngular(()=>{const e=this.el?this.el.nativeElement.ownerDocument:this.document;this.dragListener||(this.dragListener=this.renderer.listen(e,"mousemove",n=>{this.dragging&&this.ngZone.run(()=>{this.handleChange(n)})})),this.mouseupListener||(this.mouseupListener=this.renderer.listen(e,"mouseup",n=>{this.dragging&&(this.dragging=!1,this.ngZone.run(()=>{this.onSlideEnd.emit(this.range?{originalEvent:n,values:this.values}:{originalEvent:n,value:this.value}),this.animate&&h.p.addClass(this.el.nativeElement.children[0],"p-slider-animate")}))}))})}unbindDragListeners(){this.dragListener&&(this.dragListener(),this.dragListener=null),this.mouseupListener&&(this.mouseupListener(),this.mouseupListener=null)}setValueFromHandle(e,n){this.sliderHandleClick=!1;let i=this.getValueFromHandle(n);this.range?this.step?this.handleStepChange(i,this.values[this.handleIndex]):(this.handleValues[this.handleIndex]=n,this.updateValue(i,e)):this.step?this.handleStepChange(i,this.value):(this.handleValue=n,this.updateValue(i,e)),this.cd.markForCheck()}handleStepChange(e,n){let i=e-n,a=n;i<0?a=n+Math.ceil(e/this.step-n/this.step)*this.step:i>0&&(a=n+Math.floor(e/this.step-n/this.step)*this.step),this.updateValue(a),this.updateHandleValue()}writeValue(e){this.range?this.values=e||[0,0]:this.value=e||0,this.updateHandleValue(),this.updateDiffAndOffset(),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get rangeStartLeft(){return this.isVertical()?null:this.handleValues[0]>100?"100%":this.handleValues[0]+"%"}get rangeStartBottom(){return this.isVertical()?this.handleValues[0]+"%":"auto"}get rangeEndLeft(){return this.isVertical()?null:this.handleValues[1]+"%"}get rangeEndBottom(){return this.isVertical()?this.handleValues[1]+"%":"auto"}isVertical(){return"vertical"===this.orientation}updateDomData(){let e=this.el.nativeElement.children[0].getBoundingClientRect();this.initX=e.left+h.p.getWindowScrollLeft(),this.initY=e.top+h.p.getWindowScrollTop(),this.barWidth=this.el.nativeElement.children[0].offsetWidth,this.barHeight=this.el.nativeElement.children[0].offsetHeight}calculateHandleValue(e){return"horizontal"===this.orientation?100*(e.pageX-this.initX)/this.barWidth:100*(this.initY+this.barHeight-e.pageY)/this.barHeight}updateHandleValue(){this.range?(this.handleValues[0]=100*(this.values[0]<this.min?0:this.values[0]-this.min)/(this.max-this.min),this.handleValues[1]=100*(this.values[1]>this.max?100:this.values[1]-this.min)/(this.max-this.min)):this.handleValue=this.value<this.min?0:this.value>this.max?100:100*(this.value-this.min)/(this.max-this.min),this.step&&this.updateDiffAndOffset()}updateDiffAndOffset(){this.diff=this.getDiff(),this.offset=this.getOffset()}getDiff(){return Math.abs(this.handleValues[0]-this.handleValues[1])}getOffset(){return Math.min(this.handleValues[0],this.handleValues[1])}updateValue(e,n){if(this.range){let i=e;0==this.handleIndex?(i<this.min?(i=this.min,this.handleValues[0]=0):i>this.values[1]&&i>this.max&&(i=this.max,this.handleValues[0]=100),this.sliderHandleStart.nativeElement.focus()):(i>this.max?(i=this.max,this.handleValues[1]=100,this.offset=this.handleValues[1]):i<this.min?(i=this.min,this.handleValues[1]=0):i<this.values[0]&&(this.offset=this.handleValues[1]),this.sliderHandleEnd.nativeElement.focus()),this.step?this.updateHandleValue():this.updateDiffAndOffset(),this.values[this.handleIndex]=this.getNormalizedValue(i),this.onModelChange([this.minVal,this.maxVal]),this.onChange.emit({event:n,values:this.values})}else e<this.min?(e=this.min,this.handleValue=0):e>this.max&&(e=this.max,this.handleValue=100),this.value=this.getNormalizedValue(e),this.onModelChange(this.value),this.onChange.emit({event:n,value:this.value}),this.sliderHandle.nativeElement.focus()}getValueFromHandle(e){return e/100*(this.max-this.min)+this.min}getDecimalsCount(e){return e&&Math.floor(e)!==e&&e.toString().split(".")[1].length||0}getNormalizedValue(e){let n=this.getDecimalsCount(this.step);return n>0?+parseFloat(e.toString()).toFixed(n):Math.floor(e)}ngOnDestroy(){this.unbindDragListeners()}get minVal(){return Math.min(this.values[1],this.values[0])}get maxVal(){return Math.max(this.values[1],this.values[0])}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(r.K0),t.Y36(t.Lbi),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.R0b),t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-slider"]],viewQuery:function(e,n){if(1&e&&(t.Gf(_,5),t.Gf(m,5),t.Gf(g,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.sliderHandle=i.first),t.iGM(i=t.CRH())&&(n.sliderHandleStart=i.first),t.iGM(i=t.CRH())&&(n.sliderHandleEnd=i.first)}},hostAttrs:[1,"p-element"],inputs:{animate:"animate",disabled:"disabled",min:"min",max:"max",orientation:"orientation",step:"step",range:"range",style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex"},outputs:{onChange:"onChange",onSlideEnd:"onSlideEnd"},features:[t._Bn([D])],decls:8,vars:16,consts:[[3,"ngStyle","ngClass","click"],["class","p-slider-range",3,"ngStyle",4,"ngIf"],["class","p-slider-handle",3,"transition","ngStyle","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["class","p-slider-handle",3,"transition","ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],[1,"p-slider-range",3,"ngStyle"],[1,"p-slider-handle",3,"ngStyle","keydown","mousedown","touchstart","touchmove","touchend"],["sliderHandle",""],[1,"p-slider-handle",3,"ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend"],["sliderHandleStart",""],["sliderHandleEnd",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(a){return n.onBarClick(a)}),t.YNc(1,x,1,4,"span",1),t.YNc(2,V,1,4,"span",1),t.YNc(3,C,1,3,"span",1),t.YNc(4,b,1,3,"span",1),t.YNc(5,y,2,11,"span",2),t.YNc(6,M,2,14,"span",3),t.YNc(7,E,2,14,"span",3),t.qZA()),2&e&&(t.Tol(n.styleClass),t.Q6J("ngStyle",n.style)("ngClass",t.l5B(11,T,n.disabled,"horizontal"==n.orientation,"vertical"==n.orientation,n.animate)),t.xp6(1),t.Q6J("ngIf",n.range&&"horizontal"==n.orientation),t.xp6(1),t.Q6J("ngIf",n.range&&"vertical"==n.orientation),t.xp6(1),t.Q6J("ngIf",!n.range&&"vertical"==n.orientation),t.xp6(1),t.Q6J("ngIf",!n.range&&"horizontal"==n.orientation),t.xp6(1),t.Q6J("ngIf",!n.range),t.xp6(1),t.Q6J("ngIf",n.range),t.xp6(1),t.Q6J("ngIf",n.range))},dependencies:[r.mk,r.O5,r.PC],styles:[".p-slider{position:relative}.p-slider .p-slider-handle{position:absolute;cursor:grab;touch-action:none;display:block}.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}\n"],encapsulation:2,changeDetection:0}),s})(),I=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[r.ez]}),s})()}}]);