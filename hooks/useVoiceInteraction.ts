import { useState, useCallback } from 'react';
import { Platform } from 'react-native';

interface VoiceInteractionHook {
  isListening: boolean;
  isSpeaking: boolean;
  startListening: () => Promise<void>;
  stopListening: () => void;
  speak: (text: string) => Promise<void>;
  transcript: string;
  error: string | null;
}

export function useVoiceInteraction(): VoiceInteractionHook {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  const startListening = useCallback(async () => {
    if (Platform.OS === 'web') {
      try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
          throw new Error('Speech recognition not supported');
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = (event) => setError(event.error);
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setTranscript(transcript);
        };

        recognition.start();
      } catch (err) {
        setError('Speech recognition failed to start');
      }
    } else {
      setError('Voice input is only available on web platforms');
    }
  }, []);

  const stopListening = useCallback(() => {
    if (Platform.OS === 'web') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.stop();
      }
    }
    setIsListening(false);
  }, []);

  const speak = useCallback(async (text: string) => {
    if (Platform.OS === 'web') {
      try {
        if (!window.speechSynthesis) {
          throw new Error('Speech synthesis not supported');
        }

        setIsSpeaking(true);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => {
          setError('Speech synthesis failed');
          setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        setError('Speech synthesis failed to start');
        setIsSpeaking(false);
      }
    } else {
      setError('Voice output is only available on web platforms');
    }
  }, []);

  return {
    isListening,
    isSpeaking,
    startListening,
    stopListening,
    speak,
    transcript,
    error
  };
}