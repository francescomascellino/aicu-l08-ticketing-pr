import { useEffect, useMemo, useState } from "react";
import { fetchOpenTickets, fetchTicketOptions } from "./api.js";
import TicketList from "./components/TicketList.jsx";
import TicketForm from "./components/TicketForm.jsx";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [options, setOptions] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const forceEmpty = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("empty") === "true";
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadTickets() {
      try {
        setStatus("loading");
        const data = await fetchOpenTickets({ empty: forceEmpty });

        if (!ignore) {
          setTickets(data);
          setStatus("ready");
        }
      } catch (fetchError) {
        if (!ignore) {
          setError(fetchError.message);
          setStatus("error");
        }
      }
    }

    loadTickets();

    return () => {
      ignore = true;
    };
  }, [forceEmpty]);

  useEffect(() => {
    async function loadOptions() {
      try {
        const data = await fetchTicketOptions();
        setOptions(data);
      } catch {
        setOptions(null);
      }
    }

    loadOptions();
  }, []);

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Support Ops</p>
          <h1>Dashboard ticket</h1>
        </div>
        <div className="header-actions">
          <span className="environment-badge">Modulo 02 - Lab 08</span>
          <button
            className="create-ticket-btn"
            disabled={status !== "ready" || showForm}
            onClick={() => setShowForm(true)}
          >
            + Crea Ticket
          </button>
        </div>
      </header>

      {showForm ? (
        <TicketForm
          priorities={options?.priorities ?? []}
          areas={options?.areas ?? []}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <>
          {status === "loading" && <p className="state-message">Caricamento ticket...</p>}
          {status === "error" && <p className="state-message state-message--error">{error}</p>}
          {status === "ready" && <TicketList tickets={tickets} />}
        </>
      )}
    </main>
  );
}
