// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SocialMediaModel } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

import socials from '../../data/socials.json'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<SocialMediaModel[]>
) {
  res.status(200).json(socials.data)
}
