import React, {usestate} from "react"
import image from "../images"
import textcontent from "./textcontent-"
import chefABCsection from "./chefABCsection" 
import ovalimagesection from "./ovalimagesection"

export default function herosection() {
    const [images, setimages]= useState([
       { src:"/images/yellow bg.png",
        alt:"avocado"
    },

    { src:"/images/white bg.png",
        alt:"brocolli"
    },

    { src:"/images/kale.png",
        alt:"sukuma wiki"
    },
    ])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-8 md:p-12 gap-2'>
      {/* text content */}
      <textContent/>

      {/* image content */}
      <div>
         <image src={'./images/food.png'} alt='food'/>
      </div>
      {/* white and yellow  oval background imGES */}
      <ovalImagescontent    image={images}       />

      {/* chef ABC Section */}
      <chefABCcomponent/>

    </div>
  )
}
