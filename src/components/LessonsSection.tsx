
import { Play } from "lucide-react";

export const LessonsSection = () => {
  const lessons = [
    {
      title: "Aula 1 – O Despertar da Nova Mulher Empreendedora",
      description: "Descubra como desenvolver a mentalidade certa para empreender com confiança e determinação.",
      duration: "10 min"
    },
    {
      title: "Aula 2 – Mentalidade: O Que Separa Quem Fatura de Quem Desiste",
      description: "Aprenda a reconhecer e validar oportunidades de negócio no seu nicho de mercado.",
      duration: "12 min"
    },
    {
      title: "Aula 3 – O Mapa de Ação Para Começar do Zero Ainda Hoje",
      description: "Um guia prático para tirar sua ideia do papel e começar a empreender do zero.",
      duration: "15 min"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-wine">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-center mb-8 md:mb-12 text-gold px-2">
          Suas Aulas Gratuitas
        </h3>
        
        <div className="space-y-6 md:space-y-8">
          {lessons.map((lesson, index) => (
            <div 
              key={index}
              className="bg-wine-light/40 backdrop-blur-sm rounded-2xl border-2 border-gold/30 p-4 md:p-6 lg:p-8 hover:border-gold/60 transition-all duration-300 hover:transform hover:scale-[1.02] mx-2"
            >
              <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <div className="w-full max-w-sm lg:w-64 h-32 md:h-36 lg:h-40 bg-wine-dark rounded-xl border-2 border-gold/50 flex items-center justify-center group cursor-pointer hover:bg-wine-dark/80 transition-colors mx-auto">
                    <Play className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-gold group-hover:scale-110 transition-transform" fill="currentColor" />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left w-full">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-2 lg:gap-3 mb-3 md:mb-4">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-playfair font-semibold text-white leading-tight">
                      {lesson.title}
                    </h4>
                    <span className="bg-gold text-wine text-sm font-semibold px-3 py-1 rounded-full mx-auto lg:mx-0 w-fit">
                      {lesson.duration}
                    </span>
                  </div>
                  
                  <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed px-2 lg:px-0">
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
