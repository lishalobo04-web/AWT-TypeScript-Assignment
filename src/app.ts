
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}

let products: Product[] = [
    { id: 1, name: "Laptop", price: 55000, inStock: true, tags: ["Electronics"] },
    { id: 2, name: "Mobile Phone", price: 25000, inStock: true, tags: ["Mobile"] },
    { id: 3, name: "Headphones", price: 2000, inStock: false, tags: ["Audio"] },
    { id: 4, name: "Keyboard", price: 1500, inStock: true, tags: ["Accessories"] }
];

function getAvailableProducts(items: Product[]): Product[] {
    return items.filter(item => item.inStock);
}

function renderProducts(): void {
    const list = document.getElementById("productList")!;
    const search = (document.getElementById("searchInput") as HTMLInputElement).value.toLowerCase();
    const filter = (document.getElementById("stockFilter") as HTMLSelectElement).value;

    let displayed = products.filter(p => p.name.toLowerCase().includes(search));

    if (filter === "available") {
        displayed = getAvailableProducts(displayed);
    } else if (filter === "out") {
        displayed = displayed.filter(p => !p.inStock);
    }

    list.innerHTML = "";

    displayed.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";

        const title = document.createElement("h3");
        title.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = `Price: ₹${product.price.toLocaleString("en-IN")}`;

        const stock = document.createElement("p");
        stock.textContent = product.inStock ? "In Stock" : "Out of Stock";
        stock.className = product.inStock ? "available" : "unavailable";

        const tags = document.createElement("p");
        tags.textContent = `Tags: ${product.tags?.join(", ") ?? "None"}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            products = products.filter(p => p.id !== product.id);
            renderProducts();
        });

        card.append(title, price, stock, tags, deleteButton);
        list.appendChild(card);
    });

    document.getElementById("totalCount")!.textContent = String(products.length);
    document.getElementById("availableCount")!.textContent =
        String(getAvailableProducts(products).length);
}

document.getElementById("addForm")!.addEventListener("submit", event => {
    event.preventDefault();

    const nameInput = document.getElementById("productName") as HTMLInputElement;
    const priceInput = document.getElementById("productPrice") as HTMLInputElement;
    const stockInput = document.getElementById("productStock") as HTMLSelectElement;

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (!name || !Number.isFinite(price) || price <= 0) {
        alert("Enter a valid product name and price.");
        return;
    }

    products.push({
        id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
        name,
        price,
        inStock: stockInput.value === "yes"
    });

    nameInput.value = "";
    priceInput.value = "";
    renderProducts();
});

document.getElementById("searchInput")!.addEventListener("input", renderProducts);
document.getElementById("stockFilter")!.addEventListener("change", renderProducts);

document.getElementById("discountBtn")!.addEventListener("click", () => {
    products = products.map(p => ({
        ...p,
        price: Math.round(p.price * 0.9 * 100) / 100
    }));
    renderProducts();
});

renderProducts();
