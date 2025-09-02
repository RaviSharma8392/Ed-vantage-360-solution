// src/hooks/useEvents.js
import { useEffect, useState } from "react";
import * as eventService from "../service/eventService";

export function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const data = await eventService.getEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // CRUD handlers
  const addEvent = async (eventData) => {
    const newEvent = await eventService.createEvent(eventData);
    setEvents((prev) => [...prev, newEvent]);
  };

  const editEvent = async (eventId, updatedData) => {
    const updated = await eventService.updateEvent(eventId, updatedData);
    setEvents((prev) =>
      prev.map((ev) => (ev.id === updated.id ? updated : ev))
    );
  };

  const removeEvent = async (eventId) => {
    console.log(eventId);
    await eventService.deleteEvent(eventId);
    setEvents((prev) => prev.filter((ev) => ev.id !== eventId));
  };

  return { events, loading, error, addEvent, editEvent, removeEvent };
}
