document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form elemanlarını al
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const statusDiv = document.getElementById('statusMessage');
    const btn = document.getElementById('submitBtn');

    // Hata kontrol fonksiyonu
    let hasError = false;
    const inputs = [nameInput, emailInput, messageInput];

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.borderColor = "#ff4d4d"; // Boşsa kırmızı yap
            hasError = true;
        } else {
            input.style.borderColor = ""; // Doluysa rengi sıfırla
        }
    });

    if (hasError) {
        statusDiv.style.color = "#ff4d4d";
        statusDiv.innerHTML = "⚠️ Lütfen tüm alanları doldurunuz!";
        return;
    }

    // Her şey tamamsa gönderim simülasyonu başlasın
    btn.innerText = "Gönderiliyor...";
    btn.disabled = true;

    setTimeout(() => {
        statusDiv.style.color = "#5cdb95";
        statusDiv.innerHTML = `✔️ Teşekkürler ${nameInput.value}, mesajın iletildi!`;
        
        btn.innerText = "Gönderildi";
        btn.style.backgroundColor = "#28a745";

        document.getElementById('contactForm').reset();

        setTimeout(() => {
            statusDiv.innerHTML = "";
            btn.innerText = "Mesajı Gönder";
            btn.disabled = false;
            btn.style.backgroundColor = "";
            inputs.forEach(i => i.style.borderColor = "");
        }, 4000);
    }, 1500);
});