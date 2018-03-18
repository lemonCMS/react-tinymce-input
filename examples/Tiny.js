import React from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader'
import TinyMCEInput from '../src/TinyMCEInput';

const TINYMCE_CONFIG = {
  'language': 'en',
  'theme': 'modern',
  'toolbar': 'bold italic underline strikethrough hr | bullist numlist | link unlink | undo redo | spellchecker code',
  'menubar': false,
  'statusbar': true,
  'resize': true,
  'plugins': 'link,spellchecker,paste',
  'theme_modern_toolbar_location': 'top',
  'theme_modern_toolbar_align': 'left'
};

const INLINE_TINYMCE_CONFIG = {
  inline: true,
};

class Tiny extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      editMode: false
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
  }

  onClick() {
    this.setState({editMode: !this.state.editMode});
  }

  onChange(newValue) {
    this.setState({value: newValue});
  }

  onTextAreaChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <h2>Main</h2>
        <TinyMCEInput value={this.state.value} onChange={this.onChange} tinymceConfig={TINYMCE_CONFIG} />
        <h2>Inline</h2>
        <TinyMCEInput
          component="div"
          value={this.state.value}
          onChange={this.onChange}
          tinymceConfig={INLINE_TINYMCE_CONFIG} />
        <hr />
        <h2>Raw</h2>
        <div>{this.state.value}</div>
        <hr />
        <h2>Raw Edit</h2>
        <textarea value={this.state.value} onChange={this.onTextAreaChange} cols={80} rows={30} />
        <hr />
        <h2>Dangerous Set Inner...</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.value}} />
      </div>
    );
  }
}

const SmokingHot = hot(module)(Tiny);
ReactDOM.render(<SmokingHot />, document.getElementById('root'));

