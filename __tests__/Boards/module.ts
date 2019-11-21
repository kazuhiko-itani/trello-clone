import reducer, {
  initialState,
  ActionNames,
} from '../../src/Pages/Boards/module';

test('ActionNames.ADD', () => {
  expect(
    reducer(initialState, {
      type: ActionNames.ADD,
      payload: {
        name: 'test',
      },
    }),
  ).toMatchObject({
    ...initialState,
    boards: [
      ...initialState.boards,
      {
        id: 1,
        name: 'test',
      },
    ],
  });
});
