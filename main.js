 // Menu Data
        const menuItems = [
            {
                id: 1,
                name: "Blueberry Smoothie",
                price: 280,
                category: "cold",
                description: "Creamy blend of fresh blueberries, yogurt, and a touch of honey.",
                image: "smoothie.jpg",
            },
            {
                id: 2,
                name: "Iced Latte",
                price: 210,
                category: "cold",
                description: "Chilled espresso with milk over ice, lightly sweetened for a refreshing boost.",
                image: "icelatte.jpg",
            },
            {
                id: 3,
                name: "Mint Lemonade",
                price: 140,
                category: "cold",
                description: "Freshly squeezed lemons with mint leaves, ice-cold and revitalizing.",
                image: "mint.jpg",
            },
            {
                id: 4,
                name: "Oreo Milkshake",
                price: 200,
                category: "cold",
                description: "Rich chocolate milkshake blended with Oreo cookies for ultimate indulgence.",
                image: "oreo.jpg",
            },
            {
                id: 5,
                name: "Black Coffee",
                price: 100,
                category: "hot",
                description: "Pure, bold espresso served hot for a classic caffeine kick.",
                image: "black.jpg",
            },
            {
                id: 6,
                name: "Espresso",
                price: 165,
                category: "hot",
                description: "Intense, smooth shot of espresso to awaken your senses.",
                image: "espresso.jpg",
            },
            {
                id: 7,
                name: "Hot Chocolate",
                price: 220,
                category: "hot",
                description: "Velvety chocolate with steamed milk, topped with a hint of cocoa.",
                image: "hotchocolate.jpg",
            },
            {
                id: 8,
                name: "Tea",
                price: 75,
                category: "hot",
                description: "Classic brewed tea, served hot or iced, perfect anytime.",
                image: "tea.jpg",
            },
            {
                id: 9,
                name: "Cappuccino",
                price: 190,
                category: "hot",
                description: "Espresso with steamed milk and a thick layer of frothy foam.",
                image: "cap.jpg",
            },
            {
                id: 10,
                name: "Danish Pastry",
                price: 130,
                category: "pastries",
                description: "Sweet, layered pastry filled with fruit or custard for a delightful treat.",
                image: "danish.jpg",
            },
            {
                id: 11,
                name: "Hazelnut Cake",
                price: 230,
                category: "pastries",
                description: "Rich and moist hazelnut cake with a smooth chocolate glaze and crunchy hazelnut topping.",
                image: "hazlenut.jpg",
            },
             {
                id: 12,
                name: "Red Velvet Cake",
                price: 200,
                category: "pastries",
                description: "Moist, rich cake with a velvety texture and cream cheese frosting.",
                image: "red.jpg",
            },
             {
                id: 13,
                name: "Croissant",
                price: 180,
                category: "pastries",
                description: "Flaky, buttery, and golden-brown pastry perfect for breakfast or a light snack.",
                image: "croissant.jpg",
            },
             {
                id: 14,
                name: "Classic Chicken Burger",
                price: 350,
                category: "snacks",
                description: "Juicy chicken patty with melted cheese, fresh lettuce, tomato, and our signature sauce.",
                image: "burger.jpg",
            },
             {
                id: 15,
                name: "Veggie Burger",
                price: 300,
                category: "snacks",
                description: "Grilled vegetable patty with fresh greens, tomato, and creamy mayo on a soft bun.",
                image: "veg.jpg",
            },
             {
                id: 16,
                name: "Margherita Pizza",
                price: 420,
                category: "snacks",
                description: "Classic pizza with fresh tomato sauce, mozzarella cheese, and fragrant basil leaves.",
                image: "mrgherita.jpg",
            },
             {
                id: 17,
                name: "Pepperoni Pizza",
                price: 500,
                category: "snacks",
                description: "Loaded with spicy pepperoni slices, melted mozzarella, and zesty tomato sauce.",
                image: "peppernoi.jpg",
            },
             {
                id: 18,
                name: "Chicken Momo",
                price: 180,
                category: "snacks",
                description: "Steamed dumplings filled with seasoned chicken and herbs, served with spicy dipping sauce.",
                image: "chikenmomo.jpg",
             },
             {
                id: 19,
                name: "Veg Momo",
                price: 120,
                category: "snacks",
                description: "Steamed dumplings packed with fresh vegetables and aromatic spices, served with chili sauce.",
                image: "vegmomo.jpg",
             },
             {
                id: 20,
                name: "Fries Basket",
                price: 200,
                category: "snacks",
                description: "Crispy golden fries served with your choice of ketchup or cheesy dip.",
                image: "fries.jpg",
            },
        ];


// Cart functionality
let cart = [];
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeModal = document.querySelector('.close-modal');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.querySelector('.cart-count');
const menuGrid = document.getElementById('menuGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const proceedToCheckoutBtn = document.getElementById('proceedToCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const orderConfirmation = document.getElementById('orderConfirmation');
const backToCartBtn = document.getElementById('backToCart');
const placeOrderBtn = document.getElementById('placeOrder');
const newOrderBtn = document.getElementById('newOrder');
const orderSummary = document.getElementById('orderSummary');

// Mobile navigation elements
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

// Initialize the menu
function initializeMenu() {
    displayMenuItems(menuItems);
    
    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            filterMenuItems(category);
        });
    });
}

const orderNowBtn = document.getElementById('orderNowBtn');
orderNowBtn.addEventListener('click', () => {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
});


// Display menu items (Ratings removed)
function displayMenuItems(items) {
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.setAttribute('data-category', item.category);
        
        menuItemElement.innerHTML = `
            <div class="item-image" style="background-image: url('${item.image}')"></div>
            <div class="item-content">
                <div class="item-header">
                    <h3 class="item-title">${item.name}</h3>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                </div>
                <p class="item-description">${item.description}</p>
                <div class="item-footer">
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItemElement);
    });
    
    // Add to cart event
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Filter menu items
function filterMenuItems(category) {
    if (category === 'all') {
        displayMenuItems(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenuItems(filteredItems);
    }
}

// Cart functions, checkout, order confirmation, mobile nav remain unchanged...

// Reservation Form
const reservationForm = document.getElementById("reservationForm");
const reservationMessage = document.getElementById("reservationMessage");

if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("resName").value;
        const date = document.getElementById("resDate").value;
        const time = document.getElementById("resTime").value;

        reservationMessage.style.color = "green";
        reservationMessage.textContent =
            `Thank you ${name}! Your table has been reserved for ${date} at ${time}.`;

        reservationForm.reset();
    });
}
// Smooth scrolling for all internal links and buttons
document.querySelectorAll('a[href^="#"], button[data-scroll]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();

        let targetId = el.getAttribute('href') || el.getAttribute('data-scroll');
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile nav if open
        if (mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });
});


// ---------------------------
// Mobile / Hamburger Navigation
// ---------------------------

// Functions to open and close mobile nav
function openMobileNav() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    mobileNavToggle.querySelector('i').classList.remove('fa-bars');
    mobileNavToggle.querySelector('i').classList.add('fa-times');
}

function closeMobileNav() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    mobileNavToggle.querySelector('i').classList.remove('fa-times');
    mobileNavToggle.querySelector('i').classList.add('fa-bars');
}

// Toggle mobile menu on click
mobileNavToggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('active')) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
});

// Close menu if overlay is clicked
overlay.addEventListener('click', closeMobileNav);

// Close mobile menu when any link inside it is clicked
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// Initialize the application
initializeMenu();

