import express from "express";
import notesService from "../services/NotesService";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)//DONE
      .get("/:id", this.getNotesById)//DONE
      .post("", this.makeNote) //DONE adds a new note to the bug
      .delete("/:id", this.deleteNote)//DONE
  }

  async getAll(req, res, next) {
    try {
      let data = await notesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getNotesById(req, res, next) {
    try {
      let data = await notesService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async makeNote(req, res, next) {
    try {
      let data = await notesService.create(req.body);
      res.status(201).send(data);

    }
    catch (error) {
      next(error);
    }
  }

  async deleteNote(req, res, next) {
    try {
      await notesService.findByIdandDelete(req.params.id);
      res.send("delorted");
    } catch (error) {
      next(error);
    }
  }

  //sends 4 functions to the notes service
}
