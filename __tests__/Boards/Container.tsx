import { ActionNames } from '../../src/Pages/Boards/module';
import { ActionDispatcher } from '../../src/Pages/Boards/Container';

function mockDispatch(): jest.Mock<void, [any]> {
  return jest.fn((action: any) => {
    return;
  });
}

function initActionDispatcher(mockDispatch: any): any {
  return new ActionDispatcher(mockDispatch);
}

test('createBoard', () => {
  const dispatch = mockDispatch();
  const actionDispatcher = initActionDispatcher(dispatch);

  actionDispatcher.createBoard('test');
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0]).toMatchObject({
    type: ActionNames.ADD,
  });
});
