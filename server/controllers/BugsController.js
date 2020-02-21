import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService"

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll) //DONE returns a list of all the bugs 
      .get("/:id", this.getById)//DONE returns a single bug with all it's data
      .get("/:id/notes", this.getNotesByBugId)//DONE returns all notes for a given bug id
      .post("", this.create)//DONE creates a new bug
      .put("/:id", this.edit)//DONE edits bug


      .delete("/:id", this.delete);//changes status to closed and no further editing
    //delete--- /bugs/:id/notes/:id: Deletes note.
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await bugsService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getNotesByBugId(req, res, next) {
    try {
      let data = await notesService.findNotesByBugId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }


  async getCommentsWritenBy(req, res, next) {
    try {
      let data = await notesService.getEverythingWritenBy(req.params.author);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await bugsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await bugsService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await bugsService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  } s

}
