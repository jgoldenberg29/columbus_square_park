import { InstagramEmbed } from 'react-social-media-embed'


export default function ImageCard({image}) {

    return (
        <>
            {/* <img className='xxs:max-w-5 xs:min-w-10 sm:min-w-20 md:w-36 lg:w-52 xl:min-w-70 rounded-sm' src={image}/> */}
            <InstagramEmbed url="https://www.instagram.com/p/C2SVvKeOzaw/" width={200} height{200}/>
        </>
    )
}
