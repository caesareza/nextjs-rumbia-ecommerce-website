export const imageURL = (image: string) => {
    const websiteURL = process.env.NEXT_PUBLIC_APP_URL

    return `${websiteURL}${image}`
}
