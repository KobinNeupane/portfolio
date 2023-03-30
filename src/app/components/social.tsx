import React from 'react'

const Social = () => {
    const social = [
        {
            name: 'Github',
            link: 'https://github.com/KobinNeupane'
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/kobinneupane',
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/kobin_neupane',
        },
        {
            name: 'Facebook',
            link: 'https://facebook.com/kobinneupane',
        },
        {
            name: 'Linkedin',
            link: 'https://linkedin.com/kobinneupane',
        },
    ]

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Social</h2>
                <ul className="list-inside">
                    {
                        social.map((social, index) => (
                            <li key={index}>
                                <a href={social.link} target='_blank' className='italic underline text-primary'>
                                    <span>{social.link}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Social