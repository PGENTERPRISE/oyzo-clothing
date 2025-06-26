// components/ui/button.jsx

export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  