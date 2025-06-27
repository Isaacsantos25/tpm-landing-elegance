
import { ArrowRight, Star } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-wine to-wine-dark">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-wine-light/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border-2 border-gold/30 mx-2">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gold fill-current" />
              ))}
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-playfair font-bold mb-4 md:mb-6 text-white leading-tight px-2">
            Gostou do conteúdo?
          </h3>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gold-light mb-6 md:mb-8 font-medium px-2">
            Avance para o treinamento completo TPM e transforme sua vida profissional.
          </p>
          
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
            <p className="text-white/90 text-sm md:text-base lg:text-lg">
              ✨ Acesso vitalício ao curso completo
            </p>
            <p className="text-white/90 text-sm md:text-base lg:text-lg">
              ✨ Comunidade exclusiva de mulheres empreendedoras
            </p>
            <p className="text-white/90 text-sm md:text-base lg:text-lg">
              ✨ Suporte direto e mentoria personalizada
            </p>
          </div>
          
          <button className="group bg-gradient-to-r from-gold to-gold-light text-wine font-bold text-lg md:text-xl px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gold/25 flex items-center gap-2 md:gap-3 mx-auto">
            <span className="text-center">Quero entrar no TPM agora</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </button>
          
          <p className="text-gold-light/80 text-xs md:text-sm mt-4 md:mt-6">
            Sua jornada de transformação começa aqui
          </p>
        </div>
      </div>
    </section>
  );
};
