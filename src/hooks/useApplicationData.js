import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => {
    return setState({ ...state, day });
  };

  useEffect(() => {
    const daysUrl = "/api/days";
    const appointUrl = "/api/appointments";
    const interviewersUrl = "/api/interviewers";

    Promise.all([
      axios.get(daysUrl),
      axios.get(appointUrl),
      axios.get(interviewersUrl),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function findDay(day) {
    const daysOfWeek = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4
    }
    return daysOfWeek[day]
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const dayOfWeek = findDay(state.day)
    let day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek]
    }

    if (!state.appointments[id].interview) {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots - 1
      } 
    } else {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots
      } 
    }

    let days = state.days
    days[dayOfWeek] = day;


    const url =`/api/appointments/${id}`;
    return axios.put(url, appointment).then(() => {
      setState({...state, appointments,days});
    })
  }


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const dayOfWeek = findDay(state.day)

    const day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek].spots + 1
    }

    let days = state.days
    days[dayOfWeek] = day;

    const url = `http://localhost:8001/api/appointments/${id}`;
    return axios.delete(url, appointment).then(() => {
      setState({ ...state, appointments });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
