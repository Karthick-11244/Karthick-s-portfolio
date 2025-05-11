
export default function Contact(){
    const config = {
        email:'mskarthick8769@gmail.com',
        
    }
    return(
        <> <section  id="contact"className='flex  flex-col  bg-primary px-5 py-[32px] text-white '>
            <div className='flex  flex-col items-center'>
                 <h1 className="text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold" >Contact</h1>
                <p className="pb-5" >If you want to discuss more in details, Please contact me</p>
                <p className="py-2"> <span className="font-bold">Email :{config.email} </span></p>
                <p className="py-2"> <span className="font-bold">Phone : 91+ 6382168769 </span></p>
            </div>   
        </section>
        
        </>
    )

}