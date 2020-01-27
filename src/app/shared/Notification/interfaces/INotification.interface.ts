import { Success } from 'src/core/shared/Message/Success';

export abstract class Notification {
    abstract Show(response: any , configuration: any);
}