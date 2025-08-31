import { useState } from "react";

function HiringWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // TODO: send to your backend / email service
      // await fetch("/api/hiring-agents", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Slide-out panel */}
      <div className={`hiring-widget__panel ${open ? "open" : ""}`} role="dialog" aria-label="Hiring Agents Contact Form">
        <div className="hiring-widget__header">
          <span>Hiring Agents</span>
          <button
            type="button"
            className="btn btn-sm btn-light"
            onClick={() => setOpen(false)}
            aria-label="Close contact form"
          >
            ✕
          </button>
        </div>

        <div className="p-3">
          {submitted ? (
            <div className="alert alert-success mb-3" role="alert">
              Thanks! We’ll reach out shortly.
            </div>
          ) : (
            <p className="mb-3">Share your details and we’ll get back to you.</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="ha-name" className="form-label">Name</label>
              <input
                id="ha-name"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="ha-email" className="form-label">Email</label>
              <input
                id="ha-email"
                name="email"
                type="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="ha-phone" className="form-label">Phone</label>
              <input
                id="ha-phone"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 (555) 555-5555"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ha-message" className="form-label">Message</label>
              <textarea
                id="ha-message"
                name="message"
                className="form-control"
                rows="3"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit about your profile"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={submitting}>
              {submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Floating “flash” button */}
      <button
        type="button"
        className="btn btn-primary hiring-widget__button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="hiring-widget"
        title="Hiring Agents"
      >
        🚀 Hiring Agents
      </button>
    </>
  );
}

export default HiringWidget;
