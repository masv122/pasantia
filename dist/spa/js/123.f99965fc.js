"use strict";(self["webpackChunkproyecto_de_pasantia"]=self["webpackChunkproyecto_de_pasantia"]||[]).push([[123],{4212:(e,a,l)=>{l.r(a),l.d(a,{default:()=>I});var o=l(9835),r=l(6970),t=l(1957);const i={class:"q-pa-md"},s=(0,o._)("div",{class:"text-h5"},"Modificar perfil",-1),n=(0,o.Uk)("Desliza hacia abajo para cambiar la contraseña");function u(e,a,l,u,d,m){const c=(0,o.up)("q-radio"),p=(0,o.up)("q-icon"),b=(0,o.up)("q-input"),f=(0,o.up)("q-btn"),v=(0,o.up)("q-card-actions"),w=(0,o.up)("q-separator"),g=(0,o.up)("q-item-label"),W=(0,o.up)("q-item-section"),y=(0,o.up)("q-item"),V=(0,o.up)("q-list"),_=(0,o.up)("q-card"),C=(0,o.up)("q-table"),h=(0,o.up)("q-avatar"),q=(0,o.up)("q-slide-item"),k=(0,o.up)("q-form"),Z=(0,o.up)("q-dialog");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(C,{grid:"","grid-header":"",title:"Usuarios",rows:u.usuarios,columns:u.columns,"row-key":"name","hide-header":""},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(c,{modelValue:u.tipo,"onUpdate:modelValue":a[0]||(a[0]=e=>u.tipo=e),onClick:u.cargarData,val:0,label:"Trabajadores"},null,8,["modelValue","onClick"]),(0,o.Wm)(c,{modelValue:u.tipo,"onUpdate:modelValue":a[1]||(a[1]=e=>u.tipo=e),onClick:u.cargarData,val:1,label:"Administradores"},null,8,["modelValue","onClick"]),(0,o.Wm)(b,{borderless:"",dense:"",debounce:"300",placeholder:"Buscar"},{append:(0,o.w5)((()=>[(0,o.Wm)(p,{name:"search"})])),_:1})])),item:(0,o.w5)((e=>[(0,o._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,r.j5)(e.selected?"transform: scale(0.95);":"")},[(0,o.Wm)(_,{class:(0,r.C_)(e.selected?"bg-grey-2":"")},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{flat:"",color:"primary",size:"sm",rounded:"",icon:"edit",onClick:a=>{u.cargarPerfil(e.row),u.modoEditar=!0}},null,8,["onClick"])])),_:2},1024),(0,o.Wm)(w),(0,o.Wm)(V,{dense:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.cols,(e=>((0,o.wg)(),(0,o.j4)(y,{key:e.name},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.label),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(W,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.value),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["rows","columns"]),(0,o.Wm)(Z,{modelValue:u.modoEditar,"onUpdate:modelValue":a[8]||(a[8]=e=>u.modoEditar=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"my-card q-pa-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{onSubmit:(0,t.iM)(e.onSubmit,["prevent","stop"]),onReset:(0,t.iM)(e.onReset,["prevent","stop"]),class:"q-gutter-md"},{default:(0,o.w5)((()=>[s,(0,o.Wm)(w,{inset:""}),(0,o.Wm)(b,{modelValue:u.correo,"onUpdate:modelValue":a[2]||(a[2]=e=>u.correo=e),label:"Correo",ref:"refCorreo",filled:"","lazy-rules":"",type:"email",rules:[e=>e&&e.length>0||"Porfavor ingrese el correo"],hint:"Email"},null,8,["modelValue","rules"]),(0,o.Wm)(b,{filled:"",modelValue:u.nombre,"onUpdate:modelValue":a[3]||(a[3]=e=>u.nombre=e),ref:"refNombre",label:"Nombre completo *",hint:"Nombre y apellido","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor ingrese el nombre y apellido"]},null,8,["modelValue","rules"]),(0,o.Wm)(V,{bordered:"",separator:""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{"top-color":"transparent"},{top:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:u.contraseña,"onUpdate:modelValue":a[5]||(a[5]=e=>u.contraseña=e),filled:"","lazy-rules":"",ref:"refContraseña",label:"Contraseña *",type:u.esVisible?"password":"text",hint:"Ingrese la contraseña",rules:[e=>e&&e.length>0||"Porfavor ingrese una contraseña"]},{append:(0,o.w5)((()=>[(0,o.Wm)(p,{name:u.esVisible?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[4]||(a[4]=e=>u.esVisible=!u.esVisible)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,o.Wm)(b,{modelValue:u.reContraseña,"onUpdate:modelValue":a[7]||(a[7]=e=>u.reContraseña=e),filled:"",ref:"refReContraseña",error:!u.validarContraseña,"lazy-rules":"",label:"Repita la Contraseña *",type:u.esVisible?"password":"text",hint:"Debe coincidir con la contraseña",rules:[e=>e&&e.length>0||"Porfavor repita la contraseña"]},{append:(0,o.w5)((()=>[(0,o.Wm)(p,{name:u.esVisible?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[6]||(a[6]=e=>u.esVisible=!u.esVisible)},null,8,["name"])])),_:1},8,["modelValue","error","type","rules"])])),default:(0,o.w5)((()=>[(0,o.Wm)(y,{style:{height:"150px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"primary","text-color":"white",icon:"password"})])),_:1}),(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[n])),_:1})])),_:1})])),_:1})])),_:1}),(0,o._)("div",null,[(0,o.Wm)(f,{label:"guardar",type:"submit",color:"positive",icon:"save"}),(0,o.Wm)(f,{label:"cancelar",type:"reset",color:"negative",flat:"",icon:"cancel",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1},8,["modelValue"])])}var d=l(499),m=l(3477),c=l(9876);const p=[{name:"correo",label:"correo",field:"correo"},{name:"nombre",label:"nombre",field:"nombre"}],b={name:"GestionDeUsuarios",setup(){const e=(0,d.qj)([]),a=(0,d.iH)(null),l=(0,d.iH)(null),r=(0,d.iH)(null),t=(0,d.iH)(null),i=(0,d.iH)(1),s=(0,d.iH)(null),n=(0,d.iH)(null),u=(0,d.iH)(!0),b=(0,d.iH)(null),f=(0,d.iH)(null),v=(0,d.iH)(null),w=(0,o.Fl)((()=>l.value===r.value)),g=(0,d.iH)(null),W=(0,d.iH)(0),y=(0,m.N8)();(0,o.bv)((()=>{V()}));const V=()=>{e.splice(0,e.length);const a=(0,m.iH)(y,"usuarios/"+(0===W.value?"trabajadores":"admis"));(0,m.jM)(a,(a=>{a.forEach((a=>{var l=a.val();l.uid=a.key,e.push(l)}))}),{onlyOnce:!0})},_=e=>{const l=(0,c.v0)(),o=l.currentUser;console.log(o),a.value=e.nombre,t.value=e.correo};return{columns:p,tipo:W,nombre:a,contraseña:l,reContraseña:r,correo:t,tipoDeCuenta:i,refUsuario:s,refNombre:n,refContraseña:b,refReContraseña:f,refCorreo:g,refTipoDeCuenta:v,validarContraseña:w,esVisible:u,usuarios:e,cargarData:V,cargarPerfil:_,modoEditar:(0,d.iH)(!1)}}};var f=l(1639),v=l(5792),w=l(1480),g=l(6611),W=l(2857),y=l(4458),V=l(1821),_=l(4455),C=l(926),h=l(3246),q=l(490),k=l(1233),Z=l(3115),H=l(2074),Q=l(8326),U=l(9254),D=l(1357),z=l(9984),j=l.n(z);const x=(0,f.Z)(b,[["render",u]]),I=x;j()(b,"components",{QTable:v.Z,QRadio:w.Z,QInput:g.Z,QIcon:W.Z,QCard:y.Z,QCardActions:V.Z,QBtn:_.Z,QSeparator:C.Z,QList:h.Z,QItem:q.Z,QItemSection:k.Z,QItemLabel:Z.Z,QDialog:H.Z,QForm:Q.Z,QSlideItem:U.Z,QAvatar:D.Z})}}]);