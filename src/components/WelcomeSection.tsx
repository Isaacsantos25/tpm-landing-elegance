
export const WelcomeSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-wine-dark to-wine">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-white">
          Bem-vinda ao Minicurso TPM
        </h2>
        
        <p className="text-xl md:text-2xl text-gold-light mb-8 font-medium">
          Você está prestes a transformar sua realidade com o empreendedorismo feminino.
        </p>
        
        <div className="bg-wine-light/30 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Assista às aulas abaixo e prepare-se para dar o próximo passo em direção à sua independência financeira e realização pessoal.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
