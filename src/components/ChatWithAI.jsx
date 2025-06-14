import React, { useState } from "react";

const ChatWithAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: input }),
      });

      const data = await res.json();
      const aiMessage = { sender: "ai", text: data.response || "No response." };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error fetching response." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 mt-10 text-gray-900 dark:text-white" id="AiChat">
      <h2 className="text-3xl font-semibold mb-4 text-center">Are you in Hurry? Ask me Quickly About Anurag!</h2>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4 h-96 overflow-y-auto shadow-inner hide-scrollbar scroll-smooth">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-2 rounded-md w-fit max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-center text-sm text-gray-500">Thinking...</div>}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 rounded-md p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWithAI;