import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import  Product from './components/Product';

function Tour() {
  const products = 
    [
      {
          "name": "Eiffel Tower, Paris",
          "price": 1125,
          "image": "http://upload.wikimedia.org/wikipedia/commons/0/0b/Eiffel_Tower_Paris.JPG"
      },
      {
          "name": "Great Wall of China, Beijing",
          "price": 2310,
          "image": "https://tse3.mm.bing.net/th?id=OIP.e5Pzt3BkvTjk-KvJ8u-8RAHaFQ&pid=Api&P=0&h=180"
      },
      {
          "name": "Machu Picchu, Peru",
          "price": 2650,
          "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Machu_Picchu_Peru.JPG"
      },
      {
          "name": "Grand Canyon, USA",
          "price": 3000,
          "image": "https://tse1.mm.bing.net/th?id=OIP.5LjHlskZb1ch8XunlKEhjAHaE7&pid=Api&P=0&h=180"
      },
      {
          "name": "Colosseum, Rome",
          "price": 1800,
          "image": "https://tse1.mm.bing.net/th?id=OIP.INB7nsN_TGttYNu4sINevQHaEW&pid=Api&P=0&h=180"
      },
      {
          "name": "Taj Mahal, India",
          "price": 1500,
          "image": "https://www.thoughtco.com/thmb/1g2-jnNGFo6SMikINMmHOmKsBMI=/3865x2576/filters:fill(auto,1)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg"
      },
      {
          "name": "Santorini, Greece",
          "price": 2030,
          "image": "http://www.greekboston.com/wp-content/uploads/2016/10/Santorini.jpg"
      },
      {
          "name": "Sydney Opera House, Australia",
          "price": 3000,
          "image": "http://upload.wikimedia.org/wikipedia/commons/6/67/Sydney_Opera_House_Australia.jpg"
      },
      {
          "name": "Niagara Falls, Canada/USA",
          "price": 2070,
          "image": "https://tse4.mm.bing.net/th?id=OIP.JolhyZDykdbdLLIueTpp6wHaE9&pid=Api&P=0&h=180"
      },
      {
          "name": "Stonehenge, UK",
          "price": 2500,
          "image": "https://cdn.website-editor.net/53e2b471e1de48aeb7694e4b3f985190/dms3rep/multi/stonehenge.co.uk-83.jpg"
      },
      {
          "name": "Christ the Redeemer, Brazil",
          "price": 2000,
          "image": "https://www.thoughtco.com/thmb/rTjfh-cNKRj3yKftEg-7wLx5Vrc=/3775x2491/filters:no_upscale():max_bytes(150000):strip_icc()/Christ_the_Redeemer-140514153-56a02f845f9b58eba4af490a.jpg"
      },
      {
          "name": "Mount Fuji, Japan",
          "price": 1500,
          "image": "https://cdn.britannica.com/03/75503-050-F65891FA/volcanic-cone-Japan-Mount-Fuji.jpg"
      },
      {
          "name": "Angkor Wat, Cambodia",
          "price": 3700,
          "image": "https://www.tripsavvy.com/thmb/74SaLzydFMxwf_uDPZn6TFuRERM=/4856x3237/filters:no_upscale():max_bytes(150000):strip_icc()/sunset-at-angkor-wat--siem-reap--cambodia-640432454-5c327edf46e0fb00016ccb6c.jpg"
      },
      {
          "name": "Pyramids of Giza, Egypt",
          "price": 1200,
          "image": "http://ancientworldwonders.com/uploads/Pyramids_of_Giza.jpg"
      },
      {
        "name": "Times Square, New York",
        "price": 1000,
        "image": "https://tse3.mm.bing.net/th?id=OIP.5Jzd-eeQ6cic8iF-r6BVnQHaFj&pid=Api&P=0&h=180"
    },
    {
        "name": "The Acropolis Museum, Greece",
        "price": 100,
        "image": "https://example.com/acropolis_museum.jpg"
    },
    {
        "name": "Petra, Jordan",
        "price": 700,
        "image": "https://www.tripsavvy.com/thmb/JRbQ8Fpon-gkFxdCpSdP4F9auvs=/2900x1934/filters:fill(auto,1)/GettyImages-133969533-596b51705f9b582c3574ec89.jpg"
    },
    {
        "name": "Reykjavik, Iceland",
        "price": 2000,
        "image": "https://tse1.mm.bing.net/th?id=OIP.RXiAeMHiaL4VtByHQi29cAHaE8&pid=Api&P=0&h=180"
    },
    {
        "name": "Galápagos Islands, Ecuador",
        "price": 1000,
        "image": "https://tse1.mm.bing.net/th?id=OIP.2vHtLZDhb85OEg0ZbgmjkQHaE8&pid=Api&P=0&h=180"
    },
    {
        "name": "Blue Lagoon, Iceland",
        "price": 6000,
        "image": "https://tse4.mm.bing.net/th?id=OIP.GgSemHg6-TutcSzZuKx0DwHaE8&pid=Api&P=0&h=180"
    },
    {
        "name": "Vatican City, Rome",
        "price": 2000,
        "image": "https://www.pope2you.net/wp-content/uploads/2020/01/st-peters-basilica-vatican-city-rome-italy.jpg"
    },
    {
        "name": "Uluru, Australia",
        "price": 2500,
        "image": "https://www.fodors.com/wp-content/uploads/2018/12/Uluru101__HERO_shutterstock_168634214.jpg"
    },
    {
        "name": "Bali, Indonesia",
        "price": 15000,
        "image": "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/08/Ulun-Danu-Beratan-in-Bedugul-Bali-Indonesia-.jpg"
    },
    {
        "name": "Moraine Lake, Canada",
        "price": 1200,
        "image": "https://external-preview.redd.it/vCeK2GL9Dg1uu3CRLMtXd2wO4I6S2pxJcGrl0zVlRSE.jpg?auto=webp&s=e52be461ec805f2fe0c6f063746cee498021438a"
    }
    ]
  const [total,setTotel] = useState(0)
  const [items,setItem] = useState([])
  let addItem =(product)=>{
    setItem([...items,product])
    setTotel(total + product.price)
  }
  let removeItem =(product) =>{
   let index = items.findIndex(item => item.name === product.name)
   if(index !=-1){
     items.splice(index,1)
     setItem([...items])
     setTotel(total - product.price)
   }
}
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'><h1>Tour Item</h1>
        <div className="container d-flex flex-wrap justify-content-between m-5 " style={{gap:"5%"}}>{
        products.map((product)=>{
          return<Product product={product} addItem={addItem}/> 
        }
        )}
        </div>
        </div>
        <div className='col-lg-6'>
          <h1>No .of Tour({items.length})</h1>
          <Navbar items={items} total={total} removeItem={removeItem}/></div>
      </div>
    </div>
      
     

    </>
  )
}

export default Tour
