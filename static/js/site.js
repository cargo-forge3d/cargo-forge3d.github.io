const isZh = document.documentElement.lang === "zh-CN";

const galleryCases = {
  "crate": {
    title: isZh ? "木箱件杂货" : "Wooden cargo crate",
    input: "./resources/gallery/crate/input.png",
    white: "./resources/gallery/crate/white.glb",
    textured: "./resources/gallery/crate/textured.glb",
    meta: ["Shape 25.3 s", "Texture 61.7 s", "617k faces"]
  },
  "steel-stack": {
    title: isZh ? "钢结构堆叠件" : "Stacked steel structure",
    input: "./resources/gallery/steel-stack/input.png",
    white: "./resources/gallery/steel-stack/white.glb",
    textured: "./resources/gallery/steel-stack/textured.glb",
    meta: ["Shape 20.8 s", "Texture 73.5 s", isZh ? "钢构件资产" : "steel asset"]
  },
  "pipe-bundle": {
    title: isZh ? "管束件杂货" : "Pipe bundle cargo",
    input: "./resources/gallery/pipe-bundle/input.png",
    white: "./resources/gallery/pipe-bundle/white.glb",
    textured: "./resources/gallery/pipe-bundle/textured.glb",
    meta: ["Shape 24.8 s", "Texture 93.6 s", isZh ? "管束结构" : "bundle structure"]
  },
  "frame-rack": {
    title: isZh ? "框架钢构件" : "Frame rack cargo",
    input: "./resources/gallery/frame-rack/input.png",
    white: "./resources/gallery/frame-rack/white.glb",
    textured: "./resources/gallery/frame-rack/textured.glb",
    meta: ["Shape 19.9 s", "Texture 58.9 s", isZh ? "框架几何" : "rack geometry"]
  },
  "tarp-cargo": {
    title: isZh ? "篷布覆盖货物" : "Covered cargo",
    input: "./resources/gallery/tarp-cargo/input.png",
    white: "./resources/gallery/tarp-cargo/white.glb",
    textured: "./resources/gallery/tarp-cargo/textured.glb",
    meta: ["Shape 23.7 s", "Texture 89.4 s", isZh ? "覆盖物体" : "covered object"]
  }
};

let selectedCase = "crate";
let selectedMode = "textured";

function setModelOrbit(viewer) {
  if (!viewer) return;
  viewer.cameraOrbit = "145deg 70deg auto";
  if (typeof viewer.resetTurntableRotation === "function") {
    viewer.resetTurntableRotation(0);
  }
  if (typeof viewer.jumpCameraToGoal === "function") {
    viewer.jumpCameraToGoal();
  }
}

function fillMeta(container, values) {
  if (!container) return;
  container.replaceChildren();
  values.forEach((value) => {
    const item = document.createElement("span");
    item.textContent = value;
    container.appendChild(item);
  });
}

function updateGallery() {
  const item = galleryCases[selectedCase];
  if (!item) return;

  const galleryModel = document.getElementById("galleryModel");
  const heroModel = document.getElementById("heroModel");
  const title = document.getElementById("gallery-title");
  const heroCaseName = document.getElementById("hero-case-name");
  const heroInput = document.getElementById("hero-input");
  const meta = document.getElementById("caseMeta");

  if (galleryModel) {
    galleryModel.setAttribute("src", item[selectedMode]);
    galleryModel.setAttribute("alt", `${item.title} ${selectedMode}`);
    setModelOrbit(galleryModel);
  }
  if (heroModel) {
    heroModel.setAttribute("src", item.textured);
    heroModel.setAttribute("alt", item.title);
    setModelOrbit(heroModel);
  }
  if (title) title.textContent = item.title;
  if (heroCaseName) heroCaseName.textContent = item.title;
  if (heroInput) heroInput.setAttribute("src", item.input);
  fillMeta(meta, item.meta);

  document.querySelectorAll(".thumb").forEach((button) => {
    button.classList.toggle("active", button.dataset.case === selectedCase);
  });
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === selectedMode);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".thumb").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCase = button.dataset.case || selectedCase;
      updateGallery();
    });
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMode = button.dataset.mode || selectedMode;
      updateGallery();
    });
  });

  document.querySelectorAll("model-viewer").forEach((viewer) => {
    viewer.addEventListener("load", () => setModelOrbit(viewer));
  });

  updateGallery();
});
