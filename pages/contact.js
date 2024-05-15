import React from 'react'
import Section from '../components/layouts/Section'
import Paragraph from '../components/text/Paragraph'
import http from '../utilities/http'
import MetaSeo from '../components/MetaSeo'
import Image from 'next/image'

export default function contact({ contacts }) {
    return (
        <Section title="Contact" className="mt-0">
            <MetaSeo
                title="Contact - Dzaka"
                description={"Here's my contact information, you can contact me through the following information. I will be very happy if you contact me."}
            />
            <div className='pb-36 w-full py-12 flex justify-between' data-aos="fade-up">
                <div className='flex-1 w-full'>
                    <Paragraph>
                        Here's my contact information, you can contact me through the following information :)
                    </Paragraph>
                    <ul className='mt-10 list-disc list-inside'>
                        {contacts.map((item, key) => <li className='mb-5' key={key}>
                            <span>{item.title} -
                                <a rel="noreferrer" href={item.link} target="_blank" className='font-semibold underline'>
                                    {item.value}
                                </a>
                            </span>
                        </li>)}
                    </ul>
                </div>
                <div className='hidden xl:block md:block pl-36 relative'>
                    <Image
                        src='/img/contact.png'
                        alt='contact-backgorund'
                        layout='fill'
                        height={200}
                        width={200}
                        objectFit="contain"
                        className={`dark:invert invert-0`}
                    />
                </div>
            </div>
        </Section>
    )
}

export async function getStaticProps() {
    // Fetch your contact data here from your own source
    const fetchedContacts = [
        {
            title: "Email",
            value: "dzaka.muran@gmail.com",
            link: "mailto:dzaka.muran@gmail.com"
        },
        {
            title: "Whatsapp",
            value: "+6281237856874",
            link: "https://wa.me/6281237856874"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/mhmddzaka",
            link: "https://linkedin.com/in/mhmddzaka"
        },
        {
            title: "GitHub",
            value: "dzkmrn",
            link: "https://github.com/dzkmrn"
        },
        {
            title: "Instagram",
            value: "@dza.muran",
            link: "https://instagram.com/dza.muran"
        }
        // Add more contacts as needed
    ];

    return {
        props: {
            contacts: fetchedContacts
        }
    };
}

