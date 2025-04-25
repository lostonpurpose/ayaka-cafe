import Card from "./components/card";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <div className="grid grid-cols-3 gap-4 flex-1">
          <Card imgSrc="/pexels-chevanon-302904.jpg" infoText="The Dandy" />
          <Card imgSrc="/pexels-jayoke-851555.jpg" infoText="The Francisco de la Rone" />
          <Card imgSrc="/pexels-julieaagaard-2351275.jpg" infoText="Cinnamon Purge" />
          <Card imgSrc="/pexels-mew-wy-1427872-2910874.jpg" infoText="For Those with Inadequacy Issues" />
          <Card imgSrc="/pexels-myfoodie-2638019.jpg" infoText="Minimalist Romantic" />
          <Card imgSrc="/pexels-chevanon-312418.jpg" infoText="Barista's Show Off" />
          <Card imgSrc="/pexels-pixabay-414630.jpg" infoText="Hope You Don't Get Cancer" />
          <Card imgSrc="/pexels-valeriiamiller-3020919.jpg" infoText="Good Luck Staying Together" />
          <Card imgSrc="/pexels-victorfreitas-685527.jpg" infoText="Too Good for This Place" />
        </div>
        <div className="w-[31%] bg-gray-200">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}
