import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Router, useRouter } from "next/router";
import { Container } from "@material-ui/core";
import Btn from "../Button";
import styles from "./styles.module.scss";
const Layout = ({ children }) => {
  const {
    auth: { user },
  } = useSelector((state) => state);
  const router = useRouter();
  return (
    <Container>
      <div className={`d-flex justify-content-between align-items-center mb-3`}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/imgs/Nextjs-logo.png"
            alt="Next-logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {user?.email ? (
          <div className="d-flex">
            <h3>{user.email}</h3>
          </div>
        ) : (
          <Btn
            content="Login"
            onClick={() => router.push("/Auth/Login")}
            className={styles.submitBtn}
          />
        )}
      </div>
      {children}
    </Container>
  );
};

export default Layout;
