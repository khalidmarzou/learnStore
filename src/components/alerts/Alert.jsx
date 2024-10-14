import { useState, useEffect } from "react";

export default function Alert({ message = "default message", color = "text-green-800", bgColor = "bg-green-50" }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed top-24 p-4 mb-4 text-sm ${color} rounded-lg ${bgColor}`} role="alert">
      <span className="font-medium">{message} !!</span>
    </div>
  );
}
