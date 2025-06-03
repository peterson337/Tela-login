const stylePadrao = `flex flex-col`;
const inputTelaLogin = `p-2 outline-none border border-gray-300 rounded-md mb-2`;

const styleTelaLogin = {
  imgLogin: `${stylePadrao} flex flex-col items-center justify-center h-screen  
    bg-no-repeat bg-cover  w-screen`,

  divLogin: `${stylePadrao} gap-2 bg-whitebg-white/30 backdrop-blur-md rounded shadow-lg 
    border border-white/20 text-white md:w-[20rem] w-[18rem] p-4  rounded-xl`,

  titleLogin: `text-2xl text-center border-b-1 pb-3 border-[#ccc]`,

  styleInputLogin: `${inputTelaLogin}`,

  styleInputLoginSenha: "outiline-none",
  styleInputLoginSenhaDiv: `${inputTelaLogin} flex flex-row justify-between items-center`,

  btnLogarDiv:
    "border-t-1 mt-4 border-[#ccc]  flex flex-col text-align-center ",

  styleButton: ` mt-4  bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer`,

  styleChangeImage: `absolute`,
};

export default styleTelaLogin;
