import React from "react";
import MediumEditor from "medium-editor";

class ReactMediumEditor extends React.Component {
  componentDidMount() {
    this.editor = new MediumEditor(this.refEditor);
    this.editor.setContent(this.props.text);
    this.editor.subscribe("editableInput", e => {
      if (this.props.onChangeText)
        this.props.onChangeText(
          e.target && e.target.innerHTML,
          e.target && e.target.innerText
        );
    });
  }

  componentDidUpdate() {
    this.editor.saveSelection();
    this.editor.setContent(this.props.text, 0);
    this.editor.restoreSelection();
  }

  render() {
    return (
      <div className="wrapped-editor" ref={ref => (this.refEditor = ref)} />
    );
  }
}

export default ReactMediumEditor;
