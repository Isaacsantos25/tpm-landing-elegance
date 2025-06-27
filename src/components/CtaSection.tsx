
import { ArrowRight, Star } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-wine to-wine-dark">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-wine-light/30 backdrop-blur-sm rounded-3xl p-12 border-2 border-gold/30">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-current" />
              ))}
            </div>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-playfair font-bold mb-6 text-white leading-tight">
            Gostou do conteúdo?
          </h3>
          
          <p className="text-xl md:text-2xl text-gold-light mb-8 font-medium">
            Avance para o treinamento completo TPM e transforme sua vida profissional.
          </p>
          
          <div className="space-y-4 mb-10">
            <p className="text-white/90 text-lg">
              ✨ Acesso vitalício ao curso completo
            </p>
            <p className="text-white/90 text-lg">
              ✨ Comunidade exclusiva de mulheres empreendedoras
            </p>
            <p className="text-white/90 text-lg">
              ✨ Suporte direto e mentoria personalizada
            </p>
          </div>
          
          <button className="group bg-gradient-to-r from-gold to-gold-light text-wine font-bold text-xl px-12 py-6 rounded-full hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gold/25 flex items-center gap-3 mx-auto">
            Quero entrar no TPM agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-gold-light/80 text-sm mt-6">
            Sua jornada de transformação começa aqui
          </p>
        </div>
      </div>
    </section>
  );
};
