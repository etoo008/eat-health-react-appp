

export default function ovalimagesection({images}) {
  return (
    <div className="flex justify-between items-center gap-5 overflow-hidden px-2 mx-2">
      {images.map((img,i)=><div className="overflow-hidden w-1/3 "><image key={i}  {...img} className="w-full"/></div>)}
    </div>
  )
}
