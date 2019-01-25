function greet(name) {
  var arr1 = [];
  var arr2 = [];

  if (Array.isArray(name) == true) {
    if (name.length > 1) {
        if(name.length == 2){
            return "Hello, " + name.join(" and ")+"."
        }else{
          for(i = 0 ; i < name.length  ; i++){
            if(name[i] === name[i].toUpperCase()){
                arr2.push(name[i].toUpperCase());
            }else{
              arr1.push(name[i]);
            }
          }
          if(arr1.length == 2 && arr2 != null){
            return "Hello, " + arr1.join(" and ")+"." + " AND HELLO "+ arr2 + "!";
          }
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
