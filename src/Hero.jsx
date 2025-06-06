import Design from "./Design";
const Hero = () => {
  return (
    <div className="ml-14 my-18">
      <div className="w-9/12">
        <h1 className="uppercase font-bold text-4xl mb-4"> contact us</h1>
        <p className="font-[600] text-gray-500">
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div>
        <Design />
      </div>
    </div>
  );
};

export default Hero;
