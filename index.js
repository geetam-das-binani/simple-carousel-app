const imgsArr = [
  "https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1680125272616-3ae76a9f4f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1703850914801-8c4ef263e970?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1704123298032-22f38d896a7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1703689492853-5df5f3ff4b61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const image__holder__div = document.querySelector(".image__holder");
let page = 1;
let interval;

const generateImages = () => {
  image__holder__div.innerHTML = imgsArr.slice(page * 1 - 1, page).map(
    (elem) => ` <img src=${elem} alt="abstract  pics" />
    
    <div class="actions">
    <button 
    style="display:${page === 1 ? "none" : "block"};" 
    
    onclick="handlePrev()">Prev</button>

    <button style="display:${
      page === imgsArr.length ? "none" : "block"
    };" onclick="handleNext()" >Next</button>
    </div>
</div>
    `
  );
};
const updateSlider = () => {
  generateImages();
};

const handleNext = () => {
  stopInterval();
  page = page === imgsArr.length ? 1 : page + 1;
  updateSlider();
  startInterval();
};

const handlePrev = () => {
  stopInterval();
  page = page === 1 ? imgsArr.length : page - 1;
  updateSlider();
  startInterval();
};

const startInterval = () => {
  interval = window.setInterval(() => handleNext(), 3000);
};

const stopInterval = () => {
  clearInterval(interval);
};

generateImages();
startInterval();
