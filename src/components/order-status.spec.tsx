import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order status', () => {
  it('should display the right text base on order status - pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    wrapper.debug() // show the generatead html

    const statusText = wrapper.getByText('Pending')
    const badgeElement = wrapper.getByTestId('badge')

    // console.log(statusText.outerHTML)
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text base on order status - canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Canceled')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text base on order status - delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    wrapper.debug() // show the generatead html

    const statusText = wrapper.getByText('Delivering')
    const badgeElement = wrapper.getByTestId('badge')

    // console.log(statusText.outerHTML)
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text base on order status - processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    wrapper.debug() // show the generatead html

    const statusText = wrapper.getByText('Processing')
    const badgeElement = wrapper.getByTestId('badge')

    // console.log(statusText.outerHTML)
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text base on order status - delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    wrapper.debug() // show the generatead html

    const statusText = wrapper.getByText('Delivered')
    const badgeElement = wrapper.getByTestId('badge')

    // console.log(statusText.outerHTML)
    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
