YUI.add("series-column",function(t,e){t.ColumnSeries=t.Base.create("columnSeries",t.MarkerSeries,[t.Histogram],{_getMarkerDimensions:function(t,e,i,r){var s={left:t+r};return this._bottomOrigin>=e?(s.top=e,s.calculatedSize=this._bottomOrigin-s.top):(s.top=this._bottomOrigin,s.calculatedSize=e-this._bottomOrigin),s},updateMarkerState:function(t,e){if(this._markers&&this._markers[e]){var i,r,s,o,a,h=this._copyObject(this.get("styles").marker),l=this._getState(t),c=this.get("xcoords"),m=this.get("ycoords"),n=this._markers[e],g=this.get("seriesTypeCollection"),d=g?g.length:0,_=0,u=0,f=0,S=[],k=this.get("order");for((i="off"!==l&&h[l]?this._copyObject(h[l]):this._copyObject(h)).fill.color=this._getItemColor(i.fill.color,e),i.border.color=this._getItemColor(i.border.color,e),a=this._getMarkerDimensions(c[e],m[e],h.width,u),i.height=a.calculatedSize,i.width=Math.min(this._maxSize,i.width),n.set(i);f<d;++f)S[f]=c[e]+_,s=g[f].get("styles").marker,_+=Math.min(this._maxSize,s.width),k>f&&(u=_),u-=_/2;for(f=0;f<d;++f)(r=g[f].get("markers"))&&(o=r[e])&&o!==undefined&&o.set("x",S[f]-_/2)}}},{ATTRS:{type:{value:"column"}}})},"@VERSION@",{requires:["series-marker","series-histogram-base"]});