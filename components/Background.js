import Image from "next/future/image";

const Background = () => {
  return (
    <div className="fixed w-full h-screen isolate">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <Image
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 fixed top-0 bottom-1/2"
        src={
          "/__hu_tao_xiao_and_yelan_genshin_impact__009fc8dbb1348f0073631dfad4baddc4.jpg"
        }
        alt="Genshin Archons hanging out"
      />
    </div>
  );
};

export default Background;
