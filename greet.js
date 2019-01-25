function greet(name) {
 
  if (Array.isArray(name) == true) {
    if (name.length > 1) {
        if(name.length == 2){
            return "Hello, " + name.join(" and ")+"."
        }
        return "Hello, " + name.slice(0,name.length-1).join(", ") + ", and "+ name.slice(name.length-1)+".";
    }
  } 
  else if (name === null) {
    return "Hello, my friend.";
  } 
  else if (name === name.toUpperCase()) {
    return "HELLO " + name.toUpperCase() + "!";
  }
  return "Hello, " + name + ".";
}

module.exports = greet;
