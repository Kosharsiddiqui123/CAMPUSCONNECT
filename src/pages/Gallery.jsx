import React, { useState, useEffect } from 'react';
import '../css/Gallery.css';
import eventsData from '../data/eventsData.json';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filterType, setFilterType] = useState('year');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Map eventsData.json into gallery format
    const mappedImages = eventsData.map((event) => ({
      id: event.id,
      src: event.image,
      title: event.title,
      year: new Date(event.date).getFullYear().toString(), // extract year from date
      category: event.category,
    }));
    setImages(mappedImages);
  }, []);

  const years = [...new Set(images.map((image) => image.year))];
  const categories = [...new Set(images.map((image) => image.category))];

  const filteredImages =
    selectedFilter === 'all'
      ? images
      : images.filter((image) =>
        filterType === 'year'
          ? image.year === selectedFilter
          : image.category === selectedFilter
      );

  const openLightbox = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1> 📸Event Gallery</h1>
      </div>

      <div className="filter-section">
        <div className="filter-tabs">
          <button
            className={filterType === 'year' ? 'active' : ''}
            onClick={() => {
              setFilterType('year');
              setSelectedFilter('all');
            }}
          >
            Filter by Year
          </button>
          <button
            className={filterType === 'category' ? 'active' : ''}
            onClick={() => {
              setFilterType('category');
              setSelectedFilter('all');
            }}
          >
            Filter by Category
          </button>
        </div>

        <div className="filter-options">
          <button
            className={selectedFilter === 'all' ? 'active' : ''}
            onClick={() => setSelectedFilter('all')}
          >
            All {filterType === 'year' ? 'Years' : 'Categories'}
          </button>

          {(filterType === 'year' ? years : categories).map((item) => (
            <button
              key={item}
              className={selectedFilter === item ? 'active' : ''}
              onClick={() => setSelectedFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-container">
        {filteredImages.length > 0 ? (
          <div className="image-grid">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="image-card"
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                  <p>
                    {image.year} • {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-images">
            <p>No images found for the selected filter.</p>
          </div>
        )}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeLightbox}>
              ×
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.title} />
            <div className="lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>
                {lightboxImage.year} • {lightboxImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
