import React from "react";

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: "banner1.jpg",
      caption: "Welcome to our Swiggy Clone App!",
    },
    {
      id: 2,
      image: "banner2.jpg",
      caption: "Delicious food delivered to your doorstep.",
    },
    {
      id: 3,
      image: "birthday-banner.jpg",
      caption: "Order for a special birthday celebration!",
    },
    {
      id: 4,
      image: "valentines-banner.jpg",
      caption: "Celebrate Valentine's Day with our exclusive menu!",
    },
    {
      id: 5,
      image: "summer-banner.jpg",
      caption: "Cool off with our refreshing summer specials!",
    },
    // Add more banners as needed
  ];

  return (
    <div className="banner-container">
      {banners.map((banner) => (
        <div key={banner.id} className="banner-item">
          <img src={process.env.PUBLIC_URL + `/banners/${banner.image}`} alt={banner.caption} />
          <p>{banner.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Banner;