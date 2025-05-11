import resumeImg from '../images/resume.jpg'
export default function Resume(){
    const config ={
        link : ''
    }
    return(
        <> <section id="resume" className='flex md:flex-row flex-col bg-secondary px-5'>
            <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img  className='w-[300px]'src= {resumeImg}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
            <div className="flex flex-col justify-center text-white">
                 <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold" >Resume</h1>
                <p className="pb-5" >You can view my Resume <a  className='btn' href={config.link}>Download</a></p>    
            </div>   
            </div>
        </section>
        
        </>
    )

}