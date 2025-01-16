# Grayscale Image Converter

An interactive project that allows loading, manipulating, and converting images using an HTML canvas. The project includes features like fetching images from an API, converting them to grayscale, mirroring them, and restoring them to their original state.

---

## Features
- **Asynchronous Image Loading**: Fetch random dog images using the [Dog CEO API](https://dog.ceo/dog-api/).
- **Grayscale Conversion**: Converts images to grayscale in sections to improve performance and simulate parallel processing.
- **Image Mirroring**: Horizontally mirrors images using pixel data manipulation.
- **Restore Original Image**: Restores the image on the canvas to its initial state.
- **Profiling and Measurements**: Uses `console.time` and `console.timeEnd` to analyze performance.

---

## Project Structure

```plaintext
|-- index.html            # Main page
|-- description.html      # Feature descriptions
|-- bibliography.html     # References used
|-- style.css             # Application styling
|-- script.js             # Application functionality
|-- README.md             # Project documentation (this file)
```

---

## Technologies Used
- **HTML5** for application structure
- **CSS3** for styling
- **JavaScript (ES6)** for functionality
- **Canvas API** for image manipulation

---

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/username/grayscale-image-converter.git
   ```
2. Navigate to the project folder:
   ```bash
   cd grayscale-image-converter
   ```
3. Open the `index.html` file in a browser.

---

## Key Features

### 1. Load Image
Click the `Load Image` button to fetch a random dog image. The image is drawn onto an HTML canvas.

### 2. Convert to Grayscale
Click the `Convert to Grayscale` button to transform the image to a black-and-white version. Processing is divided into 4 sections for faster execution.

### 3. Mirror Image
Click the `Mirror Image` button to create a horizontal mirroring effect.

### 4. Restore Image
Click the `Reset` button to restore the image to its original state.

---

## References
- [W3Schools HTML](https://www.w3schools.com/html/)
- [W3Schools CSS](https://www.w3schools.com/css/)
- [W3Schools JavaScript](https://www.w3schools.com/js/default.asp)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
