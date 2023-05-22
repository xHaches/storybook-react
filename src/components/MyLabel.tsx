import { useMemo } from 'react';
import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje que va a mostrar el componente
    */
    label?: string;
    /**
     * Este es el tamaño del mensaje del componente
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Bandera que capitaliza las palabras del atributo label
     */
    allCaps?: boolean;
    /**
     * Color del texto, hay 3 opciones
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color de texto personalziado
     */
    fontColor?: string;
}

/**
 * Componente que muestra un texto y su tamaño es ajustable
*/
export const MyLabel = ({
  label = 'No Label', 
  size = 'h1',
  allCaps = false,
  color = 'primary',
  fontColor
}: MyLabelProps) => {

  const text = useMemo(() => {
    if(!allCaps) {
      return label;
    }
    const words = label.split(' ');
    const capsWords = words.map((w) => {
      return w.charAt(0).toUpperCase() + w.slice(1);
    });
    const captsText = capsWords.join(' ');
    return captsText;
  }, [label, allCaps])
  return (
    <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
        { text }
    </span>
  )
}
