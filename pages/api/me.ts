// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '@/models/me.model'

import data from '../../data/me.json'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
