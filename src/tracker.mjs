// Object because I can't think of a way to have it not be an object.
import { UpdateFunctions } from './time.mjs';
var metaTrackers = [];

export class MetaTracker {
	constructor(value=false) {
		this.value = value;
		this.oldValue = value;
		this.changed = false;
	}

	update() {
		// JS says this code is bad (this is not defined) yet it works as intended why?
        this.changed = this.value != this.oldValue;
		this.oldValue = this.value;
	}
}

export function MakeTracker(value=false) {
	var tracker = new MetaTracker(value);
	metaTrackers.push(tracker);
	return tracker;
}

function update() {
	for(var i of metaTrackers) {
		i.update();
	}
}

UpdateFunctions.push(update);
