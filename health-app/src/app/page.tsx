export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
      <div className="bg-gray-100 p-4 flex items-center justify-center">
        
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>


      <form>
        <div className = "mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email"/>
        </div>
        <div className = "mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your password"/>
        </div>
        <div className ="mb-6 w-80% mx-auto" >
           <button className="border border-black w-full mx-auto">
            Sign in with Google
           </button>
           <div className= "mt-6">
           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500  w-full">
            Login
            </button>

           </div>

        </div>


      </form>
      </div>
      </div>




      <div className="bg-gray-100 p-4">
      <div className = "h-screen">
      <img src="/Images/login-image.jpg" alt="paperwork" className="w-full h-full object-center" />

      </div>
      </div>
    </div>
  )
}
