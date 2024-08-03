const accountId = 144553
let accountEmail = "biswas_koushik@outlook.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "kb@outlook.com"
accountPassword = "212121"
accountCity = "Bengal"

/*
Prefer not to use Var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
