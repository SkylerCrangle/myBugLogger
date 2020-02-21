import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


var note = new Schema({
  content: String,
  bug: ObjectId,
  reportedBy: String, //The provided name for who made the note
}, { timestamps: true, toJSON: { virtuals: true } });

export default note;