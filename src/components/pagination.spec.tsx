import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

/**
 * Spies
 */
const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  // before each to reset the spy before every test
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    wrapper.debug()

    expect(wrapper.getByText('Page 1 of 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total of 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    wrapper.debug()

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Next page',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(1) // Page 1
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    wrapper.debug()

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Previous page',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(4) // Page 1
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    wrapper.debug()

    const nextPageButton = wrapper.getByRole('button', {
      name: 'First page',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(0) // Page 1
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    wrapper.debug()

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Last page',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(19) // Page 1
  })
})
