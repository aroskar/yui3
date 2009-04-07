YUI.add("node",function(C){C.Array._diff=function(N,M){var R=[],T=false;outer:for(var P=0,S=N.length;P<S;P++){T=false;for(var O=0,Q=M.length;O<Q;O++){if(N[P]===M[O]){T=true;continue outer;}}if(!T){R[R.length]=N[P];}}return R;};C.Array.diff=function(N,M){return{added:C.Array._diff(M,N),removed:C.Array._diff(N,M)};};var K=[],I=Array.prototype.slice,D="_yuid",A=function(N){var O=N.doc||C.config.doc,M=N.nodes||[];if(typeof M==="string"){this._query=M;M=C.Selector.query(M,O);}C.stamp(this);A._instances[this[D]]=this;K[this[D]]=M;A.superclass.constructor.apply(this,arguments);};A.NAME="NodeList";A.ATTRS={style:{value:{}}};A._instances=[];A.each=function(M,P,O){var N=K[M[D]];if(N&&N.length){C.Array.each(N,P,O||M);}else{}};A.DEFAULT_SETTER=function(M,O){var N=A._tmpNode=A._tmpNode||C.Node.create("<div>");A.each(this,function(Q){var P=C.Node._instances[Q[D]];if(!P){L[N[D]]=Q;P=N;}P.set(M,O);});};A.DEFAULT_GETTER=function(M){var O=A._tmpNode=A._tmpNode||C.Node.create("<div>"),N=[];A.each(this,function(Q){var P=C.Node._instances[Q[D]];if(!P){L[O[D]]=Q;P=O;}N[N.length]=P.get(M);});return N;};C.extend(A,C.Base);C.mix(A.prototype,{initializer:function(M){},hasAttr:function(M){return this._conf.get(M);},get:function(M){if(!this.hasAttr(M)){this._addAttr(M);}return A.superclass.constructor.prototype.get.apply(this,arguments);},set:function(M,N){if(!this.hasAttr(M)){this._addAttr(M);}return A.superclass.constructor.prototype.set.apply(this,arguments);},on:function(R,Q,P,M){var O=I.call(arguments,0),N;O.splice(2,0,K[this[D]]);if(G.DOM_EVENTS[R]){C.Event.attach.apply(C.Event,O);}return A.superclass.constructor.prototype.on.apply(this,arguments);},destructor:function(){K[this[D]]=[];delete A._instances[this[D]];},refresh:function(){var N,M,O=K[this[D]];if(this._query){if(K[this[D]]&&K[this[D]][0]&&K[this[D]][0].ownerDocument){N=K[this[D]][0].ownerDocument;}K[this[D]]=C.Selector.query(this._query,N||C.config.doc);M=C.Array.diff(O,K[this[D]]);M.added=M.added?C.all(M.added):null;M.removed=M.removed?C.all(M.removed):null;this.fire("refresh",M);}},size:function(){return K[this[D]].length;},toString:function(){var P="",O=this[D]+": not bound to any nodes",M=K[this[D]];if(M&&M[0]){var N=M[0];P+=N[E];if(N.id){P+="#"+N.id;}if(N.className){P+="."+N.className.replace(" ",".");}if(M.length>1){P+="...["+M.length+" items]";}}return P||O;},_addAttr:function(M){var N=K[this[D]]||[];this.addAttr(M,{getter:function(){return A.DEFAULT_GETTER.call(this,M);},setter:function(O){A.DEFAULT_SETTER.call(this,M,O);}});}},true);C.NodeList=A;C.all=function(N,P,M){var O=new A({nodes:N,doc:P,restrict:M});return O.size()?O:null;};var L=[],I=Array.prototype.slice,H=".",E="nodeName",J="tagName",D="_yuid",G=function(M){this[D]=C.stamp(M.node);L[this[D]]=M.node;G._instances[this[D]]=this;F.apply(this,arguments);},F=C.Base,B=C.Base.prototype;G.NAME="Node";G.DOM_EVENTS={click:true};G._instances={};G.getDOMNode=function(M){return L[M[D]];};G.get=function(O,P,N){var M=null;O=(typeof O==="string")?C.Selector.query(O,P,true):O;if(O){M=G._instances[O[D]]||new G({node:O,restricted:N});}return M;};G.create=function(){return C.get(C.DOM.create.apply(C.DOM,arguments));};G.ATTRS={text:{getter:function(){return C.DOM.getText(L[this[D]]);},readOnly:true},"children":{getter:function(){var P=L[this[D]],O=P.children;if(O===undefined){var Q=P.childNodes;O=[];for(var N=0,M=Q.length;N<M;++N){if(Q[N][J]){O[O.length]=Q[N];}}}return C.all(O);}},restricted:{writeOnce:true,value:false}};G.DEFAULT_SETTER=function(M,P){var N=L[this[D]],Q,O;if(M.indexOf(H)!==-1){Q=M;O=M.split(H);M=O.shift();if(O){P=C.Object.setValue(N[M],O,P);if(P===undefined){allowSet=false;}}}else{N[M]=P;}return P;};G.DEFAULT_GETTER=function(M){var N=L[this[D]];return N[M];};C.extend(G,C.Base);C.mix(G.prototype,{hasAttr:function(M){return !!this._conf.get(M);},toString:function(){var O="",N=this[D]+": not bound to a node",M=L[this[D]];if(M){O+=M[E];if(M.id){O+="#"+M.id;}if(M.className){O+="."+M.className.replace(" ",".");}O+=" "+this[D];}return O||N;},_addDOMAttr:function(M){var N=L[this[D]],O=M.split(".")[0];if(N&&N[O]!==undefined){this.addAttr(O,{getter:function(){return G.DEFAULT_GETTER.call(this,M);},setter:function(P){return G.DEFAULT_SETTER.call(this,M,P);}});}else{}},addNode:function(N,M){return C.DOM.insertNode(L[this[D]],N,M);},on:function(Q,P,O,M){var N=I.call(arguments,0);N.splice(2,0,L[this[D]]);if(G.DOM_EVENTS[Q]){C.Event.attach.apply(C.Event,N);}return B.on.apply(this,arguments);},detach:function(O,N){var M=_slice.call(arguments,0);M.splice(2,0,L[this[D]]);return C.Event.detach.apply(C.Event,M);},get:function(M){if(!this.hasAttr(M)){this._addDOMAttr(M);}return B.get.apply(this,arguments);},set:function(M,N){if(!this.hasAttr(M)){this._addDOMAttr(M);}return B.set.apply(this,arguments);},destructor:function(){L[this[D]]=[];delete G._instances[this[D]];}},true);C.Node=G;C.get=C.Node.get;},"@VERSION@",{requires:["dom"]});