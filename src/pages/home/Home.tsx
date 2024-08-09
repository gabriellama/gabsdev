import React from 'react';
import desenho from '../../assets/gabistrammer.png'
import {DownloadSimple, ArrowCircleRight} from '@phosphor-icons/react'
import fotogab from '../../assets/IMG_2510.jpg'


function Home() {
    return (
        <>
        <div className="bg-white flex justify-center py-6">
          <div className='container w-7/12 h-96 rounded-[115px] bg-cyan-500'>
            <div className="grid grid-cols-2 items-center place-items-center">
                <div className='pl-40 grid gap-1'>
                <h1 className='text-5xl font-bold'>Gabriella Martins</h1>
                <h2 className='text-white text-2xl'>Web developer</h2>
                <p className='text-white'>Desenvolvedora web apaixonada por tecnologia e artes. 
                    Venha descobrir meus projetos e conhecer mais sobre o meu trabalho. </p>
                <div className="flex py-4">
                <button className='rounded-full shadow-lg flex bg-white text-cyan-500 py-2 px-4 gap-2'>Download CV 
                <DownloadSimple size={24} />
                </button>
              </div>
                </div>
                <div>
                    <img src={desenho} alt="desenho dev" className='w-72'/>
                </div>

            </div>
          </div>
        </div>

        <div className='bg-cyan-700'>
            <h2 className='text-white text-4xl text-center pt-6'>Skills</h2>
            <div className='flex justify-center gap-8 p-14 pt-7'>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
            </div>
            <div className='flex justify-center gap-8 p-14 pt-0'>
            <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
                <button className='rounded-[31px] shadow-lg bg-white text-cyan-500 py-6 px-6'>tailwindcss</button>
            </div>

        </div>

        <div className='bg-white flex justify-center pt-32'>
            <div className='container'>
                <div className="grid grid-cols-2 items-center place-items-center">
                    
                    <div className='flex ml-56'>
                        <img src={fotogab} alt="foto da gabs" className='w-72 rounded-[53px] border-2 border-cyan-500 shadow-lg shadow-cyan-500/50 '/>
                    </div>

                    <div className='mr-56 grid gap-2'>
                    <h1 className='text-5xl font-bold text-cyan-500'>Sobre Mim</h1>
                    <p>Desde pequena, sempre fui apaixonada por tecnologia e artes. Sou formada em Ciência da Computação pela Universidade Paulista - UNIP, onde desenvolvi habilidades em comunicação, trabalho em equipe e proatividade. Realizei um estágio na Santos Port Authority, oferecendo suporte de TI e aprimorando minhas competências em Scrum e GLPI.</p>
                    <p>Recentemente, concluí um bootcamp imersivo em desenvolvimento full stack Java pela Generation Brasil, onde trabalhei com tecnologias como JAVA, SPRING FRAMEWORK, SQL, JAVASCRIPT, REACT, HTML/CSS. Além disso, sou atriz, bailarina e gamer, combinando minhas paixões para criar soluções inovadoras e criativas.</p>
                    </div>

                </div>
            </div>
        </div>

        <div className='bg-white flex justify-center pt-32'>
            <div className='text-center container w-/12 h-96'> 
                <h1 className='text-lg'>Conheça meus</h1>
                <h2 className=' text-cyan-500 text-4xl font-bold'>Projetos</h2>

                <div className='grid grid-cols-3 mt-10 gap-2'>
                    <div className='bg-cyan-500 border-2 border-black rounded-[31px]'>
                        NOME PROJETO
                    </div>

                    <div className='flex justify-center'><ArrowCircleRight size={120} className='text-cyan-500 '/></div>
                    
                    <div className='bg-amber-100 border-2 border-black rounded-[31px]'>
                        PRINT PROJETO
                    </div>

                </div>


            </div>
           


        </div>
      
      </>
    );
}

export default Home;