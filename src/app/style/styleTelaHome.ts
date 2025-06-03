const stylePadrao = `flex flex-col`;

const styleTelaLogin = {
  imgHomeWallpaper: `${stylePadrao} flex flex-col items-center  h-screen bg-[url(./img/img-login2.png)] 
    bg-no-repeat bg-cover  w-screen`,

  imgHomeLoading: `${stylePadrao} flex flex-col items-center justify-center  h-screen bg-[url(./img/img-login2.png)] 
    bg-no-repeat bg-cover  w-screen `,

  divVidroHome: `${stylePadrao} gap-2 bg-whitebg-white/30 backdrop-blur-md rounded shadow-lg 
    border border-white/20 text-white w-[90%] p-4  rounded-xl mt-5`,

  divVidroHomeLoading: `${stylePadrao} gap-2 bg-whitebg-white/30 backdrop-blur-md rounded shadow-lg 
  border border-white/20 text-white md:w-[20rem] w-[18rem] p-4  rounded-xl`,

  //prettier-ignore
  wallpapers: "object-cover rounded-lg cursor-pointer w-[20rem] h-[20rem] hover:brightness-50 ",

  titleLoading: `text-2xl text-center`,
};

export default styleTelaLogin;
