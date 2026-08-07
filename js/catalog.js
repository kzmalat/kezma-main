/* =========================================================
   PRODUCT CATALOG DATA
   ---------------------------------------------------------
   Edit this array to add, remove, or update products.
   Each product needs:
     id           - unique number
     name         - product name
     price        - number in Naira (no commas, no symbol)
     image        - path to image file
     inStock      - true or false
     dateAdded    - "YYYY-MM-DD" (used for Date sorting)
     salesRank    - lower number = better seller (used for
                    "Best selling" sort). Rank your products
                    1, 2, 3... in order of how well they sell.
     onSale       - true or false (shows a "Sale" badge)

     -- Size fields (all in metres) --
     width        - door leaf width in metres, or null if not
                    specified yet
     height       - door leaf height in metres, or null if not
                    specified yet
     thickness    - slab thickness in metres, or null
     sizeNote     - optional extra text shown when width/height
                    aren't both known (e.g. frame-only specs)
     sizeCategory - "compact" (width <= 1.3m), "wide"
                    (width 1.3m-2.0m), or "custom" (size on
                    request / not fully specified) — drives the
                    Size filter dropdown

     -- Specification fields (all optional strings) --
     description  - one-line product summary
     construction - build/panel description
     steelType    - iron/steel type used
     woodType     - wood/veneer type used ("None" if all-metal)
     durability   - durability/performance notes
     bestFor      - recommended use cases
   ========================================================= */

const products = [
  {
    id: 1,
    name: "Hamour Soundproof Door (Turkish)",
    price: 2500000,
    image: "images/door3.jpg",
    inStock: true,
    dateAdded: "2026-01-15",
    salesRank: 2,
    onSale: true,
    width: null,
    height: null,
    thickness: null,
    sizeNote: "Size on request",
    sizeCategory: "custom",
    description: "Entry-level Turkish apartment security door built for acoustic insulation and everyday residential/hotel use.",
    construction: "Steel-faced composite panel — galvanized steel skin bonded to an engineered wood substrate, with a mineral wool/rockwool core for sound damping.",
    steelType: "Galvanized cold-rolled steel sheet (skin), powder-coated for corrosion resistance.",
    woodType: "Melamine-faced MDF (engineered board, not solid timber) as the decorative face layer.",
    durability: "Resistant to warping and humidity swelling due to steel skin; fire-retardant core is common on this product line. Acoustic rating typically 28–32 dB reduction.",
    bestFor: "Apartment entrances, hotel guest rooms, offices needing noise control."
  },
  {
    id: 2,
    name: "Soundproof Door (Turkish) with TV Digital Smart Lock",
    price: 1200000,
    image: "images/door4.jpg",
    inStock: true,
    dateAdded: "2026-02-10",
    salesRank: 4,
    onSale: false,
    width: 1.22,
    height: 2.13,
    thickness: null,
    sizeNote: "",
    sizeCategory: "compact",
    description: "Same soundproof Turkish door platform as the Hamour, upgraded with a digital smart lock and video peephole/display panel.",
    construction: "Steel–composite–steel sandwich panel, mineral wool core, reinforced steel frame with multi-point locking plus electronic lock module.",
    steelType: "Galvanized steel skin and frame.",
    woodType: "Melamine/laminate-faced MDF facing.",
    durability: "Same acoustic and moisture resistance as the standard Hamour line, with added tamper-resistance from the digital locking mechanism.",
    bestFor: "Residences and offices wanting keyless entry alongside soundproofing."
  },
  {
    id: 3,
    name: "Italian Cast Door – Pure Security Door",
    price: 870000,
    image: "images/door20.jpg",
    inStock: true,
    dateAdded: "2025-11-20",
    salesRank: 6,
    onSale: false,
    width: 1.2,
    height: 2.4,
    thickness: null,
    sizeNote: "",
    sizeCategory: "compact",
    description: "Decorative Italian-style security door with an embossed/cast metal facade over a structural security core.",
    construction: "Cast aluminium-alloy (or cast-iron-style) ornamental panel face, fixed to a structural steel skeleton frame.",
    steelType: "Structural mild/carbon steel frame beneath a cast-aluminium decorative skin.",
    woodType: "None — fully metal construction (some finishes mimic wood grain via powder coating).",
    durability: "High resistance to forced entry due to the steel skeleton; cast facade is corrosion-resistant but should be inspected periodically at fixing points.",
    bestFor: "Statement entrances where security and ornamental design both matter."
  },
  {
    id: 4,
    name: "Smart and Stylish Design (Bulletproof Door)",
    price: 6300000,
    image: "images/hero-door1.jpg",
    inStock: false,
    dateAdded: "2026-03-01",
    salesRank: 3,
    onSale: true,
    width: 1.83,
    height: 2.59,
    thickness: 0.1,
    sizeNote: "",
    sizeCategory: "wide",
    description: "Ballistic-rated security door combining armor plating with a modern \"smart\" finish.",
    construction: "Layered high-tensile steel plates sandwiching a ballistic-resistant composite core (fiberglass/aramid-reinforced), reinforced steel frame.",
    steelType: "Armor-grade high-tensile steel plating.",
    woodType: "None structurally; decorative veneer skin may be applied over the steel face.",
    durability: "Highest impact/ballistic resistance in the range; heavier frame and hinges required to support the added weight.",
    bestFor: "High-security residences, executive offices, properties in high-risk areas."
  },
  {
    id: 5,
    name: "Armored Security Door",
    price: 7800000,
    image: "images/hero-door3.jpg",
    inStock: true,
    dateAdded: "2025-12-05",
    salesRank: 1,
    onSale: false,
    width: 1.83,
    height: 2.59,
    thickness: null,
    sizeNote: "",
    sizeCategory: "wide",
    description: "Heavy-duty armored steel door built primarily for forced-entry resistance.",
    construction: "Double-layer steel skin over a rigid steel frame, reinforced hinge pins, anti-drill and anti-pick multi-point locking.",
    steelType: "Heavy-gauge carbon/mild steel (typically 1.5–2mm sheet), powder-coated or galvanized.",
    woodType: "None.",
    durability: "Excellent forced-entry resistance; steel construction is largely maintenance-free aside from periodic hinge/lock servicing.",
    bestFor: "Perimeter/entrance doors on properties prioritizing maximum physical security."
  },
  {
    id: 6,
    name: "Executive Security Door",
    price: 7800000,
    image: "images/hero-door5.jpg",
    inStock: true,
    dateAdded: "2026-04-18",
    salesRank: 5,
    onSale: true,
    width: 1.83,
    height: 2.59,
    thickness: null,
    sizeNote: "",
    sizeCategory: "wide",
    description: "Armored security core finished for an executive/office aesthetic.",
    construction: "Steel security core (similar to the Armored Security Door) faced with a wood-look veneer or leather-effect laminate for a boardroom-appropriate finish.",
    steelType: "Structural mild/carbon steel core and frame.",
    woodType: "Decorative hardwood-look veneer (e.g., oak or mahogany laminate) over the steel substrate — not solid timber.",
    durability: "Security performance close to the standard armored door, with a finish more resistant to the wear patterns of high-traffic office use.",
    bestFor: "Executive offices, boardrooms, upscale commercial entrances."
  },
  {
    id: 7,
    name: "Executive Steel Door",
    price: 170000,
    image: "images/door19.jpg",
    inStock: true,
    dateAdded: "2025-10-12",
    salesRank: 8,
    onSale: false,
    width: 1.2,
    height: 2.4,
    thickness: null,
    sizeNote: "",
    sizeCategory: "compact",
    description: "Straightforward mild-steel security door — the \"workhorse\" option in the range.",
    construction: "Single or double-skin steel sheet over a welded steel frame, standard multi-point lock.",
    steelType: "Cold-rolled mild steel, powder-coated finish.",
    woodType: "None.",
    durability: "Solid, low-maintenance option; less ornamental than the cast or armored lines but reliable for everyday security use.",
    bestFor: "Standard residential/commercial entrances where budget matters more than ornamentation."
  },
  {
    id: 8,
    name: "Flush Door Wooden Grade A",
    price: 150000,
    image: "images/door14.jpg",
    inStock: false,
    dateAdded: "2026-05-22",
    salesRank: 7,
    onSale: false,
    width: null,
    height: null,
    thickness: 0.07,
    sizeNote: "Frame width 0.23m — leaf size on request",
    sizeCategory: "custom",
    description: "Interior-grade solid/semi-solid timber flush door, the only fully wooden option in the range.",
    construction: "Engineered timber core (block-board or particleboard) faced with plywood/veneer, timber door frame.",
    steelType: "None structurally — steel limited to hinges and lockset hardware.",
    woodType: "Grade A hardwood veneer face (commonly Iroko, Mahogany, or Ash in the Nigerian market) over an engineered core.",
    durability: "Good for interior use; should be sealed/painted to resist warping in humid conditions, and isn't recommended for direct weather exposure unless treated.",
    bestFor: "Interior residential/office doors where a natural wood look is preferred over steel."
  }
];

/* =========================================================
   CATALOG RENDERING, FILTERING & SORTING
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const grid = document.getElementById("catalogGrid");
  const countLabel = document.getElementById("productCount");
  const availabilityFilter = document.getElementById("availabilityFilter");
  const priceFilter = document.getElementById("priceFilter");
  const sizeFilter = document.getElementById("sizeFilter");
  const sortSelect = document.getElementById("sortSelect");

  if (!grid) return;

  function formatPrice(num) {
    return "₦" + num.toLocaleString("en-NG");
  }

  function formatSize(p) {
    if (p.width && p.height) {
      let text = p.width.toFixed(2) + "m × " + p.height.toFixed(2) + "m";
      if (p.thickness) {
        text += " (" + Math.round(p.thickness * 1000) + "mm thick)";
      }
      return text;
    }
    if (p.sizeNote) return p.sizeNote;
    return "Size on request";
  }

  function waLink(name) {
    const msg = encodeURIComponent(
      "Hello Kezmalati, I'm interested in the " + name
    );
    return "https://wa.me/2348070807540?text=" + msg;
  }

  // Builds the collapsible specifications block for a product,
  // skipping any fields that weren't filled in.
  function specsMarkup(p) {
    const rows = [
      ["Construction", p.construction],
      ["Steel/Iron Type", p.steelType],
      ["Wood Type", p.woodType],
      ["Durability", p.durability],
      ["Best For", p.bestFor]
    ].filter(([label, value]) => value);

    if (rows.length === 0) return "";

    const rowsHtml = rows
      .map(([label, value]) => `
        <div class="spec-row">
          <span class="spec-label">${label}</span>
          <span class="spec-value">${value}</span>
        </div>`)
      .join("");

    return `
      <details class="product-specs">
        <summary>View Specifications</summary>
        ${p.description ? `<p class="spec-description">${p.description}</p>` : ""}
        ${rowsHtml}
      </details>`;
  }

  function getFilteredSorted() {
    let list = products.slice();

    // Availability filter
    const availVal = availabilityFilter.value;
    if (availVal === "in-stock") {
      list = list.filter(p => p.inStock);
    } else if (availVal === "out-of-stock") {
      list = list.filter(p => !p.inStock);
    }

    // Price filter
    const priceVal = priceFilter.value;
    if (priceVal === "under-200") {
      list = list.filter(p => p.price < 200000);
    } else if (priceVal === "200-1000") {
      list = list.filter(p => p.price >= 200000 && p.price <= 1000000);
    } else if (priceVal === "1000-5000") {
      list = list.filter(p => p.price > 1000000 && p.price <= 5000000);
    } else if (priceVal === "over-5000") {
      list = list.filter(p => p.price > 5000000);
    }

    // Size filter (metres)
    const sizeVal = sizeFilter ? sizeFilter.value : "all";
    if (sizeVal === "compact") {
      list = list.filter(p => p.sizeCategory === "compact");
    } else if (sizeVal === "wide") {
      list = list.filter(p => p.sizeCategory === "wide");
    } else if (sizeVal === "custom") {
      list = list.filter(p => p.sizeCategory === "custom");
    }

    // Sorting
    const sortVal = sortSelect.value;
    switch (sortVal) {
      case "best-selling":
        list.sort((a, b) => a.salesRank - b.salesRank);
        break;
      case "az":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low-high":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        list.sort((a, b) => b.price - a.price);
        break;
      case "date-old-new":
        list.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
        break;
      case "date-new-old":
        list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "featured":
      case "relevant":
      default:
        // Featured / Most relevant: keep original catalog order
        break;
    }

    return list;
  }

  function render() {
    const list = getFilteredSorted();

    grid.innerHTML = "";

    if (list.length === 0) {
      grid.innerHTML = '<p class="catalog-empty">No products match your filters. Try adjusting them.</p>';
    } else {
      list.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card reveal active";

        card.innerHTML = `
          <div class="product-image-wrap">
            ${p.onSale ? '<span class="sale-badge">Sale</span>' : ""}
            ${!p.inStock ? '<span class="stock-badge">Out of Stock</span>' : ""}
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          </div>
          <h3>${p.name}</h3>
          <p class="product-price">${formatPrice(p.price)}</p>
          <p class="product-size">${formatSize(p)}</p>
          ${specsMarkup(p)}
          <a href="${waLink(p.name)}" target="_blank" class="btn-primary">
            ${p.inStock ? "Request Quote" : "Notify Me"}
          </a>
        `;

        grid.appendChild(card);
      });
    }

    countLabel.textContent = list.length + (list.length === 1 ? " product" : " products");
  }

  availabilityFilter.addEventListener("change", render);
  priceFilter.addEventListener("change", render);
  if (sizeFilter) sizeFilter.addEventListener("change", render);
  sortSelect.addEventListener("change", render);

  render();

});
