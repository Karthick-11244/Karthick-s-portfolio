import websiteImg1 from '../images/portfolio.jpg'
import websiteImg2 from '../images/e-com.jpg'
import websiteImg3 from '../images/weather.jpg'
export default function Project() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A portfolio Website built with React.js and TailwindCSS',
                link: ''
            },
            {
                image: websiteImg2,
                description: 'E-commerce Website built with React.js and Redux',
                link: 'https://github.com/Karthick-11244/Mart-app-React-Js'
            },
            {
                image: websiteImg3,
                description: 'Weather API website Built with vannila JavaScript and CSS',
                link: 'https://github.com/Karthick-11244/Weather_App'
            }
        ]
    }
    return (
        <>
            <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
                <div className='w-full'>
                    <div className='flex flex-col px-10 py-5'>
                        <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold">Projects</h1>
                        <p> These Are Some Of My Best Projects. I Have Built These With React.JS,MERN and Vanilla Javascript</p>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex flex-col md:flex-row px-10 gap-5'>
                        {config.projects.map((project) => (
                           
                                <div className='relative'>
                                    <img className='h-[200px] w-[500px]' src={project.image} alt="portfolio" />
                                    <div className='project-desc'>
                                        <p className='text-center px-5  py-5'>{project.description}</p>
                                          <div className='flex justify-center'>
                                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                                    </div>
                                    </div>
                                </div>
                          
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}