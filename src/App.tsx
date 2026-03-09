import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isConversing, setIsConversing] = useState(false);

  useEffect(() => {
    const handleNativeMessage = (e: CustomEvent) => {
      if (e.detail?.type === "permission_granted") {
        setIsConversing(true);
      }
    };

    window.addEventListener(
      "nativeMessage",
      handleNativeMessage as EventListener,
    );
    return () => {
      window.removeEventListener(
        "nativeMessage",
        handleNativeMessage as EventListener,
      );
    };
  }, []);

  const handleConversationStart = () => {
    if (!isConversing) {
      if (window.webkit?.messageHandlers?.talkmateApp) {
        window.webkit.messageHandlers.talkmateApp.postMessage(
          "conversation_start",
        );
      }
    }
    if (isConversing) {
      if (window.webkit?.messageHandlers?.talkmateApp) {
        window.webkit.messageHandlers.talkmateApp.postMessage(
          "conversation_stop",
        );
      }
    }
  };

  return (
    <div className="app-container">
      <button
        type="button"
        className="bottom-button"
        style={{ padding: "16px 0" }}
        onClick={handleConversationStart}
      >
        {isConversing ? "대화중" : "대화 시작하기"}
      </button>
    </div>
  );
}

export default App;
