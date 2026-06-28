import { useState } from "react";

const PRIORITY_OPTIONS = ["Alta", "Media", "Bassa"];
const AREA_OPTIONS = ["Billing", "Accessi", "Comunicazioni", "Tecnico"];

const INITIAL_FORM = {
  title: "",
  description: "",
  customer: "",
  priority: "",
  area: "",
};

export default function TicketForm({ onCancel }) {
  const [formData, setFormData] = useState({ ...INITIAL_FORM });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setFormData({ ...INITIAL_FORM });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Ticket form data:", JSON.stringify(formData, null, 2));
  }

  return (
    <section className="ticket-form-wrapper" aria-labelledby="create-ticket-title">
      <div className="section-heading">
        <div>
          <h1 id="create-ticket-title">Nuovo ticket</h1>
          <p>Inserisci i dati per aprire una nuova richiesta.</p>
        </div>
      </div>

      <form className="ticket-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="field-title">
            Title <span className="form-required">*</span>
          </label>
          <input
            id="field-title"
            className="form-input"
            name="title"
            value={formData.title}
            onChange={handleChange}
            maxLength={100}
            placeholder="Titolo della richiesta"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="field-description">
            Description
          </label>
          <textarea
            id="field-description"
            className="form-textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength={3000}
            rows={4}
            placeholder="Descrivi il problema (opzionale)"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="field-customer">
              Customer
            </label>
            <input
              id="field-customer"
              className="form-input"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              placeholder="Nome cliente"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="field-priority">
              Priority
            </label>
            <select
              id="field-priority"
              className="form-select"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="">-- Seleziona --</option>
              {PRIORITY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="field-area">
            Area
          </label>
          <select
            id="field-area"
            className="form-select"
            name="area"
            value={formData.area}
            onChange={handleChange}
          >
            <option value="">-- Seleziona --</option>
            {AREA_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn--primary">
            Invia Ticket
          </button>
          <button type="button" className="btn btn--secondary" onClick={handleReset}>
            Resetta campi
          </button>
          <button type="button" className="btn btn--danger" onClick={onCancel}>
            Annulla
          </button>
        </div>
      </form>
    </section>
  );
}
