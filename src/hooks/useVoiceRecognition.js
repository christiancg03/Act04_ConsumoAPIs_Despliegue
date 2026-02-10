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
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const isSupported = !!SpeechRecognition; 

  useEffect(() => {
    if (!isSupported) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onResult(text);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Error en reconocimiento:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
  }, [SpeechRecognition, onResult, isSupported]);

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
    startListening: isSupported ? startListening : () => {}
  };
};

export default useVoiceRecognition;