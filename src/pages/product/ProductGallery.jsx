import React, {useState, useEffect} from 'react';

function ProductGallery({product, server}) {
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
        <img src={`${server}${selectedImage}?width=600`} className="focused-image" />
        <div style={{ display: 'flex' }}>
          {product?.images?.map((image) => (
            <img 
            src={`${server}${image}?width=600`} 
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