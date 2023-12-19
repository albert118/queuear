import { useFetch } from '../fetch/useFetch';
import {
  CurrentDeployment,
  Deployment,
  GitHubBranch,
  PersonDetail,
  FeatureSummary,
  TeamDetail,
} from '@queuear/models';

// TODO:
const defaultExampleBranchUrl = 'https://github.com/albert118/queuear/branches';

export default async function useCurrentDeployment(): Promise<CurrentDeployment> {
  const { get } = useFetch();
  const deployment = (await get('api/deployments')) as Deployment;

  const branchDetail = {
    name: deployment.branchName,
    url: new URL(defaultExampleBranchUrl),
  } as GitHubBranch;

  return {
    DeploymentStatus: deployment.serverStatus,
    Features: [] as FeatureSummary[],
    People: [] as PersonDetail[],
    Teams: [] as TeamDetail[],
    DeployedAt: deployment.deployedAt
      ? new Date(deployment.deployedAt)
      : new Date(Date.now()),
    BranchName: branchDetail,
  };
}
