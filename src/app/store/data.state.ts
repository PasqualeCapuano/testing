import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Data} from './data.actions';
import { DataStateModel } from './data.model';
import { patch } from '@ngxs/store/operators';




@State<DataStateModel>({
  name: 'data',
  defaults: {
    data: false,
  }
})
export class DataState {
  constructor() {}
  
  //serve per selezionare il valore da richiamare dallo STORE
  @Selector()
  static getDataList(state: DataStateModel): {} {
    return state.data;
  }

  //è l'azione che viene dispatchata dal componente

  @Action(Data)
  public setChartType(ctx: StateContext<DataStateModel>, payload: Data) {
    ctx.setState(
      patch({
        data: payload.payload
      })
    );
  }

}