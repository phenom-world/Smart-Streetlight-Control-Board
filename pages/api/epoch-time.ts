import { filePath } from '@/lib/utils';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const epochTime = req.body.epochTime;
  const jsonData = await fs.readFile(filePath, 'utf8');
  const objectData = JSON.parse(jsonData.length === 0 ? '{}' : jsonData);
  objectData.epochTime = epochTime;
  const updatedData = JSON.stringify(objectData);
  await fs.writeFile(filePath, updatedData);

  if (req.method === 'POST') {
    res.status(200).json({ data: updatedData });
  }
}
