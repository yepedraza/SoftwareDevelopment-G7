import React, {Component} from 'react'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/

class Actualdate extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

        this.state = {
            date: date
        };
    }
    render() {
        return (
            <span>{this.state.date}</span>
        )
    }
}
export default Actualdate;