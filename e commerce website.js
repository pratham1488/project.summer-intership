<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mahajan greens&co. - Sustainable E-commerce</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom styles */
        .hero-pattern {
            background-image: url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed98a450-096c-433f-8af3-d955d0322fb7.png');
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,100,0,0.1);
        }
        
        #cart-sidebar {
            transition: all 0.3s ease;
        }
        
        .smooth-transition {
            transition: all 0.3s ease;
        }
        
        /* Dropdown animation */
        .dropdown-content {
            display: none;
            position: absolute;
            animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
    </style>
</head>
<body class="bg-gray-50 font-sans">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="#" class="flex items-center">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c035ac6-6552-4823-b68f-8daff2c14816.png" alt="GreenVibe logo - a green leaf with circular background" class="h-8 w-8">
                        <span class="ml-2 text-xl font-bold text-green-700">GreenVibe</span>
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-700 hover:text-green-600">Home</a>
                    <div class="dropdown relative">
                        <button class="text-gray-700 hover:text-green-600">Categories</button>
                        <div class="dropdown-content absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-green-50">Organic Food</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-green-50">Eco Fashion</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-green-50">Sustainable Home</a>
                        </div>
                    </div>
                    <a href="#" class="text-gray-700 hover:text-green-600">About</a>
                    <a href="#" class="text-gray-700 hover:text-green-600">Contact</a>
                </div>
                <div class="flex items-center">
                    <button id="cart-btn" class="p-2 text-gray-700 hover:text-green-600 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span id="cart-counter" class="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </button>
                    <a href="#" class="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Login</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="hero-pattern bg-cover bg-center">
        <div class="bg-black bg-opacity-50">
            <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Sustainable Shopping Made Easy</h1>
                <p class="mt-6 max-w-lg mx-auto text-xl text-green-100">Discover eco-friendly products that are good for you and the planet.</p>
                <div class="mt-10">
                    <a href="#products" class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10">
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Featured Categories -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <a href="#" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4b54047-3ae1-4aa9-82fb-7b93c555970f.png" alt="Assortment of fresh organic fruits and vegetables arranged beautifully on a wooden table" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-medium text-gray-900">Organic Food</h3>
                </div>
            </a>
            <a href="#" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/befad02e-0ac4-4cc2-a0c1-118e8d6ff4f7.png" alt="Sustainable fashion items including organic cotton shirts and bamboo fiber dresses on display" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-medium text-gray-900">Eco Fashion</h3>
                </div>
            </a>
            <a href="#" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49266cf2-4d07-4aa2-86da-94b5ce91f016.png" alt="Eco-friendly home products including bamboo toothbrushes and reusable kitchen items" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-medium text-gray-900">Sustainable Home</h3>
                </div>
            </a>
            <a href="#" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a0efc3d8-8646-4068-a99c-045538b5b530.png" alt="Organic skincare products with botanical ingredients in sustainable packaging" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-medium text-gray-900">Natural Beauty</h3>
                </div>
            </a>
        </div>
    </div>

    <!-- Product Listing -->
    <div id="products" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900">Our Products</h2>
            <div>
                <select class="border border-gray-300 rounded-md p-2">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Most Popular</option>
                </select>
            </div>
        </div>
        <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <!-- Products will be dynamically inserted here -->
        </div>
    </div>

    <!-- Cart Sidebar -->
    <div id="cart-sidebar" class="fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg transform translate-x-full z-50 overflow-y-auto">
        <div class="p-4">
            <div class="flex justify-between items-center mb-6 border-b pb-4">
                <h2 class="text-xl font-bold">Your Cart</h2>
                <button id="close-cart" class="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/sv" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div id="cart-items" class="space-y-4">
                <!-- Cart items will be inserted here -->
            </div>
            <div id="cart-empty" class="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p class="mt-4 text-gray-500">Your cart is empty</p>
                <a href="#products" class="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Continue Shopping</a>
            </div>
            <div id="cart-summary" class="hidden mt-8 border-t pt-4">
                <div class="flex justify-between">
                    <span>Subtotal</span>
                    <span id="cart-subtotal">$0.00</span>
                </div>
                <div class="flex justify-between font-bold text-lg mt-2">
                    <span>Total</span>
                    <span id="cart-total">$0.00</span>
                </div>
                <button id="checkout-btn" class="w-full mt-6 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">Proceed to Checkout</button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-medium mb-4">GreenVibe</h3>
                    <p class="text-gray-300">Making sustainable shopping accessible to everyone.</p>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-4">Shop</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white">All Products</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">New Arrivals</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Best Sellers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-4">About</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white">Our Story</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Sustainability</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-4">Contact</h3>
                    <address class="text-gray-300 not-italic">
                        <p>123 Green Street</p>
                        <p>1488 sector 22b Chd </p>
                        <p>info@greenvibe.com</p>
                    </address>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p>© 2025 Mahajan greens. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Backend Simulation and Frontend Logic -->
    <script>
        // Product Database (Simulating Backend)
        const productsDB = [
            {
                id: 1,
                name: "Organic Cotton T-Shirt",
                price: 29.99,
                category: "fashion",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/02b0b354-0885-4eb1-9bda-f41734274acb.png",
                description: "100% organic cotton t-shirt, made with sustainable practices",
                stock: 10,
                alt: "White organic cotton t-shirt with GreenVibe logo, laid flat with natural fabric texture visible"
            },
            {
                id: 2,
                name: "Bamboo Toothbrush Set",
                price: 12.99,
                category: "home",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5957437a-73a5-40ff-9d53-f5a8613c3ff5.png",
                description: "Eco-friendly bamboo toothbrushes with biodegradable bristles",
                stock: 25,
                alt: "Set of 3 bamboo toothbrushes with different colored handles on a wooden surface"
            },
            {
                id: 3,
                name: "Reusable Stainless Steel Bottle",
                price: 24.99,
                category: "home",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a393d470-3e50-40f0-a8c4-2fbd819bfed2.png",
                description: "Double-walled insulated bottle keeps drinks hot or cold for hours",
                stock: 15,
                alt: "Modern stainless steel water bottle with matte finish and green accents"
            },
            {
                id: 4,
                name: "Organic Coffee Beans",
                price: 14.99,
                category: "food",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/10ef554b-9017-4fe4-a3ef-a9c15f39ba2d.png",
                description: "Fair trade, organic coffee beans from sustainable farms",
                stock: 8,
                alt: "Freshly roasted organic coffee beans spilling from a brown paper bag"
            },
            {
                id: 5,
                name: "Hemp Backpack",
                price: 49.99,
                category: "fashion",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e7dd4b8-bdfc-46b6-bd71-1135d9ac67ae.png",
                description: "Durable hemp fabric backpack with vegan leather accents",
                stock: 6,
                alt: "Contemporary hemp backpack with multiple compartments and earthy tones"
            },
            {
                id: 6,
                name: "Natural Lip Balm Set",
                price: 9.99,
                category: "beauty",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b24767b-7039-46ea-94d4-0a04adf00d00.png",
                description: "Three hydrating lip balms with essential oils and natural flavors",
                stock: 20,
                alt: "Set of three natural lip balms in compostable packaging on wooden background"
            },
            {
                id: 7,
                name: "Reusable Beeswax Wraps",
                price: 18.99,
                category: "home",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40f42b68-38df-4144-b74f-f9e9b63abec4.png",
                description: "Set of 3 organic cotton wraps coated with beeswax and tree resin",
                stock: 12,
                alt: "Colorful beeswax wraps rolled up and displayed on a kitchen counter"
            },
            {
                id: 8,
                name: "Organic Cotton Socks",
                price: 15.99,
                category: "fashion",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/279e33e2-4a70-4f86-92ee-7a8dd175102f.png",
                description: "Pack of 3 pairs of soft organic cotton socks with fun patterns",
                stock: 18,
                alt: "Assortment of colorful organic cotton socks folded neatly"
            }
        ];

        // Cart State (Simulating Frontend State)
        const cartState = {
            items: [],
            addToCart(productId) {
                const product = productsDB.find(p => p.id === productId);
                const existingItem = this.items.find(item => item.id === productId);
                
                if (existingItem) {
                    if (existingItem.quantity < product.stock) {
                        existingItem.quantity++;
                    } else {
                        alert(`Only ${product.stock} available`);
                        return;
                    }
                } else {
                    this.items.push({
                        ...product,
                        quantity: 1
                    });
                }
                
                this.saveCart();
                this.updateUI();
            },
            removeFromCart(productId) {
                this.items = this.items.filter(item => item.id !== productId);
                this.saveCart();
                this.updateUI();
            },
            updateQuantity(productId, newQuantity) {
                const product = this.items.find(item => item.id === productId);
                if (product) {
                    if (newQuantity > productsDB.find(p => p.id === productId).stock) {
                        alert(`Only ${productsDB.find(p => p.id === productId).stock} available`);
                        return;
                    }
                    if (newQuantity > 0) {
                        product.quantity = newQuantity;
                    } else {
                        this.removeFromCart(productId);
                    }
                }
                this.saveCart();
                this.updateUI();
            },
            getTotalItems() {
                return this.items.reduce((sum, item) => sum + item.quantity, 0);
            },
            getSubtotal() {
                return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            },
            saveCart() {
                localStorage.setItem('greenVibeCart', JSON.stringify(this.items));
            },
            loadCart() {
                const savedCart = localStorage.getItem('greenVibeCart');
                if (savedCart) {
                    this.items = JSON.parse(savedCart);
                }
                this.updateUI();
            },
            updateUI() {
                // Update cart counter
                document.getElementById('cart-counter').textContent = this.getTotalItems();
                
                // Update cart sidebar
                const cartItemsContainer = document.getElementById('cart-items');
                const emptyCart = document.getElementById('cart-empty');
                const cartSummary = document.getElementById('cart-summary');
                
                if (this.items.length === 0) {
                    cartItemsContainer.innerHTML = '';
                    emptyCart.classList.remove('hidden');
                    cartSummary.classList.add('hidden');
                } else {
                    emptyCart.classList.add('hidden');
                    cartSummary.classList.remove('hidden');
                    
                    cartItemsContainer.innerHTML = this.items.map(item => `
                        <div class="flex items-start border-b pb-4">
                            <img src="${item.image}" alt="${item.alt}" class="w-16 h-16 object-cover rounded mr-4">
                            <div class="flex-1">
                                <h3 class="font-medium">${item.name}</h3>
                                <p class="text-gray-600 text-sm">$${item.price.toFixed(2)}</p>
                                <div class="flex items-center mt-1">
                                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease" class="text-gray-500">−</button>
                                    <input type="number" value="${item.quantity}" min="1" max="${productsDB.find(p => p.id === item.id).stock}" 
                                        class="quantity-input mx-2 w-12 text-center border rounded" data-id="${item.id}">
                                    <button class="quantity-btn" data-id="${item.id}" data-action="increase" class="text-gray-500">+</button>
                                </div>
                            </div>
                            <button class="remove-btn text-red-500 hover:text-red-700" data-id="${item.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    `).join('');
                    
                    document.getElementById('cart-subtotal').textContent = `$${this.getSubtotal().toFixed(2)}`;
                    document.getElementById('cart-total').textContent = `$${this.getSubtotal().toFixed(2)}`;
                }
            }
        };

        
        document.addEventListener('DOMContentLoaded', function() {
            
            cartState.loadCart();
            
            const productGrid = document.getElementById('product-grid');
            productGrid.innerHTML = productsDB.map(product => `
                <div class="product-card bg-white rounded-lg shadow-md overflow-hidden relative smooth-transition">
                    <div class="relative">
                        <img src="${product.image}" alt="${product.alt}" class="w-full h-48 object-cover">
                        ${product.stock < 5 ? `<span class="absolute top-2 right-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Only ${product.stock} left</span>` : ''}
                    </div>
                    <div class="p-4">
                        <div class="flex justify-between items-start">
                            <h3 class="font-medium text-gray-900">${product.name}</h3>
                            <span class="text-green-600 font-semibold">$${product.price.toFixed(2)}</span>
                        </div>
                        <p class="text-gray-500 text-sm mt-1">${product.description}</p>
                        <button class="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 add-to-cart" data-id="${product.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
            
            
            document.getElementById('cart-btn').addEventListener('click', function() {
                document.getElementById('cart-sidebar').classList.remove('translate-x-full');
                document.getElementById('cart-sidebar').classList.add('translate-x-0');
            });
            
            document.getElementById('close-cart').addEventListener('click', function() {
                document.getElementById('cart-sidebar').classList.add('translate-x-full');
                document.getElementById('cart-sidebar').classList.remove('translate-x-0');
            });
            
            
            document.addEventListener('click', function(e) {
                // Add to cart button
                if (e.target.classList.contains('add-to-cart')) {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    cartState.addToCart(productId);
                    
                    
                    if (document.getElementById('cart-sidebar').classList.contains('translate-x-full')) {
                        document.getElementById('cart-sidebar').classList.remove('translate-x-full');
                        document.getElementById('cart-sidebar').classList.add('translate-x-0');
                    }
                }
                
                
                if (e.target.closest('.remove-btn')) {
                    const productId = parseInt(e.target.closest('.remove-btn').getAttribute('data-id'));
                    cartState.removeFromCart(productId);
                }
                
                
                if (e.target.classList.contains('quantity-btn')) {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    const action = e.target.getAttribute('data-action');
                    const input = e.target.closest('div').querySelector('.quantity-input');
                    
                    if (action === 'increase') {
                        input.value = parseInt(input.value) + 1;
                    } else if (action === 'decrease') {
                        input.value = parseInt(input.value) - 1;
                    }
                    
                    cartState.updateQuantity(productId, parseInt(input.value));
                }
                
               
                if (e.target.classList.contains('quantity-input')) {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    cartState.updateQuantity(productId, parseInt(e.target.value));
                }
            });
            
           ]
            document.getElementById('checkout-btn').addEventListener('click', function() {
                alert('Checkout functionality would be implemented in a real application with payment processing.');
            });
            
            
            document.querySelectorAll('select').forEach(select => {
                select.addEventListener('change', function() {
                    const sortBy = this.value;
                    let sortedProducts = [...productsDB];
                    
                    if (sortBy === 'Price: Low to High') {
                        sortedProducts.sort((a, b) => a.price - b.price);
                    } else if (sortBy === 'Price: High to Low') {
                        sortedProducts.sort((a, b) => b.price - a.price);
                    } else if (sortBy === 'Newest') {
                        // In a real app, you'd have a timestamp
                        sortedProducts.reverse();
                    } else if (sortBy === 'Most Popular') {
                        // Sort by stock (simulating popularity)
                        sortedProducts.sort((a, b) => a.stock - b.stock);
                    }
                    
                    productGrid.innerHTML = sortedProducts.map(product => `
                        <div class="product-card bg-white rounded-lg shadow-md overflow-hidden relative smooth-transition">
                            <div class="relative">
                                <img src="${product.image}" alt="${product.alt}" class="w-full h-48 object-cover">
                                ${product.stock < 5 ? `<span class="absolute top-2 right-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Only ${product.stock} left</span>` : ''}
                            </div>
                            <div class="p-4">
                                <div class="flex justify-between items-start">
                                    <h3 class="font-medium text-gray-900">${product.name}</h3>
                                    <span class="text-green-600 font-semibold">$${product.price.toFixed(2)}</span>
                                </div>
                                <p class="text-gray-500 text-sm mt-1">${product.description}</p>
                                <button class="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 add-to-cart" data-id="${product.id}">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    `).join('');
                });
            });
        });
    </script>
</body>
</html>

