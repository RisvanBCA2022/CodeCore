import React from 'react'
import './RightSideBar.css'
import pen from '../../../public/pen-solid.svg'
import Image from 'next/image'
import comment from '../../../public/comment-dots-solid.svg'
import Logo from '../../../public/Logo.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The CodeCore blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <Image src={pen} alt='' width='18' />
            <p>Meetings are the worst. Lets reduce their blast radius</p>
        </div>
        <div className='right-sidebar-div-1'>
            <Image src={pen} alt='' width='18' />
            <p>Wondering how sustainable your buildings are? Make your data speak</p>
        </div>
    </div>
    <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <Image src={comment} alt='' width='18' />
            <p>Alpha test for short survey in banner ad slots starting on week of September</p>
        </div>
        <div className='right-sidebar-div-1'>
            <Image src={pen} alt='' width='18' />
            <p>What should be next for community events?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <Image src={Logo} alt='' width='18' />
            <p>Alpha test for short survey in banner ad slots starting on week of September</p>
        </div>
        <div className='right-sidebar-div-1'>
            <Image src={Logo} alt='' width='18' />
            <p>What should be next for community events?</p>
        </div>
        
    </div>
    <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <Image src={comment} alt='' width='18' />
            <p>
What to do about [activemq] and [activemq-artemis]</p>
        </div>
        
    </div>


    </div>
  )
}

export default Widget