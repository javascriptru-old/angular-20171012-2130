"use strict";

// *NgIf analog
var a = 17;
var users = ['1', '2', '4', '5'];
var users2 = ['1'];
var users3 = ['1', '2', '3'];

class NgIf {
    constructor() {
        this.init = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.init);
    }

    init() {
        this.getAll();
        this.render();
    }

    getAll() {
        this.elArray = document.querySelectorAll('[ngIf]');
    }

    render() {
        for (let i = 0, max = this.elArray.length; i < max; i++) {

            if (!eval(this.elArray[i].getAttribute('ngIf'))) { // check ngIf condition
                this.elArray[i].parentNode.removeChild(this.elArray[i]);
            } else {
                this.elArray[i].removeAttribute('ngIf');
            }

        }
    }
}

new NgIf();


// *NgFor analog

class NgFor {
    constructor() {
        this.init = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.init);
    }

    init() {
        this.getAll();
        this.render();
    }

    getAll() {
        this.elArray = document.querySelectorAll('[ngFor]');
    }

    render() {
        for (let i = 0, max = this.elArray.length; i < max; i++) {

            let parentElem = this.elArray[i].parentNode;
            let nextElem = this.elArray[i].nextElementSibling;
            let attrValue = this.elArray[i].getAttribute('ngFor');
            let arr = attrValue.substring(attrValue.lastIndexOf(' ') + 1);

            if (!window[arr]) {
                parentElem.removeChild(this.elArray[i]);
                continue;
            }

            let m = window[arr].length;

            switch (m) {
                case 0: { // empty array
                    parentElem.removeChild(this.elArray[i]);
                    break;
                }
                case 1: {
                    this.elArray[i].removeAttribute('ngFor');
                    break;
                }
                default: {
                    this.elArray[i].removeAttribute('ngFor');

                    for (let j = 0; j < m; j++) {
                        let clone = this.elArray[i].cloneNode(true); // create clone

                        if (nextElem) {
                            parentElem.insertBefore(clone, nextElem);
                        } else {
                            parentElem.appendChild(clone);
                        }
                    }

                    this.elArray[i].parentNode.removeChild(this.elArray[i]); // remove source Node
                }
            }

        }
    }
}

new NgFor();

