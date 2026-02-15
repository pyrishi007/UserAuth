import Header from "./Header";
import Form from "./Form";

const Auth = () => {
    


  return (
    <>
      <div className=" w-full relative">
        <Header />
        <img
          className=" fixed object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_large.jpg"
          alt=""
        />
      </div>
      <Form />
    </>
  );
};

export default Auth;
