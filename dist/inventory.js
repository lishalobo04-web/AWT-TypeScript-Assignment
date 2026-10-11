let productName = "Laptop";
let price = 55000;
let inStock = true;
let tags = ["Electronics", "Computers", "Laptop"];
let productId = 101;
function printProductInfo() {
    console.log("Product Name: " + productName);
    console.log("Price: ₹" + price);
    console.log("In Stock: " + inStock);
    console.log("Tags: " + tags.join(", "));
    console.log("Product ID: " + productId);
}
printProductInfo();
let productInfo = "Laptop";
productInfo = 55000; // Allowed with any
let productDescription = "Laptop";
// productDescription = 55000; 
// This would cause a TypeScript error.
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
console.log("Discounted price:", calculateDiscount(1000));
console.log("Discounted price:", calculateDiscount(1000, 20));
function applyBulkDiscount(prices, discountRate) {
    return prices.map((price) => {
        return price - (price * discountRate / 100);
    });
}
const priceList = [1000, 2000, 3000];
const discountedPrices = applyBulkDiscount(priceList, 10);
console.log("Bulk discounted prices:", discountedPrices);
function scopeExample() {
    let functionVariable = "Inside function";
    for (let i = 0; i < 3; i++) {
        let blockVariable = "Inside loop";
        console.log(blockVariable);
    }
    console.log(functionVariable);
    // console.log(blockVariable); // Error if uncommented
}
scopeExample();
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        inStock: true,
        tags: ["Electronics", "Computers"]
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 25000,
        inStock: true,
        tags: ["Electronics", "Mobile"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        inStock: false,
        tags: ["Audio", "Accessories"]
    },
    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        inStock: true
    }
];
function getAvailableProducts(products) {
    return products.filter(product => product.inStock);
}
console.log("Available Products:");
console.log(getAvailableProducts(products));
function applyDiscountToProducts(products) {
    const discountPercent = 10;
    return products.map((product) => ({
        ...product,
        price: product.price -
            (product.price * discountPercent / 100),
        discountPercent: discountPercent
    }));
}
const discountedProducts = applyDiscountToProducts(products);
console.log("Discounted Products:");
console.log(discountedProducts);
export {};
