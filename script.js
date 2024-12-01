// Suçlama verileri
const crimes = [
    { name: "Kamu Görevinde Yolsuzluk", minDays: 4, maxDays: 7, bail: 0, felony: true },
    { name: "Kamu Görevini İhmal", minDays: 3, maxDays: 6, bail: 0, felony: true },
    { name: "Kamu Görevlisine Rüşvet", minDays: 3, maxDays: 5, bail: 0, felony: true },
    { name: "Tanık veya Mağdura Tehdit", minDays: 2, maxDays: 7, bail: 0, felony: true },
    { name: "Kamu Görevini Engellemek", minDays: 1, maxDays: 4, bail: 0, felony: true },
    { name: "Yasal Gözaltından Kaçmak", minDays: 7, maxDays: 9, bail: 0, felony: true },
    { name: "Kolluk Kuvvetlerinden Kaçmak", minDays: 1, maxDays: 5, bail: 0, felony: true },
    { name: "Bir Kamu Çalışanına Saldırı veya Darp", minDays: 2, maxDays: 6, bail: 0, felony: true },
    { name: "Haraç Kesmek", minDays: 4, maxDays: 8, bail: 0, felony: true },
    { name: "Bir Mahkumu Kaçırmak", minDays: 7, maxDays: 9, bail: 0, felony: true },
    { name: "Barış Görevlisi Köpeğini Öldürmek", minDays: 5, maxDays: 6, bail: 0, felony: true },
    { name: "Barış Görevlisi Köpeğini Ağır Yaralamak", minDays: 2, maxDays: 3, bail: 0, felony: true },
    { name: "Cinayet (min=max)", minDays: 20, maxDays: 20, bail: 0, felony: true },
    { name: "Birinci Derece Cinayet (min=max)", minDays: 18, maxDays: 18, bail: 0, felony: true },
    { name: "İkinci Derece Cinayet (min=max)", minDays: 15, maxDays: 15, bail: 0, felony: true },
    { name: "Kasten Adam Öldürme", minDays: 5, maxDays: 10, bail: 0, felony: true },
    { name: "Kasıtsız Adam Öldürme", minDays: 3, maxDays: 8, bail: 0, felony: true },
    { name: "Ölümcül Silahla Saldırı (A)", minDays: 3, maxDays: 5, bail: 0, felony: true },
    { name: "Ölümcül Silahla Saldırı (B)", minDays: 4, maxDays: 8, bail: 0, felony: true },
    { name: "Ağırlaştırılmış Darp", minDays: 2, maxDays: 6, bail: 0, felony: true },
    { name: "Kaçırma (min=max)", minDays: 5, maxDays: 5, bail: 0, felony: true },
    { name: "Insan Kaçakçılığı (min=max)", minDays: 6, maxDays: 6, bail: 0, felony: true },
    { name: "Yasa Dışı Hapis", minDays: 2, maxDays: 5, bail: 0, felony: false },
    { name: "Işkence (min=max)", minDays: 6, maxDays: 6, bail: 0, felony: true },
    { name: "Soygun", minDays: 2, maxDays: 4, bail: 0, felony: true },
    { name: "Silahlı Soygun", minDays: 4, maxDays: 8, bail: 0, felony: true },
    { name: "Tecavüz", minDays: 2, maxDays: 5, bail: 0, felony: true },
    { name: "Yasal Tecavüz (min=max)", minDays: 4, maxDays: 4, bail: 0, felony: true },
    { name: "Cinsel Saldırı", minDays: 3, maxDays: 8, bail: 0, felony: true },
    { name: "Kundakçılık (min=max)", minDays: 7, maxDays: 7, bail: 0, felony: true },
    { name: "Hırsızlık", minDays: 2, maxDays: 4, bail: 0, felony: true },
    { name: "Haneye Tecavüz", minDays: 4, maxDays: 8, bail: 0, felony: true },
    { name: "Araç Hırsızlığı", minDays: 2, maxDays: 6, bail: 0, felony: true },
    { name: "Ateşli Silah Hırsızlığı", minDays: 2, maxDays: 5, bail: 0, felony: true },
    { name: "Araç Tehlikesi", minDays: 1, maxDays: 5, bail: 0, felony: true },
    { name: "Geçerli Bir Lisans Olmadan Hava Aracı Kullanma", minDays: 2, maxDays: 5, bail: 0, felony: false },
    { name: "Hava Aracının Dikkatsiz Kullanımı", minDays: 2, maxDays: 6, bail: 0, felony: true },
    { name: "Hava Aracı İle Kaçma", minDays: 2, maxDays: 4, bail: 0, felony: true },
    { name: "Fuhuşa Teşvik", minDays: 2, maxDays: 4, bail: 0, felony: true },
    { name: "Tacizci Takip", minDays: 1, maxDays: 3, bail: 0, felony: false },
    { name: "Çocuk İstismarı", minDays: 4, maxDays: 8, bail: 0, felony: true },
    { name: "Çocuk İhmali", minDays: 2, maxDays: 6, bail: 0, felony: true },
    { name: "Hayvan İstismarı", minDays: 2, maxDays: 5, bail: 0, felony: true },
    { name: "Yasa Dışı Dinleme", minDays: 2, maxDays: 4, bail: 0, felony: true },
    { name: "Yasaklı Ateşli Silah Bulundurma", minDays: 2, maxDays: 6, bail: 0, felony: true },
    { name: "Ağırlaştırılmış Silah Bulundurma", minDays: 4, maxDays: 10, bail: 0, felony: true },
    { name: "Patlayıcı veya Yanıcı Cihazların Bulundurulması", minDays: 4, maxDays: 8, bail: 0, felony: true },
    { name: "Yasal Olmayan Ateşli Silah ve Patlayıcı Maddelerin Satışı", minDays: 2, maxDays: 5, bail: 0, felony: true },
    { name: "Ölümcül Silahın Sergilenmesi", minDays: 1, maxDays: 5, bail: 0, felony: true },
    { name: "Ateşli Silahların Kamu Alanında Ateşlenmesi", minDays: 2, maxDays: 8, bail: 0, felony: true },
    { name: "Ateşli Silahla Motorlu Araçtan Ateş Etmek", minDays: 2, maxDays: 5, bail: 0, felony: true },
    { name: "Felony Suçundan Hükümlü Olan Kişinin Silah Bulundurması", minDays: 1, maxDays: 4, bail: 0, felony: true },
    { name: "Felony Suçundan Hükümlü Olan Kişinin Mühimmat Bulundurması", minDays: 1, maxDays: 4, bail: 0, felony: true },
    { name: "Hapishanede Ölümcül Silah Bulundurmak", minDays: 7, maxDays: 9, bail: 0, felony: true },
    { name: "Kontrollü Madde Üretimi (A) (min=max)", minDays: 14, maxDays: 14, bail: 0, felony: true },
    { name: "Kontrollü Madde Üretimi (B) (min=max)", minDays: 12, maxDays: 12, bail: 0, felony: true },
    { name: "Kontrollü Madde Üretimi (C) (min=max)", minDays: 10, maxDays: 10, bail: 0, felony: true },
    { name: "Kontrollü Madde Üretimi (D) (min=max)", minDays: 8, maxDays: 8, bail: 0, felony: true },
    { name: "Kontrollü Madde Üretimi (T) (min=max)", minDays: 3, maxDays: 3, bail: 0, felony: true },
    { name: "Kontrollü Maddeyi Dağıtım Amacıyla Bulundurmak (A) (min=max)", minDays: 2, maxDays: 2, bail: 0, felony: false },
    { name: "Kontrollü Maddeyi Dağıtım Amacıyla Bulundurmak (B) (min=max)", minDays: 1, maxDays: 1, bail: 0, felony: false },
    { name: "Kontrollü Madde Satmak (A) (min=max)", minDays: 2, maxDays: 2, bail: 0, felony: true },
    { name: "Kontrollü Madde Satmak (B) (min=max)", minDays: 1, maxDays: 1, bail: 0, felony: true },
    { name: "Uyuşturucu Kaçakçılığı (A) (min=max)", minDays: 4, maxDays: 4, bail: 0, felony: true },
    { name: "Uyuşturucu Kaçakçılığı (B) (min=max)", minDays: 3, maxDays: 3, bail: 0, felony: true },
    { name: "Uyuşturucu Kaçakçılığı (C) (min=max)", minDays: 2, maxDays: 2, bail: 0, felony: true },
    { name: "Uyuşturucu Kaçakçılığı (D) (min=max)", minDays: 1, maxDays: 1, bail: 0, felony: true },
    { name: "Uyuşturucu Ticareti (A) (min=max)", minDays: 7, maxDays: 7, bail: 0, felony: true },
    { name: "Uyuşturucu Ticareti (B) (min=max)", minDays: 6, maxDays: 6, bail: 0, felony: true },
    { name: "Uyuşturucu Ticareti (C) (min=max)", minDays: 5, maxDays: 5, bail: 0, felony: true },
    { name: "Uyuşturucu Ticareti (D) (min=max)", minDays: 4, maxDays: 4, bail: 0, felony: true },
    { name: "Uyuşturucu Ticareti (T) (min=max)", minDays: 1, maxDays: 1, bail: 0, felony: true }
];

// HTML öğelerine referanslar
const dropdownContent = document.getElementById("myDropdown");
const selectedCrimesList = document.getElementById("selectedCrimes");
const totalInput = document.getElementById("totalInput");
const maxInput = document.getElementById("maxInput");
const bailInput = document.getElementById("bailInput");
const searchBox = document.getElementById("myInput");

// Suçlamaları dropdown'a ekle
function updateDropdown(crimesToShow) {
    dropdownContent.innerHTML = ''; // Eski suçlamaları temizle
    crimesToShow.forEach((crime) => {
        const option = document.createElement("a");
        option.textContent = crime.name;  // felony true ise (F) ekle
        option.onclick = function() {
            addCrimeToSelectedList(crime);
        };
        // dropdownContent.appendChild(option);a
        $("#myDropdown").append(option);
    });
}

// Arama fonksiyonu
function filterFunction() {
    const input = searchBox.value.toUpperCase();
    const filteredCrimes = crimes.filter(crime => crime.name.toUpperCase().includes(input));
    updateDropdown(filteredCrimes);
}

// Seçilen suçlamayı listeye ekle
function addCrimeToSelectedList(crime) {
    // Suçlama zaten eklenmişse ekleme
    const existingItem = Array.from(selectedCrimesList.children).find(item => item.textContent.includes(crime.name));
    if (existingItem) return;

    const listItem = document.createElement("li");
    listItem.textContent = crime.name;  // felony true ise (F) ekle

    // Kaldırma butonu oluştur
    const removeButton = document.createElement("button");
    removeButton.textContent = "Kaldır";
    removeButton.addEventListener("click", () => {
        selectedCrimesList.removeChild(listItem);
        updateTotals();
    });

    // Suçlama adı ve butonu listeye ekle
    listItem.appendChild(removeButton);
    selectedCrimesList.appendChild(listItem);

    // Hesaplamaları güncelle
    updateTotals();
}

// Hesaplamaları güncelle
function updateTotals() {
    let totalMinDays = 0;
    let totalMaxDays = 0;
    let totalBail = 0;

    const selectedItems = Array.from(selectedCrimesList.children);
    selectedItems.forEach(item => {
        const crimeName = item.textContent.replace("Kaldır", "").trim();
        const crime = crimes.find(crime => crime.name === crimeName);
        // console.log(crime, crimeName)
        if (crime) {
            totalMinDays += crime.minDays;
            totalMaxDays += crime.maxDays;
            totalBail += crime.bail;
        }
    });

    totalInput.value = totalMinDays * 24 * 60; // dakika cinsinden
    maxInput.value = totalMaxDays * 24 * 60; // dakika cinsinden
    // console.log(totalMinDays);
    // bailInput.value = totalBail;
    bailInput.value = 'YAKINDA';

}

// Sayfa yüklendiğinde tüm suçlamaları göster
updateDropdown(crimes);
