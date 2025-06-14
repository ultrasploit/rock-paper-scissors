# 🪸📄✂️ Rock Paper Scissors

A fun, lightweight **Rock Paper Scissors** game built with **HTML**, **CSS**, and **JavaScript**. Designed with responsiveness, instant gameplay, and complete offline capability, this app lets you battle it out with the computer using emoji-powered visuals and intuitive controls.

---

**🔗 Live Demo:** [https://ultrasploit.github.io/rock-paper-scissors/](https://ultrasploit.github.io/rock-paper-scissors/)

## ✨ Features

- 👤 **Player vs Computer** gameplay
- 🎮 **Emoji-based move display** for a fun UX
- 📱 **Responsive design** – fully playable on desktop and mobile
- ⚡ **Instant result feedback** after each move
- 💾 **Offline compatible** – works seamlessly without internet
- 🧹 **Zero dependencies** – no external libraries required
- 📲 **Installable PWA** – add to your home screen or desktop

---

## 🚀 Getting Started

1. **Clone this repository**:
   ```bash
   git clone https://github.com/ultrasploit/rock-paper-scissors.git
   cd rock-paper-scissors
   ```

2. **Run the app** locally:
   - Open `index.html` in any modern web browser.

3. **Install as a PWA**:
   - Click the *Install* icon in your browser (on supported platforms).
   - Or add to your home screen from mobile browser options.

---

## 📱 PWA Configuration

This app supports Progressive Web App installation. Here's the default `manifest.json`:

```json
{
    "name": "Rock Paper Scissors Game",
    "short_name": "RPS Game",
    "description": "A fun and interactive Rock Paper Scissors game. Challenge the computer and test your luck!",
    "start_url": "/",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#000000",
    "theme_color": "#0A74DA",
    "icons": [
        {
            "src": "assets/logo.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "assets/logo.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}

```

You should also include a valid `service-worker.js` to enable offline support and caching.

---

## 🚰 Technologies Used

- HTML5
- CSS3 (Flexbox & Media Queries)
- Vanilla JavaScript
- Web App Manifest & Service Worker (for PWA support)

---

## 💡 Customization

You can:
- Change icons and theme colors in `manifest.json`
- Add more rounds or animations in `script.js`
- Customize styles via `style.css`

---

## 🤝 Contribution

Contributions are welcome! If you'd like to fix a bug or suggest a new feature, feel free to:
1. Fork this repo
2. Create a new branch
3. Submit a pull request 🚀

---

## 🧑‍💻 Developer

Made with ❤️ for **BITS'25** by ultrasploit

---

## 📜 License

This project is licensed under the MIT License – feel free to use and modify!
