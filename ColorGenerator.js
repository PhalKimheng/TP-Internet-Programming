class ColorGenerator {
    constructor() {
      this.colors = [];
    }
  
    generateColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    addColor(color) {
      this.colors.push(color);
    }
  
    saveToLocalStorage() {
      localStorage.setItem("colors", JSON.stringify(this.colors));
    }
  
    getFromLocalStorage() {
      this.colors = JSON.parse(localStorage.getItem("colors")) || [];
    }
  }
  
  const colorGenerator = new ColorGenerator();
  colorGenerator.getFromLocalStorage();
  
  const generateButton = document.getElementById("generateBtn");
  generateButton.addEventListener("click", function() {
    const color = colorGenerator.generateColor();
    colorGenerator.addColor(color);
    colorGenerator.saveToLocalStorage();
    // Add the generated color to the UI
  });
  