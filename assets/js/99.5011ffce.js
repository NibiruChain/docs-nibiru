(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{517:function(t,a,e){"use strict";e.r(a);var s=e(0),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"joining-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joining-testnet"}},[t._v("#")]),t._v(" Joining Testnet")]),t._v(" "),a("p",{attrs:{synopsis:""}},[t._v("Testnets are testing instances of the Nibiru blockchain. Testnet tokens are separate and distinct from real assets. In order to join a network, you'll need to use its corresponding version of the binary to "),a("a",{attrs:{href:"./node-daemon"}},[t._v("run a full node")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"available-networks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-networks"}},[t._v("#")]),t._v(" Available Networks")]),t._v(" "),a("p",[t._v("You can find a table of each Nibiru testnet and its current status below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Network")]),t._v(" "),a("th",[t._v("Chain ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Version")]),t._v(" "),a("th",[t._v("Status")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Testnet")]),t._v(" "),a("td",[t._v("nibiru-testnet-1")]),t._v(" "),a("td",[t._v("Nibiru's default testnet")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/releases/tag/v0.15.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("v0.15.0"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Active")])]),t._v(" "),a("tr",[a("td",[t._v("Testnet")]),t._v(" "),a("td",[t._v("nibiru-testnet-2")]),t._v(" "),a("td",[t._v("Nibiru's default testnet")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/releases/tag/v0.16.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("v0.16.3"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("Active")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("You can see current status of the blockchain at the "),a("a",{attrs:{href:"https://explorer.testnet.nibiru.fi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nibiru Block Explorer"),a("OutboundLink")],1),t._v(".\nThe explorer allows you to search through transactions, blocks, wallet addresses, and other on-chain data.")])]),t._v(" "),a("h2",{attrs:{id:"blockchain-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-parameters"}},[t._v("#")]),t._v(" Blockchain Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Chain ID")]),t._v(" "),a("th",[t._v("Block Time")]),t._v(" "),a("th",[t._v("Unbonding Time")]),t._v(" "),a("th",[t._v("Voting Period")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("nibiru-testnet-1")]),t._v(" "),a("td",[t._v("5 seconds")]),t._v(" "),a("td",[t._v("21 days")]),t._v(" "),a("td",[t._v("48 hours")])]),t._v(" "),a("tr",[a("td",[t._v("nibiru-testnet-2")]),t._v(" "),a("td",[t._v("2 seconds")]),t._v(" "),a("td",[t._v("2 hours")]),t._v(" "),a("td",[t._v("24 hours")])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"pre-requisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[t._v("#")]),t._v(" Pre-requisites")]),t._v(" "),a("h3",{attrs:{id:"minimum-hardware-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-hardware-requirements"}},[t._v("#")]),t._v(" Minimum hardware requirements")]),t._v(" "),a("ul",[a("li",[t._v("4CPU")]),t._v(" "),a("li",[t._v("16GB RAM")]),t._v(" "),a("li",[t._v("500GB of disk space (SSD)")])]),t._v(" "),a("h3",{attrs:{id:"update-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-the-system"}},[t._v("#")]),t._v(" Update the system")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBhcHQgdXBkYXRlICZhbXA7JmFtcDsgc3VkbyBhcHQgdXBncmFkZSAtLXllcwo="}}),t._v(" "),a("h3",{attrs:{id:"install-nibid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-nibid"}},[t._v("#")]),t._v(" Install nibid")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtcyBodHRwczovL2dldC5uaWJpcnUuZmkvISB8IGJhc2gK"}}),t._v(" "),a("h3",{attrs:{id:"verify-nibid-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-nibid-version"}},[t._v("#")]),t._v(" Verify nibid version")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bmliaWQgdmVyc2lvbgoKIyB2MC4xNi4zCg=="}}),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"init-the-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-the-chain"}},[t._v("#")]),t._v(" Init the Chain")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Init the chain")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bmliaWQgaW5pdCAmbHQ7bW9uaWtlci1uYW1lJmd0OyAtLWNoYWluLWlkPW5pYmlydS10ZXN0bmV0LTIgLS1ob21lICRIT01FLy5uaWJpZAo="}})],1),t._v(" "),a("li",[a("p",[t._v("Create a local key pair")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bmliaWQga2V5cyBhZGQgJmx0O2tleS1uYW1lJmd0Owo="}})],1),t._v(" "),a("li",[a("p",[t._v("Copy the genesis file to the "),a("code",[t._v("$HOME/.nibid/config")]),t._v(" folder.")]),t._v(" "),a("p",[t._v("You can get genesis from our networks endpoint with:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"TkVUV09SSz1uaWJpcnUtdGVzdG5ldC0yCmN1cmwgLXMgaHR0cHM6Ly9uZXR3b3Jrcy50ZXN0bmV0Lm5pYmlydS5maS8kTkVUV09SSy9nZW5lc2lzICZndDsgJEhPTUUvLm5pYmlkL2NvbmZpZy9nZW5lc2lzLmpzb24K"}}),t._v(" "),a("p",[t._v("Or you can download it from the Tendermint RPC endpoint.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtcyBodHRwczovL3JwYy50ZXN0bmV0LTIubmliaXJ1LmZpL2dlbmVzaXMgfCBqcSAtciAucmVzdWx0LmdlbmVzaXMgJmd0OyAkSE9NRS8ubmliaWQvY29uZmlnL2dlbmVzaXMuanNvbgo="}}),t._v(" "),a("p",[a("strong",[t._v("(Optional) Verify Genesis File Checksum")])]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2hhc3VtIC1hIDI1NiAkSE9NRS8ubmliaWQvY29uZmlnL2dlbmVzaXMuanNvbgoKIyA1Y2VkYjkyMzdjNmQ4MDdhODk0NjgyNjgwNzE2NDc2NDllOTBiNDBhYzhjZDZkMWRlZDhhNzIzMjMxNDQ4ODBkICRIT01FLy5uaWJpZC9jb25maWcvZ2VuZXNpcy5qc29uCg=="}})],1),t._v(" "),a("li",[a("p",[t._v("Update seeds list in the configuration file "),a("code",[t._v("$HOME/.nibid/config/config.toml")]),t._v(".")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"TkVUV09SSz1uaWJpcnUtdGVzdG5ldC0yCnNlZCAtaSAnc3xzZWVkcyA9Lip8c2VlZHMgPSAmcXVvdDsnJChjdXJsIC1zIGh0dHBzOi8vbmV0d29ya3MudGVzdG5ldC5uaWJpcnUuZmkvJE5FVFdPUksvc2VlZHMpJyZxdW90O3xnJyAkSE9NRS8ubmliaWQvY29uZmlnL2NvbmZpZy50b21sCg=="}})],1),t._v(" "),a("li",[a("p",[t._v("Set minimum gas prices")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2VkIC1pICdzL21pbmltdW0tZ2FzLXByaWNlcyA9LiovbWluaW11bS1nYXMtcHJpY2VzID0gJnF1b3Q7MC4wMjV1bmliaSZxdW90Oy9nJyAkSE9NRS8ubmliaWQvY29uZmlnL2FwcC50b21sCg=="}})],1),t._v(" "),a("li",[a("p",[t._v("Setup state-sync parameters for catching up faster with the network (optional)")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"TkVUV09SSz1uaWJpcnUtdGVzdG5ldC0yCnNlZCAtaSAnc3xlbmFibGUgPS4qfGVuYWJsZSA9IHRydWV8ZycgJEhPTUUvLm5pYmlkL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWkgJ3N8cnBjX3NlcnZlcnMgPS4qfHJwY19zZXJ2ZXJzID0gJnF1b3Q7JyQoY3VybCAtcyBodHRwczovL25ldHdvcmtzLnRlc3RuZXQubmliaXJ1LmZpLyRORVRXT1JLL3JwY19zZXJ2ZXJzKScmcXVvdDt8ZycgJEhPTUUvLm5pYmlkL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWkgJ3N8dHJ1c3RfaGVpZ2h0ID0uKnx0cnVzdF9oZWlnaHQgPSAmcXVvdDsnJChjdXJsIC1zIGh0dHBzOi8vbmV0d29ya3MudGVzdG5ldC5uaWJpcnUuZmkvJE5FVFdPUksvdHJ1c3RfaGVpZ2h0KScmcXVvdDt8ZycgJEhPTUUvLm5pYmlkL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWkgJ3N8dHJ1c3RfaGFzaCA9Lip8dHJ1c3RfaGFzaCA9ICZxdW90OyckKGN1cmwgLXMgaHR0cHM6Ly9uZXR3b3Jrcy50ZXN0bmV0Lm5pYmlydS5maS8kTkVUV09SSy90cnVzdF9oYXNoKScmcXVvdDt8ZycgJEhPTUUvLm5pYmlkL2NvbmZpZy9jb25maWcudG9tbAo="}})],1),t._v(" "),a("li",[a("p",[t._v("Start your node (choose one of the options)")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyB3aXRob3V0IGEgZGFlbW9uCm5pYmlkIHN0YXJ0CgojIHdpdGggc3lzdGVtZApzdWRvIHN5c3RlbWN0bCBzdGFydCBuaWJpcnUKCiMgd2l0aCBjb3Ntb3Zpc29yCnN1ZG8gc3lzdGVtY3RsIHN0YXJ0IGNvc21vdmlzb3ItbmliaXJ1Cg=="}})],1),t._v(" "),a("li",[a("p",[t._v("Request tokens from the "),a("a",{attrs:{href:"https://faucet.testnet-2.nibiru.fi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Faucet for nibiru-testnet-2"),a("OutboundLink")],1),t._v(" if required.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"RkFVQ0VUX1VSTD0mcXVvdDtodHRwczovL2ZhdWNldC50ZXN0bmV0LTIubmliaXJ1LmZpLyZxdW90OwpBRERSPSZxdW90Oy4uLiZxdW90OyAjIHlvdXIgYWRkcmVzcyAKY3VybCAtWCBQT1NUIC1kICd7JnF1b3Q7YWRkcmVzcyZxdW90OzogJnF1b3Q7JyZxdW90OyRBRERSJnF1b3Q7JyZxdW90OywgJnF1b3Q7Y29pbnMmcXVvdDs6IFsmcXVvdDsxMDAwMDAwMHVuaWJpJnF1b3Q7LCZxdW90OzEwMDAwMDAwMDAwMHVudXNkJnF1b3Q7XX0nICRGQVVDRVRfVVJMCg=="}}),t._v(" "),a("p",[t._v("Please note, that current daily limit for the Web Faucet is 10NIBI ("),a("code",[t._v("10000000unibi")]),t._v(") and 100,000 NUSD ("),a("code",[t._v("100000000000unusd")]),t._v(").")]),t._v(" "),a("p",[t._v("You can also use the testnet Faucet from the "),a("code",[t._v("#faucet")]),t._v(" channel of the "),a("a",{attrs:{href:"https://discord.gg/sgPw8ZYfpQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nibiru Chain Discord"),a("OutboundLink")],1),t._v(".")])],1)]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("See the "),a("a",{attrs:{href:"../validators"}},[t._v("validator docs")]),t._v(" on how to participate as a validator.")])]),t._v(" "),a("h2",{attrs:{id:"example-nibid-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-nibid-commands"}},[t._v("#")]),t._v(" Example "),a("code",[t._v("nibid")]),t._v(" commands")]),t._v(" "),a("p",[t._v("Ex: Query to see which pools are open for trading on Nibi-Perps and the current mark and index prices.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bmliaWQgcXVlcnkgdnBvb2wgYWxsLXBvb2xzCg=="}}),t._v(" "),a("p",[t._v("Ex: Open a long position on BTC with 10 leverage with 100 μNUSD as margin and uncapped slippage tolerance.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBjb21tYW5kCm5pYmlkIHR4IHBlcnAgb3Blbi1wb3NpdGlvbiBidXl8c2VsbCBwYWlyIGxldmVyYWdlIHF1b3RlQW10IGJhc2VBbXRMaW1pdCBbZmxhZ3NdCiMgZXhhbXBsZQpuaWJpZCB0eCBwZXJwIG9wZW4tcG9zaXRpb24gYnV5IHVidGM6dW51c2QgMTAgMTAwIDAgLS1mcm9tICZsdDtrZXkmZ3Q7IC0taG9tZSAkSE9NRS8ubmliaWQK"}}),t._v(" "),a("p",[t._v("For the full list of "),a("code",[t._v("nibid")]),t._v(" commands, see:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("a",{attrs:{href:"../../dev/cli"}},[a("code",[t._v("nibid")]),t._v(" CLI introduction")])]),t._v(" "),a("li",[t._v("Nibiru "),a("a",{attrs:{href:"../../dev/x"}},[t._v("Module Reference")])])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);