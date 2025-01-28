export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 bg-green-600 rounded-md text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  