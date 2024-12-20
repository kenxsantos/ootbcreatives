import React from 'react'

const EventsManagement = () => {
  return (
    <div>
      <header>
        <h1 className="font-metropolis text-2xl font-bold text-white text-center mb-4">Create Buzz, &nbsp;
        <span className="text-orange-red">Attract Crowds </span>, Ignite Sales.</h1>
      </header>
      <div>
          <img src="/assets/eventsmanagement/conceptualization/1.webp" alt=""  />
        <p className="text-white text-justify mt-2 font-jost text-lg">
            Out of the Box Creatives excels in turning abstract ideas into vivid, unforgettable experiences. Our team will collaborate with you to create a unique and inspiring theme that perfectly aligns with your brand and event objectives.
          </p>
      </div>
      <div className="flex w-full gap-2">
        <div className="w-1/2">
          <p className="text-white text-justify mt-2 font-jost text-lg">
            Out of the Box Creatives excels in turning abstract ideas into vivid, unforgettable experiences. Our team will collaborate with you to create a unique and inspiring theme that perfectly aligns with your brand and event objectives.
          </p>
        </div>
        <div className="w-1/2">
          <img src="/assets/eventsmanagement/conceptualization/1.webp" alt=""  />
        </div>
      </div>

    </div>
  )
}

export default EventsManagement
