const API_BASE = `${import.meta.env.VITE_API_HOST}/api/event`;

async function handleResponse(res) {
  if (!res.ok) {
    const message = await res.text();
    throw new Error(`${res.status}: ${message}`);
  }
  return res.json();
}

export async function getEvents() {
  const res = await fetch(API_BASE);
  return handleResponse(res);
}

export async function createEvent(eventData) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  return handleResponse(res);
}

export async function updateEvent(eventId, eventData) {
  const res = await fetch(`${API_BASE}/${eventId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  return handleResponse(res);
}

export async function deleteEvent(eventId) {
  const res = await fetch(`${API_BASE}/${eventId}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Failed to delete event: ${res.status}`);
  return true;
}
