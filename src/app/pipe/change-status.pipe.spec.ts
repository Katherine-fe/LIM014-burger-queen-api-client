import { ChangeStatusPipe } from './change-status.pipe';

describe('ChangeStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new ChangeStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
