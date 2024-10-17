import React from 'react'
import TeamCard from '../Components/TeamCard'
import Footer from '../Components/Footer'

const Teams = () => {
  return (
    <><div className=' text-white bg-black text-center h-full '>
      <h1 className='text-5xl mt-10  mb-12'>Meet the team</h1>

      <div class="flex items-center py-4 mb-10 mt-14">


        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Faculty Coordinator</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">

        <TeamCard imgSrc="\hardeo.jpg" name="Dr Hardeo Thakur" position="Faculty coordinator" />



      </div>
      <div class="flex items-center py-4 mb-10 mt-14">



        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Office Bearers</span>
        <div class="flex-grow h-px bg-gray-400 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-8 justify-items-center align-items-center px-8">


        <TeamCard imgSrc="\office\me2.jpg" name="Ayush" position="Webmaster" className='rounded-lg' />

        <TeamCard imgSrc="\office\Chairperson.jpg" name="Ayush" position="Chairperson" />


        <TeamCard imgSrc="\office\utkarsh.jpg" name="Ayush" position="Treasurer" />
        <TeamCard imgSrc="\office\s.png" name="Ayush" position="Secretary" />
        <TeamCard imgSrc="\office\j.jpg" name="Ayush" position="Vice Chairperson" />

      </div>


      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Technical Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="techTeam\rachit.jpg" name="Ayush" position="Technical Head" className='rounded-lg' />

        <TeamCard imgSrc="techTeam\utkarsh.png" name="Ayush" position="Technical co-Head" className='rounded-lg' />

        <TeamCard imgSrc="techTeam\ayush.png" name="Ayush" position="Team Member" className='rounded-lg' />
        <TeamCard imgSrc="techTeam\devansh.jpeg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="techTeam\hardik.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="techTeam\manan.jpg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="techTeam\sanya.png" name="Ayush" position="Team Member" />

      </div>


      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Social Media Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="\socialmedia\deeksha.jpg" name="Ayush" position="Social Media Head" className='rounded-lg' />
        <TeamCard imgSrc="socialmedia/jatin.png" name="Ayush" position="Social Media co-Head" className='rounded-lg' />
        <TeamCard imgSrc="socialmedia/aarchi.jpg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="socialmedia/aditi.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="socialmedia/ananya.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="socialmedia/random.jpg" name="Ayush " position="Team Member" />
        <TeamCard imgSrc="socialmedia/random2.JPG" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="socialmedia/navya2.jpg" name="Ayush" position="Team Member" />



      </div>


      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Management Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="management/m4.png" name="Ayush" position="Management head" className='rounded-lg' />
        <TeamCard imgSrc="management/m1.png" name="Ayush" position="Management co-Head" />
        <TeamCard imgSrc="management/m3.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m2.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m5.jpg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m6.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m7.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m8.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m9.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="management/m10.png" name="Ayush " position="Team Member" />
        <TeamCard imgSrc="management/m11.png" name="Ayush " position="Team Member" />


      </div>

      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Multimedia Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="\multimedia\multimedia\riya.jpg" name="Ayush" position="Multimedia Head" className='rounded-lg' />
        <TeamCard imgSrc="\multimedia\multimedia\adarsh.jpg" name="Ayush" position="Multimedia Co-Head" className='rounded-lg' />
        <TeamCard imgSrc="\multimedia\multimedia\Akshat Kulshrestha.png" name="Ayush" position="Team Member" className='rounded-lg' />
        <TeamCard imgSrc="\multimedia\multimedia\Pranav Gupta.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="\multimedia\multimedia\Riddhi Chaplot.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="\multimedia\multimedia\Saumyakumari.PNG" name="Ayush" position="Team Member" />


      </div>


      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">PR  Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="\pr\rudra.jpg" name="Ayush" position="PR Head" className='rounded-lg' />
        <TeamCard imgSrc="\pr\ananya.png" name="Ayush" position="PR Co-Head" className='rounded-lg' />

        <TeamCard imgSrc="\pr\AditiSingh_PR.png" name="Ayush" position="Team Memeber" className='rounded-lg' />


      </div>

      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Content Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="content\content\ishita.png" name="Ayush" position="Head" className='rounded-lg' />
        <TeamCard imgSrc="content\content\ayush.png" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="content\content\Aditya.png" name="Ayush" position="Team Member" />

        <TeamCard imgSrc="content\content\akshit.jpg" name="Ayush" position="Team Member" />

        <TeamCard imgSrc="content\content\muskan.jpg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="\content\content\pragya.jpg" name="Ayush" position="Team Member" />

        <TeamCard imgSrc="content\content\Prayansh.png" name="Ayush" position="Team Member" />


      </div>

      <div class="flex items-center py-4 mb-10 mt-14">

        <div class="flex-grow h-px bg-gray-400"></div>
        <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Design  Team</span>
        <div class="flex-grow h-px bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">


        <TeamCard imgSrc="\design\tushar.jpg" name="Ayush" position="Design head" />
        <TeamCard imgSrc="\design\design team\Rachit Katyal.png" name="Ayush" position="Co head" />
        <TeamCard imgSrc="\design\design team\Abhinav.png" name="Ayush" position="Team Member" className='rounded-lg' />
        <TeamCard imgSrc="\design\design team\IMG-20240101-WA0033(1).jpg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="\design\design team\unnati.jpg" name="Ayush" position="Team Member" />
        <TeamCard imgSrc="\design\design team\Siya.jpg" name="Ayush" position="Team Member" />

      </div>
    </div>
      <Footer />
    </>)
}

export default Teams

