const users = [
    {id: 1, name: 'User 1', age:30},
    {id: 2, name: 'User 2', age:40},
    {id: 3, name: 'User 3', age:24},
    {id: 4, name: 'User 4', age:100},
    {id: 5, name: 'User 5', age:90}
    ];
    
 function create(name, age){
        const id = user.lenght +1
        users.push({id, name: '', age: ''})
    
        return users[users.length-1];
    }
    
function deleteUser(id){
        const index = user.indexOf(user => users.id == id);
        users.slice(index, 1);
    }
    
    function update(id, age, name){
        const user = users.find(user => user.id == id);
        user.age = age;
        user.name = name;
        return user;
    }
    
    module.exports = {
        users,
        create,
        delete: deleteUser,
        update
    }