(function(){

"use strict";
window.StructDirectiveModule = {};

StructDirectiveModule.operNameFor = "*ngFor";
StructDirectiveModule.operNameIf = "*ngIf";

StructDirectiveModule.analyzeDomComponents = function () {
	let content = document.body;	
	let ChildNodeElems = Array.prototype.slice.call(content.childNodes);
	if (ChildNodeElems.length != 0) {
		ChildNodeElems.forEach(function(item) {
			this.ngIf(item);
		}, this);
		ChildNodeElems.forEach(function(item) {
			this.ngFor(item);
		}, this);
	}
};

StructDirectiveModule.ngFor = function (item) {
	if (item.getAttribute !== undefined) {
		if (item.getAttribute(this.operNameFor) != null) {		
			let arr_str_command = item.getAttribute(this.operNameFor).split(" ");			
			
			this.parentNodeForFor = item;
			this.parentNodeForArray = new Array();
			new Function('', 'for (' + item.getAttribute(this.operNameFor) + ') {\
				StructDirectiveModule.ngForNode(' + arr_str_command[1] + ', \'' + arr_str_command[1] + '\');\
			};')();
			this.parentNodeForArray.forEach(function(elem, i) {
				this.parentNodeForFor.parentNode.insertBefore(elem, item);
			}, this);
			item.parentNode.removeChild(item);			
		}
	}
	
	let ChildNodeElems = Array.prototype.slice.call(item.childNodes);
	if (ChildNodeElems.length != 0) {
		ChildNodeElems.forEach(function(item, i, arr) {
			this.ngFor(item);
		}, this);
	}
};

StructDirectiveModule.ngForNode = function (templNode, templName) {	
	let new_elem = this.parentNodeForFor.cloneNode(true);
	new_elem.attributes.removeNamedItem(this.operNameFor);
	for (let key in templNode) {
		new_elem.innerText = new_elem.innerText.replace('{{' + templName + '.' + key + '}}', templNode[key]);
	} 
	this.parentNodeForArray.push(new_elem);	
}

StructDirectiveModule.ngIf = function (item) {
	if (item.getAttribute !== undefined) {
		let item_attr = item.getAttribute(this.operNameIf);
		if (item.getAttribute(this.operNameIf) != null) {
			let parent_node = item.parentNode;			
			let new_elem  = item.cloneNode(true);
			new_elem.attributes.removeNamedItem(this.operNameIf);					
			
			let vis = new Function('', ' return ' + item_attr + ';')();
			if (vis) {
				parent_node.insertBefore(new_elem, item);
			}
			item.parentNode.removeChild(item);
		}
	}
	
	let ChildNodeElems = Array.prototype.slice.call(item.childNodes);
	if (ChildNodeElems.length != 0) {
		ChildNodeElems.forEach(function(item, i, arr) {
			this.ngIf(item);
		}, this);
	}
};

window.addEventListener('DOMContentLoaded', function() {StructDirectiveModule.analyzeDomComponents()}); 

})();