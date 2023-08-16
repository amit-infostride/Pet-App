const URL = "http://localhost:8002";
async function httpGetUsers() {
  const responce = await fetch(`${URL}/welcome`);
  const users = await responce.json();
  console.log(users  , "usets ");
  return users;
}
export {httpGetUsers};