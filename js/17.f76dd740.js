(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{faca:function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"flex q-pa-md"},[r("q-scroll-area",{staticStyle:{height:"80vh",width:"100%"},attrs:{visible:""}},[this.previewObj?r("q-card",{staticClass:"my-card q-pa-md q-ma-xs q-mr-md"},[r("header-section",{attrs:{pageDetails:e.previewObj.clinicalAdvancesPageDetails,supporter:e.previewObj.generalInformation,videos:e.previewObj.videos}}),r("nav-section"),r("cme-activities"),r("med-challenge",{attrs:{challenges:e.previewObj.medChallenges}}),r("resources-section",{attrs:{resources:e.previewObj.relatedResources}}),r("steering-committee-section",{attrs:{committee:e.previewObj.steeringCommittee}})],1):e._e()],1)],1)},s=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),o=r.n(i),n=r("2f62"),a=r("933e"),u=r("c3c5"),l=r("7abb"),p=r("3561"),d=r("8383"),j=r("8188");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"CAPreview",data:function(){return{}},components:{"header-section":a["default"],"nav-section":u["default"],"med-challenge":l["default"],"cme-activities":p["default"],"resources-section":d["default"],"steering-committee-section":j["default"]},computed:b(b({},Object(n["c"])("tickets",["getProjects","getWorkingProject"])),{},{previewObj:{get:function(){if(this.getProjects&&Object.keys(this.getProjects).length){if(this.$route.query.projectId&&this.$route.query.projectId.length){var e=this.getProjects[this.$route.query.projectId].activeTicket;return console.log(this.getProjects[this.$route.query.projectId].tickets[e]),this.getProjects[this.$route.query.projectId].tickets[e]}return null}},set:function(e){return e}}})},h=g,O=r("2877"),m=Object(O["a"])(h,c,s,!1,null,"56cc2d46",null);t["default"]=m.exports}}]);