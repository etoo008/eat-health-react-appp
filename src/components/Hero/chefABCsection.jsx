export default function chefABCsection() {
  const images = [
    {
      src: "/images/slicedtomato.png",
      alt: " tomato zetu",
    },

    {
      src: "/images/letteus.png",
      alt: "sweet letteus",
    },

    {
      src: "/images/popcorns.png",
      alt: "popcorns kali",
    },
  ];
  return (
    <div className="flex flexcol ">
      <div>
        <h3>chef ABC</h3>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper {""}
        </P>
      </div>
      <div className="flex justify-between items-center">
        {
       images.map((img,i)=><image key={i} {...img} />   )
        }
      </div>
    </div>
  );
}
