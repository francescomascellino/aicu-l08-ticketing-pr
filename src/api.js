export async function fetchOpenTickets({ empty = false } = {}) {
  const params = new URLSearchParams();

  if (empty) {
    params.set("empty", "true");
  }

  const query = params.toString();
  const response = await fetch(`/api/tickets${query ? `?${query}` : ""}`);

  if (!response.ok) {
    throw new Error("Impossibile caricare i ticket aperti.");
  }

  return response.json();
}

export async function fetchTicketOptions() {
  const response = await fetch("/api/ticket-options");

  if (!response.ok) {
    throw new Error("Impossibile caricare le opzioni.");
  }

  return response.json();
}
