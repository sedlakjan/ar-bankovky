function syncViewportSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

const TARGETS = {
  a4: {
    hint: "20€ – Predná strana: objav bezpečnostné a vizuálne prvky",
    bottomHint: "Tip: pozeraj prednú stranu a pokojne sa približuj",
    callouts: [
      {
        id: "sig",
        accent: "#4479FF",
        tag: "①",
        pos: { x: -0.36, y: 0.18, z: 0.03 },
        cardOffset: { x: 22, y: -118 },
        title: "Podpis na Eurách",
        short: "Pod vlajkou EÚ nájdeš podpis prezidentky ECB.",
        text: "Na eurobankovkách nájdeš podpis prezidenta alebo prezidentky Európskej centrálnej banky.",
        imgSrc: "img/lagarde.png",
        imgText: "Na eurobankovkách nájdeš vždy podpis aktuálneho prezidenta alebo prezidentky Európskej centrálnej banky. V súčastnosti je prezidentkou Christine Lagarde. \n\n Ak nájdeš staršiu euro bankovku bude na nej možno aj iný podpis."
      },
      {
        id: "tactile",
        accent: "#DED38F",
        tag: "②",
        pos: { x: 0.30, y: -0.16, z: 0.03 },
        cardOffset: { x: 22, y: -95 },
        title: "Hmatové čiary",
        short: "Reliéfne čiary pomáhajú rozpoznať bankovku dotykom.",
        imgSrc: "img/nevidiaci.png",
        imgText: "Na okrajoch eurobankoviek sú reliéfne prvky, ktoré sa dajú cítiť prstami. Pomáhajú najmä slabozrakým a nevidiacim. \n\n Akcia: Prejdi prstami po okrajoch bankovky a budeš cítiť výstupujúce čiary."
      },
      {
        id: "watermark",
        accent: "#7B79FF",
        tag: "③",
        pos: { x: -0.35, y: -0.02, z: 0.03 },
        cardOffset: { x: 26, y: -108 },
        title: "Vodoznak",
        markerSrc: "img/vodoznak.png",
        short: "Proti svetlu uvidíš obraz, ktorý nie je vytlačený.",
        text: "Vodoznak nie je obyčajná tlač. Je to obraz vytvorený priamo v papieri, ktorý sa ukáže proti svetlu.",
        imgTitle: "Vodoznak na eurobankovke",
        imgSrc: "img/europa.jpg",
        imgText: "Vodoznak nie je obyčajná tlač. Je to obraz vytvorený priamo v papieri, ktorý sa ukáže proti svetlu. \n\n Akcia: Daj bankovku oproti svetlu a uvidíš obraz a hodnotu bankovky. Uhádneš kto je zobrazený na bankovke?"
      },
      {
        id: "shine",
        accent: "#01FF76",
        tag: "④",
        pos: { x: -0.22, y: -0.22, z: 0.03 },
        cardOffset: { x: 26, y: -95 },
        title: "Smaragdová žiara",
        short: "Pri naklonení sa mení jas alebo pohyb prvku.",
        text: "Pri naklonení bankovky sa tento prvok opticky mení. Je to jeden z ochranných prvkov proti falšovaniu.",
        imgTitle: "Smaragdová žiara",
        imgSrc: "img/tilt-shine.png",
        imgText: "Niektoré ochranné prvky menia vzhľad pri pohybe alebo svetle. Pri naklonení bankovky sa tento prvok opticky mení. Je to jeden z ochranných prvkov proti falšovaniu. \n\n Akcia: Skús naklánať bankovku a uvidíš ako prechádza žiara cez číselnú hodnotu bankovky"
      },
      {
        id: "arch",
        accent: "#FF6201",
        tag: "⑤",
        pos: { x: 0.27, y: 0.15, z: 0.03 },
        cardOffset: { x: 22, y: -118 },
        title: "Architektúra",
        short: "Každá bankovka nesie iný architektonický štýl.",
        text: "Motívy na eurobankovkách zobrazujú architektonické štýly Európy. Dvadsaťeurová bankovka predstavuje gotiku.",
        imgTitle: "Architektúra na bankovkách reprezentuje európske dejiny a kultúru.",
        imgSrc: "img/architecture-styles.jpg",
        imgText: "Každá bankovka ukazuje iný architektonický štýl od najstarších až po moderné. Je to taký rýchly „timeline Európy“ cez stavby, ktoré formovali jej vývoj. \n\n Fun fact: Na bankovkách nie sú reálne budovy, sú to zámerne vymyslené návrhy, aby nepatrili žiadnej konkrétnej krajine."
      },
      {
        id: "langs",
        accent: "#092B50",
        tag: "④",
        pos: { x: -0.44, y: 0.00, z: 0.03 },
        cardOffset: { x: 24, y: -78 },
        title: "Príbeh Eura",
        imgTitle: "Príbeh Eura",
        short: "Spoločná mena je aj príbeh spolupráce v Európe.",
        gallery: [
          {
            title: "Európa po vojne",
            src: "img/euro-story-europa-vojna.png",
            text: "Po druhej svetovej vojne bola Európa rozdelená, zničená a plná nedôvery. Milióny ľudí prišli o domovy aj životy. Preto európske krajiny začali hľadať spôsob, ako zabrániť ďalším veľkým konfliktom."
          },
          {
            title: "Spolupráca namiesto konfliktu",
            src: "img/euro-story-esuo.webp",
            text: "Spolupráca po rokoch vojen sa nevytvára ľahko. Preto jedným z prvých krokov bolo prepojenie priemyslu, najmä uhlia a ocele. Myšlienka bola jednoduchá: krajiny, ktoré spolu obchodujú a spolupracujú, majú menšiu šancu bojovať proti sebe."
          },
          {
            title: "Zrod spoločnej Európy",
            src: "img/euro-story-eu-map.gif",
            text: "Spolupráca sa postupne rozširovala. Po prvých dohodách vzniklo Európske hospodárske spoločenstvo (EHS), ktoré malo podporiť obchod, ekonomiku a užšie prepojenie medzi krajinami.\n\nPostupne pribúdali ďalšie štáty, spoločné pravidlá aj otvorenejšie hranice. Z týchto krokov sa časom vyvinula dnešná Európska únia."
          },
          {
            title: "Jedna mena pre milióny ľudí",
            src: "img/euro-story-berlin-euro.png",
            text: "Euro vzniklo ako spoločná mena európskych krajín. Uľahčilo cestovanie, obchod aj porovnávanie cien. Dnes eurom platia stovky miliónov ľudí v rôznych častiach Európy."
          },
          {
            title: "Rozdielne krajiny, spoločné symboly",
            text: "Na eurobankovkách nájdeš prvky, ktoré symbolizujú spoluprácu a rozmanitosť Európy. Rôzne jazyky, architektúra či mapy pripomínajú, že Európa pozostáva z mnohých kultúr, ktoré sú navzájom prepojené."
          },
          {
            title: "Euro ako spojenie",
            src: "img/euro-story-spojenie.png",
            text: "Euro nie je len spôsob platenia.\nJe aj jedným z výsledkov snahy európskych krajín viac spolupracovať po období vojen a rozdelenia.\n\nPo tragédiách 20. storočia začali štáty hľadať spôsoby, ako byť navzájom viac prepojené ekonomicky, politicky aj spoločensky.\n\nEuro sa časom stalo jedným zo symbolov tejto spolupráce. Bankovka, ktorú dnes držíš v ruke, tak nie je len platidlo, ale aj pripomienka spoločného európskeho príbehu. Euro ako naša spoločná mena."
          }
        ],
        imgText: "Euro nie je len spôsob platenia. Je aj jedným zo symbolov spolupráce európskych krajín."
      }
    ]
  },

  a5: {
    hint: "20€ – Zadná strana: technické detaily a život bankovky",
    bottomHint: "Tip: otoč bankovku na zadnú stranu",
    callouts: [
      {
        id: "serial",
        accent: "#4479FF",
        tag: "①",
        pos: { x: 0.36, y: 0.21, z: 0.03 },
        cardOffset: { x: -270, y: -115 },
        title: "Sériové čísla",
        imgTitle: "Sériové číslo",
        short: "Každá bankovka má vlastnú identitu.",
        imgSrc: "img/seriovecislo.jpg",
        imgText: "Sériové číslo je jedinečný identifikátor bankovky. Pomáha pri kontrole, evidencii a sledovaní pravosti. Na bankovke ho nájdeš dvakrát, pre lepšiu čitateľnosť a kontrolu. \n\n Fun fact: Dve umiestnenia čísla sú tam preto, aby si z roztrhnutej bankovky nespravil v banke dve :)"
      },
      {
        id: "material",
        accent: "#DED38F",
        tag: "②",
        pos: { x: -0.08, y: 0.06, z: 0.03 },
        cardOffset: { x: 24, y: -108 },
        title: "Materiál bankovky",
        short: "Eurobankovky nie sú z bežného kancelárskeho papiera.",
        text: "Eurobankovky sú vyrobené z bavlny. Vďaka tomu sú odolnejšie, lepšie držia tlač a vydržia veľa ohybov.",
        imgTitle: "Materiál eurobankoviek",
        imgSrc: "img/bavlna.webp",
        gallery: [
          {
            src: "img/bavlna.webp",
            text: "Eurobankovky sa vyrábajú z bavlny, nie z obyčajného kancelárskeho papiera. Vďaka tomu majú pevný, pružný a typický hmatový povrch."
          },
          {
            src: "img/odolnost.jpg",
            text: "Materiál musí vydržať veľa ohybov, dotykov aj presunov medzi ľuďmi. Preto sa pri bankovkách používa odolný bankovkový papier s dlhšou životnosťou."
          },
          {
            src: "img/lifecycle.jpg",
            text: "Po skončení životnosti sa bankovky zničia a tlačia sa nové."
          }
        ],
        imgText: "Bankovkový papier je pevnejší a odolnejší než bežný papier."
      },
      {
        id: "uv",
        accent: "#01FF76",
        tag: "③",
        pos: { x: -0.24, y: 0.02, z: 0.03 },
        cardOffset: { x: 26, y: -82 },
        title: "UV prvky",
        short: "Pod UV svetlom sa objavia skryté ochranné prvky.",
        text: "Pod ultrafialovým svetlom sa na bankovke zvýraznia farebné vlákna a ďalšie ochranné prvky.",
        imgTitle: "UV ochranné prvky",
        imgSrc: "img/uv-fibers.webp",
        imgText: "UV ochrana patrí medzi dôležité technické prvky eurobankoviek. \n\n Fun fact: Bežný papier pod UV svetlom svieti celý, ale bankovka nie, rozsvietia sa len vybrané vlákna a detaily. To je jeden z dôvodov, prečo sa falzifikáty ľahko odhalia."
      }
    ]
  }
};

const BANKNOTE_OPTIONS = [
  { id: "5", label: "5 EUR", mindSrc: "targets5.mind" },
  { id: "10", label: "10 EUR", mindSrc: "targets10.mind" },
  { id: "20", label: "20 EUR", mindSrc: "targets20.mind" },
  { id: "50", label: "50 EUR", mindSrc: "targets50.mind" },
  { id: "100", label: "100 EUR", mindSrc: "targets100.mind" }
];

const BANKNOTE_BY_ID = Object.fromEntries(BANKNOTE_OPTIONS.map(option => [option.id, option]));

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function extractCalloutContent(callouts) {
  return callouts.map(({ pos, cardOffset, ...rest }) => cloneData(rest));
}

function extractCalloutLayout(callouts) {
  return Object.fromEntries(
    callouts.map(({ id, pos, cardOffset }) => [
      id,
      {
        pos: cloneData(pos),
        cardOffset: cloneData(cardOffset)
      }
    ])
  );
}

function buildCalloutsFromLayout(contentCallouts, layoutMap) {
  return contentCallouts.map(callout => ({
    ...cloneData(callout),
    pos: cloneData(layoutMap[callout.id]?.pos ?? { x: 0, y: 0, z: 0.03 }),
    cardOffset: cloneData(layoutMap[callout.id]?.cardOffset ?? { x: 22, y: -110 })
  }));
}

const SHARED_CALLOUT_CONTENT = {
  front: extractCalloutContent(TARGETS.a4.callouts).filter(callout => callout.id !== "langs"),
  back: [
    ...extractCalloutContent(TARGETS.a5.callouts),
    ...extractCalloutContent(TARGETS.a4.callouts).filter(callout => callout.id === "langs")
  ]
};

const BANKNOTE_LAYOUTS = {
  "5-front": {
    sig: { pos: { x: -0.36, y: 0.17, z: 0.03 }, cardOffset: { x: 22, y: -118 } },
    tactile: { pos: { x: 0.45, y: -0.16, z: 0.03 }, cardOffset: { x: 22, y: -95 } },
    watermark: { pos: { x: -0.31, y: -0.02, z: 0.03 }, cardOffset: { x: 26, y: -108 } },
    shine: { pos: { x: -0.24, y: -0.22, z: 0.03 }, cardOffset: { x: 26, y: -95 } },
    arch: { pos: { x: 0.27, y: 0.15, z: 0.03 }, cardOffset: { x: 22, y: -118 } }
  },
  "5-back": {
    serial: { pos: { x: 0.36, y: 0.21, z: 0.03 }, cardOffset: { x: -270, y: -115 } },
    material: { pos: { x: -0.08, y: 0.06, z: 0.03 }, cardOffset: { x: 24, y: -108 } },
    uv: { pos: { x: -0.24, y: 0.02, z: 0.03 }, cardOffset: { x: 26, y: -82 } },
    langs: { pos: { x: 0.42, y: -0.16, z: 0.03 }, cardOffset: { x: -270, y: -95 } }
  },
  "10-front": {
    sig: { pos: { x: -0.36, y: 0.17, z: 0.03 }, cardOffset: { x: 22, y: -118 } },
    tactile: { pos: { x: 0.45, y: -0.16, z: 0.03 }, cardOffset: { x: 22, y: -95 } },
    watermark: { pos: { x: -0.31, y: -0.02, z: 0.03 }, cardOffset: { x: 26, y: -108 } },
    shine: { pos: { x: -0.24, y: -0.22, z: 0.03 }, cardOffset: { x: 26, y: -95 } },
    arch: { pos: { x: 0.27, y: 0.15, z: 0.03 }, cardOffset: { x: 22, y: -118 } }
  },
  "10-back": {
    serial: { pos: { x: 0.36, y: 0.21, z: 0.03 }, cardOffset: { x: -270, y: -115 } },
    material: { pos: { x: -0.08, y: 0.06, z: 0.03 }, cardOffset: { x: 24, y: -108 } },
    uv: { pos: { x: -0.24, y: 0.02, z: 0.03 }, cardOffset: { x: 26, y: -82 } },
    langs: { pos: { x: 0.42, y: -0.16, z: 0.03 }, cardOffset: { x: -270, y: -95 } }
  },
  "20-front": {
    sig: { pos: { x: -0.36, y: 0.17, z: 0.03 }, cardOffset: { x: 22, y: -118 } },
    tactile: { pos: { x: 0.45, y: -0.16, z: 0.03 }, cardOffset: { x: 22, y: -95 } },
    watermark: { pos: { x: -0.31, y: -0.02, z: 0.03 }, cardOffset: { x: 26, y: -108 } },
    shine: { pos: { x: -0.24, y: -0.22, z: 0.03 }, cardOffset: { x: 26, y: -95 } },
    arch: { pos: { x: 0.27, y: 0.15, z: 0.03 }, cardOffset: { x: 22, y: -118 } }
  },
  "20-back": {
    serial: { pos: { x: 0.36, y: 0.21, z: 0.03 }, cardOffset: { x: -270, y: -115 } },
    material: { pos: { x: -0.08, y: 0.06, z: 0.03 }, cardOffset: { x: 24, y: -108 } },
    uv: { pos: { x: -0.24, y: 0.02, z: 0.03 }, cardOffset: { x: 26, y: -82 } },
    langs: { pos: { x: 0.42, y: -0.16, z: 0.03 }, cardOffset: { x: -270, y: -95 } }
  },
  "50-front": {
    sig: { pos: { x: -0.36, y: 0.17, z: 0.03 }, cardOffset: { x: 22, y: -118 } },
    tactile: { pos: { x: 0.45, y: -0.16, z: 0.03 }, cardOffset: { x: 22, y: -95 } },
    watermark: { pos: { x: -0.31, y: -0.02, z: 0.03 }, cardOffset: { x: 26, y: -108 } },
    shine: { pos: { x: -0.24, y: -0.22, z: 0.03 }, cardOffset: { x: 26, y: -95 } },
    arch: { pos: { x: 0.27, y: 0.15, z: 0.03 }, cardOffset: { x: 22, y: -118 } }
  },
  "50-back": {
    serial: { pos: { x: 0.36, y: 0.21, z: 0.03 }, cardOffset: { x: -270, y: -115 } },
    material: { pos: { x: -0.08, y: 0.06, z: 0.03 }, cardOffset: { x: 24, y: -108 } },
    uv: { pos: { x: -0.24, y: 0.02, z: 0.03 }, cardOffset: { x: 26, y: -82 } },
    langs: { pos: { x: 0.42, y: -0.16, z: 0.03 }, cardOffset: { x: -270, y: -95 } }
  },
  "100-front": {
    sig: { pos: { x: -0.36, y: 0.17, z: 0.03 }, cardOffset: { x: 22, y: -118 } },
    tactile: { pos: { x: 0.45, y: -0.16, z: 0.03 }, cardOffset: { x: 22, y: -95 } },
    watermark: { pos: { x: -0.31, y: -0.02, z: 0.03 }, cardOffset: { x: 26, y: -108 } },
    shine: { pos: { x: -0.24, y: -0.22, z: 0.03 }, cardOffset: { x: 26, y: -95 } },
    arch: { pos: { x: 0.27, y: 0.15, z: 0.03 }, cardOffset: { x: 22, y: -118 } }
  },
  "100-back": {
    serial: { pos: { x: 0.36, y: 0.21, z: 0.03 }, cardOffset: { x: -270, y: -115 } },
    material: { pos: { x: -0.08, y: 0.06, z: 0.03 }, cardOffset: { x: 24, y: -108 } },
    uv: { pos: { x: -0.24, y: 0.02, z: 0.03 }, cardOffset: { x: 26, y: -82 } },
    langs: { pos: { x: 0.42, y: -0.16, z: 0.03 }, cardOffset: { x: -270, y: -95 } }
  }
};

const TARGET_SIDE_BY_ID = {
  front: "front",
  back: "back"
};

function createTargetForBanknote(banknoteId, side) {
  const layoutKey = `${banknoteId}-${side}`;
  const contentKey = side === "front" ? "front" : "back";

  return {
    hint: side === "front"
      ? `${banknoteId} EUR - Objav bezpečnostné a vizuálne prvky`
      : `${banknoteId} EUR - Technické detaily a život bankovky`,
    bottomHint: side === "front"
      ? `Tip: pozeraj na ${banknoteId} EUR bankovku a pokojne sa približuj`
      : `Tip: otoč ${banknoteId} EUR bankovku na zadnú stranu`,
    callouts: buildCalloutsFromLayout(
      SHARED_CALLOUT_CONTENT[contentKey],
      BANKNOTE_LAYOUTS[layoutKey]
    )
  };
}

function rebuildTargetsForSelectedBanknote() {
  const banknoteId = getSelectedBanknote().id;

  Object.keys(TARGET_SIDE_BY_ID).forEach(targetId => {
    const side = TARGET_SIDE_BY_ID[targetId];
    TARGETS[targetId] = createTargetForBanknote(banknoteId, side);
  });
}

const introScreenEl = document.getElementById("introScreen");
const introStartBtn = document.getElementById("introStartBtn");
const banknotePickerEls = [...document.querySelectorAll(".js-banknote-picker")];

const SMOOTH = 0.24;
const CARD_SMOOTH = 0.16;
const MAX_VISIBLE_CARDS = 2;
const VIEWPORT_MARGIN = 12;
const COLLISION_GAP = 6;
const TARGET_STALE_MS = 180;
const DOT_DEADZONE_PX = 3;
const CARD_DEADZONE_PX = 6;
const DOT_SAFE_RADIUS = 34;
const ACTIVE_DOT_SAFE_RADIUS = 44;
const ACTIVE_STICKY_BONUS = 90;
const CARD_SCALE_MIN = 0.96;
const CARD_SCALE_MAX = 1.02;

const dotState = new WeakMap();
const cardState = new WeakMap();
const BANKNOTE_STORAGE_KEY = "ar-selected-banknote";
const SKIP_INTRO_STORAGE_KEY = "ar-skip-intro-once";
const LOADING_STARTED_AT_KEY = "ar-loading-started-at";
const MIN_LOADING_OVERLAY_MS = 3000;
const pageParams = new URLSearchParams(window.location.search);
const initialBanknoteId = window.__INITIAL_BANKNOTE_ID || pageParams.get("banknote") || localStorage.getItem(BANKNOTE_STORAGE_KEY) || "20";
const activeMindBanknoteId = window.__INITIAL_BANKNOTE_ID || initialBanknoteId;

let targetLostTimer = null;
let activeAnchorId = null;
let renderedTargetId = null;
let lastVisibleTargetId = null;
let running = false;
let modalOpen = false;
let currentCalloutNodes = [];
let lastSeenAt = 0;
let lastActiveCalloutIds = new Set();
let lockedCalloutId = null;
let lockedCalloutUntil = 0;
let lastActivatedCalloutAt = 0;
let layoutFreezeUntil = 0;
let arPaused = false;
let suppressSyntheticClickUntil = 0;
let modalOpenedAt = 0;
let activeModalCallout = null;
let depthHintTimer = null;
let progressHintTimer = null;
let pendingCompletionFeedback = null;
let selectedBanknoteId = initialBanknoteId;
let banknoteButtons = [];
let pendingBanknoteId = selectedBanknoteId;
let loadingHideTimer = null;

const hintEl = document.getElementById("hint");
const bottomHintEl = document.getElementById("bottomHint");
const depthHintEl = document.getElementById("depthHint");
const progressHintEl = document.getElementById("progressHint");
const progressHintIconEl = document.getElementById("progressHintIcon");
const progressHintTextEl = document.getElementById("progressHintText");
const confettiLayerEl = document.getElementById("confettiLayer");
const scanEl = document.getElementById("scan");
const scanTextEl = document.getElementById("scanText");
const calloutsLayer = document.getElementById("calloutsLayer");
const resumeOverlay = document.getElementById("resumeOverlay");
const banknoteSheetEl = document.getElementById("banknoteSheet");
const banknoteSheetApplyBtn = document.getElementById("banknoteSheetApply");
const banknoteSheetCloseBtn = document.getElementById("banknoteSheetClose");
const changeBanknoteBtn = document.getElementById("changeBanknoteBtn");
const resumeBtn = document.getElementById("resumeBtn");
const resetArBtn = document.getElementById("resetArBtn");

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalMedia = document.getElementById("modalMedia");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

const sceneEl = document.getElementById("scene");
const anchors = ["front", "back"].map(id => document.getElementById(id));
const discoveredCallouts = {
  front: new Set(),
  back: new Set()
};

function hideIntroScreen() {
  if (!introScreenEl) return;
  introScreenEl.classList.add("is-hidden");
  setTimeout(() => {
    introScreenEl.style.display = "none";
  }, 360);
}

function hideLoadingOverlay() {
  if (loadingHideTimer) {
    clearTimeout(loadingHideTimer);
    loadingHideTimer = null;
  }

  const startedAt = Number(sessionStorage.getItem(LOADING_STARTED_AT_KEY) || "0");
  const elapsed = startedAt ? Date.now() - startedAt : MIN_LOADING_OVERLAY_MS;
  const waitMs = Math.max(0, MIN_LOADING_OVERLAY_MS - elapsed);

  loadingHideTimer = window.setTimeout(() => {
    document.body.classList.remove("is-transitioning-banknote");
    sessionStorage.removeItem(LOADING_STARTED_AT_KEY);
    loadingHideTimer = null;
  }, waitMs);
}

function beginLoadingTransition() {
  sessionStorage.setItem(LOADING_STARTED_AT_KEY, String(Date.now()));
  document.body.classList.add("is-transitioning-banknote");
}

function getSelectedBanknote() {
  return BANKNOTE_BY_ID[selectedBanknoteId] || BANKNOTE_OPTIONS[0];
}

function getSelectedTargetIds() {
  return ["front", "back"];
}

function isTargetAllowed(targetId) {
  return getSelectedTargetIds().includes(targetId);
}

function updateMindarSourceForSelection() {
  const banknote = getSelectedBanknote();
  const current = sceneEl.getAttribute("mindar-image") || "";
  const next = current.replace(/imageTargetSrc:\s*[^;]+;/, `imageTargetSrc: ${banknote.mindSrc};`);

  if (next !== current) {
    sceneEl.setAttribute("mindar-image", next);
  }

  rebuildTargetsForSelectedBanknote();
}

function updateScanCopy() {
  const banknote = getSelectedBanknote();
  if (scanTextEl) {
    scanTextEl.textContent = `NAMIER KAMEROU NA ${banknote.label.toUpperCase()} BANKOVKU`;
  }

  if (!activeAnchorId) {
    bottomHintEl.textContent = `Tip: priprav si ${banknote.label} bankovku a drž ju rovno`;
  }
}

function syncBanknotePickerButtons() {
  banknoteButtons.forEach(({ button, banknoteId }) => {
    button.classList.toggle("is-active", banknoteId === pendingBanknoteId);
  });
}

function applySelectedBanknote() {
  selectedBanknoteId = pendingBanknoteId;
  localStorage.setItem(BANKNOTE_STORAGE_KEY, selectedBanknoteId);
  updateMindarSourceForSelection();
  updateScanCopy();
}

function persistSelectedBanknote() {
  selectedBanknoteId = pendingBanknoteId;
  localStorage.setItem(BANKNOTE_STORAGE_KEY, selectedBanknoteId);
}

function reloadForBanknoteChange(skipIntro = false) {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("banknote", selectedBanknoteId);

  if (skipIntro) {
    localStorage.setItem(SKIP_INTRO_STORAGE_KEY, "1");
    nextUrl.searchParams.set("skipIntro", "1");
  } else {
    localStorage.removeItem(SKIP_INTRO_STORAGE_KEY);
    nextUrl.searchParams.delete("skipIntro");
  }

  window.location.href = nextUrl.toString();
}

function openBanknoteSheet() {
  pendingBanknoteId = selectedBanknoteId;
  syncBanknotePickerButtons();
  banknoteSheetEl?.classList.add("is-visible");
  banknoteSheetEl?.setAttribute("aria-hidden", "false");
}

function closeBanknoteSheet() {
  banknoteSheetEl?.classList.remove("is-visible");
  banknoteSheetEl?.setAttribute("aria-hidden", "true");
}

function renderBanknotePicker() {
  if (!banknotePickerEls.length) return;

  banknoteButtons = [];

  banknotePickerEls.forEach(container => {
    container.innerHTML = "";

    BANKNOTE_OPTIONS.forEach(option => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "banknoteOption";
      button.textContent = option.label;
      button.dataset.banknote = option.id;
      button.addEventListener("click", () => {
        pendingBanknoteId = option.id;
        syncBanknotePickerButtons();
      });
      container.appendChild(button);
      banknoteButtons.push({ button, banknoteId: option.id });
    });
  });

  pendingBanknoteId = selectedBanknoteId;
  syncBanknotePickerButtons();
}

if (introStartBtn) {
  introStartBtn.addEventListener("click", () => {
    persistSelectedBanknote();
    beginLoadingTransition();
    setTimeout(() => {
      reloadForBanknoteChange(true);
    }, 60);
  });
}

(function patchGetUserMediaForFirefox() {
  const isFirefox = /firefox/i.test(navigator.userAgent);
  if (!isFirefox || !navigator.mediaDevices?.getUserMedia) return;

  const original = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

  navigator.mediaDevices.getUserMedia = async function (constraints) {
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

function clearCallouts() {
  currentCalloutNodes = [];
  calloutsLayer.innerHTML = "";
}

function showARState() {
  running = true;
  scanEl.style.display = "none";
}

function showDepthHint(duration = 5200) {
  if (!depthHintEl) return;

  if (depthHintTimer) clearTimeout(depthHintTimer);
  depthHintEl.classList.add("is-visible");
  depthHintEl.setAttribute("aria-hidden", "false");

  depthHintTimer = setTimeout(() => {
    depthHintEl.classList.remove("is-visible");
    depthHintEl.setAttribute("aria-hidden", "true");
    depthHintTimer = null;
  }, duration);
}

function hideProgressHint() {
  progressHintEl?.classList.remove("is-visible", "is-success");
  progressHintEl?.setAttribute("aria-hidden", "true");

  if (progressHintTimer) {
    clearTimeout(progressHintTimer);
    progressHintTimer = null;
  }
}

function showProgressHint(message, { success = false, icon = "✓", duration = 5200 } = {}) {
  if (!progressHintEl || !progressHintTextEl) return;

  if (progressHintTimer) clearTimeout(progressHintTimer);
  progressHintTextEl.textContent = message;
  if (progressHintIconEl) progressHintIconEl.textContent = icon;

  progressHintEl.classList.toggle("is-success", success);
  progressHintEl.classList.add("is-visible");
  progressHintEl.setAttribute("aria-hidden", "false");

  progressHintTimer = setTimeout(() => {
    progressHintEl.classList.remove("is-visible", "is-success");
    progressHintEl.setAttribute("aria-hidden", "true");
    progressHintTimer = null;
  }, duration);
}

function launchConfetti({ count = 28, cleanupMs = 1700, durationMs = 1350 } = {}) {
  if (!confettiLayerEl) return;

  confettiLayerEl.innerHTML = "";
  const colors = ["#DED38F", "#4479FF", "#01FF76", "#FF6201", "#FFFFFF"];

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confettiPiece";
    piece.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 260)}px`);
    piece.style.setProperty("--r", `${Math.round((Math.random() - 0.5) * 520)}deg`);
    piece.style.setProperty("--delay", `${(Math.random() * 0.18).toFixed(2)}s`);
    piece.style.setProperty("--duration", `${durationMs}ms`);
    piece.style.background = colors[i % colors.length];
    confettiLayerEl.appendChild(piece);
  }

  setTimeout(() => {
    confettiLayerEl.innerHTML = "";
  }, cleanupMs);
}

function runCompletionFeedback(feedback) {
  if (!feedback) return;

  showProgressHint(feedback.message, {
    success: feedback.success,
    icon: feedback.icon,
    duration: feedback.duration
  });

  if (feedback.confetti) {
    launchConfetti({ count: 42, cleanupMs: 2800, durationMs: 2200 });
  }
}

function getTargetSide(targetId = activeAnchorId) {
  return TARGET_SIDE_BY_ID[targetId] || null;
}

function getTargetCalloutCount(side) {
  const targetId = Object.keys(TARGET_SIDE_BY_ID).find(id => TARGET_SIDE_BY_ID[id] === side);
  return TARGETS[targetId]?.callouts?.length || 0;
}

function trackCalloutDiscovered(callout) {
  const side = getTargetSide();
  if (!side || !callout?.id || !discoveredCallouts[side]) return;

  const sideSet = discoveredCallouts[side];
  const before = sideSet.size;
  sideSet.add(callout.id);

  if (sideSet.size === before) return;

  const total = getTargetCalloutCount(side);
  if (!total || sideSet.size < total) return;

  const frontDone = discoveredCallouts.front.size >= getTargetCalloutCount("front");
  const backDone = discoveredCallouts.back.size >= getTargetCalloutCount("back");

  if (frontDone && backDone) {
    pendingCompletionFeedback = {
      message: "Všetky body nájdené",
      success: true,
      icon: "✓",
      duration: 9000,
      confetti: true
    };
    return;
  }

  if (side === "front") {
    pendingCompletionFeedback = {
      message: "Našiel si všetky body. Otoč bankovku na zadnú stranu.",
      icon: "↻",
      duration: 4300
    };
    return;
  }

  pendingCompletionFeedback = {
    message: "Našiel si všetky body. Otoč bankovku na prednú stranu.",
    icon: "↻",
    duration: 4300
  };
}

function showScanState() {
  running = false;
  scanEl.style.display = "flex";
  clearCallouts();
  depthHintEl?.classList.remove("is-visible");
  depthHintEl?.setAttribute("aria-hidden", "true");
  if (depthHintTimer) {
    clearTimeout(depthHintTimer);
    depthHintTimer = null;
  }

  const banknote = getSelectedBanknote();
  bottomHintEl.textContent = lastVisibleTargetId
    ? "Bankovka sa stratila z dohladu."
    : `Tip: priprav si ${banknote.label} bankovku a drž ju rovno`;
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
  anchorObj.localToWorld(world);

  const projected = world.clone().project(cam);

  if (!Number.isFinite(projected.x) || !Number.isFinite(projected.y) || !Number.isFinite(projected.z)) {
    return null;
  }

  const screenX = (projected.x * 0.5 + 0.5) * window.innerWidth;
  const screenY = (-projected.y * 0.5 + 0.5) * window.innerHeight;

  const camWorld = new THREE.Vector3();
  cam.getWorldPosition(camWorld);
  const distance = camWorld.distanceTo(world);
  const scale = clamp(1.18 - distance * 0.12, CARD_SCALE_MIN, CARD_SCALE_MAX);
  const markerNearFactor = clamp((0.98 - distance) / 0.52, 0, 1);
  const markerScale = 1.34 + markerNearFactor * 1.08;

  return {
    x: screenX,
    y: screenY,
    scale,
    markerScale,
    distance
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

  const deltaX = projected.x - smoothState.x;
  const deltaY = projected.y - smoothState.y;
  const nearFactor = clamp((0.58 - (projected.distance ?? 1)) / 0.28, 0, 1);
  const smoothFactor = clamp(SMOOTH * (1 - nearFactor * 0.45), 0.08, SMOOTH);
  const deadzone = DOT_DEADZONE_PX + nearFactor * 4;

  if (Math.abs(deltaX) > deadzone) {
    smoothState.x += deltaX * smoothFactor;
  }

  if (Math.abs(deltaY) > deadzone) {
    smoothState.y += deltaY * smoothFactor;
  }

  smoothState.scale += ((projected.scale ?? 1) - smoothState.scale) * 0.22;

  dotEl.style.display = "block";

  return {
    x: smoothState.x,
    y: smoothState.y,
    scale: smoothState.scale,
    distance: projected.distance
  };
}

function applyCardPositionNearDot(card, callout, dotX, dotY, index, allDots, clusterCenter, projectedDistance = 1) {
  const offset = callout.cardOffset || { x: 22, y: -110 };

  const cardWidth = card.offsetWidth || 250;
  const cardHeight = card.offsetHeight || 120;
  const margin = VIEWPORT_MARGIN;
  const primaryOffsetX = offset.x;
  const primaryOffsetY = offset.y;
  const fallbackOffsetX = primaryOffsetX >= 0 ? -(cardWidth + 26) : 26;
  const fallbackOffsetY = primaryOffsetY <= 0 ? 24 : -(cardHeight + 24);
  const pushAwayX = dotX >= clusterCenter.x ? 18 : -(cardWidth + 18);
  const pushAwayY = dotY >= clusterCenter.y ? 16 : -(cardHeight + 16);

  const candidates = [
    { left: dotX + primaryOffsetX, top: dotY + primaryOffsetY },
    { left: dotX + fallbackOffsetX, top: dotY + primaryOffsetY },
    { left: dotX + primaryOffsetX, top: dotY + fallbackOffsetY },
    { left: dotX + fallbackOffsetX, top: dotY + fallbackOffsetY },
    { left: dotX + pushAwayX, top: dotY + primaryOffsetY },
    { left: dotX + pushAwayX, top: dotY + pushAwayY },
    { left: dotX - cardWidth / 2, top: dotY - cardHeight - 28 },
    { left: dotX - cardWidth / 2, top: dotY + 28 }
  ].map(candidate => {
    const clampedLeft = clamp(candidate.left, margin, window.innerWidth - cardWidth - margin);
    const clampedTop = clamp(candidate.top, margin, window.innerHeight - cardHeight - margin);
    return { left: clampedLeft, top: clampedTop };
  });

  const scorePlacement = placement => {
    const rect = {
      left: placement.left,
      top: placement.top,
      right: placement.left + cardWidth,
      bottom: placement.top + cardHeight
    };

    let score = 0;

    if (
      dotX > rect.left - DOT_SAFE_RADIUS &&
      dotX < rect.right + DOT_SAFE_RADIUS &&
      dotY > rect.top - DOT_SAFE_RADIUS &&
      dotY < rect.bottom + DOT_SAFE_RADIUS
    ) {
      score += 1200;
    }

    allDots.forEach(otherDot => {
      const safeRadius = otherDot.active ? ACTIVE_DOT_SAFE_RADIUS : DOT_SAFE_RADIUS;

      if (
        otherDot.id !== callout.id &&
        otherDot.x > rect.left - safeRadius &&
        otherDot.x < rect.right + safeRadius &&
        otherDot.y > rect.top - safeRadius &&
        otherDot.y < rect.bottom + safeRadius
      ) {
        score += otherDot.active ? 1200 : 260;
      }
    });

    const cardCenterX = rect.left + cardWidth / 2;
    const cardCenterY = rect.top + cardHeight / 2;
    const clusterDistance = Math.hypot(cardCenterX - clusterCenter.x, cardCenterY - clusterCenter.y);

    score += Math.hypot(cardCenterX - dotX, cardCenterY - dotY) * 0.1;
    score -= clusterDistance * 0.025;
    score += Math.abs(rect.left - placement.left) * 0.5;
    score += Math.abs(rect.top - placement.top) * 0.5;

    return score;
  };

  const bestPlacement = candidates.reduce((best, candidate) => {
    const score = scorePlacement(candidate);
    if (!best || score < best.score) {
      return { ...candidate, score };
    }
    return best;
  }, null);

  let targetLeft = bestPlacement?.left ?? dotX + primaryOffsetX;
  let targetTop = (bestPlacement?.top ?? dotY + primaryOffsetY) + index * 4;

  if (targetTop + cardHeight > window.innerHeight - margin) {
    targetTop = window.innerHeight - cardHeight - margin;
  }

  let state = cardState.get(card);
  if (!state) {
    state = { left: targetLeft, top: targetTop };
    cardState.set(card, state);
  }

  const leftDelta = targetLeft - state.left;
  const topDelta = targetTop - state.top;
  const nearFactor = clamp((0.58 - projectedDistance) / 0.28, 0, 1);
  const cardSmooth = clamp(CARD_SMOOTH * (1 - nearFactor * 0.55), 0.06, CARD_SMOOTH);
  const cardDeadzone = CARD_DEADZONE_PX + nearFactor * 6;

  if (Math.abs(leftDelta) > cardDeadzone) {
    state.left += leftDelta * cardSmooth;
  }

  if (Math.abs(topDelta) > cardDeadzone) {
    state.top += topDelta * cardSmooth;
  }

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

function resolveDotCoverage(items, dots) {
  items.forEach(item => {
    let iterations = 0;

    while (iterations < 3) {
      const rect = item.card.getBoundingClientRect();
      const topValue = parseCssPx(item.card.style.top) ?? rect.top;
      const leftValue = parseCssPx(item.card.style.left) ?? rect.left;
      let nextTop = topValue;
      let nextLeft = leftValue;
      let moved = false;

      dots.forEach(dot => {
        if (dot.id === item.data.id) return;

        const safeRadius = dot.active ? ACTIVE_DOT_SAFE_RADIUS : DOT_SAFE_RADIUS;
        const overlapsDot =
          dot.x > rect.left - safeRadius &&
          dot.x < rect.right + safeRadius &&
          dot.y > rect.top - safeRadius &&
          dot.y < rect.bottom + safeRadius;

        if (!overlapsDot) return;

        moved = true;

        const moveDown = Math.abs(dot.y - rect.top);
        const moveUp = Math.abs(rect.bottom - dot.y);
        const verticalPush = dot.active ? ACTIVE_DOT_SAFE_RADIUS * 0.72 : DOT_SAFE_RADIUS;
        const horizontalPush = dot.active ? ACTIVE_DOT_SAFE_RADIUS * 0.72 : DOT_SAFE_RADIUS;

        nextTop += moveDown < moveUp ? verticalPush : -verticalPush;

        if (dot.x > rect.left && dot.x < rect.right) {
          nextLeft += dot.x < rect.left + rect.width / 2 ? horizontalPush : -horizontalPush;
        }
      });

      item.card.style.left = `${Math.round(clamp(nextLeft, VIEWPORT_MARGIN, window.innerWidth - rect.width - VIEWPORT_MARGIN))}px`;
      item.card.style.top = `${Math.round(clamp(nextTop, VIEWPORT_MARGIN, window.innerHeight - rect.height - VIEWPORT_MARGIN))}px`;

      if (!moved) break;
      iterations += 1;
    }
  });
}

function updateCalloutStem(item, dotX, dotY) {
  const stemEl = item.stemEl;
  const cardRect = item.cardEl.getBoundingClientRect();

  if (!stemEl || !cardRect.width || !cardRect.height) return;

  const cardCenterX = clamp(dotX, cardRect.left + 18, cardRect.right - 18);
  const cardCenterY = clamp(dotY, cardRect.top + 18, cardRect.bottom - 18);
  const dx = cardCenterX - dotX;
  const dy = cardCenterY - dotY;
  const length = Math.max(0, Math.hypot(dx, dy) - 12);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  stemEl.style.width = `${Math.round(length)}px`;
  stemEl.style.transform = `translateY(-50%) rotate(${angle}deg)`;
  stemEl.style.opacity = length > 18 ? "0.95" : "0";
}

function lockCalloutInteraction(calloutId, duration = 420) {
  lockedCalloutId = calloutId;
  lockedCalloutUntil = performance.now() + duration;
}

function clearCalloutInteractionLock(calloutId) {
  if (!calloutId || lockedCalloutId !== calloutId) return;
  lockedCalloutId = null;
  lockedCalloutUntil = 0;
}

function freezeCalloutLayout(duration = 850) {
  layoutFreezeUntil = performance.now() + duration;
}

function setCardActiveState(item, isActive) {
  if (!item?.cardEl) return;

  item.el.classList.toggle("callout-inactive", !isActive);
  item.el.style.zIndex = isActive ? "82" : "1";
  item.el.setAttribute("aria-hidden", isActive ? "false" : "true");

  item.cardEl.style.opacity = isActive ? "1" : "0";
  item.cardEl.style.visibility = isActive ? "visible" : "hidden";
  item.cardEl.style.pointerEvents = isActive ? "auto" : "none";
  item.cardEl.setAttribute("aria-hidden", isActive ? "false" : "true");
  item.cardEl.tabIndex = isActive ? 0 : -1;

  if (!isActive) {
    item.cardEl.classList.remove("is-pressed");
  }
}

function makeCalloutNode(callout) {
  const wrap = document.createElement("div");
  wrap.className = "callout";
  wrap.style.setProperty("--accent", callout.accent || "#DED38F");

  wrap.innerHTML = `
    <div class="calloutDot${callout.markerSrc ? " is-watermark" : ""}"${callout.markerSrc ? ` style="--marker-image:url('${callout.markerSrc}')"` : ""}></div>
    <div class="calloutStem"></div>
    <button type="button" class="calloutCard ${callout.mode === "toggle" ? "is-toggle" : "is-openable"}">
      <div class="calloutHead">
        <div class="calloutBadge">${callout.tag || "•"}</div>
        <div class="calloutTitle">${callout.title || "Info"}</div>
      </div>
      ${
        (callout.imgSrc || callout.gallery || callout.text || callout.mode === "toggle")
          ? `<img class="calloutTapIcon" src="img/tap.png" alt="" />`
          : ``
      }
    </button>
  `;

  const dot = wrap.querySelector(".calloutDot");
  const card = wrap.querySelector(".calloutCard");
  wrap.setAttribute("aria-hidden", "true");
  card.setAttribute("aria-hidden", "true");
  card.tabIndex = -1;
  let activePointerId = null;
  let activeDotPointerId = null;
  let startX = 0;
  let startY = 0;
  let dotStartX = 0;
  let dotStartY = 0;

  const activateCallout = event => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    card.classList.remove("is-pressed");

    const now = performance.now();
    if (now - lastActivatedCalloutAt < 320) return;
    lastActivatedCalloutAt = now;

    freezeCalloutLayout();
    lockCalloutInteraction(callout.id, 900);

    if (callout.mode === "toggle") {
      openModal({
        ...callout,
        text: `${(callout.q || callout.short || callout.text || "").trim()}\n\n${(callout.a || callout.text || "").trim()}`
      });
      return;
    }

    openModal(callout);
  };

  const activateDotOnly = event => {
    event?.preventDefault?.();
    event?.stopPropagation?.();

    lockedCalloutId = callout.id;
    lockedCalloutUntil = performance.now() + 1400;
    lastActiveCalloutIds = new Set([callout.id, ...lastActiveCalloutIds]);
    layoutFreezeUntil = 0;

    requestAnimationFrame(layoutActiveCallouts);
    setTimeout(layoutActiveCallouts, 70);
  };

  dot?.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    activeDotPointerId = event.pointerId;
    dotStartX = event.clientX ?? 0;
    dotStartY = event.clientY ?? 0;
    dot.classList.add("is-pressed");
    dot.setPointerCapture?.(event.pointerId);
  });

  dot?.addEventListener("pointermove", event => {
    if (event.pointerId !== activeDotPointerId) return;
    const moved = Math.hypot((event.clientX ?? 0) - dotStartX, (event.clientY ?? 0) - dotStartY);
    if (moved > 14) {
      dot.classList.remove("is-pressed");
    }
  });

  dot?.addEventListener("pointerup", event => {
    if (event.pointerId !== activeDotPointerId) return;
    const moved = Math.hypot((event.clientX ?? 0) - dotStartX, (event.clientY ?? 0) - dotStartY);
    activeDotPointerId = null;
    dot.classList.remove("is-pressed");

    if (moved <= 14) {
      suppressSyntheticClickUntil = performance.now() + 700;
      activateDotOnly(event);
    }
  });

  dot?.addEventListener("pointercancel", () => {
    activeDotPointerId = null;
    dot.classList.remove("is-pressed");
  });

  dot?.addEventListener("click", event => {
    if (performance.now() < suppressSyntheticClickUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    activateDotOnly(event);
  });

  card.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    activePointerId = event.pointerId;
    startX = event.clientX ?? 0;
    startY = event.clientY ?? 0;
    card.classList.add("is-pressed");
    freezeCalloutLayout();
    card.setPointerCapture?.(event.pointerId);
  });

  card.addEventListener("pointermove", event => {
    if (event.pointerId !== activePointerId) return;
    const moved = Math.hypot((event.clientX ?? 0) - startX, (event.clientY ?? 0) - startY);
    if (moved > 14) {
      card.classList.remove("is-pressed");
    }
  });

  card.addEventListener("pointerup", event => {
    if (event.pointerId !== activePointerId) return;
    const moved = Math.hypot((event.clientX ?? 0) - startX, (event.clientY ?? 0) - startY);
    activePointerId = null;

    if (event.pointerType !== "mouse") {
      suppressSyntheticClickUntil = performance.now() + 700;
      if (moved <= 14) {
        activateCallout(event);
        return;
      }
    }

    card.classList.remove("is-pressed");
  });

  card.addEventListener("pointercancel", () => {
    activePointerId = null;
    card.classList.remove("is-pressed");
    clearCalloutInteractionLock(callout.id);
  });

  card.addEventListener("click", event => {
    if (performance.now() < suppressSyntheticClickUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    card.classList.remove("is-pressed");
    if (event.detail === 0 || !window.PointerEvent) {
      activateCallout(event);
      return;
    }

    if (event.pointerType === undefined || event.pointerType === "mouse") {
      activateCallout(event);
      return;
    }

    event.preventDefault();
    event.stopPropagation();
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

  hintEl.textContent = target.hint || `Namier kameru na ${getSelectedBanknote().label} bankovku...`;
  bottomHintEl.textContent = target.bottomHint || `Tip: priprav si ${getSelectedBanknote().label} bankovku`;

  clearCallouts();

  currentCalloutNodes = (target.callouts || []).map(callout => {
    const el = makeCalloutNode(callout);
    return {
      data: callout,
      el,
      dotEl: el.querySelector(".calloutDot"),
      stemEl: el.querySelector(".calloutStem"),
      cardEl: el.querySelector(".calloutCard")
    };
  });

  showARState();
  showDepthHint();
  requestAnimationFrame(layoutActiveCallouts);
}
function distanceToScreenCenter(x, y) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = x - cx;
  const dy = y - cy;
  return Math.hypot(dx, dy);
}
function layoutActiveCallouts() {
  if (!running || !activeAnchorId || modalOpen) return;
  if (layoutFreezeUntil && performance.now() <= layoutFreezeUntil) return;

  if (lockedCalloutUntil && performance.now() > lockedCalloutUntil) {
    lockedCalloutId = null;
    lockedCalloutUntil = 0;
  }

  const anchorEl = document.getElementById(activeAnchorId);
  if (!anchorEl) return;

  const candidates = [];
  let sawAnyPoint = false;

  currentCalloutNodes.forEach((item, index) => {
    const screenPos = placeDotProjected(item.dotEl, anchorEl, item.data.pos);

    if (!screenPos) {
      item.el.style.display = "none";
      setCardActiveState(item, false);
      return;
    }

    sawAnyPoint = true;
    lastSeenAt = performance.now();

    item.el.style.display = "block";
    item.el.style.left = `${screenPos.x}px`;
    item.el.style.top = `${screenPos.y}px`;

    const dist = distanceToScreenCenter(screenPos.x, screenPos.y);

    candidates.push({
      item,
      index,
      screenPos,
      dist
    });
  });

  if (!sawAnyPoint && performance.now() - lastSeenAt > TARGET_STALE_MS) {
    currentCalloutNodes.forEach(item => {
      item.el.style.display = "none";
    });
    return;
  }

  candidates.sort((a, b) => a.dist - b.dist);
  const scoredCandidates = candidates.map(entry => ({
    ...entry,
    score: entry.dist - (lastActiveCalloutIds.has(entry.item.data.id) ? ACTIVE_STICKY_BONUS : 0)
  }));

  scoredCandidates.sort((a, b) => a.score - b.score);

  const activeIds = new Set(
    scoredCandidates.slice(0, MAX_VISIBLE_CARDS).map(entry => entry.item.data.id)
  );

  if (lockedCalloutId && candidates.some(entry => entry.item.data.id === lockedCalloutId)) {
    activeIds.add(lockedCalloutId);

    if (activeIds.size > MAX_VISIBLE_CARDS) {
      [...scoredCandidates]
        .reverse()
        .some(entry => {
          const id = entry.item.data.id;
          if (id === lockedCalloutId || !activeIds.has(id)) return false;
          activeIds.delete(id);
          return true;
        });
    }
  }

  lastActiveCalloutIds = activeIds;
  const activeCandidates = candidates.filter(entry => activeIds.has(entry.item.data.id));
  const clusterCenter =
    activeCandidates.reduce(
      (acc, entry) => {
        acc.x += entry.screenPos.x;
        acc.y += entry.screenPos.y;
        return acc;
      },
      { x: 0, y: 0 }
    );

  if (activeCandidates.length) {
    clusterCenter.x /= activeCandidates.length;
    clusterCenter.y /= activeCandidates.length;
  } else {
    clusterCenter.x = window.innerWidth / 2;
    clusterCenter.y = window.innerHeight / 2;
  }

  const allDots = candidates.map(entry => ({
    id: entry.item.data.id,
    x: entry.screenPos.x,
    y: entry.screenPos.y,
    active: activeIds.has(entry.item.data.id)
  }));

  const visibleCards = [];

  candidates.forEach(({ item, index, screenPos }) => {
    const isActive = activeIds.has(item.data.id);
    const isLocked = lockedCalloutId === item.data.id && performance.now() <= lockedCalloutUntil;

    item.dotEl.style.opacity = isActive ? "1" : "0.54";
    const dotScale = item.data.markerSrc
      ? (screenPos.markerScale ?? 1.34) * (isActive ? 1 : 0.92)
      : (isActive ? 1 : 0.9);
    item.dotEl.style.transform = `translate(-50%, -50%) scale(${dotScale})`;

    if (!isActive) {
      setCardActiveState(item, false);
      if (item.stemEl) item.stemEl.style.opacity = "0";
      return;
    }

    setCardActiveState(item, true);
    item.cardEl.style.zIndex = isLocked ? "89" : String(81 + Math.max(0, 6 - index));
    item.el.style.zIndex = item.cardEl.style.zIndex;

    if (!isLocked) {
      applyCardPositionNearDot(item.cardEl, item.data, screenPos.x, screenPos.y, index, allDots, clusterCenter, screenPos.distance);
    }
    item.cardEl.style.transform = `scale(${screenPos.scale ?? 1})`;
    item.cardEl.style.transformOrigin = "top left";

    constrainCardToViewport(item.cardEl);

    visibleCards.push({
      card: item.cardEl,
      dot: screenPos,
      data: item.data
    });
  });

  resolveCardCollisions(visibleCards);
  resolveDotCoverage(visibleCards, allDots);
  visibleCards.forEach(({ data, dot }) => {
    const node = currentCalloutNodes.find(item => item.data.id === data.id);
    if (node) updateCalloutStem(node, dot.x, dot.y);
  });
}

function closeModal(force = false) {
  if (!force && performance.now() - modalOpenedAt < 260) return;

  const closedCallout = activeModalCallout;
  activeModalCallout = null;
  modalOpen = false;
  document.body.classList.remove("modal-open");
  modalTitle.textContent = "";
  modalMedia.innerHTML = "";
  modalText.textContent = "";

  requestAnimationFrame(() => {
    if (activeAnchorId) layoutActiveCallouts();
  });

  if (closedCallout) {
    trackCalloutDiscovered(closedCallout);
  }

  if (pendingCompletionFeedback) {
    const feedback = pendingCompletionFeedback;
    pendingCompletionFeedback = null;
    setTimeout(() => runCompletionFeedback(feedback), 180);
  }
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
  img.src = callout.imgSrc;

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

    if (item.src) {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.title || callout.title || "";
      img.addEventListener("load", () => updateStageHeight(), { once: true });
      slide.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "slidePlaceholder";
      placeholder.textContent = item.title || callout.title || "";
      slide.appendChild(placeholder);
    }

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
  const slides = [...track.querySelectorAll(".slide")];

  function updateStageHeight() {
    const activeSlide = slides[current];
    if (!activeSlide) return;

    const nextHeight = Math.ceil(activeSlide.getBoundingClientRect().height);
    if (nextHeight > 0) {
      stage.style.height = `${nextHeight}px`;
    }
  }

  function goTo(index) {
    current = (index + gallery.length) % gallery.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    modalTitle.textContent = gallery[current]?.title || callout.imgTitle || callout.title || "Detail";
    modalText.textContent = gallery[current]?.text || "";
    dotBtns.forEach((btn, i) => btn.classList.toggle("active", i === current));
    requestAnimationFrame(updateStageHeight);
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));
  dotBtns.forEach((btn, i) => btn.addEventListener("click", () => goTo(i)));

  goTo(0);
  window.setTimeout(updateStageHeight, 80);
}

function openModal(callout) {
  modalOpenedAt = performance.now();
  activeModalCallout = callout;
  modalOpen = true;
  document.body.classList.add("modal-open");

  if (navigator.vibrate) navigator.vibrate(20);

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
      if (!isTargetAllowed(anchorEl.id)) return;

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

      if (targetLostTimer) clearTimeout(targetLostTimer);

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

function forceARRefresh() {
  styleMindarVideo();
  hideLoadingOverlay();

  if (sceneEl?.renderer) {
    sceneEl.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  if (activeAnchorId && isTargetAllowed(activeAnchorId)) {
    buildUIFor(activeAnchorId);
  } else if (!modalOpen) {
    activeAnchorId = null;
    renderedTargetId = null;
    showScanState();
  }

  requestAnimationFrame(() => {
    layoutActiveCallouts();
  });
}

function getMindArSystem() {
  return sceneEl?.systems?.["mindar-image-system"] || null;
}

function showResumeOverlay() {
  if (!resumeOverlay) return;
  document.body.classList.add("resume-paused");
  resumeOverlay.classList.add("is-visible");
  resumeOverlay.setAttribute("aria-hidden", "false");
}

function hideResumeOverlay() {
  if (!resumeOverlay) return;
  document.body.classList.remove("resume-paused");
  resumeOverlay.classList.remove("is-visible");
  resumeOverlay.setAttribute("aria-hidden", "true");
}

async function pauseARExperience() {
  if (arPaused) return;

  const banknote = getSelectedBanknote();
  arPaused = true;
  closeModal(true);
  showScanState();
  hintEl.textContent = "AR je pozastavené";
  bottomHintEl.textContent = `Po návrate klikni na Reset AR a znovu namier na ${banknote.label} bankovku.`;
  showResumeOverlay();

  try {
    sceneEl?.pause?.();
    await getMindArSystem()?.stop?.();
  } catch (error) {
    console.warn("Pause AR failed:", error);
  }
}

async function resumeARExperience() {
  const banknote = getSelectedBanknote();
  hideResumeOverlay();
  hintEl.textContent = `Namier kameru na ${banknote.label} bankovku...`;
  bottomHintEl.textContent = `Tip: priprav si ${banknote.label} bankovku a drž ju rovno`;

  try {
    sceneEl?.play?.();
    await getMindArSystem()?.start?.();
  } catch (error) {
    console.warn("Resume AR failed:", error);
  }

  arPaused = false;
  ensureMindarVideo(40);
  setTimeout(forceARRefresh, 220);
}

async function resetARExperience() {
  activeAnchorId = null;
  renderedTargetId = null;
  lockedCalloutId = null;
  lockedCalloutUntil = 0;
  layoutFreezeUntil = 0;
  clearCallouts();
  showScanState();
  await resumeARExperience();
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
changeBanknoteBtn?.addEventListener("click", () => {
  openBanknoteSheet();
});
banknoteSheetCloseBtn?.addEventListener("click", () => {
  pendingBanknoteId = selectedBanknoteId;
  syncBanknotePickerButtons();
  closeBanknoteSheet();
});
banknoteSheetApplyBtn?.addEventListener("click", () => {
  persistSelectedBanknote();
  beginLoadingTransition();
  setTimeout(() => {
    reloadForBanknoteChange(true);
  }, 60);
});
resumeBtn?.addEventListener("click", () => {
  resetARExperience();
});
resetArBtn?.addEventListener("click", () => {
  resetARExperience();
});

window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", () => {
  setTimeout(handleResize, 250);
});

window.addEventListener("focus", () => {
  if (!arPaused) {
    setTimeout(forceARRefresh, 200);
  }
});

window.addEventListener("pageshow", () => {
  if (!arPaused) {
    setTimeout(forceARRefresh, 200);
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseARExperience();
  } else if (!arPaused) {
    setTimeout(forceARRefresh, 200);
  }
});

window.addEventListener("pagehide", () => {
  pauseARExperience();
});

sceneEl.addEventListener("loaded", () => {
  ensureMindarVideo(30);
});

sceneEl.addEventListener("arReady", () => {
  ensureMindarVideo(40);
  hideLoadingOverlay();
  setTimeout(forceARRefresh, 400);
});

sceneEl.addEventListener("arError", event => {
  console.warn("MindAR error:", event);
});

renderBanknotePicker();
updateMindarSourceForSelection();
updateScanCopy();
if (pageParams.get("skipIntro") === "1" || localStorage.getItem(SKIP_INTRO_STORAGE_KEY) === "1") {
  localStorage.removeItem(SKIP_INTRO_STORAGE_KEY);
  pageParams.delete("skipIntro");
  hideIntroScreen();
  setTimeout(forceARRefresh, 60);
}
syncViewportSize();
window.addEventListener("resize", syncViewportSize);
window.addEventListener("orientationchange", () => {
  setTimeout(syncViewportSize, 250);
});

initAnchorEvents();
tick();

