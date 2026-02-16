const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black/80 to-transparent">
      <div className="px-6 md:px-12 py-4">
        <img
          className="
          w-32
          md:w-40
          lg:w-44
          object-contain
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
          "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
        />
      </div>
    </div>
  );
};

export default Header;
