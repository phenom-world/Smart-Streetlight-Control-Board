import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTION') {
    res.status(200).json({ message: 'OK' });
  }
  if (req.method === 'POST') {
    res.status(200).json({ time: req.body.epochTime });
  }
}
