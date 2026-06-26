const required = [

"GEMINI_API_KEY"

];

function validate(){

const missing=[];

required.forEach(key=>{

if(!process.env[key]){

missing.push(key);

}

});

return missing;

}

module.exports={validate};
