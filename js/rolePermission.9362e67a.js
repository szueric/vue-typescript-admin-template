(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rolePermission"],{"49fc":function(e,t,r){"use strict";var n=r("71db"),i=r.n(n);i.a},"71db":function(e,t,r){},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("\n    "+e._s(e.$t("permission.addRole"))+"\n  ")]),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.key)+"\n      ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),r("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.handleEdit(t)}}},[e._v("\n          "+e._s(e.$t("permission.editPermission"))+"\n        ")]),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDelete(t)}}},[e._v("\n          "+e._s(e.$t("permission.delete"))+"\n        ")])]}}])})],1),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),r("el-form-item",{attrs:{label:"Menus"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesTreeData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n        "+e._s(e.$t("permission.cancel"))+"\n      ")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("\n        "+e._s(e.$t("permission.confirm"))+"\n      ")])],1)],1)],1)},i=[],a=r("cebc"),l=(r("7f7f"),r("6762"),r("2fdb"),r("75fc")),s=(r("ac6a"),r("6b54"),r("5d73")),o=r.n(s),c=(r("96cf"),r("3b8d")),u=r("d225"),h=r("b0b4"),d=r("308d"),p=r("6bb5"),f=r("4e2b"),v=r("9ab4"),m=r("df7c"),y=r.n(m),b=r("60a3"),g=r("b32d"),k=function(){return Object(g["a"])({url:"/routes",method:"get"})},w=function(){return Object(g["a"])({url:"/roles",method:"get"})},R=function(e){return Object(g["a"])({url:"/role",method:"post",data:e})},x=function(e,t){return Object(g["a"])({url:"/role/".concat(e),method:"put",data:t})},_=function(e){return Object(g["a"])({url:"/role/".concat(e),method:"delete"})},O={key:"",name:"",description:"",routes:[]},j=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(d["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.role=O,e.reshapedRoutes=[],e.serviceRoutes=[],e.rolesList=[],e.dialogVisible=!1,e.dialogType="new",e.checkStrictly=!1,e.defaultProps={children:"children",label:"title"},e}return Object(f["a"])(t,e),Object(h["a"])(t,[{key:"created",value:function(){this.getRoutes(),this.getRoles()}},{key:"getRoutes",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.serviceRoutes=t.data,this.reshapedRoutes=this.reshapeRoutes(t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getRoles",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"generateTreeData",value:function(e){var t=[],r=!0,n=!1,i=void 0;try{for(var a,l=o()(e);!(r=(a=l.next()).done);r=!0){var s=a.value,c={children:[],title:"",path:""};c.title=this.$t("route.".concat(s.meta.title)).toString(),c.path=s.path,s.children&&(c.children=this.generateTreeData(s.children)),t.push(c)}}catch(u){n=!0,i=u}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return t}},{key:"reshapeRoutes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,i=!1,a=void 0;try{for(var l,s=o()(e);!(n=(l=s.next()).done);n=!0){var c=l.value;if(c.meta&&!c.meta.hidden){var u=this.onlyOneShowingChild(c.children,c);!c.children||!u||c.meta&&c.meta.alwaysShow||(c=u);var h={path:y.a.resolve(t,c.path),meta:{title:c.meta&&c.meta.title}};c.children&&(h.children=this.reshapeRoutes(c.children,h.path)),r.push(h)}}}catch(d){i=!0,a=d}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}},{key:"flattenRoutes",value:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.children){var n=t.flattenRoutes(e.children);n.length>0&&(r=[].concat(Object(l["a"])(r),Object(l["a"])(n)))}}),r}},{key:"handleAddRole",value:function(){this.role=O,this.$refs.tree&&this.$refs.tree.setCheckedKeys([]),this.dialogType="new",this.dialogVisible=!0}},{key:"handleEdit",value:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=e.row,this.$nextTick(function(){var e=t.flattenRoutes(t.reshapeRoutes(t.role.routes)),r=t.generateTreeData(e),n=r.map(function(e){return e.path});t.$refs.tree.setCheckedKeys(n),t.checkStrictly=!1})}},{key:"handleDelete",value:function(e){var t=this,r=e.index,n=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Deleted!"});case 4:case"end":return e.stop()}},e)}))).catch(function(e){console.error(e)})}},{key:"generateTree",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments.length>2?arguments[2]:void 0,n=[],i=!0,a=!1,l=void 0;try{for(var s,c=o()(e);!(i=(s=c.next()).done);i=!0){var u=s.value,h=y.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,h,r)),(r.includes(h)||u.children&&u.children.length>=1)&&n.push(u)}}catch(d){a=!0,l=d}finally{try{i||null==c.return||c.return()}finally{if(a)throw l}}return n}},{key:"confirmRole",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,a,l,s,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,r=this.$refs.tree.getCheckedKeys(),this.role.routes=this.generateTree(this.serviceRoutes,"/",r),!t){e.next=16;break}return e.next=6,x(this.role.key,this.role);case 6:n=0;case 7:if(!(n<this.rolesList.length)){e.next=14;break}if(this.rolesList[n].key!==this.role.key){e.next=11;break}return this.rolesList.splice(n,1,this.role),e.abrupt("break",14);case 11:n++,e.next=7;break;case 14:e.next=22;break;case 16:return e.next=18,R(this.role);case 18:i=e.sent,a=i.data,this.role.key=a.key,this.rolesList.push(this.role);case 22:l=this.role,s=l.description,o=l.key,c=l.name,this.dialogVisible=!1,this.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n          <div>Role Key: ".concat(o,"</div>\n          <div>Role Nmae: ").concat(c,"</div>\n          <div>Description: ").concat(s,"</div>\n        "),type:"success"});case 25:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onlyOneShowingChild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,n=e.filter(function(e){return!e.meta||!e.meta.hidden});return 1===n.length?(r=n[0],r.path=y.a.resolve(t.path,r.path),r):0===n.length&&(r=Object(a["a"])({},t,{path:""}),r)}},{key:"routesTreeData",get:function(){return this.generateTreeData(this.reshapedRoutes)}}]),t}(b["c"]);j=v["a"]([b["a"]],j);var T=j,$=T,S=(r("49fc"),r("0c7c")),D=Object(S["a"])($,n,i,!1,null,"6176840c",null);t["default"]=D.exports}}]);