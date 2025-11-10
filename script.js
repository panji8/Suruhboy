// Inisialisasi peta Leaflet
const map = L.map('map').setView([-7.533, 110.595], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Tambahkan marker yang bisa digeser
const marker = L.marker([-7.533, 110.595], { draggable: true }).addTo(map);

// Event saat marker dipindah
marker.on('moveend', (e) => {
  const { lat, lng } = e.target.getLatLng();
  console.log(`Titik baru: ${lat}, ${lng}`);
});

// Deteksi teks layanan
const input = document.getElementById('layanan');
const output = document.getElementById('deteksi-layanan');

input.addEventListener('input', () => {
  const val = input.value.toLowerCase();
  let detected = '-';

  if (val.includes('beli')) detected = 'Pembelian Barang';
  else if (val.includes('antar')) detected = 'Antar Barang';
  else if (val.includes('bersih')) detected = 'Jasa Bersih-Bersih';
  else if (val.includes('bangunin')) detected = 'Bangunin Orang';
  
  output.textContent = `Layanan terdeteksi: ${detected}`;
});
