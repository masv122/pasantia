"use strict";(self["webpackChunkproyecto_de_pasantia"]=self["webpackChunkproyecto_de_pasantia"]||[]).push([[198],{9198:(e,a,l)=>{l.r(a),l.d(a,{default:()=>W});var o=l(9835),r=l(1957);const s={class:"q-pa-md shadow-1",style:{width:"600px"}},i=(0,o._)("div",{class:"text-h5"},"Complete los datos",-1),t={class:"q-pa-md"},n={class:"q-gutter-sm"};function u(e,a,l,u,m,d){const c=(0,o.up)("q-separator"),p=(0,o.up)("q-input"),v=(0,o.up)("q-icon"),b=(0,o.up)("q-radio"),f=(0,o.up)("q-btn"),C=(0,o.up)("q-form");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(C,{onSubmit:(0,r.iM)(u.onSubmit,["prevent","stop"]),onReset:(0,r.iM)(u.onReset,["prevent","stop"]),class:"q-gutter-md"},{default:(0,o.w5)((()=>[i,(0,o.Wm)(c,{inset:""}),(0,o.Wm)(p,{modelValue:u.correo,"onUpdate:modelValue":a[0]||(a[0]=e=>u.correo=e),label:"Correo",ref:"refCorreo",filled:"","lazy-rules":"",type:"email",rules:[e=>e&&e.length>0||"Porfavor ingrese el correo"],hint:"Email"},null,8,["modelValue","rules"]),(0,o.Wm)(p,{filled:"",modelValue:u.nombre,"onUpdate:modelValue":a[1]||(a[1]=e=>u.nombre=e),ref:"refNombre",label:"Nombre completo *",hint:"Nombre y apellido","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor ingrese el nombre y apellido"]},null,8,["modelValue","rules"]),(0,o.Wm)(p,{modelValue:u.contraseña,"onUpdate:modelValue":a[3]||(a[3]=e=>u.contraseña=e),filled:"","lazy-rules":"",ref:"refContraseña",label:"Contraseña *",type:u.esVisible?"password":"text",hint:"Ingrese la contraseña",rules:[e=>e&&e.length>0||"Porfavor ingrese una contraseña"]},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{name:u.esVisible?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[2]||(a[2]=e=>u.esVisible=!u.esVisible)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,o.Wm)(p,{modelValue:u.reContraseña,"onUpdate:modelValue":a[5]||(a[5]=e=>u.reContraseña=e),filled:"",ref:"refReContraseña",error:!u.validarContraseña,"lazy-rules":"",label:"Repita la Contraseña *",type:u.esVisible?"password":"text",hint:"Debe coincidir con la contraseña",rules:[e=>e&&e.length>0||"Porfavor repita la contraseña"]},{append:(0,o.w5)((()=>[(0,o.Wm)(v,{name:u.esVisible?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[4]||(a[4]=e=>u.esVisible=!u.esVisible)},null,8,["name"])])),_:1},8,["modelValue","error","type","rules"]),(0,o._)("div",t,[(0,o._)("div",n,[(0,o.Wm)(b,{ref:"refTipoDeCuenta",modelValue:u.tipoDeCuenta,"onUpdate:modelValue":a[6]||(a[6]=e=>u.tipoDeCuenta=e),val:1,label:"Usuario"},null,8,["modelValue"]),(0,o.Wm)(b,{ref:"refTipoDeCuenta",modelValue:u.tipoDeCuenta,"onUpdate:modelValue":a[7]||(a[7]=e=>u.tipoDeCuenta=e),val:0,label:"Administrador"},null,8,["modelValue"])])]),(0,o._)("div",null,[(0,o.Wm)(f,{label:"Enviar",type:"submit",color:"primary"}),(0,o.Wm)(f,{label:"Restablecer",type:"reset",color:"negative",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])}var m=l(499),d=l(9302),c=l(8570),p=l(6605);const v={name:"CrearUsuario",setup(){const e=(0,d.Z)(),a=(0,c.N8)(),l=(0,p.v0)(),r=(0,m.iH)(null),s=(0,m.iH)(null),i=(0,m.iH)(null),t=(0,m.iH)(null),n=(0,m.iH)(1),u=(0,m.iH)(null),v=(0,m.iH)(null),b=(0,m.iH)(!0),f=(0,m.iH)(null),C=(0,m.iH)(null),y=(0,m.iH)(null),V=(0,o.Fl)((()=>s.value===i.value)),g=(0,m.iH)(null),h=function(){r.value="",s.value="",i.value="",t.value="",b.value=!0,n.value=1};return{nombre:r,contraseña:s,reContraseña:i,correo:t,tipoDeCuenta:n,refUsuario:u,refNombre:v,refContraseña:f,refReContraseña:C,refCorreo:g,refTipoDeCuenta:y,validarContraseña:V,esVisible:b,onReset(){h()},async onSubmit(){if(v.value.validate(),f.value.validate(),C.value.validate(),g.value.validate(),v.value.hasError||f.value.hasError||C.value.hasError||y.value.hasError||g.value.hasError)e.notify({color:"negative",message:"Las contraseñas deben coincidir"});else try{const o=await(0,p.Xb)(l,t.value,s.value),i=o.user;await(0,p.ck)(i,{displayName:r.value}),await(0,c.t8)((0,c.iH)(a,`usuarios/${0===n.value?"admis":"trabajadores"}/${i.uid}`),{nombre:r.value,correo:t.value}),e.notify({color:"positive",message:"Usuario Creado"}),h()}catch(o){const a=o.code,l=o.message;console.log(o),console.log(a),console.log(l),e.notify({color:"negative",message:"Error al crear el usuario, mire la consola para mas informacion"})}}}}};var b=l(1639),f=l(8326),C=l(926),y=l(6611),V=l(2857),g=l(1480),h=l(4455),w=l(9984),H=l.n(w);const _=(0,b.Z)(v,[["render",u]]),W=_;H()(v,"components",{QForm:f.Z,QSeparator:C.Z,QInput:y.Z,QIcon:V.Z,QRadio:g.Z,QBtn:h.Z})}}]);