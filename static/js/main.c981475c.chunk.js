(this["webpackJsonpvilisov-bbd"]=this["webpackJsonpvilisov-bbd"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/app-store.d388a3f2.png"},19:function(e,n,t){e.exports=t.p+"static/media/google-play.ef5c7ffd.png"},25:function(e,n,t){e.exports=t.p+"static/media/Astronaut.ac9701ba.glb"},26:function(e,n,t){e.exports=t.p+"static/media/VoxelGuy.3119f9c6.glb"},27:function(e,n,t){e.exports=t.p+"static/media/Woman.c9ed6341.glb"},28:function(e,n,t){e.exports=t.p+"static/media/footstep0.81acdc76.mp3"},29:function(e,n,t){e.exports=t.p+"static/media/footstep1.2b680b02.mp3"},30:function(e,n,t){e.exports=t.p+"static/media/tree.46613934.glb"},31:function(e,n,t){e.exports=t.p+"static/media/blackgrid.3d7d5793.jpg"},32:function(e,n,t){e.exports=t.p+"static/media/background.3c316576.mp3"},34:function(e,n,t){e.exports=t.p+"static/media/coin.e8a0d624.glb"},37:function(e,n,t){e.exports=t(52)},51:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),o=t(20),i=t.n(o),c=t(21),s=t.n(c),l=t(1),u=t(5),d=t(3),m=t(4),p=t(22),f=t(14),h=t(0);window.THREE=h;var v=h,g=t(23),b=t(13),w=function e(n){Object(l.a)(this,e),this.animate=function(e){},this.dispose=function(){},this.props=n},E={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*Math.pow(e,2):(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},easeIn:function(e,n){return Math.pow(e,n)},easeOut:function(e,n){return 1-E.easeIn(1-e,n)},easeInOut:function(e,n){return e<.5?E.easeIn(2*e,n)/2:1-E.easeIn(2*(1-e),n)/2},easeIn2:function(e){return E.easeIn(e,1.5)},easeOut2:function(e){return E.easeOut(e,1.5)},easeInOut2:function(e){return E.easeInOut(e,1.5)}},M=E,y=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).animateTransitions=function(){var e=[];a.transitions.forEach((function(n){if(n.currentFrame>=n.numberOfFrames)e.push(n);else{var t=n.currentFrame/n.numberOfFrames,a=M[n.timingFuntion]||function(e){return e};n.variable.copy(n.initialValue.clone().lerp(n.value,a(t))),n.currentFrame++}})),e.forEach((function(e){e.onComplete&&e.onComplete(),a.unregisterTransition(e.id)}))},a.registerTransition=function(e){return a.transitions.push({id:a.currentId=(a.currentId+1)%Number.MAX_SAFE_INTEGER,variable:e.variable,value:e.value.clone(),initialValue:e.variable.clone(),numberOfFrames:e.numberOfFrames||10,currentFrame:0,timingFuntion:e.timingFuntion||"none",onComplete:e.onComplete||function(){}}),a.currentId},a.unregisterTransition=function(e){var n=a.transitions.map((function(e){return e.id})).indexOf(e);-1!==n&&a.transitions.splice(n,1)},a.unregisterAllTransitions=function(){return a.transitions.length=0},a.noActiveTransitions=function(){return 0===a.transitions.length},a.transitions=[],a.currentId=0,a}return t}(w),I={renderer:void 0,camera:void 0,scene:new v.Scene,composer:void 0,controls:void 0,clock:new v.Clock,frameNumber:0,units:{},unitsToggled:!1},x=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).init=function(e){var n=e.clientWidth,t=e.clientHeight,r=n>1200;a.scene.renderer=new v.WebGLRenderer({antialias:!r,alpha:!0}),a.scene.renderer.setClearColor(0,0),a.scene.renderer.setSize(n,t),a.scene.renderer.setPixelRatio(window.devicePixelRatio),a.scene.renderer.shadowMap.enabled=!0,e.appendChild(a.scene.renderer.domElement),a.scene.camera=new v.PerspectiveCamera(75,n/t,.1,1e3),a.scene.controls=new g.a(a.scene.camera,a.scene.renderer.domElement),a.scene.controls.enabled=!1,a.scene.camera.position.z=-15,a.scene.controls.update(),a.scene.composer=new b.b(a.scene.renderer),a.scene.composer.addPass(new b.d(a.scene.scene,a.scene.camera)),a.initUnits(),a.frameId||(a.frameId=requestAnimationFrame(a.animate))},a.dispose=function(){a.disposeUnits(),cancelAnimationFrame(a.frameId)},a.resize=function(e,n){if(a.scene.renderer&&a.scene.camera){a.scene.camera.aspect=e/n,a.scene.camera.updateProjectionMatrix(),a.scene.renderer.setSize(e,n),a.scene.renderer.setPixelRatio(window.devicePixelRatio)}},a.animate=function(){a.scene.frameNumber=(a.scene.frameNumber+1)%5e3;var e=a.scene,n=e.composer,t=e.controls,r=e.units,o=e.clock;Object.keys(r).forEach((function(e){return r[e].animate(Object(f.a)(Object(f.a)({THREE:v},a.scene),{},{input:a.scene.units.Controls,maxFrameNumber:5e3,react:a.props.react}))})),t.update(),n.render(o.getDelta()),a.frameId=window.requestAnimationFrame(a.animate)},a.initUnits=function(){var e=Object(f.a)(Object(f.a)({THREE:v},a.scene),{},{input:a.scene.units.Controls,maxFrameNumber:5e3,react:a.props.react});Object.keys(a.props.units).forEach((function(n){var t=a.props.units[n];!t.disabled^a.scene.unitsToggled&&(a.scene.units[n]=new t.unit(e),a.scene.units[n].init&&a.scene.units[n].init())}))},a.disposeUnits=function(){var e=a.scene,n=e.scene,t=e.units;for(Object.keys(t).forEach((function(e){return t[e].dispose()}));n.children.length>0;)n.remove(n.children[0])},a.toggleUnits=function(){a.disposeUnits(),a.scene.unitsToggled=!a.scene.unitsToggled,a.initUnits()},a.scene=I,a}return t}(y),O=t(8),j=t.n(O),_=t(10),S=function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}},C=t(24),k=function(){var e=Object(_.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){return(new C.a).load(n,(function(n){return e(n)}),(function(e){return console.log(e.loaded/e.total*100+"% loaded")}),(function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),N=t(25),T=t.n(N),F=t(26),R=t.n(F),V=t(27),A=t.n(V),P=t(28),W=t.n(P),z=t(29),H=t.n(z),L=function(){return S()?.1:2},U=new v.Vector3(L(),0,0),B=new v.Vector3(-300,0,-300),D=new v.Vector3(300,300,300),Q=new v.Vector3(1,0,0),Y=new v.Vector3(0,1,0),X=new v.Vector3(0,0,1),G=new v.Vector3(0,0,0),J=new v.Vector3(0,0,0),K=new v.Vector3(0,0,0),q=new v.Vector3(0,0,0),$=0,Z=new v.Vector2(0,0),ee=new v.Vector3,ne=new v.Vector3,te=new v.Quaternion,ae=new v.Vector3,re=[{file:R.a,scale:5,animationScale:5},{file:T.a,scale:1.25,animationScale:4.2},{file:A.a,scale:3,animationScale:3.8}],oe=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).loadModel=Object(_.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=re[Math.round(Math.random()*(re.length-1))],e.next=3,k(n.file);case 3:a.gtlf=e.sent,a.model=a.gtlf.scene,a.mixer=new v.AnimationMixer(a.gtlf.scene),a.action=a.mixer.clipAction(a.gtlf.animations[0]),a.action.play(),a.model.position.set(L(),0,0),a.model.scale.set(n.scale,n.scale,n.scale),a.props.scene.add(a.model);case 11:case"end":return e.stop()}}),e)}))),a.startStepsSounds=function(){var e=Math.round(1250/a.mixer.timeScale);a.footstep0Interval||(a.footstep0.currentTime=0,a.footstep0.play(),a.footstep0Interval=setInterval((function(){a.footstep0.currentTime=0,a.footstep0.play()}),e)),a.footstep1Interval||a.footstep1Timeout||(a.footstep1Timeout=setTimeout((function(){a.footstep1.currentTime=0,a.footstep1.play(),a.footstep1Interval=setInterval((function(){a.footstep1.currentTime=0,a.footstep1.play()}),e)}),Math.round(e/2)))},a.stopStepsSounds=function(){a.footstep0Interval&&(clearInterval(a.footstep0Interval),a.footstep0Interval=void 0),a.footstep1Interval&&(clearInterval(a.footstep1Interval),a.footstep1Interval=void 0),a.footstep1Timeout&&(clearTimeout(a.footstep1Timeout),a.footstep1Timeout=void 0)},a.animate=function(e){var n,t;if(a.model){a.firstFlag&&(a.firstFlag=!1,a.mixer.timeScale*=.1*e.input.moveSpeed),$+=e.input.move.z>0?e.input.move.angleTo(X)/150*Math.sign(e.input.move.x):(Math.PI-e.input.move.angleTo(X))/150*Math.sign(e.input.move.x),S()?Z.set($,Math.PI/16):Z.set(e.input.mouse.alphaX*Math.PI*1.5+$,e.input.mouse.alphaY*Math.PI/12),ee.copy(e.input.move).applyAxisAngle(Y,Z.x),U.set(L(),0,0).applyAxisAngle(Y,Z.x),G.copy(a.model.position).add(ee),a.jumping&&G.y<=0&&(a.jumping=!1),!a.jumping&&e.input.space&&(a.jumping=!0,a.jumpingForce.set(ee.x/1.6,1.1,ee.z/1.6)),a.jumping&&(G.copy(a.model.position).add(a.jumpingForce),a.jumpingForce.setY(a.jumpingForce.y-9.8*.002)),G.clamp(B,D),J.copy(G);var r=null===(n=e.units)||void 0===n||null===(t=n.Landscape)||void 0===t?void 0:t.trees;if(q.set(0,0,0),r)for(var o=0;o<r.length;o++)K.copy(J).sub(r[o].position),K.length()<1.35*r[o].scale&&(K.normalize().multiplyScalar(.5),q.add(K));G.add(q),a.model.position.copy(G),e.input.move.length()>.01&&!a.jumping&&a.mixer.update(e.clock.getDelta()),e.input.move.length()>0&&a.model.quaternion.slerp(te.setFromUnitVectors(X,ee.normalize()),.135),ne=new v.Vector3(0,0,-15).applyAxisAngle(Q,Z.y).applyAxisAngle(Y,Z.x),e.controls.target.copy(a.model.position).sub(U),e.controls.target.setY(e.controls.target.y+(S()?7:5)),e.camera.position.copy(ae.copy(a.props.controls.target).add(ne))}},a.dispose=function(){},a.loadModel(),a.firstFlag=!0,a.footstep0=new Audio(W.a),a.footstep1=new Audio(H.a),a.footstep0Interval=void 0,a.footstep1Interval=void 0,a.jumping=!1,a.jumpingForce=new v.Vector3(0,0,0),a}return t}(w),ie=t(16),ce=t.n(ie),se=t(11),le=t.n(se),ue=function(){var e=Object(_.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){return(new v.TextureLoader).load(n,(function(n){return e(n)}),(function(e){}),(function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),de=t(30),me=t.n(de),pe=t(31),fe=t.n(pe),he=t(32),ve=t.n(he),ge=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;Object(l.a)(this,t),(a=n.call(this,e)).loadModel=Object(_.a)(j.a.mark((function e(){var n,t,r,o,i,c,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(fe.a);case 2:return(n=e.sent).wrapS=v.RepeatWrapping,n.wrapT=v.RepeatWrapping,n.repeat.set(27,27),a.plane=new v.Mesh(new v.PlaneGeometry(600,600,1,1),new v.MeshBasicMaterial({map:n,side:v.DoubleSide})),a.plane.rotateX(Math.PI/2),a.props.scene.add(a.plane),e.next=11,k(me.a);case 11:for(t=e.sent.scene,r=new v.Object3D,o=new v.Vector3,a.treeInstance=new v.InstancedMesh(t.children[0].geometry,t.children[0].material,75),a.treeInstance.instanceMatrix.setUsage(v.DynamicDrawUsage),a.props.scene.add(a.treeInstance),a.trees=[],i=0;i<75;i++)c=Math.max(Math.random(),.1)*Math.sign(Math.random()-.5),s=Math.max(Math.random(),.1)*Math.sign(Math.random()-.5),o.set(300*c,37.5*Math.random(),300*s),l=10*(1+Math.random()),r.scale.set(l,l,l),r.position.copy(o),a.trees.push({position:(new v.Vector3).copy(r.position),scale:l}),r.rotation.y=(-.5+Math.random())*Math.PI/2,r.rotation.x=(.5+Math.random())*Math.PI/2,r.updateMatrix(),a.treeInstance.setMatrixAt(i,r.matrix);a.treeInstance.instanceMatrix.needsUpdate=!0;case 20:case"end":return e.stop()}}),e)}))),a.addSoundButton=function(){document.body.insertAdjacentHTML("beforeend",ce.a.renderToString(a.renderSoundButton())),window.addEventListener("click",(function(e){"sound-alert"===e.target.id&&a.hideSoundButton()}))},a.hideSoundButton=function(){console.log("a");var e=document.getElementById("sound-alert");document.body.removeChild(e),a.audio.play()},a.renderSoundButton=function(){return r.a.createElement("div",{id:"sound-alert",className:"sound-alert"},"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0432\u0443\u043a")},a.animate=function(e){},a.dispose=function(){},a.audio=new Audio(ve.a),a.audio.addEventListener("ended",(function(){a.audio.currentTime=0,a.audio.play()}));return a.loadModel(),a.addSoundButton(),a}return t}(w),be=t(33),we=t.n(be),Ee=t(34),Me=t.n(Ee),ye=new v.Vector3(12,12,12),Ie=new v.Vector3(.1,.1,.1),xe=new v.Object3D,Oe=new v.Vector3,je=function(){return new v.Vector3(2*(Math.random()-.5)*300*.7,75,2*(Math.random()-.5)*300*.7)},_e=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).loadModel=Object(_.a)(j.a.mark((function e(){var n,t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(Me.a);case 2:for(n=e.sent.scene,a.coinInstance=new v.InstancedMesh(n.children[0].geometry,n.children[0].material,300),a.coinInstance.instanceMatrix.setUsage(v.DynamicDrawUsage),a.props.scene.add(a.coinInstance),t=Math.floor(a.coins.length),r=0;r<t;r++)a.emmitCoin(a.coins[r]);setTimeout((function(){for(var e=t;e<a.coins.length;e++)a.emmitCoin(a.coins[e])}),3e3);case 9:case"end":return e.stop()}}),e)}))),a.animate=function(e){a.coinInstance&&e.units.Character.model&&(a.animateTransitions(),Oe.copy(e.units.Character.model.position).setY(e.units.Character.model.position.y+3),a.coins.forEach((function(n){if(n.position.distanceTo(Oe)<5){var t=a.sprites[Math.round(Math.random()*(a.sprites.length-1))];t.position.copy(Oe),t.position.setY(t.position.y+4),a.registerTransition({variable:t.position,value:new v.Vector3(t.position.x,t.position.y+3,t.position.z),numberOfFrames:25,timingFuntion:"easeOutQuad",onComplete:function(){return t.position.setY(600)}}),a.emmitCoin(n),e.react.addCoin()}switch(xe.position.copy(n.position),xe.scale.copy(n.scale),n.index%3){case 0:xe.rotation.x=(1e3*n.index+100*e.frameNumber)/e.maxFrameNumber*Math.PI;break;case 1:xe.rotation.y=(1e3*n.index+100*e.frameNumber)/e.maxFrameNumber*Math.PI;break;case 2:xe.rotation.z=(1e3*n.index+100*e.frameNumber)/e.maxFrameNumber*Math.PI}xe.updateMatrix(),a.coinInstance.setMatrixAt(n.index,xe.matrix)})),a.coinInstance.instanceMatrix.needsUpdate=!0)},a.emmitCoin=function(e){e.position.copy(je()),e.scale.copy(ye),a.unregisterTransition(e.transitionId),e.transitionId=a.registerTransition({variable:e.position,value:(new v.Vector3).copy(e.position).setY(1),numberOfFrames:Math.round(500*(.25+Math.random())),onComplete:function(){e.transitionId=a.registerTransition({variable:e.scale,value:Ie,numberOfFrames:150,timingFuntion:"easeInQuad",onComplete:function(){return a.emmitCoin(e)}})}}),xe.position.copy(e.position),xe.scale.copy(e.scale),xe.updateMatrix(),a.coinInstance.setMatrixAt(e.index,xe.matrix),a.coinInstance.instanceMatrix.needsUpdate=!0},a.sprites=["\ud83c\udf05","\u2728","\u2764\ufe0f","\ud83d\udc8b\ud83d\udc38","\ud83e\udde0\ud83d\udc4c\ud83c\udffb","\ud83d\udef9\ud83d\udc59","\ud83d\udcbb","\ud83c\uddee\ud83c\uddf1","\ud83d\udc9c\ud83c\udf19","\ud83c\uddf7\ud83c\uddfa\u2b06\ufe0f","\ud83e\udd8a\ud83d\udecf","\ud83d\udd1e","\ud83e\udd6d","\ud83c\udff3\ufe0f\u200d\ud83c\udf08","\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\ud83d\udcd5","\ud83c\udfa8\ud83d\ude45\ud83c\udffb\u200d\u2640\ufe0f","\ud83d\ude0e\ud83d\udc6e\ud83c\udffe\u200d\u2642\ufe0f","\ud83c\udfa4\ud83d\udca9","\ud83e\udd56","\ud83d\udc51","\ud83e\uddec\ud83c\udfc6","\ud83d\udd79","\ud83d\udca1","\u270a\ud83c\udffe\ud83d\udd25","\ud83e\udda0\ud83c\udfe1","\ud83d\udc1e\ud83e\udddd\ud83c\udffc\u200d\u2640","\ud83c\udfad\ud83d\udea7","\ud83d\udc16\ud83d\udc43\ud83c\udffb","\ud83d\udc0d\ud83d\udeb8","\u23f3\ud83d\ude2c"].map((function(n){var t=new we.a({material:{color:16777215},redrawInterval:!1,textSize:3,minFontSize:128,maxFontSize:128,texture:{text:n}});return t.position.set(0,600,0),e.scene.add(t),t})),a.coins=Array.from({length:300},(function(e,n){return{index:n,transitionId:void 0,position:je(),scale:ye.clone()}})),a.loadModel(),a}return t}(y),Se=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;Object(l.a)(this,t),(a=n.call(this,e)).animate=function(e){var n=10*e.frameNumber/e.maxFrameNumber*Math.PI*2,t=n+2*Math.PI/3,r=t+2*Math.PI/3;a.light2.position.set(5*Math.cos(n),5,5*Math.sin(n)),a.light3.position.set(5*Math.cos(t),5,5*Math.sin(t)),a.light4.position.set(5*Math.cos(r),5,5*Math.sin(r))},a.dispose=function(){};var r=e.scene,o=e.THREE;return a.light2=new o.DirectionalLight(15619566,2.95),a.light2.position.set(5,5,0),r.add(a.light2),a.light3=new o.DirectionalLight(7846894,2.95),a.light3.position.set(5*Math.cos(2*Math.PI/3),5,5*Math.sin(2*Math.PI/3)),r.add(a.light3),a.light4=new o.DirectionalLight(35071,2.95),a.light4.position.set(5*Math.cos(4*Math.PI/3),3,5*Math.sin(4*Math.PI/3)),r.add(a.light4),a}return t}(w),Ce=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;Object(l.a)(this,t),(a=n.call(this,e)).animate=function(e){},a.dispose=function(){};var r=e.scene,o=e.THREE;return a.fog=new o.Fog(4473924,35,155),r.fog=a.fog,a}return t}(w),ke=t(35),Ne=t.n(ke),Te=function(){return navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)},Fe=function(){return Te()&&window.matchMedia("(orientation: landscape)").matches&&window.innerWidth<=1366&&window.innerHeight<=1024&&window.innerWidth>window.innerHeight},Re=new v.Vector3(0,1,0),Ve={mouse:{alphaX:0,alphaY:0},space:!1,moveSpeed:.55/.06,move:new v.Vector3,moveFlags:{up:[{code:87,pressed:!1},{code:38,pressed:!1}],down:[{code:83,pressed:!1},{code:40,pressed:!1}],left:[{code:68,pressed:!1},{code:39,pressed:!1}],right:[{code:65,pressed:!1},{code:37,pressed:!1}]}},Ae=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).addJoystick=function(){var e={zone:document.getElementById("zone-joystick"),mode:"static",position:{x:Fe()?Math.round(window.innerWidth<667?window.innerWidth/4:window.innerWidth/6):Math.round(window.innerWidth<667?window.innerWidth/4*3:window.innerWidth/6*5),y:Fe()?Math.round(window.innerHeight/5*4):Math.round(window.innerHeight/7*6)},size:window.innerWidth<768?80:100};a.joystickManager=Ne.a.create(e),a.joystickManager[0].on("move",(function(e,n){a.move.set(-.55,0,0).applyAxisAngle(Re,n.angle.radian)})),a.joystickManager[0].on("end",(function(e){a.move.set(0,0,0)}))},a.addSpaceButton=function(){document.body.insertAdjacentHTML("beforeend",ce.a.renderToString(r.a.createElement("div",{id:"space-button",className:"space-button"},"space"))),document.getElementById("space-button").addEventListener("touchstart",(function(e){a.space=!0})),document.getElementById("space-button").addEventListener("touchend",(function(e){a.space=!1}))},a.init=function(){Te()&&(a.addJoystick(),a.addSpaceButton())},a.animate=function(e){var n=function(e){return e.map((function(e){return e.pressed})).reduce((function(e,n){return e||n}))?1:0};S()||a.move.set(n(a.moveFlags.right)-n(a.moveFlags.left),0,n(a.moveFlags.up)-n(a.moveFlags.down)).normalize().multiplyScalar(.55)},a.handleMouseMove=function(e){e.pageX&&e.pageY?(a.mouse.alphaX=-le()(e.pageX/window.innerWidth-.5,-.5,.5),a.mouse.alphaY=le()(e.pageY/window.innerHeight-.5,-.5,.5)):console.log("no mouse found")},a.handleKeyDown=function(e){Object.keys(a.moveFlags).forEach((function(n){return a.moveFlags[n].forEach((function(n){return n.pressed|=n.code===e.keyCode}))})),32===e.keyCode&&(a.space=!0)},a.handleKeyUp=function(e){Object.keys(a.moveFlags).forEach((function(n){return a.moveFlags[n].forEach((function(n){return n.pressed&=!(n.code===e.keyCode)}))})),32===e.keyCode&&(a.space=!1)},a.dispose=function(){S()||window.removeEventListener("mousemove",a.handleMouseMove,!1)},Object.keys(Ve).forEach((function(e){return a[e]=Ve[e]})),S()||(window.addEventListener("mousemove",a.handleMouseMove,!1),window.addEventListener("keydown",a.handleKeyDown,!1),window.addEventListener("keyup",a.handleKeyUp,!1)),window.addEventListener("resize",(function(){a.joystickManager&&a.joystickManager.destroy&&a.joystickManager.destroy(),a.addJoystick()})),window.addEventListener("orientationchange",(function(){a.joystickManager&&a.joystickManager.destroy&&a.joystickManager.destroy(),a.addJoystick()})),a}return t}(w),Pe=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;Object(l.a)(this,t),(a=n.call(this,e)).animate=function(e){},a.dispose=function(){};var r=e.camera,o=e.composer;return a.bloom=new b.a,a.bloom.intensity=1,a.pass=new b.c(r,a.bloom),o.addPass(a.pass),a}return t}(w),We=function(e){return r.a.createElement("div",{className:"coins-collected"},e.number)},ze=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).componentWillUnmount=function(){a.scene.dispose()},a.render=function(){return r.a.createElement("div",{className:"Viewer",ref:a.viewerRef},r.a.createElement(We,{number:a.state.coinsCollected}),r.a.createElement("div",{id:"zone-joystick"}))},a.state={coinsCollected:0},a.viewerRef=new r.a.createRef,a.scene=new x({react:{addCoin:function(){return a.setState({coinsCollected:a.state.coinsCollected+1})}},units:{Character:{unit:oe,disabled:!1},Landscape:{unit:ge,disabled:!1},Coins:{unit:_e,disabled:!1},Lights:{unit:Se,disabled:!1},Fog:{unit:Ce,disabled:!1},Controls:{unit:Ae,disabled:!1},BloomPostprocessing:{unit:Pe,disabled:!1}}}),a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.resizeObs=new p.a(this.resize.bind(this)).observe(this.viewerRef.current),this.scene.init(this.viewerRef.current)}},{key:"resize",value:function(){var e=this.viewerRef&&this.viewerRef.current;e&&this.scene.resize(e.clientWidth,e.clientHeight)}}]),t}(a.Component),He=t(36),Le=t.n(He),Ue=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).componentDidMount=function(){return a.changeWordInterval=setInterval((function(){return a.changeWord()}),1500)},a.componentWillUnmount=function(){return clearInterval(a.changeWordInterval)},a.changeWord=function(){a.setState({shrinked:!0}),setTimeout((function(){return a.setState({shrinked:!1,currentIndex:a.modulus(a.state.currentIndex+1)})}),300)},a.modulus=function(e){return(10*a.props.words.length+e)%a.props.words.length},a.render=function(){return r.a.createElement("div",{className:"word-changer"},r.a.createElement("div",{className:"word-changer__container "+(a.state.shrinked&&"word-changer__container--shrinked")},a.props.words.map((function(e,n){var t=a.props.words[a.modulus(a.state.currentIndex-n-2)];return r.a.createElement("div",{className:"item",key:t},t)}))))},a.state={currentIndex:0,shrinked:!1},a}return t}(a.Component),Be=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={showControlsHelper:!0},e.render=function(){return e.state.showControlsHelper&&r.a.createElement("div",{className:"controls-helper"},r.a.createElement("div",{className:"controls-helper__close",onClick:function(){return e.setState({showControlsHelper:!1})}}),r.a.createElement("div",{className:"controls-helper__text controls-helper__text--desktop"},"\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438,",r.a.createElement("br",null),"\u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435 \u043a\u0430\u043c\u0435\u0440\u0443 \u043c\u044b\u0448\u043a\u043e\u0439.",r.a.createElement("br",null),"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0447\u0442\u043e\u0431\u044b",r.a.createElement("br",null),"\u0441\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"),r.a.createElement("div",{className:"controls-helper__text controls-helper__text--mobile"},"\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u0436\u043e\u0439\u0441\u0442\u0438\u043a\u043e\u043c.",r.a.createElement("br",null),"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0447\u0442\u043e\u0431\u044b",r.a.createElement("br",null),"\u0441\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c"))},e}return t}(a.Component),De=t(18),Qe=t.n(De),Ye=t(19),Xe=t.n(Ye),Ge=function(){return r.a.createElement("div",{className:"download-links"},r.a.createElement("div",{className:"download-links__width-container"},r.a.createElement("div",{className:"download-links__width-container__abs-container"},r.a.createElement("img",{src:Qe.a}),r.a.createElement("img",{src:Xe.a}))))},Je=function(e){return r.a.createElement("a",{className:e.className,href:e.to,target:e.newTab?"_blank":"",rel:"noopener noreferrer"},e.children)},Ke=function(e){return e.show&&r.a.createElement("div",{className:"video-modal",onClick:function(){return e.hide()}},r.a.createElement("div",{className:"video-modal__container"},r.a.createElement("div",{className:"video-modal__container__abs-container"},r.a.createElement("iframe",{src:"https://www.youtube.com/embed/9UYSotyGXoM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))},qe=function(e){return r.a.createElement("div",Object.assign({},e,{className:"arrow "+(e.left&&"arrow--left")}),r.a.createElement("span",{className:"arrow__item"}),r.a.createElement("span",{className:"arrow__item arrow__item--segunda"}))},$e=["intro","desc","credits"],Ze=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).componentDidMount=function(){return a.scrollableContainerRef.current.addEventListener("scroll",(function(e){return a.debouncedOnScroll(e)}))},a.componentWillUnmount=function(){return a.scrollableContainerRef.current.removeEventListener("scroll",(function(e){return a.debouncedOnScroll(e)}))},a.onScroll=function(e){var n=-a.scrollableContentRef.current.getBoundingClientRect().top/a.getMaxScroll(),t=parseInt(Math.floor(.999*n*3));t!==a.state.currentSlide&&a.setState({currentSlide:t})},a.debouncedOnScroll=function(e){return Le()(a.onScroll(e),100)},a.getMaxScroll=function(){return a.scrollableContainerRef.current&&a.scrollableContentRef.current?a.scrollableContentRef.current.clientHeight-a.scrollableContainerRef.current.clientHeight:0},a.nextSlide=function(){return a.scrollableContentRef.current.clientHeight/a.scrollableContainerRef.current.clientHeight>2?document.getElementById($e[a.state.currentSlide+1]).scrollIntoView():a.setState({currentSlide:le()(a.state.currentSlide+1,0,3)})},a.prevSlide=function(){return a.scrollableContentRef.current.clientHeight/a.scrollableContainerRef.current.clientHeight>2?document.getElementById($e[a.state.currentSlide-1]).scrollIntoView():a.setState({currentSlide:le()(a.state.currentSlide-1,0,3)})},a.render=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"landing__content landing__content--"+a.state.currentSlide},r.a.createElement("h1",{className:"landing__content__h1"},"SITTING\xa0IN\xa0A",r.a.createElement("br",null),"ROOM.\xa0I\xa0AM."),r.a.createElement("div",{className:"landing__content__description-0"},"\u044d\u0442\u043e \u043d\u0435 ",r.a.createElement(Ue,{words:["\u043a\u0438\u043d\u043e","\u043f\u0435\u0440\u0444\u043e\u0440\u043c\u0430\u043d\u0441","\u0438\u0433\u0440\u0430","\u043f\u043e\u0434\u043a\u0430\u0441\u0442","\u0448\u043e\u0443","\u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c"]}),r.a.createElement("br",null),"\u044d\u0442\u043e \u0432\u0441\u0451 \u0432\u043c\u0435\u0441\u0442\u0435. \u0438 \u0447\u0442\u043e-\u0442\u043e \u0434\u0440\u0443\u0433\u043e\u0435."),r.a.createElement("div",{className:"landing__content__description-1"},"\u0447\u0442\u043e \u0433\u043e\u043b\u043e\u0434\u043d\u0430\u044f \u0441\u043c\u0435\u0440\u0442\u044c \u0431\u0440\u0438\u0442\u0430\u043d\u0446\u0430 \u0432 \u0442\u044f\u0436\u0451\u043b\u043e\u0439 \u0434\u0435\u043f\u0440\u0435\u0441\u0441\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u043c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u043c\u044b \u0440\u0430\u0441\u043f\u043e\u0440\u044f\u0436\u0430\u0435\u043c\u0441\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438 \u0438 \u0431\u0443\u0434\u0435\u043c \u0440\u0430\u0441\u043f\u043e\u0440\u044f\u0436\u0430\u0442\u044c\u0441\u044f \u0438\u043c\u0438 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c? \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0431\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0439 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0434\u043e\u0445\u043e\u0434? \u043a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u0432\u0430\u0448\u0430 \u0436\u0438\u0437\u043d\u044c, \u043f\u043e\u043b\u0443\u0447\u0430\u0439 \u0432\u044b \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u0442\u043e, \u0447\u0442\u043e \u0436\u0438\u0432\u0451\u0442\u0435?"),r.a.createElement("div",{className:"landing__content__description-2"},"\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435: \u0432\u044b \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430 \u0442\u043e, \u0447\u0442\u043e \u0436\u0438\u0432\u0451\u0442\u0435. \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u043b\u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u0447\u0442\u043e \u0443\u0433\u043e\u0434\u043d\u043e \u2014 \u0432\u044b\u043f\u043b\u0430\u0442\u0430 \u0431\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u0438 \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u043a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u0432\u0430\u0448\u0430 \u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0441\u0442\u044c? \u043a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u0436\u0438\u0437\u043d\u044c \u0432\u0430\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0438 \u0441\u043e\u0433\u0440\u0430\u0436\u0434\u0430\u043d, \u043f\u043e\u043b\u0443\u0447\u0430\u0439 \u043e\u043d\u0438 \u0442\u0435 \u0436\u0435 \u0432\u044b\u043f\u043b\u0430\u0442\u044b?",r.a.createElement("br",null),r.a.createElement("br",null),"\u0431\u0435\u0437\u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0439 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0434\u043e\u0445\u043e\u0434 \u2014 \u043e\u0434\u043d\u0430 \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0437\u0430\u043c\u0435\u0442\u043d\u044b\u0445 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0438\u0434\u0435\u0439, \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0431\u0443\u0434\u0443\u0449\u0435\u0435. \u0441\u0435\u0439\u0447\u0430\u0441 \u043e\u043d\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430 \u043a\u0430\u043a \u043d\u0438\u043a\u043e\u0433\u0434\u0430: \u044d\u043f\u043e\u0445\u0430 \u043f\u043e\u0441\u0442\u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u043e\u0432\u0430\u043b\u044c\u043d\u043e\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0435\u0439, \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0430\u044f \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043d\u043e \u0438 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044f \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u044b \u043b\u044e\u0434\u0435\u0439 \u043d\u0435\u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u044b\u043c\u0438.",r.a.createElement("br",null),r.a.createElement("br",null),"\u043c\u044b \u0443\u0437\u043d\u0430\u043b\u0438 \u0432\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043f\u0440\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0434\u043e\u0445\u043e\u0434, \u0438 \u0441\u043e\u0431\u0440\u0430\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u0439 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0411\u0411\u0414 \u043c\u043e\u0433 \u0431\u044b \u0431\u0443\u043a\u0432\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0430\u0441\u0430\u0442\u044c \u0436\u0438\u0437\u043d\u0438. \u043a\u0430\u043a \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u043f\u0438\u043b\u043e\u0442\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430? \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u044e\u0442 \u043b\u0438 \u043b\u044e\u0434\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c? \u043a\u0430\u043a \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0434\u043e\u0445\u043e\u0434 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0430\u0435\u0442 \u0436\u0435\u043d\u0449\u0438\u043d \u0438\u0437 \u0440\u0430\u0431\u0441\u0442\u0432\u0430 \u0438 \u0441\u043f\u0430\u0441\u0430\u0435\u0442 \u043e\u0442 \u0438\u0437\u043d\u0430\u0441\u0438\u043b\u043e\u0432\u0430\u043d\u0438\u0439? \u043a\u0430\u043a \u043e\u043d \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 \u043e\u0442\u043e\u0448\u0435\u043d\u0438\u0439 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430? \u043f\u043e\u0447\u0435\u043c\u0443 \u0441 \u0411\u0414 \u043b\u044e\u0434\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0435\u0431\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e \u043b\u0443\u0447\u0448\u0435? \u0438 \u043f\u0440\u0438 \u0447\u0451\u043c \u0442\u0443\u0442 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0442\u043e\u0440 \u044d\u043b\u0432\u0438\u043d \u043b\u044e\u0441\u044c\u0435? SITTING IN A ROOM. I AM. \u2014 \u044d\u0442\u043e \u0438\u043c\u043c\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043d\u0430 \u0432\u0441\u0435 \u044d\u0442\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b; \u043f\u0440\u044f\u043c\u043e \u0443 \u0432\u0430\u0441 \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0435.",r.a.createElement("br",null),r.a.createElement("br",null),"\u0440\u0435\u043b\u0438\u0437 \u0432 appstore \u0438 google play \u2014 \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u0438\u044e\u043d\u044f."),r.a.createElement("div",{className:"landing__content__credits"},r.a.createElement("span",{className:"green"},"\u0433\u043e\u043b\u043e\u0441\u0430")," \u0441\u0430\u0448\u0430\xa0\u0441\u0442\u0430\u0440\u043e\u0441\u0442\u044c, \u043c\u0430\u0440\u0438\u044f\xa0\u043a\u0443\u0432\u0448\u0438\u043d\u043e\u0432\u0430, \u043a\u0430\u0442\u044f\xa0\u043c\u043e\u043a\u0448\u0430\u043d\u043a\u0438\u043d\u0430, \u0430\u043b\u0435\u043a\u0441\u0435\u0439\xa0\u0434\u043e\u0440\u043e\u043d\u0438\u043d, \u043e\u043a\u0441\u0430\u043d\u0430\xa0\u043f\u043e\u0433\u0440\u0435\u0431\u043d\u044f\u043a, \u0441\u043b\u0430\u0432\u0430\xa0\u043f\u0435\u0440\u043e\u0432\u0441\u043a\u0438\u0439, \u0430\u0440\u0442\u0451\u043c\xa0\u0442\u043e\u043c\u0438\u043b\u043e\u0432, \u043c\u0430\u0440\u0438\u043d\u0430\xa0\u0433\u0430\u043d\u0430\u0445, \u0434\u043c\u0438\u0442\u0440\u0438\u0439\xa0\u043e\u0442\u044f\u043a\u043e\u0432\u0441\u043a\u0438\u0439",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"green"},"\u0432\u0438\u0434\u0435\u043e")," \u043f\u0430\u0432\u0435\u043b\xa0\u043a\u043d\u044f\u0437\u0435\u0432",r.a.createElement("br",null),r.a.createElement("span",{className:"green"},"\u043b\u044d\u043d\u0434\u0438\u043d\u0433")," \u043b\u0435\u0432\xa0\u0432\u0430\u0441\u0438\u043b\u044c\u0435\u0432",r.a.createElement("br",null),r.a.createElement("span",{className:"green"},"\u0437\u0432\u0443\u043a")," \u043b\u0435\u043e\u043d\u0438\u0434\xa0\u0438\u043c\u0435\u043d\u043d\u044b\u0445",r.a.createElement("br",null),r.a.createElement("span",{className:"green"},"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430")," \u0430\u0440\u0442\u0451\u043c\xa0\u0432\u0430\u0441\u0438\u0447, \u0438\u043b\u044c\u044f\xa0\u0441\u0430\u044f\u043f\u0438\u043d",r.a.createElement("br",null),r.a.createElement("span",{className:"green"},"\u0442\u0435\u043a\u0441\u0442, \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u043d, AR\u2011\u0441\u0446\u0435\u043d\u044b")," \u0432\u0438\u043a\u0442\u043e\u0440\xa0\u0432\u0438\u043b\u0438\u0441\u043e\u0432",r.a.createElement("br",null),r.a.createElement(Ge,null)),r.a.createElement("div",{className:"landing__content__links"},r.a.createElement("div",{className:"landing__content__links__item",onClick:function(){return a.setState({showVideoModal:!0})}},"\u0442\u0440\u0435\u0439\u043b\u0435\u0440"),r.a.createElement(Je,{newTab:!0,to:"https://anchor.fm/apolloniada/episodes/500-ef0226"},r.a.createElement("div",{className:"landing__content__links__item"},"\u043f\u043e\u0434\u043a\u0430\u0441\u0442")))),r.a.createElement("div",{ref:a.scrollableContainerRef,className:"landing__scrollable"},r.a.createElement("div",{ref:a.scrollableContentRef,className:"landing__scrollable__long-part"},$e.map((function(e){return r.a.createElement("div",{className:"anchor",id:e})})))),r.a.createElement(Be,null),a.state.currentSlide>1&&r.a.createElement(qe,{left:!0,onClick:function(){return a.prevSlide()}}),a.state.currentSlide<2&&r.a.createElement(qe,{onClick:function(){return a.nextSlide()}}),r.a.createElement(Ke,{show:a.state.showVideoModal,hide:function(){return a.setState({showVideoModal:!1})}}))},a.state={currentSlide:0,showVideoModal:!1},a.scrollableContainerRef=r.a.createRef(),a.scrollableContentRef=r.a.createRef(),a}return t}(a.Component),en=(t(51),function(){return r.a.createElement(s.a,null,r.a.createElement(ze,null),r.a.createElement(Ze,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(en,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.c981475c.chunk.js.map