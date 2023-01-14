function getPath(obj, givenKey, givenValue) {
    for(var key in obj) {                                  
        if(obj[key] && typeof obj[key] === "object") {      
            var result = getPath(obj[key], givenValue, givenKey);
            if(result) {                                    
                result.unshift(key)
                return result;                              
            }
        } else if(obj[key] === givenValue && key === givenKey ) {
            return [key];
        }  
    }
}
var myObj = [
{
    "name": "needle",
    "children": [{"name": "group2","children": [{"name": "item0"}]}]
},
{
    "name": "item1"
},
{
   "name": "needleGroup",
   "children": [{"name": "needleNestedGroup","children": [{"name": "item3"},{"name": "needleNestedDeeperGroup","children": [{"name": "needle"}]}]}]
}];