
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-wine-dark py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h4 className="text-2xl font-playfair font-bold text-gold mb-6">
            Siga-nos e mantenha-se conectada
          </h4>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-wine transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-gold hover:text-wine" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-wine transition-all duration-300 transform hover:scale-110"
            >
              <Facebook className="w-6 h-6 text-gold hover:text-wine" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-wine transition-all duration-300 transform hover:scale-110"
            >
              <Youtube className="w-6 h-6 text-gold hover:text-wine" />
            </a>
          </div>
          
          <div className="border-t border-gold/20 pt-6">
            <p className="text-white/60 text-sm">
              © 2024 TPM - Treinamento para Mulheres. Todos os direitos reservados.
            </p>
            <p className="text-gold-light/80 text-sm mt-2">
              Transformando vidas através do empreendedorismo feminino
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
