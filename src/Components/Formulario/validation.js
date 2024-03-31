const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validation = (contactDates) => {
  let errors = {};
  if (!regexEmail.test(contactDates.email)) {
    errors.email = "El email es invalido";
  }
  if (!contactDates.email) {
    errors.email = "el email no puede estar vacio ";
  }
  if (!contactDates.name) {
    errors.name = "el nombre no puede estar vacio";
  }
  if (!contactDates.message.length > 10) {
    errors.message = "el mensaje no debe ser menor a 10 caracteres";
  }
};

export default validation;
