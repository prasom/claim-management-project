import { DbEffects } from './db.effects';
import { InsureEffects } from './insure.effects';
import { TypeOfCarEffects } from './type-of-car.effects';
import { CustomerEffects } from './customer.effects';
import { SettingEffects } from './setting.effects';
import { BillEffects } from './bill.effects';

export const effects: any[] = [DbEffects, InsureEffects, TypeOfCarEffects, CustomerEffects, SettingEffects, BillEffects];

export * from './db.effects';
export * from './insure.effects';
export * from './customer.effects';
export * from './setting.effects';
export * from './type-of-car.effects';
export * from './insure.effects';
