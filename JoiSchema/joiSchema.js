const Joi = require("joi");
module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().min(0).required(),
    image: Joi.string(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    mobile: Joi.string().required(),
  }).required(),
});
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    body: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
  }).required(),
});
