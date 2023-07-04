import React, { useEffect, useState } from "react";
import Image from "next/image";

const accessKey = "uD9d2RZX8iss1OL84J5N0OtjQ07u-l6jRVyMDAXxSD0";
const count = 5; // Number of random images to fetch

// Interface for the image object
interface UnsplashImage {
  urls: {
    regular: string;
  };
  width: number;
  height: number;
}

const pinContainerStyles = {
  margin: 0,
  padding: 0,
  width: "30vw",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 250px)",
  gridAutoRows: "10px",
  justifyContent: "center",
};

const Feed: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    fetchRandomImages()
      .then((data: UnsplashImage[]) => setImages(data))
      .catch((error) => console.error("Error fetching random images:", error));
  }, []);

  const fetchRandomImages = async (): Promise<UnsplashImage[]> => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`
      );
      const data: UnsplashImage[] = (await response.json()) as UnsplashImage[];

      return data;
    } catch (error) {
      console.error("Error fetching random images:", error);
      throw error;
    }
  };

  return (
    <div style={pinContainerStyles}>
      {images.map((image) => (
        <Image
          key={image.urls.regular}
          src={image.urls.regular}
          alt="unsplash"
          className="rounded-md"
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
};

export default Feed;
