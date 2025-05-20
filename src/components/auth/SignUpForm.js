export default function SignUpForm() {
    return (
      <form className="max-w-md mx-auto">
        <div className="space-y-4">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    )
  }