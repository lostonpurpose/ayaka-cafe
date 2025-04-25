import Card from "./components/card";

export default function Home() {
  return (
    <>
      <div className="flex w-full">
        <div className="grid grid-cols-3 gap-4 flex-1" infoText="poop">
          <Card imgSrc="/pexels-chevanon-302904.jpg" />
          <Card imgSrc="/pexels-jayoke-851555.jpg" />
          <Card imgSrc="/pexels-julieaagaard-2351275.jpg" />
          <Card imgSrc="/pexels-mew-wy-1427872-2910874.jpg" />
          <Card imgSrc="/pexels-myfoodie-2638019.jpg" />
          <Card imgSrc="/pexels-chevanon-312418.jpg" />
          <Card imgSrc="/pexels-pixabay-414630.jpg" />
          <Card imgSrc="/pexels-valeriiamiller-3020919.jpg" />
          <Card imgSrc="/pexels-victorfreitas-685527.jpg" />
        </div>
        <div className="w-[31%] bg-gray-200">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}
