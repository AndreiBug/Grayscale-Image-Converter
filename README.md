# Grayscale Image Converter

Un proiect interactiv care permite încărcarea, manipularea și conversia imaginilor utilizând un canvas HTML. Proiectul include funcționalități precum încărcarea imaginilor de la un API, conversia acestora în tonuri de gri, oglindirea lor și restaurarea la starea originală.

---

## Caracteristici
- **Încărcare asincronă a imaginilor**: Poți încărca imagini random cu câini folosind API-ul [Dog CEO](https://dog.ceo/dog-api/).
- **Conversie la tonuri de gri**: Conversie pe secțiuni pentru a îmbunătăți performanța și a simula procesarea paralelă.
- **Oglindirea imaginilor**: Oglindirea orizontală a imaginii utilizând datele pixelilor.
- **Revenire la starea inițială**: Restaurarea imaginii originale de pe canvas.
- **Profilare și măsurători**: Utilizarea funcțiilor `console.time` și `console.timeEnd` pentru analiza performanței.

---

## Structura Proiectului

```plaintext
|-- index.html            # Pagina principală
|-- description.html      # Descrierea funcționalităților
|-- bibliography.html     # Surse utilizate
|-- style.css             # Stilizarea aplicației
|-- script.js             # Funcționalitățile aplicației
|-- README.md             # Documentația proiectului (acest fișier)
```

---

## Tehnologii Utilizate
- **HTML5** pentru structura aplicației
- **CSS3** pentru stilizare
- **JavaScript (ES6)** pentru funcționalitate
- **Canvas API** pentru manipularea imaginilor

---

## Cum să Rulezi Proiectul
1. Clonează repository-ul:
   ```bash
   git clone https://github.com/username/grayscale-image-converter.git
   ```
2. Navighează în folderul proiectului:
   ```bash
   cd grayscale-image-converter
   ```
3. Deschide fișierul `index.html` într-un browser.

---

## Funcționalități Cheie

### 1. Încărcare Imagine
Clic pe butonul `Load Image` pentru a încărca o imagine random cu un câine. Imaginea este desenată pe un canvas HTML.

### 2. Conversie la Tonuri de Gri
Clic pe butonul `Convert to Gray scale` pentru a transforma imaginea într-o versiune alb-negru. Procesarea este împărțită în 4 secțiuni pentru o execuție mai rapidă.

### 3. Oglindire Imagine
Clic pe butonul `Mirror Image` pentru a crea un efect de oglindire orizontală.

### 4. Restaurare Imagine
Clic pe butonul `Reset` pentru a restaura imaginea la starea originală.

---

## Bibliografie
- [W3Schools HTML](https://www.w3schools.com/html/)
- [W3Schools CSS](https://www.w3schools.com/css/)
- [W3Schools JavaScript](https://www.w3schools.com/js/default.asp)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
