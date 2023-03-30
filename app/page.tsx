
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Main } from "./components/Main"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <a className='fixed bottom-5 right-5 lg:fixed lg:bottom-10 lg:right-10 rounded-full shadow-xl shadow-gray-400 cursor-pointer p-2 bg-stone-100 hover:scale-125 ease-in duration-100'
        href="#">
        <HiOutlineChevronDoubleUp
          className='text-[#a0522d]'
          size={30} />
      </a>
    </div>
  )
}
