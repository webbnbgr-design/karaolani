
import { useLanguage } from '@/src/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Menu, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-aegean/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col">
            <span className="font-serif text-xl font-bold text-aegean tracking-tight">
              ΜΑΡΙΑ ΚΑΡΑΟΛΑΝΗ
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-warm-grey">
              ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-aegean hover:text-aegean-light transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-aegean/10 pl-8">
              <Button asChild className="bg-aegean hover:bg-aegean-light text-white rounded-full px-6">
                <a href="tel:+302241132003" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">22411 32003</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-aegean"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-aegean/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-aegean hover:bg-soft-white rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-aegean hover:bg-aegean-light text-white rounded-full py-6">
                  <a href="tel:+302241132003" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>22411 32003</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
