const express = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/eventController");


const eventRouter = express.Router();

// GET all events
eventRouter.get("/", getEvents);

// POST create event
eventRouter.post("/", createEvent);

// PUT update event by id
eventRouter.put("/:id", updateEvent);

// DELETE event by id
eventRouter.delete("/:id", deleteEvent);

module.exports = eventRouter;
