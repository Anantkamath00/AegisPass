/* 
   AegisPass - Core Logic
   Includes: Strength Algo, Background Animation, UI Interaction
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const passwordInput = document.getElementById('passwordInput');
    const toggleBtn = document.getElementById('togglePassword');
    const progressBar = document.getElementById('progressBar');
    const strengthText = document.getElementById('strengthText');

    // Requirements Tags
    const reqTags = {
        length: document.getElementById('req-length'),
        upper: document.getElementById('req-upper'),
        lower: document.getElementById('req-lower'),
        num: document.getElementById('req-num'),
        spec: document.getElementById('req-spec')
    };

    const generateBtn = document.getElementById('generateBtn');
    const saveBtn = document.getElementById('saveBtn');
    const diaryList = document.getElementById('diaryList');
    const clearDiaryBtn = document.getElementById('clearDiary');

    // Generation Options
    const settingsBtn = document.getElementById('settingsBtn');
    const genOptions = document.getElementById('genOptions');
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const includeUpper = document.getElementById('includeUpper');
    const includeLower = document.getElementById('includeLower');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');

    // --- State ---
    let currentScore = 0;

    // --- Interactive Background (Particles) ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(0, 242, 96, ${Math.random() * 0.3})`; // Greenish Cyber
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 60; i++) {
            particles.push(new Particle());
        }
    }
    initParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 242, 96, ${0.1 - distance / 1000})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // --- Password Logic ---

    function checkStrength(password) {
        let score = 0;
        let checks = {
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            num: /[0-9]/.test(password),
            spec: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        };

        // Update Tags UI
        Object.keys(checks).forEach(key => {
            if (checks[key]) {
                reqTags[key].classList.add('valid');
            } else {
                reqTags[key].classList.remove('valid');
            }
        });

        // Calculate Score
        if (checks.length) score += 20;
        if (checks.upper) score += 20;
        if (checks.lower) score += 20;
        if (checks.num) score += 20;
        if (checks.spec) score += 20;

        // Bonus for length > 12
        if (password.length > 12) score += 10;

        // Cap at 100
        if (score > 100) score = 100;

        // Visual Feedback
        updateMeter(score);
        return score;
    }

    function updateMeter(score) {
        currentScore = score;
        progressBar.style.width = `${score}%`;

        // Color & Text
        let color, text, glow;

        if (score === 0 && passwordInput.value.length === 0) {
            text = "Enter Password";
            color = "rgba(255,255,255,0.1)";
            glow = "none";
        } else if (score < 40) {
            text = "Weak";
            color = "#ff4b4b"; // Red
            glow = "0 0 10px rgba(255, 75, 75, 0.4)";
        } else if (score < 70) {
            text = "Moderate";
            color = "#ffb302"; // Orange
            glow = "0 0 10px rgba(255, 179, 2, 0.4)";
        } else if (score < 90) {
            text = "Strong";
            color = "#00f260"; // Green
            glow = "0 0 10px rgba(0, 242, 96, 0.4)";
        } else {
            text = "Unbreakable";
            color = "#00dbde"; // Cyan/Blue gradient mix
            glow = "0 0 15px rgba(0, 219, 222, 0.6)";
        }

        progressBar.style.background = color;
        progressBar.style.boxShadow = glow;
        strengthText.innerText = text;
        strengthText.style.color = score === 0 ? 'rgba(255,255,255,0.6)' : color;
    }

    // --- Inputs & Events ---

    passwordInput.addEventListener('input', (e) => {
        checkStrength(e.target.value);
    });

    toggleBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        const icon = toggleBtn.querySelector('ion-icon');
        icon.setAttribute('name', type === 'password' ? 'eye-outline' : 'eye-off-outline');
    });

    // Settings Panel Toggle
    settingsBtn.addEventListener('click', () => {
        genOptions.classList.toggle('active');
        const icon = settingsBtn.querySelector('ion-icon');
        if (genOptions.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'settings-outline');
        }
    });

    // Length Slider
    lengthSlider.addEventListener('input', (e) => {
        lengthValue.textContent = e.target.value;
    });

    // Generate Password with Options
    generateBtn.addEventListener('click', () => {
        let charset = "";

        if (includeUpper.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLower.checked) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers.checked) charset += "0123456789";
        if (includeSymbols.checked) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

        if (charset === "") {
            alert("Please select at least one character type!");
            return;
        }

        const len = parseInt(lengthSlider.value);
        let pass = "";

        for (let i = 0; i < len; i++) {
            pass += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        passwordInput.value = pass;
        checkStrength(pass);

        // Animate button
        generateBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon> Generated!';
        setTimeout(() => {
            generateBtn.innerHTML = '<ion-icon name="shuffle-outline"></ion-icon> Generate';
        }, 1000);
    });

    // --- Diary Logic (LocalStorage) ---

    // Load saved
    const loadDiary = () => {
        const saved = JSON.parse(localStorage.getItem('aegisPassDiary') || '[]');
        diaryList.innerHTML = '';
        if (saved.length === 0) {
            diaryList.innerHTML = '<div style="text-align:center; color:rgba(255,255,255,0.3); padding:1rem; font-size:0.8rem;">No passwords saved locally</div>';
            return;
        }
        saved.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'diary-item';
            el.innerHTML = `
                <span><strong>${item.date}</strong> - ${maskPassword(item.pass)}</span>
                <button class="copy-btn" onclick="copyToClip('${item.pass}')">
                    <ion-icon name="copy-outline"></ion-icon>
                </button>
            `;
            diaryList.appendChild(el);
        });
    };

    const maskPassword = (str) => {
        if (str.length <= 4) return '*'.repeat(str.length);
        return str.substring(0, 2) + '*'.repeat(str.length - 2);
    };

    window.copyToClip = (str) => {
        navigator.clipboard.writeText(str);
        alert("Password copied to clipboard!");
    };

    saveBtn.addEventListener('click', () => {
        const pass = passwordInput.value;
        if (!pass) return;

        const saved = JSON.parse(localStorage.getItem('aegisPassDiary') || '[]');
        const date = new Date().toLocaleDateString();

        saved.unshift({ date, pass }); // Add to top
        if (saved.length > 10) saved.pop(); // Keep max 10

        localStorage.setItem('aegisPassDiary', JSON.stringify(saved));
        loadDiary();

        // Feedback
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon> Saved';
        setTimeout(() => saveBtn.innerHTML = originalText, 1500);
    });

    clearDiaryBtn.addEventListener('click', () => {
        if (confirm("Clear all saved passwords?")) {
            localStorage.removeItem('aegisPassDiary');
            loadDiary();
        }
    });

    loadDiary();
});
