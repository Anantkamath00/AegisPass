# 🔐 AegisPass - Next-Gen Password Security Analysis

<div align="center">

![AegisPass Banner](https://img.shields.io/badge/AegisPass-Password%20Security-00f260?style=for-the-badge&logo=shield&logoColor=white)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://yourusername.github.io/aegispass)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**A stunning, real-time password strength analyzer with advanced generation options**

[Live Demo](#) • [Features](#features) • [Installation](#installation) • [Usage](#usage)

</div>

---

## ✨ Features

### 🎨 **Premium UI/UX**
- **Cyber-Aesthetic Design** - Dark glassmorphism theme with smooth animations
- **Dynamic Particle Background** - Live animated network visualization
- **Real-time Feedback** - Instant strength analysis as you type
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile

### 🔒 **Advanced Security Analysis**
- **Multi-Factor Strength Meter** - Analyzes length, complexity, and character variety
- **Visual Strength Indicators** - Color-coded progress bar (Weak → Moderate → Strong → Unbreakable)
- **Requirement Badges** - Live validation tags for each security criterion
- **Smart Scoring Algorithm** - Comprehensive password evaluation

### ⚙️ **Customizable Password Generator**
- **Length Control** - Adjustable slider (8-32 characters)
- **Character Type Selection** - Toggle uppercase, lowercase, numbers, and symbols
- **One-Click Generation** - Instant secure password creation
- **Smart Validation** - Ensures at least one character type is selected

### 📒 **Password Diary**
- **Local Storage** - Securely save passwords in your browser (client-side only)
- **Quick Copy** - One-click clipboard copy functionality
- **Privacy First** - No server uploads, all data stays on your device
- **Auto-Masking** - Passwords displayed with partial masking for security

---

## 🚀 Installation

### Option 1: Direct Download
1. Clone or download this repository
```bash
git clone https://github.com/yourusername/aegispass.git
cd aegispass
```

2. Open `index.html` in your web browser
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

### Option 2: GitHub Pages Deployment
1. Fork this repository
2. Go to **Settings** → **Pages**
3. Select **main** branch as source
4. Your site will be live at `https://yourusername.github.io/aegispass`

### Option 3: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit http://localhost:8000
```

---

## 💻 Usage

### Basic Password Checking
1. Type or paste your password into the input field
2. Watch the strength meter update in real-time
3. Check the requirement badges to see what's missing
4. Aim for "Strong" or "Unbreakable" status

### Generating Secure Passwords
1. Click the **⚙️ Settings** icon to open generation options
2. Adjust the **length slider** to your desired password length
3. Toggle character types (Uppercase, Lowercase, Numbers, Symbols)
4. Click **🔀 Generate** to create a secure password
5. The generated password automatically appears in the input field

### Saving Passwords
1. Enter or generate a password
2. Click **💾 Save to Diary**
3. View saved passwords in the "Password Diary" section below
4. Click the **📋 Copy** icon to copy any saved password
5. Use **Clear** to remove all saved passwords

---

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - No frameworks, pure performance
- **Canvas API** - Dynamic particle background animation
- **LocalStorage API** - Client-side password persistence
- **Ionicons** - Modern icon library
- **Google Fonts (Outfit)** - Premium typography

---

## 📁 Project Structure

```
aegispass/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and animations
├── script.js           # Core logic and interactivity
├── README.md           # This file
└── requirements.txt    # Dependencies (for reference)
```

---

## 🎯 Password Strength Criteria

| Criterion | Requirement | Points |
|-----------|-------------|--------|
| Length | 8+ characters | 20 |
| Uppercase | A-Z | 20 |
| Lowercase | a-z | 20 |
| Numbers | 0-9 | 20 |
| Symbols | !@#$%^&* etc. | 20 |
| Bonus Length | 12+ characters | +10 |

**Scoring:**
- 0-39: ❌ **Weak** (Red)
- 40-69: ⚠️ **Moderate** (Orange)
- 70-89: ✅ **Strong** (Green)
- 90-100: 🛡️ **Unbreakable** (Cyan)

---

## 🔐 Security & Privacy

- ✅ **100% Client-Side** - No data sent to any server
- ✅ **No Analytics** - Zero tracking or data collection
- ✅ **LocalStorage Only** - Passwords saved in your browser only
- ✅ **Open Source** - Full transparency, inspect the code yourself
- ⚠️ **Note:** For maximum security, use a dedicated password manager for production passwords

---

## 🌟 Screenshots

### Main Interface
![AegisPass Main Interface](https://via.placeholder.com/800x500/050505/00f260?text=AegisPass+Main+Interface)

### Generation Settings
![Password Generation Options](https://via.placeholder.com/800x500/050505/00f260?text=Generation+Settings+Panel)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- ⭐ Star this repository

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Developed by [@Ananth Kamth](https://github.com/AnanthKamth)**

---

## 🙏 Acknowledgments

- Design inspired by modern cybersecurity aesthetics
- Icons by [Ionicons](https://ionic.io/ionicons)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

<div align="center">

**Made with 💚 and ☕**

If you found this useful, consider giving it a ⭐!

</div>