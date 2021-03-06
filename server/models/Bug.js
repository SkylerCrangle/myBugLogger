import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

//Bugs have last modified date
//Bugs can be created
//Bugs can be closed
//Bugs are closed, not deleted
//A Bug can be edited
//Cannot edit a Bug after it is closed


var bug = new Schema(
  {
    closed: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    title: { type: String, required: true },
    reportedBy: { type: String, required: true, default: "Anonymous" }, //The provided name for who reported the bug
    closedDate: Date,
    id: ObjectId
  }, { timestamps: true, toJSON: { virtuals: true } }
);

export default bug;

