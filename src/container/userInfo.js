import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';

const mapStateToProps = state => {
  const userInfo = state.userInfo;
  return {
    userInfo
  };
};

export default connect(mapStateToProps)(UserInfo);
