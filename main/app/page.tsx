import Encryption from '@/components/main/Encryption'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Chatbot from '@/components/sub/Chatbot'
export default function Home() 
{
  return(
    <main className='h-full w-full'>
      <div className="flex flex-col gap-2">
        
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>)
}