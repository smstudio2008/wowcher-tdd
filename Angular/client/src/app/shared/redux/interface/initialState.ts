import { IOrders } from 'src/app/core/models/OrderInterface';

export interface InitialAppState {
  orderResult: IOrders[];
}

export const INITIAL_STATE: InitialAppState = {
  orderResult: []
};
