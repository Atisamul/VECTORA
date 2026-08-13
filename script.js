"use strict";

/* =========================================================
   VECTORA — COMPLETE SCRIPT.JS
   Cart + WhatsApp + Gallery + Modal + Effects
   ========================================================= */

const STORE_NAME = "VECTORA";
const STORE_EMAIL = "Waqtora000@gmail.com";
const WHATSAPP_NUMBER = "923328252059";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: "steel-signature",
    category: "steel",
    categoryLabel: "Steel edit",
    name: "Steel Signature",
    short: "White dial · polished steel",
    image: "assets/steel-white.jpg",
    description: "A bright, textured dial meets polished steel tones and a strong fluted-inspired profile. Made for a confident everyday rotation.",
    palette: "Silver · White",
    notes: "Statement steel",
    price: null
  },
  {
    id: "steel-noir",
    category: "steel",
    categoryLabel: "Steel edit",
    name: "Steel Noir",
    short: "Black dial · silver steel",
    image: "assets/steel-black.jpg",
    description: "A darker expression of the steel edit, with a graphic black dial and reflective bracelet detail for evening presence.",
    palette: "Black · Silver",
    notes: "Statement steel",
    price: null
  },
  {
    id: "chrono-noir",
    category: "steel",
    categoryLabel: "Sport edit",
    name: "Chrono Noir",
    short: "Black metal · bold dial",
    image: "assets/black-chrono.jpg",
    description: "An all-black chronograph-inspired look that brings a sharper, athletic edge to the collection.",
    palette: "Black · Violet detail",
    notes: "Sport statement",
    price: null
  },
  {
    id: "gold-day",
    category: "steel",
    categoryLabel: "Gold edit",
    name: "Golden Day",
    short: "Gold tone · white dial",
    image: "assets/gold-day-watch.jpg",
    description: "A luminous gold-tone finish and bright patterned dial create an unapologetically elevated wrist presence.",
    palette: "Gold · White",
    notes: "Celebration piece",
    price: null
  },
  {
    id: "gold-linear",
    category: "rectangular",
    categoryLabel: "Rectangular",
    name: "Gold Linear",
    short: "Gold tone · black dial",
    image: "assets/gold-rectangular.jpg",
    description: "A slim rectangular case with a sculptural, gold-tone bracelet—an expressive choice for dressier moments.",
    palette: "Gold · Black",
    notes: "Rectangular dress",
    price: null
  },
  {
    id: "silver-gold-line",
    category: "rectangular",
    categoryLabel: "Rectangular",
    name: "Silver Gold Line",
    short: "Two tone · white dial",
    image: "assets/two-tone-rectangular.jpg",
    description: "Silver and gold-tone details meet a crisp white Roman-numeral dial for a balanced, traditional expression.",
    palette: "Silver · Gold · White",
    notes: "Two-tone dress",
    price: null
  },
  {
    id: "emerald-gold",
    category: "rectangular",
    categoryLabel: "Rectangular",
    name: "Emerald Gold",
    short: "Gold tone · green dial",
    image: "assets/green-gold-rectangular.jpg",
    description: "Deep green and warm gold bring an unexpectedly rich colour story to a compact rectangular profile.",
    palette: "Gold · Emerald",
    notes: "Colour statement",
    price: null
  },
  {
    id: "burgundy-gold",
    category: "rectangular",
    categoryLabel: "Rectangular",
    name: "Burgundy Gold",
    short: "Gold tone · wine dial",
    image: "assets/burgundy-gold-rectangular.jpg",
    description: "A wine-toned dial framed in gold delivers vintage character with a confident contemporary finish.",
    palette: "Gold · Burgundy",
    notes: "Colour statement",
    price: null
  },
  {
    id: "ivory-two-tone",
    category: "rectangular",
    categoryLabel: "Rectangular",
    name: "Ivory Two-Tone",
    short: "Silver & gold · ivory dial",
    image: "assets/two-tone-ivory-rectangular.jpg",
    description: "Warm ivory, silver and gold create a versatile rectangular look with a quieter sense of luxury.",
    palette: "Silver · Gold · Ivory",
    notes: "Two-tone dress",
    price: null
  },
  {
    id: "square-slate",
    category: "square",
    categoryLabel: "Modern square",
    name: "Square Slate",
    short: "Matte black · steel strap",
    image: "assets/square-black-matte.jpg",
    description: "A clean square face and matte black profile make this a minimalist alternative to the traditional round watch.",
    palette: "Black · Steel",
    notes: "Modern square",
    price: null
  },
  {
    id: "square-ivory",
    category: "square",
    categoryLabel: "Modern square",
    name: "Square Ivory",
    short: "White dial · dark frame",
    image: "assets/square-white-hand.jpg",
    description: "Crisp white under a dark frame, keeping the geometry clean and the look easy to wear day to night.",
    palette: "White · Black",
    notes: "Modern square",
    price: null
  },
  {
    id: "square-taupe",
    category: "square",
    categoryLabel: "Modern square",
    name: "Square Taupe",
    short: "Taupe dial · silver tone",
    image: "assets/square-taupe-hand.jpg",
    description: "A softer neutral dial paired with a silver-tone case for a distinctly contemporary, pared-back feel.",
    palette: "Taupe · Silver",
    notes: "Modern square",
    price: null
  },
  {
    id: "classic-silver",
    category: "classic",
    categoryLabel: "Classic",
    name: "Classic Silver",
    short: "Silver steel · white dial",
    image: "assets/classic-silver-glove.jpg",
    description: "Crisp markers, polished steel and a white dial bring familiar dress-watch balance to a versatile daily piece.",
    palette: "Silver · White",
    notes: "Classic dress",
    price: null
  },
  {
    id: "heritage-leather",
    category: "classic",
    categoryLabel: "Classic",
    name: "Heritage Leather",
    short: "Brown leather · white dial",
    image: "assets/classic-brown.jpg",
    description: "A warm brown textured strap sets off a bright, diamond-accented dial for a formal, gift-ready option.",
    palette: "Brown · White · Silver",
    notes: "Classic dress",
    price: null
  },
  {
    id: "emerald-bangle",
    category: "ladies",
    categoryLabel: "Ladies",
    name: "Emerald Bangle",
    short: "Gold bangle · green dial",
    image: "assets/ladies-green-bangle.jpg",
    description: "An oval green dial, diamond-style frame and fine gold bangle shape make an elegant statement for special occasions.",
    palette: "Gold · Emerald",
    notes: "Ladies bangle",
    price: null
  },
  {
    id: "ice-bangle",
    category: "ladies",
    categoryLabel: "Ladies",
    name: "Ice Bangle",
    short: "Gold bangle · pale blue dial",
    image: "assets/ladies-blue-bangle.jpg",
    description: "A light blue oval dial framed in warm gold offers a softer, luminous take on the bangle-watch silhouette.",
    palette: "Gold · Ice blue",
    notes: "Ladies bangle",
    price: null
  }
];

/* =========================================================
   GALLERY
========================================================= */

const archive = [
  ["hero-steel-duo.jpg", "Two polished steel watches shown in a presentation box"],
  ["steel-back.jpg", "Close view of a steel watch bracelet and back"],
  ["steel-white.jpg", "White dial steel watch in a light presentation box"],
  ["steel-collection.jpg", "Selection of black and white dial steel watches"],
  ["steel-black.jpg", "Black dial steel watch in a dark presentation box"],
  ["black-chrono.jpg", "Black chronograph-style watch collage"],
  ["gold-rectangular.jpg", "Gold rectangular watch collection"],
  ["two-tone-rectangular.jpg", "Silver and gold rectangular watch collection"],
  ["gold-pearl-rectangular.jpg", "Gold rectangular watch with a bright dial"],
  ["silver-black-rectangular.jpg", "Silver rectangular watch with dark Roman numeral dial"],
  ["silver-white-rectangular.jpg", "Silver rectangular watch with white Roman numeral dial"],
  ["green-gold-rectangular.jpg", "Green dial rectangular gold-tone watch"],
  ["green-gold-alt.jpg", "Green dial gold-tone rectangular watch close-up"],
  ["rose-steel-rectangular.jpg", "Rose-tone and silver rectangular watch"],
  ["burgundy-gold-rectangular.jpg", "Burgundy dial rectangular gold-tone watch"],
  ["two-tone-ivory-rectangular.jpg", "Ivory dial silver and gold rectangular watch"],
  ["gold-day-watch.jpg", "Gold-tone watch with a bright patterned dial"],
  ["square-silver-hand.jpg", "Square silver-tone watch held in hand"],
  ["square-black-hand.jpg", "Square black dial watch held in hand"],
  ["square-gold-hand.jpg", "Square gold dial watch held in hand"],
  ["square-trio.jpg", "Three modern square watches on a display surface"],
  ["square-black-silver.jpg", "Black square watch with silver-tone case"],
  ["square-black-matte.jpg", "Matte black square watch held in hand"],
  ["square-trio-bright.jpg", "Three square watches against a bright backdrop"],
  ["square-trio-vertical.jpg", "Three modern square watches arranged vertically"],
  ["square-white-hand.jpg", "White dial square watch held in hand"],
  ["square-taupe-hand.jpg", "Taupe dial square watch held in hand"],
  ["square-taupe-black.jpg", "Taupe dial square watch with black frame"],
  ["classic-silver-glove.jpg", "Classic silver-tone watch held with a white glove"],
  ["ladies-green-bangle.jpg", "Emerald green ladies bangle watch in a gift box"],
  ["ladies-blue-bangle.jpg", "Light blue ladies bangle watch in a gift box"],
  ["classic-brown.jpg", "Classic white dial watch with brown leather strap in its box"],
  ["classic-black.jpg", "Classic black dial watch with a dark leather strap"],
  ["time-extra-mark.jpg", "Time Extra gold and black watch-inspired mark"]
].map(([file, alt]) => ({
  src: `assets/${file}`,
  alt
}));

/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, scope = document) =>
  scope.querySelector(selector);

const $$ = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];

/* =========================================================
   DOM
========================================================= */

const productGrid = $("#product-grid");
const galleryGrid = $("#gallery-grid");
const productModal = $("#product-modal");
const imageModal = $("#image-modal");
const modalBody = $("#modal-body");
const lightboxImage = $("#lightbox-image");
const lightboxCount = $("#lightbox-count");
const toast = $("#toast");

let activeProduct = null;
let lastFocus = null;
let lightboxIndex = 0;

/* =========================================================
   CART
========================================================= */

let cart = [];

try {
  cart = JSON.parse(
    localStorage.getItem("vectora-cart") || "[]"
  );

  if (!Array.isArray(cart)) {
    cart = [];
  }
} catch {
  cart = [];
}

function saveCart() {
  localStorage.setItem(
    "vectora-cart",
    JSON.stringify(cart)
  );
}

function cartCount() {
  return cart.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );
}

function getProduct(id) {
  return products.find(
    product =>
      String(product.id) === String(id)
  );
}

/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(
    window.vectoraToastTimer
  );

  window.vectoraToastTimer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
}

/* =========================================================
   CART UI — CREATED AUTOMATICALLY
========================================================= */

function createCartUI() {

  if ($("#vectora-cart-drawer")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "vectora-cart-style";

  style.textContent = `
    #vectora-cart-drawer {
      position: fixed;
      inset: 0;
      z-index: 99999;
      pointer-events: none;
    }

    #vectora-cart-drawer .vectora-cart-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,.65);
      backdrop-filter: blur(7px);
      opacity: 0;
      transition: opacity .35s ease;
    }

    #vectora-cart-drawer .vectora-cart-panel {
      position: absolute;
      top: 0;
      right: 0;
      width: min(470px, 94vw);
      height: 100%;
      background: #101010;
      color: #f5f1e9;
      border-left: 1px solid rgba(255,255,255,.12);
      transform: translateX(105%);
      transition: transform .45s cubic-bezier(.2,.7,.2,1);
      display: flex;
      flex-direction: column;
      box-shadow: -20px 0 80px rgba(0,0,0,.4);
    }

    #vectora-cart-drawer.is-open {
      pointer-events: auto;
    }

    #vectora-cart-drawer.is-open .vectora-cart-overlay {
      opacity: 1;
    }

    #vectora-cart-drawer.is-open .vectora-cart-panel {
      transform: translateX(0);
    }

    .vectora-cart-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      border-bottom: 1px solid rgba(255,255,255,.1);
    }

    .vectora-cart-head h2 {
      margin: 0;
      font-size: 24px;
    }

    .vectora-cart-close {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(255,255,255,.15);
      background: transparent;
      color: white;
      border-radius: 50%;
      cursor: pointer;
      font-size: 20px;
    }

    .vectora-cart-items {
      flex: 1;
      overflow-y: auto;
      padding: 10px 24px;
    }

    .vectora-cart-item {
      display: grid;
      grid-template-columns: 74px 1fr auto;
      gap: 14px;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid rgba(255,255,255,.08);
    }

    .vectora-cart-item img {
      width: 74px;
      height: 74px;
      object-fit: cover;
      border-radius: 10px;
      background: #171717;
    }

    .vectora-cart-item h4 {
      margin: 0 0 6px;
      font-size: 14px;
    }

    .vectora-cart-price {
      color: #e5c77c;
      font-size: 12px;
      margin-bottom: 9px;
    }

    .vectora-qty {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 999px;
      padding: 3px 6px;
    }

    .vectora-qty button {
      width: 25px;
      height: 25px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.08);
      color: white;
      cursor: pointer;
    }

    .vectora-remove {
      width: 30px;
      height: 30px;
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 50%;
      background: transparent;
      color: #aaa;
      cursor: pointer;
    }

    .vectora-cart-bottom {
      padding: 22px 24px;
      border-top: 1px solid rgba(255,255,255,.1);
    }

    .vectora-cart-total {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-size: 14px;
    }

    .vectora-cart-whatsapp {
      width: 100%;
      padding: 15px;
      border: 0;
      border-radius: 999px;
      background: #d8bd73;
      color: #111;
      font-weight: 800;
      cursor: pointer;
      transition: transform .25s ease, box-shadow .25s ease;
    }

    .vectora-cart-whatsapp:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(216,189,115,.2);
    }

    .vectora-empty {
      padding: 70px 10px;
      text-align: center;
      color: #999;
    }

    .vectora-empty strong {
      display: block;
      color: white;
      margin-bottom: 8px;
      font-size: 20px;
    }

    @media(max-width:600px) {
      #vectora-cart-drawer .vectora-cart-panel {
        width: 100%;
      }
    }
  `;

  document.head.appendChild(style);

  const drawer = document.createElement("div");

  drawer.id = "vectora-cart-drawer";

  drawer.innerHTML = `
    <div class="vectora-cart-overlay"></div>

    <aside
      class="vectora-cart-panel"
      aria-label="Shopping cart"
    >

      <div class="vectora-cart-head">

        <div>
          <small style="color:#999;letter-spacing:.15em;">
            VECTORA
          </small>

          <h2>Your Selection</h2>
        </div>

        <button
          type="button"
          class="vectora-cart-close"
          aria-label="Close cart"
        >
          ×
        </button>

      </div>

      <div class="vectora-cart-items"></div>

      <div class="vectora-cart-bottom">

        <div class="vectora-cart-total">
          <span>Selected pieces</span>
          <strong class="vectora-cart-count">0</strong>
        </div>

        <button
          type="button"
          class="vectora-cart-whatsapp"
        >
          ORDER / ASK ON WHATSAPP ↗
        </button>

      </div>

    </aside>
  `;

  document.body.appendChild(drawer);

  $(".vectora-cart-overlay")
    .addEventListener(
      "click",
      closeCart
    );

  $(".vectora-cart-close")
    .addEventListener(
      "click",
      closeCart
    );

  $(".vectora-cart-whatsapp")
    .addEventListener(
      "click",
      sendCartToWhatsApp
    );
}

/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

  const drawer =
    $("#vectora-cart-drawer");

  if (!drawer) return;

  const container =
    $(".vectora-cart-items", drawer);

  const count =
    $(".vectora-cart-count", drawer);

  count.textContent =
    cartCount();

  if (!cart.length) {

    container.innerHTML = `
      <div class="vectora-empty">
        <strong>Your selection is empty</strong>
        Choose a watch to add it here.
      </div>
    `;

    return;
  }

  container.innerHTML =
    cart.map(item => {

      const product =
        getProduct(item.id);

      if (!product) {
        return "";
      }

      return `
        <div class="vectora-cart-item">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

          <div>

            <h4>
              ${product.name}
            </h4>

            <div class="vectora-cart-price">
              ${product.price
                ? `Rs. ${product.price}`
                : "Price on request"}
            </div>

            <div class="vectora-qty">

              <button
                type="button"
                data-cart-minus="${product.id}"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                data-cart-plus="${product.id}"
              >
                +
              </button>

            </div>

          </div>

          <button
            type="button"
            class="vectora-remove"
            data-cart-remove="${product.id}"
          >
            ×
          </button>

        </div>
      `;

    }).join("");
}

/* =========================================================
   OPEN / CLOSE CART
========================================================= */

function openCart() {

  createCartUI();
  renderCart();

  const drawer =
    $("#vectora-cart-drawer");

  drawer.classList.add(
    "is-open"
  );

  document.body.style.overflow =
    "hidden";
}

function closeCart() {

  const drawer =
    $("#vectora-cart-drawer");

  if (!drawer) return;

  drawer.classList.remove(
    "is-open"
  );

  document.body.style.overflow =
    "";
}

/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {

  const product =
    getProduct(id);

  if (!product) return;

  const existing =
    cart.find(
      item =>
        String(item.id) ===
        String(id)
    );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  showToast(
    `${product.name} added to your selection`
  );
}

/* =========================================================
   CART QUANTITY
========================================================= */

function changeCartQuantity(
  id,
  amount
) {

  const item =
    cart.find(
      product =>
        String(product.id) ===
        String(id)
    );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart =
      cart.filter(
        product =>
          String(product.id) !==
          String(id)
      );
  }

  saveCart();
  renderCart();
}

/* =========================================================
   CART EVENTS
========================================================= */

document.addEventListener(
  "click",
  event => {

    const add =
      event.target.closest(
        "[data-add-cart]"
      );

    if (add) {

      event.preventDefault();
      event.stopPropagation();

      addToCart(
        add.dataset.addCart
      );

      return;
    }

    const plus =
      event.target.closest(
        "[data-cart-plus]"
      );

    if (plus) {

      changeCartQuantity(
        plus.dataset.cartPlus,
        1
      );

      return;
    }

    const minus =
      event.target.closest(
        "[data-cart-minus]"
      );

    if (minus) {

      changeCartQuantity(
        minus.dataset.cartMinus,
        -1
      );

      return;
    }

    const remove =
      event.target.closest(
        "[data-cart-remove]"
      );

    if (remove) {

      cart =
        cart.filter(
          item =>
            String(item.id) !==
            String(
              remove.dataset.cartRemove
            )
        );

      saveCart();
      renderCart();

      return;
    }

    const cartButton =
      event.target.closest(
        ".cart-trigger, #cart-open, [data-cart-open], [data-cart]"
      );

    if (cartButton) {

      event.preventDefault();

      openCart();

      return;
    }
  }
);

/* =========================================================
   WHATSAPP CART ORDER
========================================================= */

function sendCartToWhatsApp() {

  if (!cart.length) {

    showToast(
      "Please add a watch first."
    );

    return;
  }

  let message =
`Hello VECTORA 👋

I want to order / enquire about these watches:

`;

  cart.forEach(
    (item, index) => {

      const product =
        getProduct(item.id);

      if (!product) return;

      const imageUrl =
        new URL(
          product.image,
          window.location.href
        ).href;

      message +=
`${index + 1}. ${product.name}
Quantity: ${item.quantity}
Price: ${product.price
  ? `Rs. ${product.price}`
  : "Price on request"}
Image: ${imageUrl}

`;
    }
  );

  message +=
`----------------------------

Please tell me:

• Latest price
• Best price / bargaining price
• Availability
• Delivery charges
• Delivery time

Email:
${STORE_EMAIL}

Thank you.`;

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${
      encodeURIComponent(message)
    }`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   PRODUCT RENDER
========================================================= */

function renderProducts(
  filter = "all"
) {

  if (!productGrid) return;

  const list =
    filter === "all"
      ? products
      : products.filter(
          product =>
            product.category ===
            filter
        );

  productGrid.innerHTML =
    list.map(
      product => `
        <article
          class="product-card reveal"
          data-tilt
        >

          <button
            type="button"
            class="product-card-button open-product"
            data-product="${product.id}"
            aria-label="View ${product.name}"
          >

            <span class="product-image">

              <img
                src="${product.image}"
                alt="${product.name}: ${product.short}"
                loading="lazy"
              />

              <span class="product-tag">
                ${product.categoryLabel}
              </span>

              <span
                class="product-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

            </span>

            <span class="product-info">

              <span>
                <h3>
                  ${product.name}
                </h3>

                <p>
                  ${product.short}
                </p>
              </span>

              <p class="product-price">
                ${product.price
                  ? `Rs. ${product.price}`
                  : `Price<br>on request`}
              </p>

            </span>

          </button>

          <button
            type="button"
            class="add-cart-small"
            data-add-cart="${product.id}"
          >
            ADD TO CART
          </button>

        </article>
      `
    ).join("");

  startRevealObserver();
  setupTilt();
}

/* =========================================================
   PRODUCT MODAL
========================================================= */

function openModal(product) {

  if (!product) return;

  activeProduct =
    product;

  lastFocus =
    document.activeElement;

  const imageUrl =
    new URL(
      product.image,
      window.location.href
    ).href;

  const message =
`Hello VECTORA 👋

I am interested in:

${product.name}

Price:
${product.price
  ? `Rs. ${product.price}`
  : "Price on request"}

Product image:
${imageUrl}

Please tell me the latest price and best price.`;

  modalBody.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-gallery">

        <img
          src="${product.image}"
          alt="${product.name}: ${product.short}"
        />

      </div>

      <div class="modal-product-content">

        <p class="eyebrow">
          <span></span>
          ${product.categoryLabel}
        </p>

        <h2 id="modal-title">
          ${product.name}
        </h2>

        <p>
          ${product.description}
        </p>

        <div class="modal-details">

          <span>
            <b>Palette</b>
            <strong>
              ${product.palette}
            </strong>
          </span>

          <span>
            <b>Style</b>
            <strong>
              ${product.notes}
            </strong>
          </span>

          <span>
            <b>Price</b>
            <strong>
              ${product.price
                ? `Rs. ${product.price}`
                : "On request"}
            </strong>
          </span>

        </div>

        <div
          style="
            display:flex;
            gap:10px;
            flex-wrap:wrap;
          "
        >

          <button
            type="button"
            class="button button-gold"
            data-modal-cart="${product.id}"
          >
            Add to Cart
          </button>

          <a
            class="button button-gold"
            href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}"
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp ↗
          </a>

        </div>

      </div>

    </div>
  `;

  productModal.classList.add(
    "is-open"
  );

  productModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  window.setTimeout(
    () => {
      $(".modal-close", productModal)
        ?.focus();
    },
    20
  );
}

/* =========================================================
   MODAL CART BUTTON
========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-modal-cart]"
      );

    if (!button) return;

    addToCart(
      button.dataset.modalCart
    );
  }
);

/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal(modal) {

  if (!modal) return;

  modal.classList.remove(
    "is-open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

  if (lastFocus) {

    window.setTimeout(
      () => {
        lastFocus.focus();
      },
      50
    );
  }
}

/* =========================================================
   GALLERY
========================================================= */

function renderGallery() {

  if (!galleryGrid) return;

  galleryGrid.innerHTML =
    archive.map(
      (image, index) => `

        <button
          class="gallery-item"
          type="button"
          data-gallery-index="${index}"
          aria-label="Open image ${index + 1} of ${archive.length}: ${image.alt}"
        >

          <img
            src="${image.src}"
            alt="${image.alt}"
            loading="lazy"
          />

        </button>

      `
    ).join("");
}

/* =========================================================
   LIGHTBOX
========================================================= */

function showLightbox(index) {

  if (!archive.length) return;

  lightboxIndex =
    (index + archive.length) %
    archive.length;

  const image =
    archive[lightboxIndex];

  lastFocus =
    document.activeElement;

  lightboxImage.src =
    image.src;

  lightboxImage.alt =
    image.alt;

  lightboxCount.textContent =
    `${String(
      lightboxIndex + 1
    ).padStart(2, "0")} / ${String(
      archive.length
    ).padStart(2, "0")}`;

  imageModal.classList.add(
    "is-open"
  );

  imageModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

  window.setTimeout(
    () => {
      $(".modal-close", imageModal)
        ?.focus();
    },
    20
  );
}

function shiftLightbox(
  amount
) {

  showLightbox(
    lightboxIndex + amount
  );
}

/* =========================================================
   GENERAL CLICK HANDLER
========================================================= */

function handleClick(event) {

  const productButton =
    event.target.closest(
      ".open-product"
    );

  if (productButton) {

    openModal(
      products.find(
        product =>
          product.id ===
          productButton.dataset.product
      )
    );

    return;
  }

  const galleryButton =
    event.target.closest(
      ".gallery-item"
    );

  if (galleryButton) {

    showLightbox(
      Number(
        galleryButton.dataset.galleryIndex
      )
    );
  }
}

document.addEventListener(
  "click",
  handleClick
);

/* =========================================================
   FOCUS TRAP
========================================================= */

function trapFocus(event) {

  const openModalEl =
    $(".modal.is-open");

  if (
    !openModalEl ||
    event.key !== "Tab"
  ) {
    return;
  }

  const focusable =
    $$(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
      openModalEl
    ).filter(
      element =>
        element.offsetParent !== null
    );

  if (!focusable.length) return;

  const first =
    focusable[0];

  const last =
    focusable[
      focusable.length - 1
    ];

  if (
    event.shiftKey &&
    document.activeElement ===
      first
  ) {

    event.preventDefault();

    last.focus();

  } else if (
    !event.shiftKey &&
    document.activeElement ===
      last
  ) {

    event.preventDefault();

    first.focus();
  }
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

function startRevealObserver() {

  const items =
    $$(".reveal");

  if (
    !("IntersectionObserver" in window)
  ) {

    items.forEach(
      item =>
        item.classList.add(
          "in-view"
        )
    );

    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "in-view"
              );

              observer.unobserve(
                entry.target
              );
            }
          }
        );

      },
      {
        threshold: .12,
        rootMargin:
          "0px 0px -35px"
      }
    );

  items.forEach(
    item =>
      observer.observe(item)
  );
}

/* =========================================================
   VIDEO OBSERVER
========================================================= */

function startVideoObserver() {

  const videos =
    $$(".reel-card video");

  if (
    !videos.length ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            const video =
              entry.target;

            if (
              entry.isIntersecting
            ) {

              video.play()
                .catch(
                  () => {}
                );

            } else {

              video.pause();
            }

          }
        );

      },
      {
        threshold: .55
      }
    );

  videos.forEach(
    video =>
      observer.observe(video)
  );
}

/* =========================================================
   TILT
========================================================= */

function setupTilt() {

  if (
    !window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches
  ) {
    return;
  }

  $$("[data-tilt]").forEach(
    card => {

      if (
        card.dataset.tiltReady
      ) {
        return;
      }

      card.dataset.tiltReady =
        "true";

      card.addEventListener(
        "pointermove",
        event => {

          const rect =
            card.getBoundingClientRect();

          const x =
            (event.clientX -
              rect.left) /
              rect.width -
            .5;

          const y =
            (event.clientY -
              rect.top) /
              rect.height -
            .5;

          const rotateX =
            (-y * 5).toFixed(2);

          const rotateY =
            (x * 5).toFixed(2);

          if (
            card.classList.contains(
              "hero-product"
            )
          ) {

            card.style.transform =
              `translateY(-44%)
               rotate(-4deg)
               perspective(1100px)
               rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)`;

          } else {

            card.style.transform =
              `perspective(900px)
               rotateY(${-10 +
                 Number(rotateY)}deg)
               rotateZ(-2deg)
               rotateX(${rotateX}deg)`;
          }

        }
      );

      card.addEventListener(
        "pointerleave",
        () => {
          card.style.transform =
            "";
        }
      );

    }
  );
}

/* =========================================================
   HEADER
========================================================= */

function setupHeader() {

  const header =
    $(".site-header");

  const menuButton =
    $(".menu-toggle");

  const nav =
    $(".site-nav");

  if (
    !header ||
    !menuButton ||
    !nav
  ) {
    return;
  }

  const navLabel =
    $(".sr-only", menuButton);

  const updateHeader =
    () => {

      header.classList.toggle(
        "is-scrolled",
        window.scrollY > 28
      );
    };

  updateHeader();

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

  menuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.toggle(
          "is-open"
        );

      menuButton.classList.toggle(
        "is-open",
        isOpen
      );

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      if (navLabel) {

        navLabel.textContent =
          isOpen
            ? "Close navigation"
            : "Open navigation";
      }
    }
  );

  $$("a", nav).forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "is-open"
          );

          menuButton.classList.remove(
            "is-open"
          );

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

          if (navLabel) {

            navLabel.textContent =
              "Open navigation";
          }
        }
      );
    }
  );
}

/* =========================================================
   CURSOR
========================================================= */

function setupCursorGlow() {

  const glow =
    $(".cursor-glow");

  if (
    !glow ||
    !window.matchMedia(
      "(hover: hover)"
    ).matches
  ) {
    return;
  }

  document.addEventListener(
    "pointermove",
    event => {

      glow.style.left =
        `${event.clientX}px`;

      glow.style.top =
        `${event.clientY}px`;

    },
    {
      passive: true
    }
  );
}

/* =========================================================
   VELOCITY GALLERY
========================================================= */

function setupVelocityGallery() {

  const stage =
    $("#velocity-stage");

  const rows =
    $$("[data-velocity-row]");

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (
    !stage ||
    !rows.length ||
    reducedMotion
  ) {
    return;
  }

  let lastScroll =
    window.scrollY;

  let velocity = 0;

  let stageVisible =
    false;

  const clamp =
    (value, min, max) =>
      Math.min(
        Math.max(value, min),
        max
      );

  const observer =
    new IntersectionObserver(
      entries => {

        stageVisible =
          entries[0].isIntersecting;

      },
      {
        threshold: 0
      }
    );

  observer.observe(stage);

  window.addEventListener(
    "scroll",
    () => {

      const currentScroll =
        window.scrollY;

      velocity =
        clamp(
          velocity +
            (currentScroll -
              lastScroll) *
            .18,
          -95,
          95
        );

      lastScroll =
        currentScroll;

    },
    {
      passive: true
    }
  );

  const animate =
    () => {

      if (stageVisible) {

        const rect =
          stage.getBoundingClientRect();

        const journey =
          clamp(
            (
              window.innerHeight -
              rect.top
            ) /
              (
                window.innerHeight +
                rect.height
              ),
            0,
            1
          );

        rows.forEach(
          row => {

            const base =
              Number(
                row.dataset.distance
              ) *
              (journey - .5);

            const direction =
              Number(
                row.dataset.direction
              );

            const linkedOffset =
              velocity *
              direction *
              .82;

            row.style.transform =
              `translate3d(
                ${base + linkedOffset}px,
                0,
                0
              )`;
          }
        );
      }

      velocity *= .9;

      window.requestAnimationFrame(
        animate
      );
    };

  window.requestAnimationFrame(
    animate
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function setupForm() {

  const form =
    $("#contact-form");

  if (!form) return;

  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const formData =
        new FormData(form);

      const name =
        String(
          formData.get("name") || ""
        ).trim();

      const phone =
        String(
          formData.get("phone") || ""
        ).trim();

      const interest =
        String(
          formData.get("interest") ||
          ""
        );

      const message =
        String(
          formData.get("message") ||
          ""
        ).trim();

      const body =
`Hello VECTORA 👋

Name:
${name}

Phone:
${phone}

Interest:
${interest}

Message:
${message || "Not specified"}

Email:
${STORE_EMAIL}`;

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${
          encodeURIComponent(body)
        }`,
        "_blank",
        "noopener,noreferrer"
      );

      showToast(
        "Opening WhatsApp..."
      );

      form.reset();
    }
  );
}

/* =========================================================
   EMAIL UPDATE
========================================================= */

function updateEmailLinks() {

  $$(
    'a[href^="mailto:"]'
  ).forEach(
    link => {

      link.href =
        `mailto:${STORE_EMAIL}`;

      if (
        link.textContent.includes("@")
      ) {

        link.textContent =
          STORE_EMAIL;
      }
    }
  );
}

/* =========================================================
   CART BUTTON
========================================================= */

function setupCartButton() {

  const possibleButtons =
    $$(".cart-trigger, #cart-open, [data-cart-open], [data-cart]");

  possibleButtons.forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          openCart();
        }
      );
    }
  );
}

/* =========================================================
   FILTERS
========================================================= */

function setupFilters() {

  $$(".filter").forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          $$(".filter").forEach(
            item =>
              item.classList.toggle(
                "active",
                item === button
              )
          );

          renderProducts(
            button.dataset.filter
          );
        }
      );
    }
  );
}

/* =========================================================
   CLOSE BUTTONS
========================================================= */

function setupModalButtons() {

  $$("[data-close-modal]")
    .forEach(
      button =>
        button.addEventListener(
          "click",
          () =>
            closeModal(
              productModal
            )
        )
    );

  $$("[data-close-image]")
    .forEach(
      button =>
        button.addEventListener(
          "click",
          () =>
            closeModal(
              imageModal
            )
        )
    );

  $(".gallery-prev")
    ?.addEventListener(
      "click",
      () =>
        shiftLightbox(-1)
    );

  $(".gallery-next")
    ?.addEventListener(
      "click",
      () =>
        shiftLightbox(1)
    );
}

/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "Escape"
    ) {

      if (
        productModal?.classList.contains(
          "is-open"
        )
      ) {
        closeModal(
          productModal
        );
      }

      if (
        imageModal?.classList.contains(
          "is-open"
        )
      ) {
        closeModal(
          imageModal
        );
      }

      closeCart();
    }

    if (
      imageModal?.classList.contains(
        "is-open"
      )
    ) {

      if (
        event.key ===
        "ArrowLeft"
      ) {
        shiftLightbox(-1);
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        shiftLightbox(1);
      }
    }

    trapFocus(event);
  }
);

/* =========================================================
   INITIALIZE
========================================================= */

function initVectora() {

  createCartUI();

  renderProducts();

  renderGallery();

  renderCart();

  startRevealObserver();

  startVideoObserver();

  setupTilt();

  setupHeader();

  setupCursorGlow();

  setupVelocityGallery();

  setupForm();

  setupCartButton();

  setupFilters();

  setupModalButtons();

  updateEmailLinks();

  if ($("#year")) {
    $("#year").textContent =
      new Date().getFullYear();
  }
}

/* =========================================================
   START
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initVectora
  );

} else {

  initVectora();
}
