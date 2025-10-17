require('dotenv').config();
const mongoose = require('mongoose');

// Menghubungkan ke MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return; // Jika sudah terhubung, langsung lanjut
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Terhubung ke MongoDB');
};

// Membuat schema untuk kontak
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  created_at: { type: Date, default: Date.now },
});

// Pastikan hanya mendefinisikan model sekali
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

exports.handler = async (event, context) => {
  // Memastikan koneksi ke database
  await connectToDatabase();

  if (event.httpMethod === 'POST') {
    // Mendapatkan data dari body request
    const { name, email, message } = JSON.parse(event.body);

    // Validasi data
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Semua kolom wajib diisi.' }),
      };
    }

    // Membuat objek baru dari model Contact
    const newContact = new Contact({ name, email, message });

    // Menyimpan data ke MongoDB
    try {
      await newContact.save();
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Pesan berhasil dikirim!' }),
      };
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Gagal mengirim pesan.' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Metode HTTP tidak diizinkan.' }),
  };
};
