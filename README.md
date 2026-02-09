# 🚜 Slider Maquinaria Pesada - Guía Completa

## 📋 Descripción del Proyecto

Slider interactivo responsive para catálogo de maquinaria pesada con:
- ✅ **3 máquinas** (Excavadoras, Retroexcavadoras, Cargadores Frontales)
- ✅ **Tabs dinámicos** (Specs, Tiempo, Servicios, Pago)
- ✅ **Calculadora de precios** en tiempo real
- ✅ **Vista Desktop y Mobile** con toggle
- ✅ **Drag & Click** para navegar
- ✅ **100% Responsive**

---

## 📁 Estructura del Proyecto

```
maquetacion-slider/
│
├── index.html          # Estructura HTML con 3 slides
├── styles.css          # Estilos responsive (934 líneas)
├── script.js           # Lógica slider + toggle mobile/desktop
│
└── README.md           # Este archivo
```

---

## 🔧 Paso a Paso: Cómo Hacerlo Desde Cero

### **Paso 1: Crear la estructura HTML base**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider Maquinaria - Con Tabs</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="demo-container">
        <!-- Contenido aquí -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

---

### **Paso 2: Agregar encabezado con toggle**

```html
<div class="demo-container">
    <h1 class="demo-title">Slider Maquinaria Pesada</h1>
    
    <div class="demo-grid">
        <div class="demo-section">
            <!-- Header con botón toggle -->
            <div class="version-header">
                <h2 id="viewTitle">🖥️ Versión Desktop</h2>
                <button class="view-toggle-btn" id="viewToggle" type="button">Ver Mobile</button>
            </div>
            
            <!-- Indicadores de color -->
            <div class="color-indicators">
                <div class="color-box orange">1</div>
                <div class="color-box green">2</div>
                <div class="color-box yellow">3</div>
            </div>
            
            <h1 class="portfolio-title">Nuestro <span class="portfolio-highlight">portafolio</span></h1>
            <p class="portfolio-subtitle">Seleccione la maquinaria que necesita...</p>
```

---

### **Paso 3: Crear el slider container**

```html
<div class="desktop-view">
    <div class="slider-container" id="desktop-slider">
        <div class="slider-wrapper" id="desktopSliderWrapper">
            <!-- Los 3 slides van aquí -->
        </div>
        
        <!-- Flechas de navegación -->
        <button class="slider-arrow prev" onclick="moveDesktopSlide(-1)">❮</button>
        <button class="slider-arrow next" onclick="moveDesktopSlide(1)">❯</button>
        
        <!-- Dots indicadores -->
        <div class="slider-dots" id="desktopDotsContainer"></div>
    </div>
</div>
```

---

### **Paso 4: Crear un slide (estructura)**

```html
<div class="slide">
    <!-- Columna de texto (izquierda en desktop) -->
    <div class="slide-text-column">
        <h1 class="slide-main-title">Excavadoras Hidráulicas</h1>
        <h4 class="slide-uptitle">Movimiento de tierra</h4>
        <p class="slide-description">
            Potencia y precisión para sus proyectos más exigentes...
        </p>
        
        <!-- TABS COMPONENT -->
        <div class="tabs-container">
            <div class="tabs-header">
                <button class="tab-button active" onclick="switchTab(event, 'specs1')">Specs</button>
                <button class="tab-button" onclick="switchTab(event, 'tiempo1')">Tiempo</button>
                <button class="tab-button" onclick="switchTab(event, 'servicios1')">Servicios</button>
                <button class="tab-button" onclick="switchTab(event, 'pago1')">Pago</button>
            </div>
            
            <!-- TAB CONTENT irá aquí -->
        </div>
    </div>
    
    <!-- Columna de imagen (derecha en desktop) -->
    <div class="slide-image-column">
        <img src="URL_IMAGEN" alt="Excavadora">
    </div>
</div>
```

---

### **Paso 5: Crear contenido de los tabs**

#### **Tab: Specs (Especificaciones)**

```html
<div class="tab-content active" id="specs1">
    <div class="specs-grid">
        <div class="spec-card">
            <h4>Capacidad</h4>
            <p>20 Ton</p>
            <small>Peso operativo</small>
        </div>
        <div class="spec-card">
            <h4>Alcance</h4>
            <p>9.8 m</p>
            <small>Alcance máximo</small>
        </div>
    </div>
    
    <!-- Acordeón para especificaciones avanzadas -->
    <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">
            <h4>Especificaciones del Motor</h4>
            <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-content">
            <ul class="spec-list">
                <li><span class="label">Modelo</span> <span class="value">Cummins QSB6.7</span></li>
            </ul>
        </div>
    </div>
</div>
```

#### **Tab: Tiempo (Disponibilidad)**

```html
<div class="tab-content" id="tiempo1">
    <div class="availability-grid">
        <div class="availability-card">
            <span class="duration-badge">Por Hora</span>
            <h4>$85</h4>
            <p>Mínimo 4 horas</p>
        </div>
        <div class="availability-card recommended">
            <span class="duration-badge" style="background: #10b981;">Top</span>
            <h4>$650</h4>
            <p>Por día (8 horas)</p>
        </div>
    </div>
</div>
```

#### **Tab: Servicios**

```html
<div class="tab-content" id="servicios1">
    <div class="service-category">
        <h3 class="category-title">Personal Incluido</h3>
        <div class="service-list">
            <div class="service-item">
                <div class="checkmark"></div>
                <span>Operador certificado</span>
            </div>
        </div>
    </div>
</div>
```

#### **Tab: Pago (Calculadora)**

```html
<div class="tab-content" id="pago1">
    <div class="pricing-calculator">
        <h3 class="calculator-title">Calculadora de Cotización</h3>
        <div class="calculator-controls">
            <div class="control-group">
                <label>Tipo de Alquiler</label>
                <select id="rentalType1" onchange="updatePrice('rentalType1', 'quantity1', 'totalPrice1')">
                    <option value="85">Por Hora - $85/hr</option>
                    <option value="650" selected>Por Día - $650</option>
                    <option value="12500">Mensual - $12,500</option>
                </select>
            </div>
            <div class="control-group">
                <label>Cantidad</label>
                <input type="number" id="quantity1" value="1" min="1" max="30" 
                       oninput="updatePrice('rentalType1', 'quantity1', 'totalPrice1')">
            </div>
        </div>
        <div class="price-display">
            <div class="price-label">Total Estimado</div>
            <div class="price-amount" id="totalPrice1">$650</div>
        </div>
    </div>
</div>
```

---

### **Paso 6: Repetir para los 3 slides**

Crear slides 2 y 3 con la **misma estructura**, pero:
- Títulos diferentes
- Especificaciones diferentes
- IDs únicos (specs2, tiempo2, servicios2, pago2, etc.)
- Imágenes diferentes

---

### **Paso 7: Crear el CSS base**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #19191a;
    width: 100%;
    min-height: 100vh;
    padding: 40px 0;
    overflow-x: hidden;
}

/* SLIDER PRINCIPAL */
.slider-container {
    background-color: #000000;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    position: relative;
    width: 100%;
}

.slider-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    display: flex; 
    flex-direction: row; 
    background: #000;
    min-height: 450px;
    position: relative;
    padding: 0;
}

.slide-text-column {
    flex: 1;
    padding: 60px 50px 60px 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;
}

.slide-image-column {
    flex: 1.2;
    position: relative;
    height: auto;
    overflow: hidden;
}

.slide-image-column img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
```

---

### **Paso 8: Crear estilos de tabs**

```css
.tabs-container {
    background: #1a1a1a;
    border-radius: 12px;
    overflow: hidden;
    margin-top: 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    width: 100%;
}

.tabs-header {
    display: flex;
    background: #151515;
    border-bottom: 2px solid #2a2a2a;
}

.tab-button {
    flex: 1;
    padding: 0.8rem 1rem;
    background: transparent;
    border: none;
    color: #b0b0b0;
    font-family: 'Barlow', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tab-button:hover {
    color: #ffffff;
    background: rgba(255, 140, 0, 0.1);
}

.tab-button.active {
    color: #FF8C00;
    background: #1a1a1a;
}

.tab-button.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #FF8C00;
}

.tab-content {
    display: none;
    padding: 1.2rem;
    animation: fadeIn 0.3s ease;
    max-height: 280px;
    overflow-y: auto;
}

.tab-content.active {
    display: block;
}
```

---

### **Paso 9: Crear estilos responsive**

```css
/* Mobile Preview */
.view-mobile .demo-section {
    max-width: 520px;
    margin: 0 auto;
}

.view-mobile .slide {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: 100%;
    flex-shrink: 0;
}

.view-mobile .slide-image-column {
    width: 100%;
    height: 320px;
    order: 1;
}

.view-mobile .slide-text-column {
    width: 100%;
    padding: 30px 24px;
    text-align: center;
    order: 2;
}

/* Media Query Desktop -> Tablet */
@media (max-width: 968px) {
    .slide {
        flex-direction: column-reverse;
        min-height: auto;
    }
    
    .slide-image-column {
        height: 320px;
    }
    
    .slide-text-column {
        padding: 30px 24px;
        align-items: center;
        text-align: center;
    }
    
    .specs-grid,
    .service-list,
    .availability-grid,
    .calculator-controls {
        grid-template-columns: 1fr;
    }
}

/* Media Query Mobile pequeño */
@media (max-width: 640px) {
    body {
        padding: 24px 0;
    }

    .slide-main-title {
        font-size: 28px;
    }

    .slider-arrow {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
}
```

---

### **Paso 10: Crear el JavaScript**

```javascript
// SLIDER DESKTOP
let desktopCurrentSlide = 0;
const desktopSlides = document.querySelectorAll('#desktop-slider .slide');
const desktopTotalSlides = desktopSlides.length;
const desktopSliderWrapper = document.getElementById('desktopSliderWrapper');
const desktopDotsContainer = document.getElementById('desktopDotsContainer');
const desktopContainer = document.getElementById('desktop-slider');

// Crear dots
for (let i = 0; i < desktopTotalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToDesktopSlide(i);
    desktopDotsContainer.appendChild(dot);
}

const desktopDots = document.querySelectorAll('#desktopDotsContainer .dot');

// Actualizar slider visual
function updateDesktopSlider() {
    desktopSliderWrapper.style.transform = `translateX(-${desktopCurrentSlide * 100}%)`;
    desktopDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === desktopCurrentSlide);
    });
}

// Navegar slides
function moveDesktopSlide(direction) {
    desktopCurrentSlide += direction;
    
    if (desktopCurrentSlide < 0) {
        desktopCurrentSlide = desktopTotalSlides - 1;
    }
    
    if (desktopCurrentSlide >= desktopTotalSlides) {
        desktopCurrentSlide = 0;
    }
    
    updateDesktopSlider();
}

function goToDesktopSlide(index) {
    desktopCurrentSlide = index;
    updateDesktopSlider();
}

// TOGGLE DESKTOP/MOBILE
const viewToggle = document.getElementById('viewToggle');
const viewTitle = document.getElementById('viewTitle');

if (viewToggle && viewTitle) {
    viewToggle.addEventListener('click', () => {
        document.body.classList.toggle('view-mobile');
        const isMobile = document.body.classList.contains('view-mobile');
        viewToggle.textContent = isMobile ? 'Ver Desktop' : 'Ver Mobile';
        viewTitle.textContent = isMobile ? '📱 Versión Mobile' : '🖥️ Versión Desktop';
    });
}

// DRAG FUNCTIONALITY
let desktopIsDragging = false;
let desktopStartPos = 0;
let desktopCurrentTranslate = 0;
let desktopPrevTranslate = 0;

desktopContainer.addEventListener('mousedown', (e) => {
    desktopStartPos = e.clientX;
    desktopIsDragging = true;
    desktopContainer.style.cursor = 'grabbing';
});

desktopContainer.addEventListener('mousemove', (e) => {
    if (!desktopIsDragging) return;
    desktopCurrentTranslate = desktopPrevTranslate + e.clientX - desktopStartPos;
});

desktopContainer.addEventListener('mouseup', (e) => {
    if (!desktopIsDragging) return;
    desktopIsDragging = false;
    const movedBy = desktopCurrentTranslate - desktopPrevTranslate;
    
    if (movedBy < -100) {
        moveDesktopSlide(1);
    } else if (movedBy > 100) {
        moveDesktopSlide(-1);
    } else {
        updateDesktopSlider();
    }
    
    desktopPrevTranslate = -desktopCurrentSlide * desktopContainer.offsetWidth;
    desktopCurrentTranslate = desktopPrevTranslate;
    desktopContainer.style.cursor = 'grab';
});

desktopContainer.style.cursor = 'grab';

// TABS FUNCTIONALITY
function switchTab(event, tabId) {
    const tabsContainer = event.target.closest('.tabs-container');
    const tabContents = tabsContainer.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    const tabButtons = tabsContainer.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// ACCORDION FUNCTIONALITY
function toggleAccordion(header) {
    const accordionItem = header.parentElement;
    const isActive = accordionItem.classList.contains('active');
    
    const tabContent = header.closest('.tab-content');
    const accordions = tabContent.querySelectorAll('.accordion-item');
    accordions.forEach(item => item.classList.remove('active'));
    
    if (!isActive) {
        accordionItem.classList.add('active');
    }
}

// PRICE CALCULATOR
function updatePrice(rentalTypeId, quantityId, priceDisplayId) {
    const rentalType = document.getElementById(rentalTypeId);
    const quantity = document.getElementById(quantityId);
    const totalPrice = document.getElementById(priceDisplayId);
    
    const basePrice = parseFloat(rentalType.value);
    const qty = parseInt(quantity.value);
    const total = basePrice * qty;
    
    totalPrice.textContent = `$${total.toLocaleString()}`;
}
```

---

## 🎨 Colores Principales

| Elemento | Color |
|----------|-------|
| Fondo | `#19191a` |
| Texto principal | `#ffffff` |
| Accent (botones) | `#FF8C00` |
| Fondo cards | `#0f0f0f` |
| Bordes | `#2a2a2a` |
| Verde (servicios) | `#10b981` |

---

## 🚀 Cómo Ejecutar

1. **Descarga los 3 archivos:**
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Abre `index.html` en tu navegador**

3. **Navega:**
   - Click en flechas
   - Click en dots
   - Drag horizontal
   - Click en tabs
   - Cambia cantidad en calculadora

4. **Toggle mobile:**
   - Click en "Ver Mobile" para ver preview móvil

---

## 📦 Características Clave

✅ **3 Slides completos** con imagen y contenido  
✅ **4 Tabs por slide** (Specs, Tiempo, Servicios, Pago)  
✅ **Calculadora dinámica** que calcula totales  
✅ **Acordeón expandible** en specs  
✅ **Drag & Click navigation**  
✅ **Dots indicadores** automáticos  
✅ **Desktop/Mobile toggle** con preview  
✅ **100% Responsive** (media queries)  
✅ **Animaciones suaves** (transitions)  

---

## 🔧 Customización

### Cambiar colores:
Busca en `styles.css`:
- `#FF8C00` → Orange accent
- `#10b981` → Green services
- `#0f0f0f` → Dark cards

### Cambiar maquinaria:
En `index.html`, modifica:
- Títulos (`.slide-main-title`)
- Descripciones (`.slide-description`)
- URLs de imágenes
- Precios en selects

### Agregar más slides:
1. Duplica un `<div class="slide">` completo
2. Cambia IDs de tabs (specs3 → specs4, etc.)
3. Actualiza en HTML el contador de slides

---

## 📱 Responsive Breakpoints

| Pantalla | Breakpoint |
|----------|-----------|
| Desktop | > 1200px |
| Tablet | 968px - 1200px |
| Mobile | < 640px |

---

## ✨ Tips Importantes

1. **Prioridad CSS:** Las reglas `.view-mobile` van al final para tener prioridad
2. **Flex layout:** El slider usa `display: flex` + `translateX` para navegar
3. **Width 100%:** Cada slide DEBE ser `min-width: 100%` para que funcione
4. **Z-index:** El texto está en `z-index: 2` para estar encima de la imagen
5. **Transform:** El movimiento usa `transform: translateX()` para performance

---

## 🐛 Troubleshooting

**Slides negros en mobile:**
→ Verifica que `.view-mobile .slide` tenga `width: 100%` y `flex-shrink: 0`

**Tabs no funcionan:**
→ Revisa que los IDs coincidan (specs1, tiempo1, etc.)

**Calculadora no actualiza:**
→ Verifica que los IDs de inputs sean únicos (quantity1, quantity2, etc.)

**Imágenes no cargan:**
→ Comprueba que las URLs sean válidas y accesibles

---

## 📄 Licencia

Libre para usar y modificar.

---

**Hecho con ❤️ para maquinaria pesada**
