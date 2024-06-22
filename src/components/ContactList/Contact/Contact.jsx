import { FaUser, FaPhoneAlt } from "react-icons/fa";

import { useDispatch } from "react-redux";

import style from "./Contact.module.css";
const Contact = ({ number, name, id }) => {
  //   const dispatch = useDispatch();
  //   const handleDelete = () => {
  // dispatch()
  //   };
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <p className={style.name}>
          <FaUser className={style.icon} /> {name}
        </p>
        <p className={style.number}>
          <FaPhoneAlt className={style.icon} /> {number}
        </p>
      </div>
      <button className={style.deleteButton}>Delete</button>
    </div>
  );
};
export default Contact;
