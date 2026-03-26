document.addEventListener('DOMContentLoaded', () => {
    // Translation Data
    const translations = {
        fr: {
            nav_accueil: "Accueil",
            nav_menu: "Menu",
            nav_reservation: "Réservation",
            nav_order: "COMMANDER",
            hero_title: "Café Léa",
            hero_subtitle: "Restauration & Salon de thé",
            hero_reserve: "Réserver",
            hero_order: "COMMANDER",
            quote_text: "\"Une escale intemporelle au cœur de la ville, où chaque arôme raconte une histoire et chaque plat célèbre la tradition française.\"",
            featured_title: "Le Menu Complet",
            featured_discover: "Découvrir le menu",
            drinks_title: "La Carte des Boissons",
            drinks_specialty: "Cafés de Spécialité",
            drinks_cocktails: "Cocktails Création",
            find_us: "Nous trouver",
            footer_rights: "© 2026 Café Léa. Tous droits réservés.",
            menu_intro: "Une Cuisine d'Exception",
            cat_entrées: "Entrées",
            cat_plats: "Plats",
            cat_desserts: "Desserts",
            item_mer: "L’Assiette de la Mer",
            item_mer_desc: "Saumon gravlax, huîtres, crevettes, mayonnaise maison",
            item_velouté: "Velouté de Saison",
            item_velouté_desc: "Légumes du marché, croûtons à l'ail, filet d'huile de truffe",
            item_tartare: "Tartare de Bœuf",
            item_tartare_desc: "Coupé au couteau, câpres, échalotes, jaune d'œuf",
            item_filet: "Filet de Bœuf",
            item_filet_desc: "Sauce au poivre vert, purée de pommes de terre truffée, légumes glacés",
            item_saumon: "Pavé de Saumon",
            item_saumon_desc: "Rôti sur peau, fondue de poireaux, beurre blanc citronné",
            item_risotto: "Risotto aux Champignons",
            item_risotto_desc: "Crème de cèpes, parmesan affiné, persil plat",
            item_tatin: "Tarte Tatin",
            item_tatin_desc: "Pommes caramélisées, pâte feuilletée, crème fraîche épaisse",
            item_mousse: "Mousse au Chocolat",
            item_mousse_desc: "Chocolat noir 70%, éclats de fèves de cacao",
            item_gourmand: "Café Gourmand",
            item_gourmand_desc: "Espresso accompagné de trois mignardises du chef",
            order_btn: "Commander",
            order_added: "Ajouté !",
            cart_summary: "Votre commande :",
            cart_pay: "Payer",
            cart_title: "Ma Commande",
            total_label: "Total",
            cart_empty: "Votre panier est vide",
            res_title: "Réserver une Table",
            res_date: "Date",
            res_time: "Heure",
            res_guests: "Nombre de personnes",
            res_name: "Nom complet",
            res_email: "Email",
            res_phone: "Téléphone",
            res_btn: "Confirmer la Réservation",
            info_title: "Informations Pratiques",
            info_hours: "Horaires",
            info_mon_fri: "Lun - Ven : 08:00 - 22:00",
            info_sat_sun: "Sam - Dim : 09:00 - 23:00",
            info_address_title: "Adresse",
            info_address: "123 Rue de la Paix, 75002 Paris"
        },
        en: {
            nav_accueil: "Home",
            nav_menu: "Menu",
            nav_reservation: "Reservation",
            nav_order: "ORDER",
            hero_title: "Café Léa",
            hero_subtitle: "Restaurant & Tea Room",
            hero_reserve: "Book a Table",
            hero_order: "ORDER",
            quote_text: "\"A timeless stopover in the heart of the city, where each aroma tells a story and each dish celebrates French tradition.\"",
            featured_title: "The Full Menu",
            featured_discover: "Discover the Menu",
            drinks_title: "Drinks Menu",
            drinks_specialty: "Specialty Coffees",
            drinks_cocktails: "Signature Cocktails",
            find_us: "Find Us",
            footer_rights: "© 2026 Café Léa. All rights reserved.",
            menu_intro: "Exceptional Cuisine",
            cat_entrées: "Starters",
            cat_plats: "Main Courses",
            cat_desserts: "Desserts",
            item_mer: "Seafood Platter",
            item_mer_desc: "Gravlax salmon, oysters, shrimp, homemade mayonnaise",
            item_velouté: "Seasonal Velouté",
            item_velouté_desc: "Market vegetables, garlic croutons, truffle oil",
            item_tartare: "Beef Tartare",
            item_tartare_desc: "Hand-cut, capers, shallots, egg yolk",
            item_filet: "Beef Fillet",
            item_filet_desc: "Green pepper sauce, truffle mashed potatoes, glazed vegetables",
            item_saumon: "Salmon Fillet",
            item_saumon_desc: "Skin-roasted, leek fondue, lemon butter sauce",
            item_risotto: "Mushroom Risotto",
            item_risotto_desc: "Porcini cream, aged parmesan, flat parsley",
            item_tatin: "Tarte Tatin",
            item_tatin_desc: "Caramelized apples, puff pastry, thick double cream",
            item_mousse: "Chocolate Mousse",
            item_mousse_desc: "70% dark chocolate, cocoa nibs",
            item_gourmand: "Café Gourmand",
            item_gourmand_desc: "Espresso with three chef's mignardises",
            order_btn: "Order",
            order_added: "Added!",
            cart_summary: "Your order:",
            cart_pay: "Pay",
            cart_title: "My Order",
            total_label: "Total",
            cart_empty: "Your cart is empty",
            res_title: "Book a Table",
            res_date: "Date",
            res_time: "Time",
            res_guests: "Number of guests",
            res_name: "Full Name",
            res_email: "Email",
            res_phone: "Phone",
            res_btn: "Confirm Reservation",
            info_title: "Practical Information",
            info_hours: "Opening Hours",
            info_mon_fri: "Mon - Fri: 08:00 - 22:00",
            info_sat_sun: "Sat - Sun: 09:00 - 23:00",
            info_address_title: "Address",
            info_address: "123 Rue de la Paix, 75002 Paris"
        },
        es: {
            nav_accueil: "Inicio",
            nav_menu: "Carta",
            nav_reservation: "Reserva",
            nav_order: "PEDIR",
            hero_title: "Café Léa",
            hero_subtitle: "Restaurante y Salón de Té",
            hero_reserve: "Reservar",
            hero_order: "PEDIR",
            quote_text: "\"Una escala atemporal en el corazón de la ciudad, donde cada aroma cuenta una historia y cada plato celebra la tradición francesa.\"",
            featured_title: "Nuestra Carta",
            featured_discover: "Descubrir la Carta",
            drinks_title: "Carta de Bebidas",
            drinks_specialty: "Cafés de Especialidad",
            drinks_cocktails: "Cócteles de Autor",
            find_us: "Encuéntranos",
            footer_rights: "© 2026 Café Léa. Todos los derechos reservados.",
            menu_intro: "Cocina Excepcional",
            cat_entrées: "Entrantes",
            cat_plats: "Platos Principales",
            cat_desserts: "Postres",
            item_mer: "Plato de Marisco",
            item_mer_desc: "Salmón gravlax, ostras, gambas, mayonesa casera",
            item_velouté: "Velouté de Temporada",
            item_velouté_desc: "Verduras del mercado, picatostes de ajo, aceite de trufa",
            item_tartare: "Tartar de Ternera",
            item_tartare_desc: "Cortado a mano, alcaparras, chalotas, yema de huevo",
            item_filet: "Filete de Ternera",
            item_filet_desc: "Salsa de pimienta verde, puré de patata trufado, verduras glaseadas",
            item_saumon: "Lomo de Salmón",
            item_saumon_desc: "Asado con piel, fondue de puerros, salsa de mantequilla al limón",
            item_risotto: "Risotto de Setas",
            item_risotto_desc: "Crema de boletus, parmesano curado, perejil",
            item_tatin: "Tarta Tatin",
            item_tatin_desc: "Manzanas caramelizadas, hojaldre, crema espesa",
            item_mousse: "Mousse de Chocolate",
            item_mousse_desc: "Chocolate negro 70%, pepitas de cacao",
            item_gourmand: "Café Gourmand",
            item_gourmand_desc: "Espresso con tres mignardises del chef",
            order_btn: "Pedir",
            order_added: "¡Añadido!",
            cart_summary: "Tu pedido:",
            cart_pay: "Pagar",
            cart_title: "Mi Pedido",
            total_label: "Total",
            cart_empty: "Tu carrito está vacío",
            res_title: "Reservar una Mesa",
            res_date: "Fecha",
            res_time: "Hora",
            res_guests: "Número de personas",
            res_name: "Nombre completo",
            res_email: "Correo electrónico",
            res_phone: "Teléfono",
            res_btn: "Confirmar Reserva",
            info_title: "Información Práctica",
            info_hours: "Horario",
            info_mon_fri: "Lun - Vie: 08:00 - 22:00",
            info_sat_sun: "Sáb - Dom: 09:00 - 23:00",
            info_address_title: "Dirección",
            info_address: "123 Rue de la Paix, 75002 Paris"
        },
        it: {
            nav_accueil: "Home",
            nav_menu: "Menu",
            nav_reservation: "Prenotazione",
            nav_order: "ORDINA",
            hero_title: "Café Léa",
            hero_subtitle: "Ristorante e Sala da Tè",
            hero_reserve: "Prenota",
            hero_order: "ORDINA",
            quote_text: "\"Una sosta senza tempo nel cuore della città, dove ogni aroma racconta una storia e ogni piatto celebra la traditione francese.\"",
            featured_title: "Il Menu Completo",
            featured_discover: "Scopri il Menu",
            drinks_title: "Carta delle Bevande",
            drinks_specialty: "Caffè Speciali",
            drinks_cocktails: "Cocktail d'Autore",
            find_us: "Trovaci",
            footer_rights: "© 2026 Café Léa. Tutti i diritti riservati.",
            menu_intro: "Cucina d'Eccellenza",
            cat_entrées: "Antipasti",
            cat_plats: "Piatti Principali",
            cat_desserts: "Dolci",
            item_mer: "Piatto di Mare",
            item_mer_desc: "Salmone gravlax, ostriche, gamberi, maionese fatta in casa",
            item_velouté: "Vellutata di Stagione",
            item_velouté_desc: "Verdure del mercato, crostini all'aglio, olio al tartufo",
            item_tartare: "Tartara di Manzo",
            item_tartare_desc: "Tagliata al coltello, capperi, scalogno, tuorlo d'uovo",
            item_filet: "Filetto di Manzo",
            item_filet_desc: "Salsa al pepe verde, purè di patate al tartufo, verdure glassate",
            item_saumon: "Trancio di Salmone",
            item_saumon_desc: "Arrostito sulla pelle, fonduta di porri, salsa al burro e limone",
            item_risotto: "Risotto ai Funghi",
            item_risotto_desc: "Crema di porcini, parmigiano stagionato, prezzemolo",
            item_tatin: "Tarte Tatin",
            item_tatin_desc: "Mele caramellate, pasta sfoglia, panna densa",
            item_mousse: "Mousse al Cioccolato",
            item_mousse_desc: "Cioccolato fondente 70%, granella di cacao",
            item_gourmand: "Café Gourmand",
            item_gourmand_desc: "Espresso con tre mignardises dello chef",
            order_btn: "Ordina",
            order_added: "Aggiunto!",
            cart_summary: "Il tuo ordine:",
            cart_pay: "Paga",
            cart_title: "Il Mio Ordine",
            total_label: "Total",
            cart_empty: "Il tuo carrello è vuoto",
            res_title: "Prenota un Tavolo",
            res_date: "Data",
            res_time: "Ora",
            res_guests: "Numero di persone",
            res_name: "Nome completo",
            res_email: "Email",
            res_phone: "Telefono",
            res_btn: "Conferma Prenotazione",
            info_title: "Informazioni Pratiche",
            info_hours: "Orari",
            info_mon_fri: "Lun - Ven: 08:00 - 22:00",
            info_sat_sun: "Sab - Dom: 09:00 - 23:00",
            info_address_title: "Indirizzo",
            info_address: "123 Rue de la Paix, 75002 Paris"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('cafe_lea_lang', lang);
        document.documentElement.lang = lang;

        // Refresh cart modal strings
        renderCartModal();
    }

    // Initial language
    const savedLang = localStorage.getItem('cafe_lea_lang') || 'fr';
    updateLanguage(savedLang);

    // Lang Switcher Logic
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    const header = document.getElementById('main-header');

    // Navbar scroll effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Shopping Cart State
    let cart = JSON.parse(localStorage.getItem('cafe_lea_cart')) || [];
    const cartFloating = document.getElementById('cart-floating');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const modalOverlay = document.getElementById('cart-modal-overlay');
    const cartItemsList = document.getElementById('cart-items-list');
    const modalTotalEl = document.getElementById('modal-total');

    function saveCart() {
        localStorage.setItem('cafe_lea_cart', JSON.stringify(cart));
        updateCartUI();
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        if (cartCountEl) cartCountEl.textContent = totalItems;
        if (cartTotalEl) cartTotalEl.textContent = totalPrice.toFixed(2) + '€';
        if (modalTotalEl) modalTotalEl.textContent = totalPrice.toFixed(2) + '€';

        if (totalItems > 0) {
            if (cartFloating) cartFloating.classList.add('active');
        } else {
            if (cartFloating) cartFloating.classList.remove('active');
        }

        renderCartModal();
    }

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price: parseFloat(price), quantity: 1 });
        }
        saveCart();
    }

    function updateQuantity(name, delta) {
        const item = cart.find(item => item.name === name);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.name !== name);
            }
        } else if (delta > 0) {
            // fallback: find the price from a button if we didn't add it yet
            const btn = document.querySelector(`.add-to-cart[data-name="${name}"]`);
            if(btn) {
                addToCart(name, btn.getAttribute('data-price'));
            }
        }
        saveCart();
    }

    function renderCartModal() {
        if (!cartItemsList) return;

        const currentLang = localStorage.getItem('cafe_lea_lang') || 'fr';

        if (cart.length === 0) {
            cartItemsList.innerHTML = `<p style="padding: 2rem; text-align: center; opacity: 0.6;" data-i18n="cart_empty">${translations[currentLang].cart_empty}</p>`;
            return;
        }

        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item-row">
                <div class="cart-item-info">
                    <h4>${translations[currentLang]?.[item.name] || item.name.replace(/_/g, ' ')}</h4>
                    <p class="cart-item-price">${item.price.toFixed(2)}€</p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="window.updateCartQty('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="window.updateCartQty('${item.name}', 1)">+</button>
                </div>
            </div>
        `).join('');
    }

    function updatePageQtyCounters() {
        // Sync local page counters (e.g. qty-display id="qty-soupe_oignon")
        document.querySelectorAll('.qty-display').forEach(display => {
            const itemName = display.id.replace('qty-', '');
            const cartItem = cart.find(i => i.name === itemName);
            display.textContent = cartItem ? cartItem.quantity : 0;
        });

        // Sync sticky cart bar
        const stickyBar = document.getElementById('cart-sticky-bar');
        if (stickyBar) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            document.getElementById('sticky-count').textContent = totalItems;
            document.getElementById('sticky-total').textContent = totalPrice.toFixed(2) + '€';
            
            if (totalItems > 0) {
                stickyBar.classList.add('visible');
            } else {
                stickyBar.classList.remove('visible');
            }
        }
    }

    // Override saveCart locally to include counters update
    const originalSaveCart = saveCart;
    saveCart = () => {
        originalSaveCart();
        updatePageQtyCounters();
    };

    // Expose quantity update function to global scope
    window.updateCartQty = (name, delta) => {
        updateQuantity(name, delta);
    };

    function openModal() {
        if (modalOverlay) modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Listeners for +/- buttons in menu / commander grids
    document.querySelectorAll('.qty-btn-menu').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemName = btn.getAttribute('data-item');
            const action = btn.getAttribute('data-action');
            if(action === 'plus') updateCartQty(itemName, 1);
            if(action === 'minus') updateCartQty(itemName, -1);
        });
    });

    // Event Listeners for Adding
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            addToCart(name, price);

            // Visual feedback
            const currentLang = localStorage.getItem('cafe_lea_lang') || 'fr';
            const originalText = "AJOUTER";
            btn.textContent = "✓";

            setTimeout(() => {
                btn.textContent = originalText;
            }, 1000);
        });
    });

    // Initial check
    updateCartUI();
    updatePageQtyCounters();

    // Header order button & Floating cart summary -> Open Modal
    const openCartTrigger = document.querySelectorAll('.btn-order, #cart-floating');
    openCartTrigger.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            // If it's the hero order button, it usually links to menu page.
            // But if we are on menu page, or if it's the nav one, we open modal.
            if (trigger.tagName === 'A' && trigger.getAttribute('href') !== '#') return;

            e.preventDefault();
            e.stopPropagation();
            openModal();
        });
    });

    const closeCartBtn = document.getElementById('close-cart-btn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // Initial check
    updateCartUI();

    // Reveal animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- REVIEWS SYSTEM ---
    const defaultReviews = [
        { name: "Sophie Martin", rating: 5, date: "15 Mars 2026", text: "Le meilleur café de Paris. Une ambiance incroyable et des pâtisseries à tomber !" },
        { name: "Julien Dubois", rating: 4, date: "10 Mars 2026", text: "Très belle découverte. Le service est rapide et le pavé de saumon était parfait. Je recommande vivement." },
        { name: "Emma Leclerc", rating: 5, date: "2 Mars 2026", text: "Endroit très charmant pour se détendre l'après-midi. La sélection de thés est superbe." }
    ];

    let reviews = JSON.parse(localStorage.getItem('cafe_lea_reviews')) || defaultReviews;
    const reviewsGrid = document.getElementById('reviews-grid');
    
    function renderReviews() {
        if (!reviewsGrid) return;
        reviewsGrid.innerHTML = reviews.map(review => {
            const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            return `
                <div class="review-card reveal">
                    <div class="review-card-header">
                        <span class="review-author">${review.name}</span>
                        <span class="review-date">${review.date}</span>
                    </div>
                    <div class="review-stars">${stars}</div>
                    <p class="review-text">"${review.text}"</p>
                </div>
            `;
        }).join('');
        
        // Re-trigger reveal animation for newly added cards
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
    
    // Initial render
    renderReviews();

    // Star rating input logic
    const starsInput = document.querySelectorAll('.star-rating-input .star');
    const ratingInput = document.getElementById('review-rating');
    let currentRating = 0;

    if (starsInput.length > 0) {
        starsInput.forEach(star => {
            star.addEventListener('mouseover', function() {
                const val = this.getAttribute('data-value');
                highlightStars(val);
            });
            star.addEventListener('mouseout', function() {
                highlightStars(currentRating);
            });
            star.addEventListener('click', function() {
                currentRating = this.getAttribute('data-value');
                ratingInput.value = currentRating;
                highlightStars(currentRating);
            });
        });
    }

    function highlightStars(value) {
        starsInput.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Review Form Submission
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('review-name').value;
            const text = document.getElementById('review-comment').value;
            const rating = parseInt(ratingInput.value, 10);

            if (rating === 0) {
                alert('Veuillez sélectionner une note avec les étoiles.');
                return;
            }

            const today = new Date();
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const dateStr = today.toLocaleDateString('fr-FR', options);

            const newReview = { name, rating, date: dateStr, text };
            reviews.unshift(newReview); // Add to top
            
            // Save & update UI
            localStorage.setItem('cafe_lea_reviews', JSON.stringify(reviews));
            renderReviews();

            // Reset form
            reviewForm.reset();
            currentRating = 0;
            ratingInput.value = 0;
            highlightStars(0);
            alert('Merci pour votre avis !');
        });
    }
});
