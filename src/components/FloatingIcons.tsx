
import { CreditCard, Coins, PiggyBank, Banknote, BadgeDollarSign, Wallet, QrCodeIcon, BarChart2, LineChart, Receipt, CircleDollarSign, Percent } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingIconProps {
  icon: React.ReactNode;
  initialX: number;
  initialY: number;
  delay: number;
}

const FloatingIcon = ({ icon, initialX, initialY, delay }: FloatingIconProps) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  
  useEffect(() => {
    const floatAnimation = () => {
      const newX = initialX + (Math.sin(Date.now() / 2000) * 15);
      const newY = initialY + (Math.cos(Date.now() / 2500) * 15);
      setPosition({ x: newX, y: newY });
      requestAnimationFrame(floatAnimation);
    };
    
    // Delay the start of animation
    const timer = setTimeout(() => {
      const animationId = requestAnimationFrame(floatAnimation);
      return () => cancelAnimationFrame(animationId);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [initialX, initialY, delay]);
  
  return (
    <div
      className="absolute text-primary/30 dark:text-primary/20 transition-opacity duration-1000 opacity-0 animate-fade-in"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 3s ease-in-out',
      }}
    >
      {icon}
    </div>
  );
};

const FloatingIcons = () => {
  const icons = [
    { icon: <CreditCard size={40} />, x: '10%', y: '15%', delay: 100 },
    { icon: <Coins size={30} />, x: '80%', y: '25%', delay: 300 },
    { icon: <PiggyBank size={48} />, x: '15%', y: '70%', delay: 500 },
    { icon: <Banknote size={36} />, x: '70%', y: '80%', delay: 700 },
    { icon: <BadgeDollarSign size={42} />, x: '85%', y: '65%', delay: 900 },
    { icon: <Wallet size={38} />, x: '25%', y: '85%', delay: 1100 },
    { icon: <QrCodeIcon size={34} />, x: '60%', y: '40%', delay: 1300 },
    { icon: <BarChart2 size={38} />, x: '30%', y: '30%', delay: 1500 },
    { icon: <LineChart size={44} />, x: '75%', y: '10%', delay: 1700 },
    { icon: <Receipt size={32} />, x: '40%', y: '60%', delay: 1900 },
    { icon: <CircleDollarSign size={36} />, x: '55%', y: '75%', delay: 2100 },
    { icon: <Percent size={28} />, x: '20%', y: '45%', delay: 2300 },
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon.icon}
          initialX={parseFloat(icon.x)}
          initialY={parseFloat(icon.y)}
          delay={icon.delay}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
