import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  console.log(userDetails);
  const {
    id,
    name,
    username,
    email,
    phone,
    website,
    address: { street, suite, city },
    company: { name: companyName, catchPhrase },
  } = userDetails;

  return (
    <div>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="Nike Air Max 21A"
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src="https://picsum.photos/200"
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                {id}:{username}
              </h2>
              <h1 className="my-4 text-3xl font-semibold text-black">{name}</h1>

              <p className="leading-relaxed font-bold">
                Company: {companyName}
                <br />
                {catchPhrase}
                <br />
                Street: {street}
                <br />
                Suite: {suite}
                <br />
                City: {city}
                <br />
                Phone: {phone}
                <br />
                Email: {email}
                <br />
                Website: {website}
              </p>
              <Link to="/users">
                <button className="mt-6 inline-flex items-center rounded border-0 bg-black px-6 py-2 text-white">
                  back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
