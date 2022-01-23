export function _ActionEnum(name) {
	var args = Array.from(arguments);
	var args = [...args];
	return {
		name: name,
		args: args.slice(1),
		found: true
	};
}

export function _FindEnum(name, args, required=false, defaultArgs=[]) {
	for(var i of args) {
		if(i.name == name && i.found) {
			return {
				name: i.name,
				found: true,
				args: i.args
			}
		}
	}
	
	if(required) {
		throw new Error(`Property ${name}() is missing.`);
	} else {
		// Not null so _FindEnum() doesn't bug out.
		return {
			name: "",
			found: false,
			args: defaultArgs
		};
	}
}
