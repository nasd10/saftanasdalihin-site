const express = require('express');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql2'); // Library MySQL

const app = express();
const port = process.env.PORT || 3000;

// Konfigurasi koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',      // Ganti dengan host MySQL kamu
  user: 'root',           // Ganti dengan username MySQL kamu
  password: '',           // Ganti dengan password MySQL kamu
  database: 'portfolio',  // Nama database yang sudah kamu buat
});

// Test koneksi
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Mengaktifkan CORS (jika dibutuhkan)
app.use(cors());

// Middleware untuk parsing request body JSON
app.use(express.json());

// Menyajikan static files dari frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// API endpoint untuk form kontak
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Semua kolom wajib diisi.' });
  }

  // Simpan data ke database MySQL
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      return res.status(500).json({ error: 'Gagal mengirim pesan.' });
    }
    res.status(200).json({ message: 'Pesan berhasil dikirim!' });
  });
});

// Endpoint untuk frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
