import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }


  async findById(id) {
    return await _repository.findById(id);
  }

  async create(body) {
    return await _repository.create(body);
  }

  async update(id, update) {
    let data = await _repository.findById(id)
    if (data.closed) {
      return "this bug is closed"
    } else {
      return await _repository.findByIdAndUpdate(id, update, { new: true })
    }
    //NOTE Alternative
    // let bug = await _repository.findOneAndUpdate({ _id: id, closed: false }, update, { new: true })
    // if (!bug) {
    //   return "this bug is closed"
    // }
    // return bug
  }
  async delete(id) {
    return await _repository.findByIdAndUpdate(id, { closed: true }, { new: true })

  }
}

//checks out there are 5 functions here

const bugsService = new BugsService();
export default bugsService;
