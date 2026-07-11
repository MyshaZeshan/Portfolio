import React from 'react'
import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [loading,setloading] = useState(false);
    const[form,setform] = useState({
        name: '',
        email:'',
        message:'',
    })

    const handleChange=({target : {name,value}})=>{
        setform({...form,[name]:value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log("Form data:", form); 
        setloading(true);
        try{
            await emailjs.send('service_ziso4sq','template_4ggudah',{
            from_name:form.name,
            to_name:'Mysha Zeshan',
            from_email:form.email,
            to_email:'mysha.zeshan01@gmail.com',
            message:form.message
        },'mmdJ9xtmknmHnM1Xy')
        setloading(false);
        alert('your message have been sent')
        } catch(error){
            alert('something went wrong!')
        }
        

    }
  return (
    <section className='c-space my-10'>
        <h3 className='head-text text-white'>
            Contact Me
        </h3>
        <div className='relative min-h-screen flex items-center justify-center flex-col '>
            <img src= '/assets/terminal.png' alt = 'terminal background' className='absolute w-full h-full lg:object-contain '/>
            <div className=' contact-container '>
                <h3 className='head-text text-white'>
                    let's talk
                </h3>
                <p className='text-lg text-white mt-3'>
                    Have a project in mind or an opportunity to discuss? I'd love to connect.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7' >
                    <label className = "space-y-3">
                        <span className='field label text-gray-400  font-medium text-lg'>Full Name</span>
                        <input type='text' name='name' value={form.name} onChange={handleChange} required className="field-input" placeholder='Evan Lee'/>
                    </label>

                    <label className = "space-y-3">
                        <span className='field label text-gray-400  font-medium text-lg'>Email</span>
                        <input type='email' name='email' value={form.email} onChange={handleChange} required className="field-input" placeholder='Evan@gmail.com'/>
                    </label>

                    <label className = "space-y-3">
                        <span className='field label text-gray-400  font-medium text-lg'>Your Message</span>
                        <textarea type='text' name='message' value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi I'm interested in..."/>
                    </label>

                    <button className='field-btn' type='submit' disabled = {loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                    </button>
                </form>
            </div>
        </div>
        

    </section>
  )
}

export default Contact