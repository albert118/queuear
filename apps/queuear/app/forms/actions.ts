'use server';

import { revalidatePath } from 'next/cache';
import { IPlannedDeployment } from '../data/types';
import { updateDeployments } from '../data/seed';

export default async function submit(data: IPlannedDeployment) {
  if (!data) return;

  updateDeployments(data);
  revalidatePath('/');
}
