"use strict";

/* =========================================================
   VECTORA — FINAL SCRIPT.JS
   Cart + WhatsApp + Gallery + Modal + Scroll + Cursor
   ========================================================= */

const WHATSAPP_NUMBER = "923328252059";
const STORE_EMAIL = "Waqtora000@gmail.com";

/* ---------------------------------------------------------
   HELPERS
--------------------------------------------------------- */

const $ = (selector, scope = document) =>
  scope.querySelector(selector);

const $$ = (selector, scope = document) =>
  [...scope.querySelectorAll(selector)];

/* ---------------------------------------------------------
   STATE
--------------------------------------------------------- */

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

let activeProduct = null;
let lastFocus = null;
let lightboxIndex = 0;

/* ---------------------------------------------------------
   CONFIG
--------------------------------------------------------- */

const CART_KEY = "vectora-cart";

/* ---------------------------------------------------------
   DOM
--------------------------------------------------------- */

const productGrid = $("#product-grid");
const galleryGrid = $("#gallery-grid");

const productModal = $("#product-modal");
const imageModal = $("#image-modal");

const modalBody = $("#modal-body");
const lightboxImage = $("#lightbox-image");
const lightboxCount = $("#lightbox-count");

const toast = $("#toast");

const cartDrawer = $("#cart-drawer");
const cartItems = $("#cart-items");
const cartTotal = $("#cart-total");
const cartWhatsapp = $("#cart-whatsapp");
const cartClose = $("#cart-close");

const backToTop = $("#back-to-top");

/* =========================================================
   PRODUCT DATA SAFETY
   ========================================================= */

/*
   Your existing project may define products/archive
   in another script or inline data.

   We never crash if those arrays are missing.
*/

function getProducts() {
  return Array.isArray(window.products)
    ? window.products
    : [];
}

function getArchive() {
  return Array.isArray(window.archive)
    ? window.archive
    : [];
}

/* =========================================================
   TEXT / HTML SAFETY
   ========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   WHATSAPP
========================================================= */

function whatsappUrl(message) {
  return (
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message)
  );
}

function getProductImageUrl(image) {

  if (!image) {
    return "";
  }

  try {
    return new URL(
      image,
      window.location.href
    ).href;
  } catch {
    return image;
  }
}

/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;

function showToast(message) {

  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("is-visible");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

/* =========================================================
   CART STORAGE
========================================================= */

function saveCart() {

  try {
    localStorage.setItem(
      CART_KEY,
      JSON.stringify(cart)
    );
  } catch {
    // Storage unavailable
  }

  updateCartUI();
}

function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );
}

/* =========================================================
   PRICE
========================================================= */

function getProductPrice(product) {

  if (!product) {
    return "Price on request";
  }

  return (
    product.price ??
    product.salePrice ??
    "Price on request"
  );
}

function numericPrice(price) {

  if (
    price === null ||
    price === undefined
  ) {
    return 0;
  }

  const value = String(price)
    .replace(/,/g, "")
    .replace(/[^\d.]/g, "");

  const number = Number.parseFloat(value);

  return Number.isFinite(number)
    ? number
    : 0;
}

/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(product) {

  if (!product || !product.id) {
    return;
  }

  const existing =
    cart.find(
      item => item.id === product.id
    );

  if (existing) {

    existing.quantity =
      Number(existing.quantity || 0) + 1;

  } else {

    cart.push({
      id: product.id,
      name: product.name || "Watch",
      image: product.image || "",
      price: getProductPrice(product),
      quantity: 1
    });
  }

  saveCart();

  showToast(
    `${product.name || "Watch"} added to your selection ✓`
  );
}

/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeFromCart(id) {

  cart =
    cart.filter(
      item => String(item.id) !== String(id)
    );

  saveCart();

  renderCart();
}

/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQuantity(id, amount) {

  const item =
    cart.find(
      product =>
        String(product.id) === String(id)
    );

  if (!item) {
    return;
  }

  item.quantity =
    Number(item.quantity || 0) + amount;

  if (item.quantity <= 0) {

    removeFromCart(id);
    return;
  }

  saveCart();

  renderCart();
}

/* =========================================================
   CART UI
========================================================= */

function updateCartUI() {

  const count = getCartCount();

  $$(".cart-count").forEach(element => {

    element.textContent = count;

    element.classList.toggle(
      "has-items",
      count > 0
    );
  });
}

/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

  if (!cartDrawer) {
    return;
  }

  cartDrawer.classList.add("is-open");

  cartDrawer.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "cart-open"
  );

  renderCart();

  setTimeout(() => {
    cartClose?.focus();
  }, 50);
}

function closeCart() {

  if (!cartDrawer) {
    return;
  }

  cartDrawer.classList.remove("is-open");

  cartDrawer.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "cart-open"
  );
}

/* =========================================================
   CART RENDER
========================================================= */

function renderCart() {

  if (!cartItems) {
    return;
  }

  if (!cart.length) {

    cartItems.innerHTML = `
      <div class="cart-empty">
        <span>◌</span>

        <h3>Your cart is empty</h3>

        <p>
          Add a watch from the collection
          to begin your selection.
        </p>

        <a
          class="button button-gold"
          href="#products"
          id="continue-shopping"
        >
          Explore Watches
        </a>
      </div>
    `;

    updateCartTotal();

    return;
  }

  cartItems.innerHTML =
    cart.map(item => {

      const image =
        escapeHTML(item.image || "");

      const name =
        escapeHTML(item.name || "Watch");

      const price =
        escapeHTML(
          item.price || "Price on request"
        );

      const id =
        escapeHTML(String(item.id));

      return `
        <article class="cart-item">

          <div class="cart-item-image">

            <img
              src="${image}"
              alt="${name}"
              loading="lazy"
            >

          </div>

          <div class="cart-item-info">

            <h4>
              ${name}
            </h4>

            <p class="cart-item-price">
              ${price}
            </p>

            <div class="cart-quantity">

              <button
                type="button"
                data-cart-minus="${id}"
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>
                ${Number(item.quantity || 1)}
              </span>

              <button
                type="button"
                data-cart-plus="${id}"
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>

          </div>

          <button
            type="button"
            class="cart-remove"
            data-cart-remove="${id}"
            aria-label="Remove ${name}"
          >
            ×
          </button>

        </article>
      `;

    }).join("");

  updateCartTotal();
}

/* =========================================================
   CART TOTAL
========================================================= */

function updateCartTotal() {

  if (!cartTotal) {
    return;
  }

  const total =
    cart.reduce(
      (sum, item) => {

        return (
          sum +
          numericPrice(item.price) *
          Number(item.quantity || 0)
        );

      },
      0
    );

  cartTotal.textContent =
    total > 0
      ? `Rs. ${total.toLocaleString()}`
      : "Price on request";
}

/* =========================================================
   CART CLICK EVENTS
========================================================= */

document.addEventListener(
  "click",
  event => {

    const addButton =
      event.target.closest(
        "[data-add-cart]"
      );

    if (addButton) {

      event.preventDefault();
      event.stopPropagation();

      const id =
        addButton.dataset.addCart;

      const product =
        getProducts().find(
          item =>
            String(item.id) ===
            String(id)
        );

      if (product) {
        addToCart(product);
      }

      return;
    }

    const removeButton =
      event.target.closest(
        "[data-cart-remove]"
      );

    if (removeButton) {

      removeFromCart(
        removeButton.dataset.cartRemove
      );

      return;
    }

    const plusButton =
      event.target.closest(
        "[data-cart-plus]"
      );

    if (plusButton) {

      changeQuantity(
        plusButton.dataset.cartPlus,
        1
      );

      return;
    }

    const minusButton =
      event.target.closest(
        "[data-cart-minus]"
      );

    if (minusButton) {

      changeQuantity(
        minusButton.dataset.cartMinus,
        -1
      );

      return;
    }

    const cartButton =
      event.target.closest(
        "#cart-open, [data-cart-open], .cart-trigger, .cart-button"
      );

    if (cartButton) {

      event.preventDefault();

      openCart();

      return;
    }

    const closeButton =
      event.target.closest(
        "#cart-close, .cart-overlay"
      );

    if (closeButton) {

      event.preventDefault();

      closeCart();

      return;
    }

    const continueButton =
      event.target.closest(
        "#continue-shopping"
      );

    if (continueButton) {
      closeCart();
    }

  }
);

/* =========================================================
   BUY CART ON WHATSAPP
========================================================= */

function sendCartToWhatsApp() {

  if (!cart.length) {

    showToast(
      "Your cart is empty. Add a watch first."
    );

    return;
  }

  let message =
`Hello VECTORA 👋

I would like to enquire/order these watches:

`;

  cart.forEach(
    (item, index) => {

      const imageUrl =
        getProductImageUrl(
          item.image
        );

      message +=
`${index + 1}. ${item.name}
Quantity: ${item.quantity}
Price: ${item.price}
Product image: ${imageUrl}

`;
    }
  );

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        numericPrice(item.price) *
        Number(item.quantity || 0),
      0
    );

  message +=
`----------------------------

Estimated total:
${total > 0
  ? `Rs. ${total.toLocaleString()}`
  : "Price on request"}

Please confirm:

• Availability
• Final price
• Best/bargain price
• Delivery details

Email:
${STORE_EMAIL}

Thank you.`;

  const url =
    whatsappUrl(message);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

/* IMPORTANT:
   HTML uses #cart-whatsapp
*/

cartWhatsapp?.addEventListener(
  "click",
  sendCartToWhatsApp
);

/* =========================================================
   PRODUCT GRID
========================================================= */

function renderProducts(
  filter = "all"
) {

  if (!productGrid) {
    return;
  }

  const allProducts =
    getProducts();

  if (!allProducts.length) {
    return;
  }

  const list =
    filter === "all"
      ? allProducts
      : allProducts.filter(
          product =>
            product.category === filter
        );

  productGrid.innerHTML =
    list.map(product => {

      const id =
        escapeHTML(
          String(product.id)
        );

      const name =
        escapeHTML(
          product.name || "Watch"
        );

      const short =
        escapeHTML(
          product.short || ""
        );

      const image =
        escapeHTML(
          product.image || ""
        );

      const price =
        escapeHTML(
          getProductPrice(product)
        );

      const category =
        escapeHTML(
          product.categoryLabel ||
          product.category ||
          "Watch"
        );

      /*
        IMPORTANT:
        We do NOT put a button inside a button.
      */

      return `
        <article
          class="product-card reveal"
          data-product="${id}"
        >

          <button
            type="button"
            class="product-card-button open-product"
            data-product="${id}"
            aria-label="View ${name}"
          >

            <span class="product-image">

              <img
                src="${image}"
                alt="${name}"
                loading="lazy"
              >

              <span class="product-tag">
                ${category}
              </span>

              <span class="product-arrow">
                ↗
              </span>

            </span>

            <span class="product-info">

              <span>

                <span class="product-name">
                  ${name}
                </span>

                <span class="product-description">
                  ${short}
                </span>

              </span>

              <span class="product-price-box">

                <span class="product-price">
                  Rs. ${price}
                </span>

              </span>

            </span>

          </button>

          <button
            type="button"
            class="add-cart-small"
            data-add-cart="${id}"
            aria-label="Add ${name} to cart"
          >
            Add to Cart
          </button>

        </article>
      `;

    }).join("");

  requestAnimationFrame(
    initRevealAnimations
  );
}

/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductModal(
  product
) {

  if (
    !product ||
    !productModal ||
    !modalBody
  ) {
    return;
  }

  activeProduct =
    product;

  lastFocus =
    document.activeElement;

  const name =
    escapeHTML(
      product.name || "Watch"
    );

  const image =
    escapeHTML(
      product.image || ""
    );

  const price =
    escapeHTML(
      getProductPrice(product)
    );

  const description =
    escapeHTML(
      product.description ||
      product.short ||
      ""
    );

  const category =
    escapeHTML(
      product.categoryLabel ||
      product.category ||
      "Timepiece"
    );

  const palette =
    escapeHTML(
      product.palette ||
      "Premium"
    );

  const style =
    escapeHTML(
      product.style ||
      category
    );

  const imageUrl =
    getProductImageUrl(
      product.image
    );

  const message =
`Hello VECTORA 👋

I am interested in this watch:

${product.name}

Price:
${getProductPrice(product)}

Product image:
${imageUrl}

Please tell me:
• Availability
• Latest price
• Best/bargain price
• Delivery details`;

  modalBody.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-gallery">

        <img
          src="${image}"
          alt="${name}"
        >

      </div>

      <div class="modal-product-content">

        <p class="eyebrow">
          <span></span>
          ${category}
        </p>

        <h2 id="modal-title">
          ${name}
        </h2>

        <p>
          ${description}
        </p>

        <div class="modal-details">

          <span>
            <b>Palette</b>
            <strong>
              ${palette}
            </strong>
          </span>

          <span>
            <b>Style</b>
            <strong>
              ${style}
            </strong>
          </span>

          <span>
            <b>Price</b>
            <strong>
              Rs. ${price}
            </strong>
          </span>

        </div>

        <div class="modal-actions">

          <button
            type="button"
            class="button button-gold"
            data-modal-cart="${escapeHTML(
              String(product.id)
            )}"
          >
            Add to Cart
          </button>

          <a
            class="button button-outline"
            href="${whatsappUrl(
              message
            )}"
            target="_blank"
            rel="noopener noreferrer"
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

  setTimeout(() => {

    $(".modal-close", productModal)
      ?.focus();

  }, 50);
}

/* =========================================================
   PRODUCT CLICK
========================================================= */

document.addEventListener(
  "click",
  event => {

    const modalCart =
      event.target.closest(
        "[data-modal-cart]"
      );

    if (modalCart) {

      const product =
        getProducts().find(
          item =>
            String(item.id) ===
            String(
              modalCart.dataset.modalCart
            )
        );

      if (product) {
        addToCart(product);
      }

      return;
    }

    const productButton =
      event.target.closest(
        ".open-product"
      );

    if (!productButton) {
      return;
    }

    const id =
      productButton.dataset.product;

    const product =
      getProducts().find(
        item =>
          String(item.id) ===
          String(id)
      );

    if (product) {
      openProductModal(product);
    }

  }
);

/* =========================================================
   CLOSE PRODUCT MODAL
========================================================= */

function closeModal(
  modal
) {

  if (!modal) {
    return;
  }

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

  if (
    lastFocus &&
    typeof lastFocus.focus ===
      "function"
  ) {

    lastFocus.focus();
  }
}

document.addEventListener(
  "click",
  event => {

    const close =
      event.target.closest(
        "[data-close-modal], [data-close-image]"
      );

    if (close) {

      const modal =
        close.closest(".modal");

      closeModal(modal);

      return;
    }

    const modalClose =
      event.target.closest(
        ".modal-close"
      );

    if (modalClose) {

      closeModal(
        modalClose.closest(".modal")
      );
    }

  }
);

/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }

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

    if (
      cartDrawer?.classList.contains(
        "is-open"
      )
    ) {

      closeCart();
    }

  }
);

/* =========================================================
   PRODUCT FILTERS
========================================================= */

$$(".filter").forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        $$(".filter").forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );

        button.classList.add(
          "active"
        );

        renderProducts(
          button.dataset.filter ||
          "all"
        );

      }
    );

  }
);

/* =========================================================
   GALLERY
========================================================= */

function renderGallery() {

  if (
    !galleryGrid
  ) {
    return;
  }

  const images =
    getArchive();

  if (!images.length) {
    return;
  }

  galleryGrid.innerHTML =
    images.map(
      (image, index) => {

        const src =
          escapeHTML(
            image.src || ""
          );

        const alt =
          escapeHTML(
            image.alt ||
            `Watch image ${index + 1}`
          );

        return `
          <button
            class="gallery-item"
            type="button"
            data-gallery-index="${index}"
            aria-label="Open image ${index + 1}"
          >

            <img
              src="${src}"
              alt="${alt}"
              loading="lazy"
            >

          </button>
        `;

      }
    ).join("");
}

/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(
  index
) {

  const images =
    getArchive();

  if (
    !imageModal ||
    !images[index]
  ) {
    return;
  }

  lightboxIndex =
    index;

  const image =
    images[index];

  if (lightboxImage) {

    lightboxImage.src =
      image.src || "";

    lightboxImage.alt =
      image.alt || "";
  }

  if (lightboxCount) {

    lightboxCount.textContent =
      `${index + 1} / ${images.length}`;
  }

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
}

/* =========================================================
   GALLERY CLICK
========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "[data-gallery-index]"
      );

    if (!button) {
      return;
    }

    openLightbox(
      Number(
        button.dataset.galleryIndex
      )
    );
  }
);

/* =========================================================
   GALLERY NEXT / PREVIOUS
========================================================= */

function changeLightbox(
  direction
) {

  const images =
    getArchive();

  if (!images.length) {
    return;
  }

  lightboxIndex =
    (
      lightboxIndex +
      direction +
      images.length
    ) % images.length;

  openLightbox(
    lightboxIndex
  );
}

/*
   IMPORTANT:
   Your HTML uses .gallery-next and
   .gallery-prev.
*/

$(".gallery-next")
  ?.addEventListener(
    "click",
    () => changeLightbox(1)
  );

$(".gallery-prev")
  ?.addEventListener(
    "click",
    () => changeLightbox(-1)
  );

/* =========================================================
   GALLERY KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      !imageModal?.classList.contains(
        "is-open"
      )
    ) {
      return;
    }

    if (
      event.key ===
      "ArrowRight"
    ) {

      changeLightbox(1);
    }

    if (
      event.key ===
      "ArrowLeft"
    ) {

      changeLightbox(-1);
    }

  }
);

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initRevealAnimations() {

  const elements =
    $$(".reveal:not(.revealed)");

  if (!elements.length) {
    return;
  }

  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element =>
        element.classList.add(
          "revealed"
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
              !entry.isIntersecting
            ) {
              return;
            }

            entry.target.classList.add(
              "revealed"
            );

            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -50px 0px"
      }
    );

  elements.forEach(
    element =>
      observer.observe(
        element
      )
  );
}

/* =========================================================
   SCROLL PROGRESS
========================================================= */

function updateScrollProgress() {

  const documentHeight =
    document.documentElement
      .scrollHeight;

  const viewportHeight =
    window.innerHeight;

  const scrollable =
    documentHeight -
    viewportHeight;

  const progress =
    scrollable > 0
      ? (window.scrollY /
          scrollable) *
        100
      : 0;

  document.documentElement.style
    .setProperty(
      "--scroll-progress",
      `${progress}%`
    );
}

/* =========================================================
   HEADER SCROLL
========================================================= */

function initHeaderScroll() {

  const headers =
    $$(
      ".site-header, header"
    );

  if (!headers.length) {
    return;
  }

  const update =
    () => {

      const scrolled =
        window.scrollY > 40;

      headers.forEach(
        header =>
          header.classList.toggle(
            "scrolled",
            scrolled
          )
      );
    };

  window.addEventListener(
    "scroll",
    update,
    { passive: true }
  );

  update();
}

/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {

  if (!backToTop) {
    return;
  }

  window.addEventListener(
    "scroll",
    () => {

      backToTop.classList.toggle(
        "is-visible",
        window.scrollY > 600
      );

    },
    { passive: true }
  );

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );
}

/* =========================================================
   VELOCITY ROWS
========================================================= */

function initVelocityRows() {

  const rows =
    $$("[data-velocity-row]");

  if (!rows.length) {
    return;
  }

  let ticking = false;

  function update() {

    rows.forEach(
      row => {

        const rect =
          row.getBoundingClientRect();

        const distance =
          Number(
            row.dataset.distance ||
            -250
          );

        const direction =
          Number(
            row.dataset.direction ||
            1
          );

        const center =
          window.innerHeight / 2;

        const rowCenter =
          rect.top +
          rect.height / 2;

        const progress =
          (rowCenter - center) /
          window.innerHeight;

        const movement =
          progress *
          distance *
          direction;

        row.style.transform =
          `translate3d(
            ${movement}px,
            0,
            0
          )`;
      }
    );

    ticking = false;
  }

  function requestUpdate() {

    if (ticking) {
      return;
    }

    ticking = true;

    requestAnimationFrame(
      update
    );
  }

  window.addEventListener(
    "scroll",
    requestUpdate,
    { passive: true }
  );

  update();
}

/* =========================================================
   PREMIUM CURSOR
========================================================= */

function initCursor() {

  if (
    window.matchMedia(
      "(pointer: coarse)"
    ).matches
  ) {
    return;
  }

  if (
    $(".premium-cursor")
  ) {
    return;
  }

  const cursor =
    document.createElement(
      "div"
    );

  cursor.className =
    "premium-cursor";

  document.body.appendChild(
    cursor
  );

  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;

  window.addEventListener(
    "mousemove",
    event => {

      mouseX =
        event.clientX;

      mouseY =
        event.clientY;

    },
    { passive: true }
  );

  function animate() {

    currentX +=
      (mouseX - currentX) *
      0.16;

    currentY +=
      (mouseY - currentY) *
      0.16;

    cursor.style.transform =
      `translate3d(
        ${currentX}px,
        ${currentY}px,
        0
      )`;

    requestAnimationFrame(
      animate
    );
  }

  animate();

  const interactive =
    "a, button, input, textarea, select, .product-card";

  document.addEventListener(
    "mouseover",
    event => {

      if (
        event.target.closest(
          interactive
        )
      ) {

        cursor.classList.add(
          "cursor-hover"
        );
      }

    }
  );

  document.addEventListener(
    "mouseout",
    event => {

      if (
        event.target.closest(
          interactive
        )
      ) {

        cursor.classList.remove(
          "cursor-hover"
        );
      }

    }
  );
}

/* =========================================================
   HERO PARALLAX
========================================================= */

function initHeroParallax() {

  const hero =
    $(".hero");

  if (!hero) {
    return;
  }

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }

  let ticking = false;

  function update() {

    const scroll =
      window.scrollY;

    if (
      scroll <
      window.innerHeight
    ) {

      hero.style.setProperty(
        "--hero-scroll",
        `${scroll * 0.18}px`
      );
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {

      if (ticking) {
        return;
      }

      ticking = true;

      requestAnimationFrame(
        update
      );

    },
    { passive: true }
  );
}

/* =========================================================
   IMAGE TILT
========================================================= */

function initImageTilt() {

  if (
    window.matchMedia(
      "(pointer: coarse)"
    ).matches
  ) {
    return;
  }

  let currentCard =
    null;

  document.addEventListener(
    "mousemove",
    event => {

      const card =
        event.target.closest(
          ".product-card"
        );

      if (!card) {
        return;
      }

      currentCard =
        card;

      const rect =
        card.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left) /
        rect.width;

      const y =
        (event.clientY -
          rect.top) /
        rect.height;

      const rotateY =
        (x - 0.5) * 4;

      const rotateX =
        (0.5 - y) * 4;

      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-4px)`;
    },
    { passive: true }
  );

  document.addEventListener(
    "mouseout",
    event => {

      const card =
        event.target.closest(
          ".product-card"
        );

      if (!card) {
        return;
      }

      card.style.transform =
        "";
    }
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

function initContactForm() {

  const form =
    $("#contact-form");

  if (!form) {
    return;
  }

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
        ).trim();

      const message =
        String(
          formData.get("message") ||
          ""
        ).trim();

      const whatsappMessage =
`Hello VECTORA 👋

New enquiry:

Name:
${name}

Phone:
${phone}

Interested in:
${interest}

Message:
${message}

Email:
${STORE_EMAIL}`;

      window.open(
        whatsappUrl(
          whatsappMessage
        ),
        "_blank",
        "noopener,noreferrer"
      );

      form.reset();

      showToast(
        "Opening WhatsApp..."
      );
    }
  );
}

/* =========================================================
   EMAIL
========================================================= */

function updateEmails() {

  $$(
    'a[href^="mailto:"]'
  ).forEach(
    link => {

      link.href =
        `mailto:${STORE_EMAIL}`;

      /*
        Only replace visible email text.
        Do not overwrite unrelated labels.
      */

      const text =
        link.textContent.trim();

      if (
        text.includes("@")
      ) {

        link.textContent =
          STORE_EMAIL;
      }
    }
  );
}

/* =========================================================
   PHONE / WHATSAPP LINKS
========================================================= */

function updateWhatsAppLinks() {

  $$(
    'a[href*="wa.me/"]'
  ).forEach(
    link => {

      const href =
        link.getAttribute(
          "href"
        );

      if (!href) {
        return;
      }

      try {

        const url =
          new URL(
            href,
            window.location.href
          );

        const oldText =
          url.searchParams.get(
            "text"
          );

        if (!oldText) {
          return;
        }

        const newText =
          oldText.replace(
            /Time Extra/gi,
            "VECTORA"
          );

        link.href =
          whatsappUrl(
            newText
          );

      } catch {
        // Ignore invalid URLs
      }
    }
  );
}

/* =========================================================
   VIDEOS
========================================================= */

function initVideos() {

  const videos =
    $$("video");

  if (!videos.length) {
    return;
  }

  if (
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
        threshold: 0.15
      }
    );

  videos.forEach(
    video =>
      observer.observe(
        video
      )
  );
}

/* =========================================================
   YEAR
========================================================= */

function updateYear() {

  const year =
    $("#year");

  if (year) {
    year.textContent =
      new Date().getFullYear();
  }
}

/* =========================================================
   MOBILE PERFORMANCE
========================================================= */

function optimizeMobile() {

  const mobile =
    window.matchMedia(
      "(max-width: 768px)"
    ).matches;

  document.documentElement
    .classList.toggle(
      "mobile-device",
      mobile
    );

  if (!mobile) {
    return;
  }

  $$("video").forEach(
    video => {

      if (
        !video.hasAttribute(
          "data-keep-preload"
        )
      ) {

        video.setAttribute(
          "preload",
          "none"
        );
      }

    }
  );
}

/* =========================================================
   INITIALIZE
========================================================= */

function initVectora() {

  renderProducts(
    "all"
  );

  renderGallery();

  renderCart();

  updateCartUI();

  updateYear();

  updateEmails();

  updateWhatsAppLinks();

  initRevealAnimations();

  initVelocityRows();

  initCursor();

  initHeroParallax();

  initImageTilt();

  initContactForm();

  initVideos();

  initHeaderScroll();

  initBackToTop();

  optimizeMobile();

  updateScrollProgress();

  /* -------------------------------------------------------
     Cart button fallback
  ------------------------------------------------------- */

  $$(".cart-trigger, [data-cart-open]").forEach(
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
   GLOBAL SCROLL
========================================================= */

let scrollTicking = false;

window.addEventListener(
  "scroll",
  () => {

    if (scrollTicking) {
      return;
    }

    scrollTicking = true;

    requestAnimationFrame(
      () => {

        updateScrollProgress();

        scrollTicking = false;

      }
    );

  },
  {
    passive: true
  }
);

/* =========================================================
   RESIZE
========================================================= */

let resizeTimer;

window.addEventListener(
  "resize",
  () => {

    clearTimeout(
      resizeTimer
    );

    resizeTimer =
      setTimeout(
        optimizeMobile,
        180
      );

  },
  {
    passive: true
  }
);

/* =========================================================
   DOM READY
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
