import AboutImg from "../images/About.png.png"
export default function About(){
    const config ={
        line1: 'Hi, My name is Karthick. I am a MERN-Stack Developer. I built beautiful Websites with React.JS and Tailwind CSS',
        line2:'I am Proficient in Frontend Skills like React.js,Redux,Redux Tool kit ,Tailwind CSS, CSS3,and many more', 
        line3:'In Backend I know Node.js, Express.js,MongoDB'
    }
    return(
        <> <section className='flex md:flex-row flex-col bg-secondary px-5' id="about">
            <div className=' py-5 md:w-1/2'>
                <img  className=''src= {AboutImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
            <div className="flex flex-col justify-center text-white">
                 <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold" >About Me</h1>
                <p className="pb-5" >{config.line1}</p>
                <p className="pb-5"> {config.line2}</p>
                <p className="pb-5">{config.line3}</p>
            </div>   
            </div>
        </section>
        
        </>
    )

}