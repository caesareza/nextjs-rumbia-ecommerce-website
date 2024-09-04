import { AxiosResponse } from 'axios'

export const apiRequest = async <T>(
    request: () => Promise<AxiosResponse<T>>,
    errorMessage: string
): Promise<T> => {
    try {
        const response = await request()
        return response.data
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(errorMessage, error) // Optional: Log error details
        throw new Error(errorMessage)
    }
}
