 
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
