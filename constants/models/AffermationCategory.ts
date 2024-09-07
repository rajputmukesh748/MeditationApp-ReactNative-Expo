export interface AffirmationCategory {
    title: string,
    data: GallaryPreviewData[]
}

export interface GallaryPreviewData{
    id: number,
    text: string,
    image: any
}