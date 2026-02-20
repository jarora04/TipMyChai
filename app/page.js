import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    
    <>
    
    <div className="flex justify-center text-white h-[44vh] items-center flex-col gap-4 px-5 md:px-0 text-xs md:text-base">
      <div className="flex md:gap-10 font-bold gap-6 md:text-5xl justify-center items-center text-3xl">Buy Me a Tea
        <span>
          <img src="https://media.tenor.com/2Wu29iaHSYYAAAAi/coffee-lover-hot-coffee.gif" width={88} alt="" className="relative top-[-25px] invertImg"/>
        </span>
      </div>


    <p className="text-center">
    Transform your dreams into reality and Get funded by your dedicated fans and followers. Start now!
    </p>

    <p className="text-center">An exclusive space where fans can supportby buying you a tea. Harness the power of your fanbase to fund your projects</p>


      <div>



        
        <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-4">Start Me</button>
          </Link>



        <Link href="/about">
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </Link>



      </div>
    
        
    </div>
    
    
    
    <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto pb-32 pt-14 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-14">Fans can buy you a Tea</h2>
      <div className="flex gap-5 justify-around">

      <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} src="https://media.tenor.com/gpxL2iwzrTcAAAAj/computer-guy-confused.gif" alt="" className="bg-slate-400 rounded-full p-2 text-black size-20"/>
          <p className="font-bold text-center">Fans are eager to lend.</p>
          <p className="text-center"> Fans are ready to provide their unwavering support</p>
        </div>


        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6cd5e35-ef1a-43c4-a71d-8e5f6e0e9308/dc1mf43-814ae6e1-9a95-4427-9d09-7ef361eb15e5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2Y2Q1ZTM1LWVmMWEtNDNjNC1hNzFkLThlNWY2ZTBlOTMwOFwvZGMxbWY0My04MTRhZTZlMS05YTk1LTQ0MjctOWQwOS03ZWYzNjFlYjE1ZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GKq9McYuGZkrEjS6WJnZ8A-z319QjCI8uKyqtU8GAeY" alt="" className="bg-slate-400 rounded-full p-2 text-black size-20"/>
          <p className="font-bold text-center">Fans  committed to make contributions.</p>
          <p className="text-center">Fans are ready to financial support you.</p>
        </div>


        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img width={88} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZomMmykBw5YObexLt0rS2ZxFD38EyQSa83w&s" alt=""  className="bg-slate-400 rounded-full p-2 text-black size-20"/>
          <p className="font-bold text-center">Fans want to collaborate</p>
          <p className="text-center">Your fans are ready to collaborate with you</p>
        </div>


        
      </div>
    </div>




    <div className="bg-white h-1 opacity-10"></div>



    <div className="flex flex-col items-center justify-center text-white container mx-auto pb-32 pt-14">
      <h2 className="text-3xl font-bold text-center mb-14 ">Learn More About Us</h2>
      <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[50vh] xl:w-[50%] xl:h-[40vh]">
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/UTf8FtmdfW4?si=ajb8XHdcgloWe5ag&autoplay=1&mute=1&loop=1&autopause=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; muted; loop; autopause" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </>
  );
}
