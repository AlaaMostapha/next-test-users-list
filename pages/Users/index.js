import Head from "next/head";
import { useEffect } from "react";
import { usersRequest } from "../../store/Users/actions";
import { useDispatch, useSelector } from "react-redux";
import SimpleCard  from "../../Components/Card";
import { Router, useRouter } from "next/router";

export default function Home() {
  const dispatch = useDispatch();
  const {
    users: { users },
  } = useSelector((state) => state);
  const router = useRouter();

  useEffect(() => {
    dispatch(usersRequest());
  }, []);

  return (
    <div>
      <div className="row">
        <h3 className='text-center mb-4'>Welcome</h3>
        {users?.map((user) => (
          <div className="col-sm-6 mb-3" key={user?.id}>
            <SimpleCard
              raised
              role="button"
              onClick={() => router.push(`/Users/${user?.id}`)}
              data={
                <div>
                  <p>
                    <b>Name:</b> {user?.name}
                  </p>
                  <p>
                    <b>Phone:</b> {user?.phone}
                  </p>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
