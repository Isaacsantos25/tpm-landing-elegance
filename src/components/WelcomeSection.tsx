
export const WelcomeSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-wine-dark to-wine">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfair font-bold mb-4 md:mb-6 text-white leading-tight">
          Bem-vinda ao Minicurso TPM
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gold-light mb-6 md:mb-8 font-medium px-2">
          Você está prestes a transformar sua realidade com o empreendedorismo feminino.
        </p>
        
        <div className="bg-wine-light/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold/20 mx-2">
          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            Assista às aulas abaixo e prepare-se para dar o próximo passo em direção à sua independência financeira e realização pessoal.
          </p>
        </div>
        
        <div className="flex justify-center mt-6 md:mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
