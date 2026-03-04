const products = [
    // ── Shirts ──
    {
        id: 1,
        name: "White Shirt",
        price: 1700,
        category: "new",
        type: "shirt",
        image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        id: 2,
        name: "Black Shirt",
        price: 1500,
        category: "new",
        type: "shirt",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 3,
        name: "Red Shirt",
        price: 1600,
        category: "wanted",
        type: "shirt",
        image: "https://plus.unsplash.com/premium_photo-1697876203137-3a87c8f066c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
    },
    {
        id: 4,
        name: "Blue Shirt",
        price: 2000,
        category: "wanted",
        type: "shirt",
        image: "https://images.unsplash.com/photo-1604006853105-d44ea6e146ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJsdWUlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 5,
        name: "Gray Shirt",
        price: 1300,
        category: "new",
        type: "shirt",
        image: "https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGdyYXklMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 6,
        name: "Green Shirt",
        price: 1600,
        category: "new",
        type: "shirt",
        image: "https://plus.unsplash.com/premium_photo-1755534537506-5528462e4e1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVuJTIwVCUyMHNoaXJ0fGVufDB8fDB8fHww"
    },

    // ── Hoodies ──
    {
        id: 7,
        name: "Classic Black Hoodie",
        price: 2500,
        category: "wanted",
        type: "hoodie",
        image: "https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9vZGllc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 8,
        name: "Gray Zip Hoodie",
        price: 2800,
        category: "trending",
        type: "hoodie",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fHww"
    },
    {
        id: 9,
        name: "White Oversized Hoodie",
        price: 2600,
        category: "new",
        type: "hoodie",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9vZGllfGVufDB8fDB8fHww"
    },

    // ── Jerseys ──
    {
        id: 10,
        name: "Football Jersey",
        price: 1900,
        category: "wanted",
        type: "jersey",
        image: "https://images.unsplash.com/photo-1577212017184-80cc0da11082?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBqZXJzZXl8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 11,
        name: "Basketball Jersey",
        price: 2200,
        category: "trending",
        type: "jersey",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbCUyMGplcnNleXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 12,
        name: "Cricket Jersey",
        price: 1800,
        category: "new",
        type: "jersey",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D"
    },

    // ── Jackets ──
    {
        id: 13,
        name: "Leather Jacket",
        price: 4500,
        category: "exclusive",
        type: "jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 14,
        name: "Denim Jacket",
        price: 3200,
        category: "trending",
        type: "jacket",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 15,
        name: "Bomber Jacket",
        price: 3800,
        category: "wanted",
        type: "jacket",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fHww"
    },
    {
        id: 16,
        name: "Windbreaker",
        price: 2900,
        category: "new",
        type: "jacket",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZGJyZWFrZXJ8ZW58MHx8MHx8fDA%3D"
    },

    // ── Pants ──
    {
        id: 17,
        name: "Black Slim Jeans",
        price: 2400,
        category: "wanted",
        type: "pants",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 18,
        name: "Cargo Pants",
        price: 2200,
        category: "trending",
        type: "pants",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZ28lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 19,
        name: "Chino Trousers",
        price: 2000,
        category: "new",
        type: "pants",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 20,
        name: "Jogger Pants",
        price: 1800,
        category: "sale",
        type: "pants",
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9nZ2VyJTIwcGFudHN8ZW58MHx8MHx8fDA%3D"
    },

    // ── Dresses ──
    {
        id: 21,
        name: "Floral Summer Dress",
        price: 2800,
        category: "new",
        type: "dress",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 22,
        name: "Elegant Evening Dress",
        price: 4200,
        category: "exclusive",
        type: "dress",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbmluZyUyMGRyZXNzfGVufDB8fDB8fHww"
    },
    {
        id: 23,
        name: "Casual Midi Dress",
        price: 2500,
        category: "trending",
        type: "dress",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 24,
        name: "Bohemian Maxi Dress",
        price: 3100,
        category: "wanted",
        type: "dress",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3N8ZW58MHx8MHx8fDA%3D"
    },

    // ── Sneakers ──
    {
        id: 25,
        name: "White Classic Sneakers",
        price: 3500,
        category: "trending",
        type: "sneakers",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 26,
        name: "Running Sneakers",
        price: 4000,
        category: "new",
        type: "sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 27,
        name: "High-Top Sneakers",
        price: 3800,
        category: "exclusive",
        type: "sneakers",
        image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 28,
        name: "Casual Slip-Ons",
        price: 2200,
        category: "sale",
        type: "sneakers",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    },

    // ── Accessories ──
    {
        id: 29,
        name: "Leather Watch",
        price: 5500,
        category: "exclusive",
        type: "accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 30,
        name: "Sunglasses",
        price: 1800,
        category: "trending",
        type: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 31,
        name: "Canvas Backpack",
        price: 2400,
        category: "new",
        type: "accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 32,
        name: "Leather Belt",
        price: 1200,
        category: "sale",
        type: "accessories",
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsdHxlbnwwfHwwfHx8MA%3D%3D"
    }
];
