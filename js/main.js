(function () {
  "use strict";

  // Gallery data — images extracted from the print brochure (page 2)
  var items = [
    ["g01", 648, 864, "decor", "Hand-painted lantern"],
    ["g02", 1080, 810, "decor", "Floral jug and tumbler set"],
    ["g03", 534, 467, "decor", "Painted tiffin carrier"],
    ["g04", 627, 470, "decor", "Tea kettle and cups"],
    ["g05", 498, 424, "decor", "Rickshaw-art trinket box"],
    ["g06", 475, 438, "decor", "Painted glass mugs"],
    ["g07", 563, 448, "jewellery", "Painted pendant set"],
    ["g08", 656, 492, "accessories", "Hand-painted sunglasses"],
    ["g09", 669, 502, "accessories", "Floral crown"],
    ["g10", 661, 496, "jewellery", "Painted bangles"],
    ["g11", 728, 718, "decor", "Bird kettle"],
    ["g12", 1036, 658, "accessories", "Rickshaw-art notebooks"],
    ["g13", 605, 464, "jewellery", "Green bead necklace set"],
    ["g14", 508, 381, "jewellery", "Clay-flower bangle"],
    ["g15", 503, 670, "jewellery", "Resin bangles"],
    ["g16", 516, 387, "jewellery", "Loom-beaded bracelets"],
    ["g17", 459, 612, "jewellery", "Bead-stitched peacock necklace"],
    ["g18", 1021, 766, "jewellery", "Fabric bangles and pendant"],
    ["g19", 452, 585, "jewellery", "Painted pendant and earrings"],
    ["g20", 960, 721, "jewellery", "Clay flower jewellery"],
    ["g21", 515, 687, "jewellery", "Sunflower pendant set"],
    ["g22", 428, 321, "accessories", "Painted sunglasses"]
  ];

  var gallery = document.getElementById("gallery");
  var frag = document.createDocumentFragment();
  items.forEach(function (it, i) {
    var b = document.createElement("button");
    b.className = "tile reveal";
    b.type = "button";
    b.dataset.cat = it[3];
    b.dataset.index = i;
    b.setAttribute("aria-label", "View " + it[4]);
    b.innerHTML =
      '<img src="assets/gallery/' + it[0] + '.webp" width="' + it[1] + '" height="' + it[2] +
      '" alt="' + it[4] + '" loading="lazy" decoding="async"><span>' + it[4] + "</span>";
    frag.appendChild(b);
  });
  gallery.appendChild(frag);
  var tiles = Array.prototype.slice.call(gallery.children);

  // Filters
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var f = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", on);
      });
      tiles.forEach(function (t) { t.hidden = f !== "all" && t.dataset.cat !== f; });
    });
  });

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
    lbImg.alt = it[4];
    lbCap.textContent = it[4] + "  ·  " + (current + 1) + " / " + v.length;
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

  // Highlight current section in nav
  var links = document.querySelectorAll(".nav a");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute("href") === "#" + en.target.id;
          a.classList.toggle("is-current", on);
          if (on && a.scrollIntoView && window.innerWidth < 900) {
            a.parentNode.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
          }
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
