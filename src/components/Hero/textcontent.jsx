import button from "../button";
export default function textcontent() {
  return (
    <div className="flex flex-col gap-10 py-12">
      {/* heading */}
      <h1 className="text-4xl font-bold">A place you eat healthy</h1>
      {/* paragraph */}
      <p className="text-xl max-w-large">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
        libero risus semper habitant arcu eget. Et integer facilisi eget. Lorem
        ipsum dolor.
      </p>
      {/* button */}
      <button className="rounded-30px text-2xl m-l-0">Expore the menu</button>
    </div>
  );
}
