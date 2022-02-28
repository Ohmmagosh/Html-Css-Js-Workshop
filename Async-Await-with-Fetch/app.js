async function loadUsers(){
    // const response = await fetch("data/users.json");
    // const users = await response.json();
    
    // return users;
    return (await (await fetch("data/users.json")).json());
}
document.addEventListener("DOMContentLoaded", async () => {
    let users = [];

    try{
        users = await loadUsers();
    } catch (e){
        console.log("Error!");
        console.log(e);
    }
    console.log(users);
});