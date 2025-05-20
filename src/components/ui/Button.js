export default function Button({ children, variant = 'primary', ...props }) {
    const baseStyles = "px-6 py-2 rounded-lg font-medium transition-colors duration-200"
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    }
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]}`}
        {...props}
      >
        {children}
      </button>
    )
  }