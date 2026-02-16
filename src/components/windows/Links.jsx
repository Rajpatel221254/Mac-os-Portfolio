import React from 'react'
import MacWindow from './MacWindow'
import "./links.scss"
import 'remixicon/fonts/remixicon.css'

const Links = ({ windowName, setWindowsState }) => {
  return (
    <div>
      <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="links-window">
                <h2 className='heading'>Social Links</h2>
                <div className="links">
                    <a className='link' href="https://www.linkedin.com/in/raj-patel-846b91314/" target='_blank'><i class="ri-linkedin-box-fill"></i> Linkdln</a>
                    <a className='link' href="https://x.com/rajpatel221254" target='_blank'><i class="ri-twitter-x-fill"></i> Twitter</a>
                    <a className='link' href="https://www.instagram.com/rajpatel_221254?igsh=MTE5anNxeTdnaW5kdA==" target='_blank'><i class="ri-instagram-fill"></i> Instagram</a>
                    <a className='link' href="https://wa.me/919106595897" target='_blank'><i class="ri-whatsapp-fill"></i> Whatsapp</a>
                </div>
            </div>
        </MacWindow>
    </div>
  )
}

export default Links
