import type { NextApiRequest, NextApiResponse } from 'next'

import { About } from '@/models'
import data from '../../data/about.json'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<About>
) {
  res.status(200).json(data)
}
