import React from 'react'
import './TeamMember.css'

function TeamMember({ image, name, role, text }) {



    return (
        <div className='teamMember'>
            <div className="teamMemberVisible">
                <img src={image} width={'100%'} height={356} alt="Member" />
                <div className="teamMemberHidden">
                    <div className='teamMemberHiddenText'>
                        <p>{name}</p>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
            <p className='teamMemberName'>{name}</p>
            <p className='teamMemberRole'>{role}</p>

        </div>
    )
}

export default TeamMember