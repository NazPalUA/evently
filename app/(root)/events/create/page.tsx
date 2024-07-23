import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        {userId ? (
          <EventForm userId={userId} type="Create" />
        ) : (
          <p>Sign in to create an event</p>
        )}
      </div>
    </>
  );
};

export default CreateEvent;
