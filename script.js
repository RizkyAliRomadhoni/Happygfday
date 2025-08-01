function checkName() {
  const allowedNames = ["farida", "rida", "ida"];
  const inputName = document.getElementById("nameInput").value.trim().toLowerCase();

  if (allowedNames.includes(inputName)) {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const music = document.getElementById("bgMusic");

    page1.classList.add("hidden");
    setTimeout(() => {
      page1.style.display = "none";
      page2.classList.remove("hidden");
      startHearts();
      music.volume = 0.4;
      music.play().catch(() => console.log("Autoplay diblokir."));
    }, 1000);
  } else {
    alert("Not for youu!!");
  }
}

function startHearts() {
  const container = document.getElementById('heartsContainer');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// Navigasi ke halaman 3
function goToPage3() {
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");
  page2.classList.add("hidden");
  setTimeout(() => {
    page2.style.display = "none";
    page3.classList.remove("hidden");
  }, 1000);
}

// Navigasi ke halaman 4 (Menu)
function goToPage4() {
  const page3 = document.getElementById("page3");
  const page4 = document.getElementById("page4");
  page3.classList.add("hidden");
  setTimeout(() => {
    page3.style.display = "none";
    page4.classList.remove("hidden");
  }, 1000);
}

// Navigasi ke halaman 5 (Our Memories)
function goToPage5() {
  const page4 = document.getElementById("page4");
  const page5 = document.getElementById("page5");
  page4.classList.add("hidden");
  setTimeout(() => {
    page4.style.display = "none";
    page5.style.display = "block";
    page5.classList.remove("hidden");
    animateGallery();
    startGallerySlideshow();
    startHeartsOnPage5();
  }, 1000);
}

// Navigasi ke halaman 6 (Cantiknya Akuuu)
function goToPage6() {
  const page5 = document.getElementById("page5");
  const page6 = document.getElementById("page6");
  page5.classList.add("hidden");
  setTimeout(() => {
    page5.style.display = "none";
    page6.style.display = "block";
    page6.classList.remove("hidden");
    animateGalleryPage6();
    startGallerySlideshowPage6();
    startHeartsOnPage6();
  }, 1000);
}

// Navigasi ke halaman 7 (Last Page)
function goToPage7() {
  const current = document.querySelector(".container:not(.hidden)");
  const page7 = document.getElementById("page7");
  current.classList.add("hidden");
  setTimeout(() => {
    current.style.display = "none";
    page7.style.display = "block";
    page7.classList.remove("hidden");
    animateFinalPage();
  }, 1000);
}

// Navigasi ke halaman 8 (Terima kasih)
function goToPage8() {
  const current = document.querySelector(".container:not(.hidden)");
  const page8 = document.getElementById("page8");
  current.classList.add("hidden");
  setTimeout(() => {
    current.style.display = "none";
    page8.style.display = "block";
    page8.classList.remove("hidden");
  }, 1000);
}

// Kembali ke Halaman Awal
function goToPage1() {
  const current = document.querySelector(".container:not(.hidden)");
  const page1 = document.getElementById("page1");
  current.classList.add("hidden");
  setTimeout(() => {
    current.style.display = "none";
    page1.style.display = "block";
    page1.classList.remove("hidden");
  }, 1000);
}

// Efek teks dan sparkle untuk Page 7
function animateFinalPage() {
  const text = document.getElementById("endText");
  text.classList.add("animate-text");
  let sparkles = document.createElement("div");
  sparkles.className = "sparkle-layer";
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement("div");
    dot.className = "sparkle";
    dot.style.left = Math.random() * 100 + "vw";
    dot.style.animationDuration = (2 + Math.random() * 3) + "s";
    sparkles.appendChild(dot);
  }
  document.getElementById("page7").appendChild(sparkles);
}

// Galeri Page 5
function animateGallery() {
  const images = document.querySelectorAll('#page5 .gallery img');
  images.forEach((img, i) => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, i * 300);
  });
}

function startGallerySlideshow() {
  const images = document.querySelectorAll('#page5 .gallery img');
  let index = 0;
  setInterval(() => {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0.2';
      img.style.transform = i === index ? 'scale(1.08)' : 'scale(1)';
    });
    index = (index + 1) % images.length;
  }, 4000);
}

function startHeartsOnPage5() {
  const container = document.getElementById('page5');
  const heartsLayer = document.createElement('div');
  heartsLayer.id = 'heartsContainerPage5';
  container.appendChild(heartsLayer);
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// Galeri Page 6
function animateGalleryPage6() {
  const images = document.querySelectorAll('#page6 .gallery img');
  images.forEach((img, i) => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, i * 300);
  });
}

function startGallerySlideshowPage6() {
  const images = document.querySelectorAll('#page6 .gallery img');
  let index = 0;
  setInterval(() => {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0.2';
      img.style.transform = i === index ? 'scale(1.08)' : 'scale(1)';
    });
    index = (index + 1) % images.length;
  }, 4000);
}

function startHeartsOnPage6() {
  const container = document.getElementById('page6');
  const heartsLayer = document.createElement('div');
  heartsLayer.id = 'heartsContainerPage6';
  container.appendChild(heartsLayer);
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
function goBackToPage4() {
  const current = document.querySelector(".container:not(.hidden)");
  const page4 = document.getElementById("page4");
  current.classList.add("hidden"); 
    setTimeout(() => {
    current.style.display = "none";
    page4.style.display = "block";
    page4.classList.remove("hidden");
  }, 1000);
}       
function goBackToPage5() {
  const current = document.querySelector(".container:not(.hidden)");
  const page5 = document.getElementById("page5");
  current.classList.add("hidden");  
    setTimeout(() => {
    current.style.display = "none";
    page5.style.display = "block";
    page5.classList.remove("hidden");
  }, 1000);
}       
function goBackToPage6() {
  const current = document.querySelector(".container:not(.hidden)");  
    const page6 = document.getElementById("page6");
    current.classList.add("hidden");
    setTimeout(() => {
    current.style.display = "none";
    page6.style.display = "block";
    page6.classList.remove("hidden");
  }, 1000);
}       

