import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addContact } from '../reducers/actions';
import { AddContactScreen } from './AddContactScreen';

const mapDispatchToProps = dispatch => bindActionCreators({ addContact }, dispatch);

export default connect(null, mapDispatchToProps)(AddContactScreen);
