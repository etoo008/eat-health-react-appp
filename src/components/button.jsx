

export default function button(label, className="", children) {
  return (
   <button className={'px-6 py-2 mx-auto rounded-md text-white bg-black ${className}'}>{children?children:label}</button>
  )
}
