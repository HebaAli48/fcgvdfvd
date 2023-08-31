const MyLogo = () => {
  const letterStyle = "shadow-md p-1 inline-block hover:scale-110 rounded-full";
  return (
    <>
      <p
        className={`text-2xl md:text-3xl  font-bold hover:translate-x-[2px] transition-all  text-black`}
      >
        <span className={`bg-red-500 ${letterStyle}`}>H</span>
        <span className={` bg-red-200   relative sm:top-3 ${letterStyle}`}>
          E
        </span>
        <span className={`bg-yellow-200 ${letterStyle}`}>B</span>
        <span className={` bg-green-200   relative sm:top-3 ${letterStyle} `}>
          A
        </span>
      </p>
    </>
  );
};

export default MyLogo;
