"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[365],{2365:function(t,e,u){u.r(e),u.d(e,{default:function(){return h}});var r=u(6252),s=u(3577);const c={class:"about"},o=(0,r._)("h1",null,"This is 單一產品頁面",-1);function a(t,e,u,a,n,i){return(0,r.wg)(),(0,r.iD)("div",c,[o,(0,r.Uk)(" "+(0,s.zw)(n.product.title),1)])}var n={name:"ProductPages",data(){return{product:{}}},mounted(){const{id:t}=this.$route.params,e=`https://vue3-course-api.hexschool.io/v2/api/vuetestproducts/product/${t}`;this.$http.get(e).then((t=>{this.product=t.data.product})).catch((()=>{}))}},i=u(3744);const d=(0,i.Z)(n,[["render",a]]);var h=d}}]);
//# sourceMappingURL=365.c3a7755e.js.map