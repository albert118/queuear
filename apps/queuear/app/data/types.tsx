export interface IPlannedDeployment {
  person: string;
  feature: string;
  strategy: string;
}

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

export interface IPerson {
  name: string;
}

export interface IFeature {
  name: string;
}
