import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageGallery = () => {
  const images =[
    "https://i.ibb.co/NFf23Vt/e1e470-20166758171c456cb8f49be7f04a57cc-mv2.jpg",
    "https://i.ibb.co/WyJbCRH/e1e470-c02ceaf0053e499d889fe7badaefb81f-mv2-d-1912-2880-s-2.jpg",
    "https://i.ibb.co/5nHHR8g/e1e470-689d645274654fb893174f1cb4ba31d1-mv2.jpg",
    "https://i.ibb.co/9tyCS4N/e1e470-48817ed109e244f697cb867e6e854af2-mv2.jpg",
    "https://i.ibb.co/myP8wp1/e1e470-1ca429cfa6724c4b81492d3c0c1b0b34-mv2-d-4000-2667-s-4-2.jpg",
    "https://i.ibb.co/1KxmQwz/e1e470-945cff725948461ab11e3deb9ad56b97-mv2.jpg",
    "https://i.ibb.co/yNX36nn/e1e470-9d0fbbb25f2c43d9bfc0d6e780a3ab91-mv2.jpg",
    "https://i.ibb.co/ZMQ5VZb/e1e470-44fc84efe700462b896e69e1ea64b038-mv2.jpg",
    "https://i.ibb.co/0MtVzqK/e1e470-8c86d5755a8c440a8a571970d81b19ab-mv2-d-3264-2448-s-4-2.jpg",
    "https://i.ibb.co/JCsvkSj/e1e470-128bbbccb0d247709218ba9f37205c14-mv2.jpg",
    "https://i.ibb.co/FYX5MHk/e1e470-3e608c9a1bff42bd90a3f25497c2d366-mv2.jpg",
    "https://i.ibb.co/mNfqcDn/e1e470-6edc54bdc7334296a956a95864233afa.jpg",
    "https://i.ibb.co/Pcf0swY/e1e470-a817b83cbe024baabd31208f41830421-mv2.jpg",
    "https://i.ibb.co/f9n6HZt/e1e470-165a2e9d9e5b41a3878ae3d61fe52b10-mv2.jpg",
    "https://i.ibb.co/8BC18zg/9fbf96-154e7082ae624f6186e6bccb6317dbbb-mv2-d-4000-2667-s-4-2.jpg",
    "https://i.ibb.co/d7Y1KNd/e1e470-b210837119904e9a88376b55d59889cf-mv2-d-1912-2880-s-2.jpg",
    "https://i.ibb.co/wCYfL5S/e1e470-8ff01ed4c414484ab0be09684455fc28-mv2.jpg"
  ]

  return (
    <div className="max-w-screen-2xl py-28 container mx-auto xl:px-24 px-4">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <img
              src={image}
              key={i}
              alt={`Gallery image ${i + 1}`}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageGallery;
