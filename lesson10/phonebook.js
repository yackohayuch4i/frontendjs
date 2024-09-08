let phonebook = {
    users: [
        {name: "Steve" , phone: "099-333-444-55" , email: "steve@gmail.com"},
        {name: "Vasilisa" , phone: "088-222-1212-66" , email: "helloworld@gmail.com"},
        {name: "Nana" , phone: "011-2323-44-5656" , email: "sgfan228@gmail.com"}
    ],

    findUser: function(name) {
        return this.users.find(user => user.name === name ) || "не знайдено"
    },
    addPhone: function(name , phone , email) {
        this.users.push ({name , phone , email});
    }
};

phonebook.addPhone ("Robert" , "014-555-9868-11" , "robertnovak@gmail.com");

console.log(phonebook.findUser("Robert"));
console.log(phonebook.findUser("Nana"));
