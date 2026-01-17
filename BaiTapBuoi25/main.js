const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

function getTopRevenueProduct(products, orders) {
    let maxRevenue = 0;
    let topProduct = null;

    for (let i = 0; i < products.length; i++) {
        let revenue = 0;

        for (let j = 0; j < orders.length; j++) {
            for (let k = 0; k < orders[j].items.length; k++) {
                if (orders[j].items[k].productId === products[i].id) {
                    revenue += products[i].price * orders[j].items[k].quantity;
                }
            }
        }

        if (revenue > maxRevenue) {
            maxRevenue = revenue;
            topProduct = products[i];
        }
    }

    return topProduct;
}


console.log(getTopRevenueProduct(products, orders));

