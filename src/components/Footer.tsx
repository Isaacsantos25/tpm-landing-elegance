
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-wine-dark py-8 md:py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-playfair font-bold text-gold mb-4 md:mb-6">
            Siga-nos e mantenha-se conectada
          </h4>
          
          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8">
            <a 
              href="#" 
              className="w-10 h-10 md:w-12 md:h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-wine transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-gold hover:text-wine" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 md:w-12 md:h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-wine transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-5 h-5 md:w-6 md:h-6 text-gold hover:text-wine" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 md:w-12 md:h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-wine transition-all duration-300 transform hover:scale-110"
            >
              <Youtube className="w-5 h-5 md:w-6 md:h-6 text-gold hover:text-wine" />
            </a>
          </div>
          
          <div className="border-t border-gold/20 pt-4 md:pt-6">
            <p className="text-white/60 text-xs md:text-sm px-2">
              © 2024 TPM - Treinamento para Mulheres. Todos os direitos reservados.
            </p>
            <p className="text-gold-light/80 text-xs md:text-sm mt-2 px-2">
              Transformando vidas através do empreendedorismo feminino
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
