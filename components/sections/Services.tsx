'use client'
import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Quiropodia',
    description: 'Tratamiento completo de callos, durezas, unas y cuidado general del pie. Ideal para mantenimiento regular.',
    price: 'Desde 25€',
    features: ['Corte y limado de unas', 'Eliminacion de callos', 'Tratamiento de grietas']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Unas Encarnadas',
    description: 'Tratamiento especializado con tecnicas minimamente invasivas y seguimiento personalizado.',
    price: 'Desde 35€',
    features: ['Diagnostico preciso', 'Reeducacion ungueal', 'Seguimiento incluido']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Estudio Biomecanico',
    description: 'Analisis completo de tu pisada para prevenir lesiones y mejorar tu rendimiento.',
    price: 'Desde 80€',
    features: ['Analisis de la marcha', 'Deteccion de desequilibrios', 'Informe detallado']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Plantillas Personalizadas',
    description: 'Plantillas a medida con materiales de alta calidad. Ajustes incluidos.',
    price: 'Desde 120€',
    features: ['Diseno a medida', 'Materiales premium', 'Garantia de confort']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Podologia Deportiva',
    description: 'Prevencion y tratamiento de lesiones para deportistas. Fascitis plantar, metatarsalgias.',
    price: 'Consultar',
    features: ['Prevencion de lesiones', 'Fascitis plantar', 'Asesoramiento calzado']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
      </svg>
    ),
    title: 'Pie Diabetico',
    description: 'Revisiones preventivas y tratamiento especializado. Coordinacion con otros especialistas.',
    price: 'Consultar',
    features: ['Revisiones periodicas', 'Tratamiento de ulceras', 'Educacion al paciente']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Papilomas/Verrugas',
    description: 'Diagnostico y multiples opciones de tratamiento. Seguimiento hasta resolucion.',
    price: 'Desde 60€',
    features: ['Diagnostico diferencial', 'Tratamiento efectivo', 'Seguimiento completo']
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Ortesis de Silicona',
    description: 'Protectores personalizados, separadores de dedos y correctores de juanetes.',
    price: 'Desde 35€',
    features: ['Protectores a medida', 'Separadores de dedos', 'Alivio inmediato']
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tratamientos especializados para tus pies
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos una amplia gama de servicios podologicos con la maxima profesionalidad y cuidado
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                  <div className="text-primary-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 bg-primary-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-primary-600 font-bold">{service.price}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Contacta con nosotros y te asesoramos
          </p>
          <motion.a
            href="https://wa.me/34659268858?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors"
          >
            Consultar disponibilidad
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
