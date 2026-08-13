/* =========================================================
   VECTORA / TIME EXTRA — PREMIUM WATCH WEBSITE JS
   ========================================================= */

"use strict";

/* =========================
   CONFIG
========================= */

const WHATSAPP_NUMBER = "923328252059";
const STORE_EMAIL = "Waqtora000@gmail.com";

/* =========================
   HELPERS
========================= */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [
  ...scope.querySelectorAll(selector)
];

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

let cart = JSON.parse(localStorage.getItem("vectora-cart") || "[]");

/* =========================
   WHATSAPP
========================= */

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =========================
   TOAST
========================= */

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2500);
}

/* =========================
   CART STORAGE
========================= */

function saveCart() {
  localStorage.setItem("vectora-cart", JSON.stringify(cart));
  updateCartUI();
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function addToCart(product) {
  if (!product) return;

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price || "Price on request",
      quantity: 1
    });
  }

  saveCart();

  showToast(`${product.name} cart میں شامل ہوگئی ✓`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
}

/* =========================
   CART UI
========================= */

function updateCartUI() {
  const count = getCartCount();

  $$(".cart-count").forEach(element => {
    element.textContent = count;
    element.classList.toggle("has-items", count > 0);
  });

  $("[data-cart-count]")?.setAttribute("data-cart-count", count);
}

function renderCart() {
  const cartContainer = $("#cart-items");

  if (!cartContainer) return;

  if (!cart.length) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <span>◌</span>
        <h3>Your cart is empty</h3>
        <p>Select your favourite timepiece to continue.</p>
      </div>
    `;

    updateCartTotal();
    return;
  }

  cartContainer.innerHTML = cart.map(item => `
    <article class="cart-item">

      <div class="cart-item-image">
        <img
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
        />
      </div>

      <div class="cart-item-info">
        <h4>${item.name}</h4>

        <p class="cart-item-price">
          ${item.price}
        </p>

        <div class="cart-quantity">

          <button
            type="button"
            data-cart-minus="${item.id}"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-cart-plus="${item.id}"
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>

      </div>

      <button
        type="button"
        class="cart-remove"
        data-cart-remove="${item.id}"
        aria-label="Remove ${item.name}"
      >
        ×
      </button>

    </article>
  `).join("");

  updateCartTotal();
}

function updateCartTotal() {
  const totalElement = $("#cart-total");

  if (!totalElement) return;

  let total = 0;

  cart.forEach(item => {
    const numericPrice = parseFloat(
      String(item.price).replace(/[^0-9.]/g, "")
    );

    if (!Number.isNaN(numericPrice)) {
      total += numericPrice * item.quantity;
    }
  });

  totalElement.textContent =
    total > 0
      ? `Rs. ${total.toLocaleString()}`
      : "Price on request";
}

/* =========================
   CART EVENTS
========================= */

document.addEventListener("click", event => {

  const addButton = event.target.closest("[data-add-cart]");

  if (addButton) {
    const id = addButton.dataset.addCart;
    const product = products.find(item => item.id === id);

    if (product) {
      addToCart(product);
    }

    return;
  }

  const removeButton = event.target.closest("[data-cart-remove]");

  if (removeButton) {
    removeFromCart(removeButton.dataset.cartRemove);
    renderCart();
    return;
  }

  const plusButton = event.target.closest("[data-cart-plus]");

  if (plusButton) {
    changeQuantity(plusButton.dataset.cartPlus, 1);
    renderCart();
    return;
  }

  const minusButton = event.target.closest("[data-cart-minus]");

  if (minusButton) {
    changeQuantity(minusButton.dataset.cartMinus, -1);
    renderCart();
  }
});

/* =========================
   WHATSAPP CART ORDER
========================= */

function sendCartToWhatsApp() {

  if (!cart.length) {
    showToast("پہلے cart میں watch شامل کریں");
    return;
  }

  let message = `Hello VECTORA 👋

I would like to order / enquire about these watches:

`;

  cart.forEach((item, index) => {

    message += `${index + 1}. ${item.name}
Quantity: ${item.quantity}
Price: ${item.price}
Image: ${window.location.origin}/${item.image}

`;
  });

  message += `----------------------------

I would like to discuss the final price and bargaining.

Please confirm availability and best price.

Email:
${STORE_EMAIL}

Thank you.`;

  window.open(
    whatsappUrl(message),
    "_blank",
    "noopener,noreferrer"
  );
}

$("#checkout-whatsapp")?.addEventListener(
  "click",
  sendCartToWhatsApp
);

$("[data-whatsapp-cart]")?.addEventListener(
  "click",
  sendCartToWhatsApp
);

/* =========================
   PRODUCT RENDER
========================= */

function renderProducts(filter = "all") {

  if (!productGrid || typeof products === "undefined") {
    return;
  }

  const list =
    filter === "all"
      ? products
      : products.filter(
          product => product.category === filter
        );

  productGrid.innerHTML = list
    .map(product => {

      const price =
        product.price ||
        product.salePrice ||
        "Price on request";

      return `
        <article class="product-card reveal">

          <button
            type="button"
            class="product-card-button open-product"
            data-product="${product.id}"
            aria-label="View ${product.name}"
          >

            <span class="product-image">

              <img
                src="${product.image}"
                alt="${product.name}: ${product.short || ""}"
                loading="lazy"
              />

              <span class="product-tag">
                ${product.categoryLabel || product.category || "Watch"}
              </span>

              <span class="product-arrow">
                ↗
              </span>

            </span>

            <span class="product-info">

              <span>
                <h3>${product.name}</h3>

                <p>
                  ${product.short || ""}
                </p>
              </span>

              <span class="product-price-box">

                <span class="product-price">
                  Rs. ${price}
                </span>

                <button
                  type="button"
                  class="add-cart-small"
                  data-add-cart="${product.id}"
                >
                  Add to Cart
                </button>

              </span>

            </span>

          </button>

        </article>
      `;
    })
    .join("");

  requestAnimationFrame(() => {
    initRevealAnimations();
  });
}

/* =========================
   PRODUCT MODAL
========================= */

function openModal(product) {

  if (!product || !productModal || !modalBody) {
    return;
  }

  activeProduct = product;
  lastFocus = document.activeElement;

  const price =
    product.price ||
    product.salePrice ||
    "Price on request";

  modalBody.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-gallery">

        <img
          src="${product.image}"
          alt="${product.name}"
        />

      </div>

      <div class="modal-product-content">

        <p class="eyebrow">
          <span></span>
          ${product.categoryLabel || "Timepiece"}
        </p>

        <h2 id="modal-title">
          ${product.name}
        </h2>

        <p>
          ${product.description || product.short || ""}
        </p>

        <div class="modal-details">

          <span>
            <b>Palette</b>
            <strong>
              ${product.palette || "Premium"}
            </strong>
          </span>

          <span>
            <b>Style</b>
            <strong>
              ${product.style || product.categoryLabel || "Watch"}
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
            data-modal-cart="${product.id}"
          >
            Add to Cart
          </button>

          <a
            class="button button-outline"
            href="${whatsappUrl(
              `Hello VECTORA 👋

I am interested in this watch:

${product.name}

Price: ${price}

Product image:
${window.location.origin}/${product.image}

Please tell me the latest price and availability.`
            )}"
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp ↗
          </a>

        </div>

      </div>

    </div>
  `;

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  setTimeout(() => {
    $(".modal-close", productModal)?.focus();
  }, 50);
}

/* =========================
   MODAL CART
========================= */

document.addEventListener("click", event => {

  const modalCartButton =
    event.target.closest("[data-modal-cart]");

  if (!modalCartButton) return;

  const product = products.find(
    item => item.id === modalCartButton.dataset.modalCart
  );

  if (product) {
    addToCart(product);
  }
});

/* =========================
   CLOSE MODAL
========================= */

function closeModal(modal) {

  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (lastFocus) {
    lastFocus.focus();
  }
}

$$(".modal-close").forEach(button => {

  button.addEventListener("click", () => {
    closeModal(button.closest(".modal"));
  });

});

$$(".modal-backdrop").forEach(backdrop => {

  backdrop.addEventListener("click", () => {
    closeModal(backdrop.closest(".modal"));
  });

});

/* =========================
   PRODUCT OPEN
========================= */

document.addEventListener("click", event => {

  const button =
    event.target.closest(".open-product");

  if (!button) return;

  const id = button.dataset.product;

  if (
    typeof products === "undefined" ||
    !Array.isArray(products)
  ) {
    return;
  }

  const product =
    products.find(item => item.id === id);

  if (product) {
    openModal(product);
  }
});

/* =========================
   ESCAPE
========================= */

document.addEventListener("keydown", event => {

  if (event.key !== "Escape") return;

  if (productModal?.classList.contains("is-open")) {
    closeModal(productModal);
  }

  if (imageModal?.classList.contains("is-open")) {
    closeModal(imageModal);
  }

});

/* =========================
   PRODUCT FILTERS
========================= */

$$(".filter").forEach(button => {

  button.addEventListener("click", () => {

    $$(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderProducts(
      button.dataset.filter || "all"
    );

  });

});

/* =========================
   GALLERY
========================= */

function renderGallery() {

  if (!galleryGrid || typeof archive === "undefined") {
    return;
  }

  galleryGrid.innerHTML = archive
    .map((image, index) => `

      <button
        class="gallery-item"
        type="button"
        data-gallery-index="${index}"
        aria-label="Open image ${index + 1}"
      >

        <img
          src="${image.src}"
          alt="${image.alt}"
          loading="lazy"
        />

      </button>

    `)
    .join("");
}

function openLightbox(index) {

  if (
    typeof archive === "undefined" ||
    !archive[index] ||
    !imageModal
  ) {
    return;
  }

  lightboxIndex = index;

  if (lightboxImage) {
    lightboxImage.src = archive[index].src;
    lightboxImage.alt = archive[index].alt;
  }

  if (lightboxCount) {
    lightboxCount.textContent =
      `${index + 1} / ${archive.length}`;
  }

  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

document.addEventListener("click", event => {

  const galleryButton =
    event.target.closest("[data-gallery-index]");

  if (!galleryButton) return;

  openLightbox(
    Number(galleryButton.dataset.galleryIndex)
  );

});

/* =========================
   LIGHTBOX NEXT / PREVIOUS
========================= */

function changeLightbox(direction) {

  if (
    typeof archive === "undefined" ||
    !archive.length
  ) {
    return;
  }

  lightboxIndex =
    (lightboxIndex + direction + archive.length)
    % archive.length;

  openLightbox(lightboxIndex);
}

$("[data-lightbox-next]")?.addEventListener(
  "click",
  () => changeLightbox(1)
);

$("[data-lightbox-prev]")?.addEventListener(
  "click",
  () => changeLightbox(-1)
);

document.addEventListener("keydown", event => {

  if (!imageModal?.classList.contains("is-open")) {
    return;
  }

  if (event.key === "ArrowRight") {
    changeLightbox(1);
  }

  if (event.key === "ArrowLeft") {
    changeLightbox(-1);
  }

});

/* =========================
   SCROLL REVEAL
========================= */

function initRevealAnimations() {

  const elements =
    $$(".reveal:not(.revealed)");

  if (!elements.length) return;

  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(element => {
      element.classList.add("revealed");
    });

    return;
  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("revealed");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );

  elements.forEach(element => {
    observer.observe(element);
  });
}

/* =========================
   VELOCITY SCROLL
========================= */

function initVelocityRows() {

  const rows =
    $$("[data-velocity-row]");

  if (!rows.length) return;

  let ticking = false;

  function updateRows() {

    const scrollY = window.scrollY;

    rows.forEach(row => {

      const rect =
        row.getBoundingClientRect();

      const distance =
        Number(row.dataset.distance || -250);

      const direction =
        Number(row.dataset.direction || 1);

      const viewportCenter =
        window.innerHeight / 2;

      const rowCenter =
        rect.top + rect.height / 2;

      const progress =
        (rowCenter - viewportCenter) /
        window.innerHeight;

      const movement =
        progress * distance * direction;

      row.style.transform =
        `translate3d(${movement}px,0,0)`;
    });

    ticking = false;
  }

  function requestUpdate() {

    if (!ticking) {
      requestAnimationFrame(updateRows);
      ticking = true;
    }

  }

  window.addEventListener(
    "scroll",
    requestUpdate,
    { passive: true }
  );

  updateRows();
}

/* =========================
   PREMIUM CURSOR
========================= */

function initCursor() {

  if (
    window.matchMedia(
      "(pointer: coarse)"
    ).matches
  ) {
    return;
  }

  const cursor =
    document.createElement("div");

  cursor.className = "premium-cursor";

  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  window.addEventListener(
    "mousemove",
    event => {

      mouseX = event.clientX;
      mouseY = event.clientY;

    },
    { passive: true }
  );

  function animateCursor() {

    currentX +=
      (mouseX - currentX) * 0.18;

    currentY +=
      (mouseY - currentY) * 0.18;

    cursor.style.transform =
      `translate3d(${currentX}px,${currentY}px,0)`;

    requestAnimationFrame(
      animateCursor
    );
  }

  animateCursor();

  const interactive =
    "a,button,input,textarea,select,.product-card";

  document.addEventListener(
    "mouseover",
    event => {

      if (
        event.target.closest(interactive)
      ) {
        cursor.classList.add("cursor-hover");
      }

    }
  );

  document.addEventListener(
    "mouseout",
    event => {

      if (
        event.target.closest(interactive)
      ) {
        cursor.classList.remove(
          "cursor-hover"
        );
      }

    }
  );
}

/* =========================
   PARALLAX HERO
========================= */

function initHeroParallax() {

  const hero =
    $(".hero");

  if (!hero) return;

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    return;
  }

  let ticking = false;

  function update() {

    const scrollY =
      window.scrollY;

    if (scrollY < window.innerHeight) {

      hero.style.setProperty(
        "--hero-scroll",
        `${scrollY * 0.18}px`
      );

    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {

      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }

    },
    { passive: true }
  );
}

/* =========================
   IMAGE TILT
========================= */

function initImageTilt() {

  if (
    window.matchMedia(
      "(pointer: coarse)"
    ).matches
  ) {
    return;
  }

  document.addEventListener(
    "mousemove",
    event => {

      const card =
        event.target.closest(
          ".product-card"
        );

      if (!card) return;

      const rect =
        card.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      const rotateY =
        (x - 0.5) * 5;

      const rotateX =
        (0.5 - y) * 5;

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

      if (!card) return;

      card.style.transform = "";

    }
  );
}

/* =========================
   CONTACT FORM
========================= */

const contactForm =
  $("#contact-form");

contactForm?.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const formData =
      new FormData(contactForm);

    const name =
      formData.get("name") || "";

    const phone =
      formData.get("phone") || "";

    const interest =
      formData.get("interest") || "";

    const message =
      formData.get("message") || "";

    const whatsappMessage =
`Hello VECTORA 👋

Name: ${name}
Phone: ${phone}

Interested in:
${interest}

Message:
${message}

Email:
${STORE_EMAIL}`;

    window.open(
      whatsappUrl(whatsappMessage),
      "_blank",
      "noopener,noreferrer"
    );

    contactForm.reset();

  }
);

/* =========================
   EMAIL REPLACEMENT
========================= */

$$('a[href^="mailto:"]').forEach(
  link => {

    link.href =
      `mailto:${STORE_EMAIL}`;

    link.textContent =
      STORE_EMAIL;

  }
);

/* =========================
   GENERAL WHATSAPP BUTTONS
========================= */

$$(
  'a[href*="wa.me/"]'
).forEach(link => {

  const oldHref =
    link.getAttribute("href");

  if (!oldHref) return;

  try {

    const url =
      new URL(oldHref);

    const text =
      url.searchParams.get("text");

    if (text) {

      const newMessage =
        text
          .replace(
            /Time Extra/gi,
            "VECTORA"
          );

      link.href =
        whatsappUrl(newMessage);

    }

  } catch {
    // Ignore malformed URLs.
  }

});

/* =========================
   VIDEO AUTOPLAY
========================= */

function initVideos() {

  const videos =
    $$("video");

  if (!videos.length) return;

  if (
    !("IntersectionObserver" in window)
  ) return;

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          const video =
            entry.target;

          if (entry.isIntersecting) {

            video.play().catch(
              () => {}
            );

          } else {

            video.pause();

          }

        });

      },
      {
        threshold: 0.15
      }
    );

  videos.forEach(video => {
    observer.observe(video);
  });
}

/* =========================
   MOBILE PERFORMANCE
========================= */

function optimizeMobile() {

  const isMobile =
    window.innerWidth <= 768;

  if (!isMobile) return;

  document.documentElement
    .classList.add("mobile-device");

  $$("video").forEach(video => {

    video.setAttribute(
      "preload",
      "none"
    );

  });
}

/* =========================
   INITIALIZE
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProducts("all");
    renderGallery();
    renderCart();

    initRevealAnimations();
    initVelocityRows();
    initCursor();
    initHeroParallax();
    initImageTilt();
    initVideos();
    optimizeMobile();

    updateCartUI();

  }
);

/* =========================
   WINDOW RESIZE
========================= */

let resizeTimer;

window.addEventListener(
  "resize",
  () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(
      () => {
        optimizeMobile();
      },
      180
    );

  },
  { passive: true }
);
