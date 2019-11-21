import { Boards } from './Boards';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { create } from './module';
import { ReduxAction, ReduxState } from '../../store';

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {
    this.dispatch = dispatch;
  }

  public createBoard(boardName: string) {
    this.dispatch(create(boardName));
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.Boards }),
  (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch),
  }),
)(Boards);
