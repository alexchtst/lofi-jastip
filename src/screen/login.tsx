import { Chrome, Facebook } from "lucide-react";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="bg-white w-full p-5 rounded-md space-y-5 shadow-[8px_8px_39px_7px_rgba(0,0,0,0.1)] border border-gray-200">
        <h1 className="text-center text-xl">Selamat Datang</h1>
        

        <div className="flex flex-col gap-3">

          <div className="flex flex-col gap-2">
            <label className="text-sm">Username</label>
            <input type="text" placeholder="username" 
            className="p-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">Password</label>
            <input type="password"
            className="p-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="text-sm text-center text-white p-2 rounded-md bg-black">Masuk</div>
        </div>

        <div className="grid grid-cols-5 justify-center items-center">
          <div className="border-t-[0.1px] border-gray-700 h-[0.5px] w-full" />
          <div className="w-full col-span-3 flex justify-center text-sm text-gray-500">atau masuk dengan</div>
          <div className="border-t-[0.1px] border-gray-700 h-[0.5px] w-full" />
        </div>

        
        <div className="flex flex-col gap-1">
          <div className="text-white w-full flex items-center justify-center gap-3 bg-blue-600 p-2 rounded-md">
            <Facebook />
            <label>Facebook</label>
          </div>
          <div className="text-white w-full flex items-center justify-center gap-3 bg-red-600 p-2 rounded-md">
            <Chrome />
            <label>Google</label>
          </div>
        </div>
      </div>
    </div>
  );
}
