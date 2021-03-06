import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

class BinsEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin._id, content)
  }
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          onChange={this.onEditorChange.bind(this)}
          value={this.props.bin.content}
          options={{ mode: 'markdown', lineNumbers: true }}
        />
      </div>
    )
  }
}

export default BinsEditor
