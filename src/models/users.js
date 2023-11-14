let users = [
    {
        id: '0',
        firstName: "Sanket",
        lastName: "Anand",
        email: "sanket.admin@xyz.com",
        role: 'admin',
        password: "test",
        contactNumber: "tst"
    },
    {
        id: '1',
        firstName: "Sanket",
        lastName: "Anand",
        role: 'sales',
        email: "sanket.nonadmin@xyz.com",
        password: "test",
        contactNumber: "tst"
    }
];

export default function returnUsers(){
    return users;
}

