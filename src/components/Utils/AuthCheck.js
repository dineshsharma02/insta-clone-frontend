export function checkLoggedIn(){
    let token = localStorage['authtoken']
    console.log(token);
    if (!token){
      return false
    }
    return true

}