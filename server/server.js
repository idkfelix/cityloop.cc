const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

products = [
  {
    id:1,
    title: 'Citytrain Tee',
    description: '',
    price: 49.99,
    images: [
      'https://media.discordapp.net/attachments/856453890345533451/1107453392743313468/1.png',
      'https://media.discordapp.net/attachments/856453890345533451/1107453393439559783/2.png',
      'https://media.discordapp.net/attachments/856453890345533451/1107453394244861962/3.png'
    ],
    option_name:'Size',
    options: [
      {name:'small',available:true},
      {name:'medium',available:true},
      {name:'large',available:true},
      {name:'xlarge',available:true},
    ]
  },
  {
    id:2,
    title: 'Carriage Long Sleeve',
    description: '',
    price: 39.99,
    images: [
      'https://cityloop.cc/cdn/shop/files/1_8fa95593-3f59-4d9b-9e26-2e1c9045c7de.png',
      'https://cityloop.cc/cdn/shop/files/2_8c6af036-245b-4cac-a1aa-93150321e3f9.png'
    ],
    option_name:'Size',
    options: [
      {name:'small',available:true},
      {name:'medium',available:true},
      {name:'large',available:true},
      {name:'xlarge',available:true},
    ]
  },
  {
    id:3,
    title: 'Elizabeth St Deck',
    description: '',
    price: 99.99,
    images: [
      'https://cityloop.cc/cdn/shop/files/g25.png',
      'https://cityloop.cc/cdn/shop/files/b5.png'
    ],
    option_name:'Size/Colour',
    options: [
      {name:'8.25 Grey',available:false},
      {name:'8.25 Black',available:true},
      {name:'8.5 Grey',available:true},
      {name:'8.5 Black',available:true},
    ]
  },
]

app.get("/api/catalog", (req, res) => {
    res.json(products)
})

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  const p = products.find(x => x.id == id);
  res.json(p)
})


app.listen(1337, () => {console.log("server started on port 1337")})