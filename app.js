function syncViewportSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
const TARGETS = {
  a0: {
    hint: "Predná strana 5€ – Ako spoznať pravú",
    callouts: [
      {
        id: "tactile",
        pos: { x: -0.44, y: -0.15, z: 0.03 },
        accent: "#ffffff",
        tag: "①",
        title: "Hmatové čiary",
        short: "Na okrajoch bankovky sú reliéfne čiary, ktoré sa dajú cítiť prstami.",
        text: "Na okrajoch bankovky sú reliéfne čiary. Slabozraký človek vie hmatom zistiť, akú hodnotu drží. Vyskúšaj sám.",
        cardPos: { top: "20%", right: "12px" },
        cardPosLandscape: { top: "10%", left: "12px" }
      },
      {
        id: "wmark",
        pos: { x: -0.33, y: -0.01, z: 0.03 },
        accent: "#00E1FF",
        tag: "②",
        title: "Vodoznak",
        short: "Na svetle uvidíš bohyňu Európa. Nie je to potlač, ale súčasť papiera.",
        text: "Na mieste s guličkou uvidíš bohyňu Európa, ak si dáš bankovku oproti svetlu. Je to „vrytý“ obraz v papieri, nie potlač.",
        imgTitle: "Vodoznak – bohyňa Európa",
        imgSrc: "img/europa.jpg",
        imgText: "Táto mytická postava je pôvodom kresba na gréckej váze, ktorá je uložená v Louvre múzeu.",
        cardPos: { top: "65%", left: "12px" },
        cardPosLandscape: { top: "42%", left: "12px" }
      }
    ]
  },

  a1: {
    hint: "Zadná strana 5€ – Materiál bankovky",
    bottomHint: "Tip: otoč bankovku na zadnú stranu",
    callouts: [
      {
        id: "material",
        pos: { x: -0.10, y: 0.05, z: 0.03 },
        accent: "#FFD84D",
        tag: "①",
        title: "Materiál bankovky",
        short: "Eurobankovky nie sú z bežného kancelárskeho papiera.",
        text: "Vieš z čoho sú vyrobené eurobankovky?",
        imgTitle: "Takto vyzerá materiál na bankovky",
        imgSrc: "img/bavlna.jpg",
        imgText: "Eurobankovky nie sú z bežného papiera – sú z bavlny. Preto sú odolnejšie, lepšie držia farbu a vydržia tisíce ohybov v obehu.",
        cardPos: { top: "60%", right: "12px" },
        cardPosLandscape: { top: "10%", left: "12px" }
      }
    ]
  },

  a2: {
    hint: "Predná strana 10€ – Detaily, ktoré bránia falšovaniu",
    bottomHint: "Tip: jemne nakláňaj bankovku a sleduj zmeny",
    callouts: [
      {
        id: "micro",
        pos: { x: 0.25, y: -0.00, z: 0.03 },
        accent: "#ffffff",
        tag: "①",
        title: "Mikrotlač",
        short: "Pod lupou uvidíš drobné nápisy a línie, ktoré sa zle falšujú.",
        text: "Každá bankovka je tlačená tzv. mikrotlačou. Pozri si detail mikrotlače.",
        imgTitle: "Mikrotlač pod lupou",
        imgSrc: "img/microprint.webp",
        imgText: "Mikrotlač sú extrémne drobné nápisy a línie. Na kopírke alebo lacnej tlačiarni sa často rozmažú – preto pod lupou musíš vidieť všetko ostro.",
        cardOffset: { x: 24, y: -110 },
        cardPosLandscape: { top: "10%", left: "12px" }
      },
      {
        id: "shine",
        pos: { x: -0.30, y: -0.13, z: 0.03 },
        accent: "#B7FF6A",
        tag: "②",
        title: "Optická žiara",
        short: "Pri naklonení bankovky sa ochranný prvok mení a „hýbe“.",
        text: "Na bodke vidíš dôležitý ochranný prvok. Nakláňaj bankovku a určite si ho všimneš.",
        imgTitle: "Žiara pri naklonení",
        imgSrc: "img/tilt-shine.jpg",
        imgText: "Pri naklonení bankovky sa smaragdový pruh „hýbe“ alebo mení jas. Je to efekt, ktorý je lacné napodobniť… ale drahé spraviť dobre.",
        cardOffset: { x: 24, y: -110 },
        cardPosLandscape: { top: "42%", left: "12px" }
      }
    ]
  },

  a3: {
    hint: "Zadná strana 10€ – Sériové číslo & UV",
    bottomHint: "Tip: otoč bankovku na zadnú stranu",
    callouts: [
      {
        id: "serial1",
        pos: { x: 0.37, y: 0.22, z: 0.03 },
        accent: "#00E1FF",
        tag: "①",
        title: "Sériové číslo",
        short: "Každá bankovka má svoj jedinečný identifikátor.",
        text: "Sériové číslo je jedinečný „ID kód“ bankovky. Písmeno a čísla slúžia na kontrolu a evidenciu. Poškodenú bankovku vieš vymeniť, ak je zachovaná aspoň približne polovica.",
        cardPos: { top: "12%", right: "12px" },
        cardPosLandscape: { top: "10%", left: "12px" }
      },
      {
        id: "uv",
        pos: { x: -0.2, y: 0.05, z: 0.03 },
        accent: "#B7FF6A",
        tag: "②",
        title: "Vlákna pod UV",
        short: "Pod UV svetlom sa v bankovke objavia farebné vlákna a prvky.",
        text: "Každá bankovka pod UV svetlom „svieti“.",
        imgTitle: "UV vlákna",
        imgSrc: "img/uv-fibers.jpg",
        imgText: "Pod UV svetlom sa v bankovke objavia farebné vlákna alebo prvky. Je to ďalší ochranný prvok.",
        cardPos: { top: "80%", right: "12px" },
        cardPosLandscape: { top: "26%", right: "12px" }
      }
    ]
  },

  a4: {
    hint: "Predná strana 20€ – Príbeh Európy",
    callouts: [
      {
        id: "sig",
        pos: { x: -0.35, y: 0.18, z: 0.03 },
        accent: "#00E1FF",
        tag: "①",
        title: "Podpis prezidentky ECB",
        short: "Pod EÚ vlajkou nájdeš vždy podpis. Uhádneš komu patrí?",
        text: "Pod EÚ vlajkou nájdeš vždy podpis. Uhádneš komu patrí?",
        mode: "toggle",
        q: "Pod EÚ vlajkou nájdeš vždy podpis. Uhádneš komu patrí?",
        a: "Podpísaná je Christine Lagarde, aktuálna prezidentka Európskej centrálnej banky. Platí to pre bankovky od roku 2019.",
        cardPos: { top: "12%", left: "12px" },
        cardPosLandscape: { top: "10%", left: "12px" }
      },
      {
        id: "gothic",
        pos: { x: 0.28, y: 0.16, z: 0.03 },
        accent: "#FFD84D",
        tag: "②",
        title: "Gotická architektúra",
        short: "Každá bankovka zobrazuje iný štýl európskej architektúry.",
        text: "Každá bankovka má svoj architektonický štýl.",
        imgTitle: "Architektúra na bankovkách",
        imgSrc: "img/architecture-styles.jpg",
        imgText: "Motívy na bankovkách sú „štýly“ európskej architektúry. 20€ predstavuje gotiku – bankovky sú tak trochu galéria umenia.",
        cardPos: { top: "60%", right: "12px" },
        cardPosLandscape: { top: "42%", left: "12px" }
      },
      {
        id: "langs",
        pos: { x: -0.43, y: -0.02, z: 0.03 },
        accent: "#B7FF6A",
        tag: "③",
        title: "ECB a EURO v jazykoch",
        short: "Názvy sú v rôznych jazykoch ako symbol európskej integrácie.",
        text: "Názvy sú v rôznych jazykoch, aby sa v mene odrážala integrácia krajín. Je to malý detail s veľkým symbolom.",
        cardPos: { top: "84%", left: "12px" },
        cardPosLandscape: { top: "26%", right: "12px" }
      }
    ]
  },

  a5: {
    hint: "Zadná strana 20€ – Životný cyklus bankovky",
    bottomHint: "Tip: otvor kartu a prejdi si slider",
    callouts: [
      {
        id: "life",
        pos: { x: 0.00, y: 0.08, z: 0.03 },
        accent: "#ffffff",
        tag: "①",
        title: "Životný cyklus bankovky",
        short: "Bankovka vznikne, koluje v obehu a po poškodení sa zničí.",
        text: "Bankovka sa narodí v tlačiarni, roky koluje medzi ľuďmi a firmami, a keď je poškodená, kontroluje sa a nakoniec sa skartuje.",
        imgTitle: "Životný cyklus bankovky",
        gallery: [
          { src: "img/lifecycle-1.jpg", text: "1. Bankovka vzniká v tlačiarni s viacerými ochrannými prvkami." },
          { src: "img/lifecycle-2.jpg", text: "2. Následne ide do obehu medzi ľudí, firmy a banky." },
          { src: "img/lifecycle-3.jpg", text: "3. Opotrebované kusy sa vracajú na kontrolu." },
          { src: "img/lifecycle-4.jpg", text: "4. Poškodené bankovky sa zničia a nahradia novými." }
        ],
        cardPos: { top: "52%", right: "12px" },
        cardPosLandscape: { top: "10%", left: "12px" }
      }
    ]
  }
};
const introScreenEl = document.getElementById("introScreen");
const introStartBtn = document.getElementById("introStartBtn");
const SMOOTH = 0.40;
const VIEWPORT_MARGIN = 12;
const COLLISION_GAP = 10;
const dotState = new WeakMap();
let targetLostTimer = null;
let activeAnchorId = null;
let renderedTargetId = null;
let lastVisibleTargetId = null;
let running = false;
let modalOpen = false;
let currentCalloutNodes = [];
let lastSeenAt = 0;
const TARGET_STALE_MS = 180;
  const cardState = new WeakMap();
const CARD_SMOOTH = 0.16;
const hintEl = document.getElementById("hint");
const bottomHintEl = document.getElementById("bottomHint");
const scanEl = document.getElementById("scan");
const calloutsLayer = document.getElementById("calloutsLayer");

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalMedia = document.getElementById("modalMedia");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

const sceneEl = document.getElementById("scene");
const anchors = ["a0", "a1", "a2", "a3", "a4", "a5"].map(id => document.getElementById(id));
function hideIntroScreen() {
  if (!introScreenEl) return;
  introScreenEl.classList.add("is-hidden");

  setTimeout(() => {
    introScreenEl.style.display = "none";
  }, 360);
}

if (introStartBtn) {
  introStartBtn.addEventListener("click", () => {
    hideIntroScreen();
    forceARRefresh();
  });
}
window.addEventListener("pageshow", () => {
  setTimeout(forceARRefresh, 200);
});
(function patchGetUserMediaForFirefox() {
  const isFirefox = /firefox/i.test(navigator.userAgent);
  if (!isFirefox || !navigator.mediaDevices?.getUserMedia) return;

  const original = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

  navigator.mediaDevices.getUserMedia = async function(constraints) {
    let patched = constraints;

    if (patched?.video && typeof patched.video === "object") {
      const v = { ...patched.video };

      if (v.facingMode?.exact) {
        v.facingMode = { ideal: v.facingMode.exact };
      }

      delete v.width;
      delete v.height;
      delete v.aspectRatio;

      patched = { ...patched, video: v };
    }

    try {
      return await original(patched);
    } catch (err) {
      console.warn("Firefox gUM fallback", err);
      return original({
        audio: false,
        video: {
          facingMode: { ideal: "environment" }
        }
      });
    }
  };
})();

function styleMindarVideo() {
  const videos = [...document.querySelectorAll("video")];
  const videoEl = videos.find(el =>
    el.autoplay ||
    el.getAttribute("autoplay") !== null ||
    el.playsInline ||
    el.getAttribute("playsinline") !== null
  );

  if (!videoEl) return false;

  videoEl.setAttribute("autoplay", "");
  videoEl.setAttribute("muted", "");
  videoEl.setAttribute("playsinline", "");
  videoEl.muted = true;
  videoEl.playsInline = true;
  videoEl.autoplay = true;

  Object.assign(videoEl.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    zIndex: "0",
    display: "block",
    visibility: "visible",
    opacity: "1",
    background: "black"
  });

  const playPromise = videoEl.play?.();
  if (playPromise?.catch) {
    playPromise.catch(err => console.warn("video.play() failed", err));
  }

  return true;
}

function ensureMindarVideo(retries = 30) {
  let tries = 0;
  const timer = setInterval(() => {
    tries += 1;
    const ok = styleMindarVideo();
    if (ok || tries >= retries) clearInterval(timer);
  }, 250);
}

function isLandscapeLike() {
  return window.innerWidth > window.innerHeight;
}

function clearCallouts() {
  currentCalloutNodes = [];
  calloutsLayer.innerHTML = "";
}



function showARState() {
  running = true;
  scanEl.style.display = "none";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseCssPx(value) {
  if (typeof value !== "string") return null;
  if (!value.endsWith("px")) return null;
  return parseFloat(value);
}

function projectPoint(anchorEl, local) {
  const cam = sceneEl?.camera;
  const anchorObj = anchorEl?.object3D;

  if (!cam || !anchorObj) return null;

  anchorObj.updateMatrixWorld(true);
  cam.updateMatrixWorld?.(true);

  const world = new THREE.Vector3(local.x, local.y, local.z ?? 0.01);

  // prepočet lokálnej pozície calloutu do world space
  anchorObj.localToWorld(world);

  // projekcia do obrazovky
  const projected = world.clone().project(cam);

  // toto zatiaľ nevypínaj agresívne, len odfiltruj úplne mimo záber
  if (!Number.isFinite(projected.x) || !Number.isFinite(projected.y) || !Number.isFinite(projected.z)) {
    return null;
  }

  const screenX = (projected.x * 0.5 + 0.5) * window.innerWidth;
  const screenY = (-projected.y * 0.5 + 0.5) * window.innerHeight;

  // vzdialenosť od kamery kvôli jemnému scale
  const camWorld = new THREE.Vector3();
  cam.getWorldPosition(camWorld);
  const distance = camWorld.distanceTo(world);
  const scale = clamp(1.28 - distance * 0.22, 0.9, 1.08);

  return {
    x: screenX,
    y: screenY,
    scale
  };
}

function placeDotProjected(dotEl, anchorEl, local) {
  const projected = projectPoint(anchorEl, local);

  if (!projected) {
    dotEl.style.display = "none";
    return null;
  }

  let smoothState = dotState.get(dotEl);
  if (!smoothState) {
    smoothState = {
      x: projected.x,
      y: projected.y,
      scale: projected.scale ?? 1
    };
    dotState.set(dotEl, smoothState);
  }

  smoothState.x += (projected.x - smoothState.x) * SMOOTH;
  smoothState.y += (projected.y - smoothState.y) * SMOOTH;
  smoothState.scale += ((projected.scale ?? 1) - smoothState.scale) * 0.22;

  dotEl.style.display = "block";

  return {
    x: smoothState.x,
    y: smoothState.y,
    scale: smoothState.scale
  };
}

function applyCardPositionNearDot(card, callout, dotX, dotY, index) {
  const offset = callout.cardOffset || { x: 22, y: -110 };

  const cardWidth = card.offsetWidth || 250;
  const cardHeight = card.offsetHeight || 120;
  const margin = VIEWPORT_MARGIN;

  let targetLeft = dotX + offset.x;
  let targetTop = dotY + offset.y;

  if (targetLeft + cardWidth > window.innerWidth - margin) {
    targetLeft = dotX - cardWidth - 18;
  }

  if (targetLeft < margin) targetLeft = margin;

  if (targetTop < margin) targetTop = dotY + 22;

  if (targetTop + cardHeight > window.innerHeight - margin) {
    targetTop = window.innerHeight - cardHeight - margin;
  }

  targetTop += index * 8;

  let state = cardState.get(card);
  if (!state) {
    state = { left: targetLeft, top: targetTop };
    cardState.set(card, state);
  }

  state.left += (targetLeft - state.left) * CARD_SMOOTH;
  state.top += (targetTop - state.top) * CARD_SMOOTH;

  card.style.position = "fixed";
  card.style.left = `${Math.round(state.left)}px`;
  card.style.top = `${Math.round(state.top)}px`;
  card.style.right = "auto";
  card.style.bottom = "auto";
}

function constrainCardToViewport(card) {
  const rect = card.getBoundingClientRect();

  let left = rect.left;
  let top = rect.top;

  if (rect.right > window.innerWidth - VIEWPORT_MARGIN) {
    left -= rect.right - (window.innerWidth - VIEWPORT_MARGIN);
  }
  if (rect.left < VIEWPORT_MARGIN) {
    left = VIEWPORT_MARGIN;
  }

  if (rect.bottom > window.innerHeight - VIEWPORT_MARGIN) {
    top -= rect.bottom - (window.innerHeight - VIEWPORT_MARGIN);
  }
  if (rect.top < VIEWPORT_MARGIN) {
    top = VIEWPORT_MARGIN;
  }

  card.style.left = `${Math.round(left)}px`;
  card.style.top = `${Math.round(top)}px`;
  card.style.right = "auto";
  card.style.bottom = "auto";
}

function resolveCardCollisions(items) {
  const sorted = [...items].sort((a, b) => {
    const ra = a.card.getBoundingClientRect();
    const rb = b.card.getBoundingClientRect();
    return ra.top - rb.top;
  });

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    const currentRect = current.card.getBoundingClientRect();

    for (let j = 0; j < i; j++) {
      const prev = sorted[j];
      const prevRect = prev.card.getBoundingClientRect();

      const overlapsHorizontally =
        currentRect.left < prevRect.right &&
        currentRect.right > prevRect.left;

      const overlapsVertically =
        currentRect.top < prevRect.bottom + COLLISION_GAP &&
        currentRect.bottom > prevRect.top;

      if (overlapsHorizontally && overlapsVertically) {
        const currentTop = parseCssPx(current.card.style.top) ?? currentRect.top;
        const newTop = prevRect.bottom + COLLISION_GAP;
        current.card.style.top = `${Math.round(currentTop + (newTop - currentRect.top))}px`;
        constrainCardToViewport(current.card);
      }
    }
  }
}

function makeCalloutNode(callout) {
  const wrap = document.createElement("div");
  wrap.className = "callout";
  wrap.style.setProperty("--accent", callout.accent || "#ffffff");

  wrap.innerHTML = `
    <div class="calloutDot"></div>
    <button type="button" class="calloutCard ${callout.mode === "toggle" ? "is-toggle" : "is-openable"}">
      <div class="calloutHead">
        <div class="calloutBadge">${callout.tag || "•"}</div>
        <div class="calloutTitle">${callout.title || "Info"}</div>
      </div>
      <div class="calloutText">${callout.short || callout.text || ""}</div>
      ${
        (callout.imgSrc || callout.gallery || callout.text || callout.mode === "toggle")
          ? `<img class="calloutTapIcon" src="img/tap.png" alt="" />`
          : ``
      }
    </button>
  `;

  const card = wrap.querySelector(".calloutCard");
  const textEl = wrap.querySelector(".calloutText");

  card.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    if (callout.mode === "toggle") {
      const questionText = (callout.short || callout.q || callout.text || "").trim();
      const answerText = (callout.a || callout.text || "").trim();
      const isShowingQuestion = textEl.textContent.trim() === questionText;
      textEl.textContent = isShowingQuestion ? answerText : questionText;
      return;
    }

    openModal(callout);
  });

  calloutsLayer.appendChild(wrap);


  return wrap;
}
function buildUIFor(targetId) {
  const target = TARGETS[targetId];
  if (!target) return;

  activeAnchorId = targetId;
  renderedTargetId = targetId;
  lastVisibleTargetId = targetId;

  hintEl.textContent = target.hint || "Namier kameru na bankovku…";
  bottomHintEl.textContent = target.bottomHint || "Tip: drž bankovku rovno a v dobrom svetle";

  clearCallouts();

  currentCalloutNodes = (target.callouts || []).map(callout => {
    const el = makeCalloutNode(callout);
    return {
      data: callout,
      el,
      dotEl: el.querySelector(".calloutDot"),
      cardEl: el.querySelector(".calloutCard")
    };
  });

  showARState();
  requestAnimationFrame(layoutActiveCallouts);

  
}
function layoutActiveCallouts() {
  if (!running || !activeAnchorId || modalOpen) return;

  const anchorEl = document.getElementById(activeAnchorId);
  if (!anchorEl) return;

  const visibleCards = [];
  let sawAnyPoint = false;

  currentCalloutNodes.forEach((item, index) => {
    const screenPos = placeDotProjected(item.dotEl, anchorEl, item.data.pos);

    if (!screenPos) {
      item.el.style.display = "none";
      return;
    }

    sawAnyPoint = true;
    lastSeenAt = performance.now();

    item.el.style.display = "block";
    item.el.style.left = `${screenPos.x}px`;
    item.el.style.top = `${screenPos.y}px`;

    const edgePadding = 18;
    const isNearEdge =
      screenPos.x < edgePadding ||
      screenPos.x > window.innerWidth - edgePadding ||
      screenPos.y < edgePadding ||
      screenPos.y > window.innerHeight - edgePadding;

    if (isNearEdge) {
      item.el.style.display = "none";
      return;
    }

    applyCardPositionNearDot(item.cardEl, item.data, screenPos.x, screenPos.y, index);
    item.cardEl.style.transform = `scale(${screenPos.scale ?? 1})`;
    item.cardEl.style.transformOrigin = "top left";

    constrainCardToViewport(item.cardEl);

    visibleCards.push({
      card: item.cardEl,
      dot: screenPos,
      data: item.data
    });
  });

  if (!sawAnyPoint && performance.now() - lastSeenAt > TARGET_STALE_MS) {
    currentCalloutNodes.forEach(item => {
      item.el.style.display = "none";
    });
  }

  resolveCardCollisions(visibleCards);
}
function showScanState() {
  running = false;
  scanEl.style.display = "flex";
  clearCallouts();

  bottomHintEl.textContent = lastVisibleTargetId
    ? `Bankovka sa stratila z dohľadu. ${TARGETS[lastVisibleTargetId]?.bottomHint || ""}`
    : "Tip: drž bankovku rovno a v dobrom svetle";
}
function closeModal() {
  modalOpen = false;
  document.body.classList.remove("modal-open");
  modalTitle.textContent = "";
  modalMedia.innerHTML = "";
  modalText.textContent = "";

  requestAnimationFrame(() => {
    if (activeAnchorId) layoutActiveCallouts();
  });
}

function buildModalShell(callout) {
  modalTitle.textContent = callout.imgTitle || callout.title || "Detail";
  modalMedia.innerHTML = "";
  modalText.textContent = "";
}

function renderTextModal(callout) {
  buildModalShell(callout);
  modalText.textContent = callout.text || "";
}

function renderImageModal(callout) {
  buildModalShell(callout);

  const img = document.createElement("img");
  img.alt = callout.imgTitle || callout.title || "Ilustrácia";
  img.src = `${callout.imgSrc}?v=${Date.now()}`;

  img.onerror = () => {
    modalMedia.innerHTML = `
      <div style="padding:14px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:rgba(255,255,255,.04);font-size:14px;line-height:1.4;">
        Obrázok sa nepodarilo načítať: <strong>${callout.imgSrc}</strong>
      </div>
    `;
  };

  modalMedia.appendChild(img);
  modalText.textContent = callout.imgText || callout.text || "";
}

function renderSlider(callout) {
  buildModalShell(callout);

  const gallery = callout.gallery || [];
  if (!gallery.length) {
    modalText.textContent = callout.text || "";
    return;
  }

  const sliderEl = document.createElement("div");
  sliderEl.className = "slider";

  const stage = document.createElement("div");
  stage.className = "sliderStage";

  const track = document.createElement("div");
  track.className = "sliderTrack";

  gallery.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "slide";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = callout.title || "";

    slide.appendChild(img);
    track.appendChild(slide);
  });

  stage.appendChild(track);
  sliderEl.appendChild(stage);

  const nav = document.createElement("div");
  nav.className = "sliderNav";

  const prevBtn = document.createElement("button");
  prevBtn.className = "sliderBtn";
  prevBtn.type = "button";
  prevBtn.textContent = "← Predchádzajúci";

  const dotsWrap = document.createElement("div");
  dotsWrap.className = "sliderDots";

  const dotBtns = gallery.map((_, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.slide = String(i);
    if (i === 0) btn.classList.add("active");
    dotsWrap.appendChild(btn);
    return btn;
  });

  const nextBtn = document.createElement("button");
  nextBtn.className = "sliderBtn";
  nextBtn.type = "button";
  nextBtn.textContent = "Ďalší →";

  nav.appendChild(prevBtn);
  nav.appendChild(dotsWrap);
  nav.appendChild(nextBtn);

  sliderEl.appendChild(nav);
  modalMedia.appendChild(sliderEl);

  let current = 0;

  function goTo(index) {
    current = (index + gallery.length) % gallery.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    modalText.textContent = gallery[current]?.text || "";
    dotBtns.forEach((btn, i) => btn.classList.toggle("active", i === current));
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));
  dotBtns.forEach((btn, i) => btn.addEventListener("click", () => goTo(i)));

  goTo(0);
}

function openModal(callout) {
  modalOpen = true;
  document.body.classList.add("modal-open");

  if (navigator.vibrate) {
    navigator.vibrate(20);
  }

  if (callout.gallery?.length) {
    renderSlider(callout);
  } else if (callout.imgSrc) {
    renderImageModal(callout);
  } else {
    renderTextModal(callout);
  }
}

function handleResize() {
  styleMindarVideo();

  if (sceneEl?.renderer) {
    sceneEl.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  if (activeAnchorId && !modalOpen) {
    requestAnimationFrame(layoutActiveCallouts);
  }
}

function initAnchorEvents() {
  anchors.forEach(anchorEl => {
    anchorEl.addEventListener("targetFound", () => {
      if (targetLostTimer) {
        clearTimeout(targetLostTimer);
        targetLostTimer = null;
      }

      lastSeenAt = performance.now();
      buildUIFor(anchorEl.id);

      requestAnimationFrame(() => {
        layoutActiveCallouts();
        setTimeout(layoutActiveCallouts, 80);
      });
    });

    anchorEl.addEventListener("targetLost", () => {
      if (activeAnchorId !== anchorEl.id) return;

      if (targetLostTimer) {
        clearTimeout(targetLostTimer);
      }

      targetLostTimer = setTimeout(() => {
        activeAnchorId = null;
        renderedTargetId = null;
        showScanState();
      }, 140);
    });
  });
}

function tick() {
  if (running && activeAnchorId && !modalOpen) {
    layoutActiveCallouts();
  }
  requestAnimationFrame(tick);
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", () => {
  setTimeout(handleResize, 250);
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    setTimeout(handleResize, 250);
  }
});

sceneEl.addEventListener("loaded", () => {
  ensureMindarVideo(30);
});

sceneEl.addEventListener("arReady", () => {
  ensureMindarVideo(40);

  setTimeout(() => {
    forceARRefresh();
  }, 400);
});

sceneEl.addEventListener("arError", event => {
  console.warn("MindAR error:", event);
});

initAnchorEvents();
tick();

function forceARRefresh() {
  styleMindarVideo();

  if (sceneEl?.renderer) {
    sceneEl.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  if (activeAnchorId) {
    buildUIFor(activeAnchorId);
  }

  requestAnimationFrame(() => {
    layoutActiveCallouts();
  });
}
window.addEventListener("focus", () => {
  setTimeout(forceARRefresh, 200);
});

window.addEventListener("pageshow", () => {
  setTimeout(forceARRefresh, 200);
});

syncViewportSize();
window.addEventListener("resize", syncViewportSize);
window.addEventListener("orientationchange", () => {
  setTimeout(syncViewportSize, 250);
});