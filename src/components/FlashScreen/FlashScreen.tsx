import Image from 'next/image'

const images = require.context("../../../public/images/flash", true );
const imageList = images.keys().map(image => images(image));

export const FlashScreen = () => {
    return imageList.map((image, i) => (
            <Image
            key={i}
            src={image.default}
            style={{margin: 20, borderRadius: 25}}
            width={300}
            height={400}
            alt="Picture of the author"
          />
          ))
    
}
  