import { ParkingReceiveModule } from './parking-receive.module';

describe('ParkingReceiveModule', () => {
  let parkingReceiveModule: ParkingReceiveModule;

  beforeEach(() => {
    parkingReceiveModule = new ParkingReceiveModule();
  });

  it('should create an instance', () => {
    expect(parkingReceiveModule).toBeTruthy();
  });
});
