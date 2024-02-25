const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[14%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-lg rounded-md hover:bg-opacity-80">  Play</button>
        <button className="bg-white text-black p-2 px-12 text-lg rounded-md hover:bg-opacity-80 mx-2">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
