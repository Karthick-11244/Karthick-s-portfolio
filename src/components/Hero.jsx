import HeroImg from '../images/Hero.png.png'
import { AiOutlineLinkedin, AiOutlineGithub,AiOutlineFacebook} from "react-icons/ai";
export default function Hero(){
    const config = {
        subtitle: "Im a Web-developer"
    }
    

    return(
        <>
        <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2  flex flex-col'>
            <h1 className='  text-white text-6xl font-hero-font'>Hi, <br/> Im Karthick..!
            <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a  target='_blank' className='pr-5 hover:text-white'href="https://linkedin.com/in/ms-karthick"><AiOutlineLinkedin size={40}/></a>
                <a  target='_blank' className='pr-5  hover:text-white'href="https://github.com/Karthick-11244"><AiOutlineGithub  size={40} /></a>
                <a   target='_blank'className=' hover:text-white'href=""><AiOutlineFacebook  size={40}/></a>
            </div>
            </div>
            <img className='md:w-1/3 ' src={HeroImg} />
           
        </section>
        </>
    )

}