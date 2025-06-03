"use client";
import React from "react";
import styleTelaLogin from "./style/styleTelaLogin";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

export default function Home() {
  const router = useRouter();
  const userName = React.useRef("");
  const email = React.useRef("");
  const password = React.useRef("");

  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const [imageBackgroundLogin, setImageBackgroundLogin] = React.useState<
    string | ArrayBuffer | null
  >("./img/img-login2.png");

  const logar = () => {
    if (
      userName.current === "" ||
      email.current === "" ||
      password.current === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.current)) {
      alert(
        "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo especial."
      );
      return;
    }

    localStorage.setItem("userData", JSON.stringify(userName.current));
    alert("Usuário logado com sucesso!");
    router.push("/Home");
  };

  return (
    //prettier-ignore
    <section className={styleTelaLogin.imgLogin} 
    >
      <div className={styleTelaLogin.divLogin}>
        <h3 className={styleTelaLogin.titleLogin}>Login</h3>
        <label>Digite o seu nome</label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className={styleTelaLogin.styleInputLogin}
          onChange={(e) => (userName.current = e.target.value)}
        />
        <label>Digite o seu email</label>
        <input
          type="text"
          placeholder="Digite o seu email"
          className={styleTelaLogin.styleInputLogin}
          onChange={(e) => (email.current = e.target.value)}
        />
        <label>Digite o sua senha</label>

        <div className={styleTelaLogin.styleInputLoginSenhaDiv}>
          <input
            type={isShowPassword ? "text" : "password"}
            placeholder="Digite a sua senha"
            className={"outline-none w-full border-none"}
            onChange={(e) => (password.current = e.target.value)}
          />

          {!isShowPassword ? (
            <FaEye
              className="cursor-pointer ml-2"
              onClick={() => setIsShowPassword(true)}
            />
          ) : (
            <FaRegEyeSlash
              className="cursor-pointer ml-2"
              onClick={() => setIsShowPassword(false)}
            />
          )}
        </div>

        <div className={styleTelaLogin.btnLogarDiv}>
          <button className={styleTelaLogin.styleButton} onClick={logar}>
            Logar
          </button>
        </div>
      </div>
    </section>
  );
}
