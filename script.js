(function () {
  var gallery = document.getElementById("productGallery");
  if (!gallery) return;

  var totalImages = 85;
  var batchSize = 20;
  var loadedCount = 0;
  var controls = document.createElement("div");
  var showMoreButton = document.createElement("button");

  controls.className = "gallery-controls";
  showMoreButton.className = "button primary";
  showMoreButton.type = "button";
  showMoreButton.textContent = "Show more";
  controls.appendChild(showMoreButton);
  gallery.insertAdjacentElement("afterend", controls);

  function addImage(index) {
    var item = document.createElement("figure");
    var image = document.createElement("img");
    var number = index + 1;
    item.className = "product-card";
    image.src = "assets/products-webp/" + number + ".webp";
    image.alt = "Shri Ram Hawan Pujan Samagri product image " + number;
    image.loading = index < batchSize ? "eager" : "lazy";
    image.width = 800;
    image.height = 800;
    item.appendChild(image);
    gallery.appendChild(item);
  }

  function loadNextBatch() {
    var nextCount = Math.min(loadedCount + batchSize, totalImages);

    for (var index = loadedCount; index < nextCount; index += 1) {
      addImage(index);
    }

    loadedCount = nextCount;

    if (loadedCount >= totalImages) {
      controls.remove();
      return;
    }

    showMoreButton.textContent = "Show more (" + (totalImages - loadedCount) + " left)";
  }

  showMoreButton.addEventListener("click", loadNextBatch);
  loadNextBatch();
})();
