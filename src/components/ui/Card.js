export default function Card({ children, title }) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        {children}
      </div>
    )
  }