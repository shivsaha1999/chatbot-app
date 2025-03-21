import React, { useState, useRef } from 'react';
import { Mic, StopCircle, RefreshCw } from 'lucide-react';
import '../styles/animations.css';

const VoiceRecorder = ({ onTranscribe }: { onTranscribe: (transcript: string) => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const handleMicClick = () => {
    if (!isRecording) {
      if (!recognitionRef.current) {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript;
          onTranscribe(transcript);
        };

        recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error("Speech recognition error", event.error);
        };
      }

      recognitionRef.current.start();
      setIsRecording(true);
    } else {
      recognitionRef.current?.stop();
      setIsRecording(false);
    }
  };

  const handleStopClick = () => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  const handleResetClick = () => {
    onTranscribe('');
  };

  return (
    <div className="voice-recorder">
      <button className={`p-2 rounded ${isRecording ? "bg-indigo-500 recording" : "hover:bg-gray-200"}`} onClick={handleMicClick}>
        <Mic className="w-5 h-5 text-gray-600" />
      </button>
      {isRecording && (
        <>
          <div className="dancing-lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button className="stop" onClick={handleStopClick}>
            <StopCircle className="w-5 h-5" />
          </button>
          <button className="reset" onClick={handleResetClick}>
            <RefreshCw className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default VoiceRecorder;