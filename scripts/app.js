/**
 * ============================================================================
 * MAISON ÉLAN ATELIER — ARCHITECTURE & RUNWAY REELS CONTROLLER
 * Senior Frontend Craftsmanship: Fluid Snap Flow, Concierge Engine & Shopping Cart
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Currency Rates & Exchange Engine
// ----------------------------------------------------------------------------
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, label: "EUR (€)" },
  GBP: { symbol: "£", rate: 0.79, label: "GBP (£)" },
  JPY: { symbol: "¥", rate: 155.0, label: "JPY (¥)" }
};

function formatPrice(usdAmount, currencyCode = AtelierState.currency) {
  const curr = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const converted = Math.round(usdAmount * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// ----------------------------------------------------------------------------
// 2. Haute Couture Lookbook Archive Data
// ----------------------------------------------------------------------------
const RUNWAY_ARCHIVE = [
  {
    id: "look-1",
    lookNumber: "LOOK 01",
    title: "The Obsidian Sovereign Trench",
    tagline: "Architectural Virgin Wool & Bonded Silk Placket",
    price: 2450,
    image: "images/look-1.jpg",
    season: "autumn-winter",
    seasonName: "Autumn / Winter '26",
    purposes: ["architectural", "minimal-daily"],
    purposeName: "Architectural Power Dressing",
    availableSizes: ["XS", "S", "M", "L", "XL", "custom"],
    color: "Obsidian Noir",
    fabric: "100% Biella Virgin Wool (480gsm) with Bonded Habotai Silk Lining",
    origin: "Hand-tailored in Biella, Italy",
    drape: "Heavy Architectural Structure (Stiffness 8.5/10)",
    stiffnessScore: 85,
    description: "An homage to modern brutalist tailoring. Sculpted drop shoulders descend into an exaggerated storm flap with hand-bound pick stitching and an elongated removable sash.",
    specs: [
      "Water-repellent nanotech micro-weave finish",
      "Hand-carved horn buttons with engraved atelier serial",
      "Interior concealed passport & velvet-lined pocket",
      "Limited edition bespoke release of 45 numbered pieces"
    ],
    likes: 1842
  },
  {
    id: "look-2",
    lookNumber: "LOOK 02",
    title: "L'Aurore Liquid Silk Slip Gown",
    tagline: "Fluid 32mm Mulberry Silk with Sculpted Cowl",
    price: 1890,
    image: "images/look-2.jpg",
    season: "spring-summer",
    seasonName: "Spring / Summer '26",
    purposes: ["gala", "resort"],
    purposeName: "Gala & Haute Soirée",
    availableSizes: ["XS", "S", "M", "L", "custom"],
    color: "Champagne Liquide",
    fabric: "100% Grade 6A Liquid Mulberry Silk Charmeuse (32 momme)",
    origin: "Atelier Como, Northern Italy",
    drape: "Ethereal Fluid Liquid Drape (Stiffness 1.5/10)",
    stiffnessScore: 15,
    description: "Spun from heavyweight liquid silk that catches low ambient candlefire. Features a plunging cowl back, bias-cut silhouette that elongates the form, and a subtle sweeping puddle hem.",
    specs: [
      "Raw-edge French hand-turned seams",
      "Adjustable micro-rouleau straps with 18k gold aglets",
      "Internal silicone gripper ribbon for flawless hold",
      "Natural anti-crease organic steam tempering"
    ],
    likes: 3120
  },
  {
    id: "look-3",
    lookNumber: "LOOK 03",
    title: "Nomad Cashmere Mockneck & Trousers",
    tagline: "4-Ply Mongolian Un-Dyed Cashmere & Pleated Wool",
    price: 1620,
    image: "images/look-3.jpg",
    season: "autumn-winter",
    seasonName: "Autumn / Winter '26",
    purposes: ["minimal-daily", "resort"],
    purposeName: "Quiet Luxury Daily",
    availableSizes: ["XS", "S", "M", "L", "XL", "custom"],
    color: "Oatmeal & Slate",
    fabric: "100% Certified Organic Mongolian Cashmere & Australian Fine Merino",
    origin: "Knitted in Hawick, Scotland",
    drape: "Cloudlike Cocoon Softness (Stiffness 3.0/10)",
    stiffnessScore: 30,
    description: "The epitome of understated opulence. Fisherman ribbed funnel neck crafted on vintage gauge 5 flatbeds, paired with double-pleated relaxed trousers in charcoal merino gabardine.",
    specs: [
      "Zero-chemical organic vegetable cleansing wash",
      "Naturally hypoallergenic, breathable thermoregulation",
      "Reinforced seamless rib cuffs and collar band",
      "Hand-finished horn waist adjusters"
    ],
    likes: 2470
  },
  {
    id: "look-4",
    lookNumber: "LOOK 04",
    title: "The Monolith Sculpted Peplum Blazer",
    tagline: "Waist-Corseted Architectural Wool with Leather Harness",
    price: 2850,
    image: "images/look-4.jpg",
    season: "monochrome",
    seasonName: "Monochromatic Capsule",
    purposes: ["architectural", "gala"],
    purposeName: "Architectural Tailoring & Statement",
    availableSizes: ["XS", "S", "M", "L", "custom"],
    color: "Graphite Melange",
    fabric: "Japanese High-Twist Wool Barathea with Tuscan Bridle Leather Plaque",
    origin: "Constructed in Kyoto, Japan",
    drape: "Razor-sharp Tailored Sculpt (Stiffness 9.0/10)",
    stiffnessScore: 90,
    description: "Constructed with full floating canvas and hand-padded lapels. An integrated internal waist cincher sculpts a dramatic hourglass contour with origami-folded peplum skirts.",
    specs: [
      "Full hand-basted genuine horsehair chest canvas",
      "Surgical grade stainless steel magnetic clip fasteners",
      "Twin angled jet pockets with silk faille binding",
      "Collector certificate authenticated by our Lead Artisan"
    ],
    likes: 4190
  },
  {
    id: "look-5",
    lookNumber: "LOOK 05",
    title: "Solaris Sculpted Flax Ensemble",
    tagline: "Sun-Bleached Belgian Flax with Asymmetric Wrap Mantle",
    price: 1480,
    image: "images/look-5.jpg",
    season: "spring-summer",
    seasonName: "Spring / Summer '26",
    purposes: ["resort", "minimal-daily"],
    purposeName: "Coastal Escape & Vacation Lounge",
    availableSizes: ["XS", "S", "M", "L", "XL", "custom"],
    color: "Chalk White",
    fabric: "100% Master of Linen® Certified Belgian Flax (340gsm)",
    origin: "Flanders, Belgium & Synthesized in Grasse",
    drape: "Crisp Breathable Architecture (Stiffness 5.0/10)",
    stiffnessScore: 50,
    description: "Evoking sun-drenched Aegean terraces and Mediterranean coastal light. A dramatic diagonal cross-torso wrap connects to billowy double-pleated palazzo trousers with hidden drawstring waistband.",
    specs: [
      "Sun-cured natural un-dyed plant fiber tone",
      "Mother-of-pearl internal anchor buttons",
      "Deep French slash pockets with bar-tack reinforcement",
      "Ultra-breathable airy weave engineered for warm climes"
    ],
    likes: 1955
  }
];

// ----------------------------------------------------------------------------
// 3. Application State Store
// ----------------------------------------------------------------------------
const AtelierState = {
  requirements: {
    size: "S",
    season: "all",
    purpose: "all"
  },
  currency: "USD",
  activeView: "reels", // 'reels' | 'catalog'
  currentReelIndex: 0,
  filteredLooks: [...RUNWAY_ARCHIVE],
  cart: [],
  wishlist: new Set(),
  likesMap: {},
  audioActive: false,
  reelTimer: null,
  reelProgress: 0,
  storyDurationMs: 8000,
  isPaused: false,

  // Cart & Pricing Enhancements
  discountCode: "",
  discountPercent: 0,
  discountFixedUSD: 0,
  monogram: "",
  whiteGlovePackaging: true,
  selectedReelSizes: {} // lookId -> chosen size
};

// Initialize default likes & reel sizes
RUNWAY_ARCHIVE.forEach(item => {
  AtelierState.likesMap[item.id] = item.likes;
  AtelierState.selectedReelSizes[item.id] = "S";
});

// ----------------------------------------------------------------------------
// 4. Web Audio Synthesizer (Runway Ambient Soundscape)
// ----------------------------------------------------------------------------
class RunwayAmbientSynthesizer {
  constructor() {
    this.ctx = null;
    this.droneGain = null;
    this.chimeGain = null;
    this.intervalId = null;
    this.isMuted = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  start() {
    this.init();
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    this.droneGain = this.ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 note

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);

    this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.droneGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 3);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    osc1.start();
    osc2.start();

    this.chimeGain = this.ctx.createGain();
    this.chimeGain.gain.value = 0.05;
    this.chimeGain.connect(this.ctx.destination);

    this.intervalId = setInterval(() => {
      if (!this.isMuted) {
        this.triggerHarmonicChime();
      }
    }, 6500);

    this.isMuted = false;
  }

  triggerHarmonicChime() {
    if (!this.ctx) return;
    const chimeOsc = this.ctx.createOscillator();
    const chimeEnvelope = this.ctx.createGain();
    const frequencies = [440, 554.37, 659.25, 880, 1108.73];
    const freq = frequencies[Math.floor(Math.random() * frequencies.length)];

    chimeOsc.type = "sine";
    chimeOsc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    chimeEnvelope.gain.setValueAtTime(0.001, this.ctx.currentTime);
    chimeEnvelope.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 0.1);
    chimeEnvelope.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.5);

    chimeOsc.connect(chimeEnvelope);
    chimeEnvelope.connect(this.chimeGain);

    chimeOsc.start();
    chimeOsc.stop(this.ctx.currentTime + 4.8);
  }

  stop() {
    if (this.droneGain && this.ctx) {
      this.droneGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.8);
    }
    if (this.intervalId) clearInterval(this.intervalId);
    this.isMuted = true;
  }

  toggle() {
    if (this.isMuted) {
      this.start();
      return true;
    } else {
      this.stop();
      return false;
    }
  }
}

const runwayAudio = new RunwayAmbientSynthesizer();

// ----------------------------------------------------------------------------
// 5. DOM Cache
// ----------------------------------------------------------------------------
const DOM = {
  cursor: document.getElementById("custom-cursor"),
  cursorLabel: document.getElementById("cursor-label"),
  header: document.getElementById("atelier-header"),
  brandLogo: document.getElementById("brand-logo"),
  conciergeStatusBtn: document.getElementById("concierge-status-btn"),
  pillSummaryText: document.getElementById("pill-summary-text"),
  currencySelect: document.getElementById("currency-select"),
  cartCurrencyPills: document.getElementById("cart-currency-pills"),
  switchReelsBtn: document.getElementById("switch-reels-btn"),
  switchCatalogBtn: document.getElementById("switch-catalog-btn"),
  audioToggleBtn: document.getElementById("audio-toggle-btn"),
  wishlistBtn: document.getElementById("wishlist-btn"),
  wishlistCount: document.getElementById("wishlist-count"),
  cartDrawerBtn: document.getElementById("cart-drawer-btn"),
  cartCount: document.getElementById("cart-count"),

  // Concierge Modal
  conciergeModal: document.getElementById("concierge-modal"),
  conciergeCloseBtn: document.getElementById("concierge-close-btn"),
  applyConciergeBtn: document.getElementById("apply-concierge-btn"),

  // Reels View
  reelsView: document.getElementById("reels-view"),
  reelsProgressBar: document.getElementById("reels-progress-bar"),
  reelsViewport: document.getElementById("reels-viewport"),
  currentReelNum: document.getElementById("current-reel-num"),
  totalReelNum: document.getElementById("total-reel-num"),
  reelPrevArrow: document.getElementById("reel-prev-arrow"),
  reelNextArrow: document.getElementById("reel-next-arrow"),
  scrollHint: document.getElementById("scroll-hint"),

  // Catalog View
  catalogView: document.getElementById("catalog-view"),
  catalogGrid: document.getElementById("catalog-grid"),
  catalogActiveTags: document.getElementById("catalog-active-tags"),
  catalogSort: document.getElementById("catalog-sort"),

  // Detail Modal
  detailModal: document.getElementById("detail-modal"),
  detailModalContent: document.getElementById("detail-modal-content"),

  // Cart Drawer
  cartDrawer: document.getElementById("cart-drawer"),
  cartCloseBtn: document.getElementById("cart-close-btn"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartMonogramInput: document.getElementById("cart-monogram-input"),
  whiteGloveCheck: document.getElementById("white-glove-check"),
  couponInput: document.getElementById("coupon-input"),
  couponApplyBtn: document.getElementById("coupon-apply-btn"),
  couponStatusMsg: document.getElementById("coupon-status-msg"),
  cartSummarySubtotal: document.getElementById("cart-summary-subtotal"),
  cartDiscountRow: document.getElementById("cart-discount-row"),
  cartSummaryDiscount: document.getElementById("cart-summary-discount"),
  cartSummaryTotal: document.getElementById("cart-summary-total"),
  installmentPreviewText: document.getElementById("installment-preview-text"),
  checkoutTriggerBtn: document.getElementById("checkout-trigger-btn"),
  clearWardrobeBtn: document.getElementById("clear-wardrobe-btn"),

  // Checkout Modal
  checkoutModal: document.getElementById("checkout-modal"),
  checkoutCloseBtn: document.getElementById("checkout-close-btn"),
  checkoutForm: document.getElementById("checkout-form"),
  checkoutModalTotal: document.getElementById("checkout-modal-total"),
  finalizeOrderBtn: document.getElementById("finalize-order-btn"),

  // Success Modal
  successModal: document.getElementById("success-modal"),
  successCloseBtn: document.getElementById("success-close-btn"),
  orderCode: document.getElementById("order-code"),
  receiptItemsContainer: document.getElementById("receipt-items-container"),
  receiptDest: document.getElementById("receipt-dest"),
  receiptTotal: document.getElementById("receipt-total"),

  // Toasts
  toastHub: document.getElementById("toast-hub")
};

// ----------------------------------------------------------------------------
// 6. Custom Magnetic Cursor
// ----------------------------------------------------------------------------
function initCustomCursor() {
  if (!DOM.cursor || window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    DOM.cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-cursor]");
    if (target) {
      const label = target.getAttribute("data-cursor") || "VIEW";
      DOM.cursorLabel.textContent = label;
      DOM.cursor.classList.add("active-hover");
    } else {
      const isClickable = e.target.closest("button, a, select, input, .season-card, .purpose-card, .size-pill, .catalog-card, .payment-method-card");
      if (isClickable) {
        DOM.cursorLabel.textContent = "SELECT";
        DOM.cursor.classList.add("active-hover");
      } else {
        DOM.cursor.classList.remove("active-hover");
      }
    }
  });
}

// ----------------------------------------------------------------------------
// 7. Global Currency Switcher
// ----------------------------------------------------------------------------
function initCurrencySwitcher() {
  // Header select change
  DOM.currencySelect?.addEventListener("change", (e) => {
    setCurrency(e.target.value);
  });

  // Drawer pills change
  DOM.cartCurrencyPills?.querySelectorAll(".curr-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const curr = pill.getAttribute("data-curr");
      setCurrency(curr);
    });
  });
}

function setCurrency(currencyCode) {
  if (!CURRENCIES[currencyCode]) return;
  AtelierState.currency = currencyCode;

  // Sync header select
  if (DOM.currencySelect) DOM.currencySelect.value = currencyCode;

  // Sync drawer pills
  DOM.cartCurrencyPills?.querySelectorAll(".curr-pill").forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-curr") === currencyCode);
  });

  // Update views
  renderReels();
  renderCatalog();
  updateCartUI();

  showToast(`✦ Switched pricing currency to ${CURRENCIES[currencyCode].label}`);
}

// ----------------------------------------------------------------------------
// 8. Style Concierge & Requirements Engine
// ----------------------------------------------------------------------------
function initConcierge() {
  const stepDots = DOM.conciergeModal.querySelectorAll(".step-dot");
  const wizardSteps = DOM.conciergeModal.querySelectorAll(".wizard-step");

  function switchStep(targetIndex) {
    stepDots.forEach(dot => {
      const step = parseInt(dot.getAttribute("data-step"));
      dot.classList.remove("active", "completed");
      if (step === targetIndex) dot.classList.add("active");
      else if (step < targetIndex) dot.classList.add("completed");
    });

    wizardSteps.forEach(step => {
      const stepIdx = parseInt(step.getAttribute("data-step-index"));
      step.classList.toggle("active", stepIdx === targetIndex);
    });
  }

  DOM.conciergeModal.querySelectorAll(".btn-forward").forEach(btn => {
    btn.addEventListener("click", () => {
      const nextStep = parseInt(btn.getAttribute("data-next"));
      switchStep(nextStep);
    });
  });

  DOM.conciergeModal.querySelectorAll(".btn-back").forEach(btn => {
    btn.addEventListener("click", () => {
      const prevStep = parseInt(btn.getAttribute("data-prev"));
      switchStep(prevStep);
    });
  });

  stepDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const step = parseInt(dot.getAttribute("data-step"));
      switchStep(step);
    });
  });

  // Size Options
  const sizePills = DOM.conciergeModal.querySelectorAll(".size-pill");
  sizePills.forEach(pill => {
    pill.addEventListener("click", () => {
      sizePills.forEach(p => p.classList.remove("selected"));
      pill.classList.add("selected");
      AtelierState.requirements.size = pill.getAttribute("data-size");
      
      const hint = DOM.conciergeModal.querySelector(".match-hint strong");
      if (hint) {
        hint.textContent = pill.querySelector(".size-code").textContent;
      }
    });
  });

  // Season Options
  const seasonCards = DOM.conciergeModal.querySelectorAll(".season-card");
  seasonCards.forEach(card => {
    card.addEventListener("click", () => {
      seasonCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      AtelierState.requirements.season = card.getAttribute("data-season");
    });
  });

  // Purpose Options
  const purposeCards = DOM.conciergeModal.querySelectorAll(".purpose-card");
  purposeCards.forEach(card => {
    card.addEventListener("click", () => {
      purposeCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      AtelierState.requirements.purpose = card.getAttribute("data-purpose");
    });
  });

  // Finish
  DOM.applyConciergeBtn.addEventListener("click", () => {
    applyRequirements();
    closeConciergeModal();
    showToast(`✦ Atelier Tailored: Silhouettes matched to ${AtelierState.requirements.size}`);
  });

  DOM.conciergeStatusBtn.addEventListener("click", openConciergeModal);
  DOM.conciergeCloseBtn.addEventListener("click", closeConciergeModal);
  DOM.conciergeModal.addEventListener("click", (e) => {
    if (e.target === DOM.conciergeModal) closeConciergeModal();
  });
}

function openConciergeModal() {
  DOM.conciergeModal.classList.add("open");
  DOM.conciergeModal.setAttribute("aria-hidden", "false");
  pauseStoryTimer();
}

function closeConciergeModal() {
  DOM.conciergeModal.classList.remove("open");
  DOM.conciergeModal.setAttribute("aria-hidden", "true");
  resumeStoryTimer();
}

function applyRequirements() {
  const req = AtelierState.requirements;

  AtelierState.filteredLooks = RUNWAY_ARCHIVE.filter(look => {
    const matchesSize = req.size === "custom" || look.availableSizes.includes(req.size);
    const matchesSeason = req.season === "all" || look.season === req.season;
    const matchesPurpose = req.purpose === "all" || look.purposes.includes(req.purpose);
    return matchesSize && matchesSeason && matchesPurpose;
  });

  if (AtelierState.filteredLooks.length === 0) {
    showToast("No exact matches for this strict combination. Showing all pieces with tailored fit tags.");
    AtelierState.filteredLooks = [...RUNWAY_ARCHIVE];
  }

  updateStatusPillText();
  AtelierState.currentReelIndex = 0;
  renderReels();
  renderCatalog();
}

function updateStatusPillText() {
  const { size, season, purpose } = AtelierState.requirements;
  
  let seasonLabel = "All Seasons";
  if (season === "autumn-winter") seasonLabel = "Autumn/Winter";
  else if (season === "spring-summer") seasonLabel = "Spring/Summer";
  else if (season === "monochrome") seasonLabel = "Noir Capsule";

  let purposeLabel = "Universal";
  if (purpose === "gala") purposeLabel = "Gala Soirée";
  else if (purpose === "architectural") purposeLabel = "Tailoring";
  else if (purpose === "minimal-daily") purposeLabel = "Quiet Luxury";
  else if (purpose === "resort") purposeLabel = "Resort";

  DOM.pillSummaryText.textContent = `${seasonLabel} · ${purposeLabel} · Size ${size.toUpperCase()}`;
}

// ----------------------------------------------------------------------------
// 9. RUNWAY REELS VIEW & MOMENTUM SNAP FLOW
// ----------------------------------------------------------------------------
function initReels() {
  renderReels();

  // Scroll Interceptor for Butter-Smooth Step Navigation
  let isScrolling = false;
  DOM.reelsViewport.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (Math.abs(e.deltaY) > 40) {
      if (e.deltaY > 0 && AtelierState.currentReelIndex < AtelierState.filteredLooks.length - 1) {
        isScrolling = true;
        scrollToReel(AtelierState.currentReelIndex + 1);
        setTimeout(() => { isScrolling = false; }, 650);
      } else if (e.deltaY < 0 && AtelierState.currentReelIndex > 0) {
        isScrolling = true;
        scrollToReel(AtelierState.currentReelIndex - 1);
        setTimeout(() => { isScrolling = false; }, 650);
      }
    }
  }, { passive: true });

  window.addEventListener("keydown", (e) => {
    if (AtelierState.activeView !== "reels") return;
    if (DOM.conciergeModal.classList.contains("open") || DOM.cartDrawer.classList.contains("open") || DOM.checkoutModal.classList.contains("open")) return;

    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      if (AtelierState.currentReelIndex < AtelierState.filteredLooks.length - 1) {
        scrollToReel(AtelierState.currentReelIndex + 1);
      }
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      if (AtelierState.currentReelIndex > 0) {
        scrollToReel(AtelierState.currentReelIndex - 1);
      }
    }
  });

  DOM.reelPrevArrow.addEventListener("click", () => {
    if (AtelierState.currentReelIndex > 0) {
      scrollToReel(AtelierState.currentReelIndex - 1);
    }
  });

  DOM.reelNextArrow.addEventListener("click", () => {
    if (AtelierState.currentReelIndex < AtelierState.filteredLooks.length - 1) {
      scrollToReel(AtelierState.currentReelIndex + 1);
    }
  });

  DOM.reelsViewport.addEventListener("mouseenter", pauseStoryTimer);
  DOM.reelsViewport.addEventListener("mouseleave", resumeStoryTimer);
  DOM.reelsViewport.addEventListener("touchstart", pauseStoryTimer, { passive: true });
  DOM.reelsViewport.addEventListener("touchend", resumeStoryTimer, { passive: true });
}

function renderReels() {
  const looks = AtelierState.filteredLooks;
  DOM.reelsViewport.innerHTML = "";
  DOM.reelsProgressBar.innerHTML = "";

  if (looks.length === 0) return;

  DOM.totalReelNum.textContent = String(looks.length).padStart(2, "0");

  // Progress segments
  looks.forEach((_, idx) => {
    const segment = document.createElement("div");
    segment.className = `progress-segment ${idx === 0 ? "active" : ""}`;
    segment.setAttribute("data-index", idx);
    segment.innerHTML = `<div class="progress-segment-fill"></div>`;
    segment.addEventListener("click", () => scrollToReel(idx));
    DOM.reelsProgressBar.appendChild(segment);
  });

  // Reel slides
  looks.forEach((look, index) => {
    const isLiked = AtelierState.wishlist.has(look.id);
    const likeCount = AtelierState.likesMap[look.id] || look.likes;
    const req = AtelierState.requirements;
    const isMatch = look.availableSizes.includes(req.size);
    const currentChosenSize = AtelierState.selectedReelSizes[look.id] || req.size;
    const formattedPrice = formatPrice(look.price);

    const slide = document.createElement("section");
    slide.className = `reel-slide ${index === AtelierState.currentReelIndex ? "active-slide" : ""}`;
    slide.setAttribute("data-index", index);
    slide.setAttribute("data-id", look.id);

    slide.innerHTML = `
      <div class="reel-media-wrapper">
        <img src="${look.image}" alt="${look.title}" class="reel-image" loading="${index < 2 ? 'eager' : 'lazy'}">
        <div class="reel-gradient-overlay"></div>
      </div>

      <div class="reel-content-layer">
        
        <div class="reel-editorial-details">
          
          <div class="reel-badge-row">
            <span class="reel-look-tag">${look.lookNumber}</span>
            <span class="reel-match-badge">
              ✦ ${isMatch ? `TAILORED FOR SIZE ${req.size.toUpperCase()}` : 'CUSTOM SUR-MESURE AVAILABLE'}
            </span>
          </div>

          <h2 class="reel-title">${look.title}</h2>
          <p class="reel-tagline">"${look.tagline}"</p>

          <div class="reel-fabric-brief">
            <span class="fabric-dot"></span>
            <span>${look.fabric.split('with')[0]}</span>
            <span style="opacity: 0.4;">|</span>
            <span>${look.origin}</span>
          </div>

          <!-- Reel Quick Size Picker -->
          <div class="reel-size-picker-wrap">
            <span class="reel-size-label">SELECT SIZE:</span>
            <div class="reel-size-pills">
              ${["XS", "S", "M", "L", "XL"].map(sz => `
                <button class="size-mini-pill ${sz === currentChosenSize ? 'selected' : ''}" data-look-id="${look.id}" data-size="${sz}">
                  ${sz}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="reel-cta-bar">
            <div class="reel-price-display">
              <span class="price-label">INVESTMENT</span>
              <span class="price-amount">${formattedPrice}</span>
            </div>

            <button class="luxury-btn acquire-btn" data-look-id="${look.id}" data-cursor="BAG">
              <span>ACQUIRE SILHOUETTE</span>
              <span class="gold-shine"></span>
            </button>

            <button class="ghost-btn inspect-btn" data-look-id="${look.id}" data-cursor="DETAILS">
              <span>DRAPE & SPECS</span>
            </button>
          </div>

        </div>

      </div>

      <!-- Right Action Bar -->
      <div class="reel-sidebar-actions">
        <div class="reel-action-btn-group">
          <button class="reel-action-btn like-action-btn ${isLiked ? 'liked' : ''}" data-look-id="${look.id}" title="Save to Atelier Wardrobe" data-cursor="LIKE">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <span class="action-count">${likeCount}</span>
        </div>

        <div class="reel-action-btn-group">
          <button class="reel-action-btn inspect-action-btn" data-look-id="${look.id}" title="Examine Fabric & Provenance" data-cursor="VIEW">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
          <span class="action-count">DETAILS</span>
        </div>

        <div class="reel-action-btn-group">
          <button class="reel-action-btn bag-action-btn" data-look-id="${look.id}" title="Add to Wardrobe" data-cursor="ADD">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <span class="action-count">BAG</span>
        </div>

        <div class="reel-action-btn-group">
          <button class="reel-action-btn share-action-btn" data-look-id="${look.id}" title="Share Silhouette" data-cursor="SHARE">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
          <span class="action-count">SHARE</span>
        </div>
      </div>
    `;

    DOM.reelsViewport.appendChild(slide);
  });

  attachReelEvents();
  startStoryTimer();
}

function attachReelEvents() {
  // Inline Size Pills on Reel
  DOM.reelsViewport.querySelectorAll(".size-mini-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = pill.getAttribute("data-look-id");
      const chosenSize = pill.getAttribute("data-size");
      AtelierState.selectedReelSizes[lookId] = chosenSize;

      // Update UI pills in this slide
      const slide = pill.closest(".reel-slide");
      slide.querySelectorAll(".size-mini-pill").forEach(p => p.classList.remove("selected"));
      pill.classList.add("selected");
    });
  });

  // Like buttons
  DOM.reelsViewport.querySelectorAll(".like-action-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = btn.getAttribute("data-look-id");
      toggleWishlist(lookId, btn);
    });
  });

  // Inspect detail buttons
  DOM.reelsViewport.querySelectorAll(".inspect-btn, .inspect-action-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = btn.getAttribute("data-look-id");
      openDetailModal(lookId);
    });
  });

  // Add to wardrobe / Bag buttons
  DOM.reelsViewport.querySelectorAll(".acquire-btn, .bag-action-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = btn.getAttribute("data-look-id");
      const sizeToUse = AtelierState.selectedReelSizes[lookId] || AtelierState.requirements.size;
      addToCart(lookId, sizeToUse);
      openCartDrawer();
    });
  });

  // Share buttons
  DOM.reelsViewport.querySelectorAll(".share-action-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = btn.getAttribute("data-look-id");
      const look = RUNWAY_ARCHIVE.find(l => l.id === lookId);
      navigator.clipboard?.writeText(window.location.href);
      showToast(`✦ Link to "${look.title}" copied to clipboard`);
    });
  });
}

function scrollToReel(index) {
  const slides = DOM.reelsViewport.querySelectorAll(".reel-slide");
  if (!slides[index]) return;

  slides[index].scrollIntoView({ behavior: "smooth" });
  setActiveReelIndex(index);
}

function setActiveReelIndex(index) {
  if (AtelierState.currentReelIndex === index) return;
  AtelierState.currentReelIndex = index;

  DOM.currentReelNum.textContent = String(index + 1).padStart(2, "0");

  const slides = DOM.reelsViewport.querySelectorAll(".reel-slide");
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active-slide", idx === index);
  });

  const segments = DOM.reelsProgressBar.querySelectorAll(".progress-segment");
  segments.forEach((seg, idx) => {
    seg.classList.toggle("completed", idx < index);
    seg.classList.toggle("active", idx === index);
    const fill = seg.querySelector(".progress-segment-fill");
    if (fill) {
      fill.style.width = idx < index ? "100%" : idx === index ? "0%" : "0%";
    }
  });

  startStoryTimer();
}

function startStoryTimer() {
  clearInterval(AtelierState.reelTimer);
  AtelierState.reelProgress = 0;
  const updateInterval = 50;
  const stepIncrement = (updateInterval / AtelierState.storyDurationMs) * 100;

  const currentSegment = DOM.reelsProgressBar.querySelector(`.progress-segment[data-index="${AtelierState.currentReelIndex}"] .progress-segment-fill`);

  AtelierState.reelTimer = setInterval(() => {
    if (AtelierState.isPaused) return;

    AtelierState.reelProgress += stepIncrement;
    if (currentSegment) {
      currentSegment.style.width = `${Math.min(AtelierState.reelProgress, 100)}%`;
    }

    if (AtelierState.reelProgress >= 100) {
      clearInterval(AtelierState.reelTimer);
      const nextIndex = (AtelierState.currentReelIndex + 1) % AtelierState.filteredLooks.length;
      scrollToReel(nextIndex);
    }
  }, updateInterval);
}

function pauseStoryTimer() {
  AtelierState.isPaused = true;
}

function resumeStoryTimer() {
  AtelierState.isPaused = false;
}

// ----------------------------------------------------------------------------
// 10. EDITORIAL CATALOG LOOKBOOK
// ----------------------------------------------------------------------------
function initCatalog() {
  renderCatalog();

  DOM.catalogSort?.addEventListener("change", (e) => {
    const val = e.target.value;
    sortCatalog(val);
  });

  // Mocha Mousse Feature Actions
  document.getElementById("filter-mocha-btn")?.addEventListener("click", () => {
    AtelierState.requirements.season = "autumn-winter";
    applyRequirements();
    document.getElementById("catalog-grid")?.scrollIntoView({ behavior: "smooth" });
    showToast("✦ Filtered to Mocha Mousse & Autumn/Winter Cashmere Silhouettes");
  });

  document.getElementById("glass-card-explore-btn")?.addEventListener("click", () => {
    AtelierState.requirements.season = "autumn-winter";
    applyRequirements();
    document.getElementById("catalog-grid")?.scrollIntoView({ behavior: "smooth" });
    showToast("✦ Exploring the Mocha Mousse Haute Archive");
  });

  // Initialize the Mocha Mousse Kinetic Card Carousel
  initMochaCardCarousel();
}

// ----------------------------------------------------------------------------
// 10B. MOCHA MOUSSE KINETIC CARD CAROUSEL (React Motion Parity)
// ----------------------------------------------------------------------------
const MOCHA_CAROUSEL_ASSETS = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    title: "Mocha Silk Slip",
    subtitle: "Fluid Mulberry Silk & Cowl Drape",
    id: "look-2"
  },
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    title: "Cacao Cashmere Coat",
    subtitle: "Double-Faced Biella Wool & Horn Buttons",
    id: "look-1"
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    title: "Espresso Velvet Tuxedo",
    subtitle: "Silk Faille Lapels & Golden Stitching",
    id: "look-3"
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    title: "Warm Amber Column Gown",
    subtitle: "Hand-Pleated Organza & Gold Foil",
    id: "look-4"
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    title: "Latte Froth Monogram Cape",
    subtitle: "Brushed Mohair & Satin Binding",
    id: "look-5"
  },
  {
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    title: "Roasted Hazelnut Trench",
    subtitle: "Heavyweight Gabardine & Storm Flap",
    id: "look-1"
  }
];

let carouselState = {
  activeIndex: 2,
  isHovered: false,
  isMonochrome: false,
  slideWidth: 160
};

function initMochaCardCarousel() {
  const stage = document.getElementById("card-carousel-stage");
  const track = document.getElementById("carousel-track");
  const dotsGroup = document.getElementById("carousel-dots-group");
  const prevBtn = document.getElementById("carousel-prev-btn");
  const nextBtn = document.getElementById("carousel-next-btn");
  const modeEditorial = document.getElementById("carousel-mode-editorial");
  const modeMonochrome = document.getElementById("carousel-mode-monochrome");
  const inspectBtn = document.getElementById("carousel-inspect-active-btn");
  const activeDesc = document.getElementById("carousel-active-desc");

  if (!stage || !track) return;

  function renderCarousel() {
    track.innerHTML = "";
    if (dotsGroup) dotsGroup.innerHTML = "";

    MOCHA_CAROUSEL_ASSETS.forEach((item, index) => {
      // Create slide element
      const slide = document.createElement("div");
      slide.className = `carousel-slide-item ${index === carouselState.activeIndex ? "active" : ""}`;
      slide.setAttribute("data-index", index);

      const titleContent = carouselState.isMonochrome
        ? `SILHOUETTE 0${index + 1}`
        : item.title;

      const cardInner = carouselState.isMonochrome
        ? `
          <div class="slide-mono-card">
            <span class="slide-mono-num">0${index + 1}</span>
            <span class="slide-mono-tag">Atelier</span>
          </div>
        `
        : `
          <div class="slide-card-box">
            <img src="${item.src}" alt="${item.title}" class="slide-card-img" loading="lazy" />
          </div>
        `;

      slide.innerHTML = `
        <div class="slide-title-label">
          ${index === carouselState.activeIndex ? '<span style="color:#E8CF8D">✦</span>' : ''}
          ${titleContent}
        </div>
        ${cardInner}
      `;

      slide.addEventListener("click", () => {
        setCarouselIndex(index);
      });

      track.appendChild(slide);

      // Dot indicator
      if (dotsGroup) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `carousel-dot ${index === carouselState.activeIndex ? "active" : ""}`;
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => {
          setCarouselIndex(index);
        });
        dotsGroup.appendChild(dot);
      }
    });

    updateCarouselTransforms();
  }

  function updateCarouselTransforms() {
    const active = carouselState.isHovered;
    const activeIdx = carouselState.activeIndex;
    const slideW = carouselState.slideWidth;

    track.style.transform = `translateX(${-activeIdx * slideW}px)`;

    const slides = track.querySelectorAll(".carousel-slide-item");
    slides.forEach((slide, i) => {
      const isActive = i === activeIdx;
      const diff = i - activeIdx;

      // Spring fan-out math mirroring Framer Motion / Motion
      const targetRotate = active ? diff * 18 : diff * 4;
      const targetScale = isActive ? 1.08 : active ? 0.68 : 0.82;
      const targetY = active ? diff * 22 : 0;

      slide.style.transform = `translateY(${targetY}px) rotate(${targetRotate}deg) scale(${targetScale})`;

      if (isActive) {
        slide.classList.add("active");
        const titleEl = slide.querySelector(".slide-title-label");
        if (titleEl && !titleEl.innerHTML.includes("✦")) {
          const text = carouselState.isMonochrome ? `SILHOUETTE 0${i + 1}` : MOCHA_CAROUSEL_ASSETS[i].title;
          titleEl.innerHTML = `<span style="color:#E8CF8D">✦</span> ${text}`;
        }
      } else {
        slide.classList.remove("active");
        const titleEl = slide.querySelector(".slide-title-label");
        if (titleEl) {
          const text = carouselState.isMonochrome ? `SILHOUETTE 0${i + 1}` : MOCHA_CAROUSEL_ASSETS[i].title;
          titleEl.textContent = text;
        }
      }
    });

    // Update dots
    if (dotsGroup) {
      const dots = dotsGroup.querySelectorAll(".carousel-dot");
      dots.forEach((dot, i) => {
        if (i === activeIdx) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    // Update prev/next button states
    if (prevBtn) prevBtn.disabled = activeIdx === 0;
    if (nextBtn) nextBtn.disabled = activeIdx === MOCHA_CAROUSEL_ASSETS.length - 1;

    // Update active meta description
    const activeItem = MOCHA_CAROUSEL_ASSETS[activeIdx];
    if (activeDesc && activeItem) {
      activeDesc.textContent = activeItem.subtitle || activeItem.title;
    }
  }

  function setCarouselIndex(newIndex) {
    if (newIndex < 0 || newIndex >= MOCHA_CAROUSEL_ASSETS.length) return;
    carouselState.activeIndex = newIndex;
    updateCarouselTransforms();
  }

  // Hover detection for dynamic fan-out tilt
  stage.addEventListener("mouseenter", () => {
    carouselState.isHovered = true;
    updateCarouselTransforms();
  });

  stage.addEventListener("mouseleave", () => {
    carouselState.isHovered = false;
    updateCarouselTransforms();
  });

  // Prev / Next button listeners
  prevBtn?.addEventListener("click", () => {
    setCarouselIndex(carouselState.activeIndex - 1);
  });

  nextBtn?.addEventListener("click", () => {
    setCarouselIndex(carouselState.activeIndex + 1);
  });

  // Mode toggles
  modeEditorial?.addEventListener("click", () => {
    carouselState.isMonochrome = false;
    modeEditorial.classList.add("active");
    modeMonochrome?.classList.remove("active");
    renderCarousel();
    showToast("✦ Switched to Editorial Photography Mode");
  });

  modeMonochrome?.addEventListener("click", () => {
    carouselState.isMonochrome = true;
    modeMonochrome.classList.add("active");
    modeEditorial?.classList.remove("active");
    renderCarousel();
    showToast("✦ Switched to Atelier Monochrome Mode");
  });

  // Inspect Active Silhouette button
  inspectBtn?.addEventListener("click", () => {
    const activeItem = MOCHA_CAROUSEL_ASSETS[carouselState.activeIndex];
    if (activeItem && activeItem.id) {
      openDetailModal(activeItem.id);
      showToast(`✦ Inspecting ${activeItem.title}`);
    }
  });

  // Initial render
  renderCarousel();
}


function renderCatalog() {
  const looks = AtelierState.filteredLooks;
  DOM.catalogGrid.innerHTML = "";

  renderActiveFilterTags();

  if (looks.length === 0) {
    DOM.catalogGrid.innerHTML = `
      <div class="empty-cart-state" style="grid-column: 1 / -1;">
        <h3 class="empty-title">No Silhouettes Found</h3>
        <p class="empty-desc">Please relax your filters in the Style Concierge.</p>
      </div>
    `;
    return;
  }

  looks.forEach(look => {
    const isLiked = AtelierState.wishlist.has(look.id);
    const req = AtelierState.requirements;
    const isMatch = look.availableSizes.includes(req.size);
    const formattedPrice = formatPrice(look.price);

    const card = document.createElement("article");
    card.className = "catalog-card";
    card.setAttribute("data-id", look.id);

    card.innerHTML = `
      <div class="catalog-image-frame" data-cursor="VIEW">
        <img src="${look.image}" alt="${look.title}" class="catalog-card-img" loading="lazy">
        
        <div class="card-top-badges">
          <span class="reel-look-tag">${look.lookNumber}</span>
          <button class="card-save-btn ${isLiked ? 'liked' : ''}" data-look-id="${look.id}" title="Save Look">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-hover-actions">
          <button class="luxury-btn card-quick-btn card-add-bag" data-look-id="${look.id}">
            <span>ADD TO WARDROBE</span>
          </button>
          <button class="ghost-btn card-quick-btn card-inspect" data-look-id="${look.id}">
            <span>DETAILS</span>
          </button>
        </div>
      </div>

      <div class="catalog-card-info">
        <span class="card-season-subtitle">${look.seasonName} · ${look.purposeName}</span>
        <h3 class="card-title">${look.title}</h3>
        <p class="card-fabric-line">${look.fabric}</p>

        <div class="card-footer-row">
          <span class="card-price">${formattedPrice}</span>
          <span class="card-fit-note">
            ${isMatch ? `✓ Perfect for Size ${req.size.toUpperCase()}` : 'Made to Measure'}
          </span>
        </div>
      </div>
    `;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });

    DOM.catalogGrid.appendChild(card);
  });

  DOM.catalogGrid.querySelectorAll(".card-save-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = btn.getAttribute("data-look-id");
      toggleWishlist(lookId, btn);
    });
  });

  DOM.catalogGrid.querySelectorAll(".card-add-bag").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lookId = btn.getAttribute("data-look-id");
      addToCart(lookId, AtelierState.requirements.size);
      openCartDrawer();
    });
  });

  DOM.catalogGrid.querySelectorAll(".card-inspect, .catalog-image-frame").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target.closest(".card-save-btn") || e.target.closest(".card-add-bag")) return;
      const lookId = el.closest(".catalog-card").getAttribute("data-id");
      openDetailModal(lookId);
    });
  });
}

function renderActiveFilterTags() {
  const req = AtelierState.requirements;
  DOM.catalogActiveTags.innerHTML = `
    <span class="active-filter-tag">
      Size: ${req.size.toUpperCase()}
      <span class="tag-close" onclick="openConciergeModal()">✕</span>
    </span>
    <span class="active-filter-tag">
      Season: ${req.season === 'all' ? 'All Collections' : req.season}
      <span class="tag-close" onclick="openConciergeModal()">✕</span>
    </span>
    <span class="active-filter-tag">
      Occasion: ${req.purpose === 'all' ? 'All Occasions' : req.purpose}
      <span class="tag-close" onclick="openConciergeModal()">✕</span>
    </span>
  `;
}

function sortCatalog(criteria) {
  if (criteria === "price-asc") {
    AtelierState.filteredLooks.sort((a, b) => a.price - b.price);
  } else if (criteria === "price-desc") {
    AtelierState.filteredLooks.sort((a, b) => b.price - a.price);
  } else if (criteria === "likes") {
    AtelierState.filteredLooks.sort((a, b) => (AtelierState.likesMap[b.id] || b.likes) - (AtelierState.likesMap[a.id] || a.likes));
  } else {
    applyRequirements();
    return;
  }
  renderCatalog();
}

// ----------------------------------------------------------------------------
// 11. FABRIC & DETAIL INSPECTION MODAL
// ----------------------------------------------------------------------------
function openDetailModal(lookId) {
  const look = RUNWAY_ARCHIVE.find(l => l.id === lookId);
  if (!look) return;

  pauseStoryTimer();

  const specsList = look.specs.map(s => `<li>${s}</li>`).join("");
  const formattedPrice = formatPrice(look.price);

  DOM.detailModalContent.innerHTML = `
    <button class="modal-close-btn" id="detail-close-btn" aria-label="Close Details">✕</button>
    <div class="detail-layout-grid">
      <div class="detail-gallery-column">
        <img src="${look.image}" alt="${look.title}" class="detail-hero-img">
      </div>
      <div class="detail-info-column">
        <span class="detail-kicker">${look.lookNumber} · ${look.seasonName}</span>
        <h2 class="detail-title">${look.title}</h2>
        <p class="detail-tagline">"${look.tagline}"</p>

        <div class="detail-spec-grid">
          <div class="spec-cell">
            <span class="spec-label">FABRIC COMPOSITION</span>
            <span class="spec-val">${look.fabric}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-label">ARTISAN ATELIER</span>
            <span class="spec-val">${look.origin}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-label">SILHOUETTE DRAPE</span>
            <span class="spec-val">${look.drape}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-label">PRIMARY OCCASION</span>
            <span class="spec-val">${look.purposeName}</span>
          </div>
        </div>

        <p class="detail-desc">${look.description}</p>

        <ul class="detail-bullet-list">
          ${specsList}
        </ul>

        <div class="detail-action-row">
          <div>
            <span class="price-label">INVESTMENT (${AtelierState.currency})</span>
            <div class="price-amount">${formattedPrice}</div>
          </div>
          <button class="luxury-btn modal-add-bag" style="margin-left: auto;">
            <span>ADD TO WARDROBE (SIZE ${AtelierState.requirements.size.toUpperCase()})</span>
            <span class="gold-shine"></span>
          </button>
        </div>
      </div>
    </div>
  `;

  DOM.detailModal.classList.add("open");
  DOM.detailModal.setAttribute("aria-hidden", "false");

  DOM.detailModalContent.querySelector("#detail-close-btn").addEventListener("click", closeDetailModal);
  DOM.detailModal.addEventListener("click", (e) => {
    if (e.target === DOM.detailModal) closeDetailModal();
  });

  DOM.detailModalContent.querySelector(".modal-add-bag").addEventListener("click", () => {
    addToCart(look.id, AtelierState.requirements.size);
    closeDetailModal();
    openCartDrawer();
  });
}

function closeDetailModal() {
  DOM.detailModal.classList.remove("open");
  DOM.detailModal.setAttribute("aria-hidden", "true");
  resumeStoryTimer();
}

// ----------------------------------------------------------------------------
// 12. ADVANCED SHOPPING CART & WARDROBE SYSTEM
// ----------------------------------------------------------------------------
function initCart() {
  DOM.cartDrawerBtn?.addEventListener("click", openCartDrawer);
  DOM.cartCloseBtn?.addEventListener("click", closeCartDrawer);
  DOM.cartDrawer?.addEventListener("click", (e) => {
    if (e.target === DOM.cartDrawer) closeCartDrawer();
  });

  // Monogram input listener
  DOM.cartMonogramInput?.addEventListener("input", (e) => {
    AtelierState.monogram = e.target.value.toUpperCase();
  });

  // White glove check listener
  DOM.whiteGloveCheck?.addEventListener("change", (e) => {
    AtelierState.whiteGlovePackaging = e.target.checked;
  });

  // VIP Coupon Apply
  DOM.couponApplyBtn?.addEventListener("click", applyCouponCode);

  // Clear Wardrobe Button
  DOM.clearWardrobeBtn?.addEventListener("click", () => {
    if (AtelierState.cart.length === 0) return;
    AtelierState.cart = [];
    updateCartUI();
    showToast("Wardrobe cleared.");
  });

  // Proceed to Checkout Button
  DOM.checkoutTriggerBtn?.addEventListener("click", () => {
    if (AtelierState.cart.length === 0) {
      showToast("Your wardrobe selection is currently empty.");
      return;
    }
    closeCartDrawer();
    openCheckoutModal();
  });
}

function openCartDrawer() {
  DOM.cartDrawer.classList.add("open");
  DOM.cartDrawer.setAttribute("aria-hidden", "false");
  pauseStoryTimer();
  updateCartUI();
}

function closeCartDrawer() {
  DOM.cartDrawer.classList.remove("open");
  DOM.cartDrawer.setAttribute("aria-hidden", "true");
  resumeStoryTimer();
}

function addToCart(lookId, size = "S") {
  const look = RUNWAY_ARCHIVE.find(l => l.id === lookId);
  if (!look) return;

  const existing = AtelierState.cart.find(item => item.id === lookId && item.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    AtelierState.cart.push({
      id: look.id,
      title: look.title,
      lookNumber: look.lookNumber,
      price: look.price,
      image: look.image,
      fabric: look.fabric,
      size: size.toUpperCase(),
      qty: 1
    });
  }

  updateCartUI();
  showToast(`✦ Added ${look.title} (Size ${size.toUpperCase()}) to Wardrobe`);

  DOM.cartCount.style.transform = "scale(1.4)";
  setTimeout(() => { DOM.cartCount.style.transform = "scale(1)"; }, 300);
}

function updateCartItemQty(index, delta) {
  const item = AtelierState.cart[index];
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(index);
    return;
  }
  updateCartUI();
}

function updateCartItemSize(index, newSize) {
  if (AtelierState.cart[index]) {
    AtelierState.cart[index].size = newSize;
    updateCartUI();
    showToast(`Updated to Size ${newSize}`);
  }
}

function removeFromCart(index) {
  const removed = AtelierState.cart.splice(index, 1)[0];
  updateCartUI();
  if (removed) {
    showToast(`Removed "${removed.title}" from Wardrobe.`);
  }
}

function applyCouponCode() {
  const code = (DOM.couponInput?.value || "").trim().toUpperCase();
  if (!code) {
    DOM.couponStatusMsg.textContent = "";
    return;
  }

  if (code === "VIP10" || code === "HAUTE10") {
    AtelierState.discountCode = code;
    AtelierState.discountPercent = 10;
    AtelierState.discountFixedUSD = 0;
    DOM.couponStatusMsg.className = "coupon-status-msg success";
    DOM.couponStatusMsg.textContent = "✓ 10% VIP Atelier Privilege Applied";
    showToast("✦ 10% VIP Privilege Reduction Activated");
  } else if (code === "VOGUE" || code === "ELANVIP") {
    AtelierState.discountCode = code;
    AtelierState.discountPercent = 0;
    AtelierState.discountFixedUSD = 300;
    DOM.couponStatusMsg.className = "coupon-status-msg success";
    DOM.couponStatusMsg.textContent = `✓ ${formatPrice(300)} Sartorial Styling Credit Applied`;
    showToast("✦ Courtesy Styling Credit Activated");
  } else {
    DOM.couponStatusMsg.className = "coupon-status-msg error";
    DOM.couponStatusMsg.textContent = "✕ Invalid VIP Privilege Code. Try 'VIP10' or 'VOGUE'";
    AtelierState.discountCode = "";
    AtelierState.discountPercent = 0;
    AtelierState.discountFixedUSD = 0;
  }

  updateCartUI();
}

function updateCartUI() {
  const totalQty = AtelierState.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotalUSD = AtelierState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Calculate discount
  let discountUSD = 0;
  if (AtelierState.discountPercent > 0) {
    discountUSD = subtotalUSD * (AtelierState.discountPercent / 100);
  } else if (AtelierState.discountFixedUSD > 0 && subtotalUSD > 0) {
    discountUSD = Math.min(AtelierState.discountFixedUSD, subtotalUSD);
  }

  const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD);
  const installmentUSD = Math.round(finalTotalUSD / 4);

  // Update header bag counter
  DOM.cartCount.textContent = totalQty;

  // Format currency
  DOM.cartSummarySubtotal.textContent = formatPrice(subtotalUSD);
  DOM.cartSummaryTotal.textContent = formatPrice(finalTotalUSD);
  DOM.installmentPreviewText.textContent = `or 4 interest-free investments of ${formatPrice(installmentUSD)} with Maison Élan Privilege`;

  // Discount row visibility
  if (discountUSD > 0) {
    DOM.cartDiscountRow.classList.remove("hidden");
    DOM.cartSummaryDiscount.textContent = `-${formatPrice(discountUSD)}`;
  } else {
    DOM.cartDiscountRow.classList.add("hidden");
  }

  // Render items
  if (AtelierState.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-icon">❖</div>
        <h4 class="empty-title">Wardrobe Empty</h4>
        <p class="empty-desc">Your curated couture selection is awaiting your choice.</p>
      </div>
    `;
    return;
  }

  DOM.cartItemsList.innerHTML = AtelierState.cart.map((item, idx) => {
    const itemPriceFormatted = formatPrice(item.price * item.qty);
    return `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          
          <div class="cart-item-head">
            <span class="drawer-kicker">${item.lookNumber}</span>
            <button class="cart-item-remove-btn" onclick="removeFromCart(${idx})" title="Remove Piece">✕</button>
          </div>
          
          <h4 class="cart-item-title">${item.title}</h4>
          <span class="cart-item-fabric-tag">${item.fabric.split('with')[0]}</span>

          <div class="cart-item-options-row">
            <!-- In-Cart Size Selector -->
            <select class="cart-item-size-select" onchange="updateCartItemSize(${idx}, this.value)" aria-label="Change Garment Size">
              ${["XS", "S", "M", "L", "XL", "SUR-MESURE"].map(s => `
                <option value="${s}" ${s === item.size ? 'selected' : ''}>Size: ${s}</option>
              `).join("")}
            </select>

            <!-- Quantity Stepper -->
            <div class="cart-qty-stepper">
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)" title="Decrease Quantity">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)" title="Increase Quantity">+</button>
            </div>

            <!-- Price -->
            <span class="cart-item-price-val">${itemPriceFormatted}</span>
          </div>

        </div>
      </div>
    `;
  }).join("");
}

// ----------------------------------------------------------------------------
// 13. LUXURY CHECKOUT & ORDER CONSULTATION
// ----------------------------------------------------------------------------
function initCheckout() {
  DOM.checkoutCloseBtn?.addEventListener("click", closeCheckoutModal);
  DOM.checkoutModal?.addEventListener("click", (e) => {
    if (e.target === DOM.checkoutModal) closeCheckoutModal();
  });

  // Payment method selection radio
  DOM.checkoutModal?.querySelectorAll(".payment-method-card").forEach(card => {
    card.addEventListener("click", () => {
      DOM.checkoutModal.querySelectorAll(".payment-method-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      const radio = card.querySelector("input");
      if (radio) radio.checked = true;
    });
  });

  // Form submit
  DOM.checkoutForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    closeCheckoutModal();
    openSuccessModal();
  });

  DOM.successCloseBtn?.addEventListener("click", () => {
    DOM.successModal.classList.remove("open");
    DOM.successModal.setAttribute("aria-hidden", "true");
    AtelierState.cart = [];
    updateCartUI();
  });
}

function openCheckoutModal() {
  const subtotalUSD = AtelierState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountUSD = 0;
  if (AtelierState.discountPercent > 0) {
    discountUSD = subtotalUSD * (AtelierState.discountPercent / 100);
  } else if (AtelierState.discountFixedUSD > 0) {
    discountUSD = Math.min(AtelierState.discountFixedUSD, subtotalUSD);
  }
  const totalUSD = Math.max(0, subtotalUSD - discountUSD);

  DOM.checkoutModalTotal.textContent = formatPrice(totalUSD);
  DOM.checkoutModal.classList.add("open");
  DOM.checkoutModal.setAttribute("aria-hidden", "false");
}

function closeCheckoutModal() {
  DOM.checkoutModal.classList.remove("open");
  DOM.checkoutModal.setAttribute("aria-hidden", "true");
}

function openSuccessModal() {
  const randomSerial = Math.floor(1000 + Math.random() * 9000);
  DOM.orderCode.textContent = `#ELAN-${randomSerial}`;

  const clientCity = document.getElementById("client-city")?.value || "Paris";
  const clientCountry = document.getElementById("client-country")?.value || "FR";
  DOM.receiptDest.textContent = `${clientCity}, ${clientCountry}`;

  // Calculate final total
  const subtotalUSD = AtelierState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountUSD = 0;
  if (AtelierState.discountPercent > 0) {
    discountUSD = subtotalUSD * (AtelierState.discountPercent / 100);
  } else if (AtelierState.discountFixedUSD > 0) {
    discountUSD = Math.min(AtelierState.discountFixedUSD, subtotalUSD);
  }
  const totalUSD = Math.max(0, subtotalUSD - discountUSD);
  DOM.receiptTotal.textContent = formatPrice(totalUSD);

  // Fill receipt table
  DOM.receiptItemsContainer.innerHTML = AtelierState.cart.map(item => `
    <div class="receipt-item-row">
      <div>
        <span class="receipt-item-title">${item.title}</span>
        <span class="receipt-item-meta"> · Size: ${item.size} (Qty: ${item.qty})</span>
      </div>
      <strong>${formatPrice(item.price * item.qty)}</strong>
    </div>
  `).join("");

  DOM.successModal.classList.add("open");
  DOM.successModal.setAttribute("aria-hidden", "false");
  showToast("✦ Commission successfully authorized and logged!");
}

// ----------------------------------------------------------------------------
// 14. WISHLIST / SAVE SYSTEM
// ----------------------------------------------------------------------------
function toggleWishlist(lookId, triggerBtn) {
  const look = RUNWAY_ARCHIVE.find(l => l.id === lookId);
  if (!look) return;

  if (AtelierState.wishlist.has(lookId)) {
    AtelierState.wishlist.delete(lookId);
    AtelierState.likesMap[lookId] = (AtelierState.likesMap[lookId] || look.likes) - 1;
    if (triggerBtn) triggerBtn.classList.remove("liked");
    showToast(`Removed from saved wardrobe.`);
  } else {
    AtelierState.wishlist.add(lookId);
    AtelierState.likesMap[lookId] = (AtelierState.likesMap[lookId] || look.likes) + 1;
    if (triggerBtn) triggerBtn.classList.add("liked");
    showToast(`✦ Saved "${look.title}" to private collection.`);
  }

  DOM.wishlistCount.textContent = AtelierState.wishlist.size;

  const actionGroup = triggerBtn?.closest(".reel-action-btn-group");
  if (actionGroup) {
    const countEl = actionGroup.querySelector(".action-count");
    if (countEl) countEl.textContent = AtelierState.likesMap[lookId];
  }
}

// ----------------------------------------------------------------------------
// 15. VIEW SWITCHER
// ----------------------------------------------------------------------------
function initViewSwitcher() {
  DOM.switchReelsBtn?.addEventListener("click", () => switchView("reels"));
  DOM.switchCatalogBtn?.addEventListener("click", () => switchView("catalog"));

  DOM.wishlistBtn?.addEventListener("click", () => {
    switchView("catalog");
    showToast(`Displaying your curated lookbook`);
  });
}

function switchView(viewName) {
  if (AtelierState.activeView === viewName) return;
  AtelierState.activeView = viewName;

  DOM.switchReelsBtn.classList.toggle("active", viewName === "reels");
  DOM.switchCatalogBtn.classList.toggle("active", viewName === "catalog");

  if (viewName === "reels") {
    DOM.reelsView.classList.remove("hidden-view");
    DOM.catalogView.classList.add("hidden-view");
    startStoryTimer();
  } else {
    DOM.reelsView.classList.add("hidden-view");
    DOM.catalogView.classList.remove("hidden-view");
    pauseStoryTimer();
    renderCatalog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ----------------------------------------------------------------------------
// 16. RUNWAY AMBIENT AUDIO
// ----------------------------------------------------------------------------
function initAudio() {
  DOM.audioToggleBtn?.addEventListener("click", () => {
    const isPlaying = runwayAudio.toggle();
    DOM.audioToggleBtn.classList.toggle("playing", isPlaying);
    DOM.audioToggleBtn.querySelector(".audio-on-icon").classList.toggle("hidden", !isPlaying);
    DOM.audioToggleBtn.querySelector(".audio-off-icon").classList.toggle("hidden", isPlaying);

    if (isPlaying) {
      showToast("✦ Runway ambient soundscape active");
    } else {
      showToast("Runway audio muted");
    }
  });
}

// ----------------------------------------------------------------------------
// 17. TOAST NOTIFICATION UTILITY
// ----------------------------------------------------------------------------
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `<span>${message}</span>`;
  DOM.toastHub.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("exit");
    setTimeout(() => { toast.remove(); }, 350);
  }, 3200);
}

// ----------------------------------------------------------------------------
// 18. INITIALIZATION
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initCurrencySwitcher();
  initConcierge();
  initReels();
  initCatalog();
  initCart();
  initCheckout();
  initViewSwitcher();
  initAudio();

  setTimeout(() => {
    showToast("Welcome to Maison Élan Atelier. Tap 'Style Concierge' to personalize your feed.");
  }, 1200);
});

// Global window functions for inline elements
window.removeFromCart = removeFromCart;
window.updateCartItemQty = updateCartItemQty;
window.updateCartItemSize = updateCartItemSize;
window.openConciergeModal = openConciergeModal;
