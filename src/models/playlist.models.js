/* playlists [icon: library] {
  id string pk
  owner ObjectId users
  videos ObjectId[] videos
  name string
  description string
  createdAt Date
  updatedAt Date
} */

import mongoose, { Schema } from 'mongoose';

const playlistSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    videos:[{
        type: Schema.Types.ObjectId,
        ref: 'Video'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

export const Playlist = mongoose.model('Playlist', playlistSchema);