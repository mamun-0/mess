const mongoose = require("mongoose");
const Review = require("./review");
const { Schema } = mongoose;

const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  location: String,
  description: String,
  mobile: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

CampgroundSchema.post("findOneAndDelete", async function (document) {
  if (document) {
    await Review.deleteMany({
      _id: {
        $in: document.reviews,
      },
    });
  }
});
module.exports = mongoose.model("Campground", CampgroundSchema);
