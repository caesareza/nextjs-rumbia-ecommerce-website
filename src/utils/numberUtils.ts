export const formatRupiah = (value?: number) => {
    if (!value && value !== 0) return ''

    return new Intl.NumberFormat(`id-ID`, {
        currency: `IDR`,
        style: 'currency',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(value)
}
