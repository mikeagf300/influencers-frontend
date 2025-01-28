export function Card({ children, className = "" }) {
    return (
      <div className={`bg-gray-800 rounded-lg shadow-md p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
  }
  