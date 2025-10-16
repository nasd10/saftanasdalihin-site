const express = require('express');  // Mengimpor express
const mongoose = require('mongoose'); // Mengimpor mongoose untuk MongoDB
const cors = require('cors'); // Mengimpor cors

const app = express(); // Membuat instance express
const port = process.env.PORT || 3000;  // Tentukan port untuk server

// Mengaktifkan CORS untuk memungkinkan akses dari frontend React
app.use(cors());

// Middleware untuk parsing request body JSON
app.use(express.json()); // Agar backend bisa membaca JSON dari request body

// Menghubungkan ke MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Terhubung ke MongoDB');
}).catch((err) => {
  console.error('Gagal terhubung ke MongoDB:', err);
});

// Membuat schema untuk kontak
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  created_at: { type: Date, default: Date.now },
});

// Membuat model untuk schema kontak
const Contact = mongoose.model('Contact', contactSchema);

// API endpoint untuk menerima form kontak
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validasi data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Semua kolom wajib diisi.' });
  }

  // Membuat objek baru dari model Contact
  const newContact = new Contact({ name, email, message });

  // Menyimpan data ke MongoDB
  newContact.save()
    .then(() => {
      res.status(200).json({ message: 'Pesan berhasil dikirim!' });
    })
    .catch((err) => {
      console.error('Gagal menyimpan data:', err);
      res.status(500).json({ error: 'Gagal mengirim pesan.' });
    });
});

// Menjalankan server di port yang ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
