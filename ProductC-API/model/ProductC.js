const productc = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    seller: {
        sellerName: { type: String, required: true },
        sellerId: { type: String, required: true },
        sellerEmail: { type: String, required: true },
        sellerPhone: { type: String, required: true },
        sellerAddress: { type: String, required: true },
        sellerCity: { type: String, required: true },
        sellerState: { type: String, required: true },
        sellerZip: { type: String, required: true },
        sellerCountry: { type: String, required: true },
        sellerRating: { type: Number, required: true },
        sellerReviews: { type: Number, required: true }
    },

    ratings: {
        productRating: { type: Number, required: true },
        productReviews: { type: Number, required: true },
        productStatus: { type: String, required: true },
        productCreated: { type: Date, required: true },
        productModified: { type: Date, required: true },
        productDeleted: { type: Date, required: true },
        productViews: { type: Number, required: true },
        productLikes: { type: Number, required: true },
        productDislikes: { type: Number, required: true },
        productComments: { type: Number, required: true },
        productShares: { type: Number, required: true },
        productTags: { type: String, required: true },
    },
    metadata:{
        productCategory: { type: String, required: true },
        productSubCategory: { type: String, required: true },
        productColor: { type: String, required: true },
        productSize: { type: String, required: true },
        productWeight: { type: String, required: true },
        productDimensions: { type: String, required: true },
        productShippingCharges: { type: String, required: true },
        productShippingWeight: { type: String, required: true },
        productShippingDimensions: { type: String, required: true },
        productShippingPickup: { type: String, required: true },

        productShippingFree: { type: String, required: true },
        productShippingDelivery: { type: String, required: true },
        productShippingDeliveryDays: { type: String, required: true },
        productShippingDeliveryCharges: { type: String, required: true },
        productShippingDeliveryBy: { type: String, required: true },
        productShippingDeliveryFrom: { type: String, required: true },
        productShippingDeliveryTo: { type: String, required: true },
        productShippingDeliveryType: { type: String, required: true },
        productShippingDeliveryExpress: { type: String, required: true }
    }
    });

    module.exports = {
        productc
      };
      
function sampleObject()
{
    newProducts = { 
        name: "Samsung Galaxy S10",
        price: 500,
        description: "Samsung Galaxy S10",
        image: "https://images-na.ssl-images-amazon.com/images/I/61CnyJ-IbML._SL1000_.jpg",
        category: "Electronics",
        quantity: 100,
        seller: {
            sellerName: "Samsung",
            sellerId: "1",
            sellerEmail: "hello@samsung.com",
            sellerPhone: "1234567890",
            sellerAddress: "Samsung",
            sellerCity: "Samsung",
            sellerState: "Samsung",
            sellerZip: "Samsung",
            sellerCountry: "Samsung",
            sellerRating: 5,
            sellerReviews: 100
        },
        ratings: {
            productRating: 5,
            productReviews: 100,
            productStatus: "Available",
            productCreated: "2019-03-01",
            productModified: "2019-03-01",
            productDeleted: "2019-03-01",
            productViews: 100,
            productLikes: 100,
            productDislikes: 100,
            productComments: 100,
            productShares: 100,
            productTags: "Samsung"
        },
        metadata:{
            productCategory: "Electronics",
            productSubCategory: "Mobile",
            productColor: "Black",
            productSize: "5.5",
            productWeight: "100g",
            productDimensions: "5.5",
            productShippingCharges: "Free",
            productShippingWeight: "100g",
            productShippingDimensions: "5.5",
            productShippingPickup: "Yes",
        
            productShippingFree: "Yes",
            productShippingDelivery: "Yes",
            productShippingDeliveryDays: "5",
            productShippingDeliveryCharges: "Free",
            productShippingDeliveryBy: "Amazon",
            productShippingDeliveryFrom: "Amazon",
            productShippingDeliveryTo: "Amazon",
            productShippingDeliveryType: "Fast",
            productShippingDeliveryExpress: "Yes"
        }

        return newProducts;
    }
}

// Path: ProductC-API/routes/api.js
