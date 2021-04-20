import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { EventCategories } from "../../EventCategories";
import { NavBar } from "../../NavBar";
import { EventPage } from './EventPage';
import { YourEvents } from "./YourEvents";

const MainPage = () => {
    const isLoggedin = useSelector(state => state.authReducer.isLoggedin);
    const isLoading = useSelector(state => state.eventReducer.isLoading)
    useEffect(() => {
        if (isLoading) {
            document.title = "Hold on for a minute"
        } else {
            document.title="Meetup - We are what we do"
        }
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!isLoggedin) {
        return (
            <Redirect to="/" />
        )
    }


    return (
        <div>
            <NavBar />
            <EventPage event="yourEvents" />
            <EventPage event="saved" />
            <EventPage event="near_by" />
            <EventPage event="career & Business" />
            <EventPage event="Outdoors & Adventure" />
            <EventPage event="Learning Events" />
            <EventPage event="Health & Wellness" />
            <EventPage event="Tech" />
            <EventCategories />
            
        </div>
    )
}

export { MainPage }