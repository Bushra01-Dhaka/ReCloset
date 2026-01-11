import useAuth from "../../../Hooks/useAuth"


const MyProfile = () => {
    const {user} = useAuth();
  return (
    <div className="flex justify-center items-start min-h-screen px-10 py-20 lg:py-40">
            <div className="border-primary shadow-2xl shadow-accent p-6 rounded-md flex flex-col lg:flex-row justify-center items-center gap-6 bg-black">
               {/* left */}
               <div>
                  <img className="w-[150px] h-[150px] shadow-lg shadow-primary object-cover rounded-full" src={user?.photoURL} alt="" />
               </div>
               {/* right */}
               <div>
                   <h3 className="text-2xl font-bold">{user?.displayName}</h3>
                   <p className="text-xl ">{user?.email}</p>
               </div>
            </div>
    </div>
  )
}

export default MyProfile