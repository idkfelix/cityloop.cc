import React, {useState, useEffect} from 'react';

function ProductGallery({product}) {
  const [selectedImage, setSelectedImage] = useState()

  const handleImageClick = (image) => {
    setSelectedImage(image);
  }

  useEffect(() => {
    if (product?.images) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);


  
  return (
    <>
      <div className="product-gallery">
        <img src={selectedImage} className="focused-image" />
        <div style={{ display: 'flex' }}>
          {product?.images?.map((image) => (
            <img 
            src={image} 
            className={`image-pick ${image === selectedImage ? 'selected-image' : ''}`} 
            onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductGallery