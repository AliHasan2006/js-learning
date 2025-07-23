let data = "Secret Information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Now ${this.name}, you are accessing the college Website with the emailId ${this.email}...`);
        console.log("Data is loading...");
        console.log("Now, you can see the Data: " + data);
    }
}

class Admin extends User {
    constructor(name, email, passKey) {
        super(name, email);
        if (passKey === "") {
            console.log("Error: PassKey is empty. Access denied.");
            this.isAuthorized = false;
        } else {
            this.isAuthorized = true;
        }
    }

    editData() {
        if (this.isAuthorized) {
            console.log(`${this.name}, You can edit the data.`);
            console.log('Data is editing...');
            data = "Secret Information is Edited";
            console.log('Edited Data is: ' + data);
        } else {
            console.log(`${this.name}, you are not authorized to edit the data.`);
        }
    }
}

const user1 = new User("Ali", "ali123@gmail.com");
user1.viewData();

const admOfficer = new Admin("Rahul Sir", "rahul123@gmail.com", );
admOfficer.viewData();
admOfficer.editData();
