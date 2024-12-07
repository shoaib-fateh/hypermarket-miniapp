"use client";


import { useEffect } from 'react';

const TelegramLoginButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    script.setAttribute('data-telegram-login', '@rafahKhanvadah_bot'); // Replace with your bot username
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '10');
    script.setAttribute('data-auth-url', '/api/auth/telegram'); // URL to the Next.js API route we created

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <p>Login using Telegram:</p>
      {/* Telegram button will be injected here */}
    </div>
  );
};

export default TelegramLoginButton;
