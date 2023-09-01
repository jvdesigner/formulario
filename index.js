document.addEventListener("DOMContentLoaded", function () {
    const imagemInput = document.getElementById("txt-imagem-produto");
    const imagemInputlab = document.getElementById("lab-imagem-produto");
    const imagemPreview = document.getElementById("imagem-preview");
  
    imagemInput.addEventListener("change", function () {
      const file = imagemInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imagemPreview.src = e.target.result;
          imagemInputlab.style.display='none';
          imagemPreview.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
      } else {
        imagemPreview.src = "";
        imagemPreview.classList.add("hidden");
        imagemInputlab.style.display='flex';
      }
    });
  });