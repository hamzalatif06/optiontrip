import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ViAssistant.css';

const ViAssistant = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userIdentified, setUserIdentified] = useState(false);
  const [userBooking, setUserBooking] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize conversation
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: 1,
        text: "Hello! 👋 I'm Vi, your AI travel assistant. I'm here to help you throughout your journey! To get started, could you please share your name or booking number?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'welcome'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Check if user was previously identified
  useEffect(() => {
    const savedBooking = localStorage.getItem('vi_user_booking');
    const savedName = localStorage.getItem('vi_user_name');
    if (savedBooking || savedName) {
      setUserIdentified(true);
      setUserBooking(savedBooking ? JSON.parse(savedBooking) : null);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  // Simulate booking lookup
  const checkBooking = async (identifier) => {
    // In a real app, this would call your API
    // For now, we'll simulate with mock data
    const mockBookings = {
      'john': { name: 'John Doe', bookingNumber: 'BK123456', destination: 'Paris', checkIn: '2024-12-15', checkOut: '2024-12-20', hotel: 'Grand Hotel Paris' },
      'jane': { name: 'Jane Smith', bookingNumber: 'BK789012', destination: 'Tokyo', checkIn: '2024-12-18', checkOut: '2024-12-25', hotel: 'Sakura Inn' },
      'BK123456': { name: 'John Doe', bookingNumber: 'BK123456', destination: 'Paris', checkIn: '2024-12-15', checkOut: '2024-12-20', hotel: 'Grand Hotel Paris' },
      'BK789012': { name: 'Jane Smith', bookingNumber: 'BK789012', destination: 'Tokyo', checkIn: '2024-12-18', checkOut: '2024-12-25', hotel: 'Sakura Inn' },
    };

    const lowerIdentifier = identifier.toLowerCase().trim();
    return mockBookings[lowerIdentifier] || null;
  };

  // Process user message and generate response
  const processMessage = async (userText) => {
    const lowerText = userText.toLowerCase().trim();

    // Check if user is providing name/booking
    if (!userIdentified) {
      const booking = await checkBooking(userText);
      if (booking) {
        setUserIdentified(true);
        setUserBooking(booking);
        localStorage.setItem('vi_user_name', booking.name);
        localStorage.setItem('vi_user_booking', JSON.stringify(booking));
        
        return {
          text: `Great to meet you, ${booking.name}! ✨ I've found your booking (${booking.bookingNumber}) for ${booking.destination}. How's your trip going? Is everything okay? Is there anything you need help with?`,
          type: 'identification'
        };
      } else {
        return {
          text: "I couldn't find a booking with that information. Could you please try again with your name or booking number? (For demo, try 'John' or 'BK123456')",
          type: 'error'
        };
      }
    }

    // Intent detection for identified users
    if (lowerText.includes('help') || lowerText.includes('emergency') || lowerText.includes('urgent')) {
      return {
        text: `I'm here to help! 🆘 For immediate emergencies, please call local emergency services:\n\n🚨 Emergency: 112 (Europe) / 911 (US) / 999 (UK)\n\nFor booking-related issues, I can help you with:\n• Hotel contact information\n• Changes to your booking\n• Local recommendations\n• Travel tips\n\nWhat specifically do you need help with?`,
        type: 'emergency',
        quickReplies: ['Hotel Contact', 'Local Info', 'Travel Tips']
      };
    }

    if (lowerText.includes('hotel') || lowerText.includes('accommodation') || lowerText.includes('where am i staying')) {
      if (userBooking) {
        return {
          text: `🏨 Your hotel details:\n\nHotel: ${userBooking.hotel}\nLocation: ${userBooking.destination}\nCheck-in: ${userBooking.checkIn}\nCheck-out: ${userBooking.checkOut}\n\nNeed the hotel's contact number or directions?`,
          type: 'info'
        };
      }
    }

    if (lowerText.includes('weather') || lowerText.includes('forecast')) {
      return {
        text: `🌤️ I'd recommend checking a reliable weather app like Weather.com or your local weather service for the most current forecast in ${userBooking?.destination || 'your destination'}. The weather can change quickly, so it's always best to check right before you head out!\n\nNeed help with what to pack based on the weather?`,
        type: 'tip'
      };
    }

    if (lowerText.includes('restaurant') || lowerText.includes('food') || lowerText.includes('eat') || lowerText.includes('dining')) {
      return {
        text: `🍽️ I'd love to help you find great places to eat! For the most up-to-date restaurant recommendations and reviews, I suggest:\n• Checking TripAdvisor or Yelp for local favorites\n• Asking your hotel concierge for trusted recommendations\n• Looking for places with good reviews from locals\n\nWould you like tips on finding authentic local cuisine?`,
        type: 'recommendation'
      };
    }

    if (lowerText.includes('tip') || lowerText.includes('advice') || lowerText.includes('suggest')) {
      return {
        text: `💡 Here are some helpful travel tips for ${userBooking?.destination || 'your destination'}:\n\n• Keep a copy of your booking confirmation handy\n• Download offline maps before you go\n• Have emergency contact numbers saved\n• Keep your hotel address written down\n• Stay aware of local customs and laws\n\nAnything specific you'd like to know more about?`,
        type: 'tip',
        quickReplies: ['Safety Tips', 'Local Customs', 'Transportation']
      };
    }

    if (lowerText.includes('good') || lowerText.includes('great') || lowerText.includes('fine') || lowerText.includes('okay') || lowerText.includes('ok')) {
      return {
        text: `That's wonderful to hear! 😊 I'm so glad everything is going well. Remember, I'm here 24/7 if you need anything - whether it's travel tips, directions, or just someone to chat with about your adventures!\n\nHow are you enjoying ${userBooking?.destination || 'your destination'} so far?`,
        type: 'friendly'
      };
    }

    if (lowerText.includes('thank') || lowerText.includes('thanks')) {
      return {
        text: `You're very welcome! 🌟 That's what I'm here for. Feel free to reach out anytime during your trip. Safe travels! ✈️`,
        type: 'friendly'
      };
    }

    // Default response
    return {
      text: `Thanks for reaching out! I'm here to help with anything you need during your trip to ${userBooking?.destination || 'your destination'}. I can assist with:\n\n• Travel tips and recommendations\n• Emergency information\n• Hotel and booking details\n• Local information\n• General questions\n\nWhat would you like to know?`,
      type: 'general',
      quickReplies: ['Travel Tips', 'Help', 'Hotel Info']
    };
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const userText = inputMessage.trim();
    const userMessage = {
      id: Date.now(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const botResponse = await processMessage(userText);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        type: botResponse.type,
        quickReplies: botResponse.quickReplies
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => {
      const form = inputRef.current?.form;
      if (form) {
        form.requestSubmit();
      }
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const clearConversation = () => {
    setMessages([]);
    setUserIdentified(false);
    setUserBooking(null);
    localStorage.removeItem('vi_user_name');
    localStorage.removeItem('vi_user_booking');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className={`vi-button ${isOpen ? 'active' : ''}`} onClick={toggleChat}>
        {!isOpen ? (
          <>
            <div className="vi-button-icon">
              <span className="vi-logo">Vi</span>
            </div>
            <span className="vi-pulse"></span>
          </>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="vi-window">
          <div className="vi-header">
            <div className="vi-header-content">
              <div className="vi-avatar">
                <span className="vi-logo-small">Vi</span>
              </div>
              <div className="vi-header-text">
                <h4>Vi - Your Travel Buddy</h4>
                <span className="vi-status">
                  <span className="status-dot"></span>
                  Online
                </span>
              </div>
            </div>
            <div className="vi-header-actions">
              <button className="vi-btn-icon" onClick={clearConversation} title="Start New Conversation">
                <i className="fas fa-redo"></i>
              </button>
              <button className="vi-btn-icon" onClick={toggleChat} title="Minimize">
                <i className="fas fa-minus"></i>
              </button>
            </div>
          </div>

          {/* Disclaimer Banner */}
          {showDisclaimer && (
            <div className="vi-disclaimer">
              <div className="disclaimer-content">
                <i className="fas fa-info-circle"></i>
                <span>
                  <strong>AI Assistant:</strong> Vi is an AI-powered assistant. Please double-check important or time-sensitive information.
                </span>
              </div>
              <button className="disclaimer-close" onClick={() => setShowDisclaimer(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          )}

          <div className="vi-messages">
            {messages.map((message) => (
              <div key={message.id} className={`vi-message ${message.sender}`}>
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <span className="vi-logo-tiny">Vi</span>
                  </div>
                )}
                <div className="message-content">
                  <p>{message.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</p>
                  {message.quickReplies && (
                    <div className="quick-replies">
                      {message.quickReplies.map((reply, idx) => (
                        <button
                          key={idx}
                          className="quick-reply-btn"
                          onClick={() => handleQuickReply(reply)}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="vi-message bot typing">
                <div className="message-avatar">
                  <span className="vi-logo-tiny">Vi</span>
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="vi-input-container">
            <form onSubmit={handleSendMessage}>
              <input
                ref={inputRef}
                type="text"
                className="vi-input"
                placeholder={userIdentified ? "Ask me anything about your trip..." : "Enter your name or booking number..."}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <button type="submit" className="vi-send-btn" disabled={!inputMessage.trim() || isTyping}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ViAssistant;

