import "./App.css";

function App() {
  const handleConversationStart = () => {
    if (window.webkit?.messageHandlers?.talkmateApp) {
      window.webkit.messageHandlers.talkmateApp.postMessage(
        "conversation_start",
      );
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
        대화 시작하기
      </button>
    </div>
  );
}

export default App;
