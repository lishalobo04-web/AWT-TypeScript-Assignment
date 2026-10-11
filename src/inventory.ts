export {};
let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computers", "Laptop"];
let productId: number | string = 101;

function printProductInfo(): void {
    console.log("Product Name: " + productName);
    console.log("Price: ₹" + price);
    console.log("In Stock: " + inStock);
    console.log("Tags: " + tags.join(", "));
    console.log("Product ID: " + productId);
}

printProductInfo();

let productInfo: any = "Laptop";

productInfo = 55000; // Allowed with any

let productDescription: string = "Laptop";

// productDescription = 55000; 
// This would cause a TypeScript error.

function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

console.log("Discounted price:", calculateDiscount(1000));
console.log("Discounted price:", calculateDiscount(1000, 20));

function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {
    return prices.map((price: number): number => {
        return price - (price * discountRate / 100);
    });
}

const priceList: number[] = [1000, 2000, 3000];

const discountedPrices: number[] =
    applyBulkDiscount(priceList, 10);

console.log("Bulk discounted prices:", discountedPrices);

function scopeExample(): void {
    let functionVariable: string = "Inside function";

    for (let i: number = 0; i < 3; i++) {
        let blockVariable: string = "Inside loop";
        console.log(blockVariable);
    }

    console.log(functionVariable);

    // console.log(blockVariable); // Error if uncommented
}

scopeExample();

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

const products: Product[] = [
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

function getAvailableProducts(
    products: Product[]
): Product[] {
    return products.filter(product => product.inStock);
}

console.log("Available Products:");
console.log(getAvailableProducts(products));

interface DiscountedProduct extends Product {
    discountPercent: number;
}

function applyDiscountToProducts(
    products: Product[]
): DiscountedProduct[] {
    const discountPercent: number = 10;

    return products.map((product: Product): DiscountedProduct => ({
        ...product,
        price: product.price -
            (product.price * discountPercent / 100),
        discountPercent: discountPercent
    }));
}

const discountedProducts: DiscountedProduct[] =
    applyDiscountToProducts(products);

console.log("Discounted Products:");
console.log(discountedProducts);
