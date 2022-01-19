// Object because I can't think of a way to have it not be an object.
var metaTrackers = [];

export class MetaTracker {
	constructor(value=false) {
		this.value = value;
		this.oldValue = value;
		this.changed = false;
	}

	update() {
		// JS says this code is bad (this is not defined) yet it works as intended why?
		if(this.value != this.oldValue) {
			this.changed = true;
		} else {
			this.changed = false;
		}

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

	window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
