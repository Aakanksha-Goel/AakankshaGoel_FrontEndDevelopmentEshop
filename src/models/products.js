let products = [
    {
        id: '0',
        category: "Apparel",
        price: 10.99,
        manufacturer: "Soni",
        availableItems: 10,
        imageUrl: "fsd"
    },
    {
        id: '1',
        category: "Electronics",
        price: 10.99,
        manufacturer: "Apple",
        availableItems: 23,
        imageUrl: "fsd"
    },
    {
        id: '2',
        category: "Apparel",
        price: 10.99,
        manufacturer: "Apple",
        availableItems: 2,
        imageUrl: "fsd"
    },
    {
        id: '3',
        category: "Personal Care",
        price: 10.99,
        manufacturer: "Amazon",
        availableItems: 20,
        imageUrl: "fsd"
    },
    {
        id: '4',
        category: "Personal Care",
        price: 10.99,
        manufacturer: "Microsoft",
        availableItems: 11,
        imageUrl: "fsd"
    },
    {
        id: '5',
        category: "Electronics",
        price: 10.99,
        manufacturer: "MI",
        availableItems: 45,
        imageUrl: "fsd"
    },
    {
        id: '6',
        category: "Apparel",
        price: 10.99,
        manufacturer: "HP",
        availableItems: 50,
        imageUrl: "fsd"
    }
];

export default function addProducts(item){
    products.push(item);
}

export default function editProducts(item){
    let indx = -1;
    products.forEach((itemInstance, index) => {
        if(item.id == itemInstance.id){
            indx = index;
        }
    });
    if(indx != -1){
        products[indx] = item;
    }
}

export default function deleteProducts(item){
    let indx = -1;
    products.forEach((itemInstance, index) => {
        if(item.id == itemInstance.id){
            indx = index;
        }
    });
    if(indx != -1){
        products.splice(indx, 1);
    }
}
