import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";



const MasonryImagesGallery = () => {
    const travelImageLinks = [
        'https://lerablog.org/wp-content/uploads/2013/05/travelling-alone.jpg',
        'https://tse2.mm.bing.net/th?id=OIP.YfEWxvP3vo59bzzbXkY41AHaE8&pid=Api&P=0&h=180',
        'http://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Images-For-Desktop.jpg',
        'https://wallpapercave.com/wp/wp4069426.jpg',
        'http://www.stjohnsmag.com/uploads/7/8/2/2/7822260/travel-dreams-april-2020-adobestock-208717161_orig.jpg',
        'https://wallpaperaccess.com/full/1431632.jpg',
        'https://tse2.mm.bing.net/th?id=OIP.RF_bMHdnKG7kHpu6JH7ynQHaEK&pid=Api&P=0&h=180',
      
      ];
    
      return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 370: 1, 750: 3, 900: 4 }}>
        <Masonry>
          {travelImageLinks.map((src, index) => (
            <img
            className="masonry__img"
              key={index}
              src={src}
              alt={`Travel Image ${index}`}
              style={{ width: '100%', display: 'block', marginBottom: '10px' }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  };
export default MasonryImagesGallery