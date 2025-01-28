export function Textarea({ className = "", ...props }) {
    return (
      <textarea
        className={`w-full p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        {...props}
      />
    );
  }
  