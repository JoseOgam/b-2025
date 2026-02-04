import { useEffect, useState } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="bg-gray-900 text-gray-300 py-4 text-center text-sm">
        ©{dateTime.toLocaleString("en-ke", { timeZone: "Africa/Nairobi" })}{" "}
      </div>
    </div>
  );
};

export default Footer;
