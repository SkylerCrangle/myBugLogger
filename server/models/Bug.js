import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Bugs have last modified date
//Bugs can be created
//Bugs can be closed
//Bugs are closed, not deleted
//A Bug can be edited
//Cannot edit a Bug after it is closed


var bug = new Schema(
  {
    closed: { type: Boolean, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true },
    reportedBy: { type: String, required: true }, //The provided name for who reported the bug
    closedDate: { type: Date, required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
);

export default bug;

