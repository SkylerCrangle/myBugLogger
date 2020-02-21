import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//Notes can be created
//Notes can be removed from a bug


var note = new Schema({
  content: { type: String, required: true },
  bug: { type: ObjectId, required: true },
  reportedBy: { type: String, required: true } //The provided name for who made the note
}, { timestamps: true, toJSON: { virtuals: true } });

export default note;