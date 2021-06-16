// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.status(200).json({
    //section data
    homeGarden: {
      section: "Home and Garden",
      banner:
        "https://www.qubit.com/wp-content/uploads/2020/04/qubit-home-and-garden-header.jpg",
      categories: ["Transport", "Tools"],
      products: [
        {
          categories: ["Transport"],
          description: "Xiaomi Mi 1S Electric Scooter - Black",
          images: ["https://i.ibb.co/QmPrbxY/scooter.jpg"],
          name: "Electric Scooter",
          price: { value: 429, currency: "GBP" },
          productId: "439654",
          sku: "439654",
          stock: 1,
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Transport"],
          description: "RC 120 DISC ROAD BIKE, BLUE - MICROSHIFT",
          images: ["https://i.ibb.co/3cDyBKX/cycle.jpg"],
          name: "Road Cycle",
          price: { value: 499, currency: "GBP" },
          productId: "439655",
          sku: "439655",
          stock: 1,
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Tools"],
          description: "Garden Hand Trowel Shovel Spade Digging 400mm",
          images: ["https://i.ibb.co/kBGSsSp/shovel.jpg"],
          name: "Hand Shovel",
          price: { value: 19, currency: "GBP" },
          productId: "439656",
          sku: "439656",
          stock: 1,
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Tools"],
          description: "Essentials Garden Rake - Large",
          images: ["https://i.ibb.co/x7Wrzpg/rake.jpg"],
          name: "Garden Rake",
          price: { value: 29, currency: "GBP" },
          productId: "439657",
          sku: "439657",
          stock: 1,
          url: "https://qshopdemo.myshopify.com",
        },
      ],
    },
  })
}
