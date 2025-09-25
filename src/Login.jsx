function Login() {
    return (
        <div className="flex flex-col justify-center items-center bg-blue-400 p-8 rounded-md shadow-lg max-w-md w-full">
            <div>
                <h1 className="text-white text-2xl mb-4">Login</h1>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2 mr-41">Email</label>
                <input
                    type="text"
                    id="email"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-white mb-2 mr-35">Password</label>
                <input
                    type="password"
                    id="password"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-3">
                <form action="#">
                    <input
                        type="submit"
                        value={"Sign-In"}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer w-30"
                    />
                </form>
            </div>
        </div>
    )
}

export default Login;
