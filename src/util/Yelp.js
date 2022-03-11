const apiKey = "ocL8Os1t-DvJqjnt_fX_-KQyi-jLUOoogGnY--EZ3n5FuTVZFPYYvPAuS3xzyKjgM19o_HFpGPHT3IBg3mxzg5Q2bE9Lz1kcGWvd4hh0iSELtC5IeK7rqyAV_nArYnYx";

const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    const jsonResponse = await response.json();
    try {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          };
        });
      } else {
        console.log("hello world");
      }
    } catch (e) {
      console.error(`Hello World ${e}`);
    }
  },
};

export default Yelp;