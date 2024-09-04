import { apiRequest } from '@/api/apiRequest'
import axiosInstance from '@/api/axiosConfig'
import { ProductProps } from '@/api/product/types'

export const fetchProduct = async (): Promise<ProductProps[]> => {
    return apiRequest(
        () => axiosInstance.get<ProductProps[]>('/products'),
        'Failed to fetch products'
    )
}

export const fetchSingleProduct = async (id: number): Promise<ProductProps> => {
    return apiRequest(
        () => axiosInstance.get<ProductProps>(`/products/${id}`),
        'Failed to fetch single products'
    )
}
