function _ActionEnum(name) {
  return {
    name: name,
    args: args
  };
}

function _FindEnum(name, args, required=false) {
  for(var i of args) {
    if(i.name == name) {
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
    return {
      name: null,
      found: false,
      args: null
    }
  }
}
