import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Clock, FileText, HelpCircle, Users, Eye, Target } from "lucide-react";
import nosotrosBg from "@/assets/nosotros-bg.png";

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${nosotrosBg})` }}
        />
        <div className="absolute inset-0 bg-[#c1b6a4]/40" />
        <div className="container-custom text-center relative z-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
            Experiencia 013
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground uppercase italic">
            Nosotros
          </h1>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border mb-6">
              <Users size={28} className="text-muted-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-light lowercase italic text-foreground mb-2">
              sobre nosotros
            </h2>
            <div className="w-12 h-px bg-[#c1b6a4] mx-auto mt-4 mb-8" />
          </div>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-center">
            <p>
              Experiencia 013 es un proyecto originario de Chihuahua, Chihuahua creado por{" "}
              <span className="text-foreground font-semibold">Karla y Mariana Elizondo</span>. Nos
              especializamos en la renta de mobiliario, mantelería y cristalería, ofreciendo opciones
              elegantes y de alta calidad que se adaptan a cada estilo y ocasión.
            </p>
            <p>
              Nuestro objetivo es brindarte no solo un servicio, si no una experiencia completa al
              momento de rentar cualquier elemento para tu evento. Ya sea una celebración íntima o un
              evento a gran escala, trabajamos contigo para lograr ambientes únicos, funcionales y
              llenos de estilo.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Misión */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c1b6a4] mb-6">
                <Target size={24} className="text-[#c1b6a4]" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light lowercase italic text-foreground mb-4">
                misión
              </h3>
              <div className="w-10 h-px bg-[#c1b6a4] mb-6 mx-auto md:mx-0" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Creamos experiencias memorables a través de la renta de variedad de mobiliario,
                mantelería y cristalería para todo tipo de eventos, ofreciendo tanto soluciones
                integrales como opciones de renta individual. Nos enfocamos en brindar calidad,
                profesionalismo, estilo y un servicio confiable, adaptándonos a las necesidades de
                cada cliente y cuidando cada detalle para que su evento luzca impecable.
              </p>
            </div>

            {/* Visión */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c1b6a4] mb-6">
                <Eye size={24} className="text-[#c1b6a4]" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light lowercase italic text-foreground mb-4">
                visión
              </h3>
              <div className="w-10 h-px bg-[#c1b6a4] mb-6 mx-auto md:mx-0" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Ser una empresa líder en el sector de eventos, reconocida por nuestro estilo, alta
                calidad y versatilidad en el servicio, destacando tanto en la creación de eventos
                completos como en la renta de mobiliario y accesorios de manera individual.
                Trabajamos continuamente en mejorar e innovar en nuestros productos y servicios para
                ofrecer siempre la mejor calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Horario */}
      <section className="section-padding bg-[#c1b6a4]">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-primary-foreground/40 mb-6">
                <Phone size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-light lowercase italic text-primary-foreground mb-4">
                contacto
              </h3>
              <p className="font-body text-primary-foreground/80 text-lg tracking-wide">
                (614) 101 7574
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-primary-foreground/40 mb-6">
                <Clock size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-light lowercase italic text-primary-foreground mb-4">
                horario
              </h3>
              <div className="font-body text-primary-foreground/80 text-sm space-y-1">
                <p>Lunes a viernes: 9:00 am – 1:00 pm, 2:00 pm – 5:00 pm</p>
                <p>Sábado: 9:00 am – 2:00 pm</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Políticas de Servicio */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border mb-6">
              <FileText size={28} className="text-muted-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light uppercase italic text-foreground">
              Políticas de Servicio
            </h2>
            <div className="w-12 h-px bg-[#c1b6a4] mx-auto mt-4" />
          </div>

          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="renta" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-lg italic hover:no-underline">
                Renta de Mobiliario y Equipo
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 font-body text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Pagos y reembolsos</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Para reservar fecha y mobiliario/equipo se requiere un anticipo del 50% del total de la cotización.</li>
                      <li>El saldo deberá liquidarse 2 días hábiles antes del evento.</li>
                      <li>En caso de requerir factura, esta deberá solicitarse únicamente al momento de realizar el pago, ya que no podrá emitirse posteriormente.</li>
                      <li>En caso de cancelación, no se realizará la devolución de los importes pagados ni podrán utilizarse para otro evento.</li>
                      <li>Una vez aceptada la cotización y entregado el mobiliario en el evento, no se realizarán cambios ni reembolsos por mobiliario o equipo no utilizado.</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="danos" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-lg italic hover:no-underline">
                Daños, pérdidas de mobiliario, equipo y accesorios
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>El cliente es responsable de devolver el mobiliario, equipo y accesorios completos y en las mismas condiciones en las que fueron entregados.</p>
                  <p>En caso de faltantes o daños, se cobrará el costo de reposición correspondiente.</p>
                  <p className="font-semibold text-foreground">Se considerará pérdida total en los siguientes casos:</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Daños ocasionados por uso indebido o irresponsable que imposibiliten su reutilización.</li>
                    <li>Mantelería, servilletas, tapicerías o mobiliario quemados, manchados con vino u otras sustancias similares.</li>
                    <li>Mobiliario de madera y/o tapicería mojada.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cargos" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-lg italic hover:no-underline">
                Cargos adicionales
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
                  <p>Adicional al costo de la renta, el cliente deberá cubrir los cargos extras generados por los siguientes servicios:</p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li>
                      <span className="font-semibold text-foreground">Flete:</span> Costo de envío del mobiliario/equipo. Se calcula en base a la cantidad, volumen y ubicación, y puede ajustarse en caso de agregar o eliminar mobiliario.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Maniobras:</span> Costo por montajes complejos que impliquen escaleras, elevadores de carga, pasillos reducidos, distancias largas u otras condiciones especiales. En caso de que estas condiciones no hayan sido informadas previamente, el cargo adicional deberá cubrirse al momento de la entrega. Se deberá contar con un acceso adecuado de mínimo 2 metros de ancho.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Montaje:</span> Costo por el acomodo del mobiliario conforme a las indicaciones del cliente. En caso de no contratar este servicio, el mobiliario se entregará acomodado o apilado, y el cliente será responsable de su acomodo final.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Entrega o recolección fuera de horario:</span> Costo adicional por entregas o recolecciones realizadas antes de las 10:00 am de lunes a sábado, después de las 5:00 pm de lunes a viernes, después de las 2:00 pm los sábados, o recolección en domingo.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fotos" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-lg italic hover:no-underline">
                Uso de material fotográfico
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Experiencia 013 se reserva el derecho de utilizar fotografías de los eventos para su publicación en redes sociales y página web.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-border mb-6">
              <HelpCircle size={28} className="text-muted-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light lowercase italic text-foreground">
              preguntas frecuentes
            </h2>
            <div className="w-12 h-px bg-[#c1b6a4] mx-auto mt-4" />
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="faq-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Puedo rentar aunque sea un evento chico?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  ¡Sí! Te apoyamos en tu evento independientemente del número de personas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Manejan coordinación de eventos o catering?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  No, nos especializamos en la renta de mobiliario, cristalería y decoración de un evento, más no contamos con servicio de coordinación de servicios externos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Ustedes montan la mesa o supervisan el montaje?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  Nos encargamos del montaje y supervisión de toda la mesa, sin embargo, puedes solicitar la opción únicamente de entrega y recolección.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Tienen entrega a domicilio?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  Sí, se cobra un servicio de flete y dependiendo del horario del servicio se cobrará un servicio de maniobras fuera de horario de trabajo. También puedes recoger y entregar en nuestra bodega si así lo deseas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Puedo separar artículos sin hacer pago de un anticipo?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  No, para separar los productos es indispensable contar con el 50% de anticipo. El resto de la cotización se liquida a más tardar 2 días antes del evento.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Puedo hacer cambios o cancelar mi pedido?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  Se podrá subir y bajar cantidades hasta 5 días antes del evento. En caso de cancelar el evento el pago no será reembolsable ni se podrá utilizar para otro evento.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Qué pasa si se rompe o pierde algo?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  Si existen faltantes o daños se cobrará el 100% del valor del artículo.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="font-display text-base italic hover:no-underline">
                ¿Puedo cambiar la fecha de mi evento?
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-sm text-muted-foreground">
                  Sí, siempre y cuando la fecha se encuentre disponible.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
