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
    onSale: true
  },
  {
    id: 2,
    name: "Soundproof Door (Turkish) with TV Digital Smart Lock",
    price: 1200000,
    image: "images/door4.jpg",
    inStock: true,
    dateAdded: "2026-02-10",
    salesRank: 4,
    onSale: false
  },
  {
    id: 3,
    name: "Italian Cast Door – Pure Security Door",
    price: 870000,
    image: "images/door20.jpg",
    inStock: true,
    dateAdded: "2025-11-20",
    salesRank: 6,
    onSale: false
  },
  {
    id: 4,
    name: "Smart and Stylish Design (Bulletproof Door)",
    price: 6300000,
    image: "images/hero-door1.jpg",
    inStock: false,
    dateAdded: "2026-03-01",
    salesRank: 3,
    onSale: true
  },
  {
    id: 5,
    name: "Armored Security Door",
    price: 7800000,
    image: "images/hero-door3.jpg",
    inStock: true,
    dateAdded: "2025-12-05",
    salesRank: 1,
    onSale: false
  },
  {
    id: 6,
    name: "Executive Security Door",
    price: 7800000,
    image: "images/hero-door5.jpg",
    inStock: true,
    dateAdded: "2026-04-18",
    salesRank: 5,
    onSale: true
  },
  {
    id: 7,
    name: "Executive Steel Door",
    price: 170000,
    image: "images/door19.jpg",
    inStock: true,
    dateAdded: "2025-10-12",
    salesRank: 8,
    onSale: false
  },
  {
    id: 8,
    name: "Flush Door Wooden Grade A",
    price: 150000,
    image: "images/door14.jpg",
    inStock: false,
    dateAdded: "2026-05-22",
    salesRank: 7,
    onSale: false
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
  const sortSelect = document.getElementById("sortSelect");

  if (!grid) return;

  function formatPrice(num) {
    return "₦" + num.toLocaleString("en-NG");
  }

  function waLink(name) {
    const msg = encodeURIComponent(
      "Hello Kezmalati, I'm interested in the " + name
    );
    return "https://wa.me/2348070807540?text=" + msg;
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
    } else if (priceVal === "200-300") {
      list = list.filter(p => p.price >= 200000 && p.price <= 300000);
    } else if (priceVal === "300-400") {
      list = list.filter(p => p.price > 300000 && p.price <= 400000);
    } else if (priceVal === "over-400") {
      list = list.filter(p => p.price > 400000);
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
  sortSelect.addEventListener("change", render);

  render();

});
