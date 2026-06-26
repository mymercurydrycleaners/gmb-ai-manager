const {validate}=require("../utils/validator");

const missing=validate();

if(missing.length){

console.warn(

"Missing ENV:",

missing.join(",")

);

}

module.exports=true;
