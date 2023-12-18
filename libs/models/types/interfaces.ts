import { Status } from './enums';

export interface IPlannedDeployment {
  person: string;
  feature: string;
  strategy: string;
}

export const SkeletonPlannedDeployment = {
  person: 'loading...',
  feature: 'loading...',
  strategy: 'loading...',
} as IPlannedDeployment;

export interface ICurrentDeploymentInfo {
  people: string[];
  team: string;
  features: string[];
  status: Status;
}

export const SkeletonCurrentDeploymentInfo = {
  people: ['loading...'],
  team: 'loading...',
  features: ['loading...'],
  status: Status.Pending, // TODO: skeleton workaround so this shows "loading..."
} as ICurrentDeploymentInfo;

export interface IPerson {
  name: string;
}

export interface IFeature {
  name: string;
}
