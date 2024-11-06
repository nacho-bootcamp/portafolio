import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Formulario = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const onSubmit = (e) => {
    // evitar que se recargue
    e.preventDefault();

    // validar
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === ""
    ) {
      console.log(true);
    } else {
      emailjs
        .sendForm(
          "service_2jo51w2",
          "template_qnq9nlm",
          form.current,
          "tRIhInG7I-VJ9NZKu"
        )
        .then(
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Se envio Correctamente",
            showConfirmButton: false,
            timer: 1500,
          }),
          setContactDates({
            name: "",
            email: "",
            message: "",
          }),
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Intentalo mas tarde",
              footer: (
                <a href="https://www.linkedin.com/in/ignacio-leonel-cardozo-b34307244/">
                  Enviar mensaje por Linkedin
                </a>
              ),
            });
            console.log(error);
          }
        );
    }
  };

  const habilitar = () => {
    if (
      contactDates.name === "" ||
      contactDates.email === "" ||
      contactDates.message === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      id="Contacto"
      className=" border-white  border-r-8 border-l-8 bg-gradient-to-r from-orange-100 to-blue-200 rounded-b-[50px] "
    >
      <h1 className="text-center text-5xl font-bold text-orange-400 pt-7 pb-24">
        ¡Trabajemos <span className="text-[#544FB9]">Juntos! </span>{" "}
      </h1>

      <form ref={form} onSubmit={onSubmit} className="flex flex-col">
        <div className="flex justify-center flex-wrap relative gap-12">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              name="user_name"
              className="w-[358px] h-[19px] p-4  rounded-lg font-bold"
              onChange={(e) =>
                setContactDates({ ...contactDates, name: e.target.value })
              }
              value={contactDates.name}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="w-[358px] h-[19px] p-4  rounded-lg font-bold"
              onChange={(e) =>
                setContactDates({ ...contactDates, email: e.target.value })
              }
              value={contactDates.email}
            />
          </div>
        </div>
        <div className="relative flex justify-center m-5 ">
          <textarea
            type="text"
            placeholder="Mensaje..."
            name="message"
            className=" w-[766px] h-[190px] p-4  rounded-lg font-bold"
            onChange={(e) =>
              setContactDates({ ...contactDates, message: e.target.value })
            }
            value={contactDates.message}
          />
        </div>
        <div className=" flex justify-center mb-24">
          <button
            disabled={habilitar()}
            className={`w-[146px] h-[46px] text-white font-bold rounded-lg  ${habilitar() ? "cursor-not-allowed bg-gray-500" : "bg-two"
              }`}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
