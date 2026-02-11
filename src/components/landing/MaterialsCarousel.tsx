import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const materials = [
    {
        id: 'madera',
        title: 'Madera Nativa',
        description: 'Nobleza y carácter único. Para quienes buscan vetas vivas y calidez eterna. Trabajamos con maderas seleccionadas por su veta y estabilidad.',
        stats: { Origen: 'Nacional', Densidad: 'Alta', Durabilidad: 'Vitalicia' },
        image: '/images/hero.png'
    },
    {
        id: 'rustica',
        title: 'Línea Rústica',
        description: 'Pintada a mano, imperfección controlada que aporta historia y calidez artesanal a cada pieza de mobiliario.',
        stats: { Acabado: 'Manual', Estilo: 'Provenzal', Capas: 'Múltiples' },
        image: '/images/cocina.png'
    },
    {
        id: 'melamina',
        title: 'Melamina High-End',
        description: 'Tecnología antibacteriana y texturas sincronizadas para alto tráfico. La versatilidad moderna sin comprometer la estética premium.',
        stats: { Resistencia: 'UV/Impacto', Textura: 'Sincro', Mantenimiento: 'Bajo' },
        image: '/images/comoda.png'
    }
];

export default function MaterialsCarousel() {
    const [active, setActive] = useState(materials[0]);

    return (
        <section id="materiales" className="py-24 px-6 bg-bg-forest text-bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <span className="font-sans text-xs tracking-[0.4em] uppercase opacity-50 mb-4 block">Materialoteca</span>
                        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Materiales <br /> Honestos.</h2>
                        <p className="font-sans text-bg-cream/70 text-lg mb-12 max-w-md">
                            No escondemos de qué están hechos nuestros muebles. <span className="text-accent-gold">Lo celebramos</span> como parte de nuestro legado.
                        </p>

                        <div className="flex flex-col gap-2">
                            {materials.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setActive(m)}
                                    className={`text-left p-6 transition-all duration-500 border-l group ${active.id === m.id ? 'border-accent-gold bg-white/5' : 'border-white/10 opacity-40 hover:opacity-80'
                                        }`}
                                >
                                    <h3 className={`font-serif text-3xl transition-all ${active.id === m.id ? 'translate-x-2' : ''}`}>{m.title}</h3>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative flex items-center justify-center">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-gold/5 blur-[100px] rounded-full"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="w-full relative z-10"
                            >
                                <div className="bg-bg-cream/5 backdrop-blur-xl p-10 md:p-16 shadow-2xl border border-white/10 rounded-sm">
                                    <div className="aspect-video mb-12 overflow-hidden rounded-sm shadow-inner group">
                                        <img
                                            src={active.image}
                                            alt={active.title}
                                            className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-110 transition-transform duration-[2000ms]"
                                        />
                                    </div>

                                    <blockquote className="font-serif text-2xl italic leading-relaxed mb-12 text-bg-cream/90">
                                        "{active.description}"
                                    </blockquote>

                                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
                                        {Object.entries(active.stats).map(([k, v]) => (
                                            <div key={k}>
                                                <span className="block font-sans text-[10px] uppercase tracking-widest opacity-40 mb-2">{k}</span>
                                                <span className="block font-serif text-xl text-accent-gold">{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
