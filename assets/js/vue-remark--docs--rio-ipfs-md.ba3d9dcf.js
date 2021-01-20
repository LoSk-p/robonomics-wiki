(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{UQSp:function(o,e,t){"use strict";e.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}},ZLWg:function(o,e,t){"use strict";t.r(e);var r=t("KHd+"),n=t("UQSp"),i=t("Kw5r");function s(o){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:n.a},c=function(o){var e=o.options.components=o.options.components||{},t=o.options.computed=o.options.computed||{};Object.keys(a).forEach((function(o){"object"===s(a[o])&&"function"==typeof a[o].render||"function"==typeof a[o]&&"function"==typeof a[o].options.render?e[o]=a[o]:t[o]=function(){return a[o]}}))},p=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",f={excerpt:null,title:"Robonomics IO IPFS"};var d=function(o){o.options[u]&&(o.options[u]=f),i.a.util.defineReactive(o.options,u,f),o.options.computed=p.computed({$frontmatter:function(){return o.options[u]}},o.options.computed)},l=Object(r.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("VueRemarkRoot",[t("h1",{attrs:{id:"robonomics-io-ipfs"}},[t("a",{attrs:{href:"#robonomics-io-ipfs","aria-hidden":"true"}},[o._v("#")]),o._v("Robonomics IO IPFS")]),t("p",[o._v("It serves downloading and uploading files from/to IPFS network")]),t("h2",{attrs:{id:"requirements"}},[t("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[o._v("#")]),o._v("Requirements")]),t("ul",[t("li",[t("code",{pre:!0},[o._v("robonomics")]),t("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("executable")])]),t("li",[o._v("Running "),t("a",{attrs:{href:"https://ipfs.io/#install",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("IPFS")]),o._v(" daemon ")])]),t("h2",{attrs:{id:"write"}},[t("a",{attrs:{href:"#write","aria-hidden":"true"}},[o._v("#")]),o._v("Write")]),t("pre",[t("code",{pre:!0},[o._v('% echo "Hello Robonomics" | ./robonomics io write ipfs\nQmQAcvgXmcZEjXGibXGFcqdsvvrnWp3BguuubWhzSBZMXy\n')])]),t("h2",{attrs:{id:"read"}},[t("a",{attrs:{href:"#read","aria-hidden":"true"}},[o._v("#")]),o._v("Read")]),t("pre",[t("code",{pre:!0},[o._v("% echo QmQAcvgXmcZEjXGibXGFcqdsvvrnWp3BguuubWhzSBZMXy | ./robonomics io read ipfs\nHello Robonomics\n")])]),t("h2",{attrs:{id:"remote-ipfs-node"}},[t("a",{attrs:{href:"#remote-ipfs-node","aria-hidden":"true"}},[o._v("#")]),o._v("Remote IPFS node")]),t("p",[o._v("If your local node is configured differently from defaults or you have a remote node, it's possible to specify it with "),t("code",{pre:!0},[o._v("--remote")]),o._v(" option")]),t("pre",[t("code",{pre:!0},[o._v('% echo "Hello Robonomics" | ./robonomics io write ipfs --remote https://ipfs.infura.io:5001/\nQmQAcvgXmcZEjXGibXGFcqdsvvrnWp3BguuubWhzSBZMXy\n')])]),t("p",[o._v("The same applies for "),t("code",{pre:!0},[o._v("read")])])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof d&&d(l);e.default=l.exports}}]);