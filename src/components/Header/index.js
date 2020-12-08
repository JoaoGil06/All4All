import React from "react";

import { Link } from "react-router-dom";

import { Container, LogoAll4All, LogoutButton } from "./styles";
import { FiPower } from "react-icons/fi";

import logo from "../../assets/Logo.svg";
import { useAuth } from "../../context/auth";
import { auth } from "../../firebase";

const Header = () => {
  const { user } = useAuth();

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <Container>
      <div>
        <Link to="/">
          <LogoAll4All src={logo} alt="All 4 All" />
        </Link>
        {user ? <span>Bem-vinda, {user?.name}</span> : ""}
      </div>

      {user ? (
        <div>
          <Link className="button" to="/profile">
            Perfil
          </Link>
          <Link className="button" to="/incidents/new">
            Registar novo caso
          </Link>
          <LogoutButton type="button">
            <FiPower size={18} color="#E02041" onClick={handleSignOut} />
          </LogoutButton>
        </div>
      ) : (
        <div>
          <Link className="button" to="/login">
            Entrar
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Header;
