const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(cors());

// ข้อมูลสำหรับเก็บข้อมูล CRUD
let items = [];

// เพิ่มข้อมูล
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(newItem);
});

// ดึงข้อมูลทั้งหมด
app.get('/api/items', (req, res) => {
  res.json(items);
});

// ลบข้อมูล
app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;
  items = items.filter(item => item.id !== id);
  res.json({ message: 'Item deleted' });
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PROT}`);
});