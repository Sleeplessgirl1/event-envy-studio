import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Instagram, Send } from "lucide-react";
// ... keep existing code
const heroImage = "/b0ed954a-3ddd-4aef-bd77-4a729f5000d9.jpg";
// ... keep existing code

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
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Contacto - Experiencia 013"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-dark/40 py-0 mb-[18px]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-light italic text-white uppercase tracking-[0.15em]">
            Contacto
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <p className="text-center text-muted-foreground font-body mb-8">
            Cuéntanos sobre tu evento y te asesoramos
          </p>
          <div className="w-16 h-0.5 bg-[#c1b6a4] mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Nombre *</label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:border-[#c1b6a4] transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:border-[#c1b6a4] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:border-[#c1b6a4] transition-colors"
                    placeholder="614 000 0000"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Tipo de Evento</label>
                <select
                  value={form.tipoEvento}
                  onChange={(e) => setForm({ ...form, tipoEvento: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:border-[#c1b6a4] transition-colors"
                >
                  <option value="">Selecciona un tipo</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Mensaje</label>
                <textarea
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:border-[#c1b6a4] transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu evento..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase px-8 py-3 bg-[#c1b6a4] text-white transition-all duration-300 hover:bg-brown"
              >
                <Send size={16} />
                Enviar Consulta
              </button>
            </form>

            {/* Info Panel */}
            <div className="lg:col-span-2 bg-card rounded-lg p-8">
              <h2 className="font-display text-xl font-light text-foreground mb-6">Información</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#c1b6a4] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Ubicación</p>
                    <p className="font-body text-sm text-muted-foreground">Chihuahua, Chihuahua, México</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-[#c1b6a4] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Teléfono</p>
                    <a href="tel:6141017574" className="font-body text-sm text-muted-foreground hover:text-[#c1b6a4] transition-colors">
                      614 101 75 74
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={20} className="text-[#c1b6a4] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Instagram</p>
                    <a
                      href="https://www.instagram.com/experiencia.013?igsh=MXh1Z3ZwOGs2bnJ6Mw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-muted-foreground hover:text-[#c1b6a4] transition-colors"
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