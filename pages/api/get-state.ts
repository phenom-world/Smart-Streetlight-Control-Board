import { filePath } from '@/lib/utils';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await fs.readFile(`${process.cwd()}/${filePath}`, 'utf8');
  if (req.method === 'GET') {
    res.status(200).json({ data: jsonData });
  }
}
