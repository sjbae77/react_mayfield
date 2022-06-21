import { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Menu = forwardRef((props, ref) => {
  const [Open, setOpen] = useState(false);
  const style = { color: "darkgreen" };

  useImperativeHandle(ref, () => {
    return {
      toggle: () => setOpen(!Open),
    };
  });

  return (
    <AnimatePresence>
      {Open && (
        <motion.nav
          id="gnbMb"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{ y: "-100%", opacity: 0 }}
          onClick={() => setOpen(!Open)}
        >
          <h1>
            <NavLink exact to="/">
              Mayfield
            </NavLink>
          </h1>

          <ul>
            <li>
              <NavLink activeStyle={style} to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={style} to="/gallery">
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={style} to="/youtube">
                YOUTUBE
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={style} to="/community">
                COMMUNITY
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={style} to="/location">
                LOCATION
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={style} to="/join">
                JOIN
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
});

export default Menu;
