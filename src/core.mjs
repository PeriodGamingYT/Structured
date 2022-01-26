export function _ActionEnum(name) {
	var args = Array.from(arguments);
	var args = [...args];
	return {
		name: name,
		args: args.slice(1),
		found: true
	};
}

export function Nothing() {
	return {
		name: "nothing",
		found: false,
		args: []
	}
}

export function _FindEnum(name, args, required=false, defaultValue=Nothing()) {
	for(var i of args) {
		if(i.name === name && i.found) {
			return {
				name: i.name,
				found: true,
				args: i.args
			}
		}
	}
	
	if(required) {
		name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
		throw new Error(`Property ${name}() is missing.`);
	} else {
		// Not null so _FindEnum() doesn't bug out.
		defaultValue.found = true;
		if(defaultValue.name == "nothing") {
			defaultValue.found = false;
		}

		return defaultValue;
	}
}
