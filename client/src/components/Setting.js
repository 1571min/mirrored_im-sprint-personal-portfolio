import React from 'react';

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleChangeName(event) {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div className={this.props.isOpen ? 'mdl show' : 'mdl'}>
        <div className="mdl-mask" onClick={this.props.handleClose}></div>
        <div className="sidebar">
          <h3>Setting</h3>
          <hr />

          <fieldset>
            <legend>사용자 설정</legend>
            <span className="small-margin-right">사용자 이름</span>
            <input
              type="text"
              className="small-margin-right"
              value={this.state.username}
              onChange={this.handleChangeName}
            />
            <button onClick={this.props.handleClose}>닫기</button>
          </fieldset>

          <hr />
        </div>
      </div>
    );
  }
}

export default Setting;
