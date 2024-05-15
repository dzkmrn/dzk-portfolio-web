import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'
import MetaSeo from '../components/MetaSeo'
import http from '../utilities/http'
import constant from '../utilities/constant'
import dzakaImage from '../img/dzaka.png';

// Define your custom description
const myDescription = "Hi! My name is Muhammad Dzaka Murran Rusid. I'm an undergraduate informatics engineering student at Politeknik Negeri Malang. As for now, I'm enrolling on Google Bangkit Academy 2024 as Mobile Developer Cohort. I also freelancing in my free time by working on many programming and multimedia projects under my own software house called GUDKID. I have organizational experience since highschool by joining TAKMIR54 and Hockey Club, while in POLINEMA I joined Rohani Islam Politeknik (RISPOL). I actively participate in many competitions and certifications and have won several of them. Lastly I'm a passionate learner and always eager to learn new things.";
const image = '/img/dzaka.jpg'

export default function about({ profile }) {
    return (
        <div className='flex justify-center  py-16'>
            <MetaSeo
                title="About - Dzaka"
                description={myDescription}
            />
            <div className='flex xl:w-8/12 w-full justify-center items-center flex-col'>
                <Image src={dzakaImage} data-aos="fade-up" alt='Nama Saya Muhammad Dzaka' className='rounded-full object-cover' height={235} width={240} />
                <div className='mt-12 flex flex-col justify-start w-full' data-aos="fade-up">
                    <Title>About</Title>
                    <Paragraph className='mt-8'>
                        <div dangerouslySetInnerHTML={{ __html: profile.description }} className="content-desc" />
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    return {
        props: {
            profile: {
                description: myDescription 
            }
        }
    }
}
