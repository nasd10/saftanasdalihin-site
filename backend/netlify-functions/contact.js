require('dotenv').config();
const mongoose = require('mongoose');

// Menghubungkan ke MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    return; // already connected
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI not configured');
  }

  // Fail fast if server selection can't be made
  const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS makes the driver give up quickly if DNS/unreachable
    serverSelectionTimeoutMS: 5000,
  };

  await mongoose.connect(uri, connectOptions);
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
  // CORS headers to include in every response
  const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*', // consider restricting to your domain for production
    'Access-Control-Allow-Methods': 'OPTIONS,POST',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Menangani preflight request OPTIONS (untuk CORS) -- respond early without DB connection
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  // Pastikan koneksi ke database (hanya untuk non-OPTIONS requests)
  await connectToDatabase();

  if (event.httpMethod === 'POST') {
    // Mendapatkan data dari body request
    let parsed;
    try {
      parsed = JSON.parse(event.body);
    } catch (err) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Invalid JSON body.' }),
      };
    }

    const { name, email, message } = parsed;

    // Validasi data
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
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
        headers: CORS_HEADERS,
        body: JSON.stringify({ message: 'Pesan berhasil dikirim!' }),
      };
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
      return {
        statusCode: 500,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Gagal mengirim pesan.' }),
      };
    }
  }
  return {
    statusCode: 405,
    headers: CORS_HEADERS,
    body: JSON.stringify({ error: 'Metode HTTP tidak diizinkan.' }),
  };
};
