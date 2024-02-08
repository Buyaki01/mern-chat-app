import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center" >
      <h1 className="font-bold mb-3 text-2xl mt-12">Sign Up</h1>
      <div className="w-[500px]">
        <form className="flex flex-col gap-4 p-3 shadow-2xl">
          <input 
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input 
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
          />
          <input 
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
          />

          <button
            className="bg-secondary px-4 py-2 text-white rounded-lg hover:opacity-80"
          >
            Sign Up
          </button>
        </form>

        <div className="flex gap-2 mt-5">
          <p>Have an account? </p>
          <Link to='/login'>
            <span className="text-primary hover:underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp