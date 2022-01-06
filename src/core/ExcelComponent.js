import {DOMListener} from "@core/DOMListener";

export class ExcelComponent extends DOMListener {
     constructor($root, options = {}) {
         super($root, options.listeners);
         this.name = options.name || ''
         this.emitter = options.emitter // Excel: {componentOptions}
         this.unsubscribers = []

         this.prepare()
     }

    // component preparation and
    // supporting functionality before init():
     prepare() {}

    // returns the component template:
    toHTML() {
        return ``
    }

    // notifies listeners of an event:
    $emit(event, ...args) {
         this.emitter.emit(event, ...args)
    }

    // subscribing to event notifications:
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // component initialization,
    // adding DOM listeners:
     init() {
         this.initDOMListeners()
     }

     // delete component,
    // unsubscribe from listeners:
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}

