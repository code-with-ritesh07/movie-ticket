import { movies } from "@/lib/constants";
import { IndianRupee, Star, Timer, TvMinimalPlay } from "lucide-react";
import { useParams } from "react-router";
import { Button } from "./ui/button";

import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export const TicketForm = () => {
  const { id } = useParams();
  const [isBooking, setIsBooking] = useState(false);

  const movie = movies.find((movie) => movie.id === Number(id));

  const handleBooking = () => {
    setIsBooking(true);
  };

  return (
    <>
      <div className="relative">
        <img
          src={movie?.imageUrl}
          className="w-screen h-[500px] object-cover "
        />

        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black backdrop:blur-2xl opacity-[0.8] flex items-center">
          <div className="flex items-center pl-20 gap-x-4">
            {/* Left Part */}

            <div>
              <img
                src={movie?.imageUrl}
                className=" h-[300px] w-[200px] rounded-xl"
              />
            </div>

            {/* Right Part */}

            <div className="space-y-6">
              <h1 className="text-white text-3xl">{movie?.title}</h1>
              <div className="w-[500px] h-12 bg-[#3b444b]  rounded-2xl flex items-center px-4 justify-between">
                <h2 className="flex gap-x-2">
                  {" "}
                  <Star fill="#dc354b" className="text-[#dc354b]" />
                  <span className="text-white font-bold">
                    {movie?.imdRating}/10 (3.8k+ votes)
                  </span>
                </h2>

                <Button>Rate Now</Button>
              </div>

              <Button className="w-[280px]" onClick={handleBooking}>
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isBooking && <BookingForm />}

      {/* About Section */}
      <div className="p-10">
        <h1 className="text-3xl font-medium"> About</h1>
        <p className="text-muted-foreground ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis
          suscipit reiciendis officia exercitationem cupiditate placeat id
          tenetur eius aspernatur optio saepe doloribus nemo, tempore iure
          commodi facilis ipsam voluptate. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Libero, cum beatae nobis temporibus
          nostrum amet exercitationem quisquam? Quae, animi ipsum? Repellendus
          cupiditate accusamus iusto, soluta odit ullam repellat tenetur
          quibusdam.
        </p>
      </div>
    </>
  );
};

const peopleNumber = ["1", "2", "3", "4"];
const theaters = ["Kurla", "PVR", "Wadala", "IMax"];
const times = ["3am to 6am", "10am to 1pm", "2am to 5pm", "6pm to 9pm"];

const BookingForm = () => {
  const [selectedTheater, setSelectedTheater] = useState("PVR");
  const handleTheater = (theater: string) => {
    setSelectedTheater(theater);
  };

  const [selectedTime, setSelectedTime] = useState("3am to 6am");
  const handleTime = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-center">
        <h1 className="text-3xl text-[#dc354b] font-semibold">
          Book Your Ticket
        </h1>
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-medium ">No of People</h1>
        <div className="flex pl-4 gap-x-4">
          {peopleNumber.map((people) => (
            <span key={people}>
              <Input type="radio" name="people" />{" "}
              <span className="font-bold"> {people}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-medium ">Select Theaters</h1>
        <div className="flex pl-4 gap-x-4">
          {theaters.map((theater) => (
            <span
              onClick={() => handleTheater(theater)}
              key={theater}
              className={cn(
                "border-amber-400 border-2 p-2 rounded-md h-20 w-30 flex justify-center items-center gap-2 cursor-pointer",
                selectedTheater === theater ? "border-green-700" : ""
              )}
            >
              <TvMinimalPlay /> {theater}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-medium "> Select Time</h1>
        <div className="flex pl-4 gap-x-4">
          {times.map((time) => (
            <span
              onClick={() => handleTime(time)}
              key={time}
              className={cn(
                "border-blue-400 border-2 p-2 rounded-md  flex justify-center items-center gap-2 cursor-pointer",
                selectedTime === time ? "border-green-700" : ""
              )}
            >
              {" "}
              <Timer /> {time}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium "> Select Sheet Arrangement</h1>

        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-x-4">
            <span className="font-bold">A</span>{" "}
            <div className="gap-2 flex items-center ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (seat) => (
                  <h3 className="size-10 text-center text-white font-bold p-1 bg-slate-400  rounded-sm">
                    {seat}
                  </h3>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="font-bold">B</span>{" "}
            <div className="space-x-2 flex items-center ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (seat) => (
                  <h3 className="size-10 text-center text-white font-bold p-1 bg-slate-400  rounded-sm">
                    {seat}
                  </h3>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="font-bold">C</span>{" "}
            <div className="space-x-2 flex items-center ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (seat) => (
                  <h3 className="size-10 text-center text-white font-bold p-1 bg-slate-400  rounded-sm">
                    {seat}
                  </h3>
                )
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="font-bold">D</span>{" "}
            <div className="space-x-2 flex items-center ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (seat) => (
                  <h3 className="size-10 text-center text-white font-bold p-1 bg-slate-400  rounded-sm">
                    {seat}
                  </h3>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button className="w-[300px]">
          {" "}
          <IndianRupee className="size-4" /> 500 Payment
        </Button>
      </div>
    </div>
  );
};
