import { api } from '@/lib/axios'

export interface GetManageRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}
export async function getManageRestaurant(): Promise<GetManageRestaurantResponse> {
  const response = await api.get('/managed-restaurant')

  return response.data
}
