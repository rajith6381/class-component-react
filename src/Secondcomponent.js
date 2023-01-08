import React, { Component } from 'react'
export default class Secondcomponent extends Component {
  render() {
    return (
      <div>
        hi{this.props.name}{this.getData.param}
      </div>
    )
  }
}
