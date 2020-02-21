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
    return await _repository.findByIdAndUpdate(id, update, { new: true })

  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);

  }
}


const bugsService = new BugsService();
export default bugsService;
