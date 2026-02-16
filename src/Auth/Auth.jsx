import Header from "./Header";
import Form from "./Form";

const Auth = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <Header />

        {/* BACKGROUND IMAGE */}
        <img
          className="fixed inset-0 w-full h-full object-cover -z-20"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_large.jpg"
          alt=""
        />

        {/* DARK OVERLAY */}
        <div className="fixed inset-0 bg-black/70 -z-10" />

        <Form />
      </div>
    </>
  );
};

export default Auth;
