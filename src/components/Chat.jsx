import React from 'react'
import emailjs from '@emailjs/browser';
import { MdChat } from 'react-icons/md'

const Chat = () => {
        const handleEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3s3ip08', 'template_1uahw9r', e.target, 'oCevdRnvvsh-VZu47')
        .then(function(response) {
          handleChatClick()
       }, function(error) {
          console.log('FAILED...', error);
       });
      }

      const [showChat, setShowChat] = React.useState(false);
    const handleChatClick = () => {
        if(!showChat) {
            setShowChat(true)}
        else {
            setShowChat(false)}
    }

  return (
    <div>

    
    <div className={!showChat?'chat chat-not-live': 'chat chat-live'}>
        <h2>#getInTouchNow</h2>
        <form onSubmit={handleEmail}>
            <div className="input-layout">
            <input 
            type="text"  
            id='name' 
            name= 'name'
            placeholder='Name' 
            // onChange={onChange}
            />
            </div>
            <div className="input-layout">
            <input 
            type="email"  
            id='email' 
            name='email' 
            placeholder='Email'
            // onChange={onChange}
            />
            </div>
            <div className="input-layout">
            <input 
            type="text"  
            id='phone' 
            name='phone' 
            placeholder='Telephone'
            // onChange={onChange}
            />
            </div>
            <div className="input-layout">
            <textarea type="text"  
            id='message' 
            name='message'
            placeholder='Your message' 
            // onChange={onChange} 
            cols="30" 
            rows="6"></textarea>
            </div>
            <button>Send</button>
        </form>
    </div>
        <div className='chat-icon' onClick={handleChatClick}><MdChat/></div>
        </div>
  )
}

export default Chat
