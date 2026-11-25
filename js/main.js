(function () {
  "use strict";

  // Gallery categories — one per folder in "Catagory Photos" (slug, label shown on the filter chip)
  var cats = [
    ["vases", "Vases"],
    ["kettles", "Kettles"],
    ["lanterns", "Hurricane Lanterns"],
    ["jewellery-box", "Jewellery Boxes"],
    ["pandani", "Pandani"],
    ["clay-pots", "Clay Pots"],
    ["planters", "Planters"],
    ["bamboo", "Bamboo Painting"],
    ["wall-paintings", "Wall Paintings"],
    ["others", "Others"]
  ];
  var label = {};
  cats.forEach(function (c) { label[c[0]] = c[1]; });

  // Gallery photos: [path without extension, thumb width, thumb height, category]
  // Each photo has assets/gallery/<path>-thumb.webp (grid) and <path>.webp (lightbox).
  var items = [
    ["vases/vases-01", 480, 640, "vases"],
    ["vases/vases-02", 480, 640, "vases"],
    ["vases/vases-03", 480, 640, "vases"],
    ["vases/vases-05", 480, 640, "vases"],
    ["vases/vases-06", 480, 640, "vases"],
    ["vases/vases-07", 480, 640, "vases"],
    ["vases/vases-08", 480, 640, "vases"],
    ["vases/vases-09", 480, 640, "vases"],
    ["vases/vases-10", 480, 640, "vases"],
    ["vases/vases-11", 480, 640, "vases"],
    ["kettles/kettles-01", 480, 640, "kettles"],
    ["kettles/kettles-02", 480, 640, "kettles"],
    ["kettles/kettles-03", 480, 640, "kettles"],
    ["kettles/kettles-04", 480, 640, "kettles"],
    ["kettles/kettles-05", 480, 640, "kettles"],
    ["kettles/kettles-06", 480, 640, "kettles"],
    ["lanterns/lanterns-01", 480, 640, "lanterns"],
    ["lanterns/lanterns-02", 480, 640, "lanterns"],
    ["lanterns/lanterns-03", 480, 640, "lanterns"],
    ["lanterns/lanterns-04", 480, 640, "lanterns"],
    ["lanterns/lanterns-05", 480, 640, "lanterns"],
    ["lanterns/lanterns-06", 480, 640, "lanterns"],
    ["jewellery-box/jewellery-box-01", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-02", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-03", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-04", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-05", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-06", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-07", 480, 640, "jewellery-box"],
    ["jewellery-box/jewellery-box-08", 480, 640, "jewellery-box"],
    ["pandani/pandani-01", 480, 640, "pandani"],
    ["pandani/pandani-02", 480, 640, "pandani"],
    ["clay-pots/clay-pots-01", 480, 640, "clay-pots"],
    ["clay-pots/clay-pots-02", 480, 640, "clay-pots"],
    ["clay-pots/clay-pots-03", 480, 640, "clay-pots"],
    ["clay-pots/clay-pots-04", 480, 640, "clay-pots"],
    ["clay-pots/clay-pots-05", 640, 480, "clay-pots"],
    ["clay-pots/clay-pots-06", 640, 480, "clay-pots"],
    ["planters/planters-01", 480, 640, "planters"],
    ["planters/planters-02", 480, 640, "planters"],
    ["planters/planters-03", 480, 640, "planters"],
    ["planters/planters-04", 480, 640, "planters"],
    ["planters/planters-05", 480, 640, "planters"],
    ["planters/planters-06", 480, 640, "planters"],
    ["bamboo/bamboo-01", 480, 640, "bamboo"],
    ["bamboo/bamboo-02", 480, 640, "bamboo"],
    ["bamboo/bamboo-03", 480, 640, "bamboo"],
    ["bamboo/bamboo-04", 480, 640, "bamboo"],
    ["bamboo/bamboo-05", 480, 640, "bamboo"],
    ["bamboo/bamboo-06", 480, 640, "bamboo"],
    ["bamboo/bamboo-07", 480, 640, "bamboo"],
    ["wall-paintings/wall-paintings-01", 480, 640, "wall-paintings"],
    ["wall-paintings/wall-paintings-02", 480, 640, "wall-paintings"],
    ["wall-paintings/wall-paintings-03", 480, 640, "wall-paintings"],
    ["wall-paintings/wall-paintings-04", 480, 640, "wall-paintings"],
    ["others/others-01", 480, 640, "others"],
    ["others/others-02", 480, 640, "others"],
    ["others/others-03", 480, 640, "others"],
    ["others/others-04", 480, 640, "others"],
    ["others/others-05", 480, 640, "others"],
    ["others/others-06", 480, 640, "others"],
    ["others/others-07", 480, 640, "others"],
    ["others/others-08", 480, 640, "others"],
    ["others/others-09", 480, 640, "others"],
    ["others/others-10", 480, 640, "others"],
    ["others/others-11", 480, 640, "others"],
    ["others/others-12", 480, 640, "others"],
    ["others/others-13", 480, 640, "others"],
    ["others/others-14", 480, 640, "others"],
    ["others/others-15", 480, 640, "others"],
    ["others/others-16", 480, 640, "others"],
    ["others/others-17", 480, 640, "others"],
    ["others/others-18", 480, 640, "others"],
    ["others/others-19", 480, 640, "others"],
    ["others/others-20", 480, 640, "others"],
    ["others/others-21", 480, 640, "others"],
    ["others/others-22", 480, 640, "others"],
    ["others/others-23", 640, 480, "others"],
    ["others/others-24", 480, 640, "others"],
    ["others/others-25", 480, 640, "others"],
    ["others/others-26", 480, 640, "others"],
    ["others/others-27", 480, 640, "others"],
    ["others/others-28", 480, 640, "others"],
    ["others/others-29", 480, 640, "others"],
    ["others/others-30", 480, 640, "others"],
    ["others/others-31", 480, 640, "others"],
    ["others/others-32", 480, 640, "others"],
    ["others/others-33", 480, 640, "others"],
    ["others/others-34", 480, 640, "others"],
    ["others/others-35", 480, 640, "others"],
    ["others/others-36", 480, 640, "others"],
    ["others/others-37", 480, 640, "others"],
    ["others/others-38", 480, 640, "others"],
    ["others/others-39", 480, 640, "others"],
    ["others/others-40", 640, 480, "others"],
    ["others/others-41", 640, 480, "others"],
    ["others/others-42", 640, 480, "others"],
    ["others/others-43", 480, 640, "others"]
  ];

  // Filter chips (after the "All" chip already in the HTML)
  var filters = document.querySelector(".filters");
  var countOf = { all: items.length };
  items.forEach(function (it) { countOf[it[3]] = (countOf[it[3]] || 0) + 1; });
  function countBadge(n) { return ' <span class="chip-count" aria-hidden="true">' + n + "</span>"; }
  var allChip = filters.querySelector('[data-filter="all"]');
  allChip.innerHTML = "All" + countBadge(items.length);
  cats.forEach(function (c) {
    var b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.dataset.filter = c[0];
    b.setAttribute("aria-pressed", "false");
    b.setAttribute("aria-label", c[1] + ", " + countOf[c[0]] + " photos");
    b.innerHTML = c[1] + countBadge(countOf[c[0]]);
    filters.appendChild(b);
  });
  allChip.setAttribute("aria-label", "All, " + items.length + " photos");

  // Grid order: take one photo from each category in turn, so "All" starts with a mix
  var byCat = {};
  items.forEach(function (it, i) { (byCat[it[3]] = byCat[it[3]] || []).push(i); });
  var order = [];
  for (var round = 0; order.length < items.length; round++) {
    cats.forEach(function (c) { var list = byCat[c[0]] || []; if (round < list.length) order.push(list[round]); });
  }

  var gallery = document.getElementById("gallery");
  var frag = document.createDocumentFragment();
  order.forEach(function (i) {
    var it = items[i];
    var name = label[it[3]];
    var b = document.createElement("button");
    b.className = "tile reveal";
    b.type = "button";
    b.dataset.cat = it[3];
    b.dataset.index = i;
    b.setAttribute("aria-label", "View " + name);
    b.innerHTML =
      '<img src="assets/gallery/' + it[0] + '-thumb.webp" width="' + it[1] + '" height="' + it[2] +
      '" alt="' + name + ' by Artgenix" loading="lazy" decoding="async"><span>' + name + "</span>";
    frag.appendChild(b);
  });
  gallery.appendChild(frag);
  var tiles = Array.prototype.slice.call(gallery.children);

  // Filters + "Show more": show 2 rows, each click reveals 2 more rows
  var ROWS_STEP = 2;
  var rows = ROWS_STEP;
  var filter = "all";
  var moreWrap = document.getElementById("showMoreWrap");
  var moreBtn = document.getElementById("showMore");
  var resultCount = document.getElementById("resultCount");
  var filterBar = document.getElementById("filterBar");
  function columns() {
    return getComputedStyle(gallery).gridTemplateColumns.split(" ").filter(Boolean).length || 1;
  }
  function render() {
    var limit = rows * columns();
    var n = 0;
    tiles.forEach(function (t) {
      var match = filter === "all" || t.dataset.cat === filter;
      t.hidden = !match;
      t.classList.toggle("is-collapsed", match && n >= limit);
      if (match) n++;
    });
    var left = n - limit;
    var shown = Math.min(n, limit);
    resultCount.textContent = "Showing " + shown + " of " + n + (filter === "all" ? " creations" : " · " + label[filter]);
    moreWrap.hidden = left <= 0;
    moreBtn.textContent = "Show more (" + Math.max(left, 0) + ")";
  }
  moreBtn.addEventListener("click", function () {
    var firstNew = tiles.filter(function (t) { return t.classList.contains("is-collapsed"); })[0];
    rows += ROWS_STEP;
    render();
    if (firstNew) firstNew.focus({ preventScroll: true });
  });
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filter = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", on);
      });
      // where the gallery starts on the page (filtering doesn't move it)
      var wasDeep = gallery.getBoundingClientRect().top < filterBar.getBoundingClientRect().top;
      var galleryDocTop = gallery.getBoundingClientRect().top + window.scrollY;
      rows = ROWS_STEP;
      render();
      // short fade-in so the change is visible
      gallery.classList.remove("is-switching"); void gallery.offsetWidth; gallery.classList.add("is-switching");
      // keep the chosen chip in view in the swipe row (phone)
      filters.scrollTo({ left: chip.offsetLeft - filters.offsetLeft - 16, behavior: "smooth" });
      // if you were scrolled deep into the gallery, jump back to its top
      if (wasDeep) {
        window.scrollTo({ top: galleryDocTop - headerH() - filterBar.offsetHeight - resultCount.offsetHeight - 24, behavior: "smooth" });
      }
    });
  });

  // Sticky filter bar sits right under the sticky header; add a shadow once it is stuck
  function headerH() { return document.querySelector(".topbar").offsetHeight; }
  function setHeaderVar() { document.documentElement.style.setProperty("--header-h", headerH() + "px"); }
  setHeaderVar();
  window.addEventListener("resize", setHeaderVar);
  window.addEventListener("scroll", function () {
    filterBar.classList.toggle("is-stuck", filterBar.getBoundingClientRect().top <= headerH() + 1 &&
      gallery.getBoundingClientRect().bottom > headerH() + filterBar.offsetHeight);
  }, { passive: true });
  // Keep "2 rows" correct when the number of columns changes (rotate phone, resize window)
  var lastCols = 0;
  function onResize() {
    var c = columns();
    if (c !== lastCols) { lastCols = c; render(); }
  }
  function onResizeSoon() { requestAnimationFrame(onResize); }
  if ("ResizeObserver" in window) new ResizeObserver(onResizeSoon).observe(gallery);
  window.addEventListener("resize", onResizeSoon);
  onResize();

  // Lightbox
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var current = 0, lastFocus = null;
  function visible() { return tiles.filter(function (t) { return !t.hidden; }); }
  function show(i) {
    var v = visible();
    current = (i + v.length) % v.length;
    var it = items[+v[current].dataset.index];
    lbImg.src = "assets/gallery/" + it[0] + ".webp";
    lbImg.alt = label[it[3]] + " by Artgenix";
    lbCap.textContent = label[it[3]] + "  ·  " + (current + 1) + " / " + v.length;
  }
  function open(tile) {
    lastFocus = tile;
    show(visible().indexOf(tile));
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  }
  function close() {
    lb.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  gallery.addEventListener("click", function (e) {
    var t = e.target.closest(".tile");
    if (t) open(t);
  });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(current - 1);
    else if (e.key === "ArrowRight") show(current + 1);
  });
  // Swipe on touch devices
  var x0 = null;
  lb.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 45) show(current + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // Reveal on scroll
  document.querySelectorAll(".panel-body, .panel-head, .contact-list").forEach(function (el) {
    el.classList.add("reveal");
  });
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Mobile menu (hamburger)
  var topbar = document.querySelector(".topbar");
  var menuBtn = document.getElementById("menuToggle");
  var sheet = document.getElementById("siteNav");
  var backdrop = document.getElementById("menuBackdrop");
  function setMenu(open) {
    topbar.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    sheet.style.transform = "";
  }
  backdrop.addEventListener("click", function () { setMenu(false); });
  document.getElementById("sheetClose").addEventListener("click", function () { setMenu(false); menuBtn.focus(); });
  // Swipe the sheet down to close it
  var y0 = null;
  sheet.addEventListener("touchstart", function (e) {
    y0 = sheet.scrollTop <= 0 ? e.touches[0].clientY : null;
  }, { passive: true });
  sheet.addEventListener("touchmove", function (e) {
    if (y0 === null) return;
    var dy = e.touches[0].clientY - y0;
    if (dy > 0) { sheet.style.transition = "none"; sheet.style.transform = "translateY(" + dy + "px)"; }
  }, { passive: true });
  sheet.addEventListener("touchend", function (e) {
    if (y0 === null) return;
    var dy = e.changedTouches[0].clientY - y0;
    sheet.style.transition = "";
    y0 = null;
    if (dy > 80) setMenu(false); else sheet.style.transform = "";
  });
  menuBtn.addEventListener("click", function () { setMenu(!topbar.classList.contains("is-open")); });
  document.getElementById("siteNav").addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("click", function (e) {
    if (topbar.classList.contains("is-open") && !topbar.contains(e.target)) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && topbar.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); }
  });
  window.addEventListener("resize", function () { if (window.innerWidth >= 900) setMenu(false); });

  // Highlight current section in nav
  var links = document.querySelectorAll(".nav a:not(.nav-cta)");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute("href") === "#" + en.target.id;
          a.classList.toggle("is-current", on);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });
  }

  // Share
  var shareBtn = document.getElementById("shareBtn");
  shareBtn.addEventListener("click", function () {
    var data = { title: document.title, text: "Artgenix — reviving Bangladesh’s folk art", url: location.href };
    if (navigator.share) {
      navigator.share(data).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(location.href).then(function () {
        shareBtn.textContent = "Link copied!";
        setTimeout(function () { shareBtn.textContent = "Share this brochure"; }, 2000);
      });
    }
  });
})();
