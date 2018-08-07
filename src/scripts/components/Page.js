import React, { Component } from 'react'

export default class Page extends Component {
    render() {
        const { year, photos } = this.props
        return (
            <div>                
                <p>You have {photos.length} photos on {year} year</p>
            </div>
        )
    }
}

// Page.propTypes = {
//     year: PropTypes.number.isRequired,
//     photos: PropTypes.array.isRequired
// }