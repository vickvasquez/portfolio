import { Projects } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

import projects from '../../data/projects.json'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Projects[]>
) {
  res.status(200).json(projects.data)
}
