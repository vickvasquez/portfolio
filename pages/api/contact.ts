import type { NextApiRequest, NextApiResponse } from 'next'

import { Contact } from '@/models'
import contact from '../../data/contact.json'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Contact[]>
) {
  res.status(200).json(contact.data)
}
