import React, { Component } from "react";
import Weather from "../components/weather";

export default class Home extends Component {

    render() {
        return (
            <main>
                <Weather />
            </main>
        );
    }
}