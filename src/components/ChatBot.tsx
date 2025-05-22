import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; user: boolean }[]>([
    { text: "Hello! How can I help you with geospatial solutions today?", user: false },
  ]);
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  // Predefined responses based on keywords
  const getBotResponse = (message: string) => {
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes('urban') || lowerCaseMessage.includes('planning')) {
      return "Our urban planning solutions help cities develop sustainable infrastructure using advanced geospatial data analysis. Would you like to know more?";
    } else if (lowerCaseMessage.includes('disaster') || lowerCaseMessage.includes('flood')) {
      return "Our disaster management systems provide real-time monitoring and predictive analytics for flood zones and other natural disasters. How can we help with your specific needs?";
    } else if (lowerCaseMessage.includes('transport') || lowerCaseMessage.includes('road')) {
      return "Our transportation planning solutions optimize routes, reduce congestion, and improve infrastructure planning using advanced spatial analysis. What specific transportation challenges are you facing?";
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('speak') || lowerCaseMessage.includes('human')) {
      return "You can reach our team at info@merczcord.com or fill out the contact form on our website. Would you like me to direct you there?";
    } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('quote')) {
      return "Our pricing varies based on project scope and requirements. Please contact our sales team for a customized quote at sales@merczcord.com.";
    } else {
      return "Thank you for your message. Would you like to know more about our geospatial solutions for urban planning, transportation, disaster management, or environmental assessments?";
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const updatedMessages = [
      ...messages,
      { text: input, user: true }
    ];
    setMessages(updatedMessages);
    setInput("");

    // Add bot response after a short delay to simulate thinking
    setTimeout(() => {
      setMessages([
        ...updatedMessages,
        { text: getBotResponse(input), user: false }
      ]);
    }, 800);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-mercz-teal text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-mercz-teal-light transition-colors z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Chat header */}
            <div className="bg-mercz-teal text-white p-4">
              <h3 className="font-medium">Merczcord Assistant</h3>
              <p className="text-xs opacity-80">Ask us anything about our geospatial solutions</p>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.user
                      ? "ml-auto bg-mercz-teal text-white"
                      : "mr-auto bg-gray-100 dark:bg-gray-700 text-mercz-text dark:text-white"
                  } rounded-lg px-4 py-2 max-w-[80%]`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            {/* Chat input */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-l-lg px-4 py-2 focus:outline-none text-mercz-text dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                className="bg-mercz-teal text-white px-4 rounded-r-lg hover:bg-mercz-teal-light transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 