import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Instagram, Send } from "lucide-react";

const WHATSAPP_NUMBER = "6141017574";
const eventTypes = ["Boda", "Baby Shower", "Cumpleaños", "Corporativo", "Otro"];

const ContactoPage = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Experiencia 013, mi nombre es ${form.nombre}.\n\nTipo de evento: ${form.tipoEvento}\nEmail: ${form.email}\nTeléfono: ${form.telefono}\n\nMensaje: ${form.mensaje}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">Contacto</h1>
          <p className="text-center text-muted-foreground font-body mb-8">
            Cuéntanos sobre tu evento y te asesoramos
          </p>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div>
                <label className="block font-body text-sm font-semibold mb-1.5">Nombre *</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-semibold mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold mb-1.5">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                    placeholder="614 000 0000"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-semibold mb-1.5">Tipo de Evento</label>
                <select
                  value={form.tipoEvento}
                  onChange={(e) => setForm({ ...form, tipoEvento: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">Selecciona un tipo</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-semibold mb-1.5">Mensaje</label>
                <textarea
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu evento..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 font-body text-sm tracking-widest uppercase px-8 py-3 bg-secondary text-secondary-foreground rounded-sm transition-all duration-300 hover:bg-garnet"
              >
                <Send size={16} />
                Enviar Consulta
              </button>
            </form>

            {/* Info Panel */}
            <div className="lg:col-span-2 bg-card rounded-lg p-8">
              <h2 className="font-display text-xl font-semibold mb-6">Información</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold">Ubicación</p>
                    <p className="font-body text-sm text-muted-foreground">Chihuahua, Chihuahua, México</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold">Teléfono</p>
                    <a href="tel:6141017574" className="font-body text-sm text-muted-foreground hover:text-secondary transition-colors">
                      614 101 75 74
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={20} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold">Instagram</p>
                    <a
                      href="https://www.instagram.com/experiencia.013?igsh=MXh1Z3ZwOGs2bnJ6Mw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-secondary transition-colors"
                    >
                      @experiencia.013
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactoPage;
