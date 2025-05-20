import Button from '../ui/Button'

export default function AuthLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a href="/auth/signin" className="text-gray-600 hover:text-blue-600">
        Sign In
      </a>
      <a href="/auth/signup">
        <Button>Sign Up</Button>
      </a>
    </div>
  )
}