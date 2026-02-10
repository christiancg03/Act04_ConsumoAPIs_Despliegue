/**
 * Custom hook for voice recognition using the Web Speech API
 * @param {Function} onResult - Callback function that receives the transcript text when speech is recognized
 * @returns {Object} Object containing voice recognition state and control methods
 * @returns {boolean} isSupported - Indicates whether the browser supports the Web Speech API
 * @returns {boolean} isListening - Current listening state
 * @returns {Function} startListening - Function to start listening for voice input (no-op if not supported)
 */

import { useState, useEffect, useRef } from "react";

const useVoiceRecognition = (onResult) => {
    // Verificamos compatibilidad: Chrome y navegadores basados en Chromium usan webkitSpeechRecognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Determina si el navegador actual soporta la API
  const isSupported = !!SpeechRecognition; 

  useEffect(() => {
    // Si no hay soporte, no intentamos instanciar la API para evitar errores de ejecución
    if (!isSupported) return;

    // Configuración de la interfaz de reconocimiento
    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.continuous = false;
    recognition.interimResults = false;

    // Evento que se dispara cuando la API procesa el audio y lo convierte a texto
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onResult(text);
      setIsListening(false);
    };

    // Manejo de errores (Micrófono bloqueado, sin conexión, o sin sonido detectado)
    recognition.onerror = (event) => {
      console.error("Error en reconocimiento:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
  }, [SpeechRecognition, onResult, isSupported]);

  //Inicia el proceso de escucha.
  const startListening = () => {
    if (!isSupported || !recognitionRef.current) return;
    try {
      setIsListening(true);
      recognitionRef.current.start();
    } catch {
      console.warn("Ya está escuchando...");
    }
  };

  return {
    isSupported,
    isListening,
    // Devolvemos una función vacía si no hay soporte para evitar errores en el componente padre
    startListening: isSupported ? startListening : () => {}
  };
};

export default useVoiceRecognition;