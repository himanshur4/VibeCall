import { useState } from "react"
import { Link } from "react-router";
import { Rainbow } from "lucide-react";
import useLogin from "../hooks/useLogin.js";
import { useThemeStore } from "../store/useThemeStore.js";

const LogInPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const{isPending,error,loginMutation}=useLogin();
  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  }
  const {theme}=useThemeStore();
  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme={theme}>

      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* LOGIN FORM SECTION */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <Rainbow className='size-12 text-primary' />
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>VibeCall</span>
          </div>
      

          <div className="w-full">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Welcome Back</h2>
                  <p className="text-sm opacity-70 ">Sign in to your account.</p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="hello@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control w-full space-y-2">
                    <label className="label">
                      <span className="label-text">
                        Password
                      </span>
                    </label>
                    <input type="password" placeholder="********" className="input input-bordered w-full" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required />
                  </div>
                  <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
                    {isPending ? (<>
                      <span className="loading loading-spinner loading-xs"></span>
                      Signing in...
                    </>) : (
                      "Sign In"
                    )}
                  </button>
                  <div className="text-center mt-4">
                    <p className="text-sm">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary hover:underline">
                        Create One
                      </Link >
                    </p>
                  </div>


                </div>
              </div>
            </form>
          </div>
        </div>
        {/*Image section*/}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/*Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="./ppp.png" alt="login illustration" className="w-full h-full" />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with new friends</h2>
              <p className="opacity-70">
                Practice conversations, make memories, and enjoy seamless video calls with people across the globe.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LogInPage
