import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import SimpleCard from "../../Components/Card";
import SwitchComponent from "../../Components/Switch";
import {userRequest, userRecieve,} from "../../store/Users/actions";

export default function User() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const {users: { user }} = useSelector((state) => state);
  const [active, setActive] = useState(true);
  useEffect(() => {
    dispatch(userRequest(id));
    return () => dispatch(userRecieve({}));
  }, []);

  return (
    <div>
      <Head>
        <title>User Details</title>
        <meta name="description" content="User details" />
      </Head>
      {Object.keys(user).length > 0 && (
        <SimpleCard
          raised
          data={
            <div>
              <div className="d-flex justify-content-between">
                <p>
                  <b>ID:</b> {id}
                </p>
                <div>
                  <span>{active ? "Active" : "Inactive"}</span>
                  <SwitchComponent
                  role='checkbox'
                    checked={active}
                    onChange={() => setActive(!active)}
                  />
                </div>
              </div>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Name:</b> {user.name}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Company:</b> {user.company?.name}
              </p>
            </div>
          }
        />
      )}
    </div>
  );
}
