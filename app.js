const platformMenuData = {
    burgers: [
        { id: 'b_01', name: 'Aloo Tikki Patty Burger', price: 70.00, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_02', name: 'Spicy Crunchy Veg Patty Burger', price: 75.00, img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_03', name: 'Crispy Plant-Based Patty Burger', price: 80.00, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_04', name: 'Flame Grilled Paneer Slab Burger', price: 85.00, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_05', name: 'Classic Steamed Egg Disk Burger', price: 60.00, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_06', name: 'Crispy Chicken Filet Burger', price: 90.00, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_07', name: 'Flame Grilled Chicken Patty Burger', price: 110.00, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_08', name: 'Fiery Shredded Chicken Patty Burger', price: 105.00, img: 'https://images.unsplash.com/photo-1534790566985-aae57c5f7982?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_09', name: 'Tandoori Smoked Chicken Melt Burger', price: 110.00, img: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_10', name: 'Premium Grilled Mutton Patty Burger', price: 140.00, img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=300&auto=format&fit=crop&q=80' },
        { id: 'b_11', name: 'Double Smoked Mutton Chop Burger', price: 160.00, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&auto=format&fit=crop&q=80' }
    ],
    sides: [
        { id: 's_01', name: 'Fries', price: 60.00, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=80' },
        { id: 's_02', name: 'Peri Peri Fries', price: 80.00, img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&auto=format&fit=crop&q=80' },
        { id: 's_03', name: 'Cheese Loaded Fries', price: 110.00, img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300&auto=format&fit=crop&q=80' }
    ],
    beverages: [
        { id: 'v_01', name: 'Coke', price: 40.00, img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&auto=format&fit=crop&q=80' },
        { id: 'v_02', name: 'Sprite', price: 40.00, img: 'https://images.unsplash.com/photo-1625772290748-160b63e0b5ef?w=300&auto=format&fit=crop&q=80' },
        { id: 'v_03', name: 'Fanta', price: 40.00, img: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=300&auto=format&fit=crop&q=80' },
        { id: 'v_04', name: 'Pepsi', price: 40.00, img: 'https://images.unsplash.com/photo-1546695259-ad30ff3fd643?w=300&auto=format&fit=crop&q=80' }
    ]
};

const customBurgerIngredients = {
    patties: [
        { id: 'cp_01', name: 'Aloo Tikki Patty', price: 40.00, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_02', name: 'Spicy Crunchy Veg Patty', price: 45.00, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_03', name: 'Crispy Plant-Based Patty', price: 50.00, img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_04', name: 'Flame Grilled Paneer Slab', price: 55.00, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_05', name: 'Classic Steamed Egg Disk', price: 30.00, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_06', name: 'Crispy Chicken Filet', price: 60.00, img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_07', name: 'Flame Grilled Chicken Patty', price: 70.00, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_08', name: 'Fiery Shredded Chicken Patty', price: 75.00, img: 'https://images.unsplash.com/photo-1534790566985-aae57c5f7982?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_09', name: 'Tandoori Smoked Chicken Melt', price: 80.00, img: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_10', name: 'Premium Grilled Mutton Patty', price: 110.00, img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_11', name: 'Double Smoked Mutton Chop', price: 130.00, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=80' },
        { id: 'cp_onion', name: 'Fresh Sliced Onions', price: 15.00, img: 'https://images.unsplash.com/photo-1508747703725-71977713d540?w=300&auto=format&fit=crop&q=80' }
    ],
    toppings: [
        { id: 'ct_01', name: 'Cheese slice', price: 25.00, img: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=300&auto=format&fit=crop&q=80' },
        { id: 'ct_02', name: 'Tomatoes rounds', price: 15.00, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&auto=format&fit=crop&q=80' },
        { id: 'ct_03', name: 'Lettuce leaves', price: 10.00, img: 'https://images.unsplash.com/photo-1556781753-b2a59f9e7f90?w=300&auto=format&fit=crop&q=80' }
    ]
};

let activeMenuTab = 'burgers';
let consumerCart = []; 
let activeCustomerName = ""; 
let activeCustomBuildRecipe = [];

const initializePlatform = () => {
    if (document.getElementById('dynamic-menu-injector-target')) {
        renderModernMenuGrid();
        renderCustomizerAssemblyStation();
        renderChalkBoardMenuPrices();
        recalculateBillingUI();
    }
    syncLiveOrderQueue();
    setInterval(syncLiveOrderQueue, 4000); 
};

const openCartOverlayDrawer = () => {
    document.getElementById('cart-drawer-node').classList.add('drawer-visible');
    document.getElementById('cart-backdrop-node').classList.add('active');
};

const closeCartOverlayDrawer = () => {
    document.getElementById('cart-drawer-node').classList.remove('drawer-visible');
    document.getElementById('cart-backdrop-node').classList.remove('active');
};

const switchInterfaceSection = (sectionTarget) => {
    const shopView = document.getElementById('portal-view-shop-grid');
    const customizerView = document.getElementById('portal-view-customizer-grid');
    const historyView = document.getElementById('portal-view-history-grid');
    
    const btnShop = document.getElementById('nav-btn-shop');
    const btnCustomizer = document.getElementById('nav-btn-customizer');
    const btnHistory = document.getElementById('nav-btn-history');
    const floatingBtn = document.getElementById('floating-basket-trigger');

    if (!shopView || !customizerView || !historyView) return;

    shopView.style.display = 'none';
    customizerView.style.display = 'none';
    historyView.style.display = 'none';
    
    btnShop.classList.remove('active');
    btnCustomizer.classList.remove('active');
    btnHistory.classList.remove('active');

    if (sectionTarget === 'shop') {
        shopView.style.display = 'grid';
        btnShop.classList.add('active');
        floatingBtn.style.display = 'flex';
    } else if (sectionTarget === 'customizer') {
        customizerView.style.display = 'block';
        btnCustomizer.classList.add('active');
        floatingBtn.style.display = 'flex';
    } else if (sectionTarget === 'history') {
        historyView.style.display = 'block';
        btnHistory.classList.add('active');
        floatingBtn.style.display = 'none';
        closeCartOverlayDrawer();
        syncLiveOrderQueue();
    }
};

const toggleThemeSystem = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const label = document.getElementById('theme-mode-label');
    if (!isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (label) label.innerText = "Dark Mode Active";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (label) label.innerText = "Light Mode Active";
    }
};

const switchMenuTab = (event, categoryKey) => {
    activeMenuTab = categoryKey;
    const pills = document.querySelectorAll('.tab-pill');
    pills.forEach(p => p.classList.remove('active'));
    const title = document.getElementById('panel-category-title');
    if(categoryKey === 'burgers' && title) title.innerText = "Burgers";
    if(categoryKey === 'sides' && title) title.innerText = "Sides & Fries";
    if(categoryKey === 'beverages' && title) title.innerText = "Beverages";
    if (event && event.target) event.target.classList.add('active');
    renderModernMenuGrid();
};

const renderModernMenuGrid = () => {
    const targetGrid = document.getElementById('dynamic-menu-injector-target');
    if (!targetGrid) return;
    targetGrid.innerHTML = '';
    platformMenuData[activeMenuTab].forEach(item => {
        const row = document.createElement('div');
        row.className = 'menu-item-row';
        row.innerHTML = `
            <div class="menu-item-left-block">
                <img src="${item.img}" class="menu-item-pic-frame" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <span class="item-price-tag">₹${item.price.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <button class="btn-action-main" onclick="pushItemToCart('${item.id}', '${item.name}', ${item.price}, '${activeMenuTab}')">+ ADD</button>
            </div>
        `;
        targetGrid.appendChild(row);
    });
};

const renderChalkBoardMenuPrices = () => {
    const target = document.getElementById('chalk-board-prices-injector');
    if(!target) return;
    target.innerHTML = `<div class="chalk-menu-line-row"><span>Whole wheat bun</span><strong>30</strong></div>`;
    customBurgerIngredients.patties.slice(0, 3).forEach(p => {
        target.innerHTML += `<div class="chalk-menu-line-row"><span>${p.name}</span><strong>${p.price}</strong></div>`;
    });
    customBurgerIngredients.toppings.forEach(t => {
        target.innerHTML += `<div class="chalk-menu-line-row"><span>${t.name}</span><strong>${t.price}</strong></div>`;
    });
};

const renderCustomizerAssemblyStation = () => {
    const pattiesBox = document.getElementById('customizer-patties-root');
    const toppingsBox = document.getElementById('customizer-toppings-root');
    if(!pattiesBox || !toppingsBox) return;

    pattiesBox.innerHTML = '';
    toppingsBox.innerHTML = '';

    customBurgerIngredients.patties.forEach(patty => {
        const div = document.createElement('div');
        div.className = 'menu-item-row';
        const activeCount = activeCustomBuildRecipe.filter(i => i.id === patty.id).length;
        div.innerHTML = `
            <div class="menu-item-left-block">
                <img src="${patty.img}" class="menu-item-pic-frame" alt="${patty.name}">
                <div class="item-details" style="color:white;">
                    <span style="font-weight:700;">${patty.name}</span><br>
                    <small style="color:#ffcc00; font-weight:700;">₹${patty.price.toFixed(2)}</small>
                </div>
            </div>
            <div class="inline-qty-container" style="min-width: 80px;">
                <button class="math-counter-btn" onclick="removeComponentFromRecipe('${patty.id}')">&#x2212;</button>
                <span class="qty-counter-val" style="color: #333;">${activeCount}</span>
                <button class="math-counter-btn" onclick="addComponentToRecipe('${patty.id}', 'patty')">+</button>
            </div>
        `;
        pattiesBox.appendChild(div);
    });

    customBurgerIngredients.toppings.forEach(top => {
        const div = document.createElement('div');
        div.className = 'menu-item-row';
        const activeCount = activeCustomBuildRecipe.filter(i => i.id === top.id).length;
        div.innerHTML = `
            <div class="menu-item-left-block">
                <img src="${top.img}" class="menu-item-pic-frame" alt="${top.name}">
                <div class="item-details" style="color:white;">
                    <span style="font-weight:700;">${top.name}</span><br>
                    <small style="color:#ffcc00; font-weight:700;">₹${top.price.toFixed(2)}</small>
                </div>
            </div>
            <div class="inline-qty-container" style="min-width: 80px;">
                <button class="math-counter-btn" onclick="removeComponentFromRecipe('${top.id}')">&#x2212;</button>
                <span class="qty-counter-val" style="color: #333;">${activeCount}</span>
                <button class="math-counter-btn" onclick="addComponentToRecipe('${top.id}', 'topping')">+</button>
            </div>
        `;
        toppingsBox.appendChild(div);
    });

    const checkTarget = document.getElementById('reference-live-checklist-target');
    if (!checkTarget) return;
    checkTarget.innerHTML = '';
    if(activeCustomBuildRecipe.length === 0){
        checkTarget.innerHTML = '<span style="font-size:12px;color:#999;">Select items...</span>';
    } else {
        activeCustomBuildRecipe.forEach(i => {
            checkTarget.innerHTML += `<div class="reference-check-item-node"><span class="checked-mark">✔</span> ${i.name}</div>`;
        });
    }

    const baseBunCost = 30.00;
    const recipeSub = activeCustomBuildRecipe.reduce((s, i) => s + i.price, 0);
    const label = document.getElementById('customizer-running-price-label');
    if (label) label.innerText = (baseBunCost + recipeSub).toFixed(0);
};

const addComponentToRecipe = (id, type) => {
    let item = null;
    if(type === 'patty') item = customBurgerIngredients.patties.find(p => p.id === id);
    if(type === 'topping') item = customBurgerIngredients.toppings.find(t => t.id === id);
    if (!item) return;

    if (type === 'patty' && id !== 'cp_onion') {
        const currentPattyCount = activeCustomBuildRecipe.filter(i => i.id.startsWith('cp_') && i.id !== 'cp_onion').length;
        if (currentPattyCount >= 3) {
            alert("Customizer Limit Restriction: You cannot include more than 3 patties in your custom burger.");
            return;
        }
    }
    activeCustomBuildRecipe.push(item);
    renderCustomizerAssemblyStation();
};

const removeComponentFromRecipe = (id) => {
    const idx = activeCustomBuildRecipe.map(i => i.id).lastIndexOf(id);
    if(idx !== -1) activeCustomBuildRecipe.splice(idx, 1);
    renderCustomizerAssemblyStation();
};

const pushCustomBurgerToCart = () => {
    if(activeCustomBuildRecipe.length === 0) {
        alert("Please pick your preferred ingredient combinations before pushing to checkout.");
        return;
    }
    const bunPackagingFeeRate = 30.00;
    const componentsPriceSum = activeCustomBuildRecipe.reduce((sum, item) => sum + item.price, 0);
    const customizedTotalCostValue = bunPackagingFeeRate + componentsPriceSum;
    const formulaComponentsBreakdown = activeCustomBuildRecipe.map(i => i.name).join(' + ');

    consumerCart.push({
        cartItemId: 'custom_burger_' + Date.now() + Math.random().toString(36).substr(2, 5),
        id: 'composite_burger_build',
        name: 'Custom Tailored Burger Build',
        price: customizedTotalCostValue,
        category: 'gourmet_customizer',
        componentsSummary: formulaComponentsBreakdown,
        extraCheese: false
    });

    activeCustomBuildRecipe = [];
    renderCustomizerAssemblyStation();
    recalculateBillingUI();
    openCartOverlayDrawer();
    switchInterfaceSection('shop'); 
};

const pushItemToCart = (id, name, price, category) => {
    consumerCart.push({
        cartItemId: id + '_' + Date.now() + Math.random().toString(36).substr(2, 5),
        id: id,
        name: name,
        price: price,
        category: category,
        extraCheese: false
    });
    recalculateBillingUI();
    openCartOverlayDrawer();
};

const removeSingleItemFromCart = (cartItemId) => {
    const targetIndex = consumerCart.findIndex(item => item.cartItemId === cartItemId);
    if (targetIndex !== -1) consumerCart.splice(targetIndex, 1);
    recalculateBillingUI();
};

const toggleExtraCheeseCustomization = (cartItemId, checkboxElement) => {
    consumerCart.forEach(item => {
        if(item.cartItemId === cartItemId) item.extraCheese = checkboxElement.checked;
    });
    recalculateBillingUI();
};

const recalculateBillingUI = () => {
    const cartListElement = document.getElementById('cart-items-target-list');
    const badgeCounter = document.getElementById('floating-badge-counter');
    if (!cartListElement) return;

    if (badgeCounter) badgeCounter.innerText = consumerCart.length;
    cartListElement.innerHTML = '';
    
    const rawItemsSubtotal = consumerCart.reduce((sum, item) => sum + item.price, 0);
    const cheeseAddonChargeRate = 25.00;
    const totalCheeseAddonsCost = consumerCart.reduce((sum, item) => sum + (item.extraCheese ? cheeseAddonChargeRate : 0), 0);
    const completeNetSubtotal = rawItemsSubtotal + totalCheeseAddonsCost;

    const calculatedCgst = completeNetSubtotal * 0.09;
    const calculatedSgst = completeNetSubtotal * 0.09;
    const finalInvoiceGrandTotal = completeNetSubtotal + calculatedCgst + calculatedSgst;

    document.getElementById('bill-subtotal').innerText = rawItemsSubtotal.toFixed(2);
    document.getElementById('bill-addons').innerText = totalCheeseAddonsCost.toFixed(2);
    document.getElementById('bill-cgst').innerText = calculatedCgst.toFixed(2);
    document.getElementById('bill-sgst').innerText = calculatedSgst.toFixed(2);
    document.getElementById('bill-grand-total').innerText = finalInvoiceGrandTotal.toFixed(2);

    if (consumerCart.length === 0) {
        cartListElement.innerHTML = '<li style="text-align:center; color:var(--text-muted-light); padding:30px 0;">Your checkout basket is empty.</li>';
        return;
    }

    const groupedCartItems = consumerCart.reduce((accumulator, item) => {
        const groupKey = item.id === 'composite_burger_build' ? item.cartItemId : `${item.id}_${item.extraCheese}`;
        if (!accumulator[groupKey]) {
            accumulator[groupKey] = {
                id: item.id,
                cartItemId: item.cartItemId, 
                name: item.name,
                basePrice: item.price,
                category: item.category,
                componentsSummary: item.componentsSummary || "",
                totalPrice: 0,
                quantity: 0,
                extraCheese: item.extraCheese,
                matchingIds: []
            };
        }
        accumulator[groupKey].quantity += 1;
        accumulator[groupKey].totalPrice += item.price + (item.extraCheese ? cheeseAddonChargeRate : 0);
        accumulator[groupKey].matchingIds.push(item.cartItemId);
        return accumulator;
    }, {});

    Object.values(groupedCartItems).forEach(group => {
        const li = document.createElement('li');
        li.className = 'cart-item-node';
        let subIngredientsSubtitleHTML = "";
        if(group.id === 'composite_burger_build') {
            subIngredientsSubtitleHTML = `<ul class="cart-item-sub-addons"><li><small>${group.componentsSummary}</small></li><li><small>Inc. Bun Packaging Charge (₹30)</small></li></ul>`;
        } else if(group.extraCheese) {
            subIngredientsSubtitleHTML = `<ul class="cart-item-sub-addons"><li><small>Custom Add-on: Extra Cheese Slice (+₹25.00)</small></li></ul>`;
        }
        
        const targetDeletionId = group.matchingIds[group.matchingIds.length - 1];

        li.innerHTML = `
            <div class="cart-item-top-row">
                <div style="flex: 2;">
                    <span style="font-weight:700; font-size:1.05em; color: var(--text-main-light);">&#x25A3; ${group.name}</span>
                    ${subIngredientsSubtitleHTML}
                </div>
                <div class="inline-qty-container" style="flex: 0 0 auto; margin: 0 15px;">
                    <button class="math-counter-btn" onclick="removeSingleItemFromCart('${targetDeletionId}')">&#x2212;</button>
                    <span class="qty-counter-val">${group.quantity}</span>
                    <button class="math-counter-btn" onclick="pushItemToCart('${group.id}', '${group.name}', ${group.basePrice}, '${group.category}')">+</button>
                </div>
                <div class="item-pricing-box" style="flex: 0 0 auto;">
                    <span class="actual-discount-price">₹${group.totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div class="cart-item-addons-edit" style="${(group.category !== 'burgers') ? 'display: none !important;' : ''}">
                <input type="checkbox" id="cheese_check_${group.cartItemId}" ${group.extraCheese ? 'checked' : ''} onchange="toggleExtraCheeseCustomization('${targetDeletionId}', this)">
                <label for="cheese_check_${group.cartItemId}" style="cursor:pointer; font-weight:600; color:var(--text-muted-light);">
                    Add Extra Cheese Slice (+₹25.00/unit)
                </label>
            </div>
        `;
        cartListElement.appendChild(li);
    });
};

const processCartCheckoutSubmission = async () => {
    if (consumerCart.length === 0) {
        alert("Your checkout basket is currently empty.");
        return;
    }
    const consolidatedSummaryText = consumerCart.map(i => `${i.name}${i.componentsSummary ? ' ['+i.componentsSummary+']' : ''}${i.extraCheese ? ' (With Cheese)' : ''}`).join(', ');
    const cheeseAddonChargeRate = 25.00;
    const baseItemsCost = consumerCart.reduce((sum, item) => sum + item.price, 0);
    const totalCheeseCost = consumerCart.reduce((sum, item) => sum + (item.extraCheese ? cheeseAddonChargeRate : 0), 0);
    const coreNetSubtotal = baseItemsCost + totalCheeseCost;

    const cgstValue = coreNetSubtotal * 0.09;
    const sgstValue = coreNetSubtotal * 0.09;
    const totalPayableCost = coreNetSubtotal + cgstValue + sgstValue;

    let itemizedReceiptList = consumerCart.map(i => 
        ` - ${i.name.padEnd(30)} : ₹${i.price.toFixed(2)}${i.componentsSummary ? '\n   * Build Spec: '+i.componentsSummary : ''}${i.extraCheese ? '\n   * Add-on: Extra Cheese slice fee     : ₹25.00' : ''}`
    ).join('\n');

    const printableInvoiceReceiptMessage = 
`==============================================
            FOOD SHOP TAX INVOICE       
==============================================
TIMESTAMP                      : ${new Date().toLocaleString()}
Items Summary breakdown:\n${itemizedReceiptList}
----------------------------------------------
Menu Items Subtotal            : ₹${baseItemsCost.toFixed(2)}
Customization Cheese Add-ons    : ₹${totalCheeseCost.toFixed(2)}
----------------------------------------------
Net Taxable Subtotal Value     : ₹${coreNetSubtotal.toFixed(2)}
CGST Statutory Levy (9.0%)     : ₹${cgstValue.toFixed(2)}
SGST Statutory Levy (9.0%)     : ₹${sgstValue.toFixed(2)}
----------------------------------------------
CUMULATIVE PAYABLE AMOUNT      : ₹${totalPayableCost.toFixed(2)}
==============================================
Status: Paid via Integrated Token Node
Thank you for ordering with us online!`;

    try {
        const response = await fetch('/shop/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ summary: consolidatedSummaryText, price: totalPayableCost, receiptText: printableInvoiceReceiptMessage })
        });
        if (response.ok) {
            alert("Order placed successfully! Check progress inside your isolated Order History tab.");
            consumerCart = [];
            recalculateBillingUI();
            closeCartOverlayDrawer();
            switchInterfaceSection('history'); 
        } else {
            alert("Order submission timed out.");
        }
    } catch (err) { console.error(err); }
};

const syncLiveOrderQueue = async () => {
    const queueTargetContainer = document.getElementById('live-queue-box');
    if (!queueTargetContainer) return;

    try {
        const response = await fetch('/shop/orders-stream');
        if (!response.ok) return;
        const ordersList = await response.json();

        if (ordersList.length > 0 && !activeCustomerName) {
            activeCustomerName = ordersList[0].customer_name;
            const displayEl = document.getElementById('active-customer-display');
            if (displayEl) displayEl.innerText = activeCustomerName;
        }

        queueTargetContainer.innerHTML = '';
        if (ordersList.length === 0) {
            queueTargetContainer.innerHTML = '<tr><td colspan="5" style="text-align:center; font-style:italic; padding:20px; color:var(--text-muted-light);">You have not placed any orders yet.</td></tr>';
            return;
        }

        ordersList.forEach(order => {
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid var(--border-light)';
            row.innerHTML = `
                <td style="padding:14px 10px;"><strong>#00${order.id}</strong></td>
                <td style="padding:14px 10px; max-width:400px;"><small style="color:var(--text-muted-light); font-weight:600;">${order.items_summary}</small></td>
                <td style="padding:14px 10px;"><strong style="color:var(--primary-neon);">₹${parseFloat(order.total_price).toFixed(2)}</strong></td>
                <td style="padding:14px 10px;"><span class="badge status-${order.status}">${order.status}</span></td>
                <td style="padding:14px 10px;">
                    <a href="/shop/receipt/download/${order.id}" class="btn-action-main" style="text-decoration:none; font-size:11px; padding:6px 12px; background:#10b981; display:inline-block;">
                        📥 Receipt
                    </a>
                </td>
            `;
            queueTargetContainer.appendChild(row);
        });
    } catch (err) { console.error(err); }
};

window.onload = initializePlatform;