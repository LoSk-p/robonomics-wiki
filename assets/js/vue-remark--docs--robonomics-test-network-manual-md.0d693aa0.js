(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},fZN3:function(e,o,t){"use strict";t.r(o);var n=t("KHd+"),r=t("UQSp"),a=t("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var d={VueRemarkRoot:r.a},i=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(d).forEach((function(e){"object"===s(d[e])&&"function"==typeof d[e].render||"function"==typeof d[e]&&"function"==typeof d[e].options.render?o[e]=d[e]:t[e]=function(){return d[e]}}))},c=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",p={excerpt:null,title:"Manual start of the Robonomics network, consisting of 3 nodes"};var f=function(e){e.options[l]&&(e.options[l]=p),a.a.util.defineReactive(e.options,l,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},v=Object(n.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("VueRemarkRoot",[n("h1",{attrs:{id:"manual-start-of-the-robonomics-network-consisting-of-3-nodes"}},[n("a",{attrs:{href:"#manual-start-of-the-robonomics-network-consisting-of-3-nodes","aria-hidden":"true"}},[e._v("#")]),e._v("Manual start of the Robonomics network, consisting of 3 nodes")]),n("blockquote",[n("p",[e._v("Need to start Robonomics network of N (N> = 2) nodes")])]),n("h2",{attrs:{id:"requirements"}},[n("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),n("ul",[n("li",[e._v("Robonomics binary, download latest here: "),n("a",{attrs:{href:"https://github.com/airalab/robonomics/releases/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://github.com/airalab/robonomics/releases/")])]),n("li",[e._v("Subkey tool, download latest here: "),n("a",{attrs:{href:"https://github.com/airalab/robonomics/releases/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://github.com/airalab/robonomics/releases/")])]),n("li",[e._v("3 servers with root shell. Their ip-addresses in the current instruction will be "),n("code",{pre:!0},[e._v("165.227.171.127")]),e._v(", "),n("code",{pre:!0},[e._v("159.89.25.75")]),e._v(" and "),n("code",{pre:!0},[e._v("159.89.30.50")])])]),n("h2",{attrs:{id:"introduction"}},[n("a",{attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v("Introduction")]),n("p",[e._v("In this tutorial, we will first create all key files locally, and then upload them to their corresponding nodes. ")]),n("h2",{attrs:{id:"prepare-directories"}},[n("a",{attrs:{href:"#prepare-directories","aria-hidden":"true"}},[e._v("#")]),e._v("Prepare directories")]),n("p",[e._v("Download 2 archives from the links above and open the folder with them in the terminal.\nThen create a directory for the project, unpack the archives into it and go to the created folder:")]),n("pre",[n("code",{pre:!0},[e._v("$ mkdir robonomics_test_network\n$ tar -xf ./robonomics-ubuntu-0.21.0-x86_64.tar.xz -C ./robonomics_test_network/\n$ tar -xf ./subkey-ubuntu-0.21.0-x86_64.tar.xz -C ./robonomics_test_network/\n$ cd ./robonomics_test_network/\n")])]),n("p",[e._v("Next, create a separate "),n("strong",[e._v("uploads")]),e._v(" directory and the necessary subdirectories for each server. All files intended for uploading to a specific server will be stored in these subdirectories:")]),n("pre",[n("code",{pre:!0},[e._v("$ mkdir -p uploads/165.227.171.127/keystore && mkdir -p uploads/165.227.171.127/network\n$ mkdir -p uploads/159.89.25.75/keystore && mkdir -p uploads/159.89.25.75/network\n$ mkdir -p uploads/159.89.30.50/keystore && mkdir -p uploads/159.89.30.50/network\n")])]),n("p",[e._v("Also, create a "),n("strong",[e._v("local")]),e._v(" folder with "),n("strong",[e._v("validators")]),e._v(" and "),n("strong",[e._v("sudo")]),e._v(" folders, which will store the validators and sudo keys locally.")]),n("pre",[n("code",{pre:!0},[e._v("$ mkdir -p local/validators && mkdir -p local/sudo\n")])]),n("h2",{attrs:{id:"prepare-specjson"}},[n("a",{attrs:{href:"#prepare-specjson","aria-hidden":"true"}},[e._v("#")]),e._v("Prepare spec.json")]),n("p",[e._v("Using the robonomics binary, generate a "),n("strong",[e._v("spec.json")]),e._v(" file, which will use as the basis:")]),n("pre",[n("code",{pre:!0},[e._v("$ ./robonomics build-spec --chain dev > uploads/spec.json\n")])]),n("p",[e._v("Next, edit this file. At first correct the first three fields, make them look like this:")]),n("pre",[n("code",{pre:!0},[e._v('"name": "Test Robonomics Network",\n"id": "dev",\n"chainType": "Live",\n')])]),n("h3",{attrs:{id:"bootnodes"}},[n("a",{attrs:{href:"#bootnodes","aria-hidden":"true"}},[e._v("#")]),e._v("bootNodes")]),n("p",[e._v("The "),n("strong",[e._v("bootNodes")]),e._v(" field is a list of strings of special format. For each of the bootnodes must write the corresponding string here.\nTo do this, first create a key file for each bootnode using "),n("strong",[e._v("subkey")]),e._v(":")]),n("pre",[n("code",{pre:!0},[e._v("$ ./subkey generate-node-key uploads/165.227.171.127/network/secret_ed25519  \n12D3KooWBPq1fDLQC2iqQ4FpM2mUpiXjBRcb8ptk7tbaqr2B6HZN\n$ ./subkey generate-node-key uploads/159.89.25.75/network/secret_ed25519\n12D3KooWRbGmdpbz6o1fe66wFs7nJsUYfBp2f3W7J1uDXj3gt4Bh\n$ ./subkey generate-node-key uploads/159.89.30.50/network/secret_ed25519\n12D3KooWMuTrL9CmJxj8LjH43s4hsJMsyuMdbuB86zCaAf9VCwFf\n")])]),n("p",[e._v("Each command creates a key file in the specified directory and outputs to stdout the string that will be needed to fill in the "),n("strong",[e._v("bootNodes")]),e._v(" field in the "),n("strong",[e._v("spec.json")]),e._v(" file. As a result, the "),n("strong",[e._v("bootNodes")]),e._v(" section should look like following example:")]),n("pre",[n("code",{pre:!0},[e._v('"bootNodes": [\n"/ip4/165.227.171.127/tcp/30333/p2p/12D3KooWBPq1fDLQC2iqQ4FpM2mUpiXjBRcb8ptk7tbaqr2B6HZN",\n"/ip4/159.89.25.75/tcp/30333/p2p/12D3KooWRbGmdpbz6o1fe66wFs7nJsUYfBp2f3W7J1uDXj3gt4Bh",\n"/ip4/159.89.30.50/tcp/30333/p2p/12D3KooWMuTrL9CmJxj8LjH43s4hsJMsyuMdbuB86zCaAf9VCwFf"\n],\n')])]),n("p",[e._v("The next 3 fields (telemetryEndpoints, protocolId, properties) can be filled like this:")]),n("pre",[n("code",{pre:!0},[e._v(' "telemetryEndpoints": [\n     [\n       "/dns4/telemetry.polkadot.io/tcp/443/x-parity-wss/%2Fsubmit%2F",\n       0\n     ]\n ],\n"protocolId": "txrt",\n"properties": {\n    "ss58Format": 32,\n    "tokenDecimals": 9,\n    "tokenSymbol": "TXRT"\n},\n')])]),n("p",[e._v("Further up to the "),n("strong",[e._v("palletBalances")]),e._v(" field leave unchanged.")]),n("h3",{attrs:{id:"palletbalances"}},[n("a",{attrs:{href:"#palletbalances","aria-hidden":"true"}},[e._v("#")]),e._v("palletBalances")]),n("p",[e._v("To fill the palletBalances field create "),n("strong",[e._v("the number of nodes + 1")]),e._v(" (the last key is for "),n("strong",[e._v("sudo")]),e._v(") keys. This can be done using "),n("strong",[e._v("subkey")]),e._v(", in the file name must specify "),n("strong",[e._v("SS58 Address")]),e._v(" from the generated key, in the file content must specify "),n("strong",[e._v("seed")]),e._v(" phrase in quotes. ")]),n("p",[e._v("Example creating one key.")]),n("ul",[n("li",[e._v("Generate key:"),n("pre",[n("code",{pre:!0},[e._v("$ ./subkey -n robonomics generate\nSecret phrase `display cargo domain april joy still bundle notice bridge pencil fat approve` is account:\n  Network ID/version: substrate\n  Secret seed:        0x0275ab9bce53e4359184f02112943162c708f483009e0b7b3ba63549c5c2e514\n  Public key (hex):   0xd0996b85dd1b2876080b26123f9c27097d698f871c5978c3cb9c299253e7a530\n  Account ID:         0xd0996b85dd1b2876080b26123f9c27097d698f871c5978c3cb9c299253e7a530\n  SS58 Address:       4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx\n")])])]),n("li",[e._v("Create key file:"),n("pre",[n("code",{pre:!0},[e._v("$ touch ./local/validators/4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx && echo '\"display cargo domain april joy still bundle notice bridge pencil fat approve\"' | tee ./local/validators/4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx\n")])])])]),n("p",[e._v("Command template for creating a validator key file:"),n("br"),n("code",{pre:!0},[e._v("touch ./local/validators/**SS58_Address** && echo '\"**seed**\"' | tee ./local/validators/**SS58_Address**")])]),n("p",[e._v("Command template for creating a sudo key file:   \n"),n("code",{pre:!0},[e._v("touch ./local/sudo/**SS58_Address** && echo '\"**seed**\"' | tee ./local/sudo/**SS58_Address**")])]),n("p",[e._v("Three keys are stored in the "),n("strong",[e._v("local/validators")]),e._v(" folder and one in the "),n("strong",[e._v("local/sudo")]),e._v(" folder. As a result, the following content should appear in the "),n("strong",[e._v("local")]),e._v(" directory:")]),n("pre",[n("code",{pre:!0},[e._v("./local/\n├── sudo\n│   └── 4Dy6bzrvoApwjLaAjfrtvtX3tthCw6fnCU1Ym5KNyRGt3kKb\n└── validators\n    ├── 4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx\n    ├── 4EeMi84pk5P5nQpyupQeCZ1C4NhUFtMF7Xh1MXJLANkZ3BTd\n    └── 4FPRYfSVqwaX39vXZ78tT3DPBT9FmFXvdQDD7y5UQKncJGu1\n")])]),n("p",[e._v("Now fill the palletBalances section in the spec.json file with these keys.\nAs a result, it should look like this:")]),n("pre",[n("code",{pre:!0},[e._v('"palletBalances": {\n  "balances": [\n    [\n      "4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx",    <-- Generated validator 1 key\n      1000000000000000000\n    ],\n    [\n      "4EeMi84pk5P5nQpyupQeCZ1C4NhUFtMF7Xh1MXJLANkZ3BTd",    <-- Generated validator 2 key\n      1000000000000000000\n    ],\n    [\n      "4FPRYfSVqwaX39vXZ78tT3DPBT9FmFXvdQDD7y5UQKncJGu1",    <-- Generated validator 3 key\n      1000000000000000000\n    ],\n    [\n      "4Dy6bzrvoApwjLaAjfrtvtX3tthCw6fnCU1Ym5KNyRGt3kKb",    <-- Generated sudo key\n      1000000000000000000\n    ],\n  ]\n},\n')])]),n("p",[e._v("The values that were previously presented in the palletBalances section must be deleted.")]),n("h3",{attrs:{id:"palletsession"}},[n("a",{attrs:{href:"#palletsession","aria-hidden":"true"}},[e._v("#")]),e._v("palletSession")]),n("p",[e._v("Next step is the "),n("strong",[e._v("palletSession")]),e._v(" section in file "),n("strong",[e._v("spec.json")]),e._v('. First let\'s describe its format. \nThis section contains the "keys" field, that contains a list of three lists (equals of nodes count). Each of these lists looks like follows:')]),n("pre",[n("code",{pre:!0},[e._v('[\n    "%validator_SS58_address%",\n    "%validator_SS58_address%",\n    {\n        "babe": "%sr25519_babe_SS58_address%",\n        "im_online": "%sr25519_im_online_SS58_address%"\n        "authority_discovery": "%sr25519_authority_discovery_SS58_address%",\n        "grandpa": "%ed25519_grandpa_SS58_address%",\n    }\n]\n')])]),n("p",[n("strong",[e._v("%validator_SS58_address%")]),e._v(" is the validator key that was generated for each node in the "),n("strong",[e._v("palletBalances")]),e._v(" section of this manual. Just copy it twice for each node.")]),n("p",[e._v("To fill in the remaining 4 lines for each node, you need to create 4 key files for each node and store them in the "),n("strong",[e._v("keystore")]),e._v(" folders.\nAs key files are generated, you can fill "),n("strong",[e._v("palletSession")]),e._v(".")]),n("p",[e._v("Each key file must contain a "),n("strong",[e._v("seed")]),e._v(" phrase in quotes.\nMaking of the name of each key file require separate consideration.\nThe name of each key file is formed as "),n("strong",[e._v("prefix")]),e._v(" + "),n("strong",[e._v("account_id without leading hexadecimal zero")]),e._v(".")]),n("p",[e._v("Prefixes matching:  ")]),n("blockquote",[n("pre",[n("code",{pre:!0},[e._v(" grandpa: '6772616e'  \n babe: '62616265'\n im_online: '696d6f6e'  \n authority_discovery: '61756469'  \n")])])]),n("p",[e._v("An example of creating keys for one node:")]),n("ul",[n("li",[e._v("Creating a "),n("strong",[e._v("babe")]),e._v(" (prefix "),n("em",[e._v("62616265")]),e._v(") key file.   "),n("pre",[n("code",{pre:!0},[e._v("$ ./subkey --sr25519 -n robonomics generate\n")])]),n("blockquote",[n("p",[e._v(" Secret phrase "),n("strong",[e._v("cover once garment syrup income chair elder business diary frozen rack damage")]),e._v(" is account:  ")]),n("p",[e._v(" Network ID/version: "),n("code",{pre:!0},[e._v("substrate")])]),n("p",[e._v(" Secret seed:        "),n("code",{pre:!0},[e._v("0x90ddeee3a9a0c464572021d311c245eefc41f9a59c739faefda47efcf4755677")])]),n("p",[e._v(" Public key (hex):   "),n("code",{pre:!0},[e._v("0xfa44d96e310cf68350dd855c745794f7c1afa63089ebdb2c96bff3797972bb43")])]),n("p",[e._v(" Account ID:         "),n("code",{pre:!0},[e._v("0xfa44d96e310cf68350dd855c745794f7c1afa63089ebdb2c96bff3797972bb43")])]),n("p",[e._v(" SS58 Address:       "),n("code",{pre:!0},[e._v("4HirHF5BVHxkRBtqptFxBSmnAiZir1qQLs6pL9Utmm4eF77C")])])]),n("pre",[n("code",{pre:!0},[e._v("$ touch uploads/165.227.171.127/keystore/62616265fa44d96e310cf68350dd855c745794f7c1afa63089ebdb2c96bff3797972bb43 && echo '\"cover once garment syrup income chair elder business diary frozen rack damage\"' | tee ./uploads/165.227.171.127/keystore/62616265fa44d96e310cf68350dd855c745794f7c1afa63089ebdb2c96bff3797972bb43 \n")])]),e._v(" This command creates a "),n("strong",[e._v("babe")]),e._v(" key file for the "),n("code",{pre:!0},[e._v("165.227.171.127")]),e._v(" node. To fill in "),n("strong",[e._v("spec.json")]),e._v(", need to take from this output the value "),n("strong",[e._v("SS58 Address")]),e._v(": "),n("code",{pre:!0},[e._v("4HirHF5BVHxkRBtqptFxBSmnAiZir1qQLs6pL9Utmm4eF77C")]),e._v(". This address need to insert instead of "),n("code",{pre:!0},[e._v("%sr25519_babe_SS58_address%")]),e._v(" in the above "),n("strong",[e._v("palletSession")]),e._v(" template. "),n("strong",[e._v("babe")]),e._v(" key file creation command template:"),n("br"),n("code",{pre:!0},[e._v("touch ./uploads/[node_ip]/keystore/62616265+[Account_ID] && echo '\"[seed]\"' | tee ./uploads/[node_ip]/keystore/62616265+[Account_ID]")])])]),n("p",[e._v("As you can see, the name of the babe key file is the sum of two substrings: "),n("code",{pre:!0},[e._v("babe prefix ('62616265')")]),e._v(", and the "),n("code",{pre:!0},[e._v("account_id")]),e._v(" of the generated key, without the leading zero ("),n("code",{pre:!0},[e._v("fa44d96e310cf68350dd855c745794f7c1afa63089ebdb2c96bff3797972bb43")]),e._v("). \n  Note that the keys "),n("code",{pre:!0},[e._v("babe, im_online, authority_discovery")]),e._v(" are generated with the indication "),n("code",{pre:!0},[e._v("--sr25519")]),e._v("."),n("br"),n("strong",[e._v("grandpa")]),e._v(" key have to generate with the indication "),n("code",{pre:!0},[e._v("--ed25519")]),e._v(".")]),n("ul",[n("li",[n("p",[e._v("Creating an "),n("strong",[e._v("im_online")]),e._v(" (prefix "),n("em",[e._v("696d6f6e")]),e._v(") key file.  ")]),n("pre",[n("code",{pre:!0},[e._v("$ ./subkey --sr25519 -n robonomics generate\n")])]),n("blockquote",[n("p",[e._v("Secret phrase "),n("strong",[e._v("envelope truly balance turkey undo casual waste skill average ordinary gun split")]),e._v(" is account:")]),n("p",[e._v("  Network ID/version: "),n("code",{pre:!0},[e._v("substrate")])]),n("p",[e._v("  Secret seed:        "),n("code",{pre:!0},[e._v("0x8a19df08feeff9f1fa3581902ca22a305252aea32e284d32f10e990d00bb8926")])]),n("p",[e._v("  Public key (hex):   "),n("code",{pre:!0},[e._v("0x6c13ff8e37d91b80fe3b03f9b92a91a1ef7db741434cf12cc44d5ed29257ab09")])]),n("p",[e._v("  Account ID:         "),n("code",{pre:!0},[e._v("0x6c13ff8e37d91b80fe3b03f9b92a91a1ef7db741434cf12cc44d5ed29257ab09")])]),n("p",[e._v("  SS58 Address:       "),n("code",{pre:!0},[e._v("4EWQyBRoucH4Wjd4JtGoSEYYCw4bbkonjoFy9hNUX5fbmMEt")])])]),n("pre",[n("code",{pre:!0},[e._v("$ touch uploads/165.227.171.127/keystore/696d6f6e6c13ff8e37d91b80fe3b03f9b92a91a1ef7db741434cf12cc44d5ed29257ab09 && echo '\"envelope truly balance turkey undo casual waste skill average ordinary gun split\"' | tee uploads/165.227.171.127/keystore/696d6f6e6c13ff8e37d91b80fe3b03f9b92a91a1ef7db741434cf12cc44d5ed29257ab09\n")])]),n("p",[n("strong",[e._v("im_online")]),e._v(" key file creation command template:"),n("br"),n("code",{pre:!0},[e._v("touch ./uploads/[node_ip]/keystore/696d6f6e+[Account_ID] && echo '\"[seed]\"' | tee ./uploads/[node_ip]/keystore/696d6f6e+[Account_ID]")])]),n("p",[n("strong",[e._v("spec.json")]),e._v(": "),n("code",{pre:!0},[e._v("4EWQyBRoucH4Wjd4JtGoSEYYCw4bbkonjoFy9hNUX5fbmMEt")]),e._v(" need to insert instead of "),n("code",{pre:!0},[e._v("%sr25519_im_online_SS58_address%")]),e._v(" in the above "),n("strong",[e._v("palletSession")]),e._v(" template.")])])]),n("ul",[n("li",[n("p",[e._v("Creating an "),n("strong",[e._v("authority_discovery")]),e._v(" (prefix "),n("em",[e._v("61756469")]),e._v(") key file.")]),n("pre",[n("code",{pre:!0},[e._v("$ ./subkey --sr25519 -n robonomics generate\n")])]),n("blockquote",[n("p",[e._v("Secret phrase "),n("strong",[e._v("boy harsh because omit equip atom apart spring undo explain walnut crystal")]),e._v(" is account:")]),n("p",[e._v("Network ID/version: "),n("code",{pre:!0},[e._v("substrate")])]),n("p",[e._v("  Secret seed:        "),n("code",{pre:!0},[e._v("0x27838c9ea0524353da3717862ef0ecef123f40e81b73bb5ef377d12b47d1c543")])]),n("p",[e._v("  Public key (hex):   "),n("code",{pre:!0},[e._v("0x4e33ccfd4105d30dfd93c5ef4658e2585a749508ea7c7abe754efc36dd634c07")])]),n("p",[e._v("  Account ID:         "),n("code",{pre:!0},[e._v("0x4e33ccfd4105d30dfd93c5ef4658e2585a749508ea7c7abe754efc36dd634c07")])]),n("p",[e._v("  SS58 Address:       "),n("code",{pre:!0},[e._v("4DqEyoefRSz746sjaonxJ7KZQz8MUq4cKFA87DfoLzQgWk8t")])])]),n("pre",[n("code",{pre:!0},[e._v("$ touch uploads/165.227.171.127/keystore/617564694e33ccfd4105d30dfd93c5ef4658e2585a749508ea7c7abe754efc36dd634c07 && echo '\"boy harsh because omit equip atom apart spring undo explain walnut crystal\"' | tee uploads/165.227.171.127/keystore/617564694e33ccfd4105d30dfd93c5ef4658e2585a749508ea7c7abe754efc36dd634c07\n")])]),n("p",[n("strong",[e._v("authority_discovery")]),e._v(" key file creation command template:"),n("br"),n("code",{pre:!0},[e._v("touch ./uploads/[node_ip]/keystore/61756469+[Account_ID] && echo '\"[seed]\"' | tee ./uploads/[node_ip]/keystore/61756469+[Account_ID]")])]),n("p",[n("strong",[e._v("spec.json")]),e._v(": "),n("code",{pre:!0},[e._v("4DqEyoefRSz746sjaonxJ7KZQz8MUq4cKFA87DfoLzQgWk8t")]),e._v(" need to insert instead of "),n("code",{pre:!0},[e._v("%sr25519_authority_discovery_SS58_address%")]),e._v(" in the above "),n("strong",[e._v("palletSession")]),e._v(" template.")])])]),n("ul",[n("li",[e._v("Creating a "),n("strong",[e._v("grandpa")]),e._v(" (prefix "),n("em",[e._v("6772616e")]),e._v(") key file."),n("pre",[n("code",{pre:!0},[e._v("$ ./subkey --ed25519 -n robonomics generate\n")])]),n("blockquote",[n("p",[e._v("Secret phrase "),n("strong",[e._v("squeeze nature off vendor comic pause tattoo seek omit spatial regular cattle")]),e._v(" is account:")]),n("p",[e._v("  Network ID/version: "),n("code",{pre:!0},[e._v("substrate")])]),n("p",[e._v("  Secret seed:        "),n("code",{pre:!0},[e._v("0xef0a9f51a4da7b789c0a25d39b44428d4da7262cc3fe013d4383b45216e8b83e")])]),n("p",[e._v("  Public key (hex):   "),n("code",{pre:!0},[e._v("0x7ea1beed13fb66a333b50b1ae417ebfd152bab99b223be2d4d886adb5fa7f009")])]),n("p",[e._v("  Account ID:         "),n("code",{pre:!0},[e._v("0x7ea1beed13fb66a333b50b1ae417ebfd152bab99b223be2d4d886adb5fa7f009")])]),n("p",[e._v("  SS58 Address:       "),n("code",{pre:!0},[e._v("4EvjwRdgUg6YtdUDjq6Z3PoTKtzH5cgFgwnzArMSbw3RzYTa")])])]),n("pre",[n("code",{pre:!0},[e._v("$ touch uploads/165.227.171.127/keystore/6772616e7ea1beed13fb66a333b50b1ae417ebfd152bab99b223be2d4d886adb5fa7f009 && echo '\"squeeze nature off vendor comic pause tattoo seek omit spatial regular cattle\"' | tee uploads/165.227.171.127/keystore/6772616e7ea1beed13fb66a333b50b1ae417ebfd152bab99b223be2d4d886adb5fa7f009\n")])]),n("strong",[e._v("grandpa")]),e._v(" key file creation command template:"),n("br"),n("code",{pre:!0},[e._v("touch ./uploads/[node_ip]/keystore/6772616e+[Account_ID] && echo '\"[seed]\"' | tee ./uploads/[node_ip]/keystore/6772616e+[Account_ID]")]),n("strong",[e._v("spec.json")]),e._v(": "),n("code",{pre:!0},[e._v("4EvjwRdgUg6YtdUDjq6Z3PoTKtzH5cgFgwnzArMSbw3RzYTa")]),e._v(" need to insert instead of "),n("code",{pre:!0},[e._v("%sr25519_grandpa_SS58_address%")]),e._v(" in the above "),n("strong",[e._v("palletSession")]),e._v(" template.")])]),n("p",[n("strong",[e._v("Now 4 key files have been created for one node. Need to repeat this actions for the remaining two nodes.")])]),n("p",[e._v("You should get the following "),n("strong",[e._v("uploads")]),e._v(" directory structure after creating all the keys:")]),n("pre",[n("code",{pre:!0},[e._v("./uploads/\n├── 165.227.171.127\n│   ├── keystore\n│   │   ├── 617564694e33ccfd4105d30dfd93c5ef4658e2585a749508ea7c7abe754efc36dd634c07\n│   │   ├── 62616265fa44d96e310cf68350dd855c745794f7c1afa63089ebdb2c96bff3797972bb43\n│   │   ├── 6772616e7ea1beed13fb66a333b50b1ae417ebfd152bab99b223be2d4d886adb5fa7f009\n│   │   └── 696d6f6e6c13ff8e37d91b80fe3b03f9b92a91a1ef7db741434cf12cc44d5ed29257ab09\n│   └── network\n│       └── secret_ed25519\n├── 159.89.25.75\n│   ├── keystore\n│   │   ├── 617564692ac9bd30c0168fa623cfd66abb4327992d900a652bcbb238b740bdde497a565f\n│   │   ├── 626162657cd666bb540c41cb33896a34d7413ffb86fcef1eddddfcd4edb325166df6335d\n│   │   ├── 6772616e084402349bc08ef90c2837e8e3f12ebe8bd4ab86809e9ee5f4f8ca26e73a0518\n│   │   └── 696d6f6e6ed2d507c0283ae869ba6514975bd8765eb8e06abd22afc09e8f36ef3950a116\n│   └── network\n│       └── secret_ed25519\n└── 159.89.30.50\n|   ├── keystore\n|   │   ├── 61756469f20a4e16a0ee79431d6f9a70c38892c7532ad1347c2226d43ef6ffe8966e9b30\n|   │   ├── 62616265e695aa459dbfd42bea7ed3b87970f164f34b6fee4d5a831ffbecd89eb9769b26\n|   │   ├── 6772616eadef59f896ea6b94bcd4519be8cc4b70263fc318cec1a3be14850bbc22117c34\n|   │   └── 696d6f6e2cb4dc8f8a67f477da15045ca40ef3861a2a6b2034ae0c64a179b4431341ea2c\n|   └── network\n|       └── secret_ed25519\n└── spec.json\n")])]),n("p",[e._v("The palletSession section should look like this:")]),n("pre",[n("code",{pre:!0},[e._v('"palletSession": {\n    "keys": [\n        [\n            "4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx",    <-- Validator 1 SS58 Address\n            "4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx",    <-- Validator 1 SS58 Address\n            {\n                "authority_discovery": "4DqEyoefRSz746sjaonxJ7KZQz8MUq4cKFA87DfoLzQgWk8t",\n                "babe": "4HirHF5BVHxkRBtqptFxBSmnAiZir1qQLs6pL9Utmm4eF77C",\n                "grandpa": "4EvjwRdgUg6YtdUDjq6Z3PoTKtzH5cgFgwnzArMSbw3RzYTa",\n                "im_online": "4EWQyBRoucH4Wjd4JtGoSEYYCw4bbkonjoFy9hNUX5fbmMEt"\n            }\n        ],\n        [\n            "4EeMi84pk5P5nQpyupQeCZ1C4NhUFtMF7Xh1MXJLANkZ3BTd",    <-- Validator 2 SS58 Address\n            "4EeMi84pk5P5nQpyupQeCZ1C4NhUFtMF7Xh1MXJLANkZ3BTd",    <-- Validator 2 SS58 Address\n            {\n                "authority_discovery": "4F6daoG2gBXRLvbT4mVRajExZdZBHH7APmX3wDuLYJyzxHSS",\n                "babe": "4C7vBVHUYKqApCywqGsuap6XhjZ3gdYnW4YYP2mMyvYctLqT",\n                "grandpa": "4G3Ai6BGUjqtCoM2aTvWyR19gQ8WZiNnh1KFM47RyiYTwkE6",\n                "im_online": "4FHA7gzKfSLvd8jP85JUCWV6RyeRLm331KHcjnynGx7TWm7D"\n            }\n        ],\n        [\n            "4FPRYfSVqwaX39vXZ78tT3DPBT9FmFXvdQDD7y5UQKncJGu1",    <-- Validator 3 SS58 Address                        \n            "4FPRYfSVqwaX39vXZ78tT3DPBT9FmFXvdQDD7y5UQKncJGu1",    <-- Validator 3 SS58 Address\n            {\n                "authority_discovery": "4CqzJFkdSZg52PfV6Fd4gJ3vPLmRu1HGuPvNivjJ8dDWaz1a",\n                "babe": "4EComk8TsrT399xT6MPhGnhbZEif6U6cny8DiyZ3zezo9b5f",\n                "grandpa": "4Cqi4rG3CzWRZairhZX4isT8qG2jyz9fGDXJMrP6uBYkrft5",\n                "im_online": "4C7V6R59cZVbabExqgWvHVE1vj1E1cV42SZr8d8zZD3gmsqk"\n            }\n        ]\n    ]\n},\n')])]),n("h3",{attrs:{id:"palletstaking"}},[n("a",{attrs:{href:"#palletstaking","aria-hidden":"true"}},[e._v("#")]),e._v("palletStaking")]),n("p",[n("strong",[e._v("palletStaking")]),e._v(" must be filled in as follows:")]),n("pre",[n("code",{pre:!0},[e._v('"palletStaking": {\n    "historyDepth": 84,\n    "validatorCount": 10,\n    "minimumValidatorCount": 2,\n    "invulnerables": [\n        "4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx",     <-- Validator 1 SS58 Address\n        "4EeMi84pk5P5nQpyupQeCZ1C4NhUFtMF7Xh1MXJLANkZ3BTd",     <-- Validator 2 SS58 Address\n        "4FPRYfSVqwaX39vXZ78tT3DPBT9FmFXvdQDD7y5UQKncJGu1"      <-- Validator 3 SS58 Address\n    ],\n    "forceEra": "NotForcing",\n    "slashRewardFraction": 100000000,\n    "canceledPayout": 0,\n    "stakers": [\n        [\n            "4CnxYUugEzLQ8Re2d5P2Jso25pe8PBttcVjc3VdNL2V9shVx",  <-- Validator 1 SS58 Address\n            "4HirHF5BVHxkRBtqptFxBSmnAiZir1qQLs6pL9Utmm4eF77C",  <-- Validator 1 babe address\n            1000000,\n            "Validator"\n        ],\n        [\n            "4EeMi84pk5P5nQpyupQeCZ1C4NhUFtMF7Xh1MXJLANkZ3BTd",  <-- Validator 2 SS58 Address\n            "4C7vBVHUYKqApCywqGsuap6XhjZ3gdYnW4YYP2mMyvYctLqT",  <-- Validator 2 babe address\n            1000000,\n            "Validator"\n        ],\n        [\n            "4FPRYfSVqwaX39vXZ78tT3DPBT9FmFXvdQDD7y5UQKncJGu1",   <-- Validator 3 SS58 Address\n            "4EComk8TsrT399xT6MPhGnhbZEif6U6cny8DiyZ3zezo9b5f",   <-- Validator 3 babe address\n            1000000,\n            "Validator"\n        ]\n    ]\n},\n')])]),n("p",[e._v("The example specified in which fields what values should be substituted.")]),n("h3",{attrs:{id:"palletsudo"}},[n("a",{attrs:{href:"#palletsudo","aria-hidden":"true"}},[e._v("#")]),e._v("palletSudo")]),n("p",[e._v("In the rest of the "),n("strong",[e._v("spec.json")]),e._v(" file, you need to change only the contents of "),n("strong",[e._v("palletSudo")]),e._v(", substituting the previously generated "),n("strong",[e._v("sudo")]),e._v(" address there:")]),n("pre",[n("code",{pre:!0},[e._v('            "palletBabe": {\n                "authorities": []\n            },\n            "palletGrandpa": {\n                "authorities": []  \n            },\n            "palletImOnline": {\n                "keys": []\n            },\n            "palletAuthorityDiscovery": {\n                "keys": []\n            },\n            "palletTreasury": {},\n            "palletElectionsPhragmen": {\n                "members": []\n            },\n            "palletCollectiveInstance1": {\n                "phantom": null,\n                "members": []\n            },\n            "palletSudo": {\n                "key": "4Dy6bzrvoApwjLaAjfrtvtX3tthCw6fnCU1Ym5KNyRGt3kKb"   <-- sudo address\n            }\n        }\n    }\n}\n')])]),n("h2",{attrs:{id:"systemd-unit-file"}},[n("a",{attrs:{href:"#systemd-unit-file","aria-hidden":"true"}},[e._v("#")]),e._v("systemd unit file")]),n("p",[e._v("Now create systemd unit file:")]),n("pre",[n("code",{pre:!0},[e._v("$ touch ./uploads/robonomics.service\n")])]),n("p",[e._v("And fill it like this:")]),n("pre",[n("code",{pre:!0},[e._v("[Unit]\nDescription=robonomics\nAfter=network.target\n\n[Service]\nUser=root\nGroup=root\nType=users\nWorkingDirectory=/root\nRestart=on-failure\nExecStart=/usr/bin/robonomics  --chain /etc/substrate/spec.json --name ${HOSTNAME} --validator\n\n[Install]\nWantedBy=multi-user.target\n")])]),n("p",[e._v('As you can see from the "ExecStart" line, the '),n("strong",[e._v("robonomics")]),e._v(" binary is stored in the "),n("strong",[e._v("/usr/bin/")]),e._v(" directory, and the "),n("strong",[e._v("spec.json")]),e._v(" file is stored in the "),n("strong",[e._v("/etc/substrate/")]),e._v(" directory.")]),n("h2",{attrs:{id:"uploading-files"}},[n("a",{attrs:{href:"#uploading-files","aria-hidden":"true"}},[e._v("#")]),e._v("Uploading files")]),n("p",[e._v("The following one-line command uploads all files to the required directories on the servers. It is important that there are no other folders in the "),n("strong",[e._v("uploads")]),e._v(" directory, except for the folders with the ip-addresses of the nodes:")]),n("pre",[n("code",{pre:!0},[e._v('$ \\\nfor IP in `ls -l ./uploads/ | grep \'^d\' | awk \'{print $9}\'`; do \\\n    ssh root@"$IP" "mkdir -p /root/.local/share/robonomics/chains/dev" && \\\n    scp -r ./uploads/$IP/* root@$IP:/root/.local/share/robonomics/chains/dev/ && \\\n    scp ./uploads/robonomics.service root@$IP:/etc/systemd/system/ && \\\n    scp ./robonomics root@$IP:/usr/bin/ && \\\n    ssh root@$IP "mkdir -p /etc/substrate" && \\\n    scp ./uploads/spec.json root@$IP:/etc/substrate/ \\\n; done\n')])]),n("h2",{attrs:{id:"network-launch"}},[n("a",{attrs:{href:"#network-launch","aria-hidden":"true"}},[e._v("#")]),e._v("Network launch")]),n("p",[e._v("Now connect to all nodes, enable and start the "),n("strong",[e._v("robonomics.service")]),e._v(" unit:")]),n("pre",[n("code",{pre:!0},[e._v("$  \\\nfor IP in `ls -l ./uploads/ | grep '^d' | awk '{print $9}'`; do \\\n   ssh root@$IP \"systemctl enable robonomics.service && systemctl start robonomics.service\" \\\n; done\n")])]),n("p",[e._v("After starting the service on all three nodes, you can view the node logs using "),n("strong",[e._v("journalctl")]),e._v(". \nTo do this, you can connect to any existing server via ssh and run the following command:")]),n("pre",[n("code",{pre:!0},[e._v("$ journalctl -u robonomics.service -f\n")])]),n("p",[n("g-image",{attrs:{src:t("kZrA"),alt:"Robonomics Chart",title:"Robonomics Network journalctl stdout"}})],1)])}),[],!1,null,null,null);"function"==typeof i&&i(v),"function"==typeof f&&f(v);o.default=v.exports},kZrA:function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/result-journalctl.7c86909.1dc8e78c42a0df0ec8fce940fee9f1f0.jpg",size:{width:1280,height:318},sizes:"(max-width: 1280px) 100vw, 1280px",srcset:["/assets/static/result-journalctl.82a2fbd.1dc8e78c42a0df0ec8fce940fee9f1f0.jpg 480w","/assets/static/result-journalctl.7c86909.1dc8e78c42a0df0ec8fce940fee9f1f0.jpg 1280w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1280 318' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-b56242f3a6f5b07437ffa59ff24f43d2'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-b56242f3a6f5b07437ffa59ff24f43d2)' width='1280' height='318' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQAEADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwIBB//EAC4QAAEDAwICBwkAAAAAAAAAAAECAxEABCESMSIyQVFSYXGx0hM0QmKissHR4v/EABcBAQADAAAAAAAAAAAAAAAAAAABAwX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDjbh4jtv8Ammt/d29uQ0a9GQZmd476tCdTDehSkDSYgA%2bdXtEcwhsjsp%2b0VLUeyHLsrzolofhOlwFMCJiY0jurZunBrK29vhAGBjs0FPFSRDYUZEHR1QO40BccJdw/znp/mteFy2jCgozuCB0eFEi5uUlUjbByPTRJHXXCkSH99yo9R%2bWounHC1cyHoIMyfDfh/VUq8uBnTjxHprHLy4CV6kyAOIYz9NB//9k=' /%3e%3c/svg%3e"}}}]);