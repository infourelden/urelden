# Ur Elden — En rit för män som söker riktning

Webbplats för Ur Elden, ett utvecklingsprogram för män som söker mening, riktning och mod.

## Projektstruktur

```
ur-elden-repo/
├── index.html           # Huvudsida
├── css/
│   └── style.css       # Globala stilar
├── js/
│   └── script.js       # JavaScript-funktionalitet
├── assets/
│   └── favicon.svg     # Webbplatsikon
└── README.md           # Den här filen
```

## Installation & Utveckling

1. Klona repositoryt:
   ```bash
   git clone https://github.com/[USERNAME]/ur-elden.git
   cd ur-elden
   ```

2. Öppna `index.html` i webbläsaren eller använd en lokal server:
   ```bash
   # Med Python 3
   python -m http.server 8000
   ```

3. Besök `http://localhost:8000` i webbläsaren

## Deploy på GitHub Pages

1. Pusha till GitHub
2. Gå till Settings → Pages
3. Välj "Deploy from a branch" och välj `main` branch
4. GitHub Pages publicerar automatiskt

## Custom Domain

För att koppla `urelden.se`:

1. Konfigurера DNS-records hos din domänregistrar:
   - `CNAME` → `[USERNAME].github.io`
   - Eller A-records för IP-adressen

2. I GitHub repo Settings → Pages → Custom domain
   - Ange `urelden.se`

3. Vänta på SSL-certifikat (5-24 timmar)

## Ändringslogg

- **2026-06-29**: Professionell projektstruktur med separata CSS och JS filer

---

**Kontakt**: hej@urelden.se
