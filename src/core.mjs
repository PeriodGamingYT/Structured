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

export function _FindEnumIndex(name, args) {
    for(var i = 0; i < args.length; i++) {
		if(args[i].name === name && args[i].found) {
			return i;
		}
	}
	
	return -1;
}

export function _FindEnum(name, args, required=false, defaultValue=Nothing()) {
  var index = _FindEnumIndex(name, args);
	if(required && index == -1) {
		name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
		throw new Error(`Property ${name}() is missing.`);
	} else if(!required && index == -1) {
		// Not null so _FindEnum() doesn't bug out.
		defaultValue.found = true;
		if(defaultValue.name === "nothing") {
			defaultValue.found = false;
		}

		return defaultValue;
	}

  return args[index];
}
