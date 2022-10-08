export interface ImageCarouselProps {
  imageUrls: string[];
}

export const ImageCarousel = ({ imageUrls }: ImageCarouselProps) => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      {imageUrls.map((imageUrl) => (
        <div key={imageUrl} className="carousel-item">
          <img src={imageUrl} className="rounded-box" />
        </div>
      ))}
    </div>
  );
};
