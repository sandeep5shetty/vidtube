/* likes [icon: thumbs-up] {
  id string pk
  video ObjectId videos
  comment ObjectId comments
  tweet ObjectId tweets
  likedBy ObjectId users
  createdAt Date
  updatedAt Date
} */

import momgoose, { Schema } from 'mongoose';

const likeSchema = new Schema({
    // either of 'video', 'comment' or 'tweet' must be present
    // but not all three at the same time
    //others will be null

    video: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        default: null
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    },
    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

export const Like = momgoose.model('Like', likeSchema);