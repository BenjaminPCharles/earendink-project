import Image from 'next/image'

const images = require.context("../../../public/images/illustration", true);
const imageList = images.keys().map(image => images(image));

export const IllustrationScreen = () => {
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

  