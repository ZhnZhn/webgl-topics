"use strict";(self.webpackChunkwebgl_topics=self.webpackChunkwebgl_topics||[]).push([[143],{891:(e,t,r)=>{var o=r(748);const n=e=>(e||{}).current,i={fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round"};var a=r(400),l=0;function s(e,t,r,o,n,i){var s,c,d={};for(c in t)"ref"==c?s=t[c]:d[c]=t[c];var p={type:e,props:d,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--l,__source:n,__self:i};if("function"==typeof e&&(s=e.defaultProps))for(c in s)void 0===d[c]&&(d[c]=s[c]);return a.YM.vnode&&a.YM.vnode(p),p}const c=e=>{let{className:t,title:r}=e;return s("span",{className:t,title:r,children:s("svg",{...i,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",strokeMiterlimit:"2",strokeWidth:"2",children:[s("title",{children:r}),s("rect",{ry:"1.8825414",rx:"194.14471",y:"1.434558",x:"19.176462",height:"12.460618",width:"10.85316",fill:"#8ecc2d",stroke:"#8ecc2d"}),s("rect",{ry:"1.87537",rx:"204.478",y:"16.639841",x:"8.8410215",height:"13.752699",width:"18.307165",fill:"#232f3b",stroke:"#232f3b"}),s("rect",{ry:"1.87537",rx:"204.478",y:"3.4229634",x:"2.5897937",height:"10.894996",width:"10.001963",fill:"#a487d4",stroke:"#a487d4"})]})})},d=e=>{let{className:t,style:r,caption:o}=e;return s("span",{className:t,style:r,children:o})},p=e=>{let{className:t,href:r,ariaLabel:o}=e;return s("a",{"aria-label":o,className:t,href:r,children:s("svg",{...i,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",strokeMiterlimit:"1.414","aria-hidden":"true",children:s("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})})})},u="WebGL Topics v0.3.0",f="header",h=`${f}__icon-app`,g=`${f}__label-app`,m=`${f}__github-link`,v=()=>s("header",{className:"header",children:[s(c,{className:h,title:u}),s(d,{className:g,caption:u}),s(p,{className:m,href:"https://github.com/zhnzhn/webgl-topics/",ariaLabel:"GitHub Repository"})]}),b=Object.is,y=Object.assign,E=e=>{let t;const r=new Set,o=(e,o)=>{const n="function"==typeof e?e(t):e;if(!b(n,t)){const e=t;t=(null!=o?o:"object"!=typeof n)?n:y({},t,n),r.forEach((r=>r(t,e)))}},n=()=>t,i={setState:o,getState:n,subscribe:e=>(r.add(e),()=>r.delete(e))};return t=e(o,n,i),i},x=(e,t)=>{const[r,n]=(0,o.eJ)();return(0,o.d4)((()=>e.subscribe(t,n)),[]),r},C="RANDOM_TRIANGLES",_="CROWN",w="PLANE",A="CUBE",S="CUBE_WITH_LIGHT",T="CUBE_TRANSPARENT",N=(B=()=>({topicId:C}),L=(e,t,r)=>{const o=r.subscribe;return r.subscribe=(e,t,n)=>{let i=e;if(t){const o=(null==n?void 0:n.equalityFn)||b;let a=e(r.getState());i=r=>{const n=e(r);if(!o(a,n)){const e=a;t(a=n,e)}},null!=n&&n.fireImmediately&&t(a,a)}return o(i)},B(e,t,r)},L?E(L):E),[M]=[(I=N).setState,I.getState];var I,L,B;const k=((e,t)=>function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return e.bind(null,...r)}(x,e,t))(N,(e=>e.topicId)),F=e=>(t,r)=>(0,o.I4)((r=>{e(r)&&(r.preventDefault(),r.stopPropagation(),t(r))}),r||[]),R=F((e=>{let{keyCode:t}=e;return 13===t||32===t})),P=e=>!!e,D=(e,t)=>"boolean"==typeof t?t:!e,G=e=>(0,o._Y)(D,e,P),O="#af94dc",Y={lineHeight:1.5,backgroundColor:"#4d4d4d"},z={color:O,paddingLeft:4,fontWeight:"bold",fontSize:"16px",cursor:"pointer"},U={display:"inline-block",width:16,height:16},W={display:"inline-block"},$={display:"block"},Z={display:"none"},V=O,K=e=>{let{isClose:t,style:r,toogleStyle:o,childrenStyle:n,caption:i,children:a}=e;const[l,c]=G(!t),d=R(c),[p,u,f,h]=l?["M 2,14 L 14,14 14,2 2,14",V,$,"show-popup"]:["M 2,2 L 14,8 2,14 2,2","#33373A",Z];return s("div",{style:{...Y,...r},children:[s("div",{role:"button",tabIndex:"0",className:"zhn-oc not-selected",style:o,onClick:c,onKeyDown:d,children:[s("div",{style:U,children:s("svg",{viewBox:"0 0 16 16",width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",style:W,children:s("path",{d:p,fill:u,strokeWidth:"1",stroke:O})})}),s("span",{style:z,children:i})]}),s("div",{"aria-expanded":l,className:h,style:{...n,...f},children:a})]})},X={backgroundColor:"#24282a"},H={color:"gray"},j={borderRight:"8px solid #1b75bb"},J=e=>{let{style:t,title:r,onClick:o}=e;const n=R(o);return s("div",{role:"menuitem",tabIndex:"0",className:"row__topic",style:{...H,...t},onClick:o,onKeyDown:n,children:r})},q=e=>{let{dataModel:t,topicId:r,toogleStyle:o}=e;const{caption:n,items:i}=t||{};return s(K,{caption:n,style:X,toogleStyle:o,children:i.map((e=>{let{id:t,title:o,onClick:n}=e;return s(J,{style:t===r?j:void 0,title:o,onClick:n},t)}))})},Q=e=>{let{style:t,toogleStyle:r,menuModel:o,topicId:n}=e;return s("div",{style:t,children:o.map((e=>s(q,{toogleStyle:r,dataModel:e,topicId:n},n)))})},ee=(e,t)=>({id:e,title:t,onClick:()=>{M({topicId:e})}}),te=[{caption:"WebGL with gl-matrix",items:[[C,"Random Triangles"],[_,"Crown Sample"],[w,"Plane"],[A,"Cube"],[S,"Cube With Light"],[T,"Cube Transparent"]].map((e=>ee(e[0],e[1])))}],re="sidebar",oe=`${re} with-scroll`,ne=`${re}__menu`,ie={borderRight:"1px solid black"},ae={paddingLeft:6},le=()=>{const e=k();return s("section",{className:oe,children:s("div",{className:ne,role:"navigation",children:s(Q,{style:ie,toogleStyle:ae,menuModel:te,topicId:e})})})},se=()=>({}),ce=()=>(0,o._Y)(se)[1],de=e=>"function"==typeof e,pe=/^-?\d*(\.\d+)?$/,ue=e=>{const t=(""+e).trim();return!isNaN(parseFloat(t))&&(""!==t&&pe.test(t))},fe=e=>{const{canvas:t}=e,{width:r,height:o}=t,n=e.gl=t.getContext("webgl");n.enable(n.DEPTH_TEST),n.viewport(0,0,r,o),n.clearColor(.5,.5,.5,1)},he="\nattribute float pointSize;\nattribute vec4 coords;\nattribute vec4 colors;\nuniform mat4 transformMatrix;\nuniform mat4 perspectiveMatrix;\nvarying vec4 varyingColors;\nvoid main(void){\n  gl_Position = perspectiveMatrix * transformMatrix * coords;\n  gl_PointSize = pointSize;\n  varyingColors = colors;\n}\n",ge="\nprecision mediump float;\nvarying vec4 varyingColors;\nvoid main(void) {\n  gl_FragColor = varyingColors;\n}\n",me="FRAGMENT",ve="VERTEX",be=(e,t,r)=>{let o;if(r===me)o=e.createShader(e.FRAGMENT_SHADER);else{if(r!==ve)return null;o=e.createShader(e.VERTEX_SHADER)}return e.shaderSource(o,t),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(alert(e.getShaderInfoLog(o)),null)},ye=e=>{const{gl:t,props:r}=e,{vertexShaderCode:o=he,fragmentShaderCode:n=ge}=r,i=be(t,o,ve),a=be(t,n,me),l=e.shaderProgram=t.createProgram();t.attachShader(l,i),t.attachShader(l,a),t.linkProgram(l),t.useProgram(l)};var Ee="undefined"!=typeof Float32Array?Float32Array:Array;Math.random;Math.PI;function xe(){var e=new Ee(16);return Ee!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Ce(e,t,r){var o=t[0],n=t[1],i=t[2],a=t[3],l=t[4],s=t[5],c=t[6],d=t[7],p=t[8],u=t[9],f=t[10],h=t[11],g=t[12],m=t[13],v=t[14],b=t[15],y=r[0],E=r[1],x=r[2],C=r[3];return e[0]=y*o+E*l+x*p+C*g,e[1]=y*n+E*s+x*u+C*m,e[2]=y*i+E*c+x*f+C*v,e[3]=y*a+E*d+x*h+C*b,y=r[4],E=r[5],x=r[6],C=r[7],e[4]=y*o+E*l+x*p+C*g,e[5]=y*n+E*s+x*u+C*m,e[6]=y*i+E*c+x*f+C*v,e[7]=y*a+E*d+x*h+C*b,y=r[8],E=r[9],x=r[10],C=r[11],e[8]=y*o+E*l+x*p+C*g,e[9]=y*n+E*s+x*u+C*m,e[10]=y*i+E*c+x*f+C*v,e[11]=y*a+E*d+x*h+C*b,y=r[12],E=r[13],x=r[14],C=r[15],e[12]=y*o+E*l+x*p+C*g,e[13]=y*n+E*s+x*u+C*m,e[14]=y*i+E*c+x*f+C*v,e[15]=y*a+E*d+x*h+C*b,e}function _e(e,t,r){var o,n,i,a,l,s,c,d,p,u,f,h,g=r[0],m=r[1],v=r[2];return t===e?(e[12]=t[0]*g+t[4]*m+t[8]*v+t[12],e[13]=t[1]*g+t[5]*m+t[9]*v+t[13],e[14]=t[2]*g+t[6]*m+t[10]*v+t[14],e[15]=t[3]*g+t[7]*m+t[11]*v+t[15]):(o=t[0],n=t[1],i=t[2],a=t[3],l=t[4],s=t[5],c=t[6],d=t[7],p=t[8],u=t[9],f=t[10],h=t[11],e[0]=o,e[1]=n,e[2]=i,e[3]=a,e[4]=l,e[5]=s,e[6]=c,e[7]=d,e[8]=p,e[9]=u,e[10]=f,e[11]=h,e[12]=o*g+l*m+p*v+t[12],e[13]=n*g+s*m+u*v+t[13],e[14]=i*g+c*m+f*v+t[14],e[15]=a*g+d*m+h*v+t[15]),e}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});var we=function(e,t,r,o,n){var i,a=1/Math.tan(t/2);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=n&&n!==1/0?(i=1/(o-n),e[10]=(n+o)*i,e[14]=2*n*o*i):(e[10]=-1,e[14]=-2*o),e};const Ae=e=>{const{canvas:t,gl:r,shaderProgram:o,perspectiveNear:n,perspectiveFar:i}=e,a=xe();we(a,1,t.width/t.height,n,i);const l=r.getUniformLocation(o,"perspectiveMatrix");r.uniformMatrix4fv(l,!1,a)},Se=e=>{let{gl:t,shaderProgram:r}=e;const o=t.getAttribLocation(r,"pointSize");t.vertexAttrib1f(o,20)},Te=e=>{const{gl:t,shaderProgram:r,zMatrixTranslate:o=-2}=e,n=e.matrix=xe();_e(n,n,[0,0,o]),e.matrixLocation=t.getUniformLocation(r,"transformMatrix")},Ne={createBuffer:function(e,t,r){void 0===r&&(r="ARRAY_BUFFER");const o=e.createBuffer();return e.bindBuffer(e[r],o),e.bufferData(e[r],t,e.STATIC_DRAW),o},createAttrib:function(e,t,r,o,n,i,a){void 0===n&&(n=0),void 0===i&&(i=0),void 0===a&&(a=!0);const l=e.getAttribLocation(t,r);return e.vertexAttribPointer(l,o,e.FLOAT,!1,n,i),e.enableVertexAttribArray(l),a&&e.bindBuffer(e.ARRAY_BUFFER,null),this},translateMatrix:e=>{const{matrix:t,trZ:r,trZD:o,minTrZ:n,maxTrZ:i,trZStep:a}=e;-1===o?r>n?e.trZ=r-a:e.trZD=1:r<i?e.trZ=r+a:e.trZD=-1;const l=xe();_e(l,l,[0,0,e.trZD*a]),Ce(t,l,t)},rotateMatrix:e=>{const{matrix:t,rX:r,rY:o,rZ:n}=e;var i,a,l,s,c,d,p,u,f,h,g,m,v;i=t,a=t,l=r,s=Math.sin(l),c=Math.cos(l),d=a[4],p=a[5],u=a[6],f=a[7],h=a[8],g=a[9],m=a[10],v=a[11],a!==i&&(i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15]),i[4]=d*c+h*s,i[5]=p*c+g*s,i[6]=u*c+m*s,i[7]=f*c+v*s,i[8]=h*c-d*s,i[9]=g*c-p*s,i[10]=m*c-u*s,i[11]=v*c-f*s,function(e,t,r){var o=Math.sin(r),n=Math.cos(r),i=t[0],a=t[1],l=t[2],s=t[3],c=t[8],d=t[9],p=t[10],u=t[11];t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*n-c*o,e[1]=a*n-d*o,e[2]=l*n-p*o,e[3]=s*n-u*o,e[8]=i*o+c*n,e[9]=a*o+d*n,e[10]=l*o+p*n,e[11]=s*o+u*n}(t,t,o),function(e,t,r){var o=Math.sin(r),n=Math.cos(r),i=t[0],a=t[1],l=t[2],s=t[3],c=t[4],d=t[5],p=t[6],u=t[7];t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*n+c*o,e[1]=a*n+d*o,e[2]=l*n+p*o,e[3]=s*n+u*o,e[4]=c*n-i*o,e[5]=d*n-a*o,e[6]=p*n-l*o,e[7]=u*n-s*o}(t,t,n)}},Me=e=>{const{isAnimate:t,isStopDraw:r,gl:o,vertexCount:n,draw:i,drawMode:a="TRIANGLES",isDrawElemnts:l,indexCount:s,isDynamicTranslate:c,matrixLocation:d,matrix:p}=e||{};t&&(Ne.rotateMatrix(e),c&&Ne.translateMatrix(e),o.uniformMatrix4fv(d,!1,p),o.clear(o.COLOR_BUFFER_BIT),l?o.drawElements(o[a],s,o.UNSIGNED_BYTE,0):o.drawArrays(o[a],0,n)),r?e.props.clearBuffers(e):window.requestAnimationFrame((()=>i(e)))},Ie=Object.assign,Le=(e,t,r)=>{(0,o.d4)((()=>{const o=n(e),i=n(t),{valuesForInit:a,createVertices:l,createIndices:s,loadTexture:c}=r;return Ie(i,{...a,canvas:o,props:r,configMatrix:Te,draw:r.draw||Me}),fe(i),ye(i),l(i),i.isWithoutPerspective||(i.createPerspective=Ae,Ae(i)),i.isWithoutPointSize||Se(i),Te(i),de(s)&&s(i),de(c)&&c(i),de(i.draw)&&i.draw(i),()=>{i.isStopDraw=!0}}),[])},Be={position:"relative",color:"#673ab7",padding:"6px 8px",marginLeft:16,fontSize:"16px",fontWeight:"bold",border:"2px solid #673ab7",borderRadius:8},ke=e=>{let{caption:t,style:r,onClick:o}=e;return s("button",{className:"bt",style:{...Be,...r},onClick:o,children:t})},Fe={display:"table-cell"},Re={EGGHEAD:e=>{let{style:t,title:r,href:o}=e;return s("a",{className:"native-link",style:{...Fe,...t},href:o,children:r})}},Pe=e=>{let{config:t}=e;if(t){const{topicLink:e}=t,{type:r,...o}=e||{},n=r&&Re[r];return n?s(n,{...o}):null}return null},De={position:"relative",float:"left"},Ge={borderRadius:"2px"},Oe={position:"absolute",top:8,right:8},Ye=(0,o.Gp)(((e,t)=>{const r=(0,o.sO)(),i=(0,o.sO)({isAnimate:!0,isStopDraw:!1}),a=ce(),l=(0,o.I4)((()=>{i.current.isAnimate=!n(i).isAnimate,a()}),[]);Le(r,i,e),(0,o.aP)(t,(()=>n(i)));const{valuesForInit:c}=e,{isAnimate:d}=n(i)||{};return s("div",{style:De,children:[s("canvas",{ref:r,width:500,height:500,style:Ge,onClick:l,children:["Your browser doesn't appear to support the",s("code",{children:"<canvas>"})," element."]}),!d&&s(ke,{caption:"Run Animation",style:Oe,onClick:l}),s(Pe,{config:c})]})})),ze={zMatrixTranslate:-2,rX:-.007,rY:.012,rZ:.01,perspectiveNear:.1,perspectiveFar:10},Ue=Math.random,We={valuesForInit:{topicLink:{type:"EGGHEAD",title:"Egghead: Build Complex 3D models with WebGL",href:"https://egghead.io/courses/build-complex-3d-models-with-webgl"}},createVertices:e=>{const{gl:t,shaderProgram:r}=e,o=e.vertices=[],n=e.colors=[],i=e.vertexCount=30;for(var a=0;a<i;a++)o.push(2*Ue()-1),o.push(2*Ue()-1),o.push(2*Ue()-1),n.push(Ue()),n.push(Ue()),n.push(Ue()),n.push(1);e.buffer=Ne.createBuffer(t,new Float32Array(o)),Ne.createAttrib(t,r,"coords",3),e.colorBuffer=Ne.createBuffer(t,new Float32Array(n)),Ne.createAttrib(t,r,"colors",4)},clearBuffers:e=>{const{gl:t,buffer:r,colorBuffer:o}=e;t.deleteBuffer(r),t.deleteBuffer(o)}},$e=(e,t)=>{e.push(Math.cos(t)),e.push(Math.sin(t)),e.push(.1*Math.sin(10*t))},Ze=(e,t)=>{e.push(.5*Math.sin(10*t)+.5),e.push(.5*Math.sin(8*t)+.5),e.push(.5*Math.sin(12*t)+.5),e.push(1)},Ve={DF:We,[C]:We,[_]:{valuesForInit:{topicLink:{type:"EGGHEAD",title:"Egghead: Build Complex 3D models with WebGL",href:"https://egghead.io/courses/build-complex-3d-models-with-webgl"}},createVertices:e=>{const t=e.vertices=[.88,-.25,-.18,1,0,0,1,.9,.25,0,1,0,0,1,.88,-.25,.18,1,0,0,1,.85,-.25,.29,1,1,0,1,.78,.25,.45,1,1,0,1,.67,-.25,.6,1,1,0,1,.6,-.25,.67,0,1,0,1,.45,.25,.78,0,1,0,1,.29,-.25,.85,0,1,0,1,.18,-.25,.88,0,1,1,1,0,.25,.9,0,1,1,1,-.18,-.25,.88,0,1,1,1,-.29,-.25,.85,0,0,1,1,-.45,.25,.78,0,0,1,1,-.6,-.25,.67,0,0,1,1];e.vertexCount=t.length/7;const{gl:r,shaderProgram:o}=e;e.buffer=Ne.createBuffer(r,new Float32Array(t)),Ne.createAttrib(r,o,"coords",3,7*Float32Array.BYTES_PER_ELEMENT,0,!1).createAttrib(r,o,"colors",4,7*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT)},clearBuffers:e=>{const{gl:t,buffer:r}=e;t.deleteBuffer(r)}},[w]:{valuesForInit:{drawMode:"TRIANGLE_FAN",topicLink:{type:"EGGHEAD",title:"Egghead: Build Complex 3D models with WebGL",href:"https://egghead.io/courses/build-complex-3d-models-with-webgl"}},createVertices:e=>{const t=e.vertices=[];t.push(0,.9,.3,1,1,1,1);for(var r=0;r<2*Math.PI;r+=.01)$e(t,r),Ze(t,r);r=2*Math.PI,$e(t,r),Ze(t,r),e.vertexCount=t.length/7;const{gl:o,shaderProgram:n}=e;e.buffer=Ne.createBuffer(o,new Float32Array(t)),Ne.createAttrib(o,n,"coords",3,7*Float32Array.BYTES_PER_ELEMENT,0,!1).createAttrib(o,n,"colors",4,7*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT)},clearBuffers:e=>{const{gl:t,buffer:r}=e;t.deleteBuffer(r)}},[A]:{valuesForInit:{zMatrixTranslate:-4,isDrawElemnts:!0,topicLink:{type:"EGGHEAD",title:"Egghead: Build Complex 3D models with WebGL",href:"https://egghead.io/courses/build-complex-3d-models-with-webgl"}},createVertices:e=>{const t=e.vertices=[-1,-1,-1,1,0,0,1,1,-1,-1,1,1,0,1,-1,1,-1,0,1,1,1,1,1,-1,0,0,1,1,-1,1,1,1,.5,0,1,1,1,1,.5,1,1,1,-1,-1,1,1,0,.5,1,1,-1,1,.5,0,1,1];e.vertexCount=t.length/7;const{gl:r,shaderProgram:o}=e;e.buffer=Ne.createBuffer(r,new Float32Array(t)),Ne.createAttrib(r,o,"coords",3,7*Float32Array.BYTES_PER_ELEMENT,0,!1).createAttrib(r,o,"colors",4,7*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT)},createIndices:e=>{const t=e.indices=[0,1,2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,0,7,0,1,0,2,6,2,6,4,1,3,7,3,7,5];e.indexCount=t.length;const{gl:r}=e;e.indexBuffer=Ne.createBuffer(r,new Uint8Array(t),"ELEMENT_ARRAY_BUFFER")},clearBuffers:e=>{const{gl:t,buffer:r,indexBuffer:o}=e;t.deleteBuffer(r),t.deleteBuffer(o)}},TEXTURE_IMAGE:{vertexShaderCode:"\n  attribute vec4 coords;\n  attribute float pointSize;\n  uniform mat4 transformMatrix;\n  uniform mat4 perspectiveMatrix;\n  attribute vec4 colors;\n  varying vec4 varyingColors;\n\n  attribute vec2 textureCoords;\n  varying vec2 varyingTextureCoords;\n  void main(void){\n    gl_Position = perspectiveMatrix * transformMatrix * coords;\n    gl_PointSize = pointSize;\n    varyingColors = colors;\n\n    varyingTextureCoords = textureCoords;\n  }\n  ",fragmentShaderCode:"\n  precision mediump float;\n  uniform vec4 color;\n  varying vec4 varyingColors;\n\n  varying vec2 varyingTextureCoords;\n  uniform sampler2D sampler;\n  void main(void) {\n    gl_FragColor = texture2D(sampler, varyingTextureCoords);\n  }\n  ",valuesForInit:{drawMode:"TRIANGLE_STRIP",topicLink:{type:"EGGHEAD",title:"Egghead: Build Complex 3D models with WebGL",href:"https://egghead.io/courses/build-complex-3d-models-with-webgl"}},createVertices:e=>{const t=e.vertices=[-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1];e.vertexCount=t.length/4;const{gl:r,shaderProgram:o}=e;e.buffer=Ne.createBuffer(r,new Float32Array(t)),Ne.createAttrib(r,o,"coords",2,4*Float32Array.BYTES_PER_ELEMENT,0,!1).createAttrib(r,o,"textureCoords",2,4*Float32Array.BYTES_PER_ELEMENT,2*Float32Array.BYTES_PER_ELEMENT,!1)},loadTexture:e=>{const t=document.createElement("img");t.crossOrigin="",t.addEventListener("load",(()=>{const{gl:r,shaderProgram:o}=e,n=r.createTexture(),i=r.getUniformLocation(o,"sampler");r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,1),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,n),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,t),r.uniform1i(i,0)})),t.src="img/cat.jpg"},clearBuffers:e=>{}},[S]:{vertexShaderCode:"\n  attribute vec4 coords;\n  uniform mat4 transformMatrix;\n  uniform mat4 perspectiveMatrix;\n\n  attribute vec3 normal;\n  uniform vec3 lightColor;\n  uniform vec3 lightDirection;\n\n  varying vec4 varyingColors;\n  void main(void){\n    vec3 norm = normalize(normal);\n    vec3 ld = normalize(lightDirection);\n    float dotProduct = max(dot(norm, ld), 0.0);\n    vec3 vertexColor = lightColor * vec3(1, 1, 0) * dotProduct;\n    varyingColors = vec4(vertexColor, 1);\n\n    gl_Position = perspectiveMatrix * transformMatrix * coords;\n  }\n  ",fragmentShaderCode:"\n  precision mediump float;\n  varying vec4 varyingColors;\n  void main(void) {\n    gl_FragColor = varyingColors;\n  }\n  ",valuesForInit:{zMatrixTranslate:-4,isWithoutPointSize:!0,isDrawElemnts:!0,topicLink:{type:"EGGHEAD",title:"Egghead: Build Complex 3D models with WebGL",href:"https://egghead.io/courses/build-complex-3d-models-with-webgl"}},createVertices:e=>{const t=e.vertices=[-1,-1,-1,1,-1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,-1,1,1,-1,1];e.vertexCount=t.length/3;const{gl:r,shaderProgram:o}=e;e.buffer=Ne.createBuffer(r,new Float32Array(t)),Ne.createAttrib(r,o,"coords",3,0,0,!1);e.normalBuffer=Ne.createBuffer(r,new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0])),Ne.createAttrib(r,o,"normal",3,0,0);const n=r.getUniformLocation(o,"lightColor");r.uniform3f(n,1,1,1);const i=r.getUniformLocation(o,"lightDirection");r.uniform3f(i,.5,1,0)},createIndices:e=>{const t=e.indices=[0,1,2,1,2,3,2,3,4,3,4,5,4,5,6,5,6,7,6,7,0,7,0,1,0,2,6,2,6,4,1,3,7,3,7,5];e.indexCount=t.length;const{gl:r}=e;e.indexBuffer=Ne.createBuffer(r,new Uint8Array(t),"ELEMENT_ARRAY_BUFFER")},clearBuffers:e=>{const{gl:t,buffer:r,indexBuffer:o}=e;t.deleteBuffer(r),t.deleteBuffer(o)}},[T]:{valuesForInit:{zMatrixTranslate:-4,isDrawElemnts:!0,drawMode:"LINES",isDynamicTranslate:!0,trZStep:.005,trZ:-4,trZD:-1,minTrZ:-10,maxTrZ:-2},createVertices:e=>{const t=e.vertices=[0,0,0,1,1,1,1,-1,-1,-1,1,0,0,1,1,-1,-1,1,1,0,1,-1,1,-1,1,0,0,1,1,1,-1,1,1,0,1,-1,-1,1,1,0,0,1,1,-1,1,1,1,0,1,-1,1,1,1,0,0,1,1,1,1,1,1,0,1];e.vertexCount=t.length/7;const{gl:r,shaderProgram:o}=e;e.buffer=Ne.createBuffer(r,new Float32Array(t)),Ne.createAttrib(r,o,"coords",3,7*Float32Array.BYTES_PER_ELEMENT,0,!1).createAttrib(r,o,"colors",4,7*Float32Array.BYTES_PER_ELEMENT,3*Float32Array.BYTES_PER_ELEMENT)},createIndices:e=>{const t=e.indices=[0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,1,2,2,4,4,3,3,1,1,5,5,6,6,2,6,8,8,7,7,5,8,4,7,3];e.indexCount=t.length;const{gl:r}=e;e.indexBuffer=Ne.createBuffer(r,new Uint8Array(t),"ELEMENT_ARRAY_BUFFER")},clearBuffers:e=>{const{gl:t,buffer:r,indexBuffer:o}=e;t.deleteBuffer(r),t.deleteBuffer(o)}}},Ke=e=>{const t=e&&Ve[e]||Ve.DF;return t.valuesForInit={...ze,...t.valuesForInit},t.key=e,{Comp:Ye,props:t}},Xe=e=>{const t=(0,o.sO)(e);return(0,o.Ye)((()=>[e=>{t.current=e},()=>t.current]),[])},He=e=>{let{id:t,style:r,title:o}=e;return s("label",{className:"not-selected",style:r,htmlFor:t,children:o})},je=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Je=Math.max,qe=Math.ceil,Qe=Math.floor,et=Math.pow,tt=7,rt=1e7,ot=Qe(9007199254740991/tt),nt="[DecimalError] ",it=nt+"Invalid argument: ",at=nt+"Exponent out of range: ";let lt=!0;const st=()=>lt;function ct(e){let t=e.e*tt,r=e.d[0];for(;r>=10;r/=10)t++;return t}const dt=(e,t)=>st()?function(e,t,r){let o,n,i,a,l,s,c,d,p=e.d;for(a=1,i=p[0];i>=10;i/=10)a++;if(o=t-a,o<0)o+=tt,n=t,c=p[d=0];else{if(d=qe((o+1)/tt),i=p.length,d>=i)return e;for(c=i=p[d],a=1;i>=10;i/=10)a++;o%=tt,n=o-tt+a}if(void 0!==r&&(i=et(10,a-n-1),l=c/i%10|0,s=t<0||void 0!==p[d+1]||c%i,s=r<4?(l||s)&&(0==r||r==(e.s<0?3:2)):l>5||5==l&&(4==r||s||6==r&&(o>0?n>0?c/et(10,a-n):0:p[d-1])%10&1||r==(e.s<0?8:7))),t<1||!p[0])return s?(i=ct(e),p.length=1,t=t-i-1,p[0]=et(10,(tt-t%tt)%tt),e.e=Qe(-t/tt)||0):(p.length=1,p[0]=e.e=e.s=0),e;if(0==o?(p.length=d,i=1,d--):(p.length=d+1,i=et(10,tt-o),p[d]=n>0?(c/et(10,a-n)%et(10,n)|0)*i:0),s)for(;;){if(0==d){(p[0]+=i)==rt&&(p[0]=1,++e.e);break}if(p[d]+=i,p[d]!=rt)break;p[d--]=0,i=1}for(o=p.length;0===p[--o];)p.pop();if(st()&&(e.e>ot||e.e<-ot))throw Error(at+ct(e));return e}(e,t):e;function pt(e,t){let r,o,n;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(o=t.search(/e/i))>0?(r<0&&(r=o),r+=+t.slice(o+1),t=t.substring(0,o)):r<0&&(r=t.length),o=0;48===t.charCodeAt(o);)++o;for(n=t.length;48===t.charCodeAt(n-1);)--n;if(t=t.slice(o,n)){if(n-=o,r=r-o-1,e.e=Qe(r/tt),e.d=[],o=(r+1)%tt,r<0&&(o+=tt),o<n){for(o&&e.d.push(+t.slice(0,o)),n-=tt;o<n;)e.d.push(+t.slice(o,o+=tt));t=t.slice(o),o=tt-t.length}else o-=n;for(;o--;)t+="0";if(e.d.push(+t),st()&&(e.e>ot||e.e<-ot))throw Error(at+r)}else e.s=0,e.e=0,e.d=[0];return e}function ut(e,t){let r,o,n,i,a,l,s,c,d=e.constructor,p=d.precision;if(!e.s||!t.s)return t.s||(t=new d(e)),dt(t,p);if(s=e.d,c=t.d,a=e.e,n=t.e,s=s.slice(),i=a-n,i){for(i<0?(o=s,i=-i,l=c.length):(o=c,n=a,l=s.length),a=qe(p/tt),l=a>l?a+1:l+1,i>l&&(i=l,o.length=1),o.reverse();i--;)o.push(0);o.reverse()}for(l=s.length,i=c.length,l-i<0&&(i=l,o=c,c=s,s=o),r=0;i;)r=(s[--i]=s[i]+c[i]+r)/rt|0,s[i]%=rt;for(r&&(s.unshift(r),++n),l=s.length;0==s[--l];)s.pop();return t.d=s,t.e=n,dt(t,p)}function ft(e,t){let r,o,n,i,a,l,s,c,d,p,u=e.constructor,f=u.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new u(e),dt(t,f);if(s=e.d,p=t.d,o=t.e,c=e.e,s=s.slice(),a=c-o,a){for(d=a<0,d?(r=s,a=-a,l=p.length):(r=p,o=c,l=s.length),n=Je(qe(f/tt),l)+2,a>n&&(a=n,r.length=1),r.reverse(),n=a;n--;)r.push(0);r.reverse()}else{for(n=s.length,l=p.length,d=n<l,d&&(l=n),n=0;n<l;n++)if(s[n]!=p[n]){d=s[n]<p[n];break}a=0}for(d&&(r=s,s=p,p=r,t.s=-t.s),l=s.length,n=p.length-l;n>0;--n)s[l++]=0;for(n=p.length;n>a;){if(s[--n]<p[n]){for(i=n;i&&0===s[--i];)s[i]=rt-1;--s[i],s[n]+=rt}s[n]-=p[n]}for(;0===s[--l];)s.pop();for(;0===s[0];s.shift())--o;return s[0]?(t.d=s,t.e=o,dt(t,f)):new u(0)}function ht(e){let t="";for(;e--;)t+="0";return t}function gt(e,t,r){let o,n=ct(e),i=function(e){let t,r,o,n=e.length-1,i="",a=e[0];if(n>0){for(i+=a,t=1;t<n;t++)o=e[t]+"",r=tt-o.length,r&&(i+=ht(r)),i+=o;a=e[t],o=a+"",r=tt-o.length,r&&(i+=ht(r))}else if(0===a)return"0";for(;a%10==0;)a/=10;return i+a}(e.d),a=i.length;return t?(r&&(o=r-a)>0?i=i.charAt(0)+"."+i.slice(1)+ht(o):a>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(n<0?"e":"e+")+n):n<0?(i="0."+ht(-n-1)+i,r&&(o=r-a)>0&&(i+=ht(o))):n>=a?(i+=ht(n+1-a),r&&(o=r-n-1)>0&&(i=i+"."+ht(o))):((o=n+1)<a&&(i=i.slice(0,o)+"."+i.slice(o)),r&&(o=r-a)>0&&(n+1===a&&(i+="."),i+=ht(o))),e.s<0?"-"+i:i}const mt={};function vt(e){let t=this;if(!(t instanceof vt))return new vt(e);if(t.constructor=vt,e instanceof vt)return t.s=e.s,t.e=e.e,e=e.d,void(t.d=e?e.slice():e);if("number"==typeof e){if(0*e!=0)throw Error(it+e);if(e>0)t.s=1;else{if(!(e<0))return t.s=0,t.e=0,void(t.d=[0]);e=-e,t.s=-1}return e===~~e&&e<1e7?(t.e=0,void(t.d=[e])):pt(t,e.toString())}if("string"!=typeof e)throw Error(it+e);if(45===e.charCodeAt(0)?(e=e.slice(1),t.s=-1):t.s=1,!je.test(e))throw Error(it+e);pt(t,e)}vt.precision=20,vt.toExpNeg=-7,vt.toExpPos=21,mt.toString=mt.valueOf=function(){const e=this,t=ct(e),r=e.constructor;return gt(e,t<=r.toExpNeg||t>=r.toExpPos)},mt.toNumber=function(){return+this},mt.add=function(e){let t=this;return e=new t.constructor(e),t.s==e.s?ut(t,e):ft(t,(e.s=-e.s,e))},mt.sub=function(e){let t=this;return e=new t.constructor(e),t.s==e.s?ft(t,e):ut(t,(e.s=-e.s,e))},vt.prototype=mt;const bt=vt,yt={position:"relative",display:"inline-block",backgroundColor:"rgb(225, 225, 203)",margin:"0 5px",boxShadow:"0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)"},Et={display:"inline-block"},xt={display:"inline",color:"green",width:40,height:26,marginRight:5,fontSize:"16px",fontWeight:"bold",backgroundColor:"#e1e1cb",background:"transparent none repeat scroll 0 0",border:"medium none",outline:"medium none"},Ct={width:"100%",margin:"0 0 5px 0",borderWidth:"medium medium 2px",borderStyle:"none none solid",borderColor:"red",borderImage:"none"},_t={display:"inline-block",position:"relative",borderColor:"rgb(103, 58, 183) transparent transparent",borderStyle:"solid",borderWidth:"12px 6px 4px",cursor:"pointer"},wt={..._t,transform:"rotateX(180deg)",margin:"0 6px",top:-16},At={..._t,top:-12,marginRight:6},St=()=>{},Tt={0:{borderColor:"#f44336"},1:{borderColor:"#673ab7"},2:{borderColor:"#9e9e9e"}},Nt=(e,t)=>ue(t)?e!==parseFloat(t)?1:2:0,Mt=e=>{let{initialValue:t="0"}=e;return{mode:ue(t)?2:0,value:t,initedValue:t}},It=(e,t,r)=>(e.mode=t,e.value=r,{...e}),Lt="dfKey",Bt=.1,kt=(0,o.Gp)(((e,t)=>{const{id:r,inputStyle:n,initialValue:i,inputKey:a=Lt,step:l=Bt,onChangeMode:c=St,onKeyDownEnter:d=St}=e,p=(0,o.sO)(),[u,f]=(0,o.eJ)((()=>Mt(e))),{mode:h,value:g,initedValue:m}=u,v=e=>{h!==e&&c(a,e)},b=()=>{const e=new bt(g).add(l).toString(),t=Nt(m,e);v(t),f((r=>It(r,t,e)))},y=()=>{const e=new bt(g).sub(l).toString(),t=Nt(m,e);v(t),f((r=>It(r,t,e)))};(0,o.d4)((()=>{f(Mt(e))}),[i]),(0,o.aP)(t,(()=>({getValue:()=>parseFloat(g),setMode:e=>{f((t=>(t.mode=e,2===e&&(t.initedValue=g),{...t})))}})));const E=Tt[h];return s("div",{style:yt,children:[s("button",{style:wt,onClick:b}),s("div",{style:Et,children:[s("input",{ref:p,id:r,type:"text",style:{...xt,...n},value:g,onChange:e=>{const t=e.target.value,r=Nt(m,t);v(r),f((e=>It(e,r,t)))},onKeyDown:e=>{switch(e.keyCode){case 13:d();break;case 27:{const e=g!==m||""+m=="0"?2:1;v(e),f((t=>It(t,e,m)));break}case 38:e.preventDefault(),b();break;case 40:e.preventDefault(),y();break;default:return}}}),s("hr",{style:{...Ct,...E}})]}),s("button",{style:At,onClick:y})]})})),Ft={color:"#fefcff",height:30,padding:"4px 6px",marginLeft:16,fontSize:"16px",fontWeight:"bold",backgroundColor:"#673ab7",border:"2px solid #673ab7",borderRadius:8},Rt={0:{...Ft,color:"#f44336",backgroundColor:"#9e9e9e",border:"2px solid #9e9e9e"},1:{...Ft,border:"2px solid #673ab7"},2:{...Ft,backgroundColor:"#9e9e9e",border:"2px solid #9e9e9e"}},Pt=(0,o.Gp)(((e,t)=>{let{mode:r=2,style:n,onClick:i}=e;const[a,l]=(0,o.eJ)(r);(0,o.aP)(t,(()=>({setMode:l})),[]);return s("button",{className:"bt",style:{...n,...Rt[a]},onClick:1===a?i:void 0,children:"Set"})})),Dt={Label:He,OpenClose:K,InputFloat:kt,ButtonSet:Pt},Gt=e=>{let{item:t,propCaption:r}=e;return s("span",{children:t[r]})},Ot="zhn-select",Yt=`${Ot}__input`,zt=`${Ot}__spinner`,Ut=`${Ot}__spinner--failed`,Wt=`${Ot}__input__hr`,$t=`${Ot}__options`,Zt=`${Ot}__options__div`,Vt=`${Ot}__row`,Kt=`${Ot}__row--active`,Xt=`${Ot}__footer`,Ht=`${Ot}__footer__index`,jt=`${Ot}__footer__bts`,Jt=`${Ot}__footer--margin`,qt=(e,t)=>e?-1!==(""+e).indexOf("%")?{...t,width:e}:{...t,width:e+"px"}:null,Qt=Array.isArray,er=e=>Qt(e)?e[0]?e[1]:"":e||"",tr=(e,t)=>{const r=er(e),o=er(t);return r?o?`${r} ${o}`:r:o||void 0},rr=e=>{let{className:t,style:r,caption:o="",onClick:n,...i}=e;return s("button",{...i,className:tr("zhn-bt-circle2",t),style:r,onClick:n,children:s("div",{children:o})})},or={backgroundColor:"#949ab4"},nr=(0,o.Gp)(((e,t)=>{let{indexActiveOption:r,nFiltered:o,nAll:n,onStepDown:i,onStepUp:a,onClear:l}=e;return s("div",{className:`${Xt} not-selected`,children:[s("span",{className:Ht,children:[s("span",{ref:t,children:r}),s("span",{children:[": ",o,": ",n]})]}),s("span",{className:jt,children:[s(rr,{className:Jt,style:or,caption:"Dn",onClick:i}),s(rr,{className:Jt,style:or,caption:"Up",onClick:a}),s(rr,{style:or,caption:"CL",onClick:l})]})]})})),ir={display:"block"},ar={display:"none"},lr=e=>{let{refOptionsComp:t,refIndexNode:r,rootOptionsStyle:o,width:n,isShowOption:i,domOptions:a,indexActiveOption:l,nFiltered:c,nAll:d,onStepUp:p,onStepDown:u,onClear:f}=e;const h=qt(n,i?ir:ar);return s("div",{className:$t,style:h,"data-scrollable":!0,children:[s("div",{ref:t,className:Zt,style:{...o,...h},children:a}),s(nr,{ref:r,indexActiveOption:l,nAll:d,nFiltered:c,onStepUp:p,onStepDown:u,onClear:f})]})},sr=e=>{let{options:t,indexActiveOption:r,propCaption:o,ItemOptionComp:n,onClick:i}=e;return t.map(((e,t)=>s("div",{role:"option","aria-selected":r===t,tabIndex:"0",className:Vt,"data-index":t,onClick:t=>i(e,t),children:s(n,{item:e,propCaption:o})},t)))},cr={position:"absolute",top:10,right:0,width:35,paddingRight:5,textAlign:"center",verticalAlign:"middle",cursor:"pointer"},dr={position:"relative",top:2,display:"inline-block",height:0,width:0,borderColor:"#999 transparent transparent",borderStyle:"solid",borderWidth:"10px 8px 4px"},pr=e=>{const t=n(e);return t&&t.style||{}},ur=(0,o.Gp)(((e,t)=>{let{arrowStyle:r,onClick:n}=e;const i=(0,o.sO)(),a=(0,o.sO)();return(0,o.aP)(t,(()=>({startAnimation:()=>{pr(i).animation="circle infinite 1.25s linear",pr(a).borderColor="#1b75bb transparent transparent"},stopAnimation:()=>{pr(i).animation=""}}))),s("button",{ref:i,style:cr,tabIndex:"-1",onClick:n,children:s("span",{ref:a,style:{...dr,...r}})})})),fr={borderColor:"#1b75bb transparent transparent"},hr=(e,t,r,o)=>{const{isLoading:n,isLoadingFailed:i,placeholder:a,optionName:l="",onLoadOption:c}=e,{isShowOption:d,optionNames:p}=t;return n||i?n?[`Loading ${p}...`,s("span",{className:zt,"data-loader":"circle"})]:i?[`Loading ${p} Failed`,s(rr,{className:Ut,"data-loader":"circle-failed",onClick:c})]:[]:[a||`Select ${l}...`,s(ur,{ref:r,arrowStyle:d?fr:void 0,onClick:o})]},gr="From input:",mr=(e,t,r,o)=>{const n=((e,t,r)=>{const o=t.toLowerCase();return(e||[]).filter((e=>-1!==e[r].toLowerCase().indexOf(o)))})(t,e,r);return 0===n.length&&n.push(((e,t,r)=>{const o=String(e).replace(gr,"").trim();return{[t]:r?`${gr} ${o}`:"No results found",value:"noresult",inputValue:o}})(e,r,o)),n},vr=e=>"number"==typeof e&&e-e==0,br=e=>{const{dataset:t}=e,{index:r}=t||{};return Number(r)},yr=(e,t)=>(0,o.Ye)((()=>[t=>{if(t){t.classList.add(Kt);const r=br(t),o=n(e);o&&vr(r)&&(o.textContent=r+1)}},e=>{const r=e||t();r&&r.classList.remove(Kt)}]),[]),Er=e=>(e.children||{}).length,xr=(e,t,r,i,a,l)=>(0,o.Ye)((()=>[()=>{const o=t();if(o){i(o);const s=n(e);a(l()+1),l()>=Er(s)&&(a(0),s.scrollTop=0);const c=t();r(c);const d=c.offsetTop,p=s.scrollTop;d-p>70&&(s.scrollTop+=d-p-70)}},()=>{const o=t();if(o){i(o);const s=n(e);if(a(l()-1),l()<0){a(Er(s)-1);const e=t();s.scrollTop=e.offsetTop}const c=t();r(c);const d=c.offsetTop,p=s.scrollTop;d-p<70&&(s.scrollTop-=70-(d-p))}}]),[]),Cr=[],_r=e=>{let{optionName:t,optionNames:r,options:o=Cr}=e;return{value:"",initialOptions:o,options:o,optionNames:r||t||""}},wr=()=>{},Ar={...Dt,InputSelect:e=>{const{rootStyle:t,width:r,rootOptionsStyle:i,propCaption:a="caption",ItemOptionComp:l=Gt,isWithInput:c=!1,onSelect:d=wr}=e,p=(0,o.sO)(),u=(0,o.sO)(),f=(0,o.sO)(),h=(0,o.sO)(),[g,m]=Xe(0),[v,b]=(0,o.eJ)((()=>_r(e))),{value:y,options:E,initialOptions:x}=v,[C,_]=G(!1),w=(0,o.I4)((()=>{b((()=>_r(e))),_(!1),g(0)}),[e]),A=(0,o.I4)((()=>((n(f)||{}).childNodes||[])[m()]),[]),[S,T]=yr(h,A),[N,M]=xr(f,A,S,T,g,m),I=(0,o.I4)(((e,t)=>{T(),g(br(t.currentTarget)),_(!1),b((t=>({...t,value:e[a]}))),d(e)}),[]),L=(0,o.Ye)((()=>s(sr,{options:E,indexActiveOption:m(),propCaption:a,ItemOptionComp:l,onClick:I})),[E]);(0,o.d4)((()=>{if(C){const e=A();S(e),(e=>{if(e){const{offsetTop:t}=e,r=e.parentElement,{scrollTop:o}=r;t-o>70&&(r.scrollTop+=t-o-70),t-o<0&&(r.scrollTop=0)}})(e)}}),[C]);const B=m(),k=qt(r,t),[F,R]=hr(e,v,p,_),[P,D]=(e=>{let{options:t,initialOptions:r}=e;return[t[0]&&"noresult"!==t[0].value?t.length:0,r?r.length:0]})(v);return s("div",{className:Ot,style:k,children:[s("input",{ref:u,className:Yt,type:"text",name:"select",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,value:y,placeholder:F,onChange:e=>{const t=e.target.value,r=t.length,o=y.length;if(r!==o){0!==m()&&(T(),g(0)),b((e=>({...e,value:t,options:mr(t,r>o?E:x,a,c)}))),_(!0)}},onKeyDown:e=>{switch(e.keyCode){case 13:{const e=m();if(vr(e)){const t=E[e];if(t&&t[a]){const e="noresult"!==t.value?t:c?((e,t)=>({[t]:"From Input",value:e.inputValue}))(t,a):void 0;d(e),_(!1),b((e=>({...e,value:t[a]})))}}else d();break}case 27:case 46:e.preventDefault(),C?_(!1):(T(),w(),d());break;case 40:C?(e.preventDefault(),N()):_(!0);break;case 38:C&&(e.preventDefault(),M());break;default:return}}}),R,s("hr",{className:Wt}),C&&s(lr,{refOptionsComp:f,refIndexNode:h,rootOptionsStyle:i,width:r,isShowOption:C,domOptions:L,indexActiveOption:B,nFiltered:P,nAll:D,onStepUp:M,onStepDown:N,onClear:()=>{T(),d(),w()}})]})}},Sr={float:"left",margin:"8px 0 16px 20px"},Tr={color:"forestgreen",fontSize:"16px",fontWeight:"bold"},Nr={backgroundColor:"#33373a"},Mr={display:"flex",alignItems:"center",paddingTop:6},Ir={paddingBottom:8},Lr={margin:"8px 0 16px 0"},Br={display:"inline-block",width:65,textAlign:"end"},kr=[{caption:"TRIANGLES",value:"TRIANGLES"},{caption:"TRIANGLE_STRIP",value:"TRIANGLE_STRIP"},{caption:"TRIANGLE_FAN",value:"TRIANGLE_FAN"},{caption:"LINES",value:"LINES"},{caption:"LINE_STRIP",value:"LINE_STRIP"},{caption:"LINE_LOOP",value:"LINE_LOOP"},{caption:"POINTS",value:"POINTS"}],Fr={position:"relative",top:-6},Rr=e=>{let{onGetComp:t}=e;const[r,n]=Xe(),i=(0,o.I4)((()=>{const e=n();if(e){t().drawMode=e.value}}),[t,n]);return s(Ar.OpenClose,{caption:"DrawMode",style:Nr,childrenStyle:Ir,children:s("div",{style:Mr,children:[s(Ar.InputSelect,{width:"170",options:kr,styleRoot:Lr,onSelect:r}),s(Ar.ButtonSet,{style:Fr,mode:1,onClick:i})]})})},Pr=e=>n((0,o.sO)(e)),Dr={marginTop:12,display:"flex",alignItems:"center"},Gr={color:"grey",paddingLeft:24,fontWeight:"bold",fontSize:"16px"},Or={width:45},Yr=()=>{},zr="inputFloat",Ur=e=>{let{inputId:t,labelBy:r,value:i,propKey:a,styleLabel:l,onGetComp:c,fnAfterSet:d=Yr}=e;const p=(0,o.sO)(),u=(0,o.sO)(),f=(0,o.sO)({[zr]:2,bt:2}),h=(0,o.I4)(((e,t)=>{const r=n(f);r[zr]=t;const o=0===(i=t)?0:1===i?1:2;var i;r.bt!==o&&(r.bt=o,n(u).setMode(o))}),[]),g=(0,o.I4)((e=>{const t=n(f);t[zr]=e,t.bt=e,n(p).setMode(e),n(u).setMode(e)}),[]),m=(0,o.I4)((()=>{const e=c();e[a]=n(p).getValue(),d(e),g(2)}),[a,c,d,g]);return s("div",{style:Dr,children:[s(Ar.Label,{id:t,style:{...Gr,...l},title:r}),s(Ar.InputFloat,{ref:p,id:t,inputKey:zr,inputStyle:Or,initialValue:i,step:.001,onChangeMode:h,onKeyDownEnter:m}),s(Ar.ButtonSet,{ref:u,onClick:m})]})},Wr=e=>{let{perspectiveNear:t,perspectiveFar:r,onGetComp:o}=e;const n=Pr((e=>{e.createPerspective(e)}));return s(K,{caption:"Perspective",style:Nr,childrenStyle:Ir,children:[s(Ur,{labelBy:"Near:",inputId:"pNear",value:t,propKey:"perspectiveNear",styleLabel:Br,onGetComp:o,fnAfterSet:n}),s(Ur,{labelBy:"Far:",inputId:"pFar",value:r,styleLabel:Br,propKey:"perspectiveFar",onGetComp:o,fnAfterSet:n})]})},$r=e=>{let{zMatrixTranslate:t,onGetComp:r}=e;const o=Pr((e=>{e.configMatrix(e)}));return s(K,{caption:"Translate",style:Nr,childrenStyle:Ir,children:s(Ur,{labelBy:"Z:",inputId:"tZ",value:t,propKey:"zMatrixTranslate",onGetComp:r,fnAfterSet:o})})},Zr=e=>{let{rX:t,rY:r,rZ:o,onGetComp:n}=e;return s(K,{isClose:!0,caption:"Rotate",style:Nr,children:[s(Ur,{labelBy:"X:",inputId:"rX",value:t,propKey:"rX",onGetComp:n}),s(Ur,{labelBy:"Y:",inputId:"rY",value:r,propKey:"rY",onGetComp:n}),s(Ur,{labelBy:"Z:",inputId:"rZ",value:o,propKey:"rZ",onGetComp:n})]})},Vr=e=>{let{onGetComp:t,valuesForInit:r}=e;const{perspectiveNear:o,perspectiveFar:n,zMatrixTranslate:i,rX:a,rY:l,rZ:c}=r;return s("div",{style:Sr,children:[s("span",{style:Tr,children:"Config WebGL Topic"}),s(Rr,{onGetComp:t}),s(Wr,{perspectiveNear:o,perspectiveFar:n,onGetComp:t}),s($r,{zMatrixTranslate:i,onGetComp:t}),s(Zr,{rX:a,rY:l,rZ:c,onGetComp:t})]})},Kr="container",Xr=`${Kr}__content`,Hr=()=>{const e=k(),t=(0,o.sO)(null),r=(0,o.Ye)((()=>()=>t.current),[]),{Comp:n,props:i}=(0,o.Ye)((()=>Ke(e)),[e]),{valuesForInit:l}=i;return s("div",{className:Kr,role:"document",children:s("main",{className:Xr,children:s("div",{className:"row",children:[(0,a.az)(n,{...i,ref:t,key:i.key}),s(Vr,{valuesForInit:l,onGetComp:r})]})})})},jr=e=>{let{store:t}=e;return s("div",{className:"app",role:"application",children:[s(v,{}),s(le,{store:t}),s(Hr,{store:t})]})};(0,o.sY)(s(jr,{}),document.getElementById("app"))}},e=>{var t;t=891,e(e.s=t)}]);