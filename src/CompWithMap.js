import React, {Component} from 'react'

function Methods({preparedMethods}) {
  return preparedMethods
}

class CompWithMap extends Component {
  state = {
    methods: [],
  }

  render() {
    const {methods} = this.state
    const preparedMethods = methods.map(method => method)
    return (
      <div>
        <Methods preparedMethods={preparedMethods} />
      </div>
    )
  }
}

export default CompWithMap
