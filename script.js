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
    notes: "Statement steel"
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
    notes: "Statement steel"
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
    notes: "Sport statement"
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
    notes: "Celebration piece"
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
    notes: "Rectangular dress"
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
    notes: "Two-tone dress"
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
    notes: "Colour statement"
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
    notes: "Colour statement"
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
    notes: "Two-tone dress"
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
    notes: "Modern square"
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
    notes: "Modern square"
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
    notes: "Modern square"
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
    notes: "Classic dress"
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
    notes: "Classic dress"
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
    notes: "Ladies bangle"
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
    notes: "Ladies bangle"
  }
];

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
].map(([file, alt]) => ({ src: `assets/${file}`, alt }));

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
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

function renderProducts(filter = "all") {
  const list = filter === "all" ? products : products.filter((product) => product.category === filter);
  productGrid.innerHTML = list.map((product) => `
    <article class="product-card">
      <button type="button" class="product-card-button open-product" data-product="${product.id}" aria-label="View ${product.name}">
        <span class="product-image">
          <img src="${product.image}" alt="${product.name}: ${product.short}" loading="lazy" />
          <span class="product-tag">${product.categoryLabel}</span>
          <span class="product-arrow" aria-hidden="true">↗</span>
        </span>
        <span class="product-info">
          <span><h3>${product.name}</h3><p>${product.short}</p></span>
          <p class="product-price">Price<br />on request</p>
        </span>
      </button>
    </article>
  `).join("");
}

function renderGallery() {
  galleryGrid.innerHTML = archive.map((image, index) => `
    <button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="Open image ${index + 1} of ${archive.length}: ${image.alt}">
      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
    </button>
  `).join("");
}

function openModal(product) {
  if (!product) return;
  activeProduct = product;
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <div class="modal-product">
      <div class="modal-product-gallery"><img src="${product.image}" alt="${product.name}: ${product.short}" /></div>
      <div class="modal-product-content">
        <p class="eyebrow"><span></span> ${product.categoryLabel}</p>
        <h2 id="modal-title">${product.name}</h2>
        <p>${product.description}</p>
        <div class="modal-details">
          <span><b>Palette</b><strong>${product.palette}</strong></span>
          <span><b>Style</b><strong>${product.notes}</strong></span>
          <span><b>Price</b><strong>On request</strong></span>
        </div>
        <a class="button button-gold" href="https://wa.me/923328252059?text=${encodeURIComponent(`Hello Time Extra, I would like to ask about the ${product.name}.`)}" target="_blank" rel="noreferrer">Ask about this piece <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  `;
  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => $(".modal-close", productModal).focus(), 20);
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocus) window.setTimeout(() => lastFocus.focus(), 50);
}

function showLightbox(index) {
  lightboxIndex = (index + archive.length) % archive.length;
  const image = archive[lightboxIndex];
  lastFocus = document.activeElement;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCount.textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(archive.length).padStart(2, "0")}`;
  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  window.setTimeout(() => $(".modal-close", imageModal).focus(), 20);
}

function shiftLightbox(amount) {
  lightboxIndex = (lightboxIndex + amount + archive.length) % archive.length;
  const image = archive[lightboxIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCount.textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(archive.length).padStart(2, "0")}`;
}

function handleClick(event) {
  const productButton = event.target.closest(".open-product");
  if (productButton) {
    openModal(products.find((product) => product.id === productButton.dataset.product));
    return;
  }

  const galleryButton = event.target.closest(".gallery-item");
  if (galleryButton) showLightbox(Number(galleryButton.dataset.galleryIndex));
}

function trapFocus(event) {
  const openModalEl = $(".modal.is-open");
  if (!openModalEl || event.key !== "Tab") return;
  const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])', openModalEl)
    .filter((element) => element.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function startRevealObserver() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -35px" });
  items.forEach((item) => observer.observe(item));
}

function startVideoObserver() {
  const videos = $$(".reel-card video");
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: .55 });
  videos.forEach((video) => observer.observe(video));
}

function setupTilt() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  $$('[data-tilt]').forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      const rotateX = (-y * 5).toFixed(2);
      const rotateY = (x * 5).toFixed(2);
      if (card.classList.contains("hero-product")) {
        card.style.transform = `translateY(-44%) rotate(-4deg) perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else {
        card.style.transform = `perspective(900px) rotateY(${-10 + Number(rotateY)}deg) rotateZ(-2deg) rotateX(${rotateX}deg)`;
      }
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

function setupHeader() {
  const header = $(".site-header");
  const menuButton = $(".menu-toggle");
  const nav = $(".site-nav");
  const navLabel = $(".sr-only", menuButton);
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 28);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    navLabel.textContent = isOpen ? "Close navigation" : "Open navigation";
  });
  $$("a", nav).forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    navLabel.textContent = "Open navigation";
  }));

  if ("IntersectionObserver" in window) {
    const sections = ["home", "about", "products", "contact"].map((id) => document.getElementById(id));
    const observer = new IntersectionObserver((entries) => {
      const showing = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!showing) return;
      $$("a", nav).forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${showing.target.id}`));
    }, { rootMargin: "-35% 0px -55%", threshold: [0, .2, .5] });
    sections.forEach((section) => section && observer.observe(section));
  }
}

function setupCursorGlow() {
  const glow = $(".cursor-glow");
  if (!window.matchMedia("(hover: hover)").matches) return;
  document.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

function setupVelocityGallery() {
  const stage = $("#velocity-stage");
  const rows = $$('[data-velocity-row]');
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!stage || !rows.length || reducedMotion) return;

  let lastScroll = window.scrollY;
  let velocity = 0;
  let stageVisible = false;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const observer = new IntersectionObserver((entries) => {
    stageVisible = entries[0].isIntersecting;
  }, { threshold: 0 });
  observer.observe(stage);

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    velocity = clamp(velocity + (currentScroll - lastScroll) * .18, -95, 95);
    lastScroll = currentScroll;
  }, { passive: true });

  const animate = () => {
    if (stageVisible) {
      const rect = stage.getBoundingClientRect();
      const journey = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 1);
      rows.forEach((row) => {
        const base = Number(row.dataset.distance) * (journey - .5);
        const direction = Number(row.dataset.direction);
        const linkedOffset = velocity * direction * .82;
        row.style.transform = `translate3d(${base + linkedOffset}px, 0, 0)`;
      });
    }
    velocity *= .9;
    window.requestAnimationFrame(animate);
  };
  window.requestAnimationFrame(animate);
}

function setupForm() {
  const form = $("#contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const interest = formData.get("interest");
    const message = formData.get("message").trim();
    const body = `Hello Time Extra,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AInterest: ${encodeURIComponent(interest)}%0AMessage: ${encodeURIComponent(message || "Not specified")}`;
    window.open(`https://wa.me/923328252059?text=${body}`, "_blank", "noopener,noreferrer");
    toast.classList.add("show");
    form.reset();
    window.setTimeout(() => toast.classList.remove("show"), 4200);
  });
}

renderProducts();
renderGallery();
startRevealObserver();
startVideoObserver();
setupTilt();
setupHeader();
setupCursorGlow();
setupVelocityGallery();
setupForm();
$("#year").textContent = new Date().getFullYear();

document.addEventListener("click", handleClick);
$$(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".filter").forEach((item) => item.classList.toggle("active", item === button));
    renderProducts(button.dataset.filter);
  });
});

$$('[data-close-modal]').forEach((button) => button.addEventListener("click", () => closeModal(productModal)));
$$('[data-close-image]').forEach((button) => button.addEventListener("click", () => closeModal(imageModal)));
$(".gallery-prev").addEventListener("click", () => shiftLightbox(-1));
$(".gallery-next").addEventListener("click", () => shiftLightbox(1));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (productModal.classList.contains("is-open")) closeModal(productModal);
    if (imageModal.classList.contains("is-open")) closeModal(imageModal);
  }
  if (imageModal.classList.contains("is-open") && event.key === "ArrowLeft") shiftLightbox(-1);
  if (imageModal.classList.contains("is-open") && event.key === "ArrowRight") shiftLightbox(1);
  trapFocus(event);
});
/* ===== VECTORA SCROLL EFFECTS ===== */

document.addEventListener("DOMContentLoaded", () => {

  // Scroll Reveal
  const revealElements = document.querySelectorAll(
    "section, .product-card, .feature-card, .collection-card, .hero-content"
  );

  revealElements.forEach((element) => {
    element.classList.add("scroll-reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  // Scroll Progress
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      documentHeight > 0 ? scrollTop / documentHeight : 0;

    document.documentElement.style.setProperty(
      "--scroll-progress",
      progress
    );
  }

  window.addEventListener("scroll", updateScrollProgress, {
    passive: true
  });

  updateScrollProgress();


  // Parallax Effect
  const parallaxElements =
    document.querySelectorAll(".scroll-parallax");

  function updateParallax() {
    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const center =
        rect.top + rect.height / 2 - window.innerHeight / 2;

      const movement = center * -0.08;

      element.style.transform =
        `translateY(${movement}px)`;
    });
  }

  window.addEventListener("scroll", updateParallax, {
    passive: true
  });

  updateParallax();

});
