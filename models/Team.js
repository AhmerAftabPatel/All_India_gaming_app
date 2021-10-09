const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  users: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
      },
      role : {
          type : String,
          required : true,
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  disliked: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('team', TeamSchema);
