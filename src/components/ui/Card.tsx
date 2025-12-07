import { ReactNode } from 'react'
import {
    CardContainer,
    CardImage,
    CardContent,
    CardTitle,
    CardSubtitle
} from './Card.styles'

interface CardProps {
    image?: string
    title: string
    subtitle?: string
    onClick?: () => void
    children?: ReactNode
}

export default function Card({
    image,
    title,
    subtitle,
    onClick,
    children
}: CardProps) {
    return (
        <CardContainer onClick={onClick}>
            {image && (
                <CardImage>
                    <img src={image} alt={title} />
                </CardImage>
            )}
            <CardContent>
                <CardTitle>{title}</CardTitle>
                {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
                {children}
            </CardContent>
        </CardContainer>
    )
}
