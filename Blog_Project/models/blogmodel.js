const mongoose = require("mongoose");

const Shcema = mongoose.Schema;
const BlogSchema = new Shcema({
  userName: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
