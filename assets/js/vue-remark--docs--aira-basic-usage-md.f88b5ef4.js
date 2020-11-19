(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{249:function(e,i,t){"use strict";i.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},400:function(e,i,t){"use strict";t.r(i);var n=t(35),o=t(249),a=t(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var r={VueRemarkRoot:o.a},l=function(e){var i=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===s(r[e])&&"function"==typeof r[e].render?i[e]=r[e]:t[e]=function(){return r[e]}}))},c=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Basic usage of AIRA"};var h=function(e){e.options[p]&&(e.options[p]=d),a.a.util.defineReactive(e.options,p,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},u=Object(n.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("VueRemarkRoot",[t("h1",{attrs:{id:"basic-usage-of-aira"}},[t("a",{attrs:{href:"#basic-usage-of-aira","aria-hidden":"true"}},[e._v("#")]),e._v("Basic usage of AIRA")]),t("p",[e._v("To get familiar with AIRA, let's see what is under the hood.")]),t("p",[e._v("Once you launch the client several ros nodes will already be on the run. Here's a list of robonomics communication stack nodes:")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("$ rosnode list\n/eth/erc20_token\n/eth/eth_node\n/graph/aira_graph\n/liability/executor\n/liability/infochan/eth/signer\n/liability/infochan/ipfs_channel\n/liability/persistence\n/liability/listener\n/rosout")])]),t("ul",[t("li",[t("code",{pre:!0},[e._v("/eth/erc20_token")]),e._v(", "),t("code",{pre:!0},[e._v("/eth/eth_node")]),e._v(" - proved services for Ethereum blockchain and ERC20 tokens")]),t("li",[t("code",{pre:!0},[e._v("/graph/aira_graph")]),e._v(" - service node for exploring other AIRA instances")]),t("li",[t("code",{pre:!0},[e._v("/liability/executor")]),e._v(" - gets rosbag file from IPFS and plays it")]),t("li",[t("code",{pre:!0},[e._v("/liability/infochan/ipfs_channel")]),e._v(" - is responsible for offer, demand and result messages. It catches messages from the channel and sends signed messages back")]),t("li",[t("code",{pre:!0},[e._v("/liability/infochan/eth/signer")]),e._v(" - offers services for signing offer, demand and result messages")]),t("li",[t("code",{pre:!0},[e._v("/liability/listener")]),e._v(" - watches for a new liability contracts. When the event is received the node calls executor node")]),t("li",[t("code",{pre:!0},[e._v("/liability/persistence")]),e._v(" - helps to store incoming liabilities and restart them after shutdown")])]),t("p",[e._v("And here's a list of robonomics stack topics.")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-bash"}},[e._v("$ rostopic list\n/eth/event/approval\n/eth/event/transfer\n/graph/greetings\n/liability/complete\n/liability/finalized\n/liability/incoming\n/liability/infochan/eth/sending/demand\n/liability/infochan/eth/sending/offer\n/liability/infochan/eth/sending/result\n/liability/infochan/eth/signing/demand\n/liability/infochan/eth/signing/offer\n/liability/infochan/eth/signing/result\n/liability/infochan/incoming/demand\n/liability/infochan/incoming/offer\n/liability/infochan/incoming/result\n/liability/persistence/add\n/liability/persistence/del\n/liability/persistence/update_timestamp\n/liability/ready\n/liability/result\n/rosout\n/rosout_agg")])]),t("p",[e._v("The most important topics for us are:")]),t("ul",[t("li",[t("code",{pre:!0},[e._v("/liability/incoming")]),e._v(" - when a new liability is created, this topic publishes Ethereum address of the contract")]),t("li",[t("code",{pre:!0},[e._v("/liability/result")]),e._v(" - this topic is for publishing results. But don't publish a result directly to this topic! Use a service instead")]),t("li",[t("code",{pre:!0},[e._v("/liability/infochan/incoming/*")]),e._v(" - a CPS gets information about offer, demand or result from corresponding topics")]),t("li",[t("code",{pre:!0},[e._v("/liability/infochan/eth/signing/*")]),e._v(" - a CPS sends offer, demand or result messages to corresponding topics")])]),t("p",[e._v("For the details check out the "),t("a",{attrs:{href:"/docs/robonomics-liability/"}},[e._v("API page")]),e._v(".")]),t("p",[e._v("Let's start with greetings - say hello to AIRA!")]),t("p",[e._v("You should just launch a pre-installed package "),t("code",{pre:!0},[e._v("hello_aira")]),e._v(":")]),t("pre",[t("code",{pre:!0},[e._v("$ rosrun hello_aira hello_aira\n")])]),t("p",[e._v("We've launched our agent. It will wait for a demand message. Now it's time to send the message. Go to "),t("a",{attrs:{href:"https://airalab.github.io/robonomics_tutorials/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("dapp")]),e._v(" and press Order.\nNow go back to the console and see the result!")])])}),[],!1,null,null,null);"function"==typeof l&&l(u),"function"==typeof h&&h(u);i.default=u.exports}}]);