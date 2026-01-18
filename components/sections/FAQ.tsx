'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: '¿Necesito cita previa?',
    answer: 'Sí, trabajamos con cita previa para poder dedicarte el tiempo que mereces. Puedes pedir cita fácilmente por WhatsApp o teléfono.'
  },
  {
    question: '¿Cuánto dura una sesión de quiropodia?',
    answer: 'Una sesión de quiropodia dura aproximadamente 30-45 minutos, dependiendo del estado de tus pies y los tratamientos necesarios.'
  },
  {
    question: '¿Cada cuánto debo hacerme una quiropodia?',
    answer: 'Lo recomendable es cada 4-6 semanas para mantener la salud de tus pies en óptimas condiciones. En casos especiales como pie diabético, puede ser más frecuente.'
  },
  {
    question: '¿Las plantillas están incluidas en el estudio biomecánico?',
    answer: 'El estudio biomecánico y las plantillas son servicios separados. El estudio nos permite determinar qué tipo de plantilla necesitas, y luego las fabricamos a medida.'
  },
  {
    question: '¿Tratáis a niños?',
    answer: 'Sí, atendemos pacientes de todas las edades. Es importante revisar los pies de los niños para prevenir problemas en su desarrollo.'
  },
  {
    question: '¿Qué formas de pago aceptáis?',
    answer: 'Aceptamos efectivo, tarjeta de crédito/débito y Bizum para tu comodidad.'
  },
  {
    question: '¿Tenéis convenio con seguros médicos?',
    answer: 'Actualmente no tenemos convenio con aseguradoras, pero te proporcionamos factura para que puedas solicitar el reembolso si tu seguro lo cubre.'
  },
  {
    question: '¿Qué hago si tengo una urgencia?',
    answer: 'Para urgencias podológicas, contáctanos por WhatsApp o teléfono e intentaremos atenderte lo antes posible, incluso el mismo día si hay disponibilidad.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Resolvemos tus dudas más comunes. Si no encuentras lo que buscas, no dudes en contactarnos.
            </p>
            <p className="text-gray-600">
              ¿Tienes otra pregunta?{' '}
              <a
                href="https://wa.me/34659268858?text=Hola%2C%20tengo%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:underline"
              >
                Escríbenos por WhatsApp
              </a>
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
