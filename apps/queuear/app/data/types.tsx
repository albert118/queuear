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

export interface IStatus {
  name: string;
  value: number;
}

export interface ICurrentDeploymentInfo {
  people: string[];
  team: string;
  features: string[];
  status: IStatus;
}

export const SkeletonCurrentDeploymentInfo = {
  people: ['loading...'],
  team: 'loading...',
  features: ['loading...'],
  status: { name: 'loading...', value: 0 },
} as ICurrentDeploymentInfo;

export interface IPerson {
  name: string;
}

export interface IFeature {
  name: string;
}
