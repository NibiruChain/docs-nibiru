(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{504:function(t,e,a){"use strict";a.r(e);var l=a(0),s=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[t._v("#")]),t._v(" keys")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v('The keys module allows you to manage your local tendermint keystore ("wallets") for the Nibiru network.')]),t._v(" "),e("h2",{attrs:{id:"available-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-commands"}},[t._v("#")]),t._v(" Available Commands")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Command: "),e("code",[t._v("nibid keys")])]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-add"}},[t._v("add")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Add an encrypted private key (either newly generated or recovered), encrypt it, and save to disk")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-delete"}},[t._v("delete")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Delete the given key")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-export"}},[t._v("export")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Export private keys")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-import"}},[t._v("import")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Import private keys into the local keystore")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-list"}},[t._v("list")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("List all keys")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-mnemonic"}},[t._v("mnemonic")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Compute the bip39 mnemonic for some input entropy")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-parse"}},[t._v("parse")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Parse address from hex to bech32 and vice versa")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#nibid-keys-show"}},[t._v("show")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Retrieve key information by name or address")])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"nibid-keys-add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-add"}},[t._v("#")]),t._v(" nibid keys add")]),t._v(" "),e("p",[t._v("Derive a new private key and encrypt to disk.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBhZGQgJmx0O2tleS1uYW1lJmd0OyBbZmxhZ3NdCg=="}}),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--multisig")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Construct and store a multisig public key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--multisig-threshold")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("K out of N required signatures")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--nosort")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Keys passed to --multisig are taken in the order they're supplied")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--pubkey")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Parse a public key in bech32 format and save it to disk")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--interactive")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Interactively prompt user for BIP39 passphrase and mnemonic")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--ledger")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Store a local reference to a private key on a Ledger device")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--recover")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Provide seed phrase to recover existing key instead of creating")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--no-backup")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Don't print out seed phrase (if others are watching the terminal)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--dry-run")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Perform action, but don't add key to local keystore")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--hd-path")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Manual HD Path derivation (overrides BIP44 config)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--coin-type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("118")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("coin type number for HD derivation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--account")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Account number for HD derivation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--index")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Address index number for HD derivation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--algo")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("secp256k")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Key signing algorithm to generate keys for")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"create-a-new-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-key"}},[t._v("#")]),t._v(" Create a new key")]),t._v(" "),e("p",[t._v("The following example will create a key in the local keystore named "),e("code",[t._v("MyKey")]),t._v(" :")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBhZGQgTXlLZXkK"}}),t._v(" "),e("p",[t._v("Enter and repeat the password, at least 8 characters, then you will get a new key.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[e("strong",[t._v("WARNING")])]),t._v(" "),e("p",[t._v("Write the seed phrase in a safe place! It is the only way to recover your account if you ever forget your password, and/or something happens to your local keystore.")])]),t._v(" "),e("h4",{attrs:{id:"recover-an-existing-key-from-seed-phrase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recover-an-existing-key-from-seed-phrase"}},[t._v("#")]),t._v(" Recover an existing key from seed phrase")]),t._v(" "),e("p",[t._v("If you forget your password or lose your key, or you would like to use your key in another place, you can recover your key by using the "),e("code",[t._v("--recover")]),t._v(" flag.")]),t._v(" "),e("p",[t._v("The following example will recover a key with the seed phrase and store it in the local keystore with the name "),e("code",[t._v("MyKey")]),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBhZGQgTXlLZXkgLS1yZWNvdmVyCg=="}}),t._v(" "),e("p",[t._v("You'll be asked to enter and repeat the new password for your key, and enter the seed phrase. Then you get your key back.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"RW50ZXIgYSBwYXNzcGhyYXNlIGZvciB5b3VyIGtleToKUmVwZWF0IHRoZSBwYXNzcGhyYXNlOgpFbnRlciB5b3VyIHJlY292ZXJ5IHNlZWQgcGhyYXNlOgo="}}),t._v(" "),e("h4",{attrs:{id:"create-a-multisig-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-multisig-key"}},[t._v("#")]),t._v(" Create a multisig key "),e("a",{attrs:{id:"create-a-multisig-key"}})]),t._v(" "),e("p",[t._v("The following example creates a multisig key with 3 sub-keys, and specify the minimum number of signatures as 2. The transaction could be broadcast only when the number of signatures is greater than or equal to 2.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBhZGQgJmx0O211bHRpc2lnLWtleW5hbWUmZ3Q7IC0tbXVsdGlzaWctdGhyZXNob2xkPTIgLS1tdWx0aXNpZz0mbHQ7c2lnbmVyLWtleW5hbWUtMSZndDssJmx0O3NpZ25lci1rZXluYW1lLTImZ3Q7LCZsdDtzaWduZXIta2V5bmFtZS0zJmd0Owo="}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("strong",[t._v("TIP")])]),t._v(" "),e("p",[e("code",[t._v("<signer-keyname>")]),t._v(' can be the type of "local/offline/ledger", but not "multi" type.')]),t._v(" "),e("p",[t._v("If you don't have all the permission of sub-keys, you can ask for the "),e("code",[t._v("pubkey")]),t._v("'s to create the offline keys first, then you will be able to create the multisig key.")]),t._v(" "),e("p",[t._v("Offline key can be created by "),e("code",[t._v("nibid keys add --pubkey")]),t._v(".")])]),t._v(" "),e("p",[t._v("How to use multisig key to sign and broadcast a transaction, please refer to multisign.")]),t._v(" "),e("h3",{attrs:{id:"nibid-keys-delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-delete"}},[t._v("#")]),t._v(" nibid keys delete "),e("a",{attrs:{id:"iris-keys-delete"}})]),t._v(" "),e("p",[t._v("Delete a local key by the given name.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBkZWxldGUgJmx0O2tleS1uYW1lJmd0OyBbZmxhZ3NdCg=="}}),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--force, -f")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Remove the key unconditionally without asking for the passphrase")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--yes, -y")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Skip confirmation prompt when deleting offline or ledger key references")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"delete-a-local-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-local-key"}},[t._v("#")]),t._v(" Delete a local key "),e("a",{attrs:{id:"delete-a-local-key"}})]),t._v(" "),e("p",[t._v("The following example will delete the key named "),e("code",[t._v("MyKey")]),t._v(" from the local keystore:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBkZWxldGUgTXlLZXkK"}}),t._v(" "),e("h3",{attrs:{id:"nibid-keys-export"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-export"}},[t._v("#")]),t._v(" nibid keys export "),e("a",{attrs:{id:"iris-keys-export"}})]),t._v(" "),e("p",[t._v("Export the keystore of a key to stdout:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBleHBvcnQgJmx0O2tleS1uYW1lJmd0OyBbZmxhZ3NdCg=="}}),t._v(" "),e("h4",{attrs:{id:"export-keystore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-keystore"}},[t._v("#")]),t._v(" Export keystore "),e("a",{attrs:{id:"export-keystore"}})]),t._v(" "),e("p",[t._v("The following example will export the key named "),e("code",[t._v("MyKey")]),t._v(" to stdout:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBleHBvcnQgTXlrZXkK"}}),t._v(" "),e("h3",{attrs:{id:"nibid-keys-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-import"}},[t._v("#")]),t._v(" nibid keys import "),e("a",{attrs:{id:"iris-keys-import"}})]),t._v(" "),e("p",[t._v("Import a ASCII armored private key into the local keybase.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBpbXBvcnQgJmx0O25hbWUmZ3Q7ICZsdDtrZXlmaWxlJmd0OyBbZmxhZ3NdCg=="}}),t._v(" "),e("h4",{attrs:{id:"import-a-ascii-armored-private-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-a-ascii-armored-private-key"}},[t._v("#")]),t._v(" Import a ASCII armored private key "),e("a",{attrs:{id:"import-a-ascii-armored-private-key"}})]),t._v(" "),e("p",[t._v("The following example will import the private keys from "),e("code",[t._v("key-to-import.json")]),t._v(" and store it in the local keystore with the name "),e("code",[t._v("MyKey")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBpbXBvcnQgTXlLZXkga2V5LXRvLWltcG9ydC5qc29uIFtmbGFnc10K"}}),t._v(" "),e("h3",{attrs:{id:"nibid-keys-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-list"}},[t._v("#")]),t._v(" nibid keys list "),e("a",{attrs:{id:"iris-keys-list"}})]),t._v(" "),e("p",[t._v("List all the keys from the local keystore that have been stored by this key manager, along with their associated name, type, address and pubkey.")]),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--list-name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("List names only")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"list-all-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-all-keys"}},[t._v("#")]),t._v(" List all keys "),e("a",{attrs:{id:"list-all-keys"}})]),t._v(" "),e("p",[t._v("The following example will list all keys in the local keystore managed by the nibid key manager:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBsaXN0Cg=="}}),t._v(" "),e("h3",{attrs:{id:"nibid-keys-mnemonic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-mnemonic"}},[t._v("#")]),t._v(" nibid keys mnemonic "),e("a",{attrs:{id:"iris-keys-mnemonic"}})]),t._v(" "),e("p",[t._v("Create a "),e("code",[t._v("bip39")]),t._v(" mnemonic, sometimes called a seed phrase, by reading from the system entropy. To pass your own entropy, use "),e("code",[t._v("unsafe-entropy")]),t._v(" mode.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBtbmVtb25pYyBbZmxhZ3NdCg=="}}),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--unsafe-entropy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}}),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Prompt the user to supply their own entropy, instead of relying on the system")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"create-a-bip39-mnemonic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-bip39-mnemonic"}},[t._v("#")]),t._v(" Create a bip39 mnemonic "),e("a",{attrs:{id:"create-a-bip39-mnemonic"}})]),t._v(" "),e("p",[t._v("The following example will create a new "),e("code",[t._v("bip39")]),t._v(" seed phrase:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBtbmVtb25pYwo="}}),t._v(" "),e("p",[t._v("You'll get a "),e("code",[t._v("bip39")]),t._v(" mnemonic with 24 words, e.g.:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"c2FkZGxlIGx1bmNoIHByZWZlciBhc3BlY3QgZG9tYWluIHdvbWFuIHJlbGllZiBzd2FybSBleGlzdCBiZWhpbmQgY2xpZmYgc2hhZG93IG1lYWRvdyBqb2tlIHRvd2VyIGluaGVyaXQgdXBvbiB0cmFnaWMgZ2xvdyBhaXIgbWFyY2ggZW52ZWxvcGUgam9rZSBlc3RhdGUK"}}),t._v(" "),e("h3",{attrs:{id:"nibid-keys-parse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-parse"}},[t._v("#")]),t._v(" nibid keys parse "),e("a",{attrs:{id:"iris-keys-parse"}})]),t._v(" "),e("p",[t._v("Convert and print to stdout key addresses and fingerprints from hexadecimal into "),e("code",[t._v("bech32")]),t._v(" nibi prefixed format and vice versa.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBwYXJzZSAmbHQ7aGV4LW9yLWJlY2gzMi1hZGRyZXNzJmd0OyBbZmxhZ3NdCg=="}}),t._v(" "),e("h4",{attrs:{id:"convert-and-print-to-stdout-key-addresses-from-hex-fingerprint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-and-print-to-stdout-key-addresses-from-hex-fingerprint"}},[t._v("#")]),t._v(" Convert and print to stdout key addresses from hex fingerprint "),e("a",{attrs:{id:"convert-and-print-to-stdout-key-addresses-and-fingerprints"}})]),t._v(" "),e("p",[t._v("The following example will convert a given hex fingerprint to a range of bep32 human readable address formats:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBwYXJzZSAzMTNFREYzODJFOTM4RDQxRTc4N0IzQzYzNjY3MTkwMDk2NDBDNkYxCg=="}}),t._v(" "),e("p",[t._v("Returns:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"Zm9ybWF0czoKLSBuaWJpMXh5bGQ3d3B3and4NXJldThrMHJydmVjZXF6dHlwM2gzejI1Z2RyCi0gbmliaXB1YjF4eWxkN3dwd2p3eDVyZXU4azBycnZlY2VxenR5cDNoM3YzNDV4NQotIG5pYml2YWxvcGVyMXh5bGQ3d3B3and4NXJldThrMHJydmVjZXF6dHlwM2gzYWh6OGs2Ci0gbmliaXZhbG9wZXJwdWIxeHlsZDd3cHdqd3g1cmV1OGswcnJ2ZWNlcXp0eXAzaDNqY3lteTkKLSBuaWJpdmFsY29uczF4eWxkN3dwd2p3eDVyZXU4azBycnZlY2VxenR5cDNoM2Z5M202bQotIG5pYml2YWxjb25zcHViMXh5bGQ3d3B3and4NXJldThrMHJydmVjZXF6dHlwM2gzcnVsbnc1Cg=="}}),t._v(" "),e("p",[t._v("Convert and print to stdout hex fingerprint from bep32 address:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBwYXJzZSBuaWJpMXh5bGQ3d3B3and4NXJldThrMHJydmVjZXF6dHlwM2gzejI1Z2RyCg=="}}),t._v(" "),e("p",[t._v("Returns:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"aHVtYW46IG5pYmkKYnl0ZXM6IDMxM0VERjM4MkU5MzhENDFFNzg3QjNDNjM2NjcxOTAwOTY0MEM2RjEK"}}),t._v(" "),e("h3",{attrs:{id:"nibid-keys-show"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nibid-keys-show"}},[t._v("#")]),t._v(" nibid keys show "),e("a",{attrs:{id:"iris-keys-show"}})]),t._v(" "),e("p",[t._v("Get details of a local key.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBzaG93ICZsdDtrZXktbmFtZSZndDsgW2ZsYWdzXQo="}}),t._v(" "),e("p",[e("strong",[t._v("Flags:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name, shorthand")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--address")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Output the address only (overrides --output)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--bech")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("acc")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The Bech32 prefix encoding for a key (acc/val/cons)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--device")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Output the address in a ledger device")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--multisig-threshold")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("K out of N required signatures")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("--pubkey")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Output the public key only (overrides --output)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"get-details-of-a-local-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-details-of-a-local-key"}},[t._v("#")]),t._v(" Get details of a local key "),e("a",{attrs:{id:"get-details-of-a-local-key"}})]),t._v(" "),e("p",[t._v("The following example will return the details for the key named "),e("code",[t._v("MyKey")]),t._v(" :")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBzaG93IE15S2V5Cg=="}}),t._v(" "),e("p",[t._v("The following infos will be shown:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"LSBuYW1lOiBNeUtleQogIHR5cGU6IGxvY2FsCiAgYWRkcmVzczogbmliaTFuamdweTBnNDUwd2gwMno4bTd5Y2U3cjA4Zm1mbGZsa2d2MzY3agogIHB1YmtleTogbmliaXB1YjFhZGR3bnBlcHF2Y2ZjdWY4NHB1MDhjcHF0aHY4cWUycWt5cnd1OHA5emEwYzlkOGZwNXBsNHNsbHdoZWp4NjZyeHl1CiAgbW5lbW9uaWM6ICZxdW90OyZxdW90OwogIHRocmVzaG9sZDogMAogIHB1YmtleXM6IFtdCg=="}}),t._v(" "),e("h4",{attrs:{id:"get-validator-operator-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-validator-operator-address"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.irisnet.org/docs/cli-client/keys.html#get-validator-operator-address",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),e("OutboundLink")],1),t._v("Get validator operator address "),e("a",{attrs:{id:"get-validator-operator-address"}})]),t._v(" "),e("p",[t._v("If an address has been bonded to be a validator operator (which the address you used to create a validator), then you can use "),e("code",[t._v("--bech val")]),t._v(" to get the operator's address prefixed by "),e("code",[t._v("iva")]),t._v(" and the pubkey prefixed by "),e("code",[t._v("ivp")]),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"bmliaWQga2V5cyBzaG93IE15S2V5IC0tYmVjaCB2YWwK"}}),t._v(" "),e("p",[t._v("Example Output:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"LSBuYW1lOiBNeWtleQogIHR5cGU6IGxvY2FsCiAgYWRkcmVzczogaXZhMXR1bHd4Mmh3ejRkdjh0ZTZjZmxoZGE2NGRuMDk4NGhha3dnazRmCiAgcHVia2V5OiBpdnAxYWRkd25wZXBxMjRydWZhcDZ1MHN5c3FjcGdzZnpxaHczeDhuZmtocWh0bXBncXQwMzY5cmx5cWNnMHZrZ2Q4ZTZ6eQogIG1uZW1vbmljOiAmcXVvdDsmcXVvdDsKICB0aHJlc2hvbGQ6IDAKICBwdWJrZXlzOiBbXQo="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);