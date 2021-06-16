// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  res.status(200).json({
    //section data
    beauty: {
      section: "Beauty",
      banner:
        "https://www.qubit.com/wp-content/uploads/2018/11/Qubit_Solution_Beauty_02.jpg",
      categories: ["Skincare", "Makeup", "Fragrance"],
      products: [
        {
          categories: ["Skincare"],
          description:
            "Gentle exfoliator sweeps away dulling flakes. Preps skin for moisturizer.",
          images: ["https://i.ibb.co/2dkChYJ/lotion.jpg"],
          name: "Clarifying Lotion",
          price: { currency: "GBP", value: 17 },
          productId: "PROD15501",
          sku: "SKU31720",
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Skincare"],
          description: "Body moisturising lotion.",
          images: ["https://i.ibb.co/9pW9V85/bod.jpg"],
          name: "Body Lotion",
          price: { currency: "GBP", value: 12 },
          productId: "PROD15502",
          sku: "SKU31721",
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Makeup"],
          description: "Universal brushes for putting on make up.",
          images: ["https://i.ibb.co/KxY3676/brushes.jpg"],
          name: "Makeup Brushes",
          price: { currency: "GBP", value: 20 },
          productId: "PROD15503",
          sku: "SKU31722",
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Makeup"],
          description: "Pink lipstick for your lips.",
          images: ["https://i.ibb.co/Df19fcy/lipstick.jpg"],
          name: "Lipstick",
          price: { currency: "GBP", value: 15 },
          productId: "PROD15504",
          sku: "SKU31723",
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Fragrance"],
          description: "Fragrant perfume for women.",
          images: ["https://i.ibb.co/Rh9rS6z/perfume1.jpg"],
          name: "Women's Scent",
          price: { currency: "GBP", value: 79 },
          productId: "PROD15505",
          sku: "SKU31724",
          url: "https://qshopdemo.myshopify.com",
        },
        {
          categories: ["Fragrance"],
          description: "Fragrant perfume for men.",
          images: ["https://i.ibb.co/wYTKWHK/perfume2.jpg"],
          name: "Men's Scent",
          price: { currency: "GBP", value: 50 },
          productId: "PROD15506",
          sku: "SKU31724",
          url: "https://qshopdemo.myshopify.com",
        },
      ],
    },
  })
}
