export var UpdateFunctions = [];
export var FrameTime = 0;

function onUpdate() {
	var startTime = window.performance.now();
	for(var i of UpdateFunctions) {
		i();
	}

	FrameTime = (window.performance.now() - startTime) / 1000;
	window.requestAnimationFrame(onUpdate);
}

window.requestAnimationFrame(onUpdate);
