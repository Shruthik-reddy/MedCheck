export default function SignInForm() {
    return (
      <form className="max-w-md mx-auto">
        <div className="space-y-4">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </div>
      </form>
    )
  }