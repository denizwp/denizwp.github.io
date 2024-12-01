// Suçlama verilerini içeren bir tablo
const crimes = [
    { name: "Test1", minDays: 2, maxDays: 5, bail: 500 },
    { name: "Test2", minDays: 1, maxDays: 3, bail: 300 },
    { name: "Test3", minDays: 4, maxDays: 6, bail: 700 },
];

// HTML öğelerine referanslar
const crimesDropdown = document.getElementById("crimesDropdown");
const addCrimeButton = document.getElementById("addCrimeButton");
const selectedCrimes = document.getElementById("selectedCrimes");
const totalInput = document.getElementById("totalInput");
const maxInput = document.getElementById("maxInput");
const bailInput = document.getElementById("bailInput");

// Dropdown menüsünü suçlama isimleriyle doldur
crimes.forEach((crime, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = crime.name;
    crimesDropdown.appendChild(option);
});

// Seçilen suçlamaların listesi
let selectedCrimesList = [];

// Seçilen suçlamayı listeye ekleme
addCrimeButton.addEventListener("click", () => {
    const selectedIndex = crimesDropdown.value;
    const selectedCrime = crimes[selectedIndex];

    // Listeye eklenen suçlamayı kontrol et
    if (!selectedCrimesList.includes(selectedCrime)) {
        selectedCrimesList.push(selectedCrime);

        // Listeye suçlamayı ekle
        const listItem = document.createElement("li");
        listItem.textContent = selectedCrime.name;

        // Kaldırma butonu oluştur
        const removeButton = document.createElement("button");
        removeButton.textContent = "Kaldır";
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", () => {
            // Suçlamayı listeden kaldır
            selectedCrimesList = selectedCrimesList.filter(crime => crime !== selectedCrime);
            listItem.remove();
            updateTotals(); // Hesaplamaları güncelle
        });

        // Suçlama adı ve butonu listeye ekle
        listItem.appendChild(removeButton);
        selectedCrimes.appendChild(listItem);

        // Hesaplamaları güncelle
        updateTotals();
    }
});

// Hesaplamaları güncelleme fonksiyonu
function updateTotals() {
    let totalMinDays = 0;
    let totalMaxDays = 0;
    let totalBail = 0;

    selectedCrimesList.forEach(crime => {
        totalMinDays += crime.minDays;
        totalMaxDays += crime.maxDays;
        totalBail += crime.bail;
    });

    // Günleri dakikaya çevir
    totalInput.value = totalMinDays * 24 * 60;
    maxInput.value = totalMaxDays * 24 * 60;
    bailInput.value = totalBail;
}
