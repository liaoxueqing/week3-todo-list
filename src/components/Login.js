import React, { Component } from 'react';
import { loginToServer } from '../actions/index';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div
        className="justify-content-center text-center"
        style={{ marginTop: 80 }}
      >
        <h1 className="mb-3">Login TODO</h1>
        <a
          className="btn btn-block"
          onClick={() => {
            hashHistory.push('/register');
          }}
        >
          Go To Register
        </a>
        <div className="form-group row">
          <div className="mx-auto" style={{ width: 560 }}>
            <label className="col-sm-2 col-form-label">UserName</label>
            <input
              type="text"
              name="name"
              placeholder="请输入账号"
              ref={element => {
                this.name = element;
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="mx-auto" style={{ width: 560 }}>
            <label className="col-sm-2 col-form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="请输入密码"
              ref={element => {
                this.password = element;
              }}
            />
          </div>
        </div>
        <div className="mx-auto" style={{ width: 252 }}>
          <button
            className="btn ml-1 btn-block btn-primary"
            onClick={() => {
              this.props.loginToServer(this.name, this.password);
            }}
          >
            &nbsp;&nbsp;登录
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.isLogin
  };
};
const mapDispatchToProps = {
  loginToServer
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
