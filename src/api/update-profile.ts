import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string | null
}

export async function udpateProfile({ name, description }: UpdateProfileBody) {
  await api.put('/profile', { name, description })
}