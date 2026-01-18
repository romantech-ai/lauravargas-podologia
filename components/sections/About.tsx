'use client'
import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Formación actualizada',
    description: 'Grado en Podología con formación continua en las técnicas más avanzadas'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Trato cercano',
    description: 'Cada paciente recibe atención personalizada en un ambiente de confianza'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Instalaciones modernas',
    description: 'Clínica equipada con tecnología de última generación y máxima higiene'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Resultados garantizados',
    description: 'Seguimiento de cada tratamiento hasta lograr los mejores resultados'
  }
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-50 via-primary-100 to-accent-50 rounded-3xl overflow-hidden relative">
                {/* Abstract decorative background */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 300 400" fill="none">
                    <circle cx="150" cy="120" r="100" className="fill-primary-300" />
                    <circle cx="80" cy="300" r="60" className="fill-accent-200" />
                    <circle cx="220" cy="320" r="50" className="fill-primary-200" />
                    <circle cx="250" cy="80" r="30" className="fill-accent-300" />
                    <circle cx="50" cy="180" r="25" className="fill-primary-200" />
                  </svg>
                </div>
                {/* Professional avatar placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Avatar circle */}
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 shadow-xl flex items-center justify-center border-4 border-white/50">
                      <svg className="w-24 h-24 text-primary-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 004.58-4.74C16.75 4.13 14.62 2 12 2z"/>
                        <path d="M17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.71-2.37-1.96-3.21z"/>
                      </svg>
                    </div>
                    {/* Name badge */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-lg">
                      <p className="text-primary-600 font-semibold whitespace-nowrap">Laura Vargas</p>
                      <p className="text-gray-500 text-xs text-center">Podóloga</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/40 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="absolute bottom-20 left-6 w-14 h-14 bg-white/40 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-100 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-50 rounded-2xl -z-10" />

              {/* Experience badge */}
              <motion.div
                className="absolute -right-4 top-10 bg-white px-6 py-4 rounded-2xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600">Satisfacción</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Sobre mí
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hola, soy{' '}
              <span className="text-primary-600">Laura Vargas</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                Soy podóloga titulada con <strong className="text-gray-900">Grado en Podología</strong> y
                una pasión por el cuidado integral de los pies. Mi objetivo es que cada paciente
                salga de la consulta con la mejor solución para su problema.
              </p>
              <p className="leading-relaxed">
                Aunque soy joven, mi formación está completamente actualizada con las técnicas
                más modernas y efectivas del sector. Esto, combinado con mi trato cercano y
                la atención personalizada que ofrezco, hace que mis pacientes se sientan
                en las mejores manos.
              </p>
              <p className="leading-relaxed">
                En mi clínica en Alcázar de San Juan encontrarás un espacio <strong className="text-gray-900">moderno,
                seguro y acogedor</strong>, donde cada detalle está pensado para tu comodidad y bienestar.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors"
            >
              Conóceme en consulta
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
