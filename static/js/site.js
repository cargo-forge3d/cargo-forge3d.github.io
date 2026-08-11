const galleryCases = {
  "crate": {
    title: document.documentElement.lang === "zh-CN" ? "木箱件杂货" : "Wooden cargo crate",
    input: "./resources/gallery/crate/input.png",
    white: "./resources/gallery/crate/white.glb",
    textured: "./resources/gallery/crate/textured.glb",
    meta: ["Shape 25.3s", "Texture 61.7s", "617k faces"]
  },
  "steel-stack": {
    title: document.documentElement.lang === "zh-CN" ? "钢结构堆叠件" : "Stacked steel structure",
    input: "./resources/gallery/steel-stack/input.png",
    white: "./resources/gallery/steel-stack/white.glb",
    textured: "./resources/gallery/steel-stack/textured.glb",
    meta: ["Shape 20.8s", "Texture 73.5s", "mesh asset"]
  },
  "pipe-bundle": {
    title: document.documentElement.lang === "zh-CN" ? "管束件杂货" : "Pipe bundle",
    input: "./resources/gallery/pipe-bundle/input.png",
    white: "./resources/gallery/pipe-bundle/white.glb",
    textured: "./resources/gallery/pipe-bundle/textured.glb",
    meta: ["Shape 24.8s", "Texture 93.6s", "bundle cargo"]
  },
  "frame-rack": {
    title: document.documentElement.lang === "zh-CN" ? "框架式钢结构" : "Frame rack cargo",
    input: "./resources/gallery/frame-rack/input.png",
    white: "./resources/gallery/frame-rack/white.glb",
    textured: "./resources/gallery/frame-rack/textured.glb",
    meta: ["Shape 19.9s", "Texture 58.9s", "rack geometry"]
  },
  "tarp-cargo": {
    title: document.documentElement.lang === "zh-CN" ? "篷布覆盖货物" : "Covered cargo",
    input: "./resources/gallery/tarp-cargo/input.png",
    white: "./resources/gallery/tarp-cargo/white.glb",
    textured: "./resources/gallery/tarp-cargo/textured.glb",
    meta: ["Shape 23.7s", "Texture 89.4s", "covered object"]
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
    setModelOrbit(galleryModel);
  }
  if (heroModel) {
    heroModel.setAttribute("src", item.textured);
    setModelOrbit(heroModel);
  }
  if (title) title.textContent = item.title;
  if (heroCaseName) heroCaseName.textContent = item.title;
  if (heroInput) heroInput.setAttribute("src", item.input);
  if (meta) {
    meta.innerHTML = item.meta.map(value => `<span>${value}</span>`).join("");
  }

  document.querySelectorAll(".thumb").forEach(button => {
    button.classList.toggle("active", button.dataset.case === selectedCase);
  });
  document.querySelectorAll(".segment").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === selectedMode);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".thumb").forEach(button => {
    button.addEventListener("click", () => {
      selectedCase = button.dataset.case;
      updateGallery();
    });
  });

  document.querySelectorAll(".segment").forEach(button => {
    button.addEventListener("click", () => {
      selectedMode = button.dataset.mode;
      updateGallery();
    });
  });

  document.querySelectorAll("model-viewer").forEach(viewer => {
    viewer.addEventListener("load", () => setModelOrbit(viewer));
  });
});
