"use client";

import { useState, useEffect } from "react";

/**
 * Belirtilen medya sorgusu koşulunu kontrol eden hook
 * @param query Medya sorgusu (örn: "(min-width: 768px)")
 * @returns Boolean değer - sorgunun eşleşip eşleşmediğini belirtir
 */
export const useMediaQuery = (query: string): boolean => {
  // Başlangıçta sunucu tarafında false döndür, client tarafında değerlendirilecek
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Medya sorgusu için bir MediaQueryList oluştur
    const media = window.matchMedia(query);
    
    // MediaQueryList'in mevcut eşleşme durumunu ayarla
    setMatches(media.matches);

    // Eşleşme durumu değiştiğinde setMatches'i çağıracak bir işleyici
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Değişiklikleri dinle
    media.addEventListener("change", listener);
    
    // Temizleme fonksiyonu
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]); // Sorgu değiştiğinde effect'i yeniden çalıştır

  return matches;
};

export default useMediaQuery; 