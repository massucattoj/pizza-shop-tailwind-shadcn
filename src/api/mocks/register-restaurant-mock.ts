import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../register-restaurant'

// Every time that I call the auth route will return a status code 401
// whithout body
export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()

    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, { status: 201 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
