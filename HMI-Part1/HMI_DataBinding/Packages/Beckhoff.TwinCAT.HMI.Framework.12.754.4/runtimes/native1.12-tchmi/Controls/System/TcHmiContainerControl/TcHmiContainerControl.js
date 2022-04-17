var TcHmi;!function(TcHmi){!function(Controls){!function(System){class TcHmiContainerControl extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__isContainerControl=!0}__previnit(){super.__previnit()}__init(){const children=this.__pcElement[0].children;for(let i=0,ii=children.length;i<ii;i++){let child=children[i];child.hasAttribute("data-tchmi-type")&&TcHmi.System.Services.controlManager.compile(child.cloneNode(!0),this)}children.length&&("Content"===this.getHeightMode()&&this.__processHeight(),"Content"===this.getWidthMode()&&this.__processWidth()),super.__init()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){this.__keepAlive||(!1===this.__keepAlive&&(this.__heightMode="Value",this.__widthMode="Value",this.__isDestroyed=!0),super.destroy())}__setKeepAlive(value){super.__setKeepAlive(value);for(let i=0,ii=this.__children.length;i<ii;i++){this.__children[i].__setKeepAlive(value)}}getChildren(){return this.__children}addChild(control,pos){control&&this.__addChild(control,pos)}__addChild(control,pos){-1===this.__children.indexOf(control)&&(super.__addChild(control,pos),control.__setKeepAlive(this.__keepAlive),this.innerHeightDependsOnChilds()&&this.updateInnerHeightDependingOnChilds(),"Content"===this.getHeightMode()&&this.__processHeight(),this.innerWidthDependsOnChilds()&&this.updateInnerWidthDependingOnChilds(),"Content"===this.getWidthMode()&&this.__processWidth())}removeChild(control){control&&this.__removeChild(control)}__removeChild(control){super.__removeChild(control),control.getParent()||control.__setKeepAlive(!1),this.innerHeightDependsOnChilds()&&this.updateInnerHeightDependingOnChilds(),"Content"===this.getHeightMode()&&this.__processHeight(),this.innerWidthDependsOnChilds()&&this.updateInnerWidthDependingOnChilds(),"Content"===this.getWidthMode()&&this.__processWidth()}__processHeight(callerControl){if("Content"===this.getHeightMode()){this.__intHeight=null;const contentPixelSize=this.__getContentHeight();null!==contentPixelSize&&(this.__intHeight=contentPixelSize+"px")}super.__processHeight(callerControl)}__processWidth(callerControl){if("Content"===this.getWidthMode()){let newWidthStr="";const contentPixelSize=this.__getContentWidth();null!==contentPixelSize&&(newWidthStr=contentPixelSize+"px"),this.__element[0].style.width=newWidthStr}super.__processWidth(callerControl)}setWidthMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("WidthMode")),convertedValue!==this.__widthMode&&(this.__widthMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthMode"}),this.__processWidthMode())}setHeightMode(valueNew){let convertedValue=TcHmi.ValueConverter.toSizeModeWithContent(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("HeightMode")),convertedValue!==this.__heightMode&&(this.__heightMode=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode())}__getContentWidth(){if("Collapsed"===this.__visibility)return null;let res=null;if("Content"!==this.getWidthMode())return super.__getContentWidth();for(const child of this.__children){let childContentWidth;try{childContentWidth=child.__getContentWidth()}catch(ex){childContentWidth=null}if(null!==childContentWidth){const childLeft=child.getLeft();if(null!=childLeft)"px"===child.getLeftUnit()&&(childContentWidth+=childLeft);else{const childRight=child.getRight(),childRightUnit=child.getRightUnit();null!=childRight&&"px"===childRightUnit&&(childContentWidth+=childRight)}(null===res||res<childContentWidth)&&(res=childContentWidth)}}return res}__getContentHeight(){if("Collapsed"===this.__visibility)return null;let res=null;if("Content"!==this.getHeightMode())return super.__getContentHeight();for(const child of this.__children){let childContentHeight;try{childContentHeight=child.__getContentHeight()}catch(ex){childContentHeight=null}if(null!==childContentHeight){const childTop=child.getTop();if(null!=childTop)"px"===child.getTopUnit()&&(childContentHeight+=childTop);else{const childBottom=child.getBottom();null!=childBottom&&"px"===child.getBottomUnit()&&(childContentHeight+=childBottom)}(null===res||res<childContentHeight)&&(res=childContentHeight)}}return res}}System.TcHmiContainerControl=TcHmiContainerControl}(Controls.System||(Controls.System={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiContainerControl","TcHmi.Controls.System",TcHmi.Controls.System.TcHmiContainerControl);