import React from "react";
import useApplicationData from "hooks/useApplicationData";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "../components/Appointment/index";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  let dailyAppointments = getAppointmentsForDay(state, state.day);

  const appointment = dailyAppointments.map((appointmentItem) => {
    const interview = getInterview(state, appointmentItem.interview);
    const interviewers = getInterviewersForDay(state, state.day);

    return (
      <Appointment
        key={appointmentItem.id}
        id={appointmentItem.id}
        time={appointmentItem.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
            days={state.days} 
            value={state.day} 
            onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
