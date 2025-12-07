import { InputHTMLAttributes } from 'react'
import { Search } from 'lucide-react'
import { SearchContainer, StyledInput, SearchIcon } from './InputSearch.styles'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}

export default function InputSearch({
    placeholder = "Buscar...",
    ...props
}: InputSearchProps) {
    return (
        <SearchContainer>
            <StyledInput
                type="text"
                placeholder={placeholder}
                {...props}
            />
            <SearchIcon>
                <Search size={20} />
            </SearchIcon>
        </SearchContainer>
    )
}
