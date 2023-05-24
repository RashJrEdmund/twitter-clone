import styled from "@emotion/styled"

type Props = {
    text: string
}

export function HeaderTag({text}: Props) {
    const StyledHeader = styled.h2`
        color: red;
        font-size: 24px;
        font-weigth: 600;
        width: 100%;
    `

    return <StyledHeader >{text}</StyledHeader>
}
