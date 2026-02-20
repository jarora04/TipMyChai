import React from 'react'

const About = () => {
  return (
    <div className='container mx-auti px-8 md:px-4 py-8 text-white'>
        {/* About page on Get me a Tea using tailwind CSS */}
        <h1 className="text-3xl font-semibold mb-4 text-center">
            About - Get Me A Tea
        </h1>
        <p className='text-lg mb-6 md:text-center text-left'>
        Get Me a Tea is a revolutionary crowdfunding platform that empowers creators to transform their dreams into reality with the unwavering support of their fans. This unique space allows your fans to make a tangible impact by buying you a tea, fueling your creative journey one cup at a time. Unlock the limitless potential of your fanbase, elevate your projects, and bring your visions to life with the heartfelt contributions of those who believe in your talent. Join **Get Me a Tea** today and experience the power of community-driven creativity.
        </p>

       
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className='flex items-center mb-6'>
                <img className='w-20 h-20 rounded-full mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZomMmykBw5YObexLt0rS2ZxFD38EyQSa83w&s" alt="" />


                <div>


                    <h3 className='text-xl font-semibold mb-2'>Fans want to Collaborate</h3>
                    <p>Your fans are eagerly anticipating the opportunity to collaborate with you on your visionary projects, ready to co-create and make a meaningful impact together.</p>
                </div>
            </div>


            <div className='flex items-center mb-6'>
                <img className='w-20 h-20 rounded-full mr-4' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6cd5e35-ef1a-43c4-a71d-8e5f6e0e9308/dc1mf43-814ae6e1-9a95-4427-9d09-7ef361eb15e5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2Y2Q1ZTM1LWVmMWEtNDNjNC1hNzFkLThlNWY2ZTBlOTMwOFwvZGMxbWY0My04MTRhZTZlMS05YTk1LTQ0MjctOWQwOS03ZWYzNjFlYjE1ZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GKq9McYuGZkrEjS6WJnZ8A-z319QjCI8uKyqtU8GAeY" alt="" />


                <div>
                    <h3 className='text-xl font-semibold mb-2'>Fuel Your Journey with Tea</h3>
                    <p>Harness direct support from your fans through tea purchases, fueling your project's funding and propelling your creative vision forward.</p>
                </div>
            </div>
        </div>



        <h2 className='text-2xl font-semibold mb-4'>Empowering Benefits for Creators</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Receive direct financial backing from your dedicated fanbase</li>
            <li className="mb-2">Forge deeper connections with your fans on a personal level</li>
            <li className="mb-2">Unlock a bespoke platform designed specifically for creative endeavors</li>
        </ul>




        <h2 className='text-2xl font-semibold mb-4'>Exclusive Benefits for Fans</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Play a pivotal role in the triumph of your cherished creators </li>
            <li className="mb-2">Enjoy exclusive rewards and premium benefits for championing creators</li>
            <li className="mb-2">Gain entry to a bespoke platform tailored specifically for ambitious creative projects.</li>
        </ul>





        <h2 className='text-2xl font-semibold mb-4'>Synergistic Benefits of Collaboration</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Embark on new opportunities through collaborative ventures with fellow creators.</li>
            <li className="mb-2">Broaden your network and extend your influence to a global audience.</li>
            <li className="mb-2">Fuse talents and resources to pioneer innovative projects.</li>
        </ul>



        <h2 className='text-2xl font-semibold mb-4'>Community Engagement</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Engage with a vibrant community of passionate individuals who share your vision.</li>
            <li className="mb-2">Gain invaluable feedback and encouragement from your peers, fostering growth and success.</li>
            <li className="mb-2">Engage in thought-provoking discussions and exclusive events designed around your interests.</li>
        </ul>



        <h2 className='text-2xl font-semibold mb-4'>Unlock a wealth of resources.</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Unlock premier access to a treasure trove of resources, featuring expert tutorials, bespoke templates, and advanced tools.</li>
            <li className="mb-2">Benefit from the wisdom and mentorship of seasoned creators.</li>
            <li className="mb-2">Stay at the forefront with cutting-edge industry trends and gold-standard best practices.</li>
        </ul>


        <h2 className='text-2xl font-semibold mb-4'>Recognition and Exposure</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Display your work to a worldwide audience and earn global recognition.</li>
            <li className="mb-2">Be prominently featured in promotional materials and campaigns, amplifying your reach and visibility.</li>
            <li className="mb-2">Craft a distinguished portfolio and elevate your stature as a respected creator.</li>
        </ul>


        <h2 className='text-2xl font-semibold mb-4'>Supportive Community</h2>
        <ul className='list-disc pl-6 mb-6'>
            <li className="mb-2">Become part of a thriving community that champions creativity, embraces diversity, and promotes inclusivity.</li>
            <li className="mb-2">Discover inspiration and encouragement from fellow members within the community.</li>
            <li className="mb-2">Forge impactful collaborations and exchange resources to drive collective growth and innovation.</li>
        </ul>




    </div>
  )
}

export default About


export const metadata={
    title: "About - Get Me a Tea!!" ,
}