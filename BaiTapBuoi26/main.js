const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const orders = [];
let nextOrderId = 1;

const findProduct = (id) => products.find(p => p.id === id);
const findOrder = (id) => orders.find(o => o.id === id);


function createOrder(productId, orderQuantity) {
    if (productId == null || orderQuantity == null) {
        console.log("ProductId or quantity is null");
        return;
    }

    const product = findProduct(productId);
    if (!product) {
        console.log("Product not found");
        return;
    }

    if (product.remaining < orderQuantity) {
        console.log("Out of stock");
        return;
    }

    product.remaining -= orderQuantity;

    const order = {
        id: nextOrderId++,
        productId,
        quantity: orderQuantity
    };

    orders.push(order);
    return order;
}


function updateOrder(orderId, quantity) {
    const order = findOrder(orderId);
    if (!order) {
        console.log("Not found");
        return;
    }
    if (quantity <= 0) {
        console.log("Invalid quantity");
        return;
    }

    const product = findProduct(order.productId);
    const diff = quantity - order.quantity;

    if (diff > 0 && product.remaining < diff) {
        console.log("Out of stock");
        return;
    }

    product.remaining -= diff;
    order.quantity = quantity;
}


function deleteOrder(orderId) {
    const index = orders.findIndex(o => o.id === orderId);
    if (index === -1) {
        console.log("Not found");
        return;
    }

    const order = orders[index];
    const product = findProduct(order.productId);

    product.remaining += order.quantity;
    orders.splice(index, 1);
}

// SUCCESS
console.log("CREATE");
const order1 = createOrder(1, 5);
console.log("Orders:", orders);
console.log("Products:", products);

// PRODUCT NOT FOUND
createOrder(999, 2);

// OUT OF STOCK
updateOrder(order1.id, 50);

// SUCCESS
console.log("UPDATE");
updateOrder(order1.id, 2);
console.log("Orders:", orders);
console.log("Products:", products);

// INVALID QUANTITY
updateOrder(order1.id, -1);

// NOT FOUND
console.log("DELETE");
deleteOrder(999);

// SUCCESS
// deleteOrder(order1.id);


console.log("FINAL STATUS");
console.log("Products:", products);
console.log("Orders:", orders);

