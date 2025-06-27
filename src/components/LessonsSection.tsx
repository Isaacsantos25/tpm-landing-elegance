
import { Play } from "lucide-react";

export const LessonsSection = () => {
  const lessons = [
    {
      title: "Aula 1: Mindset Empreendedor",
      description: "Descubra como desenvolver a mentalidade certa para empreender com confiança e determinação.",
      duration: "25 min"
    },
    {
      title: "Aula 2: Identificando Oportunidades",
      description: "Aprenda a reconhecer e validar oportunidades de negócio no seu nicho de mercado.",
      duration: "30 min"
    },
    {
      title: "Aula 3: Primeiros Passos",
      description: "Um guia prático para tirar sua ideia do papel e começar a empreender do zero.",
      duration: "35 min"
    }
  ];

  return (
    <section className="py-16 px-4 bg-wine">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 text-gold">
          Suas Aulas Gratuitas
        </h3>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {lessons.map((lesson, index) => (
            <div 
              key={index}
              className="bg-wine-light/40 backdrop-blur-sm rounded-2xl border-2 border-gold/30 p-8 hover:border-gold/60 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-64 h-40 bg-wine-dark rounded-xl border-2 border-gold/50 flex items-center justify-center group cursor-pointer hover:bg-wine-dark/80 transition-colors">
                    <Play className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" fill="currentColor" />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <h4 className="text-2xl font-playfair font-semibold text-white">
                      {lesson.title}
                    </h4>
                    <span className="bg-gold text-wine text-sm font-semibold px-3 py-1 rounded-full">
                      {lesson.duration}
                    </span>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
