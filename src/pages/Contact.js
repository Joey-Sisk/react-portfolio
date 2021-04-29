import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xleowywe");
  if (state.succeeded) {
  return (
    <main className="bg-blueGray-800">
      <div className="p-10 lg:pt-32 container mx-auto min-h-screen relative">
        <section className="bg-blueGray-500 border-b-8 border-l-4 border-blueGray-600 rounded-3xl lg:flex p-14">
          <div className="p-8 w-full">
            <h1 className="custom-font text-4xl text-blueGray-800 text-center">
              Thank You
            </h1>
            <p className="text-2xl text-blueGray-600 text-center">
              I will get back to you ASAP!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
  }
  return (
    <div className="bg-blueGray-800">
      <div className="p-10 lg:pt-32 container mx-auto min-h-screen relative">
        <section className="bg-blueGray-500 border-b-8 border-l-4 border-blueGray-600 rounded-3xl lg:flex md:p-20 p-4">
          <form className="form md:p-6 my-6 w-full" onSubmit={handleSubmit}>
            <h1 className="custom-font text-5xl text-blueGray-800 pb-8 text-center">
              Contact Me
            </h1>
            <div className="my-3">
              <input
                className="rounded-md border-2 border-blueGray-600 p-2 w-full"
                placeholder="Email"
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="my-3">
              <textarea
                placeholder="Message"
                className="rounded-md border-2 border-blueGray-600 p-2 w-full"
                id="message"
                name="message"
              />{" "}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              className="transition duration-700 w-full rounded-md border-2 border-blueGray-600 my-3 bg-violet-500 hover:bg-violet-400 text-white p-3"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

function App() {
  return <Contact />;
}
export default App;
