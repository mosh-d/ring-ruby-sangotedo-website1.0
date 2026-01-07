export const generateHotelSchema = (hotelData = {}) => {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Ring Ruby Hotel Value County",
    description:
      "Luxury hotel accommodation in Lekki, Lagos. Experience comfort and excellent service at Ring Ruby Hotel Lekki.",
    url: "https://ringrubyvaluecounty.fivecloverhotels.com",
    logo: "https://ringrubyvaluecounty.fivecloverhotels.com/ring%20ruby%20logo.webp",
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "6, Mary Ilusemiti Street, Ogidan., Lekki",
      addressLocality: "Lagos",
      postalCode: "100001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.41222",
      longitude: "4.0947",
    },
    telephone: "+2349111871249",
    email: "info@fivecloverhotel.com",
    sameAs: [
      "https://www.facebook.com/RingrubyHotel?_rdc=1&_rdr#",
      "https://www.instagram.com/ringruby_hotel/",
      "https://twitter.com/fivecloverhotel",
      "https://www.tiktok.com/@ringrubyhotels",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return JSON.stringify({ ...defaultData, ...hotelData });
};

export const generateBreadcrumbSchema = (items = []) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ringrubyvaluecounty.fivecloverhotels.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rooms",
      item: "https://ringrubyvaluecounty.fivecloverhotels.com/rooms",
    },
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.length > 0 ? items : defaultItems,
  };

  return JSON.stringify(breadcrumbList);
};
